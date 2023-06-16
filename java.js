const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.oper');
const cancelled = document.querySelectorAll('#cancel');
const backspace = document.querySelectorAll('#del');
const equ = document.querySelectorAll('#equals');
const decml = document.querySelectorAll('#decimal');
const numberInputScrn = document.querySelector('#calculation-display');
const calculated = document.querySelector('#result-display');

let num1 = [];
let num2 = [];
let num1String = "";
let num2String = "";
let oper = "";
let num1Complete = "false";
let operComplete = "false";
let result = 0;
let id = 0;

// Button Press Functions

const numberPressed = e => {
  id = e.target.textContent; 
  if (num1Complete === "false"){
    num1.push(id);
    num1String = num1.join('');
    numberInputScrn.textContent= num1.join('');
  } else {
    operComplete = "true";
    num2.push(id);
    num2String = num2.join('');
  }
  numberInputScrn.textContent= num1String + oper + num2String;
}


const operPressed = e => {
  if (num1.length <1 && result < 1){
    return;
  }
  if (num1.length > 0 | result > 0){
    id = e.target.textContent;
    oper = ' ' +id + ' ';
    num1Complete = "true";
    decimalComplete = "false";
  }
    numberInputScrn.textContent= num1String + oper;
}


const decimalPressed = e => {
  if (num1String.includes('.')=== false | oper !== "" && num2String.includes('.') === false){
    if (num1Complete === "false"){
        num1.push(".");
        num1String = num1.join('');
        numberInputScrn.textContent = num1String;
    }
    else if (num1Complete ==="true" && operComplete ==="true"){
        num2.push(".");
        num2String = num2.join('');
        numberInputScrn.textContent= num1String + oper + num2String;
    } else {
      return;
    }
  }
}


  const equalsPressed = e => {
    if (num2.length < 1){
      return;
    }
    if (oper === " ÷ " && num2String === "0"){
      fullClear();
      calculated.textContent= "You can't divide by Zero";
      return;
    }
    if (num1.length < 1){
      num1String = result;
    }
      if (num1 !== "" && oper !== "" && num2 !== ""){
          n1 = parseFloat(num1String,2);
          n2 = parseFloat(num2String,2);
          operate(n1, oper, n2);
          clear();
          return;
      };
}


const deletePressed = e => {
  if (num1.length < 1 && num2.length < 1){
    return;
  }
  if (num2.length === 0){
    if (oper === ""){
        num1.splice(-1);
        num1String = num1.join('');
        numberInputScrn.textContent= num1String + oper + num2String;
    } else {
      oper = "";
      numberInputScrn.textContent= num1String + oper + num2String;
    }  
  }else {
    num2.splice(-1);
    num2String = num2.join('');
    numberInputScrn.textContent= num1String + oper + num2String;
  }
}


const cancelPressed = e => {
  fullClear();
  numberInputScrn.textContent = "";
  calculated.textContent = 0;
}

// Function to decide which operator was used

function operate(n1, oper, nu2){
  if (oper === " + "){
      add(n1 , n2);
      return;
  } else if  (oper === " x "){
      multiply(n1 , n2)
      return;
  } else if (oper === " - "){
      subtract(n1 , n2);
      return;
  } else if (oper === " ÷ "){
      divide(n1 , n2)
      return;
  }
}

//Functions for calculations

function add(n1, n2){
    result = n1 + n2;
    calculated.textContent = parseFloat((result).toFixed(5));
    return; 
}


function multiply(n1, n2){
    result = n1 * n2;
    calculated.textContent = parseFloat((result).toFixed(5));
    return;
}


function subtract(n1, n2){
    result = n1 - n2;
    calculated.textContent = parseFloat((result).toFixed(5));
    return;
}


function divide(n1, n2){
    result = n1 / n2;
    calculated.textContent = parseFloat((result).toFixed(5));
    return;
}


function clear(){
    num1.length = 0;
    num2.length = 0;
    id = 0;
    num1String = "";
    num2String = "";
    num1Complete = "false";
    operComplete ="true";
    oper = "";
    return;
}


function fullClear() {
  num1.length = 0;
  num2.length = 0;
  result = 0;
  id = 0;
  num1String = ""
  num2String = ""
  num1Complete = "false";
  oper = "";
  operComplete = "false";
  return;
}

//Add event Listeners

for (let del of backspace) {
  del.addEventListener("click", deletePressed);
}


for (let decimal of decml) {
  decimal.addEventListener("click", decimalPressed);
}


for (let equals of equ) {
  equals.addEventListener("click", equalsPressed);
}


for (let cancel of cancelled) {
  cancel.addEventListener("click", cancelPressed);
}


for (let number of numbers) {
  number.addEventListener("click", numberPressed);
}


for (let oper of operators) {
  oper.addEventListener("click", operPressed);
}