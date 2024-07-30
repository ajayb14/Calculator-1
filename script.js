
let display = document.getElementById("display");
let currentValue = '';
let operator = '';
let firstOperand = '';

function appendToDisplay(value){
    currentValue += value;
    display.textContent = currentValue;
}

function setOperator(selectedOperator){
    operator = selectedOperator;
    firstOperand = currentValue;
    currentValue = '';
}


function clearDisplay(){
    currentValue = '';
    display.textContent = '0';
}

function delNum() {
    // Remove the last character from currentValue
    currentValue = currentValue.slice(0, -1);

    // If the currentValue becomes empty, display "0"
    display.textContent = currentValue || '0';
}



function calculateResult() {
    if (currentValue !== '' && firstOperand !== '' && operator !== '') {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentValue);
        //declare result
        let result;
        switch (operator) {
            case '+': //addition
                result = num1 + num2;
                break;
            case '-': //subtraction
                result = num1 - num2;
                break;
            case '*': //multiplication
                result = num1 * num2;
                break;
            case '/': //division
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    display.textContent = 'Error'; // Division by zero
                    return;
                }
                break;
            default:
                display.textContent = 'Error'; // Invalid operator
                return;
        }

        // Round the result to 3 decimal places
        const roundedResult = roundToDecimalPlaces(result, 3);
        display.textContent = roundedResult;

        // Reset values for the next calculation
        currentValue = '';
        operator = '';
        firstOperand = '';
    }
}


function roundToDecimalPlaces(number, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    return Math.round(number * factor) / factor;
}



function percentOfNumber() {
    // Convert the currentValue to a number
    const numberValue = parseFloat(currentValue);

    // calculate the percentage
    if (!isNaN(numberValue)) {
        const percentage = numberValue / 100;
        currentValue = percentage.toString();
        display.textContent = currentValue;
    }
}
