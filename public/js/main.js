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
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Recipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Recipe.js */ \"./src/assets/js/modules/Recipe.js\");\n\n\n\nconst app = new _modules_Recipe_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\napp.initApp();\n\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/modules/Cart.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/Cart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var _createCart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCart.js */ \"./src/assets/js/modules/createCart.js\");\n\n\nclass Cart {\n  constructor(recipe, ingredients) {\n    this._ingredients = ingredients;\n    this._recipe = recipe;\n    this.createCart = _createCart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n\n  get currency() {\n    return this._recipe.currency\n  }\n\n  get shippingCost() {\n    return parseFloat(this._recipe[\"shipping-cost\"]).toFixed(2)\n  }\n \n  get items() {\n    return this._ingredients.reduce(\n      (acc, recipe) => acc + parseInt(recipe.items),\n      0\n    );\n  }\n\n  get subtotal() {\n    let subtotal = this._ingredients.reduce(\n      (acc, item) => acc + parseFloat(item.cost) * item.items,\n      0\n    )\n    return parseFloat(subtotal).toFixed(2);\n  }\n  \n  get total() {\n    let total = parseFloat(this.subtotal) + parseFloat(this.shippingCost);\n    return parseFloat(total).toFixed(2);\n  }\n\n\n  renderCart(cart) {\n    Object(_createCart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\n  }\n}\n\n//# sourceURL=webpack:///./src/assets/js/modules/Cart.js?");

/***/ }),

/***/ "./src/assets/js/modules/Ingredient.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/Ingredient.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ingredient; });\nclass Ingredient {\n  constructor(ingredient, index) {\n    this.brand = ingredient.brand || \"\";\n    this.items = ingredient.items;\n    this.price = ingredient.price;\n    this.product = ingredient.product;\n    this.quantity = ingredient.quantity;\n    this.id = index;\n    this.checked = true;\n  }\n  \n\n  set check(ischecked) {\n    this.checked = ischecked;\n  }\n\n  get cost() {\n    return (this.price * this.items).toFixed(2);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/modules/Ingredient.js?");

/***/ }),

/***/ "./src/assets/js/modules/Ingredients.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/Ingredients.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ingredients; });\n/* harmony import */ var _createIngredient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createIngredient.js */ \"./src/assets/js/modules/createIngredient.js\");\n/* harmony import */ var _Ingredient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingredient.js */ \"./src/assets/js/modules/Ingredient.js\");\n\n\n\nclass Ingredients {\n  constructor(ingredients) {\n    this.ingredients = ingredients.map(\n      (ingredient, index) => new _Ingredient_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ingredient, index)\n    );\n    this.createIngredient = _createIngredient_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n\n\n  renderIngredients(ingredients, currency) {\n    ingredients.forEach(ingredient => {\n      this.createIngredient(ingredient, currency);\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/modules/Ingredients.js?");

/***/ }),

/***/ "./src/assets/js/modules/Recipe.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/Recipe.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recipe; });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/assets/js/modules/getData.js\");\n/* harmony import */ var _Ingredients_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingredients.js */ \"./src/assets/js/modules/Ingredients.js\");\n/* harmony import */ var _Cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.js */ \"./src/assets/js/modules/Cart.js\");\n\n\n\n\n// fetch('../../../data/data.json').then(response => response.json()).then(data => console.log(data))\n\nclass Recipe {\n  constructor() {\n    this.ingredients = [];\n    this.cart = {};\n    this.getData = _getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);\n    this.onChangeInput = this.onChangeInput.bind(this);\n    this.onSelect = this.onSelect.bind(this);\n  }\n\n  async initApp() {\n    const data = await this.getData();\n    this.ingredients = new _Ingredients_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data.ingredients);\n    this.cart = new _Cart_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](data, this.ingredients.ingredients);\n    this.ingredients.renderIngredients(this.ingredients.ingredients, this.cart.currency);\n    this.cart.renderCart(this.cart);\n    this.addEvents();\n  }\n\n  clearApp() {\n    document.querySelector(\".buy-section\").innerHTML = \"\";\n    document.querySelector(\".ingredients\").innerHTML = \"\";\n  }\n\n  updateApp() {\n    this.clearApp();\n    this.ingredients.renderIngredients(this.ingredients.ingredients, this.cart.currency);\n    this.cart.renderCart(this.cart);\n    this.addEvents();\n  }\n\n  getNewIngredients(e, num, ischeked = true) {\n    const element = e.target.parentElement.parentElement;\n    const newIngredients = num =>\n      this.ingredients.ingredients.map(item => {\n        if (item.id === parseInt(element.id)) {\n          item.items = num;\n          item.check = ischeked;\n        }\n        return item;\n      });\n    return newIngredients(num);\n  }\n\n  onChangeCheckBox(e) {\n    if (!e.target.checked) {\n      this.ingredients.ingredients = this.getNewIngredients(e, 0, false);\n    } else {\n      this.ingredients.ingredients = this.getNewIngredients(e, 1);\n    }\n    this.updateApp();\n  }\n\n  addCheckBoxEvent() {\n    document\n      .querySelectorAll(\".item__checkbox\")\n      .forEach(input =>\n        input.addEventListener(\"change\", this.onChangeCheckBox)\n      );\n  }\n\n  onChangeInput(e) {\n    this.ingredients.ingredient = this.getNewIngredients(e, e.target.value);\n    this.updateApp();\n  }\n\n  addInputEvent() {\n    document\n      .querySelectorAll(\".item__items\")\n      .forEach(input => input.addEventListener(\"change\", this.onChangeInput));\n  }\n\n  onSelect(e, ischeked, items) {\n    this.ingredients.ingredients.map(item => {\n      item.check = ischeked;\n      item.items = items;\n      return item;\n    });\n    this.updateApp();\n  }\n\n  addSelectAllEvent() {\n    document\n      .querySelector(\"#select-all\")\n      .addEventListener(\"click\", e => this.onSelect(e, true, 1));\n    document\n      .querySelector(\"#deselect-all\")\n      .addEventListener(\"click\", e => this.onSelect(e, false, 0));\n  }\n\n  addEvents() {\n    this.addInputEvent();\n    this.addCheckBoxEvent();\n    this.addSelectAllEvent();\n  }\n}\n\n//# sourceURL=webpack:///./src/assets/js/modules/Recipe.js?");

/***/ }),

/***/ "./src/assets/js/modules/createCart.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/createCart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createCart; });\nconst buy = document.querySelector(\".buy-section\");\n\nfunction createCart({currency, items, subtotal, shippingCost, total}) {\n  const cart = document.createElement(\"div\");\n  cart.classList.add(\"cart\", \"card-body\", \"pr-5\", \"pl-5\");\n  cart.innerHTML = `<div class=\"total\">\n      <div class='pb-4'>\n        <small id=\"items\">\n          <span >Items: </span>\n          ${items}\n        </small>\n      </div>\n      <p class='d-flex justify-content-between' id=\"subtotal\">\n        <span>Subtotal </span>\n        ${subtotal} ${currency}\n      </p>\n      <p class='d-flex justify-content-between' id=\"send-charges\">\n        <span>Gastos de envío </span> \n        ${shippingCost} ${currency}\n      </p>\n      <p class='d-flex justify-content-between' id=\"total\">\n        Total \n        <span class='h5 text-success'>${total} ${currency}</span>\n      </p>\n      <div d-flex align-items-stretch>\n        <button class=\"btn btn-success w-100\" id=\"buy\">Comprar ingredienes: ${total} ${currency}</button>\n      </div>\n    </div>`;\n  buy.appendChild(cart);\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/modules/createCart.js?");

/***/ }),

/***/ "./src/assets/js/modules/createIngredient.js":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/createIngredient.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createIngredient; });\nconst ingredients = document.querySelector(\".ingredients\");\n\nfunction createIngredient({\n  product,\n  brand,\n  items,\n  quantity,\n  cost,\n  id,\n  checked\n}, currency) {\n  const isChecked = () => checked ? \"checked\" : \"\";\n  const ingredient = document.createElement(\"li\");\n  ingredient.classList.add(\"list-group-item\", \"p-2\");\n\n  ingredient.innerHTML = (\n    `<div id=${id} class=\"row item\">\n      <div class=\"col-1 ml-2 p-0 d-flex justify-content-center align-items-center\">\n        <input class='item__checkbox' type=\"checkbox\" ${isChecked()}  />\n      </div>\n      <div class=\"col-1 p-0 d-flex align-items-center\">\n        <input class='item__items text-primary text-center' type=\"number\" min='0' value=${parseInt(\n          items\n        )} style=\"width: 30px; heigth: 30px\" />\n      </div>\n      <div class=\"col-4\">\n        <div class='row'>\n          <p class='item__name m-0'>${product}</p>\n        </div>\n        <div class='row'>\n          ${brand ? `<small class='item__brand'>${brand}</small>` : \"\"}\n        </div>\n        <div class='row'>\n          <small class='item__quantity'>${quantity}</small>\n        </div>\n      </div>\n      <div class='col-5 pr-5  d-flex justify-content-end align-items-center' >\n        <p class='text-right item__price m-0 text-success'>${cost} ${currency}</p>\n      </div>\n    </div>\n   `);\n  ingredients.appendChild(ingredient);\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/modules/createIngredient.js?");

/***/ }),

/***/ "./src/assets/js/modules/getData.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/getData.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getData; });\nasync function getData() {\n  let recipe = await fetch(\n    \"https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json\"\n  );\n  recipe = await recipe.json();\n  return await recipe.recipe;\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/modules/getData.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/assets/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/assets/js/main.js */\"./src/assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/main.js?");

/***/ })

/******/ });