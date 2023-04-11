// catching all ids and assining into a const variable for further uses.

const decrementBtn = document.getElementById("DecreaseBtn");
const incrementBtn = document.getElementById("IncreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

//  for decrement button 
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button 
incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 15) {
    alert("15+ values are not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});

// for reset button 
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});

