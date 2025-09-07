


const buttons = document.querySelectorAll(".drum");

for (const button of buttons) {
    button.addEventListener('click', ()=> {       
        const key = button.innerHTML;
        makeSound(key);
        
    })
}

// Detecting keyboard press
document.addEventListener('keydown', (event) => {
    makeSound(event.key);
});


function makeSound (key) {
        // will use the switch statement to play different sounds based on the button clicked instead of using if-else statements.

    switch (key) {
        case "w":
            let tom1 = new Audio(`sounds/tom-1.mp3`);
            tom1.play();
            
            
            break; // this tells the program to exit the switch statement and continue executing the code that follows it.
        case "a":
            let tom2 = new Audio(`sounds/tom-2.mp3`);
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio(`sounds/tom-3.mp3`);
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio(`sounds/tom-4.mp3`);
            tom4.play();
            break;
        case "j":
            let crash = new Audio(`sounds/crash.mp3`);
            crash.play();
            break;
        case "k":
            let kickBass = new Audio(`sounds/kick-bass.mp3`);
             kickBass.play();
            break;
        case "l":
            let snare = new Audio(`sounds/snare.mp3`);
            snare.play();
            break;
    
        default: // this is like else in the if statement
            break;
    }
    
}



