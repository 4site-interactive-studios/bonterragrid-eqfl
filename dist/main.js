/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
//import css from "./main.css";

window.nvtag_callbacks = window.nvtag_callbacks || {};
var nvtag_callbacks = window.nvtag_callbacks;
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(function (args) {
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
  showBody();
  var target = document.querySelector(".form-item-selectamount");

  if (target) {
    var config = {
      attributes: false,
      childList: true,
      subtree: true
    };

    var callback = function callback(mutationsList, observer) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mutation = _step.value;

          if (mutation.type === 'childList') {
            selectAmount();
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    var observer = new MutationObserver(callback);
    observer.observe(target, config);
  }
});

function getThemeOption(option) {
  if (typeof fs_theme_options !== 'undefined' && fs_theme_options.hasOwnProperty(option)) {
    return fs_theme_options[option];
  }

  return null;
}

function setEFTMessage() {
  var message = getThemeOption('eft_message');

  if (message) {
    var eftButtonWrapper = document.querySelector(".at-eft-button-wrapper label");

    if (eftButtonWrapper) {
      document.body.className += ' has-eft-message';
      var messageMarkup = "<div class=\"eft-message\">".concat(message, "</div>");
      eftButtonWrapper.insertAdjacentHTML('afterend', messageMarkup);
    }
  }
}

function setFrequencyListeners() {
  var frequencies = document.querySelectorAll('input[name="SelectedFrequency"]');

  for (var i = 0; i < frequencies.length; i++) {
    frequencies[i].addEventListener('change', function () {
      updatePaymentMethods();
    });
  }
}

function updatePaymentMethods() {
  var eft_field = document.querySelector('.at-eft-button-wrapper');

  if (eft_field) {
    var selected_frequency = document.querySelector('input[name="SelectedFrequency"]:checked');

    if (selected_frequency.value === '0') {
      // give once
      eft_field.style.display = 'none';
    } else {
      eft_field.style.display = 'block';
    }
  }
}

function mobileImage() {
  var img = document.querySelector('.responsive-hero img');

  if (img && !img.getAttribute('src')) {
    img.style.display = 'none';
  }
}

function showBody() {
  setTimeout(function () {
    window.scrollTo(0, 0);
    document.body.className += ' showBody';
  }, 750);
}
/**
 * Display Accordion panel
 */


function displayAccordion() {
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;

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
  var mainImage = getThemeOption('main_image_url');

  if (mainImage) {
    var _bgImage = document.querySelector(".bg-image");

    if (!_bgImage) return;
    _bgImage.style.cssText = "background: url('".concat(mainImage, "'); background-repeat: no-repeat; background-size: cover; background-position: center center;");
  }
}
/**
 * Contribution Information - Select amount
 */


function selectAmount() {
  var labelAmount = document.querySelectorAll('.label-amount');
  var labelOtheramount = document.querySelector('.edit-otheramount');

  if (labelAmount && labelOtheramount) {
    labelOtheramount.addEventListener('focus', handleClick);
    labelAmount.forEach(function (label, index) {
      if (label.querySelector('input[type="radio"]:checked')) {
        label.classList.add("active");
        labelOtheramount.removeAttribute('required');
        labelOtheramount.value = '';
      }

      label.addEventListener('change', handleClick);
    });
  }
}

function handleClick(e) {
  var labelAmount = document.querySelectorAll('.label-amount');
  e.preventDefault();
  labelAmount.forEach(function (label) {
    var radio = label.querySelector('input[type="radio"]');
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
  var premiums = getThemeOption('premiums');

  if (Array.isArray(premiums)) {
    var contributionInformation = document.querySelector(".ContributionInformation");

    if (contributionInformation) {
      premiums.forEach(function (premium, index) {
        if (premium.color && premium.body && premium.title) {
          var imageMarkup = premium.image_url ? "\n              <div class=\"premium-image\">\n                <img src=\"".concat(premium.image_url, "\" border=\"0\" alt=\"\" title=\"\" decoding=\"async\" loading=\"lazy\" />\n              </div>") : "";
          var premiumMarkup = "\n            <div class=\"premium color-".concat(premium.color, "\">\n              ").concat(imageMarkup, "\n              <div class=\"premium-content\">\n                <h2>").concat(premium.title, "</h2>\n                <p>").concat(premium.body, "</p>\n              </div>\n            </div>\n          ");
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
  var selectedFrequency = document.querySelector(".form-item-selectedfrequency");

  if (selectedFrequency) {
    var radios = selectedFrequency.querySelector(".radios");
    var frequencyInput = selectedFrequency.querySelectorAll("label input");
    var radioDescription = document.querySelector(".radio-description"); // Move Radio description outside radios div

    selectedFrequency.appendChild(radioDescription); // Move inputs outside label and add id/for

    frequencyInput.forEach(function (input, index) {
      var label = input.parentNode;
      var labelParent = label.parentNode;
      input.setAttribute('id', 'id-' + index);
      label.setAttribute('for', 'id-' + index);
      labelParent.insertBefore(input, label);
    }); // Add radios indicator div

    radios.insertAdjacentHTML('beforeend', '<div class="radios__indicator"></div>');
  }

  var giveMonthly = document.querySelector(".at-radio-label-4");

  if (giveMonthly) {
    giveMonthly.textContent = "Give Monthly";
  }
}

function checkboxRadiobutton() {
  /**
   * Add checkmark to checkboxes
   */
  var checkboxes = document.querySelectorAll('label.at-check');
  checkboxes.forEach(function (checkbox) {
    checkbox.insertAdjacentHTML('beforeend', '<div class="checkmark"></div>');
  });
  /**
  * Add checkmark to radio buttons
  */

  var radioButtons = document.querySelectorAll("[class^='at-radio']");
  radioButtons.forEach(function (radio) {
    radio.insertAdjacentHTML('beforeend', '<div class="checkmark"></div>');
  });
}
/**
* Intersection Observer viewport & scroll into view
*/


function isViewport() {
  var takeAction = document.querySelector('.take-action');
  if (!takeAction) return;

  if (takeAction.innerHTML.trim() !== '') {
    var target = document.querySelector('.ContributionInformation .radios');

    if (target) {
      var config = {
        rootMargin: '0px',
        threshold: 1.0
      };

      var callback = function callback(entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting || entry.boundingClientRect.top <= 0) {
            takeAction.style.display = "none";
          } else {
            takeAction.style.display = "";
          }
        });
      };

      var observer = new IntersectionObserver(callback, config);
      observer.observe(target);
    }
  } else {
    takeAction.style.display = "none";
  }
}

function takeActionScroll() {
  var takeAction = document.querySelector('.take-action');
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
  var nextButton = document.querySelector(".nextStep");
  if (!nextButton) return;
  nextButton.innerHTML = 'Continue';
}

function photoCredit() {
  var bgImage = document.querySelector(".bg-image");
  var responsiveHero = document.querySelector(".responsive-hero");
  if (!responsiveHero || !responsiveHeroImage || !bgImage) return;
  var responsiveHeroImage = responsiveHero.querySelector("img");

  if (responsiveHeroImage && responsiveHeroImage.hasAttribute("title")) {
    var photoAttribute = responsiveHeroImage.getAttribute("title");
    bgImage.insertAdjacentHTML('beforeend', "<div class=\"photoCredit\">".concat(photoAttribute, "</div>"));
    responsiveHero.insertAdjacentHTML('beforeend', "<div class=\"photoCredit\">".concat(photoAttribute, "</div>"));
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://use.typekit.net/fyc7sqc.css);"]);
// Module
exports.push([module.i, "body:not(.showBody) .eqfl-container{background-color:#E0F4F5 !important;opacity:0 !important}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}@font-face{font-family:'caldinalight_italic';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-300-light-italic-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-300-light-italic-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinalight';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-300-light-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-300-light-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinaitalic';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-400-regular-italic-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-400-regular-italic-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinaregular';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-400-regular-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-400-regular-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinamedium_italic';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-500-medium-italic-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-500-medium-italic-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinamedium';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-500-medium-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-500-medium-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinasemibold_italic';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-600-semibold-italic-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-600-semibold-italic-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinasemibold';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-600-semibold-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-600-semibold-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinabold_italic';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-700-bold-italic-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-700-bold-italic-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'caldinabold';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-700-bold-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/caldina-700-bold-webfont.woff\") format(\"woff\");font-weight:normal;font-style:normal}@font-face{font-family:'alkes';src:url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/alkesrgit-webfont.woff2\") format(\"woff2\"),url(\"https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/16307/images/4Site/fonts/alkesrgit-webfont.woff\") format(\"woff\");font-weight:normal;font-style:italic}html,body{margin:0;padding:0;width:100%;font-family:'caldinaregular', sans-serif;font-size:16px}body.showBody .eqfl-container{background-color:#FFFFFF;opacity:1;transition:opacity 0.3s ease-in-out}img{max-width:100%;height:auto}h2{font-size:22px}.at{font-family:'caldinaregular', sans-serif !important}.at-checkbox-title-container{padding-left:0 !important}.at input[type=\"checkbox\"]+span:before,.at input[type=\"checkbox\"]:checked+span:after{display:none !important}.at select{height:auto !important;font-size:14px !important;background-color:#F8F9F9 !important}header.at-title{display:none}.eqfl-container{display:flex}.multistep-layout .HeaderHtml p:first-of-type{padding-top:32px}@media (min-width: 641px){.multistep-layout .HeaderHtml p:first-of-type{padding-top:16px}}.content-wrap{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;font-family:'caldinaregular';font-weight:400;line-height:24px;z-index:50;max-width:640px;background-color:#FFFFFF}@media (min-width: 641px){.content-wrap{background-image:url(\"data:image/svg+xml;charset=UTF-8, <svg width='5' height='762' viewBox='0 0 5 762' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -257.058 303.476)' fill='white'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -287.804 336.15)' fill='%232DC3E9'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -318.548 368.824)' fill='%236A3A10'/><rect width='44.8646' height='528.317' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -349.293 401.498)' fill='%23402611'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -226.312 270.802)' fill='%23F490B3'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -195.567 238.129)' fill='%23EE2B77'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -164.823 205.455)' fill='%23F99D25'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -134.078 172.782)' fill='%23FFD200'/><path d='M-103.333 140.108L-72.5879 107.434L257.702 458.443L226.957 491.116L-103.333 140.108Z' fill='%2388C540'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -72.5869 107.434)' fill='%2300A3AB'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -41.8428 74.7606)' fill='%230072BC'/><rect width='44.8646' height='517.725' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -35.5967 16.0507)' fill='%23643695'/></svg>\");background-repeat:repeat-y;background-position:right top}}.eqfl-content{padding:20px 10px}@media (min-width: 382px){.eqfl-content{padding:20px}}@media (min-width: 412px){.eqfl-content{padding:21px 35px}}@media (min-width: 485px){.eqfl-content{padding:42px 70px}}.eqfl-content p{margin:16px 4px}.eqfl-footer{background-color:#F0F1F2;width:100%;max-width:635px;padding:42px 70px;box-sizing:border-box}.eqfl-footer img{width:422px}div[id^=nb-field-] div.nb-feedback div .nb-poweredby{display:none !important}.grecaptcha-badge{visibility:hidden}.responsive-hero{position:relative;display:flex;flex-direction:column}.responsive-hero .separator{width:auto;height:3px;background-image:url(\"data:image/svg+xml;charset=UTF-8, <svg width='457' height='3' viewBox='0 0 457 3' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(%23clip0)'><path d='M162.41 138.787L182.006 157.234L392.519 -40.9392L372.923 -59.3861L162.41 138.787Z' fill='white'/><path d='M182.006 157.234L201.602 175.681L412.115 -22.4917L392.519 -40.9387L182.006 157.234Z' fill='%232DC3E9'/><path d='M201.602 175.681L221.198 194.128L431.711 -4.04542L412.115 -22.4924L201.602 175.681Z' fill='%236A3A10'/><path d='M221.198 194.128L240.793 212.574L471.548 -4.65336L451.952 -23.1003L221.198 194.128Z' fill='%23402611'/><path d='M142.815 120.339L162.41 138.786L372.923 -59.3867L353.328 -77.8336L142.815 120.339Z' fill='%23F490B3'/><path d='M123.219 101.893L142.815 120.339L353.328 -77.8335L333.732 -96.2804L123.219 101.893Z' fill='%23EE2B77'/><path d='M103.623 83.4462L123.219 101.893L333.732 -96.2798L314.137 -114.727L103.623 83.4462Z' fill='%23F99D25'/><path d='M84.0282 64.9994L103.624 83.4463L314.137 -114.727L294.541 -133.174L84.0282 64.9994Z' fill='%23FFD200'/><path d='M84.028 64.9994L64.4322 46.5525L274.945 -151.62L294.541 -133.173L84.028 64.9994Z' fill='%2388C540'/><path d='M44.8366 28.105L64.4322 46.5519L274.945 -151.621L255.35 -170.068L44.8366 28.105Z' fill='%2300A3AB'/><path d='M25.2411 9.65864L44.8367 28.1056L255.35 -170.067L235.754 -188.514L25.2411 9.65864Z' fill='%230072BC'/><path d='M-9.96941 5.91096L9.62622 24.3579L235.754 -188.515L216.159 -206.962L-9.96941 5.91096Z' fill='%23643695'/></g><defs><clipPath id='clip0'><rect width='2.99998' height='457' fill='white' transform='translate(0 3.00006) rotate(-90)'/></clipPath></defs></svg>\");background-repeat:repeat-x;background-position:left bottom}@media (min-width: 641px){.responsive-hero{display:none}}.bg-image{position:fixed;right:0;top:0;height:100vh;display:flex;width:calc(100vw - 630px)}@media (max-width: 640px){.bg-image{display:none}}.photoCredit{position:absolute;bottom:0;right:0;font-size:12px;font-family:'caldinabold', sans-serif;background:rgba(0,38,52,0.24);color:#FFFFFF;padding:8px 42px}.logo{width:175px;margin:0 4px}h1,h2,h3,h4,h5,h6{font-family:\"kiro\", sans-serif !important}h1{font-size:54px;line-height:54px;font-family:\"kiro\", sans-serif;margin:36px 4px}.accordions{margin:0 4px;box-sizing:border-box}.accordions .accordion{position:relative;background:#FFFFFF;color:#000000;cursor:pointer;padding:18px;text-align:left;border:0;outline:none;transition:background-color 0.2s ease-in-out;background-image:linear-gradient(to right, #000 33%, rgba(255,255,255,0) 0%);background-position:bottom;background-size:4px 1px;background-repeat:repeat-x}.accordions .accordion::after{position:absolute;right:20px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none' viewBox='0 0 10 6'><path fill='%23002634' d='M5.2 6l4.548-4.536c.336-.335.336-.878 0-1.213-.336-.335-.88-.335-1.216 0L5.2 3.574 1.868.251c-.336-.335-.88-.335-1.216 0-.336.335-.336.878 0 1.213L5.2 6z'/></svg>\")}.accordions .active::after{position:absolute;right:20px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.1999 -8.39259e-07L0.651743 4.53607C0.315953 4.87097 0.315958 5.41395 0.651753 5.74884C0.987541 6.08372 1.53195 6.08372 1.86773 5.74883L5.1999 2.42551L8.53208 5.74883C8.86786 6.08372 9.41227 6.08372 9.74805 5.74884C10.0839 5.41395 10.0839 4.87097 9.74806 4.53607L5.1999 -8.39259e-07Z' fill='%23002634'/></svg>\")}.accordions .panel{padding:0 18px;display:none;overflow:hidden}.take-action{position:fixed;bottom:24px;left:24px;right:24px;width:auto;height:auto;padding:24px;background:#ee2b77;z-index:52;border-radius:8px;text-align:center;color:#FFFFFF;font-size:24px;font-family:\"kiro\", sans-serif;font-weight:700;cursor:pointer}.take-action::after{position:absolute;right:24px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.33439 8.93812L2.3344 8.93813L7.08801 13.2918L7.08801 1.34746C7.08801 1.09859 7.30578 0.91 7.55739 0.91L8.44261 0.91C8.69421 0.91 8.91198 1.09859 8.91198 1.34746L8.91198 13.2918L13.6656 8.93813C13.8482 8.77094 14.1412 8.77095 14.3237 8.93812L14.3237 8.93813L14.9497 9.5114C15.1368 9.68276 15.1368 9.96415 14.9497 10.1355L14.9497 10.1355L8.32907 16.1991C8.14651 16.3663 7.85354 16.3663 7.67096 16.1991L7.67096 16.1991L1.05035 10.1355C0.863217 9.96416 0.863214 9.68276 1.05035 9.5114C1.05035 9.5114 1.05035 9.5114 1.05036 9.5114L1.67629 8.93813C1.85884 8.77094 2.15182 8.77095 2.33439 8.93812Z' fill='white' stroke='white' stroke-width='0.18'/></svg>\")}@media (min-width: 641px){.take-action{display:none}}.premium{border-radius:8px;display:flex;margin:16px 4px 24px 4px;overflow:hidden}.premium.color-yellow{background-color:#F2E59F}.premium.color-teal{background-color:#00A3AB}.premium.color-teal h2,.premium.color-teal p{color:#ffffff}.premium.color-pink{background-color:#EE2B77}.premium.color-pink h2,.premium.color-pink p{color:#ffffff}.premium.color-black{background-color:#002634}.premium.color-black h2,.premium.color-black p{color:#ffffff}.premium.color-blue{background-color:#0072BC}.premium.color-blue h2,.premium.color-blue p{color:#ffffff}.premium.color-purple{background-color:#643695}.premium.color-purple h2,.premium.color-purple p{color:#ffffff}.premium.color-ltgray{background-color:#8D939E}.premium.color-ltgray h2,.premium.color-ltgray p{color:#ffffff}.premium.color-dkgray{background-color:#555F6B}.premium.color-dkgray h2,.premium.color-dkgray p{color:#ffffff}.premium.color-brown{background-color:#6A3A10}.premium.color-brown h2,.premium.color-brown p{color:#ffffff}.premium .premium-image{flex:1 1 50%}.premium .premium-content{padding:45px 22px 45px 14px;flex:1 1 50%}.premium h2{margin:0 0 18px 0}.premium p{margin:0 !important}.premium img{width:230px}@media (max-width: 641px){.premium{justify-content:center;flex-wrap:wrap;text-align:center}}.at-form-submit{padding:0 !important}.at-row>[class^=\"at-\"]{margin:0 !important;min-width:0 !important}.at-credit-card-button-wrapper .at-btn-radio,.at-eft-button-wrapper .at-btn-radio{background:#EE2B77 !important;padding:16px 74px !important;border-radius:8px !important;text-align:center !important;color:#FFFFFF !important;font-size:24px !important;font-family:\"kiro\", sans-serif !important;font-weight:700 !important;cursor:pointer !important;border:0 !important}.step-prevNext{display:flex;flex-direction:row-reverse;justify-content:flex-start;align-items:center}.step-prevNext .submitStep{position:relative !important}.prevStep{font-size:20px !important;font-family:\"kiro\", sans-serif !important;font-weight:normal !important;color:#8D939E !important}.at .btn-at-primary{background:#EE2B77 !important;padding:16px 74px !important;border-radius:8px !important;text-align:center !important;color:#FFFFFF !important;font-size:24px !important;font-family:\"kiro\", sans-serif !important;font-weight:700 !important;cursor:pointer !important}.at .btn-at-primary::after{position:absolute;right:24px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.81898 13.6656L8.81899 13.6656L13.1726 8.91199L1.22832 8.91199C0.979446 8.91199 0.79086 8.69422 0.79086 8.44261L0.790861 7.55739C0.790861 7.30579 0.979447 7.08802 1.22832 7.08802L13.1726 7.08802L8.81899 2.33438C8.6518 2.15183 8.65181 1.85885 8.81898 1.67628L8.81899 1.67627L9.39226 1.05033C9.56363 0.863222 9.84501 0.863232 10.0164 1.05032L10.0164 1.05033L16.0799 7.67094C16.2471 7.85349 16.2471 8.14646 16.0799 8.32904L16.0799 8.32905L10.0164 14.9496C9.84502 15.1368 9.56362 15.1368 9.39226 14.9497C9.39226 14.9497 9.39226 14.9496 9.39226 14.9496L8.81899 14.3237C8.6518 14.1412 8.65181 13.8482 8.81898 13.6656Z' fill='white' stroke='white' stroke-width='0.18'/></svg>\")}input:not(.edit-otheramount):focus-visible{outline:none !important;background:#FFFFFF !important;border:1px solid #80D1D5 !important}fieldset{padding:0;margin:0 4px 0 4px !important;border:0}.at .at-fieldset{padding:0 !important;min-width:0 !important}.form-item-inhonororinmemoryof{display:flex;flex-direction:column}.form-item-inhonororinmemoryof label{display:none !important}.at-text input{background-color:#F8F9F9 !important}.multistep-layout .HeaderHtml{padding:0 !important}fieldset legend,.at-steps{display:none !important}fieldset.ContributionInformation{margin:0 !important}.form-item-selectedfrequency{margin:0 4px}@media only screen and (max-width: 40em){.at form .label-amount:nth-child(2n+2){margin-right:4px !important}}.form-item-selectedfrequency .radios{position:relative;display:flex;align-items:center;padding:0 4px;margin:36px auto 8px auto !important;font-size:24px;color:#00A3AB;height:70px;background:#E0F4F5;border-radius:11px}.form-item-selectedfrequency .radios label{display:inline-block;width:50%;flex:0 1 auto;padding:1rem;text-align:center;cursor:pointer;transition:color 200ms ease-out;z-index:51;color:inherit !important;font-family:'caldinaregular', sans-serif !important;text-shadow:none !important;font-size:20px !important}@media (min-width: 550px){.form-item-selectedfrequency .radios label{font-size:24px !important}}.form-item-selectedfrequency .radios__indicator{content:'';z-index:50;width:50%;height:62px;position:absolute;left:0;background:#00A3AB;border-radius:8px;transition:transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),background 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);transform:translate3d(4px, 0, 0)}.form-item-selectedfrequency .radios input#id-0:checked ~ .radios__indicator{background:#00A3AB;transform:translate3d(4px, 0, 0)}.form-item-selectedfrequency .radios input#id-1:checked ~ .radios__indicator{background:#00A3AB;transform:translate3d(calc(100% - 4px), 0, 0)}.form-item-selectedfrequency .radios input[type=\"radio\"]:not(:checked),.form-item-selectedfrequency .radios input[type=\"radio\"]:checked{display:none}.form-item-selectedfrequency .radios input#id-1:checked ~ .at-radio-label-0{color:#FFFFFF !important}.form-item-selectedfrequency .radios input#id-0:checked ~ .at-radio-label-4{color:#FFFFFF !important}.radio-description{display:flex;font-size:16px;line-height:24px;font-family:\"Alkes\", serif;font-style:italic;font-weight:400;margin-bottom:36px;color:#00A3AB}.radio-description::before{display:flex;margin-right:10px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='12' height='30' viewBox='0 0 12 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.2 5.9038C1.86724 8.53428 0.444421 11.9797 0.444421 15.761C0.444422 21.789 4.04311 26.9766 9.22659 29.357C10.1163 29.7655 11.123 29.2508 11.4325 28.322C11.7453 27.3834 11.2249 26.3814 10.3426 25.9339C6.60875 24.0396 4.05558 20.1991 4.05558 15.761C4.05558 12.9661 5.09558 10.4285 6.77833 8.4485L10.2966 11.9306C10.928 12.5556 12 12.1083 12 11.2199L12 0.750003L1.42953 0.750004C0.536472 0.750004 0.0912864 1.8316 0.725585 2.46026L4.2 5.9038Z' fill='%2300A3AB'/></svg>\")}.form-item-selectamount .at-radios{display:flex;flex-direction:row;flex-wrap:wrap}.form-item-selectamount .at-radios .label-amount.active{color:#FFFFFF;transition:color 0.2s ease-in-out}.form-item-selectamount .at-radios .label-amount:nth-child(4n+4){margin-right:4px !important}.form-item-selectamount .at-radios .label-amount{display:flex;flex:1 1 0px;justify-content:center;align-items:center;color:#00A3AB;font-size:22px;padding:16px 20px;cursor:pointer;text-align:center;position:relative;margin:0 4px 8px 4px;font-family:'caldinasemibold', sans-serif;text-shadow:none !important}@media (min-width: 641px){.form-item-selectamount .at-radios .label-amount{max-width:117px}}.form-item-selectamount .at-radios .label-amount a{position:absolute;top:0;right:0;height:100%;left:0;display:block;border:1px solid #D6D8DC;color:#00A3AB;background-color:#FFFFFF;border-radius:8px;z-index:-1;transition:all 0.2s ease-in-out}.form-item-selectamount .at-radios .label-amount:hover{color:#FFFFFF}.form-item-selectamount .at-radios .label-amount:hover>a{background-color:#00A3AB;border-color:#00A3AB;transition:all 0.2s ease-in-out}.form-item-selectamount .at-radios .label-amount input[type=\"radio\"]{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);width:100% !important;font-size:.9375rem;margin-left:0;height:50px;min-height:0;padding:7px 10px 7px 1.5rem;outline:none;border:1px solid #D6D8DC;border-radius:4px;background-color:#fff;font-size:24px;line-height:1.428571429;font-weight:400;letter-spacing:-0.03em;max-width:100%;margin-bottom:0}.form-item-selectamount .at-radios .label-amount input[type=\"radio\"]:checked+a{background-color:#00A3AB;border-color:#00A3AB;transition:all 0.2s ease-in-out}.form-item-selectamount .at-radios .label-otheramount{position:relative;background-color:transparent;font-size:0;padding:0;flex:auto;width:20% !important;max-width:none;height:66px;margin:0 4px 8px 4px !important}.form-item-selectamount .at-radios .label-otheramount.active input[type=\"number\"]{background-color:#00A3AB;border-color:#00A3AB;color:#FFFFFF}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount{border-radius:8px;padding:16px 20px;border:1px solid #D6D8DC;width:100%;height:100%;font-size:22px;box-sizing:border-box;background:#F8F9F9}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount::-webkit-input-placeholder{color:#D4D7DA}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount::-moz-placeholder{color:#D4D7DA}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount:-ms-input-placeholder{color:#D4D7DA}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount::-ms-input-placeholder{color:#D4D7DA}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount::placeholder{color:#D4D7DA}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount:focus{background-color:#00A3AB;border-color:#00A3AB;color:#FFFFFF}.form-item-selectamount .at-radios .label-otheramount input+.label-otheramount-prefix{display:block;position:absolute;color:#000000;left:0;top:15px;font-size:15px;line-height:1.42857;padding:7px 0 7px 10px;border:1px solid transparent;text-shadow:none}.form-item-selectamount .at-radios .label-otheramount input:required{background-color:#00A3AB;border-color:#00A3AB;color:#FFFFFF;box-shadow:none}.TributeGift .radios{display:flex !important}.TributeGift .HonoreeName{width:100%}.TributeGift .HonoreeName input{display:flex;border-radius:8px;padding:16px 20px;border:1px solid #D6D8DC;width:100%;height:100%;font-size:22px;box-sizing:border-box;background:#F8F9F9}.TributeGift label[class^=\"at-radio\"]{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:12px}.TributeGift label[class^=\"at-radio\"] input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.TributeGift .checkmark{position:absolute;top:0;left:0;height:24px;width:24px;background-color:#FFFFFF;border:1px solid #D6D8DC;border-radius:50%}.TributeGift label[class^=\"at-radio\"] input:checked ~ .checkmark{background-color:#00A3AB;border:1px solid #00A3AB}.TributeGift .checkmark:after{content:\"\";position:absolute;display:none}.TributeGift label[class^=\"at-radio\"] input:checked ~ .checkmark:after{display:block}.TributeGift label[class^=\"at-radio\"] .checkmark:after{top:8px;left:8px;width:6px;height:6px;border-radius:50%;background:white}.at-check{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.at-check input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.at-check .checkmark{position:absolute;top:0;left:0;height:22px;width:22px;background-color:#FFFFFF;border:1px solid #D6D8DC;border-radius:6px}.at-check input:checked ~ .checkmark{background-color:#00A3AB;border:1px solid #00A3AB}.at-check .checkmark:after{content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.6485 2.11306L5.31801 8.63755C4.84923 9.12082 4.08879 9.12082 3.61956 8.63755L0.351719 5.26908C-0.11724 4.78581 -0.11724 4.00193 0.351719 3.51856C0.820766 3.03511 1.58114 3.03511 2.04998 3.51838L4.46904 6.01177L9.94997 0.362453C10.419 -0.121001 11.1795 -0.120635 11.6483 0.362453C12.1172 0.845816 12.1172 1.62943 11.6485 2.11306Z' fill='white'/></svg>\");position:absolute;top:0px;left:4px;display:none;width:12px;height:9px}.at-check input:checked ~ .checkmark:after{display:block}.RecipientInformation{margin-bottom:50px}.RecipientInformation .at-recipient-info .at-title{font-size:22px !important;margin:0 !important}.RecipientInformation .RecipientEmailAddress,.RecipientInformation .NotificationMessage{width:100%;margin-top:25px}.RecipientInformation .RecipientEmailAddress input,.RecipientInformation .RecipientEmailAddress textarea,.RecipientInformation .NotificationMessage input,.RecipientInformation .NotificationMessage textarea{display:flex;border-radius:8px;padding:16px 20px;border:1px solid #D6D8DC;width:100%;height:100%;font-size:22px;box-sizing:border-box;background:#F8F9F9}.RecipientInformation .RecipientEmailAddress textarea,.RecipientInformation .NotificationMessage textarea{resize:vertical;font-size:16px}.RecipientInformation .at-row.at-row-solo.NotificationMessage{margin:0 !important}.PaymentMethodSection .at-radio-set-buttons input[type=\"radio\"]{display:none}.PaymentMethodSection .at-credit-card-button-wrapper,.PaymentMethodSection .at-eft-button-wrapper{display:flex;text-align:center;font-size:24px}.PaymentMethodSection .at-credit-card-button-wrapper .at-btn-radio,.PaymentMethodSection .at-eft-button-wrapper .at-btn-radio{background-color:#ee2b77;color:#FFFFFF;padding:19px 24px;border-radius:8px;width:100%}.PaymentMethodSection .eft-message{font-size:16px;line-height:24px;font-family:\"Alkes\", serif;font-style:italic;font-weight:400;margin-bottom:36px;color:#00A3AB;margin-bottom:20px !important}.has-eft-message .at-eft-button-wrapper label{margin-bottom:0px !important;padding-bottom:0px}.ContactInformation .at-fields .at-row{display:flex;margin-bottom:8px}.ContactInformation .at-fields .at-row label{font-size:14px;flex:1}.ContactInformation .at-fields .at-row label:not(:last-child){margin-right:8px !important}.ContactInformation .at-fields .at-row label.error input{outline:none !important;background:#FFFBFC !important;border:1px solid #FCDDE9 !important}.ContactInformation .at-fields .at-row label.error small.error{color:#EE2B77}.ContactInformation .at-fields .at-row input,.ContactInformation .at-fields .at-row select{display:flex;border-radius:8px;padding:14px 20px;border:1px solid #D6D8DC;width:100%;font-size:16px;box-sizing:border-box}.ContactInformation .at-fields .at-row input{background:#F8F9F9;height:48px}.ContactInformation .at-fields .at-row select{height:48px !important}.ContactInformation .at-fields .at-row.PostalCode.City.StateProvince{justify-content:flex-start}.ContactInformation .at-fields .at-row.PostalCode.City.StateProvince label{flex:1 1 0px !important}.PaymentInformation label{font-size:14px}.PaymentInformation .vgs-cc-iframe-wrapper iframe,.PaymentInformation .vgs-ccexpiration-iframe-wrapper iframe{display:flex;border-radius:8px;border:1px solid #D6D8DC;width:100%;font-size:16px;box-sizing:border-box;background:#FFFFFF}.PaymentInformation .at-cc-number{margin-right:8px !important}.PaymentInformation .css-kaihww{background-color:#F8F9F9 !important}.button-pink .at-credit-card-button-wrapper .at-btn-radio,.button-pink .at-eft-button-wrapper .at-btn-radio{background:#EE2B77 !important}.button-pink .prevNext .submitStep,.button-pink .prevNext .nextStep{background:#EE2B77 !important}.button-pink .take-action{background:#EE2B77 !important}.button-pink input[type=\"submit\"]{background:#EE2B77 !important}.button-teal .at-credit-card-button-wrapper .at-btn-radio,.button-teal .at-eft-button-wrapper .at-btn-radio{background:#00A3AB !important}.button-teal .prevNext .submitStep,.button-teal .prevNext .nextStep{background:#00A3AB !important}.button-teal .take-action{background:#00A3AB !important}.button-teal input[type=\"submit\"]{background:#00A3AB !important}.button-black .at-credit-card-button-wrapper .at-btn-radio,.button-black .at-eft-button-wrapper .at-btn-radio{background:#002634 !important}.button-black .prevNext .submitStep,.button-black .prevNext .nextStep{background:#002634 !important}.button-black .take-action{background:#002634 !important}.button-black input[type=\"submit\"]{background:#002634 !important}.button-blue .at-credit-card-button-wrapper .at-btn-radio,.button-blue .at-eft-button-wrapper .at-btn-radio{background:#0072BC !important}.button-blue .prevNext .submitStep,.button-blue .prevNext .nextStep{background:#0072BC !important}.button-blue .take-action{background:#0072BC !important}.button-blue input[type=\"submit\"]{background:#0072BC !important}.button-purple .at-credit-card-button-wrapper .at-btn-radio,.button-purple .at-eft-button-wrapper .at-btn-radio{background:#643695 !important}.button-purple .prevNext .submitStep,.button-purple .prevNext .nextStep{background:#643695 !important}.button-purple .take-action{background:#643695 !important}.button-purple input[type=\"submit\"]{background:#643695 !important}.button-ltgray .at-credit-card-button-wrapper .at-btn-radio,.button-ltgray .at-eft-button-wrapper .at-btn-radio{background:#8D939E !important}.button-ltgray .prevNext .submitStep,.button-ltgray .prevNext .nextStep{background:#8D939E !important}.button-ltgray .take-action{background:#8D939E !important}.button-ltgray input[type=\"submit\"]{background:#8D939E !important}.button-dkgray .at-credit-card-button-wrapper .at-btn-radio,.button-dkgray .at-eft-button-wrapper .at-btn-radio{background:#555F6B !important}.button-dkgray .prevNext .submitStep,.button-dkgray .prevNext .nextStep{background:#555F6B !important}.button-dkgray .take-action{background:#555F6B !important}.button-dkgray input[type=\"submit\"]{background:#555F6B !important}.button-brown .at-credit-card-button-wrapper .at-btn-radio,.button-brown .at-eft-button-wrapper .at-btn-radio{background:#6A3A10 !important}.button-brown .prevNext .submitStep,.button-brown .prevNext .nextStep{background:#6A3A10 !important}.button-brown .take-action{background:#6A3A10 !important}.button-brown input[type=\"submit\"]{background:#6A3A10 !important}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ]);