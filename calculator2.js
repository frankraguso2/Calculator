
let answer = '';
let value = [];
let firstNumber = [];
let firstInt = '';
let secondNumber = [];
let secondInt = '';
let operator = [];
let last = '';

function blank() {
  value = [];
  firstNumber = [];
  firstInt = '';
  secondNumber = [];
  secondInt = '';
  operator = [];
  last = '';
  answer = 0;

  document.getElementById("answer").classList.add('answer');
  document.querySelector('.answer').innerHTML = `${answer}`;
  answer = '';
}

function number(value) {

  //redoing 1st operator and 1st 2nd number
  if ((answer.length != 0) && (value === "=") && (secondInt.length === 0)) {
    firstNumber = localStorage.getItem('answer');
    firstInt = Number(firstNumber);
    last = localStorage.getItem('last');
    secondNumber = localStorage.getItem('secondInt');
    secondInt = Number(secondNumber);
  }

  //getting 2nd operator after answer
  if ((answer.length != 0) && (value === "/" || value === "*" || value === "-" || value === "+")) {
    console.log('operator after answer');
    firstNumber = localStorage.getItem('answer');
    firstInt = Number(firstNumber);
    console.log(firstInt);
    operator.push(value);
    console.log(operator);
    newLast = operator[operator.length-1];
    console.log(firstInt);
    console.log(newLast);
    secondNumber = [];
    secondInt = '';
  }

  //getting 2nd 2nd number after operator and answer
  if ((answer.length != 0) && (firstInt.length != 0) && (last.length != 0) && (value === 0 || value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6 || value === 7 || value === 8 || value === 9)) {
    console.log('second number after operator');
    console.log(secondNumber);
    secondNumber.push(value);
    console.log(secondNumber);
    secondInt = Number(secondNumber.join(''));
    console.log(firstInt);
    last = newLast;
    console.log(last);
    console.log(secondInt);
  }

  if ((value === "=") && (answer.length != 0) && (firstInt.length != 0) && (secondInt.length != 0)) {
    console.log(firstInt);
    console.log(secondInt);
    console.log(newLast);
    console.log(last);
    console.log('second equals');
    equals();
  }

  //getting 1st 2nd number
  if ((firstInt.length != 0) && (answer.length === 0) && (last.length != 0) && (value === 0 || value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6 || value === 7 || value === 8 || value === 9)) {
    secondNumber.push(value);
    secondInt = Number(secondNumber.join(''));
    console.log(firstInt);
    console.log(last);
    console.log(secondInt);
  }

  //getting 1st 1st operator
  if ((firstInt.length != 0) && (secondInt.length === 0) && (value === "/" || value === "*" || value === "+" || value === "-")) {
    operator.push(value);
    last = operator[operator.length-1];
    console.log(firstInt);
    console.log(last);
  }

  //getting 1st 1st number
  if ((secondInt.length === 0) && (operator.length === 0) && (value === 0 || value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6 || value === 7 || value === 8 || value === 9)) {
    firstNumber.push(value);
    firstInt = Number(firstNumber.join(''));
    console.log(firstInt);
  }

  //equals
  if ((value === "=") && (firstInt.length != 0) && (secondInt.length != 0) && (answer.length === 0)) {
    console.log(firstInt);
    console.log(secondInt);
    console.log(last);
    console.log('first equals');
    equals();
  }
}

function equals() {
  if (last === "/") {
    answer = firstInt/secondInt;
    if (answer > 999999) {
      answer = answer.toExponential(2);
    } else if (answer < 9999) {
      answer = answer.toFixed(3);
    }
  } else if (last === "*") {
    answer = firstInt*secondInt;
    if (answer > 999999999) {
      answer = answer.toExponential(4);
    } else if (answer < 999999999) {
    }
  } else if (last === "-") {
    answer = firstInt-secondInt;
    if (answer > 999999999) {
      answer = answer.toExponential(4);
    } 
  } else if (last === "+") {
    answer = firstInt+secondInt;
    if (answer > 999999999) {
      answer = answer.toExponential(4);
    }
  }

  document.getElementById("answer").classList.add('answer');
  document.querySelector('.answer').innerHTML = `${answer}`;

  localStorage.setItem('firstInt', firstInt);
  localStorage.setItem('secondInt', secondInt);
  localStorage.setItem('last', last);
  localStorage.setItem('answer', answer);

  firstNumber = [];
  firstInt = '';
  secondNumber = [];
  secondInt = '';
  operator = [];
  last = '';
}
