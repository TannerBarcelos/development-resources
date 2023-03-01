function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function subTwoNumbers(num1, num2) {
  return num1 - num2;
}

function mulTwoNumbers(num1, num2) {
  return num1 * num2;
}

function divTwoNumbers(num1, num2) {
  return num1 / num2;
}

function modTwoNumbers(num1, num2) {
  return num1 % num2;
}

function getGreaterOfTwo(num1, num2) {
  if (num1 === num2) return -1;
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
}

module.exports = {
  addTwoNumbers,
  subTwoNumbers,
  mulTwoNumbers,
  divTwoNumbers,
  modTwoNumbers,
  getGreaterOfTwo,
};
