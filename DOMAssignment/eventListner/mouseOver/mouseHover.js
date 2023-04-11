 // catching button by id method
const btnHover = document.getElementById("message");

// now adding event listener of "mouse Hover"

btnHover.addEventListener("mouseover", function () {
    confirm("Is mouse over working ? ");
  });