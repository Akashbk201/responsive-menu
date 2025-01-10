const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const output2 = document.getElementById("result");
const openpopup = document.getElementById("openpopup");
const popUp = document.getElementById("popup");
const closePopUp = document.getElementById("closepopup");
const main = document.querySelector("body");

function add() {
  output2.innerText = parseInt(input1.value) + parseInt(input2.value);
  input1.value = "";
  input2.value = "";
}

function minus() {
  output2.innerText = parseInt(input1.value) - parseInt(input2.value);
  input1.value = "";
  input2.value = "";
}

function multiplication() {
  output2.innerText = parseInt(input1.value) * parseInt(input2.value);
  input1.value = "";
  input2.value = "";
}

function dev() {
  output2.innerText = parseInt(input1.value) % parseInt(input2.value);
  input1.value = "";
  input2.value = "";
}

function division() {
  output2.innerText = parseInt(input1.value) / parseInt(input2.value);
  input1.value = "";
  input2.value = "";
}

openpopup.addEventListener("click", () => {
  popUp.style.display = "block";
});

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});

main.addEventListener("click", (event) => {
  if (event.target.classList.contains("popupcontent")) {
    popUp.style.display = "none";
  }
});
