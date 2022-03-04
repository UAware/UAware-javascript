import messages from "./messages.json";

const getRandomMessage = () =>
  messages[Math.floor(Math.random() * messages.length)];

const createBannerElement = () => {
  const banner = document.createElement("div");
  banner.textContent = getRandomMessage();

  // Positioning
  banner.style.zIndex = "1000";
  banner.style.position = "absolute";
  banner.style.right = "0";
  banner.style.left = "0";
  banner.style.top = "0";
  banner.style.padding = "1rem";

  // Visual
  banner.style.backgroundColor = "#ffd700"; // Ukraine yellow
  banner.style.borderColor = "#0057b7"; // Ukraine blue
  banner.style.borderStyle = "solid";
  banner.style.borderWidth = "1rem";

  // Text formatting
  banner.style.fontFamily = "Arial, Helvetica, sans-serif";
  banner.style.fontWeight = "bold";
  banner.style.fontSize = "2rem";
  banner.style.color = "black";
  banner.style.textAlign = "center";

  return banner;
};

/**
 * Communicates with cloudflare worker to identify requests from target locales
 *
 * Resolves to a boolean indicating whether client is in target locale
 */
const fetchIsClientInTarget = () =>
  fetch("https://ip.generic-w.workers.dev")
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.text();
    })
    .then((responseText) => responseText === "true")
    // Silently ignore any failures
    .catch(() => false);

/**
 * Mounts banner to document if and only if client is in target locale
 */
const mountBanner = () =>
  fetchIsClientInTarget().then((isInTarget) => {
    if (isInTarget) document.body.appendChild(createBannerElement());
  });

mountBanner();
