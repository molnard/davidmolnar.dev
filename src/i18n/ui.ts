export const languages = {
  en: 'English',
  hu: 'Magyar',
} as const;

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    'nav.contact': 'Contact',

    'hero.eyebrow': "Hi, I am David Molnar",
    'hero.headline': 'I build useful things with software, hardware, and Bitcoin.',
    'hero.sub': "I am a senior software engineer with over 15 years of experience. I build desktop and web applications, client–server systems and embedded software. My work also includes automation and open-source Bitcoin development.",
    'hero.cta.work': "What I do",
    'hero.cta.contact': "Contact",
    'hero.photo.alt': "David Molnar smiling in a bright interior",



    'proof.aria': 'Professional highlights',
    'proof.experience.value': '15+ years',
    'proof.experience.label': 'Software engineering',
    'proof.experience.meta': 'From firmware to distributed systems',

    'comp.title': 'What I do',

    'comp.bitcoin.tag': '01 — Bitcoin',
    'comp.bitcoin.title': "Bitcoin — development and privacy",
    'comp.bitcoin.short': "Open-source Bitcoin applications, client–server systems and protocol integration. Privacy-aware software design.",
    'comp.bitcoin.detail': "I develop open-source Bitcoin software: desktop clients, backend services and protocol integrations. My work connects user interfaces, data storage and network communication. Privacy influences how I design these systems, including which information components can access and what is transmitted or stored.",

    'comp.software.tag': '02 — Software',
    'comp.software.title': 'Software engineering',
    'comp.software.short': "C# and .NET — desktop and web applications, client–server architecture, databases and device integration.",
    'comp.software.detail': "I started programming around the age of ten on a Commodore 64, learning BASIC from my father’s books, then moved on to Turbo Pascal. That curiosity led to a computer engineering degree specialising in microelectronics. Today I develop complete client–server systems, from desktop and web interfaces to backend services, databases, testing and releases.",

    'comp.firmware.tag': '03 — Firmware',
    'comp.firmware.title': "Firmware and embedded systems",
    'comp.firmware.short':
      'ESP32, STM32, Atmel, nRF52. Bluetooth modules, displays, MP3 chips, SD card. Battery-powered handhelds.',
    'comp.firmware.detail': "I develop firmware for handheld and desktop instruments, controllers and connected devices. I work with electrical engineers from requirements and schematics through prototypes, testing and manufacturing support. The device software and its connected PC application can be designed together, keeping communication and behaviour consistent across the system.",

    'comp.smarthome.tag': '04 — Smart home',
    'comp.smarthome.title': "Smart home and automation",
    'comp.smarthome.short': "Home Assistant, Homey, Zigbee. Software integration, control logic, state monitoring and remote access.",
    'comp.smarthome.detail': "I work on the software behind smart homes and building automation. I connect sensors, controllers and applications using Home Assistant, Homey and Zigbee devices. The focus is control logic: which events trigger actions, how several devices work together, and how manual control fits with automation. State monitoring, user interfaces and remote access make the system’s behaviour understandable.",


    'comp.bitcoin.alt': 'Bitcoin node and hardware wallet on a dark desk',
    'comp.software.alt': 'Multi-monitor developer workstation with code editors',
    'comp.firmware.alt': 'PCB, partly disassembled handheld device, oscilloscope and soldering tools',
    'comp.smarthome.alt': 'Electrical cabinet with control modules and a wall-mounted touch panel',









    'elsewhere.title': 'Elsewhere',

    'contact.title': 'Get in touch',
    'contact.body':
      'Open to interesting collaborations, consulting, and conversations. English or Hungarian.',


    'contact.calendly': "Book a 30-min call",
    'contact.copy': 'Copy',
    'contact.copied': 'Copied',
    'contact.email.label': 'Email',
    'contact.nostr.label': 'Nostr',
    'contact.pgp.label': 'PGP',
    'contact.pgp.viewkey': 'View public key',

    'footer.legal': 'Sole trader · Hungary',
    'footer.bitcoin': 'Bitcoin accepted',
    'footer.built': 'Built with care. Source on',
    'footer.privacy': 'Privacy',

    'comp.page.back': '← Back',

  },
  hu: {
    'nav.contact': 'Kapcsolat',

    'hero.eyebrow': "Szia, Molnár Dávid vagyok",
    'hero.headline': 'Hasznos dolgokat építek szoftverből, hardverből és Bitcoinból.',
    'hero.sub': "Senior szoftvermérnök vagyok, több mint 15 év tapasztalattal. Asztali és webes alkalmazásokat, kliens–szerver rendszereket és beágyazott szoftvereket fejlesztek. Automatizálással és nyílt forráskódú Bitcoin-fejlesztéssel is foglalkozom.",
    'hero.cta.work': "Amivel foglalkozom",
    'hero.cta.contact': "Kapcsolat",
    'hero.photo.alt': "Molnár Dávid egy világos belső térben",

    'proof.aria': 'Szakmai eredmények',
    'proof.experience.value': '15+ év',
    'proof.experience.label': 'Szoftverfejlesztés',
    'proof.experience.meta': 'Firmware-től az elosztott rendszerekig',

    'comp.title': 'Amivel foglalkozom',

    'comp.bitcoin.tag': '01 — Bitcoin',
    'comp.bitcoin.title': "Bitcoin — fejlesztés és adatvédelem",
    'comp.bitcoin.short': "Nyílt forráskódú Bitcoin-alkalmazások, kliens–szerver rendszerek és protokollintegráció. Adatvédelmi szempontok a szoftvertervezésben.",
    'comp.bitcoin.detail': "Nyílt forráskódú Bitcoin-szoftvereket fejlesztek: asztali klienseket, háttérszolgáltatásokat és protokollintegrációkat. A munkám összeköti a felhasználói felületet, az adattárolást és a hálózati kommunikációt. A tervezés része az adatvédelem is: melyik komponens milyen információhoz fér hozzá, és mi kerül továbbításra vagy tárolásra.",

    'comp.software.tag': '02 — Szoftver',
    'comp.software.title': 'Szoftverfejlesztés',
    'comp.software.short': "C# és .NET — asztali és webes alkalmazások, kliens–szerver architektúra, adatbázisok és eszközintegráció.",
    'comp.software.detail': "Tízéves korom körül kezdtem programozni egy Commodore 64-en, édesapám könyveiből, BASIC nyelven. Később Turbo Pascal következett, majd informatikus mérnöki diploma, mikroelektronika szakiránnyal. Ma teljes kliens–szerver rendszereken dolgozom: az asztali és webes felületektől a háttérszolgáltatásokon és adatbázisokon át a tesztelésig és a kiadásokig.",

    'comp.firmware.tag': '03 — Firmware',
    'comp.firmware.title': "Firmware és beágyazott rendszerek",
    'comp.firmware.short':
      'ESP32, STM32, Atmel, nRF52. Bluetooth modulok, kijelző, MP3 chip, SD kártya. Akkumulátoros kézi készülékek.',
    'comp.firmware.detail': "Kézi és asztali műszerekhez, vezérlőegységekhez és hálózatba kapcsolt eszközökhöz fejlesztek firmware-t. Villamosmérnökökkel együtt dolgozom a követelményektől és a kapcsolási rajztól a prototípuson, tesztelésen át a gyártás támogatásáig. Az eszköz szoftvere és a hozzá kapcsolódó PC-s alkalmazás együtt tervezhető, így a kommunikáció és a működés a teljes rendszerben összehangolt marad.",

    'comp.smarthome.tag': '04 — Okosotthon',
    'comp.smarthome.title': "Okosotthon és automatizálás",
    'comp.smarthome.short': "Home Assistant, Homey, Zigbee. Szoftveres integráció, vezérlési logika, állapotkövetés és távoli elérés.",
    'comp.smarthome.detail': "Az okosotthonok és az épületautomatizálás szoftveres oldalával foglalkozom. Szenzorokat, vezérlőket és alkalmazásokat kapcsolok össze Home Assistant, Homey és Zigbee-eszközök segítségével. A középpontban a vezérlési logika áll: milyen eseményre mi történjen, hogyan működjenek együtt az eszközök, és hogyan illeszkedjen a kézi vezérlés az automatizáláshoz. Az állapotkövetés, a kezelőfelületek és a távoli elérés teszik átláthatóvá a rendszer működését.",


    'comp.bitcoin.alt': 'Bitcoin node és hardware wallet sötét asztalon',
    'comp.software.alt': 'Több monitoros fejlesztői munkaállomás kód szerkesztőkkel',
    'comp.firmware.alt': 'PCB, félig szétszerelt kézikészülék, oszcilloszkóp és forrasztási eszközök',
    'comp.smarthome.alt': 'Elektromos szekrény vezérlő modulokkal és egy fali touch panel',








    'elsewhere.title': 'Máshol',

    'contact.title': 'Kapcsolat',
    'contact.body':
      'Nyitott vagyok érdekes együttműködésekre, tanácsadásra és beszélgetésekre. Angolul és magyarul egyaránt.',


    'contact.calendly': "Időpontfoglalás — 30 perc",
    'contact.copy': 'Másolás',
    'contact.copied': 'Kimásolva',
    'contact.email.label': 'Email',
    'contact.nostr.label': 'Nostr',
    'contact.pgp.label': 'PGP',
    'contact.pgp.viewkey': 'Publikus kulcs megtekintése',

    'footer.legal': 'Egyéni vállalkozó · Magyarország',
    'footer.bitcoin': 'Bitcoin elfogadva',
    'footer.built': 'Készítve gonddal. Forrás:',
    'footer.privacy': 'Adatkezelés',

    'comp.page.back': '← Vissza',

  },
} as const;
