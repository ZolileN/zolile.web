const INDEXNOW_KEY = "7f3a9c2e1b8d4f6a";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev.mlkcomputer.com").replace(/\/$/, "");
const INDEXABLE_PATHS = ["/", "/zolile-nonzapa", "/projects"];

function absoluteUrl(path = "") {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const host = new URL(SITE_URL).host;
const urls = INDEXABLE_PATHS.map((path) => absoluteUrl(path));

async function notifyIndexNow() {
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: absoluteUrl(`/${INDEXNOW_KEY}.txt`),
      urlList: urls,
    }),
  });

  console.log(`[indexnow] status ${response.status}`);
}

async function pingSitemap() {
  const sitemapUrl = encodeURIComponent(absoluteUrl("/sitemap.xml"));
  const endpoints = [
    `https://www.bing.com/ping?sitemap=${sitemapUrl}`,
    `https://www.google.com/ping?sitemap=${sitemapUrl}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint);
      console.log(`[sitemap-ping] ${endpoint} -> ${response.status}`);
    } catch (error) {
      console.warn(`[sitemap-ping] failed for ${endpoint}`, error);
    }
  }
}

async function main() {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    console.log("[search-notify] skipped (non-production deploy)");
    return;
  }

  await Promise.allSettled([notifyIndexNow(), pingSitemap()]);
}

main().catch((error) => {
  console.warn("[search-notify] failed:", error);
});
