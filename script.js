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
        value : 0,
        pages : "10K",
        priceM : "$8.00",
        priceY : "$6.00",
    },
    {
        value : 1,
        pages : "50K",
        priceM : "$12.00",
        priceY : "$9.00",
    },
    {
        value : 2,
        pages : "100K",
        priceM : "$16.00",
        priceY : "$12.00",
    },
    {
        value : 3,
        pages : "500K",
        priceM : "$24.00",
        priceY : "$18.00",
    },
    {
        value : 4,
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
/*    BACKGROUND OF INPUT    */
///////////////////////////////
let backgroundChanges = () =>{

    let barValue = bar.value

    switch (barValue) {
        case "0":
            bar.classList.replace("twenty-five","cero")
            break;
        case "1":
            bar.classList.add("twenty-five")
            bar.classList.remove("cero")
            break;
        case "2":
            bar.classList.remove("twenty-five")
            bar.classList.remove("seventy-five")
            break;
        case "3":
            bar.classList.add("seventy-five")
            bar.classList.remove("one-hundred")
            break;
        case "4":
            bar.classList.replace("seventy-five","one-hundred")
            break;
        default:
            break;

    }

}

///////////////////////////////
/*     CHANGES FROM INPUT    */
///////////////////////////////

let getValue = (ev) =>{

    let barValue        = bar.value

    backgroundChanges()

    let Currentpages   = changes[barValue].pages 
    let Currentprice    = undefined

    if (isYearly) {

        Currentprice  = changes[barValue].priceY

    }else{

        Currentprice  = changes[barValue].priceM

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

///////////////////////////////
/*       START BUTTON        */
///////////////////////////////

let startButton = document.getElementById("startButton")

let alert = (ev) =>{
    swal({
        title: "Great choose!",
        icon: "success",
        button: "Ok",
      });
}

startButton.addEventListener("click",alert)