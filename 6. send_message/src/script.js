document.getElementById("id_recv").onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: recvFromDomainFirst,
        });
    });
};

function recvFromDomainFirst() {
    let value = document.getElementById("id_DomainFirst").value;
    chrome.runtime.sendMessage({ method: "send", key: "key", value: value }, () => { });
}

document.getElementById("id_send").onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: sendToDomainSecond,
        });
    });
}

function sendToDomainSecond() {
    chrome.runtime.sendMessage({ method: "recv", key: "key" }, (response) => {
        document.getElementById("id_DomainSecond").value = response.value;
    });
}
