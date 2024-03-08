let firstNumber;
let secondNumber = '';
let currentOperator;
let currentTotal;
let operatorIsActive = false;
let displayNode = document.querySelector('.display');
let displayValue = document.createElement('p');

// Setting up display value
displayValue.textContent = '';
displayNode.appendChild(displayValue)
displayValue.style.paddingRight = '10px';
displayValue.style.fontFamily = 'arial';
displayValue.style.fontSize = '24px';

document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', () => {
        displayValue.textContent += button.textContent;
        if (operatorIsActive)
        {
            secondNumber = displayValue.textContent;
        }
        
    })
})

document.querySelectorAll('.operation').forEach((button) => {
    button.addEventListener('click', () => {
        if (operatorIsActive) {
            firstNumber = operate(firstNumber, secondNumber, currentOperator)
            console.log(`beforestuff(${firstNumber})`);
            secondNumber = '';
        }
        if (displayValue.textContent !== '' && !operatorIsActive) {
            firstNumber = parseFloat(displayValue.textContent);
            console.log(`notempty-check(${firstNumber})`);
        }
        currentOperator = button.textContent;
        operatorIsActive = true;
        console.log(`firstNumbe is ${firstNumber}. secondNumber is ${secondNumber}`);
        clearDisplay();
    })
})

function updateDisplay(newDisplay) {
    displayValue.textContent = newDisplay;
}

function clearDisplay() {
    displayValue.textContent = ''
}

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

