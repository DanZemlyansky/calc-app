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


const numBtns = document.getElementsById('numbers');

for (let i = 0; i < 10; i++) {
    numBtns.innerHTML = `<div class = "num">${i}</div>`
}
