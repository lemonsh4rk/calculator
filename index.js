let firstValue = "";
let secondValue = "";
let operator;
let result;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator")
let display = document.querySelector("#display");
let clearAll = document.querySelector("#allclear");
let equalBtn = document.querySelector("#equal")


numbers.forEach((button) => {
  display.textContent = "";
  button.addEventListener("click", () => {

    display.textContent += button.textContent;
  })

});

operators.forEach((button) => {
  button.addEventListener("click", () => {

    if (firstValue === "" && secondValue === "") {
      

    } else if (firstValue !== "" && secondValue === "") {


    } else if (firstValue !== "" && secondValue !== "") {

      
    }

  })
});

equalBtn.addEventListener("click", () => {



})

clearAll.addEventListener("click", () => {
  firstValue = ""
  secondValue = ""
  operator = "";
  display.textContent = "";
}) // I love this button so much, tysm ;-;

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

function operate(operator, numberA, numberB) {

  if (operator === "+") {
    return add(numberA, numberB);
  } else if (operator === "-") {
    return substract(numberA, numberB);
  } else if (operator === "*") {
    return multiply(numberA, numberB);
  } else if (operator === "/") {
    return divide(numberA, numberB);
  } else {
    return ""
  }
};