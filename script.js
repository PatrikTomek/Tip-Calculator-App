const bill = document.getElementById("input-value");
const numOfPeople = document.getElementById("num-of-ppl-input");
const inputs = document.querySelectorAll("#input-value, #num-of-ppl-input");
const fivePctBtn = document.getElementById("5-pct");
const tenPctBtn = document.getElementById("10-pct");
const fifteenPctBtn = document.getElementById("15-pct");
const twentyfivePctBtn = document.getElementById("25-pct");
const fiftyPctBtn = document.getElementById("50-pct");
const customPctBtn = document.getElementById("custom-percentage");
const pctBtns = document.querySelectorAll(
  ".percentage-btn, #custom-percentage"
);
const notValidAlert = document.querySelector(".not-valid-alert");

const tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total");
const resetBtn = document.querySelector(".reset-btn");

let billValue = "";
let numOfPeopleValue = "";
let selectedPct = "";
let customPct = "";

const inputBillHandler = (e) => {
  billValue = Number(e.target.value);
};
const numOfPeopleHandler = (e) => {
  numOfPeopleValue = Number(e.target.value);
};
const customPctHandler = (e) => {
  customPct = e.target.value;
};
bill.addEventListener("input", inputBillHandler);
numOfPeople.addEventListener("input", numOfPeopleHandler);
customPctBtn.addEventListener("input", customPctHandler);

const pctHandler = (e) => {
  if (numOfPeopleValue > 0) {
    isValid();

    pctBtns.forEach((btn) => {
      btn.classList.remove("active_pct-btn");
    });
    e.target.classList.add("active_pct-btn");

    selectedPct = Number(e.target.value);

    changeHandler();
  } else {
    notValid();
  }
};

const changeHandler = () => {
  if (numOfPeopleValue > 0) {
    isValid();

    const tipPct = ((billValue / 100) * selectedPct).toFixed(2);

    tipAmount.innerHTML =
      "$" + (Number(tipPct) / Number(numOfPeopleValue)).toFixed(2);
    total.innerHTML =
      "$" +
      ((Number(billValue) + Number(tipPct)) / Number(numOfPeopleValue)).toFixed(
        2
      );
  } else {
    notValid();
  }
};

const isValid = () => {
  numOfPeople.classList.remove("not-valid");
  notValidAlert.style.display = "none";
};
const notValid = () => {
  numOfPeople.classList.add("not-valid");
  notValidAlert.style.display = "flex";
};

pctBtns.forEach((btn) => {
  btn.addEventListener("click", pctHandler);
});
inputs.forEach((input) => {
  input.addEventListener("change", changeHandler);
});

const reset = () => {
  billValue = "";
  numOfPeopleValue = "";
  selectedPct = "";
  inputs.forEach((input) => {
    input.value = "";
  });
  pctBtns.forEach((btn) => {
    btn.classList.remove("active_pct-btn");
  });
  tipAmount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
};
resetBtn.addEventListener("click", reset);
