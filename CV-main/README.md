# Samuel Madsen — personal CV website

A responsive website made with **HTML, CSS, and plain JavaScript**.
No Python, Java, frameworks, packages, or build tools are required.

## Open the website

1. Extract the ZIP (right-click → Extract All on Windows).
2. Open the extracted `CV-main` folder.
3. Double-click `index.html`. It opens in your browser.

Keep the files together: the HTML needs `styles.css`, `app.js`, and `assets`.

## What to edit

You can use any text editor, including Notepad or Visual Studio Code.

| File | Purpose | What you can change |
| --- | --- | --- |
| `index.html` | Content and page structure | Your introduction, roles, projects, dates, email, and links |
| `styles.css` | Appearance | Colors, fonts, spacing, and mobile layouts |
| `app.js` | Small interactions | Mobile menu, navigation highlighting, and footer year |
| `assets/Samuel_Madsen_CV.pdf` | Downloadable CV | Replace it with your updated PDF, keeping the filename |
| `cv-print.html` | Existing printable CV | Edit CV text here, then print to PDF |
| `assets/favicon.svg` | Browser tab icon | Your initials and colors |
| `server.mjs` | Optional JavaScript preview server | Normally no edits needed |

HTML describes the content. CSS controls how it looks. JavaScript adds behavior.
The main files contain comments identifying each section. Most text edits require
only `index.html`; you do not need to learn JavaScript first.

### Change text

Find the sentence in `index.html` and edit the text between its tags:

```html
<h3>Student Assistant in IT</h3>
<p class="organization">Novo Nordisk</p>
```

Save the file and refresh your browser to see the change.

### Change the accent color

At the top of `styles.css`, change:

```css
--accent: #2864df;
```

### Update the downloadable CV

The original PDF is preserved. To edit it using the included source:

1. Update `cv-print.html` in your text editor.
2. Open that file in a browser.
3. Press Ctrl+P (Windows) or Cmd+P (Mac).
4. Choose Save as PDF, A4 paper, enable background graphics, and turn off browser headers/footers.
5. Save as `Samuel_Madsen_CV.pdf` in `assets`, replacing the old PDF.

Website text and PDF text are separate; update both when your experience changes.
The existing `assets/cv-preview.png` is retained but is not displayed by the new design.

## Optional: preview with JavaScript / Node.js

Opening `index.html` directly is enough. If you already have Node.js installed,
open a terminal in the project folder and run:

```sh
node server.mjs
```

Open http://127.0.0.1:4173. Stop the server with Ctrl+C.
No `npm install` is needed. This is a local preview server, not a production backend.

## Update your GitHub repository

Replace the website files in `Samuel8887/CV` with the contents of this folder.
`index.html` must be at the repository root, not inside another `CV-main` folder.
Keep the included `.github/workflows/deploy-pages.yml` workflow and `.nojekyll` file.
The existing workflow publishes pushes to `main` if GitHub Pages is configured
with GitHub Actions. This delivery does not publish or change your remote repository.

Old Python dependencies in `.deps/`, old `.log` files, and the old machine-specific
capture/generation/test scripts are not needed and are excluded from this ZIP.
You can remove those old files from your repository when replacing the site.

## Design notes

- Responsive layout for desktop and phone screens.
- Dedicated project cards for Map of Denmark and Chirp.
- Existing biographical facts, email, roles, and PDF retained.
- Project illustrations are conceptual, not screenshots of your applications.
- GitHub links lead to your profile; add project-specific links once you have their URLs.
- No external fonts, analytics, cookies, or third-party JavaScript.
- Keyboard navigation, visible focus indicators, a skip link, and reduced-motion support.
- All content and navigation remain available when JavaScript is disabled.
