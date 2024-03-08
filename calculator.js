let firstNumber = 0;
let secondNumber = '';
let currentOperator;
let currentTotal;
let operatorIsActive = false;
let displayNode = document.querySelector('.display');
let displayValue = document.querySelector('.current-equation');
let equationInfoNode = document.querySelector('.equation-info')

// Setting up display value
displayValue.textContent = '';
displayNode.appendChild(displayValue)
displayValue.style.paddingRight = '10px';
displayValue.style.fontFamily = 'arial';
displayValue.style.fontSize = '24px';
equationInfoNode.textContent = '';

// on number click
document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', () => {
        handleNumberClick(button);
    })
})

document.querySelectorAll('.operation').forEach((button) => {
    button.addEventListener('click', () => {
        handleOperatorClick(button);
    })
})

// equal sign functionality
let equalNode = document.querySelector('.equal');
equalNode.addEventListener('click', () => {
    equationInfoNode.textContent += displayValue.textContent + ' ' + '= '
    operatorIsActive = false;
    updateDisplay(operate(firstNumber, secondNumber, currentOperator))
})

// clear sign functionality
let clearNode = document.querySelector('.clear');
clearNode.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = '';
    operatorIsActive = false
    clearDisplay();
    clearEquationInfo();
})

// handle operator click
function handleOperatorClick(button) {
    if (operatorIsActive && displayValue.textContent !== '') {
        firstNumber = operate(firstNumber, secondNumber, currentOperator)
        secondNumber = ''
    }
    if (displayValue.textContent === '' && operatorIsActive) {
        currentOperator = button.textContent;
    }
    else if (displayValue.textContent !== '' && !operatorIsActive) {
        firstNumber = parseFloat(displayValue.textContent);
        currentOperator = button.textContent;
    }

    operatorIsActive = true
    equationInfoNode.textContent += displayValue.textContent + ' ' + currentOperator + ' '
    clearDisplay();
}

// handle number click
function handleNumberClick(button) {
    if (displayValue.textContent.length < 12) {
        displayValue.textContent += button.textContent;
        if (operatorIsActive) {
            secondNumber = displayValue.textContent;
        }
    } 
}
// Calculator Display Functions
function updateDisplay(newDisplay) {
    displayValue.textContent = newDisplay;
}

function clearDisplay() {
    displayValue.textContent = '';
}

function clearEquationInfo() {
    equationInfoNode.textContent = '';
}

// Basic Calculator Arithmetic Functions

function operate (num1, num2, operator) {
    if (operator === '+') {
        return addition(num1, num2);
    }
    else if (operator === '-') {
        return subtraction(num1, num2);
    }
    else if (operator === '/') {
        return division(num1, num2);
    }
    else if (operator === 'x') {
        return multiplication(num1, num2);
    }
}

function addition(num1, num2) {
    return num1 + +num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return parseFloat((num1 / num2).toFixed(5));
}

