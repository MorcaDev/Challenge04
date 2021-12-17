console.log('Hi dude')

///////////////////////

let numberOfViews   = document.getElementById("numberPages")
let price           = document.getElementById("priceNumbers")
let frequent        = document.getElementById("frequentlyOption")
let frequencyButton = document.getElementById("button")
let frequentCircle  = document.getElementById("buttonCircle")
let discountNumber  = document.getElementById("percentNumber")


let changeFrequent = (ev) =>{

    //change button styles
    frequencyButton.classList.toggle("activate")

    //change value of frequent "text"
    let currentFrequent = frequent.textContent 

    if( currentFrequent === "/ month"){
        
        frequent.textContent = "/ year"

    }else if ( currentFrequent === "/ year"){

        frequent.textContent = "/ month"
   
    }
}

frequencyButton.addEventListener("click",changeFrequent)
