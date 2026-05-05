---
title: Ginger Wallet
projectId: ginger-wallet
lang: en
competencies: [bitcoin, software]
shortDesc: Open-source, non-custodial Bitcoin privacy wallet with CoinJoin. A fork of Wasabi Wallet, built for desktop.
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

## What is Ginger Wallet

Ginger Wallet is an open-source, non-custodial, privacy-focused Bitcoin wallet for desktop. It implements trustless CoinJoin over the Tor anonymity network — the same approach Wasabi pioneered, continued by an independent team.

It's a fork of Wasabi Wallet, branched after v2.0.7.2. The protocol underneath is WabiSabi: a cryptographic coordination scheme that lets multiple users combine transactions without the coordinator ever learning which inputs map to which outputs. The result is on-chain privacy without trusting anyone.

## What it does

Ginger Wallet is built around private, self-custodial Bitcoin usage. The important parts are not separate gimmicks: CoinJoin, coin control, Tor, labeling, and hardware wallet support all work together so the user can understand and improve their on-chain privacy without giving up custody.

### Privacy and CoinJoin

- Trustless WabiSabi CoinJoin
- Coin control and labeling
- Remix support
- Anonymity score tracking
- Automatic address rotation

### Network and infrastructure

- Tor by default
- Client-side block filters
- Bitcoin-only desktop wallet
- Open-source codebase
- Reproducible releases and signed downloads

### Wallet functionality

- Non-custodial seed handling
- Hardware wallet support through HWI
- 2FA and wallet encryption
- QR code support
- Windows, macOS, and Linux builds

## How it started

When zkSNACKs — the company behind Wasabi — shut down, almost the entire dev team got termination notices overnight. A few of us started looking for what comes next. Martin Rimoczi showed up with a clear proposition: fork the client, keep the work going, build it independently. That's how GingerPrivacy was formed.

I joined on day one. I had been at Wasabi since the 1.0 release in October 2018 — it felt like unfinished business.

## My role

I work as an independent contractor, responsible for software development on the client: features, bugfixes, architecture, build system, tests, and documentation. My role is on the code side only — coordinator operations, compliance, and financial decisions are handled by InvisibleBit LLC.

![Panel discussion about Ginger Wallet at Bitcoin Miskolc](/images/projects/ginger-wallet-miskolc.jpg)

## Conferences

The team shows up at Bitcoin conferences every year — Bitcoin Miskolc, Bitcoin Prague, and others. Direct contact with users who actually run the wallet day to day.

![Ginger Wallet booth at Bitcoin Prague, Expo Networking Zone](/images/projects/ginger-wallet-prague.jpg)

---

<div style="margin-top:2.5rem;padding:2rem;background:#0F1A14;border-radius:1.25rem;text-align:center;">
  <p style="color:#F8F5F0;font-size:1.125rem;font-weight:600;margin-bottom:0.5rem;">Want on-chain Bitcoin privacy?</p>
  <p style="color:rgba(248,245,240,0.6);font-size:0.9375rem;margin-bottom:1.5rem;">Ginger Wallet is free, open source, and runs on Windows, macOS, and Linux.</p>
  <a href="https://gingerwallet.io/index.html#download" style="display:inline-block;background:#E8A33D;color:#0F1A14;font-weight:700;font-size:0.9375rem;padding:0.75rem 2rem;border-radius:9999px;text-decoration:none;">Download Ginger Wallet →</a>
</div>
