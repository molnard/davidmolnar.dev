---
title: Fetaphon
projectId: fetaphon
lang: hu
competencies: [firmware, software]
shortDesc: Akkumulátoros, kézi magzati szívhangvizsgáló kismamáknak. Teljes firmware és hardver tervezés.
image: /images/projects/fetaphon.jpg
tags: [ESP32, Firmware, C++, Orvosi, Embedded, Bluetooth]
year: 2022
draft: true
---

A Fetaphon egy kismamáknak szánt orvosi műszer — akkumulátoros, kézi magzati szívhangvizsgáló, amely valós időben érzékeli és játssza vissza a baba szívhangját.

## Amit építettem

A firmware-t a PCB-tervek alapján nulláról terveztem. A készülék ESP32-n fut, kis OLED kijelzőt hajt, MP3 chipen keresztül kezeli az audio kimenetet, SD kártyán tárol felvételeket, és Bluetooth-on kommunikál egy kísérőalkalmazással.

Fő kihívások: megbízható szívhang-detektálás minimális téves pozitívokkal, az egésznapos akkumulátor-üzemidőhöz szükséges energiaoptimalizálás, és egy olyan UI, amely nem technikai felhasználóknak is egyszerű.

## Tech

- **MCU:** ESP32
- **Kijelző:** OLED illesztő
- **Audio:** MP3 chip integráció
- **Tárolás:** SD kártya SPI-n
- **Wireless:** Bluetooth LE
- **Nyelv:** C++
