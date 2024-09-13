let num1;
let operation;
let calcDone = false;

// DOM ELEMENTS
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const clearBtn = document.querySelector(".clear");
const operatorButtons = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");

equalBtn.addEventListener("click", () => {
    const result = operate(operation, num1, Number(display.textContent));
    display.textContent = Number.isInteger(result) ? result : result.toFixed(1);
    num1 = result;
    calcDone = true;
});

numberButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (calcDone) {
            display.textContent = "";
        }
        display.textContent += "" + btn.textContent + "";
    });
});

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const operationBtnText = btn.textContent;
        switch (operationBtnText) {
            case "+":
                num1 = Number(display.textContent);
                clearDisplay();
                operation = add;
                break;
            case "-":
                num1 = Number(display.textContent);
                clearDisplay();
                operation = subtract;
                break;
            case "x":
                num1 = Number(display.textContent);
                clearDisplay();
                operation = multiply;
                break;
            case "/":
                num1 = Number(display.textContent);
                clearDisplay();
                operation = divide;
                break;
            default:
                break;
        }
    });
});

clearBtn.addEventListener("click", clearDisplay);

function clearDisplay() {
    display.textContent = "";
}

function operate(operation, num1, num2) {
    return operation(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
