// Manifest v3 content script
chrome.scripting.registerContentScript({
    matches: ["<all_urls>"],
    js: [{ file: "content.js" }],
    runAt: "document_end"
});

// Hide YouTube Shorts
function hideYouTubeShorts() {
    const shortsContainer = document.querySelector("#secondary");
    if (shortsContainer) {
        shortsContainer.style.display = "none";
    }
}

hideYouTubeShorts();

// Observe mutations for YouTube Shorts
const observer = new MutationObserver(hideYouTubeShorts);
observer.observe(document, { childList: true, subtree: true });