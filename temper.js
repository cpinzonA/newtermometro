let elForm = document.querySelector(".derecha");
let elFormInput = document.querySelector(".form__input");
let elFormInputLast = document.querySelector(".form__input-last");
let eltemp=document.querySelector(".izquierda");



elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elFormInput.value;

  let result = ((inputValue - 32) * 5/9).toFixed(2);

  elFormInputLast.textContent = `${result}º`;
 
    var element = document.getElementById('medidor')
    element.style.height= `${result}px`; 
    var element2 = document.getElementById('medidor')
    element2.textContent= `${result}º`; 

});
function validar(){
  formulario.reset();
  return false;
}




