// seleziono div element
const element = document.getElementsByClassName("element");
// console.log(element);

// setto elemento con classe active che farà cambiare immagine
let activeElement = 0;

// seleziono next-button
const nextButton = document.querySelector(".next-button");

// azioni al click del bottone next
nextButton.addEventListener("click", function(){

    if(activeElement < element.length -1){
        // tolgo classe active
        element[activeElement].classList.remove("active");

        // incremento indice dell'elemento che voglio vedere
        activeElement++;

        // aggiungo classe active al prossimo elemento
        element[activeElement].classList.add("active");
    }


});