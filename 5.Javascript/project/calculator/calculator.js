// let string = "";
// let buttons = document.querySelectorAll('#button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('#write').value = string;
//         } else if (e.target.innerHTML == 'C') {
//             string = ""
//             document.querySelector('#write').value = string;
//         }
//         else {
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector('#write').value = string;
//         }
//     })
// })




// script.js
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText) || '0';
    } catch (e) {
        display.innerText = 'Error';
    }
}
