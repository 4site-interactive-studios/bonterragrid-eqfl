//import css from "./main.css";
import scss from "./sass/main.scss";

window.addEventListener('load', function () {
  displayAccordion();
  bgImage();
  moveRadiosElements();
  isViewport();
  addBecomeMember();
  checkboxRadiobutton();
  takeActionScroll();
  selectAmount();
  nextButton();

  // form-item-selectamount
  const target = document.querySelector(".form-item-selectamount");
  const config = { attributes: false, childList: true, subtree: true };
  
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        selectAmount();
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(target, config);

});

/**
 * Display Accordion panel
 */

function displayAccordion() {
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
}

 /**
 * Background Image
 */
function bgImage() {
  if (window.main_image_url) {
    const bgImage = document.querySelector(".bg-image");
    const mainImage = window.main_image_url;
    bgImage.style.cssText = `background: url('${mainImage}'); background-repeat: no-repeat; background-size: cover; background-position: center center;`
  }
}

/**
 * Contribution Information - Select amount
 */
function selectAmount() {
  const labelAmount = document.querySelectorAll('.label-amount');
  const labelOtheramount = document.querySelector('.edit-otheramount');
  
  labelOtheramount.addEventListener('focus', handleClick);

  labelAmount.forEach((label, index) => {
    if (index === 0) {
      label.classList.add("active");
      label.querySelector('input[type="radio"]').checked = true;
      labelOtheramount.removeAttribute('required');
      labelOtheramount.value = '';
    }
    label.addEventListener('change', handleClick);
  });
}

function handleClick(e) {
  const labelAmount = document.querySelectorAll('.label-amount');
  e.preventDefault();
  labelAmount.forEach(label => {
    const radio = label.querySelector('input[type="radio"]');
    label.classList.remove('active');
    if (e.currentTarget.parentNode.classList.contains("label-otheramount")) {
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

/**
 * Add become member element to form
 */
//  const contributionInformation = document.querySelector(".ContributionInformation");

function addBecomeMember() {
  const contributionInformation = document.querySelector(".ContributionInformation");
  const becomeMember = `
  <div class="becomeMember">
    <img src="${window.become_member_url}" border="0" alt="" title="" />
    <div class="becomeMember-content">
      <h2>Become a member!</h2>
      <p>With a one-time contribution of $35 or more, members receive an Equality Florda Membership Card and enamel pin.</p>
    </div>
  </div>
  `;
  contributionInformation.insertAdjacentHTML('afterend', becomeMember);
}

/**
 * Move elements from selected frequency radios
*/

function moveRadiosElements() {
  const selectedFrequency = document.querySelector(".form-item-selectedfrequency");
  const radios = selectedFrequency.querySelector(".radios");
  const radioDescription = document.querySelector(".radio-description");
  const frequencyInput = selectedFrequency.querySelectorAll("label input");

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

function checkboxRadiobutton() {
  /**
   * Add checkmark to checkboxes
   */
  const checkboxes = document.querySelectorAll('label.at-check');

  checkboxes.forEach(checkbox => {
    checkbox.insertAdjacentHTML('beforeend', '<div class="checkmark"></div>');
  });

  /**
  * Add checkmark to radio buttons
  */

  const radioButtons = document.querySelectorAll("[class^='at-radio']");

  radioButtons.forEach(radio => {
    radio.insertAdjacentHTML('beforeend', '<div class="checkmark"></div>');
  });
}
 

/**
* Intersection Observer viewport & scroll into view
*/


function isViewport() {

  const takeAction = document.querySelector('.take-action');
  const target = document.querySelector('.ContributionInformation .radios');
  const config = { rootMargin: '0px', threshold: 1.0 }

  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting || (entry.boundingClientRect.top <= 0)) {
        takeAction.style.display = "none";
      } else {
        takeAction.style.display = "";
      }
    });
  };
  
  const observer = new IntersectionObserver(callback, config);
  observer.observe(target);

}

function takeActionScroll() {
  const takeAction = document.querySelector('.take-action');
  takeAction.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.ContributionInformation').scrollIntoView({
        behavior: 'smooth'
    });
  });
}

function nextButton() {
  const nextButton = document.querySelector(".nextStep");
  nextButton.innerHTML = 'Continue';
}