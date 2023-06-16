const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.oper');
const cancelled = document.querySelectorAll('#cancel');
const backspace = document.querySelectorAll('#del');
const equ = document.querySelectorAll('#equals');
const decml = document.querySelectorAll('#decimal');
const numberInputScrn = document.querySelector('#calculation-display')
const calculated = document.querySelector('#result-display')



//let num1 = ""
let num1 = []
let num1Complete = "false"
let num1String =""
//let num2 = ""
let num2 = []
let num2String =""
let oper = ""
let operComplete ="false"
let decimalComplete ="false"
let result = 0
let numberCapture =""
let id = 0


const deletePressed = e => {
  if (num1.length < 1 && num2.length < 1){
    return}
    if (num2.length === 0){
        if (oper === ""){
            num1.splice(-1)
            num1String = num1.join('')
            numberInputScrn.textContent= num1String + oper + num2String
        } else oper =""
        operComplete = "false"
        numberInputScrn.textContent= num1String + oper + num2String
    }else num2.splice(-1)
    num2String = num2.join('')
    numberInputScrn.textContent= num1String + oper + num2String
}
  
  for (let del of backspace) {
    del.addEventListener("click", deletePressed);
  }

const decimalPressed = e => {
    if (decimalComplete ==="false")
    if (num1Complete ==="false"){
        num1.push(".")
        num1String = num1.join('') 
        decimalComplete = "true"
        numberInputScrn.textContent= num1String
    }
    else if (num1Complete ==="true" && operComplete ==="true"){
        num2.push(".")
        num2String = num2.join('')
        decimalComplete = "true"
        numberInputScrn.textContent= num1String + oper + num2String
    } else return;
    }
  
  
  for (let decimal of decml) {
    decimal.addEventListener("click", decimalPressed);
  }

  const equalsPressed = e => {
    if (oper === " ÷ " && num2String === "0"){
      fullClear()
      calculated.textContent= "You cant divide by Zero"
      return
    }
    if (num1.length < 1){
      num1String = result
    }
      if (num1 !== "" && oper !== "" && num2 !== ""){
          n1 = parseFloat(num1String,2)
          n2 = parseFloat(num2String,2)
          operate(n1, oper, n2)
          clear()
          return
      };
      }
  
      for (let equals of equ) {
        equals.addEventListener("click", equalsPressed);
      }

  
 

const cancelPressed = e => {
    fullClear();
    numberInputScrn.textContent= ""
    calculated.textContent = 0
  }
  
  for (let cancel of cancelled) {
    cancel.addEventListener("click", cancelPressed);
  }


const numberPressed = e => {
  id = e.target.textContent;  // Get ID of Clicked Element 
  if (num1Complete === "false"){
  //num1 += id
  num1.push(id)
  num1String = num1.join('')
  numberInputScrn.textContent= num1.join('')//num1
  } else{
  operComplete = "true"
    //num2 +=id
  num2.push(id)
  num2String = num2.join('')
}
  numberInputScrn.textContent= num1String + oper + num2String
}

for (let number of numbers) {
  number.addEventListener("click", numberPressed);
}

const operPressed = e => {
  if (num1.length <1 && result < 1){
    return
  }
    if (num1.length > 0 | result > 0){
    id = e.target.textContent;  // Get ID of Clicked Element
    oper = ' '+id +' '
    num1Complete = "true"
    decimalComplete = "false"}
    numberInputScrn.textContent= num1String + oper
    
}
  
  
  for (let oper of operators) {
    oper.addEventListener("click", operPressed);
  }



function operate(n1, oper, nu2){

if (oper === " + "){
    add(n1,n2);
    return;
} else if  (oper === " x ") {
    multiply(n1,n2)
    return;
} else if (oper === " - "){
    subtract(n1,n2);
    return;
} else if (oper === " ÷ "){
    divide(n1,n2)
    return;
}
}

function add(n1, n2){
    result = n1+n2;
    calculated.textContent = result
    return; 
}

function multiply(n1, n2){
    result = n1*n2;
    calculated.textContent = result
    return;
}

function subtract(n1, n2){
    result = n1-n2;
    calculated.textContent = result
    return;
}

function divide(n1, n2){
    result = n1/n2;
    calculated.textContent = result
    return;
}

function clear(){
num1.length = 0
num1String =""
num2String=""
num1Complete = "false"
decimalComplete ="false"
num2.length =0
oper = ""
operComplete ="true"
numberCapture =""
id = 0
return;
}

function fullClear() {
num1.length = 0
num1String =""
num2String=""
num1Complete = "false"
decimalComplete ="false"
num2.length =0
oper = ""
operComplete ="false"
result = 0
numberCapture =""
id = 0
return;
}

