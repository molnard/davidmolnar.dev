export const languages = {
  en: 'English',
  hu: 'Magyar',
} as const;

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'David Molnar — software · hardware · Bitcoin · open source',
    'hero.headline': 'Software, hardware, and Bitcoin privacy tools.',
    'hero.sub':
      'Senior software engineer with 15+ years shipping distributed systems, embedded hardware, and Bitcoin privacy software. Former CTO at Wasabi Wallet, now working as an independent contractor on Ginger Wallet, Fetaphon, TESCO, AGIS, and more. Budapest, Hungary.',
    'hero.cta.work': 'See my work',
    'hero.cta.contact': 'Get in touch',

    'pillars.title': 'What I do',
    'pillars.software.title': 'Software engineering',
    'pillars.software.body':
      'Senior engineer. Distributed systems, backend, desktop — pragmatic, product-minded.',
    'pillars.embedded.title': 'Embedded systems',
    'pillars.embedded.body':
      'Custom handheld devices from schematic through firmware — display, MP3/SD audio, Bluetooth, battery. Audio guides, wellness and bioresonance hardware, and other purpose-built electronics.',
    'pillars.oss.title': 'Bitcoin & privacy',
    'pillars.oss.body':
      'Bitcoin privacy infrastructure. Former CTO at Wasabi Wallet, now lead dev on Ginger Wallet. Open-source protocols that respect the user.',
    'pillars.print.title': '3D printing & industrial parts',
    'pillars.print.body':
      'Functional parts — gears, enclosures, and custom branded pieces like fridge magnets, keychains, and promo items.',
    'pillars.smarthome.title': 'Smart home',
    'pillars.smarthome.body':
      'Home Assistant, Homey, KNX — design, deployment, and advisory for smart-home systems.',

    'work.title': 'Selected work',

    'work.wasabi.title': 'Wasabi Wallet',
    'work.wasabi.role': 'Former CTO',
    'work.wasabi.desc':
      'Open-source Bitcoin privacy wallet. Six years as core contributor and CTO, 4,600+ commits, deep CoinJoin protocol work.',

    'work.ginger.title': 'Ginger Wallet',
    'work.ginger.role': 'Lead developer',
    'work.ginger.desc':
      'Privacy-first Bitcoin wallet. Open source. Currently the architecture and core engineering.',

    'work.fetaphon.title': 'Fetaphon',
    'work.fetaphon.role': 'Firmware & hardware',
    'work.fetaphon.desc':
      'Medical device for expecting mothers — a battery-powered, handheld fetal heartbeat monitor. Full schematic and firmware.',

    'work.tesco.title': 'TESCO',
    'work.tesco.role': 'Independent contractor',
    'work.tesco.desc':
      'Software development and engineering consulting for a European retail giant.',

    'work.agis.title': 'AGIS',
    'work.agis.role': 'Independent contractor',
    'work.agis.desc':
      'Security-systems integration work for enterprise clients.',

    'about.title': 'About',
    'about.body':
      'I\u2019m David Molnar, a senior software engineer based in Budapest. 15+ years shipping distributed systems, embedded hardware, and Bitcoin privacy software. I spent six years at Wasabi Wallet, eventually as CTO, building one of the most widely used Bitcoin privacy wallets \u2014 4,600+ commits across the protocol and client. Today I work as an independent contractor on several parallel projects, including Ginger Wallet, Fetaphon, TESCO, and AGIS. I take on hard problems: protocol-level Bitcoin privacy, battery-powered embedded devices that have to run for years, and industrial parts with real tolerances.',

    'partners.title': 'Worked with',

    'elsewhere.title': 'Elsewhere',

    'contact.title': 'Get in touch',
    'contact.body':
      'Open to interesting collaborations, consulting, and conversations. English or Hungarian.',

    'footer.built': 'Built with care. Source on',
  },
  hu: {
    'nav.work': 'Munka',
    'nav.about': 'Rólam',
    'nav.contact': 'Kapcsolat',

    'hero.eyebrow': 'David Molnar — szoftver · hardver · Bitcoin · open source',
    'hero.headline': 'Szoftver, hardver és Bitcoin privacy eszközök.',
    'hero.sub':
      'Senior szoftverfejlesztő 15+ év tapasztalattal — elosztott rendszerek, embedded hardver és Bitcoin privacy szoftverek. Korábban CTO a Wasabi Walletnél, ma független szoftverfejlesztő egyéni vállalkozóként — Ginger Wallet, Fetaphon, TESCO, AGIS és további projektek. Budapest.',
    'hero.cta.work': 'Munkáim',
    'hero.cta.contact': 'Kapcsolat',

    'pillars.title': 'Amivel foglalkozom',
    'pillars.software.title': 'Szoftverfejlesztés',
    'pillars.software.body':
      'Senior fejlesztő. Elosztott rendszerek, backend, desktop — pragmatikus, termékszemlélettel.',
    'pillars.embedded.title': 'Embedded rendszerek',
    'pillars.embedded.body':
      'Egyedi tervezésű, kézi készülékek kapcsolási rajztól firmware-ig — kijelző, MP3/SD hang, Bluetooth, akku. Audio guide készülékek, wellness és biorezonanciás hardverek, és más célirányos elektronika.',
    'pillars.oss.title': 'Bitcoin és privacy',
    'pillars.oss.body':
      'Bitcoin privacy infrastruktúra. Korábban CTO a Wasabi Walletnél, jelenleg fő fejlesztő a Ginger Walleten. Nyílt forrású protokollok amik tisztelik a felhasználót.',
    'pillars.print.title': '3D nyomtatás és ipari alkatrészgyártás',
    'pillars.print.body':
      'Funkcionális alkatrészek — fogaskerekek, burkolatok, és egyedi marketing tárgyak: hűtőmágnesek, kulcstartók, promo darabok.',
    'pillars.smarthome.title': 'Okosotthon',
    'pillars.smarthome.body':
      'Home Assistant, Homey, KNX — tervezés, kivitelezés és tanácsadás okosotthon rendszerekhez.',

    'work.title': 'Válogatott munkák',

    'work.wasabi.title': 'Wasabi Wallet',
    'work.wasabi.role': 'Korábbi CTO',
    'work.wasabi.desc':
      'Nyílt forrású Bitcoin privacy wallet. Hat év core contributorként és CTO-ként, 4600+ commit, mély CoinJoin protokoll munka.',

    'work.ginger.title': 'Ginger Wallet',
    'work.ginger.role': 'Fő fejlesztő',
    'work.ginger.desc':
      'Privacy-fókuszú Bitcoin wallet. Open source. Jelenleg az architektúra és a core engineering.',

    'work.fetaphon.title': 'Fetaphon',
    'work.fetaphon.role': 'Firmware és hardver',
    'work.fetaphon.desc':
      'Orvosi műszer kismamáknak — akkumulátoros, kézi magzati szívhangvizsgáló. Teljes hardver és firmware.',

    'work.tesco.title': 'TESCO',
    'work.tesco.role': 'Független szerződéses',
    'work.tesco.desc':
      'Szoftverfejlesztési és mérnöki tanácsadás egy európai retail óriás számára.',

    'work.agis.title': 'AGIS',
    'work.agis.role': 'Független szerződéses',
    'work.agis.desc':
      'Biztonságtechnikai rendszerintegráció vállalati ügyfelek részére.',

    'about.title': 'Rólam',
    'about.body':
      'David Molnar vagyok, senior szoftverfejlesztő Budapestről. Több mint 15 éve építek elosztott rendszereket, embedded hardvert és Bitcoin privacy szoftvereket. Hat évet töltöttem a Wasabi Walletnél, végül CTO-ként — a világ egyik legszélesebb körben használt Bitcoin privacy wallete, 4600+ commit a protokollban és a kliensben. Ma független szoftverfejlesztőként, egyéni vállalkozóként dolgozom párhuzamosan több projekten — többek között a Ginger Walleten, a Fetaphonon, a TESCO-nál és az AGIS-nál. Szeretem a kihívásokat: protokollszintű Bitcoin privacy, akkumulátoros embedded rendszerek amik évekig üzem nélkül kell fussanak, és ipari alkatrészek valós tűréshatárokkal.',

    'partners.title': 'Akikkel együtt dolgoztam',

    'elsewhere.title': 'Máshol',

    'contact.title': 'Kapcsolat',
    'contact.body':
      'Nyitott vagyok érdekes együttműködésekre, tanácsadásra és beszélgetésekre. Angolul és magyarul egyaránt.',

    'footer.built': 'Készítve gonddal. Forrás:',
  },
} as const;
