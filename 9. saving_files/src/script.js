const elmSave = document.getElementById('save');
const elmOpen = document.getElementById('open');
const elmNote = document.getElementById('note');

elmSave.onclick = () => {
    const note = elmNote.value;
    const objectURL = window.URL.createObjectURL(new Blob([note], { type: 'text/plain' }));
    const a = document.createElement('a');
    a.download = 'download.txt';
    a.href = objectURL;
    a.click();
};

elmOpen.onchange = () => {
    const file = elmOpen.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        elmNote.value = reader.result;
    };
    reader.readAsText(file);
};
