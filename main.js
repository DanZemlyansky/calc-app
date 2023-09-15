// function addFunc() {
//     const NUM1 = +document.getElementById('num1').value;
//     const NUM2 = +document.getElementById('num2').value;

//     switch (true) {
//         case isNaN(NUM1 || isNaN(NUM2)):
//             document.getElementById('result').innerText = 'Please enter a number.';
//             return;
//         default:
//             document.getElementById('result').innerText = NUM1 + NUM2;
//             return;
//     }

// } 


//basic add function basis for calc 

const INPUT = document.getElementById('cInput');
const NUM_BTNS = document.getElementById('numbers');

for (let i = 0; i < 10; i++) {
    NUM_BTNS.innerHTML += `<button class="num">${i}</button>`
}

function numPress(event) {
    const clickedButtonValue = event.target.textContent;

    INPUT.value += clickedButtonValue;
}

document.querySelectorAll('.num').forEach((button) => {
    button.addEventListener('click', numPress);
})

// switch(){
//     case
// }