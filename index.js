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

function operate(operator) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return substract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
};

let firstNumber;
let secondNumber;
let operator;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator")
let display = document.querySelector("#display");
let clearAll = document.querySelector("#allclear");


numbers.forEach((button) => {
  display.textContent = "";
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
  })
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
  })
});

clearAll.addEventListener("click", () => {
  display.textContent = "";
})