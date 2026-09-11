// Public contact details shared by the homepage, vCard and contact page.
export const contact = {
  name: { hu: 'Molnár Dávid', en: 'David Molnar' },
  role: { hu: 'Senior szoftvermérnök', en: 'Senior Software Engineer' },
  email: 'hello@davidmolnar.dev',
  phone: '+36705950579',
  phoneDisplay: '+36 70 595 0579',
  website: 'https://davidmolnar.dev',
  calendly: 'https://calendly.com/hello-davidmolnar/30min',
  github: 'https://github.com/molnard',
  telegram: 'https://t.me/molnardavid84',
  signal: 'https://signal.me/#eu/G6UHhXxigQYhVg1ojbbVlEqiZWffC-rUKPZ5QC0HRji6G0H1yxBGmYU5Cm-VIIt-',
  signalName: 'davidmolnar.84',
  signalQr: '/images/signal-username-qr-code.png',
  nostr: 'npub1m5wnxshsq5q06hjha53h4f2vxm0d0rx4wcuxxw35uc9hnsap6myqhx3s8c',
  pgpFingerprint: 'F079 0C08 68BD BAB8 EE33 F9CE 50FB 7FEB 00F9 7588',
  pgpKey: '/pgp.txt',
} as const;

export const payments = {
  bitcoin: 'bc1q7k9lxd4uyngvazckvtgxrp9mx6g704q0le0nyx',
  silent: 'sp1qq03fz2reeuumvr3sc3mf6rehdtdrx43xgflagndr6uzhycajst4ccq6cc2x6zh6tqa24jj8te64ytdt7u8cq5cgnmkm3ldldnevmp4ntkua0aqxj',
  lightning: 'molnard@cake.cash',
} as const;
