# 🧩 Jednoduchá TODO aplikácia v Reacte

Tento projekt je **jednoduchá React TODO aplikácia**, vytvorená pre výučbu základov Reactu.
Všetko sa nachádza v jednom súbore `App.jsx`, aby bolo jasne vidieť, ako React funguje.

---

## 🚀 Ako si vytvoriť novú React aplikáciu

Ak si chceš vytvoriť vlastnú React aplikáciu od začiatku, postupuj podľa týchto krokov:

### 1️⃣ Nainštaluj si Node.js
Najprv si nainštaluj [Node.js](https://nodejs.org/)
➡️ Odporúčaná verzia: **LTS (Long Term Support)**

Po nainštalovaní over, že všetko funguje:
```bash
node -v
npm -v
```

## 2️⃣ Vytvor novú React aplikáciu
Pomocou príkazu create-react-app vytvor nový projekt:
```bash
npx create-react-app moja-aplikacia
```
* (príkaz npx automaticky stiahne a spustí create-react-app, nie je potrebné nič inštalovať naviac)

## 3️⃣ Prejdi do projektu
```bash
cd moja-aplikacia
```

## 4️⃣ Spusti vývojový server
```bash
npm start
```
* ➡️ Aplikácia sa otvorí automaticky v prehliadači na adrese
* 👉 http://localhost:3000

## 📦 Ako spustiť túto TODO aplikáciu
Ak si si stiahol tento projekt z GitHubu, stačí spustiť tieto príkazy:
```bash
npm install
npm start
```
* 🔧 nainštalujú všetky potrebné balíčky
* 🚀 spustí vývojový server

### 🧠 Čo aplikácia robí
Táto jednoduchá aplikácia umožňuje:
* ✏️ Pridávať nové úlohy (TODO)
*	✅ Označovať úlohy ako hotové (checkbox)
* ❌ Vymazávať úlohy
* 📊 Zobrazuje počet aktuálnych úloh

Všetky úlohy sa ukladajú do React state, nič sa neukladá do súboru ani do databázy.
Je to teda ideálny príklad na pochopenie základov Reactu: useState, map, filter a eventy.

### 🧠 Použité React koncepty

### 💅 Štýly
Štýly sa nachádzajú v súbore App.css, ktorý sa načítava automaticky.
Používame len základné CSS — žiadne knižnice, aby bolo jasné, čo robí React a čo CSS.

### 📚 Čo sa naučíš
✅ Základy React komponentov
✅ Práca so state a eventami
✅ Riešenie problémov s renderovaním
✅ Práca s políčkami (map, filter)
✅ Tvorba malého projektu od nuly
