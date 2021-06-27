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


