let display = document.getElementById("display");
let displayHistory = document.getElementById("display-history");
let currentInput = "";
let currentOperation = null;
let firstOperand = null;
let shouldResetDisplay = false;

function appendNumber(num) {
  if (shouldResetDisplay) {
    currentInput = "";
    shouldResetDisplay = false;
  }
  currentInput += num;
  updateDisplay();
}

function appendDecimal() {
  if (shouldResetDisplay) {
    currentInput = "0";
    shouldResetDisplay = false;
  }
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function setOperation(op) {
  if (currentOperation !== null) calculate();
  firstOperand = parseFloat(currentInput);
  currentOperation = op;
  shouldResetDisplay = true;
  updateDisplayHistory();
}

function calculate() {
  if (currentOperation === null || shouldResetDisplay) return;
  let secondOperand = parseFloat(currentInput);
  let result;
  switch (currentOperation) {
    case '+': result = firstOperand + secondOperand; break;
    case '-': result = firstOperand - secondOperand; break;
    case '*': result = firstOperand * secondOperand; break;
    case '/': 
      if (secondOperand === 0) {
        alert("No se puede dividir por cero");
        clearDisplay();
        return;
      }
      result = firstOperand / secondOperand; 
      break;
  }
  displayHistory.value = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentInput = result.toString();
  currentOperation = null;
  firstOperand = result;
  shouldResetDisplay = true;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput;
}

function updateDisplayHistory() {
  displayHistory.value = `${firstOperand} ${currentOperation}`;
}

function clearDisplay() {
  currentInput = "";
  currentOperation = null;
  firstOperand = null;
  shouldResetDisplay = false;
  displayHistory.value = "";
  updateDisplay();
}
