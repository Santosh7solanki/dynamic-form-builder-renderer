# Dynamic Form Builder & Renderer

A modern Dynamic Form Builder application built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

This application allows users to dynamically create custom forms, render them, validate inputs, and persist form configurations using localStorage.

---

## 🚀 Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Hooks (useState, useEffect)
* Local Storage

---

## ✨ Features

### Form Builder

* Add dynamic form fields
* Supported field types:

  * Text
  * Number
  * Dropdown
  * Checkbox
* Mark fields as required
* Add and remove dropdown options
* Reorder fields using Up / Down actions
* Delete fields
* Form schema managed using React state

### Form Renderer

* Dynamically renders form based on schema
* Controlled form inputs
* Required field validation
* Inline validation messages
* Form submission handling
* Display submitted data in JSON format

### Persistence

* Form schema stored in localStorage
* Automatically restores schema after page refresh

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to project folder:

```bash
cd <project-name>
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## 🛠 Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint checks.

---

## 📂 Project Structure

```txt
src/
│
├── app/
│   └── page.tsx
│
├── components/
│   ├── FormBuilder.tsx
│   ├── FormRenderer.tsx
│   └── FieldCard.tsx
│
└── lib/
```

---

## 🎯 Assignment Requirements Covered

✔ Dynamic Form Builder

✔ Dynamic Form Renderer

✔ Controlled Components

✔ Required Field Validation

✔ Add / Remove Dropdown Options

✔ Field Reordering

✔ Field Deletion

✔ Local Storage Persistence

✔ JSON Output on Submit

✔ React Functional Components & Hooks

---

## 👨‍💻 Author

Santosh Solanki
