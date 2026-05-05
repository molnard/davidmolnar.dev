# Kompetencia képek

Ide tölts képeket a kompetencia csempékhez. A `Competencies.astro` automatikusan használja őket
ha a megadott néven és formátumban itt vannak — ha nincsenek, a CSS gradient placeholder marad.

## Várt fájlok

| Fájlnév               | Csempe        | Arány  | Min. méret  | Megjegyzés                              |
|-----------------------|---------------|--------|-------------|-----------------------------------------|
| `bitcoin.webp`        | Bitcoin (hero)| 21:8   | 1920×730    | Legfontosabb, ez a hero csempe          |
| `software.webp`       | Szoftver      | 4:3    | 1200×900    |                                         |
| `firmware.webp`       | Firmware      | 4:3    | 1200×900    |                                         |
| `smarthome.webp`      | Okosotthon    | 4:3    | 1200×900    |                                         |
| `print.webp`          | 3D nyomtatás  | 4:3    | 1200×900    |                                         |

## Stílus

- "Gyurmás" / claymorphic 3D render — meleg paletta, forest + amber
- Sötét overlay automatikusan rákerül (text olvashatóság miatt), tehát a kép lehet bátrabb
- Zsírosabb sarkokba helyezett objektumok jól mutatnak (a szöveg balra-lent kerül)

## Formátum

- **Preferált:** `.webp` (kisebb, modern, minden mai böngésző támogatja)
- **Elfogadott:** `.jpg`, `.png`
- Több formátumból egyszerre csak EGYET tölts fel pro kompetencia (különben a `.webp` nyer)

## Optimalizálás

Mielőtt feltöltöd:
- Cél fájlméret: hero ~150KB alatt, normál csempe ~80KB alatt
- Online tool: [squoosh.app](https://squoosh.app) — quality 75–80, WebP

## Ha új képet teszel be

1. Töltsd fel ide
2. Build automatikusan felveszi (`npm run build`)
3. Push → CF Pages auto-deploy
4. Kódváltoztatás NEM kell

## Ha más nevet akarsz

Szerkeszd a `src/components/Competencies.astro`-t — az `image` mezőt minden item-en.
