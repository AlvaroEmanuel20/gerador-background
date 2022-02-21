
function gerarCor() {
    const hexRandom = Math.floor(Math.random()*16777215).toString(16);
    const color = '#' + hexRandom;
    document.getElementById('corpo').style.background = color;
    document.getElementById('hex-code').value = 'hexadecimal: ' + color;
}