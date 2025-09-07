


const buttons = document.querySelectorAll(".drum");

for (const button of buttons) {
    button.addEventListener('click', ()=> {
        // alert("I got clicked!")
        const key = button.innerHTML;


    // will use the switch statement to play different sounds based on the button clicked instead of using if-else statements.
    
        switch (key) {
            case "w":
                let audio = new Audio(`sounds/tom-1.mp3`);
                audio.play();
                
                break; // this tells the program to exit the switch statement and continue executing the code that follows it.
            case "a":
                let audio1 = new Audio(`sounds/tom-2.mp3`);
                audio1.play();
                break;
            case "s":
                let audio2 = new Audio(`sounds/tom-3.mp3`);
                audio2.play();
                break;
            case "d":
                let audio3 = new Audio(`sounds/tom-4.mp3`);
                audio3.play();
                break;
            case "j":
                let audio4 = new Audio(`sounds/crash.mp3`);
                audio4.play();
                break;
            case "k":
                let audio5 = new Audio(`sounds/snare.mp3`);
                audio5.play();
                break;
            case "l":
                let audio6 = new Audio(`sounds/kick-bass.mp3`);
                audio6.play();
                break;
        
            default:
                break;
        }
        
        
    })
}




