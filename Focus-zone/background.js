// Manifest v3 service worker
chrome.runtime.onStartup.addListener(() => {
    // Website blocking
    chrome.webRequest.onBeforeRequest.addListener(
        (details) => {
            const blockedSites = [
                "facebook.com",
                "twitter.com",
                "instagram.com"
            ];

            const url = new URL(details.url);
            const domain = url.hostname.toLowerCase();

            if (blockedSites.includes(domain)) {
                return { cancel: true };
            }
        }, { urls: ["<all_urls>"] }, ["blocking"]
    );
});