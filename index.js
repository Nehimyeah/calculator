const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const numbers = document.querySelectorAll('#number');
const ds = document.querySelector('#ds');
ds.textContent = 0;
const controls = document.querySelectorAll("#controls > button");
const operations = document.querySelectorAll('#operation');
const dot = document.querySelector('#dot');

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        populateDisplay(e.target.textContent);
    })
})

let operand = null;
let operator = null;
let resetScreen = false;
const operate = (operation, a, b) => {
    switch(operation) {
        case '+':
            operand = add(a, b);
            populateDisplay(operand);
            break;
        case '-':
            operand = subtract(a, b);
            populateDisplay(operand);
            break;
        case 'x':
            operand = multiply(a, b);
            populateDisplay(operand);
            break;
        case '/':
            if (b === 0) {
                alert("Invalid operation");
            } else {
                operand = divide(a, b);
                operand = Math.floor(operand * 100000000000) / 100000000000;
                populateDisplay(operand);
            }
            
            break;
    }
}

const evaluate = (oper, firstOperand, secondOperand) => {
    resetScreen = true;
    operate(operator, operand, parseFloat(ds.textContent));
    resetScreen = false;
}

operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        let sign = e.target.textContent;
        if (sign === '=') {
            evaluate(operator, operand, parseFloat(ds.textContent));
            operator = null;
            operand = null;
        } else {
            if (operand && operator) {
                evaluate(operator, operand, parseFloat(ds.textContent));
                operator = sign;
            } else {
                operand = parseFloat(ds.textContent);
                operator = sign;
                ds.textContent = 0;
            }
        }
    })
})

const populateDisplay = (number) => {
    if (resetScreen) {
        ds.textContent = "";
    }
    if (ds.textContent.length < 12)
        if ((ds.textContent === '0' && number !== '.') || (operator && operand))
            ds.textContent = number;
        else {
            ds.textContent += number;
        }
}

const clear = () => {
    operand = null;
    operator = null;
    ds.textContent = 0;
}

const backspace = () => {
    if (ds.textContent != 0) {
        let len = ds.textContent.length
        if (len == 1)
            ds.textContent = 0;
        else
            ds.textContent = ds.textContent.slice(0, len - 1);
    }
}

controls.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'clear')
            clear();
        else if (e.target.id === 'delete') 
            backspace();
    })
})

dot.addEventListener('click', (e) => {
    let regex = /[.]/;
    if (!ds.textContent.match(regex)) {
        populateDisplay('.');
    }
})