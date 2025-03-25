let display = document.getElementById("display");
let displayHistory = document.getElementById("display-history");
let currentInput = "";
let currentOperation = null;
let firstOperand = null;
let shouldResetDisplay = false;

document.addEventListener("keydown", handleKeyboardInput);

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

  try {
    let result;
    switch (currentOperation) {
      case '+': result = firstOperand + secondOperand; break;
      case '-': result = firstOperand - secondOperand; break;
      case '*': result = firstOperand * secondOperand; break;
      case '/': 
        if (secondOperand === 0) throw new Error("No se puede dividir por cero.");
        result = firstOperand / secondOperand; 
        break;
      case 'pow':  // Aquí manejamos la potencia
        result = Math.pow(firstOperand, secondOperand);
        break;
      default: 
        throw new Error("Operación no soportada.");
    }

    displayHistory.value = `${firstOperand} ${currentOperation === 'pow' ? '^' : currentOperation} ${secondOperand} =`;
    currentInput = result.toString();
    firstOperand = result;  
    currentOperation = null;
    shouldResetDisplay = true;
    updateDisplay();
  } catch (error) {
    alert(error.message);
    clearDisplay();
  }
}

function calculatePower() {
  setOperation('pow');  // Usamos 'pow' para que `calculate()` lo maneje correctamente
}

function updateDisplay() {
  display.value = currentInput;
}

function updateDisplayHistory() {
  displayHistory.value = `${firstOperand} ${currentOperation === 'pow' ? '^' : currentOperation}`;
}

function calculateSquareRoot() {
  let value = parseFloat(currentInput);

  if (value < 0) {
    alert("No se puede calcular la raíz cuadrada de un número negativo.");
    return;
  }

  currentInput = Math.sqrt(value).toString();
  firstOperand = parseFloat(currentInput); // Guarda el resultado para futuras operaciones
  currentOperation = null; // Resetea la operación
  shouldResetDisplay = true;
  displayHistory.value = `√(${value}) =`;
  updateDisplay();
}

function calculatePercentage() {
  let value = parseFloat(currentInput);

  if (isNaN(value)) return; // Evita errores si el input no es un número

  if (firstOperand !== null && currentOperation) {
    // Si hay una operación en curso, calcula el porcentaje relativo
    value = (firstOperand * value) / 100;
  } else {
    // Si no hay operación en curso, convierte el número en su forma porcentual (dividido entre 100)
    value = value / 100;
  }

  currentInput = value.toString();
  shouldResetDisplay = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  currentOperation = null;
  firstOperand = null;
  shouldResetDisplay = false;
  displayHistory.value = "";
  updateDisplay();
}

function deleteLast() {
  if (shouldResetDisplay) return; // Si hay que resetear la pantalla, no hacemos nada
  currentInput = currentInput.slice(0, -1); // Elimina el último carácter
  if (currentInput === "") {
    currentInput = "0"; // Evita que quede vacío
  }
  updateDisplay();
}


function handleKeyboardInput(event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendNumber(key);
  } else if (key === ".") {
    appendDecimal();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    setOperation(key);
  } else if (key === "^") {  
    calculatePower();  // Permite usar `^` en el teclado para la potencia
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (key === "Escape") {
    clearDisplay();
  }
}
