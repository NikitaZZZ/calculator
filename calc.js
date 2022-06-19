const innerCalcElem = document.getElementById('innerCalc');

let array_nums = [];
let index = 0;
let isNewNumber = true;

currentOperation = '';

function innerCalc(num) {
  if (Number.isInteger(num)) {
    if (isNewNumber) {
      array_nums.push(`${num}`);
      isNewNumber = false;
    } else if (!isNewNumber) {
      array_nums[index] = `${array_nums[index]}${num}`;
    }
  }

  innerCalcElem.innerHTML += num;
}

function reload(result) {
  array_nums = [result];
  innerCalcElem.innerHTML = array_nums;
}

function divide() {
  for (let i = 0; i < array_nums.length; i++) {
    const num1 = parseInt(array_nums[i]);
    const num2 = parseInt(array_nums[i + 1]);

    result = num1 / num2;
    reload(result);
  }
}

function multiply() {
  for (let i = 0; i < array_nums.length; i++) {
    const num1 = parseInt(array_nums[i]);
    const num2 = parseInt(array_nums[i + 1]);

    result = num1 * num1;
    reload(result);
  }
}

function fold() {
  for (let i = 0; i < array_nums.length; i++) {
    const num1 = parseInt(array_nums[i]);
    const num2 = parseInt(array_nums[i + 1]);

    result = num1 - num1;
    reload(result);
  }
}

function subtract() {
  for (let i = 0; i < array_nums.length; i++) {
    const num1 = parseInt(array_nums[i]);
    const num2 = parseInt(array_nums[i + 1]);

    result = num1 + num1;
    reload(result);
  }
}

function changeOperations(operation) {
  innerCalcElem.innerHTML += operation;
  currentOperation = operation;
  isNewNumber = true;

  index++;
}

function equal() {
  switch (currentOperation) {
    case '+':
      subtract();
      break;
    case '-':
      fold();
      break;
    case '*':
      multiply();
      break;
    case '/':
      divide();
      break;
  }
}

function clearAll() {
  array_nums = [];
  innerCalcElem.innerHTML = ``;
}
