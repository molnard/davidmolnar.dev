---
title: NFC Business Card
projectId: nfc-business-card
lang: en
competencies: [3d-printing, software]
shortDesc: Customized 3D printed NFC business card that opens a mobile contact page for saving contact details.
image: /images/projects/nfc-business-card.jpg
cardImage: /images/projects/nfc-business-card-preview.jpg
heroImage: /images/projects/nfc-business-card-preview.jpg
tags: [NFC, 3D Printing, Bambu Studio, vCard, Astro]
year: 2026
links:
  - label: GitHub
    href: https://github.com/molnard/nfc-business-card
  - label: Bambu Lab NFC Tag Sticker
    href: https://eu.store.bambulab.com/products/nfc-tag-sticker?id=49298217501020
  - label: MakerWorld original
    href: https://makerworld.com/hu/models/2335591-fancy-tech-nfc-business-card-fully-customizable#profileId-2554972
---

## What it is

A customized 3D printed NFC business card for quickly sharing contact details. Tapping the card opens a private mobile contact page, where the visitor gets a clear add/save contact action.

## What is built

- Customized 3D printed card model
- Bambu Studio production project (`.3mf`)
- Bambu Lab NFC Tag Sticker embedded during the print
- URL-based NFC interaction for reliable iPhone and Android scanning
- Mobile contact page backed by a downloadable vCard
- Optional QR assets kept for future card revisions or inserts

The card is NFC-first: the visible surface stays clean, while the digital contact flow remains easy to update on the website.

## Why this works

The NFC tag uses a URL instead of embedding contact data directly. Android can handle direct contact/vCard NFC records well, including offline use, but iPhone background NFC reading is more reliable with URL records. The card therefore prioritizes the URL flow for consistent iPhone and Android behavior.

The interaction stays simple: tap the card, open the contact page, save the contact. The physical card stays independent from future contact-page updates, while the web layer handles the parts that benefit from being editable: contact details, download behavior, and mobile presentation.

## Attribution

This card is a customized derivative of `Fancy Tech NFC Business Card - Fully Customizable` by EricP on MakerWorld. The 3D design assets and previews are published under CC BY-SA 4.0, while utility scripts are under MIT.
