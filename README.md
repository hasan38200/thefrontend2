# The Right Talent

React 19 + React Router v7 + Tailwind CSS + Framer Motion + Lenis.

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in /dist

## Where to edit
- Home sections: `src/sections/home/<Section>/index.jsx`
- Lists (nav, categories, method cards, scorecard, packages, retainers, steps, difference rows, talent, clients): `src/data/index.js`
- Online image links: `src/data/images.js`
- Submit a brief page (brands + creators forms): `src/pages/Brief/`
- Nav / Footer / Preloader / Cursor: `src/components/`
- Colors and fonts: `tailwind.config.js`; fonts are loaded in `index.html`
- Logos: `public/logo.png`, `public/logo-transparent.png`, `public/logo-footer.png`, `public/logo-mark.png`

Forms validate on the client and show a confirmation. Connect them to your backend/Formspree where the `TODO` comments are in `BrandForm` and `CreatorForm`.
Placeholders in [BRACKETS] (email, phone, city, testimonials, talent portraits) need replacing before launch.
