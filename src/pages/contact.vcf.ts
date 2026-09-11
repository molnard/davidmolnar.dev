import type { APIRoute } from 'astro';
import { contact } from '../config/contact';

export const prerender = true;
const escapeValue = (value: string) => value.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');

// vCard 3.0 folds at 75 UTF-8 octets, without splitting a Unicode character.
function foldLine(line: string): string {
  const encoder = new TextEncoder();
  let output = '';
  let bytes = 0;
  for (const character of line) {
    const size = encoder.encode(character).length;
    if (bytes + size > 75) { output += '\r\n '; bytes = 1; }
    output += character;
    bytes += size;
  }
  return output;
}

export const GET: APIRoute = () => {
  const lines = [
    'BEGIN:VCARD', 'VERSION:3.0', 'N:Molnar;David;;;',
    `FN:${escapeValue(contact.name.hu)}`, 'ORG:davidmolnar.dev',
    `TITLE:${contact.role.en}`, `ROLE:${contact.role.en}`,
    `TEL;TYPE=CELL:${contact.phone}`, `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${contact.website}`, `PHOTO;VALUE=URI:${contact.website}/images/david-molnar-contact.jpg`,
    `NOTE:${escapeValue('Szoftvermérnök. Kliens–szerver architektúra, asztali és webes alkalmazások, beágyazott rendszerek, automatizálás, Bitcoin és nyílt forráskódú fejlesztés.')}`,
    'END:VCARD',
  ];
  return new Response(lines.map(foldLine).join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8', 'Content-Disposition': 'attachment; filename="Molnar-David.vcf"' },
  });
};
