/**
 * Download assets for About Us + Service pages from cdn.famekeeda.com
 */
import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.resolve(__dirname, "..", "public", "sites", "famekeeda-com-a1b2c3d4", "root-e5f6g7h8");

const ASSETS = [
  // About Us - Story Cards
  { url: "https://cdn.famekeeda.com/assets/aboutUs/iconic-character.webp", dest: "about/iconic-character.webp" },
  { url: "https://cdn.famekeeda.com/assets/aboutUs/genesis.webp", dest: "about/genesis.webp" },
  { url: "https://cdn.famekeeda.com/assets/aboutUs/visionaries.webp", dest: "about/visionaries.webp" },
  { url: "https://cdn.famekeeda.com/assets/aboutUs/evolution.webp", dest: "about/evolution.webp" },
  { url: "https://cdn.famekeeda.com/assets/aboutUs/future.webp", dest: "about/future.webp" },

  // About Us - Team
  { url: "https://cdn.famekeeda.com/assets/meetOurTeam/whole-team-img.webp", dest: "about/whole-team-img.webp" },
  { url: "https://cdn.famekeeda.com/assets/meetOurTeam/founders-img.webp", dest: "about/founders-img.webp" },
  { url: "https://cdn.famekeeda.com/assets/meetOurTeam/reena_rose.webp", dest: "about/reena_rose.webp" },
  { url: "https://cdn.famekeeda.com/assets/meetOurTeam/rumana.webp", dest: "about/rumana.webp" },
  { url: "https://cdn.famekeeda.com/assets/meetOurTeam/shraddha.webp", dest: "about/shraddha.webp" },
  { url: "https://cdn.famekeeda.com/assets/meetOurTeam/robin.webp", dest: "about/robin.webp" },
  { url: "https://cdn.famekeeda.com/assets/meetOurTeam/aashish.webp", dest: "about/aashish.webp" },
  { url: "https://cdn.famekeeda.com/assets/meetOurTeam/harshal.webp", dest: "about/harshal.webp" },

  // Philosophy GIFs
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/target.gif", dest: "about/target.gif" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/view.gif", dest: "about/view.gif" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/value.gif", dest: "about/value.gif" },

  // Success Stories logos
  { url: "https://cdn.famekeeda.com/assets/success-stories/intel.svg", dest: "success-stories/intel.svg" },
  { url: "https://cdn.famekeeda.com/assets/success-stories/amazon.svg", dest: "success-stories/amazon.svg" },
  { url: "https://cdn.famekeeda.com/assets/success-stories/mstock.svg", dest: "success-stories/mstock.svg" },
  { url: "https://cdn.famekeeda.com/assets/success-stories/policy.webp", dest: "success-stories/policy.webp" },

  // Show Reel Thumbnails
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/PolicyBazaar_Thumbnail.webp", dest: "showreel/PolicyBazaar_Thumbnail.webp" },
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/CEAT_Thumbnail.webp", dest: "showreel/CEAT_Thumbnail.webp" },
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/Kotak_Thumbnail.webp", dest: "showreel/Kotak_Thumbnail.webp" },
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/Mobikwik_Thumbnail.webp", dest: "showreel/Mobikwik_Thumbnail.webp" },
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/Skybags_Thumbnail.webp", dest: "showreel/Skybags_Thumbnail.webp" },
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/Mstock_Thumbnail.webp", dest: "showreel/Mstock_Thumbnail.webp" },
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/Amazon_Thumbnail.webp", dest: "showreel/Amazon_Thumbnail.webp" },
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/Duracell_Thumbnail.webp", dest: "showreel/Duracell_Thumbnail.webp" },
  { url: "https://cdn.famekeeda.com/assets/home-hero_assets/show_reels_section/Intel_Thumbnail.webp", dest: "showreel/Intel_Thumbnail.webp" },

  // Service Page Hero Images
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/hero_section/product.webp", dest: "services/hero-product.webp" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/hero_section/brand.webp", dest: "services/hero-brand.webp" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/hero_section/content.webp", dest: "services/hero-content.webp" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/hero_section/barter.webp", dest: "services/hero-barter.webp" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/hero_section/celebrity.webp", dest: "services/hero-celebrity.webp" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/hero_section/ad-film.webp", dest: "services/hero-ad-film.webp" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/hero_section/ugc.webp", dest: "services/hero-ugc.webp" },
  { url: "https://cdn.famekeeda.com/assets/service-pages_assets/hero_section/meme.webp", dest: "services/hero-meme.webp" },
];

function download(url, destPath, redirectCount = 0) {
  if (redirectCount > 5) {
    console.error(`  ✗ Too many redirects: ${url}`);
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const dir = path.dirname(destPath);
    fs.mkdirSync(dir, { recursive: true });

    const client = url.startsWith("https") ? https : http;
    client.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = res.headers.location.startsWith("http")
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        res.resume();
        resolve(download(redirectUrl, destPath, redirectCount + 1));
        return;
      }
      if (res.statusCode !== 200) {
        console.error(`  ✗ ${res.statusCode} — ${url}`);
        res.resume();
        resolve();
        return;
      }
      const ws = fs.createWriteStream(destPath);
      res.pipe(ws);
      ws.on("finish", () => {
        ws.close();
        const size = fs.statSync(destPath).size;
        console.log(`  ✓ ${path.relative(BASE, destPath)} (${(size / 1024).toFixed(1)} KB)`);
        resolve();
      });
      ws.on("error", (err) => {
        console.error(`  ✗ Write error: ${err.message}`);
        resolve();
      });
    }).on("error", (err) => {
      console.error(`  ✗ ${err.message} — ${url}`);
      resolve();
    });
  });
}

async function main() {
  console.log(`Downloading ${ASSETS.length} assets to ${BASE}...\n`);
  let ok = 0;
  for (const a of ASSETS) {
    const destPath = path.join(BASE, a.dest);
    if (fs.existsSync(destPath)) {
      console.log(`  ⊘ Already exists: ${a.dest}`);
      ok++;
      continue;
    }
    await download(a.url, destPath);
    if (fs.existsSync(destPath)) ok++;
  }
  console.log(`\nDone: ${ok}/${ASSETS.length} assets downloaded.`);
}

main();
