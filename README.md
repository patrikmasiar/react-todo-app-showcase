# 🧩 Jednoduchá TODO aplikácia v Reacte

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

| 🧩 Koncept | 🧠 Vysvetlenie | 💬 Príklad použitia v tejto aplikácii |
|-------------|----------------|---------------------------------------|
| `useState()` | Umožňuje komponentu uchovávať vlastné dáta (napr. text inputu alebo zoznam úloh). | `const [todos, setTodos] = useState([])` |
| `onChange` | Sleduje, čo používateľ píše do inputu, a mení hodnotu v state. | `<input value={text} onChange={(e) => setText(e.target.value)} />` |
| `onSubmit` | Spustí funkciu pri odoslaní formulára (napr. pridanie novej úlohy). | `<form onSubmit={handleSubmit}>...</form>` |
| `map()` | Prechádza cez pole úloh a pre každú vytvorí JSX element (li). | `{todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}` |
| `filter()` | Vytvorí nové pole bez konkrétnej úlohy (napr. pri vymazaní). | `setTodos(todos.filter((todo) => todo.id !== id))` |
| `className` | Nastavuje CSS triedu pre element. V Reacte sa nepoužíva `class`, ale `className`. | `<li className={todo.done ? "done" : ""}>` |
| `checked` | Riadi, či je checkbox zaškrtnutý (viazané na state). | `<input type="checkbox" checked={todo.done} />` |
| `value` | Spája input s hodnotou v React state (kontrolovaný input). | `<input value={text} />` |
| `key` | Jedinečný identifikátor pre každý prvok v cykle `map()` — pomáha Reactu efektívne renderovať. | `<li key={todo.id}>...</li>` |
| `event.preventDefault()` | Zastaví štandardné správanie formulára (refresh stránky). | `e.preventDefault()` vo funkcii `handleSubmit()` |
| `setState` (napr. `setTodos`) | Funkcia na zmenu hodnoty v state — vytvorí nový stav a spôsobí prekreslenie komponentu. | `setTodos([...todos, newTodo])` |
| `JSX` | Syntax, ktorá kombinuje HTML a JavaScript — React ju používa na tvorbu UI. | `return (<div><h1>TODO App</h1></div>)` |

### 💅 Štýly
Štýly sa nachádzajú v súbore App.css, ktorý sa načítava automaticky.
Používame len základné CSS — žiadne knižnice, aby bolo jasné, čo robí React a čo CSS.

### 📚 Čo sa naučíš
* ✅ Základy React komponentov
* ✅ Práca so state a eventami
* ✅ Riešenie problémov s renderovaním
* ✅ Práca s políčkami (map, filter)
* ✅ Tvorba malého projektu od nuly
