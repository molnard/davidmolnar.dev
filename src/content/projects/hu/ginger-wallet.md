---
title: Ginger Wallet
projectId: ginger-wallet
lang: hu
competencies: [bitcoin, software]
shortDesc: Nyílt forrású, non-custodial Bitcoin privacy wallet CoinJoinnal. A Wasabi Wallet forkja, asztali használatra.
image: /images/projects/ginger-wallet-hero.webp
cardImage: /images/projects/ginger-wallet-card.webp
heroImage: /images/projects/ginger-wallet-hero.webp
tags: [Bitcoin, CoinJoin, .NET, C#, Avalonia, Privacy]
year: 2024
links:
  - label: gingerwallet.io
    href: https://gingerwallet.io
  - label: GitHub
    href: https://github.com/GingerPrivacy/GingerWallet
  - label: Telegram
    href: https://t.me/GingerWallet
  - label: YouTube
    href: https://www.youtube.com/@ginger.wallet
  - label: Medium
    href: https://medium.com/@molnardavid84/ginger-wallet-first-contact-1abc8d292abd
---

## Mi a Ginger Wallet

A Ginger Wallet egy nyílt forrású, non-custodial, privacy-fókuszú Bitcoin wallet asztali gépekre. A Tor hálózaton keresztül valósít meg trustless CoinJoint — ugyanazt a megközelítést, amit a Wasabi úttört, most egy független csapat folytatja.

A Wasabi Wallet forkja, a v2.0.7.2 után elágazva. A protokoll alatt a WabiSabi áll: egy kriptográfiai koordinációs séma, amellyel több felhasználó kombinálhatja a tranzakcióit anélkül, hogy a koordinátor bármikor megtudná, melyik input melyik outputhoz tartozik. Az eredmény: on-chain privacy, mindenfajta bizalom nélkül.

## Mire képes

A Ginger Wallet privát, saját kulcsos Bitcoin használatra épül. A fontos részek nem különálló extrák: a CoinJoin, coin control, Tor, címkézés és hardware wallet támogatás együtt segítik, hogy a felhasználó érthetően és kontrolláltan javítsa az on-chain privacy szintjét anélkül, hogy lemondana a custody-ról.

### Privacy és CoinJoin

- Trustless WabiSabi CoinJoin
- Coin control és címkézés
- Remix támogatás
- Anonymity score követés
- Automatikus címváltás

### Network és infrastruktúra

- Tor alapértelmezetten
- Kliensoldali block filterek
- Bitcoin-only desktop wallet
- Nyílt forrású kódbázis
- Reprodukálható release-ek és aláírt letöltések

### Wallet funkcionalitás

- Non-custodial seed kezelés
- Hardware wallet támogatás HWI-n keresztül
- 2FA és wallet encryption
- QR kód támogatás
- Windows, macOS és Linux build

## Hogyan kezdődött

Amikor a zkSNACKs — a Wasabi mögötti cég — bezárt, a fejlesztőcsapat szinte minden tagja egyik napról a másikra felmondólevelet kapott. Néhányan elkezdtük keresni, mi jön ezután. Martin Rimoczi egy konkrét ajánlattal jött: forkoljuk a klienst, folytassuk a munkát, építsük fel függetlenül. Így jött létre a GingerPrivacy csapat.

Én az első naptól csatlakoztam. 2018 októbere óta dolgoztam a Wasabin a 1.0 kiadástól — befejezetlen üzletnek éreztem volna elengedni.

## A szerepem

Független vállalkozóként dolgozom, a kliens szoftverfejlesztéséért vagyok felelős: feature-ök, bugfixek, architektúra, build rendszer, tesztek, dokumentáció. A szerepem kizárólag a kód oldalára korlátozódik — a koordinátor működtetése, a compliance és a pénzügyi döntések az InvisibleBit LLC hatásköre.

![Panel beszélgetés a Ginger Walletről a Bitcoin Miskolcon](/images/projects/ginger-wallet-miskolc.jpg)

## Konferenciák

A csapat minden évben megjelenik a Bitcoin konferenciákon — Bitcoin Miskolc, Bitcoin Prague és mások. Közvetlen kapcsolat azokkal a felhasználókkal, akik ténylegesen futtatják a walletet.

![Ginger Wallet stand a Bitcoin Prague-on, Expo Networking Zone](/images/projects/ginger-wallet-prague.jpg)

---

<div style="margin-top:2.5rem;padding:2rem;background:#0F1A14;border-radius:1.25rem;text-align:center;">
  <p style="color:#F8F5F0;font-size:1.125rem;font-weight:600;margin-bottom:0.5rem;">Bitcoin privacy on-chain?</p>
  <p style="color:rgba(248,245,240,0.6);font-size:0.9375rem;margin-bottom:1.5rem;">A Ginger Wallet ingyenes, nyílt forrású, és fut Windows, macOS és Linux rendszeren.</p>
  <a href="https://gingerwallet.io/index.html#download" style="display:inline-block;background:#E8A33D;color:#0F1A14;font-weight:700;font-size:0.9375rem;padding:0.75rem 2rem;border-radius:9999px;text-decoration:none;">Ginger Wallet letöltése →</a>
</div>
