# ✅ Todo App

A modern Todo App built with **React**, **Context API**, and **Tailwind CSS**.

The application allows users to create, edit, complete, and delete tasks while automatically saving all changes to the browser's **localStorage**. Tasks remain available even after refreshing or closing the browser, providing a simple yet practical example of persistent client-side state management.

---

## 🚀 Features

* ✅ Add new tasks
* ✏️ Edit existing tasks
* 🗑️ Delete tasks
* ☑️ Mark tasks as completed
* 💾 Automatic localStorage persistence
* 🔄 Data survives page refreshes and browser restarts
* ⚡ Fast and responsive user experience
* 🎨 Modern glass-inspired interface

---

## 🛠️ Built With

* React
* Vite
* Tailwind CSS
* Context API
* localStorage

---

## 📂 Project Structure

```text
src/
│
├── assets/
│   ├── logo-1.png
│   ├── pencil-edit.png
│   ├── save.png
│   └── trash-delete.png
│
├── components/
│   ├── GlassCard.jsx
│   ├── Todo.jsx
│   └── TodoInput.jsx
│
├── context/
│   ├── index.js
│   └── TodoContext.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd todo-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 💾 Local Storage Persistence

One of the core features of this project is automatic data persistence using the browser's localStorage.

Whenever a todo is:

* Added
* Edited
* Deleted
* Marked as completed

the application immediately updates localStorage so that the latest state is preserved.

This means users can:

* Refresh the page without losing tasks
* Close and reopen the browser
* Continue where they left off

Example stored data:

```json
[
  {
    "id": 1748600000000,
    "todo": "Learn React Context API",
    "completed": false
  },
  {
    "id": 1748600000001,
    "todo": "Build Todo App",
    "completed": true
  }
]
```

---

## 🎨 User Interface

The application uses a clean, modern interface featuring:

* Glass-inspired cards
* Soft transparency effects
* Blurred background elements
* Rounded layouts
* Gradient action buttons

The design emphasizes readability while keeping the interface visually appealing.

---

## 📚 Concepts Practiced

This project helped reinforce:

* React Components
* Props
* State Management with Hooks
* Context API
* CRUD Operations
* Local Storage Persistence
* List Rendering and Keys
* React Reconciliation
* Responsive Design with Tailwind CSS

---

## 🔮 Future Improvements

* Search todos
* Filter by status (All / Active / Completed)
* Task categories
* Due dates
* Drag-and-drop reordering
* Theme customization

---

## 📄 License

This project is open source and available under the MIT License.
