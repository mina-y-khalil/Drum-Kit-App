const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener('click', ()=> {
        alert("I got clicked!")
    })
}