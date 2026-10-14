# Titaneus website (static)

Open `index.html` in a browser, or upload the whole folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Edit these first
- **Email**: `data-email` on the `<body>` tag in `index.html` (currently hello@example.com). Used by the contact form and links.
- **Products**: add cards in the Products section (see the commented template). Delete the "on the way" box when ready.
- **Copy**: all text lives in `index.html`. Colors and fonts are the variables at the top of `css/style.css`.
- **Social image**: in `index.html`, change `og:image` to a full URL (https://yourdomain/assets/og-image.png) after you deploy.

## Forms
Forms open the visitor's email app. For real submissions, point the `<form>` at Formspree or use Netlify Forms, and remove `data-mail`.

## Files
`assets/` favicon, touch icon, og-image, original logo. `css/style.css`, `js/main.js`.
