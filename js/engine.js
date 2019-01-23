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
var second = __webpack_require__(3);
var third = __webpack_require__(4);
var fourth = __webpack_require__(5);
var fifth = __webpack_require__(6);

document.addEventListener("DOMContentLoaded", function () {

  module.exports.xxx = function (number1, number2, number3, number4) {
    $(".main").empty();

    //width part
    $(".main").append("<p id='pixelsToPercents'>Konwersja szerokości z pikseli na procenty dla szerokości " + number3 + "px</p>");
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
      $("#scoreWidth").text(widthPixels / number1 + "%");
    });

    $("#calculatePercentsWidth").on("click", function () {
      var widthPercents = $("#numberPercentsValue").val();
      $("#scoreWidth").text(widthPercents * number1 + "px");
    });

    //height part
    $(".main").append("<p id='pixelsToPercentsHeight'>Konwersja wysokości z pikseli na procenty dla wysokości " + number4 + "px</p>");
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
      $("#scoreHeight").text(heightPixels / number2 + "%");
    });

    $("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
    $("#calculatePercentsHeight").on("click", function () {
      var heightPercents = $("#numberPercentsValueHeight").val();
      $("#scoreHeight").text(heightPercents * number2 + "px");
    });
  };

  first.first();
  second.second();
  third.third();
  fourth.fourth();
  fifth.fifth();
}); //koniec DOMContentLoaded

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//obsługa zdarzeń dla przycisku 800x600 pikseli
var workingFile = __webpack_require__(1);

module.exports.first = function () {
  $("#first").on("click", function () {
    workingFile.xxx(8, 6, 800, 600);
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//obsługa zdarzeń dla przycisku 1024x768 pikseli
var workingFile = __webpack_require__(1);

module.exports.second = function () {

      $("#second").on("click", function () {
            workingFile.xxx(10.24, 7.68, 1024, 768);
      });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//obsługa zdarzeń dla przycisku 800x600 pikseli
var workingFile = __webpack_require__(1);

module.exports.third = function () {

  $("#third").on("click", function () {
    workingFile.xxx(12.80, 7.68, 1280, 768);
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//obsługa zdarzeń dla przycisku 800x600 pikseli
var workingFile = __webpack_require__(1);

module.exports.fourth = function () {

  $("#fourth").on("click", function () {
    workingFile.xxx(1360, 7.68, 1360, 768);
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//obsługa zdarzeń dla przycisku 800x600 pikseli
var workingFile = __webpack_require__(1);

module.exports.fifth = function () {

  $("#fifth").on("click", function () {
    workingFile.xxx(1366, 7.68, 1366, 768);
  });
};

/***/ })
/******/ ]);