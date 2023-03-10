const elmDownload = document.getElementById('downloader');
const elmURL = document.getElementById('url');
const elmFileName = document.getElementById('filename');
const elmStart = document.getElementById('start');
const elmEnd = document.getElementById('end');
const elmExt = document.getElementById('ext');

elmDownload.onclick = () => {
    const url = elmURL.value;
    const filename = elmFileName.value;
    const start = elmStart.value;
    const end = elmEnd.value;
    const ext = elmExt.value;

    let zeroPadding = false;
    let digits;
    if (start.substring(0, 1) === '0') {
        zeroPadding = true;
        digits = start.length;
    }

    let number = start;

    while (1) {
        chrome.downloads.download({
            filename: filename + number + "." + ext,
            url: url + filename + number + "." + ext
        });

        if (number === end) break;

        let intNumber = parseInt(number);
        intNumber++;
        number = String(intNumber);

        if (zeroPadding) {
            number = number.padStart(digits, '0');
        }
    }
}
