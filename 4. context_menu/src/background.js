chrome.runtime.onInstalled.addListener(() => {
    // create context menu
    chrome.contextMenus.create({
        id: "context_menu",
        title: "Search Twitter for '%s'",
        type: "normal",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info) => {
    chrome.tabs.create({
        url: "https://twitter.com/search?q=" + encodeURIComponent(info.selectionText)
    });
});
