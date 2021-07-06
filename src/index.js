//import css from "./main.css";
import scss from "./sass/main.scss";

window.nvtag_callbacks = window.nvtag_callbacks || {};
var nvtag_callbacks = window.nvtag_callbacks;
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(function(args) {
  setDefaultConfig();
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

  showBody();

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

function setDefaultConfig() {
  if(!window.hasOwnProperty('become_member_url')) {
    window.become_member_url = 'https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/imgs/img-memberCard.jpg';
  }
  if(!window.hasOwnProperty('main_image_url')) {
    window.main_image_url = 'https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/imgs/bg.ba7e8cc0703082ae16a3988384bfd1a2.jpg';
  }
}

function mobileImage() {
  let img = document.querySelector('.responsive-hero img');
  if (img && !img.getAttribute('src')) {
    img.style.display = 'none';
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
    if(!bgImage) return;

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
 * Insert the premiums into the form
 */
function insertPremiums() {
  if(fs_theme_options && fs_theme_options.premiums && fs_theme_options.premiums.length) {
    const contributionInformation = document.querySelector(".ContributionInformation");
    if(contributionInformation) {
      fs_theme_options.premiums.forEach(function(premium, index) {
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
  const radios = selectedFrequency.querySelector(".radios");
  const radioDescription = document.querySelector(".radio-description");
  const frequencyInput = selectedFrequency.querySelectorAll("label input");
  const giveMonthly = document.querySelector(".at-radio-label-4");

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

  giveMonthly.textContent = "Give Monthly";

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
  if (!takeAction) return;

  if (takeAction.innerHTML.trim() !== '') {
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
