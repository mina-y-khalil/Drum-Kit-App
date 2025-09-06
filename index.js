const buttons = document.querySelectorAll(".drum");

for (const button of buttons) {
    button.addEventListener('click', ()=> {
        alert("I got clicked!")
    })
}