let display = document.getElementById("display");
let displayHistory = document.getElementById("display-history");
let currentInput = "";
let currentOperation = null;
let firstOperand = null;
let shouldResetDisplay = false;

document.addEventListener("keydown", handleKeyboardInput);  // Agregamos un escuchador para el teclado

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
      // Verificamos que la entrada sea un número válido
      if (isNaN(firstOperand) || isNaN(secondOperand)) {
        throw new Error("Entrada no válida. Por favor ingrese números válidos.");
      }
  
      let result;
      switch (currentOperation) {
        case '+': result = firstOperand + secondOperand; break;
        case '-': result = firstOperand - secondOperand; break;
        case '*': result = firstOperand * secondOperand; break;
        case '/': 
          if (secondOperand === 0) {
            throw new Error("No se puede dividir por cero.");
          }
          result = firstOperand / secondOperand; 
          break;
        default: 
          throw new Error("Operación no soportada.");
      }
  
      displayHistory.value = `${firstOperand} ${currentOperation} ${secondOperand} =`;
      currentInput = result.toString();
      firstOperand = result;  // Guarda el resultado para la siguiente operación
      currentOperation = null;  // Resetea la operación
      shouldResetDisplay = true;
      updateDisplay();
    } catch (error) {
      alert(error.message);  // Muestra el mensaje de error
      clearDisplay();  // Resetea la pantalla si ocurre un error
    }
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

  function handleKeyboardInput(event) {
    const key = event.key;
  
    if (key >= "0" && key <= "9") {
      // Si la tecla es un número
      appendNumber(key);
    } else if (key === ".") {
      // Si la tecla es un punto decimal
      appendDecimal();
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      // Si la tecla es una operación
      setOperation(key);
    } else if (key === "Enter" || key === "=") {
      // Si la tecla es Enter o igual
      calculate();
    } else if (key === "Backspace") {
      // Si la tecla es Backspace (borrar último carácter)
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    } else if (key === "Escape") {
      // Si la tecla es Escape (limpiar la pantalla)
      clearDisplay();
    }
  }