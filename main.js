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

// Sett standardtekst når siden lastes inn
document.addEventListener("DOMContentLoaded", () => {
  let message = document.getElementById("message");
  message.textContent = "Få se legg!!"; // Sett standardtekst
});
