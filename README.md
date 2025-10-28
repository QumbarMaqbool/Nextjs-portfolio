# 💼 Qumbar Maqbool – Developer Portfolio

Looking to build a modern, stylish, and fully functional portfolio website? This portfolio template is built with **Next.js + Tailwind CSS**, perfect for **developers and freelancers** who want to showcase their work, skills, and experience professionally.

This README will guide you through setup, customization, and deployment.

---

## 🌐 Live Demo

🎥 **[View Live Preview](https://qumbar.vercel.app/)**
(Replace with your actual Vercel link)

---

## 📚 Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Usage & Customization](#usage--customization)
* [Deployment](#deployment)
* [Environment Variables](#environment-variables)
* [Optional Integrations](#optional-integrations)
* [Packages Used](#packages-used)

---

## ✨ Features

* **Hero Section** – Brief intro with animation
* **About Me** – Professional summary
* **Experience** – Timeline of jobs/projects
* **Skills** – Tech stack and tools
* **Projects** – Show off your best work
* **Education**
* **Blog** – Automatically pulls posts from [dev.to](https://dev.to/)
* **Contact** – Email, Telegram integration, reCAPTCHA support

---

## ⬇️ Installation

Make sure you have:

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)

Then run:

```bash
git clone https://github.com/QumbarMaqbool/Nextjs-portfolio.git
cd Nextjs-portfolio
npm install
```

To start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it locally.

---

## 🧑‍💻 Usage & Customization

1. **Environment Setup**

Create a `.env` file based on `.env.example` and add values:

```env
NEXT_PUBLIC_GTM=
NEXT_PUBLIC_APP_URL=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GMAIL_PASSKEY=
EMAIL_ADDRESS=
```

2. **Customize Personal Info**

Update `utils/data/personalData.ts` with your own details:

```ts
export const personalData = {
  name: "Qumbar Maqbool",
  designation: "JavaScript Developer",
  email: "you@example.com",
  phone: "+92xxxxxxxxx",
  address: "Lahore, Pakistan",
  github: "https://github.com/QumbarMaqbool",
  linkedIn: "https://linkedin.com/in/your-profile",
  devUsername: "your_devto_username",
  ...
};
```

3. **Projects, Skills, and Timeline**

Edit content in the `utils/data/` folder (skills, experiences, projects, etc.).

---

## 🚀 Deployment

### ✅ Deploy to Vercel

1. Push your project to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click **New Project** and import your repo
4. Add environment variables under **Project Settings → Environment Variables**
5. Click **Deploy**

Vercel will build and host your site automatically on each `git push`.

### ✅ Deploy to Netlify (Static Export Only)

If using static export:

```bash
npm run build
npm run export
```

Then upload the `out/` folder to Netlify.

---

## 🔐 Environment Variables

| Variable               | Description                             |
| ---------------------- | --------------------------------------- |
| NEXT\_PUBLIC\_GTM      | Google Tag Manager ID                   |
| NEXT\_PUBLIC\_APP\_URL | Your portfolio base URL                 |
| TELEGRAM\_BOT\_TOKEN   | Telegram bot token from BotFather       |
| TELEGRAM\_CHAT\_ID     | Chat ID where messages will be sent     |
| GMAIL\_PASSKEY         | Google App password (for email sending) |
| EMAIL\_ADDRESS         | Your email address (from where to send) |

---

## ⚙️ Optional Integrations

### 📧 Gmail App Password

1. Enable 2FA on your Google account
2. Go to **Security > App Passwords**
3. Generate a password for "Mail" > "Other (e.g., Portfolio)"
4. Use that password for `GMAIL_PASSKEY` in `.env`


### 📰 Blog from dev.to

Set your `devUsername` in `personalData.ts`. Your latest dev.to posts will appear in the **BLOG** section.

---

## 📦 Packages Used

* `next`
* `react`, `react-dom`
* `tailwindcss`
* `sass`
* `lottie-react`
* `emailjs/browser`
* `axios`
* `nodemailer`
* `react-icons`
* `react-toastify`
* `react-fast-marquee`
* `react-google-recaptcha`
* `sharp`

---

## 🙋 FAQ

**Q: I get “next is not recognized” error?**
A: Run this once to fix it:

```bash
npm install -g next
```

---

## 👨‍💻 Built by Qumbar Maqbool

* 💼 JavaScript Developer @ Bluemeg
* 📍 Based in Lahore, Pakistan
* 🌐 [qumbarmaqbool.dev](https://qumbar.vercel.app/)

