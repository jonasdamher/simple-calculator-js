function displayCalculator() {
  const buttonValue = this.value;
  document.getElementById("display-calculator").innerText += buttonValue;
}

const buttonsCalc = document.getElementsByClassName("btn-calculator");

for (button of buttonsCalc) {
  button.addEventListener("click", displayCalculator);
}

document.getElementById("calc").addEventListener("click", () => {
  let display = document.getElementById("display-calculator");

  let calc = eval(display.innerText);
  if (calc) {
    display.innerText += "=" + calc;
  } else {
    display.innerText = "Invalid operation";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("display-calculator").innerText = "";
});

document.getElementById("last-remove").addEventListener("click", () => {
  let display = document.getElementById("display-calculator");

  if (display.innerHTML.search(/=(.*)/) != -1) {
    display.innerHTML = display.innerHTML.replace(/=(.*)/, "");
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
});
