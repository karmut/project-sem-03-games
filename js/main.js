//Kalkulator //gemacht

function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        document.getElementById("result").textContent =
          "Division by zero is not allowed";
        return;
      }
      result = num1 / num2;
      break;
  }
  document.getElementById("calc-result").textContent = "Result: " + result;
}

// check the required operation
var operation;

const btnPlus = document.getElementById("btnPlus");
btnPlus.addEventListener("click", function () {
  operation = "+";
});
const btnMinus = document.getElementById("btnMinus");
btnMinus.addEventListener("click", function () {
  operation = "-";
});
const btnMal = document.getElementById("btnMal");
btnMal.addEventListener("click", function () {
  operation = "*";
});
const btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener("click", function () {
  operation = "/";
});

const butEqual = document.getElementById("show-result");
butEqual.addEventListener("click", function () {
  calculate(operation);
});

//gib 3 nummern ein //gemacht
const numbers = document.getElementsByClassName("threeNumber");

function maxOfThree(n1, n2, n3) {
  var result = Number(n1);
  if (Number(n2) > result) {
    result = n2;
  }
  if (Number(n3) > result) {
    result = n3;
  }

  document.getElementsByClassName("threeNumber-text")[0].innerText =
    //you need the [0] because byclassname returns a list. Better use byid
    "Найбільше число, яке ви ввели - " + result;
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("change", function () {
    maxOfThree(numbers[0].value, numbers[1].value, numbers[2].value);
  });
}

//futur // Papa fragen

const logInBtn = document.getElementById("logInBtn");
const modal = document.getElementById("myModal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

function openModal() {
  modal.style.display = "block";
  overlay.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

logInBtn.addEventListener("click", function (event) {
  openModal();
  console.log("opening modal.");
});

document.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

closeBtn.addEventListener("click", closeModal);
