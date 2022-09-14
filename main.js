const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
let numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

let numberOfPerson = Number(numberOfPeople.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  const bill = Number(billTotalInput.value);
  const tips = Number(tipInput.value) / 100;
  const totalTipMultiplied = tips * bill;

  const totaltipAdded = bill + totalTipMultiplied;

  const perPersonTotalAmount = totaltipAdded / numberOfPerson;

  perPersonTotal.textContent = `$${perPersonTotalAmount.toFixed(2)}`;

  // get bill from user input & convert it into a number
  // get the tip from user & convert it into a percentage (divide by 100)
  // get the total tip amount
  // calculate the total (tip amount + bill)
  // calculate the per person total (total divided by number of people)
  // update the perPersonTotal on DOM & show it to user
};

// ** Splits the bill between more people **
const increasePeople = () => {
  numberOfPerson++
  numberOfPeople.textContent = numberOfPerson;
  
  calculateBill()
  // increment the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  if (numberOfPerson <= 1) {
 numberOfPeople.textContent = "+It"
    return;

  }
  else {
    numberOfPerson--
    numberOfPeople.textContent = numberOfPerson;
    calculateBill()
  }
 

 
//     numberOfPeople.innerText--
//   // decrement the amount of people
//   // update the DOM with the new number of people
//   // calculate the bill based on the new number of people
  // }
}
