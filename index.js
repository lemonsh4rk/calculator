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

function operate(operator, numberA, numberB) {
  Number(numberA), Number(numberB);

  if (operator === "+") {
    return add(numberA, numberB);
  } else if (operator === "-") {
    return substract(numberA, numberB);
  } else if (operator === "*") {
    return multiply(numberA, numberB);
  } else if (operator === "/") {
    return divide(numberA, numberB);
  } else {
    return null
  }
};