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
      'Senior software engineer with 15+ years building software, 8 of them on Bitcoin privacy. Former CTO at Wasabi Wallet, now an independent contractor on Ginger Wallet, Fetaphon, TESCO, AGIS, and more. Budapest, Hungary.',
    'hero.cta.work': 'See my work',
    'hero.cta.contact': 'Get in touch',

    'comp.title': 'What I do',

    'comp.bitcoin.tag': '01 — Bitcoin',
    'comp.bitcoin.title': 'Bitcoin — development, privacy, mentoring',
    'comp.bitcoin.short':
      '8 years of active Bitcoin development since 2018. Wasabi ex-CTO and CoinJoin protocol work. Privacy, security, non-custodial.',
    'comp.bitcoin.detail':
      'Active Bitcoin developer since 2018. Six years at Wasabi Wallet as core contributor and CTO — 4,600+ commits, deep work on the CoinJoin protocol. Now lead developer on Ginger Wallet. Focus: privacy, security, and non-custodial solutions. Typical services for clients: wallet generation and safe seed-phrase storage, hardware wallet onboarding (Trezor, Coldcard, Ledger), Bitcoin buy / sell / conversion to fiat (exchanges and non-custodial options), sending and receiving, CoinJoin via Ginger Wallet and Wasabi Wallet, Bitcoin acceptance support for merchants, Lightning, and full node setup. Mentoring from beginners (how to store, buy, which wallets to choose, what to watch out for) to power users.',

    'comp.software.tag': '02 — Software',
    'comp.software.title': 'Software engineering',
    'comp.software.short':
      '.NET, C#, plus the surrounding stack — desktop, client-server, web, hardware/API integration. Team mentoring and open source.',
    'comp.software.detail':
      '15+ years as a software engineer. Primary stack: .NET and C# — Avalonia desktop apps, ASP.NET Core backends, distributed systems. Comfortable across desktop, client-server, web, and hardware/API integration. Familiar with C++, Rust, Python, TypeScript, Swift, JavaScript, and shell where the job needs it. Mentoring developers, leading small teams, project management. Open-source contribution is something I care about — mainly Bitcoin privacy projects (Wasabi, Ginger, NBitcoin, WabiSabi), but I am open to other meaningful open-source work.',

    'comp.firmware.tag': '03 — Firmware',
    'comp.firmware.title': 'Firmware & embedded',
    'comp.firmware.short':
      'ESP32, STM32, Atmel, nRF52. Bluetooth modules, displays, MP3 chips, SD card. Battery-powered handhelds.',
    'comp.firmware.detail':
      'Custom firmware design and development from PCB schematics, plus modification of existing firmware. Microcontroller experience: ESP32, STM32 (Atollic TrueStudio toolchain), Atmel, nRF52. Bluetooth module programming, display drivers for handheld devices, MP3 chip integration, SD card storage. Battery-powered handhelds with displays, audio playback, and Bluetooth. Tight integration of electronics and firmware. Concrete products: the Fetaphon medical device for expecting mothers (a handheld fetal heartbeat monitor), audio guide devices, desktop and handheld wellness products, and bioresonance hardware.',

    'comp.smarthome.tag': '04 — Smart home',
    'comp.smarthome.title': 'Smart home & electrical',
    'comp.smarthome.short':
      'Home Assistant, Homey, Zigbee. Homes and building automation, remote access, monitoring, AI.',
    'comp.smarthome.detail':
      'Electrical work and smart home device installation and integration. Home Assistant and Homey systems for both homes and building automation, with Zigbee as the primary mesh. Remote access, monitoring, automations, and AI integration into the system. Typical jobs: a full smart-home layer for new construction, or retrofitting an existing home.',

    'comp.print.tag': '05 — 3D printing',
    'comp.print.title': '3D printing & industrial parts',
    'comp.print.short':
      'Bambu X1C printing up to 1,000-piece runs. Multi-color, PLA, PETG, ASA, ABS, carbon and glass fiber.',
    'comp.print.detail':
      '3D printing on a Bambu X1C, up to 1,000-piece runs. Multi-color printing in PLA, PETG, ASA, ABS, carbon-fiber, and glass-fiber filaments. Custom part design and replacement manufacturing with real tolerances — gears, enclosures, brackets. Marketing object design and production: fridge magnets, keychains, branded items, promo pieces.',

    'comp.bitcoin.alt': 'Bitcoin node and hardware wallet on a dark desk',
    'comp.software.alt': 'Multi-monitor developer workstation with code editors',
    'comp.firmware.alt': 'PCB, partly disassembled handheld device, oscilloscope and soldering tools',
    'comp.smarthome.alt': 'Electrical cabinet with control modules and a wall-mounted touch panel',
    'comp.print.alt': 'Enclosed 3D printer printing an industrial bracket, with filament spools and calipers',


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
      'I’m David Molnar, a senior software engineer based in Budapest. 15+ years building software — distributed systems, embedded hardware, and (since 2018) Bitcoin privacy tools. I spent six years at Wasabi Wallet, eventually as CTO, building one of the most widely used Bitcoin privacy wallets — 4,600+ commits across the protocol and client. Today I work as an independent contractor on several parallel projects, including Ginger Wallet, Fetaphon, TESCO, and AGIS. I take on hard problems: protocol-level Bitcoin privacy, battery-powered embedded devices that have to run for years, and industrial parts with real tolerances.',

    'elsewhere.title': 'Elsewhere',

    'contact.title': 'Get in touch',
    'contact.body':
      'Open to interesting collaborations, consulting, and conversations. English or Hungarian.',


    'contact.copy': 'Copy',
    'contact.copied': 'Copied',
    'contact.email.label': 'Email',
    'contact.nostr.label': 'Nostr',
    'contact.pgp.label': 'PGP',
    'contact.pgp.viewkey': 'View public key',

    'footer.built': 'Built with care. Source on',
  },
  hu: {
    'nav.work': 'Munka',
    'nav.about': 'Rólam',
    'nav.contact': 'Kapcsolat',

    'hero.eyebrow': 'David Molnar — szoftver · hardver · Bitcoin · open source',
    'hero.headline': 'Szoftver, hardver és Bitcoin privacy eszközök.',
    'hero.sub':
      'Senior szoftverfejlesztő 15+ év tapasztalattal, ebből 8 év aktív Bitcoin fejlesztés. Korábban CTO a Wasabi Walletnél, ma független szoftverfejlesztő egyéni vállalkozóként — Ginger Wallet, Fetaphon, TESCO, AGIS és további projektek. Budapest.',
    'hero.cta.work': 'Munkáim',
    'hero.cta.contact': 'Kapcsolat',

    'comp.title': 'Amivel foglalkozom',

    'comp.bitcoin.tag': '01 — Bitcoin',
    'comp.bitcoin.title': 'Bitcoin — fejlesztés, privacy, mentorálás',
    'comp.bitcoin.short':
      '8 év aktív Bitcoin fejlesztés 2018 óta. Wasabi ex-CTO, CoinJoin protokoll. Privacy, biztonság, non-custodial.',
    'comp.bitcoin.detail':
      '2018 óta aktív Bitcoin fejlesztő. Hat évet töltöttem a Wasabi Walletnél core contributorként és CTO-ként — 4600+ commit, mély CoinJoin protokoll munka. Jelenleg a Ginger Wallet fő fejlesztője vagyok. Fókusz: privacy, biztonság, non-custodial megoldások. Tipikus szolgáltatások ügyfeleknek: wallet generálás és recovery seed biztonságos tárolása, hardware wallet bevezetés (Trezor, Coldcard, Ledger), Bitcoin vásárlás / eladás / váltás fiatra (tőzsdék és non-custodial megoldások), küldés és fogadás, CoinJoin Ginger Wallet és Wasabi Wallet használatával, Bitcoin elfogadás támogatása kereskedőknek, Lightning, full node telepítés. Mentorálás kezdőtől (hogyan tárold, vegyél, milyen walletek vannak, mire kell odafigyelni) power user-ig.',

    'comp.software.tag': '02 — Szoftver',
    'comp.software.title': 'Szoftverfejlesztés',
    'comp.software.short':
      '.NET, C# és a teljes körítés — desktop, kliens-szerver, web, hardver/API integráció. Csapatmentorálás és open source.',
    'comp.software.detail':
      '15+ év szoftvermérnöki tapasztalat. Fő stack: .NET és C# — Avalonia desktop alkalmazások, ASP.NET Core backendek, elosztott rendszerek. Otthonosan mozgok desktop, kliens-szerver, webapp és hardver/API integráció területén. Megbízom a C++, Rust, Python, TypeScript, Swift, JavaScript és shell nyelvekben is, ahol a feladat ezt kívánja. Fejlesztők mentorálása, kis csapat vezetése, projekt management. Az open source közreműködés szívügy — elsősorban Bitcoin privacy projekteken (Wasabi, Ginger, NBitcoin, WabiSabi), de nyitott vagyok más értelmes open source munkára is.',

    'comp.firmware.tag': '03 — Firmware',
    'comp.firmware.title': 'Firmware és embedded',
    'comp.firmware.short':
      'ESP32, STM32, Atmel, nRF52. Bluetooth modulok, kijelző, MP3 chip, SD kártya. Akkumulátoros kézi készülékek.',
    'comp.firmware.detail':
      'Egyedi firmware tervezése és fejlesztése PCB-tervek alapján, illetve meglévő firmware módosítása. Mikrokontroller-tapasztalat: ESP32, STM32 (Atollic TrueStudio toolchain), Atmel, nRF52. Bluetooth modul programozás, kijelző-illesztés kézi készülékekhez, MP3 chip integráció, SD kártya tárolás. Akkumulátoros kézi készülékek kijelzővel, audio lejátszással, Bluetooth-szal. Elektronika és firmware szoros illesztése. Konkrét termékek: Fetaphon orvosi műszer kismamáknak (kézi magzati szívhangvizsgáló), audio guide készülékek, asztali és kézi wellness termékek, biorezonanciás hardverek.',

    'comp.smarthome.tag': '04 — Okosotthon',
    'comp.smarthome.title': 'Okosotthon és villany',
    'comp.smarthome.short':
      'Home Assistant, Homey, Zigbee. Otthonok és épületautomatizálás, távoli elérés, monitorozás, AI.',
    'comp.smarthome.detail':
      'Villanyszerelés és okosotthon eszközök telepítése és illesztése. Home Assistant és Homey rendszerek otthonokba és épületautomatizálásba egyaránt, Zigbee mesh-szel. Távoli elérés, monitorozás, automatizációk, AI bekapcsolása a rendszerbe. Tipikus munka: új építésű ház teljes okosotthon-rétege, vagy meglévő otthon retrofit-elése.',

    'comp.print.tag': '05 — 3D nyomtatás',
    'comp.print.title': '3D nyomtatás és ipari alkatrészek',
    'comp.print.short':
      'Bambu X1C, akár 1000 db-ig. Több szín, PLA, PETG, ASA, ABS, karbon- és üvegszálas anyagok.',
    'comp.print.detail':
      '3D nyomtatás Bambu X1C nyomtatóval, akár 1000 darabos szériáig. Több színű nyomtatás PLA, PETG, ASA, ABS, karbonszálas és üvegszálas anyagokkal. Egyedi alkatrészek tervezése és utángyártása valós tűréshatárokkal — fogaskerekek, burkolatok, tartók. Marketing tárgyak tervezése és gyártása: hűtőmágnes, kulcstartó, branding-elemek, promo darabok.',

    'comp.bitcoin.alt': 'Bitcoin node és hardware wallet sötét asztalon',
    'comp.software.alt': 'Több monitoros fejlesztői munkaállomás kód szerkesztőkkel',
    'comp.firmware.alt': 'PCB, félig szétszerelt kézikészülék, oszcilloszkóp és forrasztási eszközök',
    'comp.smarthome.alt': 'Elektromos szekrény vezérlő modulokkal és egy fali touch panel',
    'comp.print.alt': 'Zárt kamrás 3D nyomtató ipari konzolt nyomtat, filament orsók és tolómérő',

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
      'David Molnar vagyok, senior szoftverfejlesztő Budapestről. 15+ éve építek szoftvert — elosztott rendszerek, embedded hardver, és 2018 óta Bitcoin privacy eszközök. Hat évet töltöttem a Wasabi Walletnél, végül CTO-ként — a világ egyik legszélesebb körben használt Bitcoin privacy wallete, 4600+ commit a protokollban és a kliensben. Ma független szoftverfejlesztőként, egyéni vállalkozóként dolgozom párhuzamosan több projekten — többek között a Ginger Walleten, a Fetaphonon, a TESCO-nál és az AGIS-nál. Szeretem a kihívásokat: protokollszintű Bitcoin privacy, akkumulátoros embedded rendszerek amik évekig üzem nélkül kell fussanak, és ipari alkatrészek valós tűréshatárokkal.',

    'elsewhere.title': 'Máshol',

    'contact.title': 'Kapcsolat',
    'contact.body':
      'Nyitott vagyok érdekes együttműködésekre, tanácsadásra és beszélgetésekre. Angolul és magyarul egyaránt.',


    'contact.copy': 'Másolás',
    'contact.copied': 'Kimásolva',
    'contact.email.label': 'Email',
    'contact.nostr.label': 'Nostr',
    'contact.pgp.label': 'PGP',
    'contact.pgp.viewkey': 'Publikus kulcs megtekintése',

    'footer.built': 'Készítve gonddal. Forrás:',
  },
} as const;
