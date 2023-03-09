const elmColors = document.getElementsByName('color');
const colors = ["red", "blue"];

for (let i = 0; i < elmColors.length; i++) {
    elmColors[i].onclick = () => {
        // get active tab 
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            // execute script
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: setBackgroundColor,
                args: [colors[i]]
            });
        });
    };
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
