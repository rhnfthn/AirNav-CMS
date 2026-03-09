const DEFAULT_BASE_URL = "/";
const DEFAULT_BUILD_ASSETS_DIR = "/_nuxt/";

function normalizeBase(value) {
  const input = (value || DEFAULT_BASE_URL).trim();
  if (!input || input === "/") return "/";
  return `/${input.replace(/^\/+|\/+$/g, "")}/`;
}

function normalizeDir(value) {
  const input = (value || DEFAULT_BUILD_ASSETS_DIR).trim();
  return `/${input.replace(/^\/+|\/+$/g, "")}/`;
}

function stripLeadingSlash(value) {
  return String(value || "").replace(/^\/+/, "");
}

function joinURL(base, path) {
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = stripLeadingSlash(path);
  return `${cleanBase}${cleanPath}`;
}

export function baseURL() {
  return normalizeBase(process.env.NUXT_APP_BASE_URL || process.env.NITRO_APP_BASE_URL);
}

export function buildAssetsDir() {
  return normalizeDir(process.env.NUXT_APP_BUILD_ASSETS_DIR || process.env.NITRO_APP_BUILD_ASSETS_DIR);
}

export function buildAssetsURL(path = "") {
  return joinURL(baseURL(), joinURL(buildAssetsDir(), path));
}

export function publicAssetsURL(path = "") {
  return joinURL(baseURL(), path);
}
