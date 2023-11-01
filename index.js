let firstValue = "";
let secondValue = "";
let operator = "";
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




// this goes somewhere, idk
result = calculate(operator, firstValue, secondValue)




// clearall listener
clearAll.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  operator = "";
  result = null;
  display.textContent = "";
  operation.textContent = "";
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

    if (numberA == 0) {
      return `Can't do that`
    }

    return divide(numberA, numberB);

  } else {

    return null

  }
};