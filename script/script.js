const billTotalInput = document.getElementById("billTotalInput");
const vatInput = document.getElementById("tipInput");
let numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");
const Total = document.getElementById("totalVAT");
const vatTotal = document.getElementById("perPersonTotal");
const calculateBills = document.querySelector(".calculateBill");
const calculateVATs = document.querySelector(".calculateVat");
const increase = document.querySelector(".increasePeople");
const decrease = document.querySelector(".decreasePeople");

let numberOfPerson = Number(numberOfPeople.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  const bill = Number(billTotalInput.value);
  const vat = Number(tipInput.value) / 100;
  const totalVatMultiplied = vat * bill;

  const totalVatAdded = bill + totalVatMultiplied;

  const perPersonTotalAmount = totalVatAdded / numberOfPerson;

  vatTotal.textContent = `\u20A6 ${perPersonTotalAmount.toLocaleString(
    "us-EN"
  )}`;

  Total.textContent = `\u20A6 ${totalVatMultiplied.toLocaleString("us-EN")}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  numberOfPerson++;
  numberOfPeople.textContent = numberOfPerson;

  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  if (numberOfPerson <= 1) {
    numberOfPeople.textContent = "Tap +";
    return;
  } else {
    numberOfPerson--;
    numberOfPeople.textContent = numberOfPerson;
    calculateBill();
  }
};

decrease.addEventListener("click", decreasePeople);
increase.addEventListener("click", increasePeople);
calculateBills.addEventListener("keyup", calculateBill);
calculateVATs.addEventListener("keyup", calculateBill);
