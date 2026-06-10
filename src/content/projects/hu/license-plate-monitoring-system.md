---
title: Rendszámfigyelő rendszer
projectId: license-plate-monitoring-system
lang: hu
competencies: [software]
shortDesc: Webes adminisztrációs és integrációs rendszer több száz kamera rendszámfelismerési eseményeinek feldolgozására.
image: /images/projects/license-plate-monitoring-system-hero.webp
cardImage: /images/projects/license-plate-monitoring-system-card.webp
heroImage: /images/projects/license-plate-monitoring-system-hero.webp
tags: [.NET 8, ASP.NET Core, C#, Razor Pages, EF Core, Identity, Background Services, Windows Service, Serilog]
year: 2025
---

## Mi ez

A Rendszámfigyelő rendszer egy zárt környezetben futó, webes adminisztrációs és integrációs alkalmazás. Több száz IP kamera rendszámfelismerési eseményeit képes fogadni és feldolgozni, napi több ezer várható rendszámolvasással.

A rendszer a beérkező eseményeket összeveti egy karbantartható figyelési listával, majd találat esetén riasztási eseményt továbbít egy külső videómenedzsment vagy rögzítő rendszer felé.

A projekt célja nem egy általános kamerakezelő szoftver építése volt, hanem egy célzott integráció: a kamerák, az operátori workflow, az adatbázis és a riasztási végpont közötti megbízható, üzemeltethető köztes réteg.

## A feladat

A rendszernek több, egymástól eltérő szerepet kellett kiszolgálnia. Az adminisztrátorok kamerákat, rögzítő végpontokat, riasztási mappingeket és felhasználókat kezelnek. Az operátorok a figyelt rendszámok listáját tartják karban, importálnak, exportálnak, és áttekintik az utolsó detektálási eseményeket.

A fontosabb elvárások:

- több száz kamera eseményeinek kezelése
- napi több ezer rendszámolvasás feldolgozása
- kamerákból érkező rendszám-események fogadása és normalizálása
- figyelt rendszámok kezelése operátori felületen
- szerepkör alapú hozzáférés admin és operátori funkciókhoz
- riasztási események továbbítása külső rendszer felé
- minimális, célhoz kötött adattárolás
- Windows Server környezetben futtatható szolgáltatás
- üzemeltethető logolás és konfiguráció

## Rendszerfelépítés

A backend ASP.NET Core alkalmazásként készült, Razor Pages alapú webes felülettel. A felhasználókezelést ASP.NET Core Identity adja, szerepkörökkel elválasztva az adminisztrációs és operátori funkciókat.

A rendszerben több háttérfolyamat fut:

- kamera-integrációs háttérszolgáltatás az eszközök állapotának és eseményeinek kezelésére
- rögzítő vagy videómenedzsment integrációs háttérszolgáltatás a riasztási célrendszerhez
- riasztási mapping szolgáltatás, amely a detektált eseményekből a külső rendszer számára értelmezhető jelzéseket állít elő

Az adatréteg Entity Framework Core-ra épül. A projekt SQLite és MySQL providerrel is működni tud, így fejlesztési, kisebb telepítési és szerveres környezetben is használható marad ugyanaz az alkalmazáslogika.

![Rendszámfigyelő rendszer szoftver blokkdiagram](/images/projects/license-plate-monitoring-system-diagram.svg)

## Webes felület

A webes felület célja az volt, hogy technikai üzemeltetők és operátorok gyorsan tudjanak dolgozni vele, külön kliensprogram telepítése nélkül.

A főbb felületek:

- kamerák kezelése
- rögzítő vagy külső integrációs végpontok kezelése
- figyelt rendszámok karbantartása
- CSV import/export
- riasztási szabályok és mappingek kezelése
- felhasználók és szerepkörök kezelése
- rendszerinformációk és verzióadatok megjelenítése

A kliensoldalon Bootstrap-alapú admin UI, táblázatos adatkezelés és célzott JavaScript viselkedések támogatják a napi használatot.

## Technológiai döntések

A projekt .NET 8 és C# alapon készült. Az ASP.NET Core Razor Pages jó illeszkedés volt, mert a rendszer elsősorban adminisztrációs és operátori felület, nem SPA jellegű termék. Ez egyszerűbb deployt, szerveroldali validációt és jól követhető jogosultsági modellt adott.

A fontosabb technológiák:

- .NET 8 és ASP.NET Core
- Razor Pages
- ASP.NET Core Identity
- Entity Framework Core
- SQLite és MySQL provider
- háttérszolgáltatások `BackgroundService` alapon
- Serilog fájl- és eseménynaplózással
- Windows Service hosting
- Bootstrap, Tabulator, Tom Select
- lokalizált UI erőforrások

## Adatvédelem és üzemeltetés

A rendszer tervezésénél fontos szempont volt, hogy csak a működéshez szükséges adatokat tárolja. A rendszám-események és figyelési listák kezelése célhoz kötött, az üzemeltetési adatok pedig elkülönülnek a rendszerkonfigurációtól.

A konfiguráció több forrásból épül fel: alkalmazásbeállításokból, környezeti változókból, parancssori paraméterekből és szerverkörnyezeti override fájlokból. Ez segíti, hogy ugyanaz a build fejlesztési és éles környezetben is használható legyen.

A Windows Service futtatás, a tartós `ProgramData` alapú tárolás és a Serilog naplózás együtt azt célozza, hogy a rendszer hosszabb távon is kezelhető legyen egy üzemeltetett szerverkörnyezetben.

## A szerepem

Egyéni vállalkozóként vállaltam el a teljes feladatot: a projekt szakmai vezetését, a rendszertervezést, a fejlesztési döntéseket és a megvalósítás nagy részét. A munkába egy másik fejlesztő is besegített, akivel a feladatokat koordináltam és a végső technikai irányt én tartottam kézben.

A végfelhasználó egy Magyarországon is ismert, nemzetközi hipermarket-lánc volt, ezért a projektben a megbízható integráció, az üzemeltethetőség és a világos operátori workflow különösen fontos volt. Olyan rendszert kellett építeni, amely nem csak demonstrációként működik, hanem valós szerverkörnyezetben, sok kamerával, több felhasználói szereppel és külső eszközökkel együtt is karbantartható.
