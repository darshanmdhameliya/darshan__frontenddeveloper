const form = document.querySelector('form')
const Calculator = document.querySelector('#Calculator')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const result1 = document.querySelector('#result1');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid Weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10))
        result.innerHTML = `<span>${bmi}</span>`;
        console.log(result.innerHTML);
        document.querySelector('#height').value = '';
        document.querySelector('#weight').value = '';
        if (result.innerText < 18.6) {
            result1.innerText = `Under weight = less then 18.6 becuase value is ${result.innerText}`;
        } else if (result.innerText >= 18.6 && result.innerText <= 24.9) {
            result1.innerText = `Normal Range = 18.6 and 24.9 becuase value is ${result.innerText}`;
        } else {
            result1.innerText = `Overwight = Greater then becuase value is ${result.innerText}`;
        }
    }


});
Calculator.addEventListener('click', function () {

})
