# Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

Moderní portfolio vytvořené pomocí React, TypeScript a Vite.

## 📌 Obsah

- [Technologie](#technologie)
- [Instalace](#instalace)
- [Struktura Projektu](#struktura-projektu)

## 💻 Technologie

- **React 18** - JavaScriptová knihovna
- **TypeScript** - Typovaný JavaScript
- **Vite** - Build tool a vývojový server

## 🛠️ Instalace

1. Naklonujte repozitář:
```bash
git clone https://gitlab.spseplzen.cz/verdanm/portfolio.git
cd portfolio

```

2. Stahněte dependecies a Spusťte lokální server:
```bash
npm install
npm run dev
```

## 📂 Struktura Projektu
```diff
portfolio/
├── src/
│   ├── components/    # React komponenty
│   ├── pages/         # Stránky aplikace
│   ├── assets/        # Obrázky a styly
│   └── App.tsx        # Hlavní komponenta
├── public/            # Statické soubory
├── package.json       # Závislosti
└── README.md          # Dokumentace