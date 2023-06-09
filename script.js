let displayValue = '';
let memoryValue = 0;

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function clearMemory() {
  memoryValue = 0;
}

function recallMemory() {
  displayValue = memoryValue.toString();
  updateDisplay();
}

function storeMemory() {
  memoryValue = parseFloat(displayValue);
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}
