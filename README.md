# Samuel Madsen CV Site

Personal CV site built as a static website for sharing with firms.

## Run locally

```powershell
cd "C:\Users\samut\Downloads\Codex 1"
python -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this folder to the `main` branch.
2. In GitHub, open `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push changes to `main`.
5. GitHub will publish the site using `.github/workflows/deploy-pages.yml`.

## Main files

- `index.html`: live website
- `styles.css`: site styling
- `assets/Samuel_Madsen_CV.pdf`: downloadable CV
- `assets/cv-preview.png`: preview image shown on the site
