var valuesForm = document.querySelector('.valuesForm');
var minNumberInput = valuesForm.querySelector('.minNumber'); 
var maxNumberInput = valuesForm.querySelector('.maxNumber');
var formSubmitBtn  = valuesForm.querySelector('.submitBtn');
var resultNumber = document.querySelector('.resultNumber');
valuesForm.addEventListener('submit' , function(evt){
evt.preventDefault();



var minNumberValue = parseFloat( Math.round(minNumberInput.value.trim()) , 10);
var maxNumberValue = parseFloat( Math.round(maxNumberInput.value.trim()) , 10);

if (isNaN(minNumberValue)  || isNaN(maxNumberValue)){
  minNumberInput.value = "";
  maxNumberInput.value = "";
  alert(`Harf o'rniga son kiriting :))`);
  return;
}

// if (minNumberValue < 0 || maxNumberValue < 0){
//   minNumberInput.value = "";
//   maxNumberInput.value = "";
//   alert(`Musbat son kiriting :))`)
// }



randomNumber = Math.floor(Math.random() * (maxNumberValue - minNumberValue + 1) ) + minNumberValue;

resultNumber.textContent = randomNumber ; 

} )



