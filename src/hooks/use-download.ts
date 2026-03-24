const GITHUB_RELEASE_BASE =
  "https://github.com/roxana-doc/monorepo/releases/latest/download";

type Platform = "mac" | "windows" | "unknown";

function detectPlatform(): Platform {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";
  return "unknown";
}

export function useDownload() {
  const platform = detectPlatform();

  const urls = {
    mac: `${GITHUB_RELEASE_BASE}/Roxana-Free-mac.dmg`,
    windows: `${GITHUB_RELEASE_BASE}/Roxana-Free-win.zip`,
  };

  return {
    platform,
    downloadUrl: platform === "unknown" ? null : urls[platform],
    urls,
  };
}
