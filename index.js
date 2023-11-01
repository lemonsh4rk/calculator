let firstValue = null;
let secondValue = null;
let firstOperatorSymbol = null;
let secondOpertarSymbol = null
let result = null;
let displayValue = "0"
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const display = document.querySelector("#display");
const clearAll = document.querySelector("#allclear");
const equalBtn = document.querySelector("#equal")
const operation = document.querySelector(".operation");


function changeDisplay() {
  display.textContent = displayValue;
}

changeDisplay();


numbers.forEach(number => number.addEventListener("click", () => {

  if (firstValue === null) {
    if (displayValue === "0" || displayValue === 0) {
      displayValue = number.textContent;
    } else if (displayValue === firstValue) {
      displayValue = number.textContent;
    } else {
      displayValue += number.textContent;
    } 
  } else {
    if (displayValue === firstValue) {
      displayValue = number.textContent;
    } else {
      displayValue += number.textContent;
    }
  }

  changeDisplay()
}))

operators.forEach(operator => operator.addEventListener("click", () => {




}))

equalBtn.addEventListener("click", () => {



  changeDisplay();
})

clearAll.addEventListener("click", () => {
  displayValue = "0";
  firstValue = null;
  secondValue = null;
  firstOperatorSymbol = null;
  secondOpertarSymbol = null
  result = null;

  changeDisplay();
})


function add(a, b) {
  return parseFloat(a) + parseFloat(b);
};

function substract(a, b) {
  return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
};

function calculate(operator, numberA, numberB) {
  Number(numberA), Number(numberB);
  if (operator === "+") {
    return add(numberA, numberB);
  } else if (operator === "-") {
    return substract(numberA, numberB);
  } else if (operator === "*") {
    return multiply(numberA, numberB);
  } else if (operator === "/") {
    if (numberB == 0) {
      return `Can't do that`
    } else {
      return divide(numberA, numberB);
    }
  } else {
    return null
  }
};



/*

// number listener
numbers.forEach(number => number.addEventListener("click", () => {

  display.textContent += number.textContent;

}))

// operators listener
operators.forEach(operator => operator.addEventListener("click", () => {

  operatorSymbol = operator.textContent;

  if (firstValue == "" && secondValue == "") {

    operation.textContent = "";
    firstValue = display.textContent;
    
    display.textContent = ""
  
  } else if (firstValue != "" && secondValue == "") {
  
    secondValue = display.textContent;
    result = calculate(operatorSymbol, firstValue, secondValue);
    
    operation.textContent = `${firstValue} ${operatorSymbol} ${secondValue} = ${result}`
    display.textContent = ""
  
  } else if (firstValue != "" && secondValue != "") {
  
    secondValue = firstValue
    firstValue = result
    result = calculate(operatorSymbol, firstValue, secondValue);
    
    operation.textContent = `${firstValue} ${operatorSymbol} ${secondValue} = ${result}`
    display.textContent = ""
  
  }
  
}))


// equalbtn listener
equalBtn.addEventListener("click", () => {

  result = calculate(operatorSymbol, firstValue, secondValue)

})

// clearall listener
clearAll.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  operator = "";
  result = null;
  display.textContent = "";
  operation.textContent = "";
})


if (firstValue == "" || secondValue == "") {
  operation.textContent = ""
} else {
  operation.textContent = `${firstValue} ${operatorSymbol} ${secondValue} = `
}   */