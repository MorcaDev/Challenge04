///////////////////////////////
/*           NODES           */
///////////////////////////////

const frequent        = document.getElementById("frequentlyOption");
const frequencyButton = document.getElementById("button");
const frequentCircle  = document.getElementById("buttonCircle");
const bar             = document.getElementById("barItself");
const numberOfPages   = document.getElementById("numberPages");
const price           = document.getElementById("priceNumbers");
const discountNumber  = document.getElementById("percentNumber");
let isYearly          = undefined;

///////////////////////////////
/*       INFORMATION         */
///////////////////////////////

const changes  = [
    {
        value : 1,
        pages : "10K",
        priceM : "$8.00",
        priceY : "$6.00",
    },
    {
        value : 2,
        pages : "50K",
        priceM : "$12.00",
        priceY : "$9.00",
    },
    {
        value : 3,
        pages : "100K",
        priceM : "$16.00",
        priceY : "$12.00",
    },
    {
        value : 4,
        pages : "500K",
        priceM : "$24.00",
        priceY : "$18.00",
    },
    {
        value : 5,
        pages : "1M",
        priceM : "$36.00",
        priceY : "$27.00",
    }
]

///////////////////////////////
/*      FREQUENT BUTTON      */
///////////////////////////////

let changeFrequent = (ev) =>{

    //change button styles
    frequencyButton.classList.toggle("activate")

    //change value of frequent "text"
    let currentFrequent = frequent.textContent 

    if( currentFrequent === "/ month"){
        
        frequent.textContent = "/ year"
        isYearly = true

    }else if ( currentFrequent === "/ year"){

        frequent.textContent = "/ month"
        isYearly = false
   
    }

    getValue()

}

frequencyButton.addEventListener("click",changeFrequent)

///////////////////////////////
/*     CHANGES FROM INPUT    */
///////////////////////////////

let getValue = (ev) =>{

    let barValue        = bar.value
    let positionInArray = barValue - 1

    let Currentpages   = changes[positionInArray].pages 
    let Currentprice    = undefined

    if (isYearly) {

        Currentprice  = changes[positionInArray].priceY

    }else{

        Currentprice  = changes[positionInArray].priceM

    }

    numberOfPages.textContent   = Currentpages
    price.textContent           = Currentprice

}

bar.addEventListener("input",getValue)

///////////////////////////////
/*      DISCOUNT NUMBER      */
///////////////////////////////

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