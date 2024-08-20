const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (kk) {
        // console.log(kk);
        // console.log(kk.target);
        if (kk.target.id === "red") {
            body.style.backgroundColor = kk.target.id;
            kk.target.style.backgroundColor = "white";
            kk.target.innerHTML = "red";
            kk.target.style.color = kk.target.id;
        }
        if (kk.target.id === "aqua") {
            body.style.backgroundColor = kk.target.id;
            kk.target.style.backgroundColor = "white";
            kk.target.innerHTML = kk.target.id;
            kk.target.style.color = kk.target.id;

        }
        if (kk.target.id === "yellow") {
            body.style.backgroundColor = kk.target.id;
            kk.target.style.backgroundColor = "white";
            kk.target.innerHTML = kk.target.id;
            kk.target.style.color = kk.target.id;

        }
        if (kk.target.id === "pink") {
            body.style.backgroundColor = kk.target.id;
            kk.target.style.backgroundColor = "white";
            kk.target.innerHTML = kk.target.id;
            kk.target.style.color = kk.target.id;

        }
    })

})