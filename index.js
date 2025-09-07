


const buttons = document.querySelectorAll(".drum");

for (const button of buttons) {
    button.addEventListener('click', ()=> {
        // alert("I got clicked!")
        button.style.color = "teal";
        
        
    })
}





// let audio = new Audio(`sounds/tom-1.mp3`);
// audio.play();