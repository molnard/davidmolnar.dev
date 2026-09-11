import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const files = await walk(root);
const relative = files.map(file => path.relative(root, file).replaceAll('\\', '/'));
const fileSet = new Set(relative);
const forbidden = /wasabi|ginger[\s_-]*wallet|zksnacks?|fetaphon|coinjoin[\s_-]*magnet|license[\s_-]*plate[\s_-]*monitoring|3d[\s_-]*(printing|nyomtatás)|algora/iu;
const formerSlugs = ['bitcoin-privacy-workflow', 'coinjoin-magnet', 'fetaphon', 'ginger-wallet', 'license-plate-monitoring-system', 'nfc-business-card', 'wasabi-wallet'];
const retiredRoutes = ['', '/hu'].flatMap(prefix => [
  ...['automation', '3d-printing', 'projects'].map(slug => `${prefix}/${slug}/`),
  ...formerSlugs.map(slug => `${prefix}/projects/${slug}/`),
]);

for (const name of relative) {
  assert(!forbidden.test(name), `Retired identity in file path: ${name}`);
  assert(!/^(?:hu\/)?(?:projects|automation|3d-printing)\//u.test(name), `Retired route in build: ${name}`);
  assert(!/^images\/(?:projects|expertise)\/(?!\.gitkeep$)/u.test(name), `Retired image in build: ${name}`);
  if (/\.(?:html|css|js|json|xml|txt|svg|vcf|map)$/u.test(name)) {
    const content = await readFile(path.join(root, name), 'utf8');
    assert(!forbidden.test(content), `Retired identity in served content: ${name}`);
  }
}

const htmlFiles = relative.filter(file => file.endsWith('.html'));
for (const name of htmlFiles) {
  const html = await readFile(path.join(root, name), 'utf8');
  const route = name === 'index.html' ? '/' : name.replace(/index\.html$/u, '');
  const base = new URL(route, 'http://local.test/');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gu)) {
    const value = match[1].replaceAll('&amp;', '&');
    const url = new URL(value, base);
    if (url.origin !== base.origin) continue;
    const pathname = decodeURIComponent(url.pathname).replace(/^\//u, '');
    const candidates = [pathname, `${pathname.replace(/\/$/u, '')}/index.html`];
    if (!pathname) candidates.push('index.html');
    assert(candidates.some(candidate => fileSet.has(candidate)), `${name}: broken local link ${value}`);
  }
  assert(!/src="https?:\/\//u.test(html), `${name}: unexpected externally loaded resource in local build`);
}

for (const [name, language] of [['index.html', 'en'], ['hu/index.html', 'hu']]) {
  const html = await readFile(path.join(root, name), 'utf8');
  assert(html.includes(`<html lang="${language}">`), `${name}: wrong language`);
  assert(/<details class="email-reveal">/u.test(html), `${name}: email should start collapsed`);
  assert(html.includes('https://github.com/molnard'), `${name}: missing professional profile`);
  assert(html.includes('https://t.me/molnardavid84'), `${name}: wrong Telegram link`);
  assert(html.includes('G6UHhXxigQYhVg1ojbbVlEqiZWffC-rUKPZ5QC0HRji6G0H1yxBGmYU5Cm-VIIt-'), `${name}: incomplete Signal link`);
}
const card = await readFile(path.join(root, 'contact.vcf'), 'utf8');
const areaRoutes = [];
for (const prefix of ['', '/hu']) {
  const home = await readFile(path.join(root, prefix ? 'hu/index.html' : 'index.html'), 'utf8');
  for (const slug of ['software', 'firmware', 'smarthome', 'bitcoin']) {
    const route = `${prefix}/${slug}/`;
    areaRoutes.push(route);
    assert(home.includes(`href="${route}"`), `Homepage must link to ${route}`);
    const html = await readFile(path.join(root, route.slice(1), 'index.html'), 'utf8');
    assert(html.includes(`<html lang="${prefix ? 'hu' : 'en'}">`), `${route}: wrong language`);
    assert(html.includes(`href="${prefix ? '' : '/hu'}/${slug}/"`), `${route}: language switch must keep the area`);
    assert(html.includes('<h1'), `${route}: missing page heading`);
    assert(!html.includes('/projects/'), `${route}: project link must be removed`);
    for (const match of html.matchAll(/href="#([^"]+)"/gu)) {
      assert(html.includes(`id="${match[1]}"`), `${route}: broken section anchor ${match[1]}`);
    }
  }
}
assert(!/(?<!\r)\n/u.test(card), 'vCard must use CRLF');
assert(card.split('\r\n').every(line => Buffer.byteLength(line) <= 75), 'vCard UTF-8 line folding');
const unfolded = card.replace(/\r\n /gu, '');
for (const value of ['FN:Molnár Dávid', 'TITLE:Senior Software Engineer', 'TEL;TYPE=CELL:+36705950579', 'EMAIL;TYPE=INTERNET:hello@davidmolnar.dev']) assert(unfolded.includes(value), `Missing vCard field: ${value}`);
const redirect = await readFile(path.join(root, 'cardurl/index.html'), 'utf8');
assert(redirect.includes('url=/addcontact'), 'NFC meta redirect must be relative');
assert(redirect.includes('targetUrl = "/addcontact"'), 'NFC JS redirect must be relative');
assert((await stat(path.join(root, 'og.png'))).size > 1000, 'Missing social preview image');

// Optional HTTP check against the local static preview, including genuine 404 responses.
if (process.env.CHECK_BASE_URL) {
  const base = new URL(process.env.CHECK_BASE_URL);
  assert(['localhost', '127.0.0.1', '[::1]'].includes(base.hostname), 'Checks must stay local');
  const oldImages = [
    '/images/projects/wasabi-wallet-hero.webp', '/images/projects/ginger-wallet-card.webp',
    '/images/projects/fetaphon-desktop-showcase.webp', '/images/expertise/software.webp',
  ];
  for (const route of [...retiredRoutes, ...oldImages]) {
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 404, `${route} must return HTTP 404`);
    if (route.endsWith('/')) assert((await response.text()).includes('Magyar főoldal'), `${route}: missing custom 404 navigation`);
  }
  for (const route of ['/', '/hu/', ...areaRoutes, '/privacy/', '/hu/privacy/', '/bitcoin-accepted/', '/hu/bitcoin-accepted/', '/cardurl/', '/addcontact/', '/hu/addcontact/', '/contact.vcf', '/og.png', '/images/signal-username-qr-code.png']) {
    assert.equal((await fetch(new URL(route, base))).status, 200, `${route} must be reachable`);
  }
}
console.log(`Passed: ${htmlFiles.length} HTML pages, ${files.length} output files; content removal, local links, contacts, vCard and NFC.${process.env.CHECK_BASE_URL ? ' HTTP routes and retired URLs also verified.' : ''}`);
