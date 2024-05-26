// block.js

// Function to block download requests
function blockDownloads(details) {
  console.log(`Blocking download from: ${details.url}`);
  return { cancel: true };
}

// Function to block upload requests
function blockUploads(details) {
  console.log(`Blocking upload to: ${details.url}`);
  return { cancel: true };
}

// Add listener to block all download requests
chrome.webRequest.onBeforeRequest.addListener(
  blockDownloads,
  { urls: ["<all_urls>"], types: ["other"] }, // "other" includes downloads
  ["blocking"]
);

// Add listener to block all upload requests
chrome.webRequest.onBeforeSendHeaders.addListener(
  blockUploads,
  { urls: ["<all_urls>"], types: ["xmlhttprequest"] },
  ["blocking"]
);
