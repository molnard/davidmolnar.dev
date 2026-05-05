---
title: Fetaphon
projectId: fetaphon
lang: en
competencies: [firmware, software]
shortDesc: Battery-powered handheld fetal heartbeat monitor for expecting mothers. Full schematic and firmware design.
image: /images/projects/fetaphon.jpg
tags: [ESP32, Firmware, C++, Medical, Embedded, Bluetooth]
year: 2022
draft: true
---

Fetaphon is a medical device designed for expecting mothers — a battery-powered, handheld fetal heartbeat monitor that picks up and plays back the baby's heartbeat in real time.

## What I built

I designed the firmware from scratch based on the PCB schematics. The device runs on an ESP32, drives a small OLED display, handles audio output through an MP3 chip, stores recordings on an SD card, and communicates with a companion app over Bluetooth.

Key challenges: achieving reliable heartbeat detection with minimal false positives, optimizing power draw for all-day battery life, and building a UI simple enough for non-technical users.

## Tech

- **MCU:** ESP32
- **Display:** OLED driver
- **Audio:** MP3 chip integration
- **Storage:** SD card via SPI
- **Wireless:** Bluetooth LE
- **Language:** C++
