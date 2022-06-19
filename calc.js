const innerCalcElem = document.getElementById('innerCalc');

let array_nums = [];
let index = 0;
let isNewNumber = true;

currentOperation = '';

function innerCalc(num) {
  if (isNewNumber) {
    array_nums.push(`${num}`);
    isNewNumber = false;
  } else if (!isNewNumber) {
    array_nums[index] = `${array_nums[index]}${num}`;
  }

  innerCalcElem.innerHTML += num;
}

function resultOuptut(result) {
  array_nums = [result];
  innerCalcElem.innerHTML = array_nums;
}

function calculation() {
  let result = 0;

  const num1 = parseInt(array_nums[0]);
  const num2 = parseInt(array_nums[1]);

  switch (currentOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  resultOuptut(result);
}

function changeOperations(operation) {
  if (array_nums.length < 2) {
    innerCalcElem.innerHTML += ` ${operation} `;
    currentOperation = operation;
    isNewNumber = true;

    index++;
  } else {
    calculation();
    changeOperations(operation);
  }
}

function clearAll() {
  array_nums = [];
  innerCalcElem.innerHTML = ``;
}
