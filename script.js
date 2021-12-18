let numberOfViews   = document.getElementById("numberPages")
let price           = document.getElementById("priceNumbers")
let frequent        = document.getElementById("frequentlyOption")
let frequencyButton = document.getElementById("button")
let frequentCircle  = document.getElementById("buttonCircle")
let discountNumber  = document.getElementById("percentNumber")

///////////////////////

let changeDiscountMessage = () =>{

    let browserWidth    = window.innerWidth

    if( browserWidth >= 512 ){

        discountNumber.textContent = "25% discount"
        discountNumber.classList.add("discount")

    }else{

        discountNumber.textContent = "-25%"
        discountNumber.classList.remove("discount")
    }

}

changeDiscountMessage()

window.addEventListener("resize",changeDiscountMessage)

///////////////////////

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
