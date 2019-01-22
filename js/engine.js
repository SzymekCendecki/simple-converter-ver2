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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var first = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function () {
  first.first();
}); //koniec DOMContentLoaded

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//obsługa zdarzeń dla przycisku 800x600 pikseli

module.exports.first = function () {

  var onePercent800 = 8;
  var onePercent600 = 6;

  $("#first").on("click", function () {
    $(".main").empty();

    //width part
    $(".main").append("<p id='pixelsToPercents'>Konwersja szerokości z pikseli na procenty dla szerokości 800px</p>");
    $(".main").append("<p id='subTitlePixels'>Podaj liczbę (w pikselach)</p>");
    $(".main").append("<input type='number' id='numberPixelsValue'>");
    $(".main").append("<button id='calculatePixelsWidth'>oblicz</button>");
    $(".main").append("<p id='subTitlePercents'>Podaj liczbę (w procentach)</p>");
    $(".main").append("<input type='number' id='numberPercentsValue'>");
    $(".main").append("<button id='calculatePercentsWidth'>oblicz</button>");
    $(".main").append("<p id='scoreTitle'>Wynik to:</p>");
    $(".main").append("<p id='scoreWidth' class='height5vh'></p>");

    $("#calculatePixelsWidth").on("click", function () {
      var widthPixels = $("#numberPixelsValue").val();
      $("#scoreWidth").text(widthPixels / onePercent800 + "%");
    });

    $("#calculatePercentsWidth").on("click", function () {
      var widthPercents = $("#numberPercentsValue").val();
      $("#scoreWidth").text(widthPercents * onePercent800 + "px");
    });

    //height part
    $(".main").append("<p id='pixelsToPercentsHeight'>Konwersja wysokości z pikseli na procenty dla wysokości 600px</p>");
    $(".main").append("<p id='subTitlePixelsHeight'>Podaj liczbę (w pikselach)</p>");
    $(".main").append("<input type='number' id='numberPixelsValueHeight'>");
    $(".main").append("<button id='calculatePixelsHeight'>oblicz</button>");
    $(".main").append("<p id='subTitlePercentsHeight'>Podaj liczbę (w procentach)</p>");
    $(".main").append("<input type='number' id='numberPercentsValueHeight'>");
    $(".main").append("<button id='calculatePercentsHeight'>oblicz</button>");
    $(".main").append("<p id='scoreTitle'>Wynik to:</p>");
    $(".main").append("<p id='scoreHeight' class='height5vh'></p>");

    $("#calculatePixelsHeight").on("click", function () {
      var heightPixels = $("#numberPixelsValueHeight").val();
      $("#scoreHeight").text(heightPixels / onePercent600 + "%");
    });

    $("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
    $("#calculatePercentsHeight").on("click", function () {
      var heightPercents = $("#numberPercentsValueHeight").val();
      $("#scoreHeight").text(heightPercents * onePercent600 + "px");
    });
  });
};

/***/ })
/******/ ]);