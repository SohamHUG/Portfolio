## 👋 Hi, I'm Soham HUGUENIN

I’m a 23 year old full-stack developer based in France.  
Welcome to my personal developer portfolio!  
This website showcases my projects, technical skills, and allows visitors to get in touch with me.


🌐 [Live Site](https://sohamh974.com)  
📁 [Source Code on GitHub](https://github.com/SohamHUG/portfolio)

---

## ✨ Features

- Project showcase with live previews, tech stack, and GitHub/demo links
- Animated interface using Framer Motion
- Modern, fully responsive design (mobile/tablet/desktop)
- Scroll animations and subtle UI interactions
- Working contact form (sends to email)
- Smooth navigation using React Router DOM

---

## 🛠️ Tech Stack

### Frontend:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/) *(optional, depending on your implementation)*
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 Project Structure

```bash
portfolio/
├── public/
│   └── assets/ (icon, img, etc.)
├── src/
│   ├── components/ (Hero, ProjectsList, Header, etc.)
│   ├── pages/ (Home, Projects, Contact, etc.)
│   ├── data/ (projects, skills...)
│   ├── index.css
│   └── main.tsx / App.tsx
├── package.json
└── README.md
```
---

## 🚀 Getting Started Locally

To run this portfolio locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/SohamHUG/portfolio.git
cd portfolio
```

### 2. Configure environment variables
- Duplicate the .env.example file as .env and fill in the required variables:
```bash
cp .env.example .env
```

### 3. Install dependencies
- Make sure you have Node.js installed, then run:
```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```
- This will start the app locally on http://localhost:5173 (default for Vite).