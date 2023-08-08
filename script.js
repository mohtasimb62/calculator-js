let a;
let b;
let action;

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function operate(a, b, operator) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}


const display = document.querySelector('#displayValue');

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
        if (action === undefined) {
            a = display.textContent;
        } else {
            b = display.textContent;
        }
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '+':
                action = '+';
                display.textContent = '';
                break;
            case '-':
                action = '-';
                display.textContent = '';
                break;
            case '*':
                action = '*';
                display.textContent = '';
                break;
            case '/':
                action = '/';
                display.textContent = '';
                break;
        }
    });
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    a = operate(a, b, action);
    display.textContent = a;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    a = undefined;
    b = undefined;
    action = undefined;
    display.textContent = '';
});