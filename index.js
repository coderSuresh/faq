let button1 = document.getElementsByClassName("plusLogo");
let button2 = document.getElementsByClassName("minusLogo");
let block = document.getElementsByClassName("hiddenBlock");

for(let i=0; i<button1.length; i++) {

    button1[i].addEventListener("click", () => {
        
        for(let i=0; i<block.length; i++) {
            block[i].style.display = 'none'
        }

        block[i].style.display = 'block'
    })
}