---
title: NFC Névjegykártya
projectId: nfc-business-card
lang: hu
competencies: [3d-printing, software]
shortDesc: Egyedileg testreszabott, 3D nyomtatott NFC névjegykártya, amely mobilos névjegymentő oldalra visz.
image: /images/projects/nfc-business-card.jpg
cardImage: /images/projects/nfc-business-card-preview.jpg
heroImage: /images/projects/nfc-business-card-preview.jpg
tags: [NFC, 3D nyomtatás, Bambu Studio, vCard, Astro]
year: 2026
links:
  - label: GitHub
    href: https://github.com/molnard/nfc-business-card
  - label: Bambu Lab NFC Tag Sticker
    href: https://eu.store.bambulab.com/products/nfc-tag-sticker?id=49298217501020
  - label: MakerWorld eredeti
    href: https://makerworld.com/hu/models/2335591-fancy-tech-nfc-business-card-fully-customizable#profileId-2554972
---

## Mi ez

Egyedileg testreszabott, 3D nyomtatott NFC névjegykártya gyors kapcsolatcseréhez. A kártya érintésre egy privát mobilos névjegyoldalt nyit meg, ahol egyértelmű névjegy hozzáadása/mentése művelet várja a látogatót.

## Mi készült

- Egyedileg módosított 3D nyomtatott kártyamodell
- Bambu Studio gyártófájl (`.3mf`)
- Nyomtatás közben behelyezett Bambu Lab NFC Tag Sticker
- URL-alapú NFC működés megbízható iPhone és Android olvasáshoz
- Mobilos névjegyoldal letölthető vCarddal
- Opcionális QR assetek későbbi kártyaverzióhoz vagy betétlaphoz

A kártya NFC-first: a látható felület tiszta marad, a digitális névjegyfolyamat pedig később is könnyen frissíthető a weboldalon.

## Miért jó ez a megoldás

Az NFC tag URL-t használ a kontaktadatok közvetlen beégetése helyett. Androidon a közvetlen kontakt/vCard NFC rekord is jól működhet, akár offline is, iPhone-on viszont a háttérben olvasott NFC esetén az URL rekord megbízhatóbb. Ezért a kártya az URL-alapú flow-t használja, hogy iPhone-on és Androidon is kiszámítható legyen az élmény.

A használat egyszerű marad: kártya érintése, névjegyoldal megnyitása, kontakt mentése. A fizikai kártya független marad a későbbi névjegyoldal-változásoktól, miközben a webes réteg kezeli azokat a részeket, amelyeket érdemes szerkeszthetőn hagyni: kontaktadatok, letöltési működés és mobilos megjelenés.

## Attribúció

A kártya az EricP által készített `Fancy Tech NFC Business Card - Fully Customizable` MakerWorld modell testreszabott származéka. A 3D design assetek és előnézetek CC BY-SA 4.0 alatt, a segédscriptek MIT licenc alatt vannak közzétéve.
