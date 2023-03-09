const elmClose = document.getElementById('close');

elmClose.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
        const currentTab = activeTabs[0];
        chrome.tabs.query({ currentWindow: true }, (allTabs) => {
            allTabs
                .filter(tab => tab.id !== currentTab.id)
                .forEach(tab => chrome.tabs.remove(tab.id));
        });
    });
};
