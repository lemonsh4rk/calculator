let firstValue = "";
let secondValue = "";
let operator;
let result;
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator")
let display = document.querySelector("#display");
let clearAll = document.querySelector("#allclear");
let equalBtn = document.querySelector("#equal")
let operation = document.querySelector("#operation");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent === result) {
      display.textContent = "";
    }
    display.textContent += button.textContent;
  

    operators.forEach((button) => {
      button.addEventListener("click", () => {
    
        operator = button.textContent;
    
        if (firstValue === "" && secondValue === "") {
          
        } else if (firstValue !== "" && secondValue === "") {
          
        } else if (firstValue !== "" && secondValue !== "") {
          
        }
    
        display.textContent = ""
        console.log(firstValue, secondValue, operator, result)
      
        
        
        equalBtn.addEventListener("click", () => {

          if (firstValue === "" || secondValue === "") {

          }

        })
    
      })
    });

  })
});



clearAll.addEventListener("click", () => {
  firstValue = ""
  secondValue = ""
  operator = "";
  display.textContent = "";
}) // I love this button so much, tysm ;-;

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