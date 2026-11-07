# Clara K. — Portfolio

Clara's portfolio homepage, built from the Figma frame
[Nov 2026 colors & styles → homepage](https://www.figma.com/design/cpT7vyLeTVgZdZYmdYSai5/Nov-2026-colors---styles?node-id=2002-5).
Colors, fonts (Hepta Slab, Inter, Source Code Pro), and spacing come straight from that file.

It is a [Next.js](https://nextjs.org) site that builds into plain HTML/CSS files ("static export"),
so it can be hosted on GitHub Pages.

## Changing the content

Almost everything you'd want to edit lives in **`src/content/site.ts`**:

- Your role line, the About text in the footer, and the Email / LinkedIn links
  (for email, use the form `mailto:you@example.com`).
- The **Recent Work** and **Case Studies** projects: title, short summary, tags, and where the
  **View** button goes.
- To show an image instead of a colored panel, put the file in `public/work/` and set
  `image: "/work/your-file.png"` on that project.

Colors live at the top of `src/app/globals.css`, named after the Figma styles
(`Stone/lightbg`, `Green/olive`, `Wood/dark`, …). The profile photo is `src/assets/profile.jpg`.

## Running it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # first time only
npm run dev      # live preview at http://localhost:4627
```

To check the exact files that will be published:

```bash
npm run build    # writes the finished site to the out/ folder
npm run preview  # serves out/ at http://localhost:4628
```

## Publishing on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site every time `main`
is pushed.

1. In the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The site appears at `https://<username>.github.io/<repo-name>/`.
3. When you're ready to move your domain: in **Settings → Pages → Custom domain**, enter your
   domain, then update the DNS records in Cloudflare to point at GitHub Pages (remove the
   custom domain from the old site's repo first). The next deploy automatically switches from the
   `/<repo-name>/` address to your domain.
