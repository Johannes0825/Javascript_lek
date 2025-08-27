//Funksjonen for å sjekke om du er gammel nok
function checkAge() {
  let ageInput = document.getElementById("ageInput").value;
  let message = document.getElementById("message");
  let image = document.querySelector("img");
  if (ageInput >= 18) {
    message.textContent = "Velkommen inn!";
    image.src = "./images/bouncer3.jpeg";
  } else {
    message.textContent = "Kom deg hjem!";
    image.src = "./images/Bouncer2.jpeg";
  }
}


//variabler
let priceInput = document.getElementById("price-input");
let totalPrice = document.getElementById("total-price");
let buttons = document.querySelectorAll(".btn");

//funksjon for å hente prosentverdi
function getTipPercent(button) {
  return parseFloat(button.getAttribute("data-percent"));
}

//funksjon for å hente prisen fra inputfeltet
function getPrice() {
  return parseFloat(priceInput.value);
}

//funksjon for å regne ut total
function calculateTotal(price, tipPercent) {
  let tipAmount = (price * tipPercent) / 100;
  return price + tipAmount;
}

//funksjon for  oppdatere totalpris i html
function updateTotalPrice(total) {
  totalPrice.textContent = total.toFixed(2);
}

//funskjon som håndterer klikk på en knapp
function handleButtonClick(event) {
  let tipPercent = getTipPercent(event.target);
  let price = getPrice();

  if (!isNaN(price)) {
    let total = calculateTotal(price, tipPercent);
    updateTotalPrice(total);
  } 
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleButtonClick);
});

function reset() {
  priceInput.value = "";
  totalPrice.textContent = "0";
}

//basket scorecard

let scoreHome = 0
let scoreGuest = 0

let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")


function incrementHome(amount){
    scoreHome += amount
    scoreHomeEl.textContent = scoreHome
}  

function incrementGuest(amount){
    scoreGuest += amount
    scoreGuestEl.textContent = scoreGuest
}  

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = scoreHome
    scoreGuestEl.textContent = scoreGuest
}