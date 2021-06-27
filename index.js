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


numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (ds.textContent.length < 12)
            if (ds.textContent === '0')
                ds.textContent = e.target.textContent;
            else {
                ds.textContent += e.target.textContent;
            }
    })
})

let operand = null;
const operate = (operation, a, b) => {
    switch(operation) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case 'x':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    }
}

const clear = () => {
    if (ds.textContent != 0) {
        operand = null;
        ds.textContent = 0;
    }    
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