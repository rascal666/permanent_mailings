/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/consultant.js":
/*!***********************************!*\
  !*** ./src/scripts/consultant.js ***!
  \***********************************/
/***/ (() => {

// Begin Me - Talk
window.MeTalkSetup = {
  domain: "comkc.pulscen.ru"
};

(function (d, w, m) {
  window.supportAPIMethod = m;
  var s = d.createElement("script");
  s.type = "text/javascript";
  s.id = "supportScript";
  s.charset = "utf-8";
  s.async = true;
  var id = "9e71060b780fc267cbbfff6f8dec56ba";
  s.src = "//me-talk.ru/support/support.js?h=" + id;
  var sc = d.getElementsByTagName("script")[0];

  w[m] = w[m] || function () {
    (w[m].q = w[m].q || []).push(arguments);
  };

  if (sc) sc.parentNode.insertBefore(s, sc);else d.documentElement.firstChild.appendChild(s);
})(document, window, "MeTalk"); // End Me - Talk

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (() => {

var dom = document.querySelector('.js-body');
var currentData = new Date();
var month = currentData.getMonth() + 1;
var data = currentData.getDate() + '' + month + '22';
dom.innerHTML = dom.innerHTML.replace(/curData/gi, data);

/***/ }),

/***/ "./src/scripts/reproduction.js":
/*!*************************************!*\
  !*** ./src/scripts/reproduction.js ***!
  \*************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

phone_js = document.querySelectorAll('.phone-js');
var _byRender = "\n\t<p>\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u0432 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438</p>\n\t\t\t\t\t\t\t\t<div class=\"col_cintact_futer\">\n\t\t\t\t\t\t\t\t\t<div class=\"massenger_futer\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t<a class=\"numder_futer fat\" href=\"tel:+375173882537\">+375 17 388 25 37\u200B</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"massenger_futer\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t<a class=\"numder_futer fat\" href=\"tel:+375445189191\">+375 44 518 91 91</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p>\u0418\u043B\u0438 \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440:</p>\n\t\t\t\t\t\t\t\t<div class=\"col_cintact_futer\">\n\t\t\t\t\t\t\t\t\t<div class=\"massenger_futer\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://www.pulscen.ru/system/ckeditor_assets/pictures/288317/content_ikodnka.png\" alt=\"\" />\n\n\t\t\t\t\t\t\t\t\t\t<a class=\"numder_futer fat\" href=\"tel:81080010009191\">8 10 800 1000 91 91</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n";

var Ondata = /*#__PURE__*/function () {
  function Ondata(dom) {
    var _this = this;

    _classCallCheck(this, Ondata);

    this.domContent = document.querySelector('.onheading');
    this.utm = []; // номера телефонов стран

    this.generalNumbers = {
      kz: '8 10 800 1000 91 91',
      free: '8 800 234 43 10',
      pay: '8 800 100 91 91',
      ua: '+380 (89) 120 50 46',
      don: '+380 (89) 120 50 46',
      by: '8 10 800 1000 91 91'
    };
    this.generalNumbersSok = {
      kz: 'tel:81080010009191',
      free: 'tel:88002344310',
      pay: 'tel:88001009191',
      ua: 'tel:380891205046',
      don: 'tel:380891205046',
      by: 'tel:81080010009191'
    }; // подписи к номерам телефонов стран

    this.generalNote = {
      kz: 'Казахстана',
      free: 'РФ',
      pay: 'РФ',
      ua: 'Украины',
      don: 'Донецка и Луганска',
      by: ''
    }; // события для разных стран

    this.generalEvent = {
      kz: '_KZ_',
      free: '_РФ_',
      pay: '_РФ_',
      ua: '_YA_',
      don: '_ДНР&ЛНР_',
      by: '_РБ_'
    }; // настройка id под страны

    this.generalId = {
      kz: '99572059',
      free: '99572059',
      pay: '99560299',
      ua: '99572059',
      don: '99572059',
      by: '99593226'
    }; // аттребуты

    this.dataId = ['data-company', 'data-company-id']; // берем элемент который передали в конструкторе

    var _dom = document.querySelector(dom); // преобразуем поисковой запрос в объект с параметрами для удобства


    if (window.location.search && window.location.search.length > 0) {
      this.utm = window.location.search.slice(1).split('&').map(function (param) {
        return param.split('=');
      });
      var _tempUtm = {};

      for (var index = 0; index < this.utm.length; index++) {
        _tempUtm[this.utm[index][0]] = this.utm[index][1] ? this.utm[index][1] : undefined;
      }

      this.utm = _tempUtm;
      console.log(this.utm);
    } // если элемент найден


    if (_dom) {
      //меняем значение событий
      _dom.innerHTML = _dom.innerHTML.replace(/_РФ_/gi, this.generalEvent[this.utm.utm_rascal]); // если в списке с номерами есть подходящий под параметр номер то

      if (this.generalNumbers[this.utm.utm_rascal]) {
        var _numder = document.querySelectorAll('.phone-js');

        var _by = document.querySelector('.contact__by');

        var _contact__main = document.querySelector('.contact__main');

        var _note = document.querySelector('.phoneNote-js');

        var _item__kz = document.querySelector('.item-kz');

        var _item__by = document.querySelectorAll('.item-by');

        var _item__ua = document.querySelector('.item-ua');

        var _blocks__kz = document.querySelector('.blocks-kz '); // если нашли этот элемент то вставляем в него телефон из списка


        if (_numder) {
          _numder.forEach(function (element) {
            element.innerHTML = _this.generalNumbers[_this.utm.utm_rascal];
            element.setAttribute('href', _this.generalNumbersSok[_this.utm.utm_rascal]);
          }); // подставляем правильный комментарий к номеру


          _note.innerHTML = this.generalNote[this.utm.utm_rascal];
        } // если беларусь то скрываем обычный номер, показываем блок РБ


        if (this.utm.utm_rascal == 'by') {
          _by.innerHTML = _byRender;
          _contact__main.style.display = 'none';

          _item__by.forEach(function (element) {
            element.style.display = 'none';
          });
        }

        if (this.utm.utm_rascal == 'kz') {
          _item__kz.style.display = 'none';
          _blocks__kz.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
        }

        if (this.utm.utm_rascal == 'ua' || this.utm.utm_rascal == 'don') {
          _item__ua.style.display = 'none';
          _blocks__kz.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
        } //меняем значение id аттрибутов у data-company, data-company, data-params


        this.params = document.querySelectorAll('.feedback-js');
        this.dataId.forEach(function (_dataId) {
          //_dataId массив с аттрибутами data-company, data-company,
          _this.params.forEach(function (element) {
            element.setAttribute(_dataId, _this.generalId[_this.utm.utm_rascal]);
            element.setAttribute('data-params', "\"{company_id\":" + _this.generalId[_this.utm.utm_rascal] + "}");
          });
        });
      }
    } else {
      // если не нашли исходный элемент то пишем в консоль ошибку
      console.warn('Не удалось найти искомый элемент', dom);
      return false;
    }

    this.element = document.querySelector('.js-body');
    this.setInnerText();
    this.element = document.querySelector('.js-body'); // =================================================================
  }

  _createClass(Ondata, [{
    key: "setInnerText",
    value: function setInnerText(utm, whyText, text) {
      if (this.utm.utm_rascal == utm) {
        this.element.innerHTML = this.element.innerHTML.replace(whyText, text);
        return this;
      }
    }
  }]);

  return Ondata;
}(); // класс создали


var onData = new Ondata('.js-body'); // console.log(domContent);

var re = '/50% на первые места в каталоге/gi';
var by = 'Хочу +2 месяца'; // пользуешься созданным классом

onData.setInnerText("by", /2 месяца повышенного тарифа/gi, "1 месяц повышенного тарифа");
onData.setInnerText("by", /2 любых месяца на более эффективном тарифе. Максимальное усиление продаж!/gi, "Любой месяц на более эффективном тарифе. Максимальное усиление продаж!");
onData.setInnerText("by", /любой подарок/gi, "бонус");
onData.setInnerText("by", /_Сезон_/gi, "_ПБ_");
onData.setInnerText("by", /2 бонусных месяца на вашем тарифе. Без дополнительных вложений!/gi, "Самые конверсионные места. Ваши товары увидят абсолютно все посетители рубрики!");
onData.setInnerText("by", /2 дополнительных месяца размещения/gi, "до -50% на первые места в каталоге");
onData.setInnerText("by", by, "Хочу быть первым");
onData.setInnerText("ua", /Дополнительный город/gi, "Продвижение в регионы");
onData.setInnerText("ua", /Хочу город/gi, "Хочу продвижение в регионы");
onData.setInnerText("ua", /1 месяц размещения в дополнительном городе. Увеличение заказов и заявок!/gi, "1 месяц размещения в дополнительном регионе по вашему выбору.Увеличение заказов и заявок!");
onData.setInnerText("don", /Дополнительный город/gi, "Продвижение в регионы");
onData.setInnerText("don", /Хочу город/gi, "Хочу продвижение в регионы");
onData.setInnerText("don", /1 месяц размещения в дополнительном городе. Увеличение заказов и заявок!/gi, "1 месяц размещения в дополнительном регионе по вашему выбору.Увеличение заказов и заявок!");

/***/ }),

/***/ "./src/scripts/scroll.js":
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Плавный scroll
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute("href").substring(1);

      if (blockID) {
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        return false;
      }
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _scripts_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/scroll */ "./src/scripts/scroll.js");
/* harmony import */ var _scripts_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_consultant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/consultant */ "./src/scripts/consultant.js");
/* harmony import */ var _scripts_consultant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_consultant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_reproduction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/reproduction */ "./src/scripts/reproduction.js");
/* harmony import */ var _scripts_reproduction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_reproduction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/data */ "./src/scripts/data.js");
/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_data__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map