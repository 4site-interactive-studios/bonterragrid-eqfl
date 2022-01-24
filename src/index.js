//import css from "./main.css";
import scss from "./sass/main.scss";

window.nvtag_callbacks = window.nvtag_callbacks || {};
var nvtag_callbacks = window.nvtag_callbacks;
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(function(args) {
  displayAccordion();
  mobileImage();
  bgImage();
  moveRadiosElements();
  isViewport();
  insertPremiums();
  checkboxRadiobutton();
  takeActionScroll();
  selectAmount();
  nextButton();
  photoCredit();
  setFrequencyListeners();
  setEFTMessage();
  updatePaymentMethods();
  addCheckboxToFastActionUpdate();
  showBody();

  const target = document.querySelector(".form-item-selectamount");
  if (target) {
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
  }
});

function addCheckboxToFastActionUpdate() {
  const checkmark = document.createElement('div');
  checkmark.classList.add('checkmark');
  const label = document.querySelector('.UpdateMyProfile .updateMyProfileSection label');
  label.appendChild(checkmark);
}

function getThemeOption(option) {
  if(typeof fs_theme_options !== 'undefined' && fs_theme_options.hasOwnProperty(option)) {
    return fs_theme_options[option];
  }
  return null;
}

function setEFTMessage() {
  const message = getThemeOption('eft_message');
  if(message) {    
    const eftButtonWrapper = document.querySelector(".at-eft-button-wrapper label");
    if(eftButtonWrapper) {
      document.body.className += ' has-eft-message'; 
      const messageMarkup = `<div class="eft-message">${message}</div>`; 
      eftButtonWrapper.insertAdjacentHTML('afterend', messageMarkup);
    }
  }
}

function setFrequencyListeners() {
  var frequencies = document.querySelectorAll('input[name="SelectedFrequency"]');
  for(var i = 0; i < frequencies.length; i++) {
    frequencies[i].addEventListener('change', function() {
      updatePaymentMethods();
    });
  }
}

function updatePaymentMethods() {
  var eft_field = document.querySelector('.at-eft-button-wrapper');
  if(eft_field) {
    var selected_frequency = document.querySelector('input[name="SelectedFrequency"]:checked');
    if(selected_frequency.value === '0') { // give once
      eft_field.style.display = 'none';
    } else {
      eft_field.style.display = 'block';
    }
  }
}

function showBody() {
  setTimeout(function() {
    window.scrollTo(0, 0);
    document.body.className += ' showBody';
  }, 750);
}

/**
 * Display Accordion panel
 */
function generateAccordions(accordion_options) {
  const accordions_node = document.createElement('div');
  accordions_node.classList.add('accordions');
  let accordions = new Array();
  for(let i = 0; i < accordion_options.length; i++) {
    if(accordion_options[i].title) {
      accordions.push(generateAccordion(accordion_options[i].title, accordion_options[i].body));
    }
  }
  if(accordions.length) {
    for(let i = 0; i < accordions.length; i++) {
      accordions_node.appendChild(accordions[i]);
    }
    return accordions_node;
  }
  return null;
}
function generateAccordion(title_content, body_content) {
  const accordion = document.createElement('div');
  accordion.classList.add('accordion');

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = title_content;
  accordion.appendChild(title);

  const body = document.createElement('div');
  body.classList.add('panel');
  body.innerHTML = body_content;
  accordion.appendChild(body);

  return accordion;
}
function displayAccordion() {
  const top_accordions_node = generateAccordions(getThemeOption('top_accordions'));
  if(top_accordions_node) {
    let header = document.querySelector('header.HeaderHtml');
    if(header) {
      header.appendChild(top_accordions_node);
    }
  }

  const bottom_accordions_node = generateAccordions(getThemeOption('bottom_accordions'));
  if(bottom_accordions_node) {
    let footer = document.querySelector('fieldset.PaymentMethodSection');
    if(footer) {
      footer.appendChild(bottom_accordions_node);
    }
  }

  let acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].querySelector('.title').addEventListener("click", function() {
      this.parentNode.classList.toggle("active");
    });
  }
}

 /**
 * Background Image
 */
function generateAttribution(attribution_content) {
  if(attribution_content) {
    const attribution = document.createElement('div');
    attribution.classList.add('attribution');
    attribution.innerHTML = attribution_content;
    return attribution;
  }
  return null;
}
function bgImage() {
  const mainImage = getThemeOption('main_image_url');  
  if(mainImage) {
    const bgImage = document.querySelector(".bg-image");
    if(!bgImage) return;
    const bgFocus = getThemeOption('main_image_focus');
    bgImage.style.cssText = `background: url('${mainImage}'); background-repeat: no-repeat; background-size: cover; background-position: ${bgFocus}; background-color: #f7f7f7;`;

    const attribution = generateAttribution(getThemeOption('main_image_attribution'));
    if(attribution) {
      bgImage.appendChild(attribution);
    }
  }
}
function mobileImage() {
  let hero = document.querySelector('.responsive-hero');  
  let img = hero.querySelector('img');
  if (img && !img.getAttribute('src')) {
    img.style.display = 'none';
  }

  const attribution = generateAttribution(getThemeOption('main_image_attribution'));
  if(attribution) {
    hero.appendChild(attribution);
  }
}

/**
 * Contribution Information - Select amount
 */
function selectAmount() {
  const labelAmount = document.querySelectorAll('.label-amount');
  const labelOtheramount = document.querySelector('.edit-otheramount');
  if (labelAmount && labelOtheramount) {
    labelOtheramount.addEventListener('focus', handleClick);

    labelAmount.forEach((label, index) => {
      if(label.querySelector('input[type="radio"]:checked')) {
        label.classList.add("active");
        labelOtheramount.removeAttribute('required');
        labelOtheramount.value = '';
      }
      label.addEventListener('change', handleClick);
    });
  }
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
 * Insert the premiums into the form
 */
function insertPremiums() {
  const premiums = getThemeOption('premiums');
  if(Array.isArray(premiums)) {
    const contributionInformation = document.querySelector(".ContributionInformation");
    if(contributionInformation) {
      premiums.forEach(function(premium, index) {
        if(premium.color && premium.body && premium.title) {
          const imageMarkup = (premium.image_url) ? `
              <div class="premium-image">
                <img src="${premium.image_url}" border="0" alt="" title="" decoding="async" loading="lazy" />
              </div>` : ``;
          const premiumMarkup = `
            <div class="premium color-${premium.color}">
              ${imageMarkup}
              <div class="premium-content">
                <h2>${premium.title}</h2>
                <p>${premium.body}</p>
              </div>
            </div>
          `; 
          contributionInformation.insertAdjacentHTML('beforeend', premiumMarkup);
        }
      });
    }
  }
}


/**
 * Move elements from selected frequency radios
*/

function moveRadiosElements() {
  const selectedFrequency = document.querySelector(".form-item-selectedfrequency");
  if(selectedFrequency) {
    const radios = selectedFrequency.querySelector(".radios");
    const frequencyInput = selectedFrequency.querySelectorAll("label input");
    const radioDescription = document.querySelector(".radio-description");


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

  const giveMonthly = document.querySelector(".at-radio-label-4");
  if(giveMonthly)  {
    giveMonthly.textContent = "Give Monthly";    
  }
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
  if (!takeAction) return;

  if (takeAction.innerHTML.trim() !== '') {
    const target = document.querySelector('.ContributionInformation .radios');
    if (target) {
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
  } else {
    takeAction.style.display = "none";
  }

}

function takeActionScroll() {
  const takeAction = document.querySelector('.take-action');
  if (!takeAction) return;

  if (takeAction.innerHTML.trim() !== '') {
    takeAction.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.ContributionInformation').scrollIntoView({
          behavior: 'smooth'
      });
    });
  }

}

function nextButton() {
  const nextButton = document.querySelector(".nextStep");
  if (!nextButton) return;

  nextButton.innerHTML = 'Continue';    
}


function photoCredit() {
  const bgImage = document.querySelector(".bg-image");
  const responsiveHero = document.querySelector(".responsive-hero");

  if (!responsiveHero || !responsiveHeroImage || !bgImage) return;

  const responsiveHeroImage = responsiveHero.querySelector("img");
  if (responsiveHeroImage && responsiveHeroImage.hasAttribute("title")) {
    const photoAttribute = responsiveHeroImage.getAttribute("title");
    bgImage.insertAdjacentHTML('beforeend', `<div class="photoCredit">${photoAttribute}</div>`);
    responsiveHero.insertAdjacentHTML('beforeend', `<div class="photoCredit">${photoAttribute}</div>`);
  }
}
