---
title: Wasabi Wallet
projectId: wasabi-wallet
lang: hu
competencies: [bitcoin, software]
shortDesc: Nyílt forrású Bitcoin privacy wallet. Hat év core contributorként és CTO-ként, 4600+ commit a 1.x és 2.x generáción át.
image: /images/projects/wasabi-wallet-hero.webp
cardImage: /images/projects/wasabi-wallet-card.webp
heroImage: /images/projects/wasabi-wallet-hero.webp
tags: [Bitcoin, CoinJoin, .NET, C#, Avalonia, Privacy]
year: 2018
links:
  - label: GitHub
    href: https://github.com/WalletWasabi/WalletWasabi
  - label: wasabiwallet.io
    href: https://wasabiwallet.io
---

## Mi a Wasabi Wallet

A Wasabi Wallet egy nyílt forrású, non-custodial, privacy-fókuszú Bitcoin wallet asztali gépekre. Megkülönböztető funkciója a CoinJoin: egy technika, amellyel több felhasználó kombinálja a tranzakcióit úgy, hogy kívülről nem megállapítható, melyik input melyik outputhoz tartozik. A cél az on-chain pénzügyi privacy anélkül, hogy a felhasználó lemondana a custody-ról.

A wallet Windows, macOS és Linux rendszeren fut. Alapértelmezetten Tor-t használ, nem igényel fiókot, és a felhasználó teljes kontrollt tart a kulcsai felett. Csúcsidőszakában az egyik legelterjedtebb Bitcoin privacy eszköz volt.

## Két generáció

A **Wasabi 1.x** 2018 októberében indult. A ZeroLink protokollt implementálta: egy Chaumian CoinJoin séma, ahol a felhasználók vak aláírással regisztrálták az inputjaikat a koordinátornál — megakadályozva, hogy a koordinátor összekösse az inputokat az outputokkal. Fix denominációk, manuális részvétel, ütemezett körök.

A **Wasabi 2.x** 2022-ben jelent meg, teljesen újratervezett CoinJoin protokollal: a WabiSabi-val. Ez felváltotta a fix denominációs köröket egy zero-knowledge proof alapú credential rendszerrel, amely tetszőleges összegű outputokat tesz lehetővé, miközben az input-output összerendelés a koordinátor előtt rejtett marad. Automatikus CoinJoint is bevezette — a wallet a háttérben, manuális beavatkozás nélkül vesz részt a körökben.

## Amit építettem

Az első naptól ott voltam — a 1.0 kiadásától 2018 októberétől —, és a zkSNACKs bezárásáig mindkét generáción dolgoztam, összegyűjtve 4600+ commitot.

A **Wasabi 1.x**-en core contributorként vettem részt a teljes stacken: wallet logika, Avalonia desktop UI, backend koordinátor szolgáltatás, hálózati réteg és tesztelési infrastruktúra.

A **Wasabi 2.x**-en a WabiSabi CoinJoin protokoll implementációján és integrációján dolgoztam — a kriptográfiai sémát termelési szoftverré alakítva, amely több száz egyidejű résztvevőt kezel. A protokoll integráción túl irányítottam az újratervezett Avalonia kliens architektúráját, az ASP.NET Core koordinátor backendet, és az automatizált tesztcsomagot, amely end-to-end validálta a köröket.

Ahogy a csapat nőtt, a szerepem team leadből CTO-vá fejlődött: technikai irány, code review, felvételek és koordináció — a csapat csúcson közel 35 fő volt.

## Előadások

<ul class="video-list">
  <li><a href="https://youtu.be/tLOMcU8MhWM" target="_blank" rel="noopener noreferrer">Bitcoin 2019: Recent Privacy Trends &amp; Wasabi Wallet</a> <span>— Bitcoin Magazine</span></li>
  <li><a href="https://youtu.be/JtDY7Gb-L5s" target="_blank" rel="noopener noreferrer">MIT Bitcoin Expo 2019 — Wasabi Wallet: Unfairly Private</a> <span>— MIT Bitcoin Club</span></li>
  <li><a href="https://youtu.be/4CyEFWcsQMQ" target="_blank" rel="noopener noreferrer">Bitcoin's Valentine #2 — Coin shuffling AMA with Wasabi</a> <span>— Open Blockchain</span></li>
</ul>

![David Molnar előadás, Bitcoin 2019, Peer-to-Peer Stage, San Francisco](/images/projects/wasabi-wallet-bitcoin2019.jpg)

![David Molnar — MIT Bitcoin Expo speaker card, Wasabi Wallet](/images/projects/wasabi-wallet-mit-expo.png)

## Tech

- **Nyelv:** C# / .NET
- **Desktop kliens:** Avalonia UI
- **Backend:** ASP.NET Core, egyedi CoinJoin koordináció
- **Kriptográfia:** WabiSabi (ZK credentials, vak aláírások) — implementáció és integráció
- **CI/CD:** GitHub Actions
- **Privacy:** Tor integráció, kliensoldali block filterek
