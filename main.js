
let input = document.getElementById('input');






const NUMBERS = document.getElementsByClassName('number');
const OPERATOR = document.getElementsByClassName('operator');
let GET_RESULT = document.getElementById('getResult');

for (let i = 0; i < 10; i++) {
    document.getElementById('numbers').innerHTML += `<button class="number">${i}</button>`
}



for (const numberElement of NUMBERS) {
    numberElement.addEventListener('click', addNum);
}

for (const operatorElement of OPERATOR) {
    operatorElement.addEventListener('click', selectedOperator)
}
function selectedOperator() {
    input.value += this.textContent;
}

function addNum() {
    input.value += this.textContent;
}

function execute() {
    const EXPRESSION = input.value;
    let result = eval(EXPRESSION);
    input.value = result;
    if(input.value === ''){
        input.value = 'Please enter a calculation.'
    }

}

function clearText() {
    input.value = '';
}

function removeLast() {
    input.value = input.value.slice(0, -1);
}


del.addEventListener('click', removeLast)




console.log(input.value);





GET_RESULT.addEventListener('click', execute);

document.getElementById('clearField').addEventListener('click', clearText); // clear the input field.


