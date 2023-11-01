let firstValue = "";
let secondValue = "";
let operatorSymbol = "";
let result = null;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator")
let display = document.querySelector("#display");
let clearAll = document.querySelector("#allclear");
let equalBtn = document.querySelector("#equal")
let operation = document.querySelector(".operation");

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
}






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
    if (numberA == 0) {
      return `Can't do that`
    } else {
      return divide(numberA, numberB);
    }
  } else {
    return null
  }
};