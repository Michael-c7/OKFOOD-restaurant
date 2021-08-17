/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: #ecf0f1;\n  color: #000;\n  font-family: \"Fira Sans\", sans-serif;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  border: none;\n  background: none;\n}\n\n.search-bar {\n  --size:45px;\n  --font-size:1rem;\n  border: 0px solid #3867d6;\n  display: flex;\n  border-radius: 100vh;\n  height: var(--size);\n  width: var(--size);\n  padding: 5px;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n}\n.search-bar__input {\n  flex-grow: 1;\n  font-size: var(--font-size);\n  padding: 0 0.5rem;\n  border: 0;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  line-height: calc(var(--size) - 3px);\n  opacity: 0;\n  cursor: pointer;\n}\n.search-bar:focus {\n  outline: 0;\n}\n.search-bar__submit {\n  font-size: var(--font-size);\n  cursor: pointer;\n  border: 0;\n  border-radius: 50%;\n  color: #fff;\n  background: #3867d6;\n  width: calc(var(--size) - 10px);\n  height: calc(var(--size) - 10px);\n  margin-left: auto;\n}\n.search-bar:focus-within {\n  width: 200px;\n  background: #fff;\n  color: #000;\n}\n.search-bar:focus-within .search-bar__input {\n  opacity: 1;\n  cursor: text;\n  width: calc(100% - var(--size));\n}\n.search-bar:focus-within .search-bar__input:focus,\n.search-bar:focus-within .search-bar__input:hover {\n  outline: 0;\n}\n\n/*\nmain color\n#3867d6\n\n\nred : #eb3b5a\n*/\n:root {\n  --main-blue:#3867d6;\n  --main-red:#eb3b5a;\n  --mobile-breakpoint-width:800px;\n}\n\n.app {\n  position: relative;\n  background: #efefef;\n  height: 100vh;\n}\n\n/*navbar*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #333;\n  color: #fff;\n  z-index: 100;\n  position: sticky;\n  top: 0;\n  max-width: 2250px;\n  margin: 0 auto;\n}\n\n.brand-title {\n  font-size: 1.5rem;\n  margin: 0.5rem;\n}\n\n.navbar-links ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.navbar-links li a {\n  text-decoration: none;\n  color: #ffff;\n  padding: 1rem;\n  display: block;\n}\n\n.navbar__toggle-btn {\n  position: absolute;\n  top: 1.75rem;\n  left: 1rem;\n  color: #fff;\n  display: none;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30px;\n  height: 21px;\n  cursor: pointer;\n}\n\n.navbar__toggle-btn__bar {\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  border-radius: 10px;\n}\n\n.navbar__info ul {\n  display: flex;\n  align-items: center;\n}\n.navbar__info li {\n  padding: 1rem;\n}\n\n.navbar__item-cart {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  cursor: pointer;\n}\n\n.cart-icon {\n  font-size: 2rem;\n  color: #e6e6e6;\n}\n\n.navbar__item-cart__amt {\n  position: absolute;\n  background: #444;\n  width: 18px;\n  height: 18px;\n  font-size: 0.8rem;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-weight: 600;\n  left: 175%;\n  top: -25%;\n  transform: translate(-175%, 25%);\n}\n\n@media (max-width: 800px) {\n  .navbar__toggle-btn {\n    display: flex;\n  }\n\n  .navbar {\n    flex-direction: column-reverse;\n    align-items: flex-end;\n  }\n\n  .navbar-links {\n    display: flex;\n    width: 100%;\n    transition: max-height 0.4s;\n    overflow: hidden;\n    max-height: 0;\n  }\n  .navbar-links ul {\n    width: 100%;\n    flex-direction: column;\n  }\n  .navbar-links li {\n    text-align: center;\n  }\n}\n.navbar-links--active {\n  max-height: var(--max-height);\n}\n\n/*main content body*/\n.app__body {\n  position: relative;\n  display: grid;\n  grid-template-columns: 150px minmax(400px, 800px);\n  padding: 1.75rem 1rem 0rem 1rem;\n  justify-content: center;\n}\n\n.filter-content {\n  color: #222;\n  position: sticky;\n  top: 5.5rem;\n  height: 500px;\n}\n\n.filter-content__filter {\n  transition: max-height 0.4s;\n  overflow: hidden;\n}\n\n.filter-content__clear-filter {\n  font-size: 1rem;\n}\n\n.filter-content__btn {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.filter-content__btn i {\n  position: relative;\n  top: 3px;\n  margin-right: 0.25rem;\n}\n\n.filter-content__heading {\n  margin-top: 0.75rem;\n  font-weight: 400;\n  font-size: 1.25rem;\n}\n\n.filter-content__form {\n  display: flex;\n  flex-direction: column;\n}\n.filter-content__form > * {\n  margin: 0.25rem 0 0 1rem;\n}\n.filter-content__form > *:first-of-type {\n  margin-top: 0.25rem;\n}\n\n.body__main-content {\n  position: relative;\n}\n\n.body__main-content__inner {\n  position: relative;\n  background: rgba(255, 0, 0, 0.349);\n}\n\n.slider {\n  position: relative;\n  height: 350px;\n}\n\n.slider__btn {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 30%;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  background-color: rgba(61, 61, 61, 0.4);\n  color: #ebebeb;\n  transition: background-color 0.2s ease;\n  z-index: 25;\n}\n\n.slider__btn:hover {\n  background-color: rgba(61, 61, 61, 0.6);\n  cursor: pointer;\n}\n\n.slider__btn:active {\n  background-color: rgba(61, 61, 61, 0.4);\n  cursor: pointer;\n}\n\n.slide__btn-previous {\n  left: 0;\n}\n\n.slide__btn-next {\n  right: 0;\n}\n\n.slider__img {\n  position: absolute;\n  object-position: center center;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n/*shop stuff*/\n.product-content-container {\n  position: relative;\n}\n\n.product-content {\n  position: relative;\n  background-color: #efefef;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.product-content__item {\n  background: #fff;\n  display: grid;\n  padding: 1rem;\n  margin: 1rem;\n}\n\n.product-content__item:nth-of-type(1) {\n  margin-left: 0;\n}\n\n.product-content__item:nth-of-type(2) {\n  margin-right: 0;\n}\n\n.product-content__item__info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 0.5rem;\n}\n.product-content__item__info .item-name {\n  font-weight: 400;\n  text-align: center;\n}\n\n.content__item__img {\n  max-width: 100%;\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  object-fit: cover;\n  object-position: center center;\n}\n\n.product-content__item__info {\n  margin: 0.75rem 0;\n}\n\n.product-content__description {\n  text-align: center;\n}\n\n.item__add-to-cart {\n  position: relative;\n  background: var(--main-blue);\n  color: #fff;\n  font-size: 1rem;\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  width: 80%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 3px;\n  transition: opacity 0.1s ease;\n}\n\n.item__add-to-cart:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n\n.item__add-to-cart:active {\n  opacity: 1;\n  cursor: pointer;\n}\n\n@media (max-width: 800px) {\n  .app__body {\n    grid-template-columns: 1fr;\n  }\n\n  .filter-content {\n    display: none;\n  }\n\n  .product-content {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .body__main-content__inner {\n    position: relative;\n  }\n}\n/*cart*/\n.cart-container {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(68, 68, 68, 0.5);\n  top: 0;\n  left: 0;\n  display: none;\n  z-index: -999;\n}\n\n.cart {\n  position: absolute;\n  width: 500px;\n  height: 600px;\n  background: #fff;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: none;\n  grid-template-rows: 4rem 1fr 4rem;\n  border-radius: 7px;\n  z-index: -999;\n}\n.cart img {\n  max-width: 75px;\n}\n\n.cart__header {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n}\n.cart__header .close-cart-btn {\n  position: absolute;\n  background: #fff;\n  filter: drop-shadow(0px 2px 2px rgba(17, 17, 17, 0.25));\n  color: var(--main-red);\n  font-size: 1.5rem;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: -15%;\n  left: 95%;\n  cursor: pointer;\n}\n.cart__header h2 {\n  font-weight: 400;\n}\n.cart__header .total-price {\n  font-size: 1.75rem;\n  font-weight: bold;\n}\n\n.cart__contents {\n  background-color: #efefef;\n  position: relative;\n  height: inherit;\n  overflow: auto;\n}\n.cart__contents .delete-cart-item-btn {\n  position: absolute;\n  background: #fff;\n  filter: drop-shadow(0px 2px 2px rgba(17, 17, 17, 0.25));\n  color: var(--main-red);\n  font-size: 1.5rem;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: -10%;\n  left: 95%;\n}\n.cart__contents .delete-cart-item-btn:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n.cart__contents ul {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background: #efefef;\n  padding: 1rem;\n  height: 100%;\n}\n.cart__contents li {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  width: 100%;\n  margin: 0.5rem 0;\n  border-radius: 3px;\n  padding: 1rem;\n}\n.cart__contents li img {\n  width: 75px;\n  height: 75px;\n  margin-right: 1rem;\n}\n.cart__contents li .cart-item__info {\n  margin: 0 1rem;\n}\n.cart__contents li .amount-container {\n  position: relative;\n  display: flex;\n  font-size: 2rem;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: 1rem;\n}\n.cart__contents li .amount-container .cart-amt-btn {\n  font-size: 2rem;\n  color: #ddd;\n  transition: filter 0.2s ease;\n}\n.cart__contents li .amount-container .cart-amt-btn:hover {\n  filter: brightness(0.85);\n  cursor: pointer;\n}\n.cart__contents li .amount-container .cart-amt-btn:active {\n  filter: brightness(1);\n  cursor: pointer;\n}\n.cart__contents li .amount-container .amount-container__amt {\n  margin: 0 0.5rem;\n}\n.cart__contents .cart-amt-btn__decrease {\n  position: relative;\n  top: 1px;\n}\n\n.cart__add-to-cart-btn {\n  position: relative;\n  background-color: var(--main-blue);\n  color: #fff;\n  width: 100%;\n  display: block;\n  padding: 0.75rem;\n  font-size: 1.5rem;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  transition: filter 75ms ease;\n}\n\n.cart__add-to-cart-btn:hover {\n  filter: saturate(1.25);\n  cursor: pointer;\n}\n\n.cart__add-to-cart-btn:active {\n  filter: saturate(1);\n  cursor: pointer;\n}\n\n/*apply .cart--open to the body*/\n.cart--open {\n  overflow: hidden;\n}\n\n.cart-container--active {\n  display: block;\n  z-index: 150;\n}\n\n.cart--active {\n  display: grid;\n  z-index: 200;\n}", "",{"version":3,"sources":["webpack://./src/style_modules/base.scss","webpack://./src/style.scss","webpack://./src/style_modules/search-bar.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;EACA,UAAA;EACA,SAAA;ACEF;;ADCA;EACE,yBAAA;EACA,WAAA;EACA,oCAAA;ACEF;;ADCA;EACE,cAAA;EACA,qBAAA;ACEF;;ADCA;EACI,qBAAA;ACEJ;;ADCA;EACI,YAAA;EACA,gBAAA;ACEJ;;ACzBA;EACI,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,aAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,gCAAA;EACA,gBAAA;AD4BJ;ACzBI;EACE,YAAA;EACA,2BAAA;EACA,iBAAA;EACA,SAAA;EACA,uBAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,oCAAA;EACA,UAAA;EACA,eAAA;AD2BN;ACxBI;EACE,UAAA;AD0BN;ACvBI;EACE,2BAAA;EACA,eAAA;EACA,SAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAzCM;EA0CN,+BAAA;EACA,gCAAA;EACA,iBAAA;ADyBN;ACtBI;EACE,YAAA;EACA,gBAAA;EACA,WAAA;ADwBN;ACtBM;EACE,UAAA;EACA,YAAA;EACA,+BAAA;ADwBR;ACrBM;;EAEE,UAAA;ADuBR;;AAzEA;;;;;;CAAA;AAOA;EACI,mBAAA;EACA,kBAAA;EACA,+BAAA;AA4EJ;;AAxEA;EACI,kBAAA;EACA,mBAAA;EACA,aAAA;AA2EJ;;AApEA,SAAA;AACA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EAEA,gBAAA;EACA,MAAA;EACA,iBAAA;EACA,cAAA;AAsEJ;;AAnEA;EACI,iBAAA;EACA,cAAA;AAsEJ;;AAnEA;EACI,SAAA;EACA,UAAA;EACA,aAAA;AAsEJ;;AAnEA;EACI,qBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;AAsEJ;;AAnEA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAsEJ;;AAnEA;EACI,WAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;AAsEJ;;AAlEI;EACK,aAAA;EACA,mBAAA;AAqET;AAlEI;EACI,aAAA;AAoER;;AAhEA;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;AAmEJ;;AAhEA;EACI,eAAA;EACA,cAAA;AAmEJ;;AAhEA;EACI,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;EACA,gCAAA;AAkEJ;;AA/DA;EACI;IACI,aAAA;EAkEN;;EA/DE;IACI,8BAAA;IACA,qBAAA;EAkEN;;EA/DE;IACI,aAAA;IACA,WAAA;IACA,2BAAA;IACA,gBAAA;IACA,aAAA;EAkEN;EAhEM;IACI,WAAA;IACA,sBAAA;EAkEV;EA/DM;IACI,kBAAA;EAiEV;AACF;AA7DA;EACI,6BAAA;AA+DJ;;AAxDA,oBAAA;AACA;EACI,kBAAA;EACA,aAAA;EACA,iDAAA;EACA,+BAAA;EACA,uBAAA;AA2DJ;;AAxDA;EACI,WAAA;EACA,gBAAA;EACA,WAAA;EACA,aAAA;AA2DJ;;AAvDA;EACI,2BAAA;EACA,gBAAA;AA0DJ;;AAlDA;EACI,eAAA;AAqDJ;;AAlDA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;AAqDJ;AAnDI;EACI,kBAAA;EACA,QAAA;EACA,qBAAA;AAqDR;;AAjDA;EACI,mBAAA;EACA,gBAAA;EACA,kBAAA;AAoDJ;;AAjDA;EACI,aAAA;EACA,sBAAA;AAoDJ;AAlDI;EACI,wBAAA;AAoDR;AAjDI;EACI,mBAAA;AAmDR;;AA5CA;EACI,kBAAA;AA+CJ;;AA5CA;EACI,kBAAA;EAGA,kCAAA;AA6CJ;;AAxCA;EACI,kBAAA;EACA,aAAA;AA2CJ;;AArCA;EACI,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;EACA,uCAAA;EACA,cAAA;EACA,sCAAA;EACA,WAAA;AAwCJ;;AArCA;EACI,uCAAA;EACA,eAAA;AAwCJ;;AArCA;EACI,uCAAA;EACA,eAAA;AAwCJ;;AArCA;EACI,OAAA;AAwCJ;;AArCA;EACI,QAAA;AAwCJ;;AArCA;EACI,kBAAA;EACA,8BAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;AAwCJ;;AA7BA,aAAA;AACA;EACI,kBAAA;AAgCJ;;AA7BA;EACI,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,qCAAA;AAgCJ;;AA7BA;EACI,gBAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;AAgCJ;;AA7BA;EACI,cAAA;AAgCJ;;AA7BA;EACI,eAAA;AAgCJ;;AA7BA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;AAgCJ;AA9BI;EACI,gBAAA;EACA,kBAAA;AAgCR;;AA5BA;EACI,eAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,8BAAA;AA+BJ;;AA5BA;EACI,iBAAA;AA+BJ;;AA5BA;EACI,kBAAA;AA+BJ;;AA5BA;EACI,kBAAA;EACA,4BAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,oBAAA;EACA,UAAA;EACA,SAAA;EACA,2BAAA;EACA,kBAAA;EACA,6BAAA;AA+BJ;;AA5BA;EACI,YAAA;EACA,eAAA;AA+BJ;;AA5BA;EACI,UAAA;EACA,eAAA;AA+BJ;;AAvBA;EACI;IACI,0BAAA;EA0BN;;EAvBE;IACI,aAAA;EA0BN;;EAvBE;IACI,qCAAA;EA0BN;;EAvBE;IACI,kBAAA;EA0BN;AACF;AAjBA,OAAA;AACA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,iCAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EACA,aAAA;AAmBJ;;AAdA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,iCAAA;EACA,kBAAA;EACA,aAAA;AAiBJ;AAfI;EACI,eAAA;AAiBR;;AAbA;EACI,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;AAgBJ;AAdI;EACI,kBAAA;EACA,gBAAA;EACA,uDAAA;EACA,sBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,SAAA;EACA,eAAA;AAgBR;AAbI;EACI,gBAAA;AAeR;AAZI;EACI,kBAAA;EACA,iBAAA;AAcR;;AATA;EACI,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;AAYJ;AAVI;EACI,kBAAA;EACA,gBAAA;EACA,uDAAA;EACA,sBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,SAAA;AAYR;AATI;EACI,YAAA;EACA,eAAA;AAWR;AAPI;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;AASR;AANI;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AAQR;AANQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAQZ;AALQ;EACI,cAAA;AAOZ;AAHQ;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AAKZ;AAHY;EACI,eAAA;EACA,WAAA;EACA,4BAAA;AAKhB;AAFY;EACI,wBAAA;EACA,eAAA;AAIhB;AAFY;EACI,qBAAA;EACA,eAAA;AAIhB;AADY;EACI,gBAAA;AAGhB;AAGI;EACI,kBAAA;EACA,QAAA;AADR;;AAQA;EACI,kBAAA;EACA,kCAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,8BAAA;EACA,+BAAA;EACA,4BAAA;AALJ;;AAQA;EACI,sBAAA;EACA,eAAA;AALJ;;AAQA;EACI,mBAAA;EACA,eAAA;AALJ;;AAUA,gCAAA;AACA;EACI,gBAAA;AAPJ;;AAUA;EACI,cAAA;EACA,YAAA;AAPJ;;AAUA;EACI,aAAA;EACA,YAAA;AAPJ","sourcesContent":["*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  padding:0;\r\n  margin:0;\r\n}\r\n\r\nbody {\r\n  background-color:#ecf0f1;\r\n  color:#000;\r\n  font-family: 'Fira Sans', sans-serif;\r\n}\r\n\r\na {\r\n  color:inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n  }\r\n\r\nbutton {\r\n    border:none;\r\n    background: none;\r\n  }\r\n\r\nimg {\r\n  //  max-width:20%;\r\n}","// sass modules\r\n@use \"./style_modules/base\";\r\n@use \"./style_modules/search-bar\";\r\n\r\n\r\n// font\r\n@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&display=swap');\r\n\r\n\r\n\r\n/*\r\nmain color\r\n#3867d6\r\n\r\n\r\nred : #eb3b5a\r\n*/\r\n:root {\r\n    --main-blue:#3867d6;\r\n    --main-red:#eb3b5a;\r\n    --mobile-breakpoint-width:800px;\r\n}\r\n\r\n\r\n.app {\r\n    position: relative;\r\n    background:#efefef;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*navbar*/\r\n.navbar {\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items:center;\r\n    background:#333;\r\n    color:#fff;\r\n    z-index:100;\r\n\r\n    position:sticky;\r\n    top:0;\r\n    max-width:2250px;\r\n    margin:0 auto;\r\n}\r\n\r\n.brand-title {\r\n    font-size:1.5rem;\r\n    margin:0.5rem;\r\n}\r\n\r\n.navbar-links ul {\r\n    margin:0;\r\n    padding:0;\r\n    display: flex;\r\n}\r\n\r\n.navbar-links li a {\r\n    text-decoration: none;\r\n    color:#ffff;\r\n    padding:1rem;\r\n    display: block;\r\n}\r\n\r\n.navbar__toggle-btn {\r\n    position: absolute;\r\n    top:1.75rem;\r\n    left:1rem;\r\n    color:#fff;\r\n    display:none;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width:30px;\r\n    height:21px;\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar__toggle-btn__bar {\r\n    width:100%;\r\n    height: 3px;\r\n    background:#fff;\r\n    border-radius: 10px;\r\n}\r\n\r\n.navbar__info {\r\n    ul {\r\n         display:flex;\r\n         align-items: center;\r\n    }\r\n\r\n    li {\r\n        padding:1rem;\r\n     }\r\n}\r\n\r\n.navbar__item-cart {\r\n    position: relative;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items:center;\r\n    color:#fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-icon {\r\n    font-size:2rem;\r\n    color:rgb(230, 230, 230);\r\n}\r\n\r\n.navbar__item-cart__amt {\r\n    position: absolute;\r\n    background:#444;\r\n    width:18px;\r\n    height:18px;\r\n    font-size:0.8rem;\r\n    border-radius: 50%;\r\n\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items:center;\r\n    color:#fff;\r\n    font-weight: 600;\r\n    left:175%;\r\n    top:-25%;\r\n    transform: translate(-175%, 25%);\r\n}\r\n\r\n@media (max-width:800px) {\r\n    .navbar__toggle-btn {\r\n        display:flex;\r\n    }\r\n\r\n    .navbar {\r\n        flex-direction: column-reverse;\r\n        align-items:flex-end;\r\n    }\r\n\r\n    .navbar-links  {\r\n        display:flex;\r\n        width:100%;\r\n        transition: max-height 0.4s;\r\n        overflow: hidden;\r\n        max-height: 0;\r\n\r\n        ul {\r\n            width:100%;\r\n            flex-direction: column;\r\n        }\r\n\r\n        li {\r\n            text-align:center;\r\n        }\r\n    }\r\n}\r\n\r\n.navbar-links--active {\r\n    max-height: var(--max-height);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*main content body*/\r\n.app__body {\r\n    position: relative;\r\n    display:grid;\r\n    grid-template-columns: 150px minmax(400px, 800px);\r\n    padding:1.75rem 1rem 0rem 1rem;\r\n    justify-content: center;\r\n}\r\n\r\n.filter-content {\r\n    color:#222;\r\n    position: sticky;\r\n    top:5.5rem;\r\n    height:500px;\r\n    // background:rgba(0, 0, 255, 0.137);\r\n}\r\n\r\n.filter-content__filter {\r\n    transition: max-height 0.4s;\r\n    overflow: hidden;\r\n    // max-height: 0;\r\n}\r\n\r\n.filter-content__filter--active {\r\n    // max-height: var(--max-height);\r\n}\r\n\r\n.filter-content__clear-filter {\r\n    font-size:1rem;\r\n}\r\n\r\n.filter-content__btn {\r\n    position: relative;\r\n    display:flex;\r\n    align-items:center;\r\n\r\n    i {\r\n        position: relative;\r\n        top:3px;\r\n        margin-right:0.25rem;\r\n    }\r\n}\r\n\r\n.filter-content__heading {\r\n    margin-top:0.75rem;\r\n    font-weight: 400;\r\n    font-size:1.25rem;\r\n}\r\n\r\n.filter-content__form {\r\n    display:flex;\r\n    flex-direction: column;\r\n\r\n    > * {\r\n        margin:0.25rem 0 0 1rem;\r\n    }\r\n\r\n    > *:first-of-type {\r\n        margin-top:0.25rem;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n.body__main-content {\r\n    position: relative;\r\n}\r\n\r\n.body__main-content__inner {\r\n    position: relative;\r\n    // display:grid;\r\n    // grid-template-rows: 1fr fr;\r\n    background:rgba(255, 0, 0, 0.349);\r\n}\r\n\r\n\r\n\r\n.slider {\r\n    position: relative;\r\n    height:350px;\r\n    // background:rgba(255, 0, 0, 0.349);\r\n    // overflow:hidden;\r\n}\r\n\r\n\r\n.slider__btn {\r\n    position: absolute;\r\n    top:50%;\r\n    transform:translateY(-50%);\r\n    height:30%;\r\n    padding:0.5rem;\r\n    font-size: 1.5rem;\r\n    background-color:rgba(61, 61, 61, 0.4);\r\n    color:rgb(235, 235, 235);\r\n    transition: background-color 0.2s ease;\r\n    z-index:25;\r\n}\r\n\r\n.slider__btn:hover {\r\n    background-color:rgba(61, 61, 61, 0.6);\r\n    cursor: pointer;\r\n}\r\n\r\n.slider__btn:active {\r\n    background-color:rgba(61, 61, 61, 0.4);\r\n    cursor: pointer;\r\n}\r\n\r\n.slide__btn-previous {\r\n    left:0;\r\n}\r\n\r\n.slide__btn-next {\r\n    right:0;\r\n}\r\n\r\n.slider__img {\r\n    position: absolute;\r\n    object-position: center center;\r\n    object-fit: cover;\r\n    width:100%;\r\n    height:100%;\r\n    display:block;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*shop stuff*/\r\n.product-content-container {\r\n    position: relative;\r\n}\r\n\r\n.product-content {\r\n    position: relative;\r\n    background-color:#efefef;\r\n    display:grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.product-content__item {\r\n    background:#fff;\r\n    display:grid;\r\n    padding:1rem;\r\n    margin:1rem;\r\n}\r\n\r\n.product-content__item:nth-of-type(1) {\r\n    margin-left:0;\r\n}\r\n\r\n.product-content__item:nth-of-type(2) {\r\n    margin-right:0;\r\n}\r\n\r\n.product-content__item__info {\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding:0 0.5rem;\r\n\r\n    .item-name {\r\n        font-weight: 400;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.content__item__img {\r\n    max-width:100%;\r\n    width:200px;\r\n    height:200px;\r\n    margin:0 auto;\r\n    object-fit: cover;\r\n    object-position: center center;\r\n}\r\n\r\n.product-content__item__info {\r\n    margin:0.75rem 0;\r\n}\r\n\r\n.product-content__description {\r\n    text-align: center;\r\n}\r\n\r\n.item__add-to-cart {\r\n    position: relative;\r\n    background:var(--main-blue);\r\n    color:#fff;\r\n    font-size: 1rem;\r\n    margin:1rem 0;\r\n    padding:0.5rem 1rem;\r\n    width:80%;\r\n    left:50%;\r\n    transform:translateX(-50%);\r\n    border-radius: 3px;\r\n    transition: opacity 0.1s ease;\r\n}\r\n\r\n.item__add-to-cart:hover {\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n}\r\n\r\n.item__add-to-cart:active {\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n// mobile body\r\n@media(max-width:800px) {\r\n    .app__body {\r\n        grid-template-columns:1fr;\r\n    }\r\n\r\n    .filter-content {\r\n        display:none;\r\n    }\r\n\r\n    .product-content {\r\n        grid-template-columns: repeat(1, 1fr);\r\n    }\r\n\r\n    .body__main-content__inner {\r\n        position: relative;\r\n        // display:grid;\r\n        // grid-template-rows: 1fr 150fr;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*cart*/\r\n.cart-container {\r\n    position: absolute;\r\n    width:100vw;\r\n    height:100vh;\r\n    background:rgba(68, 68, 68, 0.5);\r\n    top:0;\r\n    left:0;\r\n    display:none;\r\n    z-index:-999;\r\n}\r\n\r\n\r\n\r\n.cart {\r\n    position: absolute;\r\n    width:500px;\r\n    height:600px;\r\n    background:#fff;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%);\r\n    display:none;\r\n    grid-template-rows: 4rem 1fr 4rem;\r\n    border-radius: 7px;\r\n    z-index:-999;\r\n\r\n    img {\r\n        max-width:75px;\r\n    }\r\n}\r\n\r\n.cart__header {\r\n    position: relative;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items:center;\r\n    padding:0.5rem 1rem;\r\n\r\n    .close-cart-btn {\r\n        position: absolute;\r\n        background:#fff;\r\n        filter:drop-shadow(0px 2px 2px rgba(17, 17, 17, 0.25));\r\n        color:var(--main-red);\r\n        font-size:1.5rem;\r\n        width:30px;\r\n        height:30px;\r\n        border-radius: 100%;\r\n        display:flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        top:-15%;\r\n        left:95%;\r\n        cursor: pointer;\r\n    }\r\n\r\n    h2 {\r\n        font-weight: 400;\r\n    }\r\n\r\n    .total-price {\r\n        font-size:1.75rem;\r\n        font-weight: bold;\r\n    }\r\n}\r\n\r\n\r\n.cart__contents {\r\n    background-color:#efefef;\r\n    position: relative;\r\n    height:inherit;\r\n    overflow:auto;\r\n\r\n    .delete-cart-item-btn {\r\n        position: absolute;\r\n        background:#fff;\r\n        filter:drop-shadow(0px 2px 2px rgba(17, 17, 17, 0.25));\r\n        color:var(--main-red);\r\n        font-size:1.5rem;\r\n        width:30px;\r\n        height:30px;\r\n        border-radius: 100%;\r\n        display:flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        top:-10%;\r\n        left:95%;\r\n    }\r\n\r\n    .delete-cart-item-btn:hover {\r\n        opacity:0.9;\r\n        cursor: pointer;\r\n    }\r\n// overflow scroll w/ the ul in  the cart\r\n\r\n    ul {\r\n        position: relative;\r\n        display:flex;\r\n        align-items: center;\r\n        flex-direction: column;\r\n        background:#efefef;\r\n        padding:1rem;\r\n        height:100%;\r\n    }\r\n\r\n    li {\r\n        position: relative;\r\n        display:flex;\r\n        align-items: center;\r\n        background:#fff;\r\n        width:100%;\r\n        margin:0.5rem 0;\r\n        border-radius: 3px;\r\n        padding:1rem;\r\n\r\n        img {\r\n            width:75px;\r\n            height:75px;\r\n            margin-right: 1rem;\r\n        }\r\n\r\n        .cart-item__info {\r\n            margin:0 1rem;\r\n            // display:flex;\r\n        }\r\n\r\n        .amount-container {\r\n            position: relative;\r\n            display: flex;\r\n            font-size: 2rem;\r\n            justify-content: center;\r\n            align-items: center;\r\n            margin-left:auto;\r\n            margin-right:1rem;\r\n\r\n            .cart-amt-btn {\r\n                font-size:2rem;\r\n                color:#ddd;\r\n                transition: filter 0.2s ease;\r\n            }\r\n\r\n            .cart-amt-btn:hover {\r\n                filter:brightness(0.85);\r\n                cursor: pointer;\r\n            }\r\n            .cart-amt-btn:active {\r\n                filter:brightness(1);\r\n                cursor: pointer;\r\n            }\r\n\r\n            .amount-container__amt {\r\n                margin:0 0.5rem;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    .cart-amt-btn__decrease {\r\n        position: relative;\r\n        top:1px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n.cart__add-to-cart-btn {\r\n    position: relative;\r\n    background-color:var(--main-blue);\r\n    color:#fff;\r\n    width:100%;\r\n    display:block;\r\n    padding:0.75rem;\r\n    font-size:1.5rem;\r\n    border-bottom-left-radius: 7px;\r\n    border-bottom-right-radius: 7px;\r\n    transition:filter 75ms ease;\r\n}\r\n\r\n.cart__add-to-cart-btn:hover {\r\n    filter:saturate(1.25);\r\n    cursor: pointer;\r\n}\r\n\r\n.cart__add-to-cart-btn:active {\r\n    filter:saturate(1);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n// cart active classes\r\n/*apply .cart--open to the body*/\r\n.cart--open {\r\n    overflow:hidden;\r\n}\r\n\r\n.cart-container--active {\r\n    display:block;\r\n    z-index:150;\r\n}\r\n\r\n.cart--active {\r\n    display:grid;\r\n    z-index:200;\r\n}","$main-color:#3867d6;\r\n\r\n.search-bar {\r\n    --size:45px;\r\n    --font-size:1rem;\r\n    border:0px solid $main-color;\r\n    display:flex;\r\n    border-radius: 100vh;\r\n    height:var(--size);\r\n    width:var(--size);\r\n    padding:5px;\r\n    position: relative;\r\n    transition: all 0.3s ease-in-out;\r\n    overflow: hidden;\r\n  \r\n  \r\n    &__input {\r\n      flex-grow: 1;\r\n      font-size:var(--font-size);\r\n      padding:0 0.5rem;\r\n      border:0;\r\n      background: transparent;\r\n      position: absolute;\r\n      top:0;\r\n      bottom:0;\r\n      left:0;\r\n      line-height: calc(var(--size) - 3px);\r\n      opacity: 0;\r\n      cursor: pointer;\r\n    }\r\n  \r\n    &:focus {\r\n      outline: 0;\r\n    }\r\n  \r\n    &__submit {\r\n      font-size:var(--font-size);\r\n      cursor: pointer;\r\n      border:0;\r\n      border-radius: 50%;\r\n      color:#fff;\r\n      background:$main-color;\r\n      width:calc(var(--size) - 10px);\r\n      height:calc(var(--size) - 10px);\r\n      margin-left:auto;\r\n    }\r\n  \r\n    &:focus-within {\r\n      width:200px;\r\n      background: #fff;\r\n      color:#000;\r\n  \r\n      .search-bar__input {\r\n        opacity: 1;\r\n        cursor: text;\r\n        width:calc(100% - var(--size));\r\n      }\r\n  \r\n      .search-bar__input:focus,\r\n      .search-bar__input:hover {\r\n        outline: 0;\r\n      }\r\n  \r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
    var nonce =  true ? __webpack_require__.nc : 0;

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

  if (sourceMap && typeof btoa !== 'undefined') {
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

/***/ "./src/images/slider-img-electronics-0.jpg":
/*!*************************************************!*\
  !*** ./src/images/slider-img-electronics-0.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc460ba0ea41be0a695e.jpg";

/***/ }),

/***/ "./src/images/slider-img-mensClothes-2.jpg":
/*!*************************************************!*\
  !*** ./src/images/slider-img-mensClothes-2.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "770a0bfc1db87177edee.jpg";

/***/ }),

/***/ "./src/js_modules/filterItems.js":
/*!***************************************!*\
  !*** ./src/js_modules/filterItems.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterItem": () => (/* binding */ filterItem)
/* harmony export */ });
const getCategories = async _ => {
    let endPoint = "https://fakestoreapi.com/products/categories";

    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}


const filterItem = _ => {
    // console.log("filter item here");
}


/***/ }),

/***/ "./src/js_modules/imageSlider.js":
/*!***************************************!*\
  !*** ./src/js_modules/imageSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeSliderImg": () => (/* binding */ changeSliderImg)
/* harmony export */ });
/* harmony import */ var _images_slider_img_mensClothes_2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/slider-img-mensClothes-2.jpg */ "./src/images/slider-img-mensClothes-2.jpg");
const sliderEl = document.querySelector(".slider");
const sliderImagesEl = document.querySelector(".slider__images");
const sliderImg = document.querySelector(".slider__img");
const previousBtn = document.querySelector(".slide__btn-previous");
const nextBtn = document.querySelector(".slide__btn-next");




let i = 0; // index of the current image
let time = 6000; // time to change each slide
// Image List
// let images = [
//     "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500",
//     "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     ];
let images = [_images_slider_img_mensClothes_2_jpg__WEBPACK_IMPORTED_MODULE_0__];

// images[0] = myImage;
// images[1] = "../images/slider-img-jewelery-1.jpg";


const changeSliderImg = _ => {
    // Change Image
    const changeImg = _ => {
        sliderImg.src = images[i];
        if(i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout(changeImg, time);
    }


    previousBtn.addEventListener("click", event => {
        let btn = event.target.closest("button");
        i--;
        console.log(btn)
    })

    window.onload = changeImg;

    console.log("heelo world")
}


/***/ }),

/***/ "./src/js_modules/productItems.js":
/*!****************************************!*\
  !*** ./src/js_modules/productItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productItem": () => (/* binding */ productItem)
/* harmony export */ });
const productContentEl = document.querySelector(".product-content");

const productItem = async _ => {
    render()
    console.log('the product items module');
}


const productItemData = async _ => {
    let endPoint = "https://fakestoreapi.com/products";

    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        return data;
    }catch(err) {
        console.log(err);
    }
}



const productItemDataRender = async _ => {
    const productData = await productItemData();
    let productDataFilter = productData.filter(product => {
        const { title } = product;
        // case sensitive
        if(title.toLowerCase().split(" ").includes("mens")) {
            // console.log(title)
        }
    });

    let myMarkup = "";

    productData.forEach((item, index) => {
        const { category, description, image, price, title } = item;
        // max characters 155 or max words 20
        let amtOfLettersToKeep = 155;
        let shortenedDescription = description.substring(0, amtOfLettersToKeep).replace(/\s*$/,"") + "...";

        let markup = `
        <li class="product-content__item" data-category="${category}">
            <img class="content__item__img" src="${image}" alt="item image">
            <div class="product-content__item__info">
                <h2 class="item-name">${title}</h2>
                <h3 class="item-price">$${price}</h3>
            </div>
            <p class="product-content__description">
                ${shortenedDescription}
            </p>
            <button class="item__add-to-cart">Add to Cart</button>
        </li>
        `
        myMarkup += markup;
    });
    productContentEl.innerHTML = myMarkup;
}


const render = _ => {
    productItemDataRender()
}


/*
<li class="product-content__item">
    <img class="content__item__img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="item image">
    <div class="product-content__item__info">
        <h2 class="item-name">Blue bag</h2>
        <h3 class="item-price">$222</h3>
    </div>
    <p class="product-content__description">
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Obcaecati voluptas odit iste laboriosam.
        aboriosam rem asperiores minima laudantium dolore ipsum.
    </p>
    <button class="item__add-to-cart">Add to Cart</button>
</li>
*/

/***/ }),

/***/ "./src/js_modules/search.js":
/*!**********************************!*\
  !*** ./src/js_modules/search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchProducts": () => (/* binding */ searchProducts)
/* harmony export */ });
/* harmony import */ var _productItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productItems */ "./src/js_modules/productItems.js");
/* harmony import */ var _filterItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterItems */ "./src/js_modules/filterItems.js");
/* harmony import */ var _imageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageSlider */ "./src/js_modules/imageSlider.js");




const searchBarEl = document.querySelector(".search-bar");
const searchBarBtnEl = document.querySelector(".search-bar__submit");
const searchBarInputEl = document.querySelector(".search-bar__input");

let userInput = "";

const searchProducts = _ => {
    console.log("the search module");
    (0,_productItems__WEBPACK_IMPORTED_MODULE_0__.productItem)()
    // filterItem()

    ;(0,_imageSlider__WEBPACK_IMPORTED_MODULE_2__.changeSliderImg)()
}





const getUserInput = _ => {
    searchBarBtnEl.addEventListener("click", event => {
        event.preventDefault();
        if(searchBarInputEl === "") return;
        userInput = searchBarInputEl.value.toLowerCase();
        console.log(userInput)
    });
}

getUserInput()



/*have to search / filter locally
1. get the data into an array
2. When some search for something eg: t-shirt
    1. filter through the title of each for the search term
    2. return the result
    3. display the result to the DOM
*/

/***/ }),

/***/ "./src/js_modules/toggleMobileNav.js":
/*!*******************************************!*\
  !*** ./src/js_modules/toggleMobileNav.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleMobileNavMenu": () => (/* binding */ toggleMobileNavMenu)
/* harmony export */ });
const navbarToggleBtnEl = document.querySelector(".navbar__toggle-btn");
const navbarLinks = document.querySelector(".navbar-links");
let height = navbarLinks.scrollHeight;

/*allows it to transition from 0 to auto smoothly*/
navbarLinks.style.setProperty('--max-height', height + 'px');

const toggleMobileNavMenu = _ => {
    navbarLinks.classList.toggle("navbar-links--active");
}

navbarToggleBtnEl.addEventListener("click", toggleMobileNavMenu);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _images_slider_img_electronics_0_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/slider-img-electronics-0.jpg */ "./src/images/slider-img-electronics-0.jpg");
/* harmony import */ var _js_modules_toggleMobileNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_modules/toggleMobileNav */ "./src/js_modules/toggleMobileNav.js");
/* harmony import */ var _js_modules_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_modules/search */ "./src/js_modules/search.js");





/*
w/ webpack have to add image w/ js | or css
EG
import Icon from './icon.png';
---
https://webpack.js.org/guides/asset-management/#loading-images
*/

/*
https://fakestoreapi.com/

https://apilist.fun/category/ecommerce
*/

const render = _ => {
    // productItem()
    (0,_js_modules_search__WEBPACK_IMPORTED_MODULE_3__.searchProducts)()
}

render()



let test = async _ => {
    let endPoint = "https://fakestoreapi.com/products/categories";

    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        console.log(data)
    }catch(err) {
        console.log(err);
    }

}

// test()





// img slider
let imgSliderEl = document.querySelector(".slider__img");
// imgSliderEl.style.src = sliderImg0;



// toggle filter open
// const navbarToggleBtnEl = document.querySelector(".navbar__toggle-btn");



/*TODO LIST
1. add the data from the fake store api
- https://fakestoreapi.com/docs

2. get search functionality working

3. create a working slidershow
    - auto / timed scroll
    - can scroll(based of index) / fade scroll

4. add to cart

5. cart functionality

6. filter products functionality
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL3NyYy9qc19tb2R1bGVzL2ZpbHRlckl0ZW1zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vLi9zcmMvanNfbW9kdWxlcy9pbWFnZVNsaWRlci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vLy4vc3JjL2pzX21vZHVsZXMvcHJvZHVjdEl0ZW1zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vLi9zcmMvanNfbW9kdWxlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL3NyYy9qc19tb2R1bGVzL3RvZ2dsZU1vYmlsZU5hdi5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysa0hBQWtILElBQUksa0JBQWtCO0FBQ3hJO0FBQ0Esa0VBQWtFLDJCQUEyQixlQUFlLGNBQWMsR0FBRyxVQUFVLDhCQUE4QixnQkFBZ0IsMkNBQTJDLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsUUFBUSwwQkFBMEIsR0FBRyxZQUFZLGlCQUFpQixxQkFBcUIsR0FBRyxpQkFBaUIsZ0JBQWdCLHFCQUFxQiw4QkFBOEIsa0JBQWtCLHlCQUF5Qix3QkFBd0IsdUJBQXVCLGlCQUFpQix1QkFBdUIscUNBQXFDLHFCQUFxQixHQUFHLHNCQUFzQixpQkFBaUIsZ0NBQWdDLHNCQUFzQixjQUFjLDRCQUE0Qix1QkFBdUIsV0FBVyxjQUFjLFlBQVkseUNBQXlDLGVBQWUsb0JBQW9CLEdBQUcscUJBQXFCLGVBQWUsR0FBRyx1QkFBdUIsZ0NBQWdDLG9CQUFvQixjQUFjLHVCQUF1QixnQkFBZ0Isd0JBQXdCLG9DQUFvQyxxQ0FBcUMsc0JBQXNCLEdBQUcsNEJBQTRCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLEdBQUcsK0NBQStDLGVBQWUsaUJBQWlCLG9DQUFvQyxH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LFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLFdBQVcsS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFX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LyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIC0tc2l6ZTo0NXB4O1xcbiAgLS1mb250LXNpemU6MXJlbTtcXG4gIGJvcmRlcjogMHB4IHNvbGlkICMzODY3ZDY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2VhcmNoLWJhcl9faW5wdXQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1zaXplKSAtIDNweCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VhcmNoLWJhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uc2VhcmNoLWJhcl9fc3VibWl0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzM4NjdkNjtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXNpemUpIC0gMTBweCk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tc2l6ZSkgLSAxMHB4KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc2VhcmNoLWJhcjpmb2N1cy13aXRoaW4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4uc2VhcmNoLWJhcjpmb2N1cy13aXRoaW4gLnNlYXJjaC1iYXJfX2lucHV0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjdXJzb3I6IHRleHQ7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2l6ZSkpO1xcbn1cXG4uc2VhcmNoLWJhcjpmb2N1cy13aXRoaW4gLnNlYXJjaC1iYXJfX2lucHV0OmZvY3VzLFxcbi5zZWFyY2gtYmFyOmZvY3VzLXdpdGhpbiAuc2VhcmNoLWJhcl9faW5wdXQ6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLypcXG5tYWluIGNvbG9yXFxuIzM4NjdkNlxcblxcblxcbnJlZCA6ICNlYjNiNWFcXG4qL1xcbjpyb290IHtcXG4gIC0tbWFpbi1ibHVlOiMzODY3ZDY7XFxuICAtLW1haW4tcmVkOiNlYjNiNWE7XFxuICAtLW1vYmlsZS1icmVha3BvaW50LXdpZHRoOjgwMHB4O1xcbn1cXG5cXG4uYXBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKm5hdmJhciovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBtYXgtd2lkdGg6IDIyNTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uYnJhbmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLm5hdmJhci1saW5rcyB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdmJhci1saW5rcyBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm5hdmJhcl9fdG9nZ2xlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuNzVyZW07XFxuICBsZWZ0OiAxcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2YmFyX190b2dnbGUtYnRuX19iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubmF2YmFyX19pbmZvIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2YmFyX19pbmZvIGxpIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5uYXZiYXJfX2l0ZW0tY2FydCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJ0LWljb24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxufVxcblxcbi5uYXZiYXJfX2l0ZW0tY2FydF9fYW10IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICM0NDQ7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxlZnQ6IDE3NSU7XFxuICB0b3A6IC0yNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTc1JSwgMjUlKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAubmF2YmFyX190b2dnbGUtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5uYXZiYXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5uYXZiYXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgfVxcbiAgLm5hdmJhci1saW5rcyB1bCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm5hdmJhci1saW5rcyBsaSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuLm5hdmJhci1saW5rcy0tYWN0aXZlIHtcXG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpO1xcbn1cXG5cXG4vKm1haW4gY29udGVudCBib2R5Ki9cXG4uYXBwX19ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IG1pbm1heCg0MDBweCwgODAwcHgpO1xcbiAgcGFkZGluZzogMS43NXJlbSAxcmVtIDByZW0gMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRlbnQge1xcbiAgY29sb3I6ICMyMjI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA1LjVyZW07XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRlbnRfX2ZpbHRlciB7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRlbnRfX2NsZWFyLWZpbHRlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5maWx0ZXItY29udGVudF9fYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmlsdGVyLWNvbnRlbnRfX2J0biBpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG5cXG4uZmlsdGVyLWNvbnRlbnRfX2hlYWRpbmcge1xcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5maWx0ZXItY29udGVudF9fZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZpbHRlci1jb250ZW50X19mb3JtID4gKiB7XFxuICBtYXJnaW46IDAuMjVyZW0gMCAwIDFyZW07XFxufVxcbi5maWx0ZXItY29udGVudF9fZm9ybSA+ICo6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG5cXG4uYm9keV9fbWFpbi1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvZHlfX21haW4tY29udGVudF9faW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMzQ5KTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4uc2xpZGVyX19idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgNjEsIDYxLCAwLjQpO1xcbiAgY29sb3I6ICNlYmViZWI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG4gIHotaW5kZXg6IDI1O1xcbn1cXG5cXG4uc2xpZGVyX19idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgNjEsIDYxLCAwLjYpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGVyX19idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDYxLCA2MSwgMC40KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRlX19idG4tcHJldmlvdXMge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnNsaWRlX19idG4tbmV4dCB7XFxuICByaWdodDogMDtcXG59XFxuXFxuLnNsaWRlcl9faW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypzaG9wIHN0dWZmKi9cXG4ucHJvZHVjdC1jb250ZW50LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9kdWN0LWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4ucHJvZHVjdC1jb250ZW50X19pdGVtIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnByb2R1Y3QtY29udGVudF9faXRlbTpudGgtb2YtdHlwZSgxKSB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLnByb2R1Y3QtY29udGVudF9faXRlbTpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5wcm9kdWN0LWNvbnRlbnRfX2l0ZW1fX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxufVxcbi5wcm9kdWN0LWNvbnRlbnRfX2l0ZW1fX2luZm8gLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudF9faXRlbV9faW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4ucHJvZHVjdC1jb250ZW50X19pdGVtX19pbmZvIHtcXG4gIG1hcmdpbjogMC43NXJlbSAwO1xcbn1cXG5cXG4ucHJvZHVjdC1jb250ZW50X19kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtX19hZGQtdG8tY2FydCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJsdWUpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlO1xcbn1cXG5cXG4uaXRlbV9fYWRkLXRvLWNhcnQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMC45O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbV9fYWRkLXRvLWNhcnQ6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmFwcF9fYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcblxcbiAgLmZpbHRlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9kdWN0LWNvbnRlbnQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgfVxcblxcbiAgLmJvZHlfX21haW4tY29udGVudF9faW5uZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxufVxcbi8qY2FydCovXFxuLmNhcnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCA2OCwgNjgsIDAuNSk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IC05OTk7XFxufVxcblxcbi5jYXJ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyIDRyZW07XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB6LWluZGV4OiAtOTk5O1xcbn1cXG4uY2FydCBpbWcge1xcbiAgbWF4LXdpZHRoOiA3NXB4O1xcbn1cXG5cXG4uY2FydF9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcbi5jYXJ0X19oZWFkZXIgLmNsb3NlLWNhcnQtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAycHggMnB4IHJnYmEoMTcsIDE3LCAxNywgMC4yNSkpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tcmVkKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRvcDogLTE1JTtcXG4gIGxlZnQ6IDk1JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcnRfX2hlYWRlciBoMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uY2FydF9faGVhZGVyIC50b3RhbC1wcmljZSB7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNhcnRfX2NvbnRlbnRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmNhcnRfX2NvbnRlbnRzIC5kZWxldGUtY2FydC1pdGVtLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMnB4IDJweCByZ2JhKDE3LCAxNywgMTcsIDAuMjUpKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXJlZCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IC0xMCU7XFxuICBsZWZ0OiA5NSU7XFxufVxcbi5jYXJ0X19jb250ZW50cyAuZGVsZXRlLWNhcnQtaXRlbS1idG46aG92ZXIge1xcbiAgb3BhY2l0eTogMC45O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FydF9fY29udGVudHMgdWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jYXJ0X19jb250ZW50cyBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uY2FydF9fY29udGVudHMgbGkgaW1nIHtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uY2FydF9fY29udGVudHMgbGkgLmNhcnQtaXRlbV9faW5mbyB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuLmNhcnRfX2NvbnRlbnRzIGxpIC5hbW91bnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmNhcnRfX2NvbnRlbnRzIGxpIC5hbW91bnQtY29udGFpbmVyIC5jYXJ0LWFtdC1idG4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICNkZGQ7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBlYXNlO1xcbn1cXG4uY2FydF9fY29udGVudHMgbGkgLmFtb3VudC1jb250YWluZXIgLmNhcnQtYW10LWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJ0X19jb250ZW50cyBsaSAuYW1vdW50LWNvbnRhaW5lciAuY2FydC1hbXQtYnRuOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJ0X19jb250ZW50cyBsaSAuYW1vdW50LWNvbnRhaW5lciAuYW1vdW50LWNvbnRhaW5lcl9fYW10IHtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcbi5jYXJ0X19jb250ZW50cyAuY2FydC1hbXQtYnRuX19kZWNyZWFzZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDFweDtcXG59XFxuXFxuLmNhcnRfX2FkZC10by1jYXJ0LWJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJsdWUpO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcXG4gIHRyYW5zaXRpb246IGZpbHRlciA3NW1zIGVhc2U7XFxufVxcblxcbi5jYXJ0X19hZGQtdG8tY2FydC1idG46aG92ZXIge1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxLjI1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcnRfX2FkZC10by1jYXJ0LWJ0bjphY3RpdmUge1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyphcHBseSAuY2FydC0tb3BlbiB0byB0aGUgYm9keSovXFxuLmNhcnQtLW9wZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNhcnQtY29udGFpbmVyLS1hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB6LWluZGV4OiAxNTA7XFxufVxcblxcbi5jYXJ0LS1hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHotaW5kZXg6IDIwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvc2VhcmNoLWJhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FDekJBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBRDRCSjtBQ3pCSTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEMkJOO0FDeEJJO0VBQ0UsVUFBQTtBRDBCTjtBQ3ZCSTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkF6Q007RUEwQ04sK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FEeUJOO0FDdEJJO0VBQ0UsWUFBQTtF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RUFDQSxhQUFBO0FBUVI7QUFOUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRWjtBQUxRO0VBQ0ksY0FBQTtBQU9aO0FBSFE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLWjtBQUhZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUtoQjtBQUZZO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FBSWhCO0FBRlk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUFJaEI7QUFEWTtFQUNJLGdCQUFBO0FBR2hCO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFEUjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBTEo7O0FBUUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVVBLGdDQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQVBKOztBQVVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFQSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBUEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG46OmJlZm9yZSxcXHJcXG46OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOjA7XFxyXFxuICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2YwZjE7XFxyXFxuICBjb2xvcjojMDAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOmluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbmltZyB7XFxyXFxuICAvLyAgbWF4LXdpZHRoOjIwJTtcXHJcXG59XCIsXCIvLyBzYXNzIG1vZHVsZXNcXHJcXG5AdXNlIFxcXCIuL3N0eWxlX21vZHVsZXMvYmFzZVxcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZV9tb2R1bGVzL3NlYXJjaC1iYXJcXFwiO1xcclxcblxcclxcblxcclxcbi8vIGZvbnRcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbm1haW4gY29sb3JcXHJcXG4jMzg2N2Q2XFxyXFxuXFxyXFxuXFxyXFxucmVkIDogI2ViM2I1YVxcclxcbiovXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLW1haW4tYmx1ZTojMzg2N2Q2O1xcclxcbiAgICAtLW1haW4tcmVkOiNlYjNiNWE7XFxyXFxuICAgIC0tbW9iaWxlLWJyZWFrcG9pbnQtd2lkdGg6ODAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6I2VmZWZlZjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLypuYXZiYXIqL1xcclxcbi5uYXZiYXIge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiMzMzM7XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIHotaW5kZXg6MTAwO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjpzdGlja3k7XFxyXFxuICAgIHRvcDowO1xcclxcbiAgICBtYXgtd2lkdGg6MjI1MHB4O1xcclxcbiAgICBtYXJnaW46MCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICBtYXJnaW46MC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbmtzIHVsIHtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rcyBsaSBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjojZmZmZjtcXHJcXG4gICAgcGFkZGluZzoxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fdG9nZ2xlLWJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjEuNzVyZW07XFxyXFxuICAgIGxlZnQ6MXJlbTtcXHJcXG4gICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOjMwcHg7XFxyXFxuICAgIGhlaWdodDoyMXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX3RvZ2dsZS1idG5fX2JhciB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX2luZm8ge1xcclxcbiAgICB1bCB7XFxyXFxuICAgICAgICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgICAgcGFkZGluZzoxcmVtO1xcclxcbiAgICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19pdGVtLWNhcnQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1pY29uIHtcXHJcXG4gICAgZm9udC1zaXplOjJyZW07XFxyXFxuICAgIGNvbG9yOnJnYigyMzAsIDIzMCwgMjMwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9faXRlbS1jYXJ0X19hbXQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IzQ0NDtcXHJcXG4gICAgd2lkdGg6MThweDtcXHJcXG4gICAgaGVpZ2h0OjE4cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTowLjhyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBjb2xvcjojZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBsZWZ0OjE3NSU7XFxyXFxuICAgIHRvcDotMjUlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTc1JSwgMjUlKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpIHtcXHJcXG4gICAgLm5hdmJhcl9fdG9nZ2xlLWJ0biB7XFxyXFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdmJhciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2YmFyLWxpbmtzICB7XFxyXFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAgICB3aWR0aDoxMDAlO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgICAgICB1bCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGlua3MtLWFjdGl2ZSB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKm1haW4gY29udGVudCBib2R5Ki9cXHJcXG4uYXBwX19ib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggbWlubWF4KDQwMHB4LCA4MDBweCk7XFxyXFxuICAgIHBhZGRpbmc6MS43NXJlbSAxcmVtIDByZW0gMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGVudCB7XFxyXFxuICAgIGNvbG9yOiMyMjI7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDo1LjVyZW07XFxyXFxuICAgIGhlaWdodDo1MDBweDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDI1NSwgMC4xMzcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRlbnRfX2ZpbHRlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgLy8gbWF4LWhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1jb250ZW50X19maWx0ZXItLWFjdGl2ZSB7XFxyXFxuICAgIC8vIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRlbnRfX2NsZWFyLWZpbHRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWNvbnRlbnRfX2J0biB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGkge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOjNweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDowLjI1cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGVudF9faGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6MC43NXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOjEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItY29udGVudF9fZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgPiAqIHtcXHJcXG4gICAgICAgIG1hcmdpbjowLjI1cmVtIDAgMCAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gKjpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MC4yNXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYm9keV9fbWFpbi1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keV9fbWFpbi1jb250ZW50X19pbm5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLy8gZGlzcGxheTpncmlkO1xcclxcbiAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBmcjtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMCwgMCwgMC4zNDkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6MzUwcHg7XFxyXFxuICAgIC8vIGJhY2tncm91bmQ6cmdiYSgyNTUsIDAsIDAsIDAuMzQ5KTtcXHJcXG4gICAgLy8gb3ZlcmZsb3c6aGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2xpZGVyX19idG4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICBoZWlnaHQ6MzAlO1xcclxcbiAgICBwYWRkaW5nOjAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg2MSwgNjEsIDYxLCAwLjQpO1xcclxcbiAgICBjb2xvcjpyZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcclxcbiAgICB6LWluZGV4OjI1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyX19idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjEsIDYxLCA2MSwgMC42KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyX19idG46YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYxLCA2MSwgNjEsIDAuNCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlX19idG4tcHJldmlvdXMge1xcclxcbiAgICBsZWZ0OjA7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZV9fYnRuLW5leHQge1xcclxcbiAgICByaWdodDowO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyX19pbWcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBkaXNwbGF5OmJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKnNob3Agc3R1ZmYqL1xcclxcbi5wcm9kdWN0LWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWY7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtY29udGVudF9faXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6I2ZmZjtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwYWRkaW5nOjFyZW07XFxyXFxuICAgIG1hcmdpbjoxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jb250ZW50X19pdGVtOm50aC1vZi10eXBlKDEpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6MDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtY29udGVudF9faXRlbTpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDowO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jb250ZW50X19pdGVtX19pbmZvIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOjAgMC41cmVtO1xcclxcblxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRfX2l0ZW1fX2ltZyB7XFxyXFxuICAgIG1heC13aWR0aDoxMDAlO1xcclxcbiAgICB3aWR0aDoyMDBweDtcXHJcXG4gICAgaGVpZ2h0OjIwMHB4O1xcclxcbiAgICBtYXJnaW46MCBhdXRvO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jb250ZW50X19pdGVtX19pbmZvIHtcXHJcXG4gICAgbWFyZ2luOjAuNzVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtY29udGVudF9fZGVzY3JpcHRpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtX19hZGQtdG8tY2FydCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1tYWluLWJsdWUpO1xcclxcbiAgICBjb2xvcjojZmZmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjoxcmVtIDA7XFxyXFxuICAgIHBhZGRpbmc6MC41cmVtIDFyZW07XFxyXFxuICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbV9fYWRkLXRvLWNhcnQ6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1fX2FkZC10by1jYXJ0OmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLy8gbW9iaWxlIGJvZHlcXHJcXG5AbWVkaWEobWF4LXdpZHRoOjgwMHB4KSB7XFxyXFxuICAgIC5hcHBfX2JvZHkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlsdGVyLWNvbnRlbnQge1xcclxcbiAgICAgICAgZGlzcGxheTpub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0LWNvbnRlbnQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYm9keV9fbWFpbi1jb250ZW50X19pbm5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAvLyBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNTBmcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKmNhcnQqL1xcclxcbi5jYXJ0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6MTAwdnc7XFxyXFxuICAgIGhlaWdodDoxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDY4LCA2OCwgNjgsIDAuNSk7XFxyXFxuICAgIHRvcDowO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgei1pbmRleDotOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY2FydCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6NTAwcHg7XFxyXFxuICAgIGhlaWdodDo2MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDojZmZmO1xcclxcbiAgICB0b3A6NTAlO1xcclxcbiAgICBsZWZ0OjUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmciA0cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHotaW5kZXg6LTk5OTtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDo3NXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6MC41cmVtIDFyZW07XFxyXFxuXFxyXFxuICAgIC5jbG9zZS1jYXJ0LWJ0biB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XFxyXFxuICAgICAgICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDJweCAycHggcmdiYSgxNywgMTcsIDE3LCAwLjI1KSk7XFxyXFxuICAgICAgICBjb2xvcjp2YXIoLS1tYWluLXJlZCk7XFxyXFxuICAgICAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICAgICAgd2lkdGg6MzBweDtcXHJcXG4gICAgICAgIGhlaWdodDozMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHRvcDotMTUlO1xcclxcbiAgICAgICAgbGVmdDo5NSU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG90YWwtcHJpY2Uge1xcclxcbiAgICAgICAgZm9udC1zaXplOjEuNzVyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FydF9fY29udGVudHMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OmluaGVyaXQ7XFxyXFxuICAgIG92ZXJmbG93OmF1dG87XFxyXFxuXFxyXFxuICAgIC5kZWxldGUtY2FydC1pdGVtLWJ0biB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XFxyXFxuICAgICAgICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDJweCAycHggcmdiYSgxNywgMTcsIDE3LCAwLjI1KSk7XFxyXFxuICAgICAgICBjb2xvcjp2YXIoLS1tYWluLXJlZCk7XFxyXFxuICAgICAgICBmb250LXNpemU6MS41cmVtO1xcclxcbiAgICAgICAgd2lkdGg6MzBweDtcXHJcXG4gICAgICAgIGhlaWdodDozMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHRvcDotMTAlO1xcclxcbiAgICAgICAgbGVmdDo5NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlbGV0ZS1jYXJ0LWl0ZW0tYnRuOmhvdmVyIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6MC45O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuLy8gb3ZlcmZsb3cgc2Nyb2xsIHcvIHRoZSB1bCBpbiAgdGhlIGNhcnRcXHJcXG5cXHJcXG4gICAgdWwge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiNlZmVmZWY7XFxyXFxuICAgICAgICBwYWRkaW5nOjFyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xcclxcbiAgICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbjowLjVyZW0gMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6NzVweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6NzVweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuY2FydC1pdGVtX19pbmZvIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46MCAxcmVtO1xcclxcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hbW91bnQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxcmVtO1xcclxcblxcclxcbiAgICAgICAgICAgIC5jYXJ0LWFtdC1idG4ge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6I2RkZDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnMgZWFzZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmNhcnQtYW10LWJ0bjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGZpbHRlcjpicmlnaHRuZXNzKDAuODUpO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC5jYXJ0LWFtdC1idG46YWN0aXZlIHtcXHJcXG4gICAgICAgICAgICAgICAgZmlsdGVyOmJyaWdodG5lc3MoMSk7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmFtb3VudC1jb250YWluZXJfX2FtdCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjowIDAuNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcnQtYW10LWJ0bl9fZGVjcmVhc2Uge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOjFweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY2FydF9fYWRkLXRvLWNhcnQtYnRuIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6MC43NXJlbTtcXHJcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOmZpbHRlciA3NW1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19hZGQtdG8tY2FydC1idG46aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6c2F0dXJhdGUoMS4yNSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX2FkZC10by1jYXJ0LWJ0bjphY3RpdmUge1xcclxcbiAgICBmaWx0ZXI6c2F0dXJhdGUoMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLy8gY2FydCBhY3RpdmUgY2xhc3Nlc1xcclxcbi8qYXBwbHkgLmNhcnQtLW9wZW4gdG8gdGhlIGJvZHkqL1xcclxcbi5jYXJ0LS1vcGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1jb250YWluZXItLWFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgIHotaW5kZXg6MTUwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC0tYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICB6LWluZGV4OjIwMDtcXHJcXG59XCIsXCIkbWFpbi1jb2xvcjojMzg2N2Q2O1xcclxcblxcclxcbi5zZWFyY2gtYmFyIHtcXHJcXG4gICAgLS1zaXplOjQ1cHg7XFxyXFxuICAgIC0tZm9udC1zaXplOjFyZW07XFxyXFxuICAgIGJvcmRlcjowcHggc29saWQgJG1haW4tY29sb3I7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwdmg7XFxyXFxuICAgIGhlaWdodDp2YXIoLS1zaXplKTtcXHJcXG4gICAgd2lkdGg6dmFyKC0tc2l6ZSk7XFxyXFxuICAgIHBhZGRpbmc6NXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgXFxyXFxuICBcXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICBmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtcXHJcXG4gICAgICBwYWRkaW5nOjAgMC41cmVtO1xcclxcbiAgICAgIGJvcmRlcjowO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6MDtcXHJcXG4gICAgICBib3R0b206MDtcXHJcXG4gICAgICBsZWZ0OjA7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tc2l6ZSkgLSAzcHgpO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgb3V0bGluZTogMDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgICZfX3N1Ym1pdCB7XFxyXFxuICAgICAgZm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGJvcmRlcjowO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICBjb2xvcjojZmZmO1xcclxcbiAgICAgIGJhY2tncm91bmQ6JG1haW4tY29sb3I7XFxyXFxuICAgICAgd2lkdGg6Y2FsYyh2YXIoLS1zaXplKSAtIDEwcHgpO1xcclxcbiAgICAgIGhlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gMTBweCk7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgICY6Zm9jdXMtd2l0aGluIHtcXHJcXG4gICAgICB3aWR0aDoyMDBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgIGNvbG9yOiMwMDA7XFxyXFxuICBcXHJcXG4gICAgICAuc2VhcmNoLWJhcl9faW5wdXQge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXHJcXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIHZhcigtLXNpemUpKTtcXHJcXG4gICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAuc2VhcmNoLWJhcl9faW5wdXQ6Zm9jdXMsXFxyXFxuICAgICAgLnNlYXJjaC1iYXJfX2lucHV0OmhvdmVyIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IDA7XFxyXFxuICAgICAgfVxcclxcbiAgXFxyXFxuICAgIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBnZXRDYXRlZ29yaWVzID0gYXN5bmMgXyA9PiB7XHJcbiAgICBsZXQgZW5kUG9pbnQgPSBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy9jYXRlZ29yaWVzXCI7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGVuZFBvaW50KTtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckl0ZW0gPSBfID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsdGVyIGl0ZW0gaGVyZVwiKTtcclxufVxyXG4iLCJjb25zdCBzbGlkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xyXG5jb25zdCBzbGlkZXJJbWFnZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19pbWFnZXNcIik7XHJcbmNvbnN0IHNsaWRlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19pbWdcIik7XHJcbmNvbnN0IHByZXZpb3VzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fYnRuLXByZXZpb3VzXCIpO1xyXG5jb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZV9fYnRuLW5leHRcIik7XHJcblxyXG5pbXBvcnQgbXlJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3NsaWRlci1pbWctbWVuc0Nsb3RoZXMtMi5qcGdcIjtcclxuXHJcblxyXG5sZXQgaSA9IDA7IC8vIGluZGV4IG9mIHRoZSBjdXJyZW50IGltYWdlXHJcbmxldCB0aW1lID0gNjAwMDsgLy8gdGltZSB0byBjaGFuZ2UgZWFjaCBzbGlkZVxyXG4vLyBJbWFnZSBMaXN0XHJcbi8vIGxldCBpbWFnZXMgPSBbXHJcbi8vICAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzMyNTE1My9wZXhlbHMtcGhvdG8tMzI1MTUzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTUwMCZ3PTUwMFwiLFxyXG4vLyAgICAgXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82OTEwNDYvcGV4ZWxzLXBob3RvLTY5MTA0Ni5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwXCIsXHJcbi8vICAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEzMzc0NzcvcGV4ZWxzLXBob3RvLTEzMzc0NzcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MFwiLFxyXG4vLyAgICAgXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy85NzQ5MTEvcGV4ZWxzLXBob3RvLTk3NDkxMS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwXCIsXHJcbi8vICAgICBdO1xyXG5sZXQgaW1hZ2VzID0gW215SW1hZ2VdO1xyXG5cclxuLy8gaW1hZ2VzWzBdID0gbXlJbWFnZTtcclxuLy8gaW1hZ2VzWzFdID0gXCIuLi9pbWFnZXMvc2xpZGVyLWltZy1qZXdlbGVyeS0xLmpwZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VTbGlkZXJJbWcgPSBfID0+IHtcclxuICAgIC8vIENoYW5nZSBJbWFnZVxyXG4gICAgY29uc3QgY2hhbmdlSW1nID0gXyA9PiB7XHJcbiAgICAgICAgc2xpZGVySW1nLnNyYyA9IGltYWdlc1tpXTtcclxuICAgICAgICBpZihpIDwgaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KGNoYW5nZUltZywgdGltZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByZXZpb3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgICBjb25zb2xlLmxvZyhidG4pXHJcbiAgICB9KVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBjaGFuZ2VJbWc7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJoZWVsbyB3b3JsZFwiKVxyXG59XHJcbiIsImNvbnN0IHByb2R1Y3RDb250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3QtY29udGVudFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0SXRlbSA9IGFzeW5jIF8gPT4ge1xyXG4gICAgcmVuZGVyKClcclxuICAgIGNvbnNvbGUubG9nKCd0aGUgcHJvZHVjdCBpdGVtcyBtb2R1bGUnKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHByb2R1Y3RJdGVtRGF0YSA9IGFzeW5jIF8gPT4ge1xyXG4gICAgbGV0IGVuZFBvaW50ID0gXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHNcIjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQpO1xyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBwcm9kdWN0SXRlbURhdGFSZW5kZXIgPSBhc3luYyBfID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3REYXRhID0gYXdhaXQgcHJvZHVjdEl0ZW1EYXRhKCk7XHJcbiAgICBsZXQgcHJvZHVjdERhdGFGaWx0ZXIgPSBwcm9kdWN0RGF0YS5maWx0ZXIocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSB9ID0gcHJvZHVjdDtcclxuICAgICAgICAvLyBjYXNlIHNlbnNpdGl2ZVxyXG4gICAgICAgIGlmKHRpdGxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmluY2x1ZGVzKFwibWVuc1wiKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aXRsZSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgbXlNYXJrdXAgPSBcIlwiO1xyXG5cclxuICAgIHByb2R1Y3REYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGltYWdlLCBwcmljZSwgdGl0bGUgfSA9IGl0ZW07XHJcbiAgICAgICAgLy8gbWF4IGNoYXJhY3RlcnMgMTU1IG9yIG1heCB3b3JkcyAyMFxyXG4gICAgICAgIGxldCBhbXRPZkxldHRlcnNUb0tlZXAgPSAxNTU7XHJcbiAgICAgICAgbGV0IHNob3J0ZW5lZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIGFtdE9mTGV0dGVyc1RvS2VlcCkucmVwbGFjZSgvXFxzKiQvLFwiXCIpICsgXCIuLi5cIjtcclxuXHJcbiAgICAgICAgbGV0IG1hcmt1cCA9IGBcclxuICAgICAgICA8bGkgY2xhc3M9XCJwcm9kdWN0LWNvbnRlbnRfX2l0ZW1cIiBkYXRhLWNhdGVnb3J5PVwiJHtjYXRlZ29yeX1cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImNvbnRlbnRfX2l0ZW1fX2ltZ1wiIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwiaXRlbSBpbWFnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1jb250ZW50X19pdGVtX19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJpdGVtLW5hbWVcIj4ke3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJpdGVtLXByaWNlXCI+JCR7cHJpY2V9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgJHtzaG9ydGVuZWREZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaXRlbV9fYWRkLXRvLWNhcnRcIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIG15TWFya3VwICs9IG1hcmt1cDtcclxuICAgIH0pO1xyXG4gICAgcHJvZHVjdENvbnRlbnRFbC5pbm5lckhUTUwgPSBteU1hcmt1cDtcclxufVxyXG5cclxuXHJcbmNvbnN0IHJlbmRlciA9IF8gPT4ge1xyXG4gICAgcHJvZHVjdEl0ZW1EYXRhUmVuZGVyKClcclxufVxyXG5cclxuXHJcbi8qXHJcbjxsaSBjbGFzcz1cInByb2R1Y3QtY29udGVudF9faXRlbVwiPlxyXG4gICAgPGltZyBjbGFzcz1cImNvbnRlbnRfX2l0ZW1fX2ltZ1wiIHNyYz1cImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvODFmUEtkLTJBWUwuX0FDX1NMMTUwMF8uanBnXCIgYWx0PVwiaXRlbSBpbWFnZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtY29udGVudF9faXRlbV9faW5mb1wiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cIml0ZW0tbmFtZVwiPkJsdWUgYmFnPC9oMj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJpdGVtLXByaWNlXCI+JDIyMjwvaDM+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwicHJvZHVjdC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLFxyXG4gICAgICAgIGFkaXBpc2ljaW5nIGVsaXQuIE9iY2FlY2F0aSB2b2x1cHRhcyBvZGl0IGlzdGUgbGFib3Jpb3NhbS5cclxuICAgICAgICBhYm9yaW9zYW0gcmVtIGFzcGVyaW9yZXMgbWluaW1hIGxhdWRhbnRpdW0gZG9sb3JlIGlwc3VtLlxyXG4gICAgPC9wPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIml0ZW1fX2FkZC10by1jYXJ0XCI+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuPC9saT5cclxuKi8iLCJpbXBvcnQgeyBwcm9kdWN0SXRlbSB9IGZyb20gXCIuL3Byb2R1Y3RJdGVtc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXJJdGVtIH0gZnJvbSBcIi4vZmlsdGVySXRlbXNcIjtcclxuaW1wb3J0IHsgY2hhbmdlU2xpZGVySW1nIH0gZnJvbSBcIi4vaW1hZ2VTbGlkZXJcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEJhckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyXCIpO1xyXG5jb25zdCBzZWFyY2hCYXJCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhcl9fc3VibWl0XCIpO1xyXG5jb25zdCBzZWFyY2hCYXJJbnB1dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyX19pbnB1dFwiKTtcclxuXHJcbmxldCB1c2VySW5wdXQgPSBcIlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFByb2R1Y3RzID0gXyA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoZSBzZWFyY2ggbW9kdWxlXCIpO1xyXG4gICAgcHJvZHVjdEl0ZW0oKVxyXG4gICAgLy8gZmlsdGVySXRlbSgpXHJcblxyXG4gICAgY2hhbmdlU2xpZGVySW1nKClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGdldFVzZXJJbnB1dCA9IF8gPT4ge1xyXG4gICAgc2VhcmNoQmFyQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKHNlYXJjaEJhcklucHV0RWwgPT09IFwiXCIpIHJldHVybjtcclxuICAgICAgICB1c2VySW5wdXQgPSBzZWFyY2hCYXJJbnB1dEVsLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcklucHV0KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmdldFVzZXJJbnB1dCgpXHJcblxyXG5cclxuXHJcbi8qaGF2ZSB0byBzZWFyY2ggLyBmaWx0ZXIgbG9jYWxseVxyXG4xLiBnZXQgdGhlIGRhdGEgaW50byBhbiBhcnJheVxyXG4yLiBXaGVuIHNvbWUgc2VhcmNoIGZvciBzb21ldGhpbmcgZWc6IHQtc2hpcnRcclxuICAgIDEuIGZpbHRlciB0aHJvdWdoIHRoZSB0aXRsZSBvZiBlYWNoIGZvciB0aGUgc2VhcmNoIHRlcm1cclxuICAgIDIuIHJldHVybiB0aGUgcmVzdWx0XHJcbiAgICAzLiBkaXNwbGF5IHRoZSByZXN1bHQgdG8gdGhlIERPTVxyXG4qLyIsImNvbnN0IG5hdmJhclRvZ2dsZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfX3RvZ2dsZS1idG5cIik7XHJcbmNvbnN0IG5hdmJhckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItbGlua3NcIik7XHJcbmxldCBoZWlnaHQgPSBuYXZiYXJMaW5rcy5zY3JvbGxIZWlnaHQ7XHJcblxyXG4vKmFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGZyb20gMCB0byBhdXRvIHNtb290aGx5Ki9cclxubmF2YmFyTGlua3Muc3R5bGUuc2V0UHJvcGVydHkoJy0tbWF4LWhlaWdodCcsIGhlaWdodCArICdweCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZU1vYmlsZU5hdk1lbnUgPSBfID0+IHtcclxuICAgIG5hdmJhckxpbmtzLmNsYXNzTGlzdC50b2dnbGUoXCJuYXZiYXItbGlua3MtLWFjdGl2ZVwiKTtcclxufVxyXG5cclxubmF2YmFyVG9nZ2xlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1vYmlsZU5hdk1lbnUpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgc2xpZGVySW1nMCBmcm9tIFwiLi9pbWFnZXMvc2xpZGVyLWltZy1lbGVjdHJvbmljcy0wLmpwZ1wiO1xyXG5pbXBvcnQge3RvZ2dsZU1vYmlsZU5hdk1lbnUgfSBmcm9tIFwiLi9qc19tb2R1bGVzL3RvZ2dsZU1vYmlsZU5hdlwiO1xyXG5pbXBvcnQgeyBzZWFyY2hQcm9kdWN0cyB9IGZyb20gXCIuL2pzX21vZHVsZXMvc2VhcmNoXCI7XHJcblxyXG4vKlxyXG53LyB3ZWJwYWNrIGhhdmUgdG8gYWRkIGltYWdlIHcvIGpzIHwgb3IgY3NzXHJcbkVHXHJcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xyXG4tLS1cclxuaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9ndWlkZXMvYXNzZXQtbWFuYWdlbWVudC8jbG9hZGluZy1pbWFnZXNcclxuKi9cclxuXHJcbi8qXHJcbmh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9cclxuXHJcbmh0dHBzOi8vYXBpbGlzdC5mdW4vY2F0ZWdvcnkvZWNvbW1lcmNlXHJcbiovXHJcblxyXG5jb25zdCByZW5kZXIgPSBfID0+IHtcclxuICAgIC8vIHByb2R1Y3RJdGVtKClcclxuICAgIHNlYXJjaFByb2R1Y3RzKClcclxufVxyXG5cclxucmVuZGVyKClcclxuXHJcblxyXG5cclxubGV0IHRlc3QgPSBhc3luYyBfID0+IHtcclxuICAgIGxldCBlbmRQb2ludCA9IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL2NhdGVnb3JpZXNcIjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQpO1xyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gdGVzdCgpXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1nIHNsaWRlclxyXG5sZXQgaW1nU2xpZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9faW1nXCIpO1xyXG4vLyBpbWdTbGlkZXJFbC5zdHlsZS5zcmMgPSBzbGlkZXJJbWcwO1xyXG5cclxuXHJcblxyXG4vLyB0b2dnbGUgZmlsdGVyIG9wZW5cclxuLy8gY29uc3QgbmF2YmFyVG9nZ2xlQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9fdG9nZ2xlLWJ0blwiKTtcclxuXHJcblxyXG5cclxuLypUT0RPIExJU1RcclxuMS4gYWRkIHRoZSBkYXRhIGZyb20gdGhlIGZha2Ugc3RvcmUgYXBpXHJcbi0gaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2RvY3NcclxuXHJcbjIuIGdldCBzZWFyY2ggZnVuY3Rpb25hbGl0eSB3b3JraW5nXHJcblxyXG4zLiBjcmVhdGUgYSB3b3JraW5nIHNsaWRlcnNob3dcclxuICAgIC0gYXV0byAvIHRpbWVkIHNjcm9sbFxyXG4gICAgLSBjYW4gc2Nyb2xsKGJhc2VkIG9mIGluZGV4KSAvIGZhZGUgc2Nyb2xsXHJcblxyXG40LiBhZGQgdG8gY2FydFxyXG5cclxuNS4gY2FydCBmdW5jdGlvbmFsaXR5XHJcblxyXG42LiBmaWx0ZXIgcHJvZHVjdHMgZnVuY3Rpb25hbGl0eVxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=