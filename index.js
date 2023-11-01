let firstValue = null;
let secondValue = null;
let firstOperatorSymbol = null;
let secondOperatorSymbol = null
let result = null;
let displayValue = "0"
let operationValue = "0"
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const display = document.querySelector("#display");
const clearAll = document.querySelector("#allclear");
const equalBtn = document.querySelector("#equal")
const operation = document.querySelector(".operation");


function changeDisplay() {
  display.innerHTML = displayValue;
  if (displayValue.length > 9) {
    display.innerHTML = displayValue.substring(0, 9);
  }
}

changeDisplay();

function changeOperationDisplay() {

    operation.innerHTML = operationValue;
  
}

changeOperationDisplay();

numbers.forEach(number => number.addEventListener("click", () => {

  if (firstValue === null) {
    if (displayValue === "0" || displayValue === 0) {
      displayValue = number.textContent;
      operationValue = displayValue;
    } else if (displayValue === firstValue) {
      displayValue = number.textContent;
      operationValue = displayValue;
    } else {
      displayValue += number.textContent;
      operationValue = displayValue;
    } 
  } else {
    if (displayValue === firstValue) {
      displayValue = number.textContent;
      operationValue = displayValue;
    } else {
      displayValue += number.textContent;
      operationValue = displayValue;
    }
  }

  changeOperationDisplay();
  changeDisplay()
}))

operators.forEach(operator => operator.addEventListener("click", () => {

  if (firstOperatorSymbol != null && secondOperatorSymbol === null) {
    secondOperatorSymbol = operator.textContent;
    secondValue = displayValue;
    result = round(calculate(firstOperatorSymbol, Number(firstValue), Number(secondValue)));
    displayValue = result;
    operationValue = `${firstValue} ${firstOperatorSymbol} ${secondValue}`
    firstValue = displayValue;
    result = null;
  } else if (firstOperatorSymbol != null && secondOperatorSymbol != null) {
    secondValue = displayValue;
    result = round(calculate(secondOperatorSymbol, Number(firstValue), Number(secondValue)));
    secondOperatorSymbol = operator.textContent;
    displayValue = result;
    operationValue = `${firstValue} ${secondOperatorSymbol} ${secondValue}`
    firstValue = displayValue;
    result = null;
  } else {
    firstOperatorSymbol = operator.textContent;
    firstValue = displayValue;
    if (secondValue != null) {
      operationValue = `${firstValue} ${firstOperatorSymbol} ${secondValue}`
    } else {
      operationValue = `${firstValue} ${firstOperatorSymbol}`
    }
  }

  changeOperationDisplay();
}))

equalBtn.addEventListener("click", () => {
  if (firstOperatorSymbol === null) {
    displayValue = displayValue;
    operationValue = displayValue;
  } else if (secondOperatorSymbol != null) {
    secondValue = displayValue;
    result = round(calculate(secondOperatorSymbol, Number(firstValue), Number(secondValue)));
    if (result === "ErroR") {
      displayValue = "ErroR";
      operationValue = `ErroR`
    } else {
      displayValue = result;
      operationValue = `${firstValue} ${secondOperatorSymbol} ${secondValue}`
      firstValue = displayValue;
      secondValue = null;
      firstOperatorSymbol = null;
      secondOperatorSymbol = null;
      result = null;

    }
  } else {
    secondValue = displayValue;
    result = round(calculate(firstOperatorSymbol, Number(firstValue), Number(secondValue)))
    if (result === "ErroR") {
      displayValue = "ErroR"
      operationValue = `ErroR`
    } else {
      displayValue = result;
      operationValue = `${firstValue} ${firstOperatorSymbol} ${secondValue}`
      firstValue = displayValue;
      secondValue = null;
      firstOperatorSymbol = null;
      secondOperatorSymbol = null;
      result = null;
    }
  }
  changeOperationDisplay();
  changeDisplay();
})

clearAll.addEventListener("click", () => {
  displayValue = "0";
  operationValue = "0";
  firstValue = null;
  secondValue = null;
  firstOperatorSymbol = null;
  secondOpertarSymbol = null
  result = null;
  changeDisplay();
  changeOperationDisplay();
})

function add(a, b) {
  return a + b;
};

function substract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function calculate(operator, numberA, numberB) {
  
  if (operator === "+") {
    return add(numberA, numberB);
  } else if (operator === "-") {
    return substract(numberA, numberB);
  } else if (operator === "*") {
    return multiply(numberA, numberB);
  } else if (operator === "/") {
    if (numberB == 0) {
      return `ErroR`
    } else {
      return divide(numberA, numberB);
    }
  }
};

function round(value) {
  return parseFloat(Math.round(value + 'e' + 6) + 'e-' + 6)
}