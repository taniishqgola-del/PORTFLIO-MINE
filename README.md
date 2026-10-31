# Tanishq Gola — Developer Portfolio

A dark, futuristic, fully responsive portfolio built with plain **HTML, CSS and JavaScript** — no frameworks, no build step.

## Run it

Open `index.html` in any modern browser. That's it.
(Google Fonts load from the web; if you're offline, system fonts are used automatically.)

## Structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    └── icons/favicon.svg
```

## Add your real links

Open `script.js` and fill in the `CONFIG` object at the top:

```js
const CONFIG = {
  github: 'https://github.com/<your-username>',
  linkedin: 'https://www.linkedin.com/in/<your-profile>',
  email: 'you@example.com'
};
```

Until a value is set, the matching buttons show a "link coming soon" message instead of a fake link.

For each project, add `repo` (GitHub URL) and, where applicable, `demoUrl` (live demo URL) inside the `PROJECTS` array:

```js
{ id: 'house-price', name: 'House Price Prediction', /* ... */ repo: 'https://github.com/...' }
```

## Things to finish

- **Email:** the details provided were `taniishqgola` with no domain, so it is shown as given and not turned into a `mailto:` link. Set `CONFIG.email` to the full address to enable it.
- **Contact form:** validates input but has **no backend**, and says so honestly after submit. To make it send real messages, connect a service such as Formspree, Web3Forms or EmailJS (edit the submit handler in `script.js`).
- **Project write-ups:** the Overview / Problem / Solution / Features text is written only from the short descriptions provided. Edit them in `PROJECTS` as you add real detail (Student Report, SmartFoodOrdering and PowerShell are intentionally minimal).
- **Skills:** shown as grouped tags with no percentages, since no proficiency evidence was provided.
- **Stats:** "15+ GitHub Projects" is the only number used. The bar chart in the GitHub section is computed from the project list on this page, not from live GitHub data.

## Customising

- Colours and radii: CSS variables at the top of `style.css`.
- Featured projects: `FEATURED_IDS` in `script.js`.
- Animations respect `prefers-reduced-motion`.
