# Hazel Anne B. Marqueses — Portfolio

A professional portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** for a Project Manager & QA Specialist.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
hazel-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.jsx        # Root layout with ThemeProvider & metadata
│   │   └── page.jsx          # Main page — assembles all sections
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed nav with scroll detection, theme toggle, social links
│   │   ├── Hero.jsx           # Hero section with staggered entrance animations
│   │   ├── Projects.jsx       # Expandable case study cards
│   │   ├── Experience.jsx     # Filterable experience cards
│   │   ├── Skills.jsx         # Skill quadrants + resume CTA
│   │   ├── Contact.jsx        # Split contact layout with mailto form
│   │   ├── Footer.jsx         # Footer with social links
│   │   └── SectionHeader.jsx  # Reusable animated section header
│   ├── lib/
│   │   ├── data.js            # ⭐ All portfolio content lives here
│   │   ├── ThemeContext.jsx   # Dark/light mode context + localStorage
│   │   └── useScrollReveal.js # Intersection Observer scroll animation hook
│   └── styles/
│       └── globals.css        # CSS custom properties, theme variables, utilities
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

---

## ✏️ Customizing Your Content

**All content is centralized in one file:** `src/lib/data.js`

### Update your social links
```js
export const SOCIAL = {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
  email: 'your@email.com',
  phone: 'your phone',
  location: 'Your Location',
}
```

### Add or edit projects
Each project in the `PROJECTS` array supports:
- `tag` — category label shown on the card
- `title`, `subtitle`, `duration`, `client`, `role`
- `tools` — array of tool/stack names
- `accent` — hex color for this project's theme
- `overview`, `problem`, `approach[]`, `qa`, `outcome` — case study fields

### Add work experience
Each entry in `EXPERIENCE` has a `category` field:
- `"pm"` → shows under Project Management filter
- `"qa"` → shows under QA & Testing filter
- `"tech"` → shows under Technical filter

---

## 🌗 Dark / Light Mode

- Defaults to system preference on first visit
- User preference is saved to `localStorage`
- Toggle button is in the top-right navbar
- Theme is controlled via CSS custom properties in `globals.css`

---

## 🎞️ Scroll Animations

Animations use a custom `useScrollReveal` hook (`src/lib/useScrollReveal.js`) built on the Intersection Observer API — no heavy animation libraries required.

- Each section fades up as it enters the viewport
- Cards stagger with index-based `animation-delay`
- Hero section uses CSS transition stagger on mount

---

## 🌐 Deployment

### Vercel (recommended — free)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select your repo → Deploy

### Netlify
```bash
npm run build
# Upload the `.next` folder or connect your GitHub repo
```

---

## 🔗 Replacing Placeholder Links

Search for these placeholders in `src/lib/data.js` and replace:

| Placeholder | Replace with |
|---|---|
| `https://github.com/hazelmarqueses` | Your GitHub profile URL |
| `https://linkedin.com/in/hazelmarqueses` | Your LinkedIn profile URL |

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | React framework with App Router |
| `react` / `react-dom` | UI library |
| `tailwindcss` | Utility CSS (used minimally, mostly CSS vars) |
| `framer-motion` | Available for future animation enhancements |

---

## 💡 Tips

- **Add a profile photo**: Place your image in `public/` and add an `<Image>` component in `Hero.jsx`
- **Add your actual resume**: Place `resume.pdf` in `public/` and update the resume button `href` in `Skills.jsx`
- **Custom domain**: Set up on Vercel under Project Settings → Domains
