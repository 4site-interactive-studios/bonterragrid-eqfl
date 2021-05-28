//import css from "./main.css";
import scss from "./sass/main.scss";

let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const labelAmount = document.querySelectorAll('.label-amount');
const labelOtheramount = document.querySelector('.label-otheramount input[type="number"]');

const handleClick = e => {
  e.preventDefault();
  labelAmount.forEach(label => {
    label.classList.remove('active');
    if (e.currentTarget.parentNode.classList.contains("label-otheramount")) {
      const radio = label.querySelector('input[type="radio"]');
      if (radio.classList.contains("radio-other")) {
        radio.checked = true;
      } else {
        radio.checked = false;
      }
    }
  });
  if (e.currentTarget.parentNode.classList.contains("label-otheramount")) {
    e.currentTarget.parentNode.classList.add('active');
  } else {
    e.currentTarget.classList.add('active');
  }
}
labelOtheramount.addEventListener('focus', handleClick);
labelAmount.forEach(label => {
  label.addEventListener('change', handleClick);
});

/**
 * Move elements from selected frequency radios
 */

const selectedFrequency = document.querySelector(".form-item-selectedfrequency");
const radios = selectedFrequency.querySelector(".radios");
const radioDescription = document.querySelector(".radio-description");
const frequencyInput = selectedFrequency.querySelectorAll("label input");

function moveRadiosElements() {
  // Move Radio description outside radios div
  selectedFrequency.appendChild(radioDescription);
  
  // Move inputs outside label and add id/for
  frequencyInput.forEach((input, index) => {
    const label = input.parentNode;
    const labelParent = label.parentNode;
    input.setAttribute('id', 'id-' + index);
    label.setAttribute('for', 'id-' + index);
    labelParent.insertBefore(input, label);
  });

  // Add radios indicator div
  radios.insertAdjacentHTML('beforeend', '<div class="radios__indicator"></div>');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', moveRadiosElements);
} else {
  moveRadiosElements();
}


/**
 * Add checkmark to checkboxes
 */
const checkboxes = document.querySelectorAll('label.at-check');
checkboxes.forEach(checkbox => {
  checkbox.insertAdjacentHTML('beforeend', '<div class="checkmark"></div>');
})


/**
 * Add checkmark to radio buttons
 */
 const radioButtons = document.querySelectorAll("[class^='at-radio']");
 radioButtons.forEach(radio => {
   radio.insertAdjacentHTML('beforeend', '<div class="checkmark"></div>');
 })
 