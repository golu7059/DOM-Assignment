// catching element by id method
let element = document.getElementById("keydown-keyup");
let message = document.getElementById("message");

// now applying event listener
// for key up
element.addEventListener('keyup' ,function(){
    document.body.style.backgroundColor = "#8DB6B6";
    message.innerText = "you pressed upper key."
} );

// now for down arrow
element.addEventListener('keydown' ,function(){
    document.body.style.backgroundColor = "#18191C";
    message.innerText = "you pressed down key."
} );
