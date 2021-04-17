let checkboxLabel = document.querySelectorAll('.checkbox-name');
let checkboxInput = document.querySelectorAll('.category__checkbox');


for (let i = 0; i < checkboxLabel.length; i++) {
  if (checkboxInput[i].checked == true) {
    checkboxLabel[i].style.color = '#C283F3';
  } else {
    checkboxLabel[i].style.color = '#ffffff';
  }
}