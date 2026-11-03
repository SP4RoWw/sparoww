# SPAROWW — Complete website source

The latest portfolio, with the four supplied project covers. This is a static HTML/CSS/JavaScript website. All images and the portrait mask are included. No npm packages or build step are required.

## Open locally

1. Extract the ZIP first.
2. With Python 3 installed, run `python start-preview.py` from this folder. On Windows you can double-click `START-PREVIEW.bat`.
3. The preview opens automatically in your browser. Press Ctrl+C in the terminal to stop it.

Use the local server for the complete experience, including the transparent portrait mask. Simply opening `index.html` may trigger local-file restrictions in some browsers.

Alternative: run `python -m http.server 8000` and open `http://localhost:8000`.

## Edit

- `index.html` — page content, navigation, contact links and layout.
- `styles.css` — base responsive styles.
- `light-theme.css` — final white/blue theme, project frames, portrait, ticker and scroll effects.
- `app.js` — mobile menu, animations, pause/resume, pointer tilt and scroll interactions.
- `projects.js` — the four project images and their Behance destinations.
- `assets/` — original logo, portrait, extraction mask, background and project covers.
- `PROJECT-NOTES.md` — detailed project and asset notes.

Category order: Social Media, Sports, Logos, Branding. Each card currently opens `https://www.behance.net/sparoww`. Replace its `behanceUrl` in `projects.js` when you want a specific project URL.

The Start a conversation button opens WhatsApp at `https://wa.me/212642746093`.

## Host elsewhere

Upload this folder's website files, keeping `index.html` at the hosting root and preserving the `assets/` folder. The Python launcher is only for local preview and is not required by a static host.

The source is editable and all runtime assets are included.
