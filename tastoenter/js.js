const inputColor = document.querySelector("#back-color");
const textColor = document.querySelector("#input-text-color");



// Change color function
const changeColor = (evt) => {
  const selectedColor = evt.currentTarget.value;
  textColor.value = selectedColor;
  inputColor.value = selectedColor;
};

// Add the Event to your input
textColor.addEventListener("input", changeColor);


const inputColor1 = document.querySelector("#text-color");
const textColor1 = document.querySelector("#input-text-color1");

// Change color function
const changeColor1 = (evt) => {
  const selectedColor = evt.currentTarget.value;
  textColor1.value = selectedColor;
  inputColor1.value = selectedColor;
};

// Add the Event to your input
textColor1.addEventListener("input", changeColor1);