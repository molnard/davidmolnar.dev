export const languages = {
  en: 'English',
  hu: 'Magyar',
} as const;

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'David Molnar — software · hardware · Bitcoin · open source',
    'hero.headline': 'Software, hardware, and Bitcoin privacy tools.',
    'hero.sub':
      'Senior software engineer with 15+ years building software, 8 of them on Bitcoin privacy. Former CTO at Wasabi Wallet, now an independent contractor.',
    'hero.cta.work': 'See my work',
    'hero.cta.contact': 'Get in touch',

    'comp.title': 'What I do',

    'comp.bitcoin.tag': '01 — Bitcoin',
    'comp.bitcoin.title': 'Bitcoin — development, privacy, mentoring',
    'comp.bitcoin.short':
      '8 years of active Bitcoin development since 2018. Wasabi ex-CTO and CoinJoin protocol work. Privacy, security, non-custodial.',
    'comp.bitcoin.detail':
      'Active Bitcoin developer since October 2018 — I joined Wasabi Wallet on the day of the 1.0 release and worked directly alongside nopara73 and Lucas Ontivero. Over six years I grew from contributor to team lead to CTO, accumulating 4,600+ commits across the protocol and client. The core of that work was the WabiSabi CoinJoin protocol: zero-knowledge credential issuance and blind signatures at scale. When zkSNACKs closed, I joined Ginger Wallet from day one to continue the work independently.',

    'comp.software.tag': '02 — Software',
    'comp.software.title': 'Software engineering',
    'comp.software.short':
      '.NET, C#, and the full surrounding stack — desktop, client-server, embedded, database. 15+ years, from firmware to production systems.',
    'comp.software.detail':
      'I wrote my first program at around 10 years old — a Commodore 64 connected to a TV, learning from my father\'s programming books in Basic. I stepped up to Turbo Pascal next, building simple games and tools on my own. That self-taught curiosity led to a technical secondary school, then a computer engineering degree with a microelectronics specialisation. 15+ years of professional work later, the stack has changed completely — the approach has not.',

    'comp.firmware.tag': '03 — Firmware',
    'comp.firmware.title': 'Firmware & embedded',
    'comp.firmware.short':
      'ESP32, STM32, Atmel, nRF52. Bluetooth modules, displays, MP3 chips, SD card. Battery-powered handhelds.',
    'comp.firmware.detail':
      'My first embedded project was in the United States: a tennis ball launching machine for SuperCoach LLC in Scottsdale. Custom PCB, firmware, and a Bluetooth remote — end-to-end from schematic to working hardware. That project became my engineering thesis. I spent the next ten years at a Hungarian company building handheld, desktop, and medical instruments — at least one of which went into 10,000-unit production. The work was always the same loop: agree on what the device needs to do, sit down with the electrical engineer, build the prototype, iterate, hand off to manufacturing.',

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


    'contact.calendly': 'Book a 30-min call',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied',
    'contact.email.label': 'Email',
    'contact.nostr.label': 'Nostr',
    'contact.pgp.label': 'PGP',
    'contact.pgp.viewkey': 'View public key',

    'footer.legal': 'Sole trader · Budapest, Kárpát utca 54, Hungary',
    'footer.bitcoin': 'Bitcoin accepted',
    'footer.built': 'Built with care. Source on',

    'comp.page.projects': 'Projects',
    'comp.page.back': '← Back',
    'comp.page.noProjects': 'No projects yet.',
    'project.page.back': '← Back',
    'project.page.links': 'Links',
    'project.page.tags': 'Tags',

    'projects.title': 'Projects',
    'projects.filter.all': 'All',
    'projects.sort.newest': 'Newest first',
    'projects.sort.oldest': 'Oldest first',
    'projects.sort.az': 'A → Z',
    'projects.empty': 'No projects match the filter.',
  },
  hu: {
    'nav.projects': 'Projektek',
    'nav.contact': 'Kapcsolat',

    'hero.eyebrow': 'David Molnar — szoftver · hardver · Bitcoin · open source',
    'hero.headline': 'Szoftver, hardver és Bitcoin privacy eszközök.',
    'hero.sub':
      'Senior szoftverfejlesztő 15+ év tapasztalattal, ebből 8 év Bitcoin privacy fejlesztés. Korábban CTO a Wasabi Walletnél, ma független vállalkozó.',
    'hero.cta.work': 'Munkáim',
    'hero.cta.contact': 'Kapcsolat',

    'comp.title': 'Amivel foglalkozom',

    'comp.bitcoin.tag': '01 — Bitcoin',
    'comp.bitcoin.title': 'Bitcoin — fejlesztés, privacy, mentorálás',
    'comp.bitcoin.short':
      '8 év aktív Bitcoin fejlesztés 2018 óta. Wasabi ex-CTO, CoinJoin protokoll. Privacy, biztonság, non-custodial.',
    'comp.bitcoin.detail':
      '2018 októbere óta aktív Bitcoin fejlesztő — a Wasabi Wallet 1.0 kiadásának napján csatlakoztam, és közvetlenül nopara73-mal és Lucas Ontivero-val dolgoztam együtt. Hat év alatt contributorból csapatvezetőn át CTO-vá váltam, összegyűjtve 4600+ commitot a protokollon és a kliensen. A munka magja a WabiSabi CoinJoin protokoll volt: zero-knowledge credential kiállítás és vak aláírások nagy léptékben. Amikor a zkSNACKs bezárt, az első naptól csatlakoztam a Ginger Wallethez, hogy folytassam a munkát függetlenül.',

    'comp.software.tag': '02 — Szoftver',
    'comp.software.title': 'Szoftverfejlesztés',
    'comp.software.short':
      '.NET, C# és a teljes körítés — desktop, kliens-szerver, embedded, adatbázis. 15+ év, firmwaretől az éles rendszerekig.',
    'comp.software.detail':
      'Az első programomat kb. 10 éves koromban írtam — egy Commodore 64-en, apám programozási könyveiből tanulva, Basic nyelven. Utána Turbo Pascal következett: saját játékok és toolok. Ez az önálló tanulás vezetett a műszaki szakközépiskolába, majd egy informatikus mérnöki diplomához, mikroelektronika szakiránnyal. 15+ év szakmai munka után a stack teljesen megváltozott — a hozzáállás nem.',

    'comp.firmware.tag': '03 — Firmware',
    'comp.firmware.title': 'Firmware és embedded',
    'comp.firmware.short':
      'ESP32, STM32, Atmel, nRF52. Bluetooth modulok, kijelző, MP3 chip, SD kártya. Akkumulátoros kézi készülékek.',
    'comp.firmware.detail':
      'Az első beágyazott rendszeres projektem az Egyesült Államokban volt: egy teniszlabda-adogató gép a scottsdale-i SuperCoach LLC-nél. Egyedi PCB, firmware és Bluetooth távirányító — elejétől a végéig, tervektől a működő hardverig. Ez lett a diplomamunkám. A következő tíz évet egy magyar cégnél töltöttem kézi, asztali és orvosi műszerek fejlesztésével — az egyiket 10 000 példányban gyártották le. A munka mindig ugyanaz a kör volt: megbeszélni mit kell tudnia az eszköznek, leülni a villamosmérnök kollégával, megépíteni a prototípust, iterálni, átadni a gyártásnak.',

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


    'contact.calendly': 'Időpont foglalás — 30 perc',
    'contact.copy': 'Másolás',
    'contact.copied': 'Kimásolva',
    'contact.email.label': 'Email',
    'contact.nostr.label': 'Nostr',
    'contact.pgp.label': 'PGP',
    'contact.pgp.viewkey': 'Publikus kulcs megtekintése',

    'footer.legal': 'Egyéni vállalkozó · Budapest, Kárpát utca 54',
    'footer.bitcoin': 'Bitcoin elfogadva',
    'footer.built': 'Készítve gonddal. Forrás:',

    'comp.page.projects': 'Projektek',
    'comp.page.back': '← Vissza',
    'comp.page.noProjects': 'Még nincs projekt.',
    'project.page.back': '← Vissza',
    'project.page.links': 'Linkek',
    'project.page.tags': 'Technológiák',

    'projects.title': 'Projektek',
    'projects.filter.all': 'Mind',
    'projects.sort.newest': 'Legújabb elöl',
    'projects.sort.oldest': 'Legrégebbi elöl',
    'projects.sort.az': 'A → Z',
    'projects.empty': 'Nincs találat.',
  },
} as const;
