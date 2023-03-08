chrome.action.disable(); // disable the extension icon

// listener for tab updates
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status !== "complete") return;

    const method = tab.url.indexOf("youtube") !== -1
        ? "enable"
        : "disable";

    chrome.action[method](tabId)
});
