---
title: Wasabi Wallet
projectId: wasabi-wallet
lang: en
competencies: [bitcoin, software]
shortDesc: Open-source Bitcoin privacy wallet. Six years as core contributor and CTO, 4,600+ commits across both the 1.x and 2.x generations.
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

## What is Wasabi Wallet

Wasabi Wallet is an open-source, non-custodial, privacy-focused Bitcoin wallet for desktop. Its defining feature is CoinJoin: a technique that lets multiple users combine their transactions so that an outside observer cannot determine which input belongs to which output. The goal is on-chain financial privacy without giving up custody.

The wallet runs on Windows, macOS, and Linux. It uses Tor by default, requires no account, and keeps the user in full control of their keys. At its peak it was one of the most widely used Bitcoin privacy tools available.

## Two generations

**Wasabi 1.x** launched in October 2018. It implemented ZeroLink, a Chaumian CoinJoin scheme where users registered inputs with the coordinator using blind signatures — preventing the coordinator from linking inputs to outputs. Fixed denominations, manual participation, and a coordinator that ran rounds on a schedule.

**Wasabi 2.x** shipped in 2022 with a completely redesigned CoinJoin protocol called WabiSabi. It replaced fixed-denomination rounds with a credential-based system using zero-knowledge proofs, allowing arbitrary output amounts while still keeping input-output mappings hidden from the coordinator. It also introduced automatic CoinJoin — the wallet participates in rounds in the background without manual user action.

## What I built

I joined on day one — the 1.0 release in October 2018 — and worked on both generations through to the closure of zkSNACKs, accumulating 4,600+ commits.

On **Wasabi 1.x** I was a core contributor across the full stack: wallet logic, the Avalonia desktop UI, the backend coordinator service, networking, and test infrastructure.

On **Wasabi 2.x** I worked on the implementation and integration of the WabiSabi CoinJoin protocol into both the client and the coordinator — turning the cryptographic scheme into production software handling hundreds of concurrent participants. Beyond the protocol integration, I led the redesigned Avalonia client architecture, the ASP.NET Core coordinator backend, and the automated test suite that validated round behavior end-to-end.

As the team grew, my role expanded from team lead to CTO: technical direction, code review, hiring, and coordination across a team that at its peak was nearly 35 people.

## Talks

<ul class="video-list">
  <li><a href="https://youtu.be/tLOMcU8MhWM" target="_blank" rel="noopener noreferrer">Bitcoin 2019: Recent Privacy Trends &amp; Wasabi Wallet</a> <span>— Bitcoin Magazine</span></li>
  <li><a href="https://youtu.be/JtDY7Gb-L5s" target="_blank" rel="noopener noreferrer">MIT Bitcoin Expo 2019 — Wasabi Wallet: Unfairly Private</a> <span>— MIT Bitcoin Club</span></li>
  <li><a href="https://youtu.be/4CyEFWcsQMQ" target="_blank" rel="noopener noreferrer">Bitcoin's Valentine #2 — Coin shuffling AMA with Wasabi</a> <span>— Open Blockchain</span></li>
</ul>

![David Molnar speaking at Bitcoin 2019, Peer-to-Peer Stage, San Francisco](/images/projects/wasabi-wallet-bitcoin2019.jpg)

![David Molnar — MIT Bitcoin Expo speaker card, Wasabi Wallet](/images/projects/wasabi-wallet-mit-expo.png)

## Tech

- **Language:** C# / .NET
- **Desktop client:** Avalonia UI
- **Backend:** ASP.NET Core, custom CoinJoin coordination
- **Cryptography:** WabiSabi (ZK credentials, blind signatures) — implementation and integration
- **CI/CD:** GitHub Actions
- **Privacy:** Tor integration, client-side block filters
