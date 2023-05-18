const hexInput = document.getElementById('hex-input');
const pressBtn = document.getElementById('pressBtn');
const displayDiv = document.getElementsByClassName('display-div');
const ri = document.getElementById('val-1');
const gi = document.getElementById('val-2');
const bi = document.getElementById('val-3');

pressBtn.addEventListener('click', () => {
    console.log(hexInput.value);
    if (isValidHex(hexInput.value)) {
        const hex = hexInput.value;
        const rgb = convertHexToRGB(hex);
        const { r, g, b } = rgb;
        console.log(`RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`);
        ri.innerHTML = r;
        gi.innerHTML = g;
        bi.innerHTML = b;
        const rgbValue = `rgb(${r}, ${g}, ${b})`;
        displayDiv.style.backgroundColor = rgbValue;
    }
    else {
        alert('Please enter a valid hex value!');
    }
});



const convertHexToRGB = hex => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
}

const isValidHex = hex => {
    return /^#[0-9A-F]{6}$/i.test(hex); // Regular expression
}


