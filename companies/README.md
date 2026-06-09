# Logos d'entreprises / institutions

Dépose ici les logos haute résolution (PNG carré 256×256 idéal, ou SVG) pour les institutions dont le favicon Google n'est pas convaincant. Le chemin local prend le pas sur le favicon Google si `logoSrc` est défini dans `src/data/`.

## Fichiers attendus

- `sawi.png` — logo officiel SAWI (référencé dans [src/data/education.ts](../../src/data/education.ts) pour les entrées SAWI). Si absent, fallback aux initiales colorées.

Ajoute d'autres logos ici au besoin, puis ajoute le champ `logoSrc: '/companies/<fichier>'` à l'entrée concernée dans `src/data/education.ts` ou `src/data/experiences.ts`.
