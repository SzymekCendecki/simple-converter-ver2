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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var first = __webpack_require__(2);
var second = __webpack_require__(3);
var third = __webpack_require__(4);
var fourth = __webpack_require__(5);
var fifth = __webpack_require__(6);

document.addEventListener("DOMContentLoaded", function () {
	function english(number3, number4) {
		$("#left").append("<p id='pixelsToPercents'>Conversion of width: pixels to percents for width " + number3 + "px</p>");
		$("#left").append("<p id='subTitlePixels'>It serve number (pixels)</p>");
		$("#left").append("<input type='number' id='numberPixelsValue'>");
		$("#left").append("<button id='calculatePixelsWidth'>calculate</button>");
		$("#left").append("<p id='subTitlePercents'>It serve number (percents)</p>");
		$("#left").append("<input type='number' id='numberPercentsValue'>");
		$("#left").append("<button id='calculatePercentsWidth'>calculate</button>");
		$("#left").append("<p id='scoreTitle'>Result</p>");
		$("#left").append("<p id='scoreWidth' class='height5vh'></p>");

		$("#right").append("<p id='pixelsToPercentsHeight'>Conversion of height: pixels to percents for height " + number4 + "px</p>");
		$("#right").append("<p id='subTitlePixelsHeight'>It serve number (pixels)</p>");
		$("#right").append("<input type='number' id='numberPixelsValueHeight'>");
		$("#right").append("<button id='calculatePixelsHeight'>calculate</button>");
		$("#right").append("<p id='subTitlePercentsHeight'>It serve number (percents)</p>");
		$("#right").append("<input type='number' id='numberPercentsValueHeight'>");
		$("#right").append("<button id='calculatePercentsHeight'>calculate</button>");
		$("#right").append("<p id='scoreTitleHeight'>Result</p>");
		$("#right").append("<p id='scoreHeight' class='height5vh'></p>");
	}

	function polish(number3, number4) {
		$("#left").append("<p id='pixelsToPercents'>Konwersja szerokości z pikseli na procenty dla szerokości " + number3 + "px</p>");
		$("#left").append("<p id='subTitlePixels'>Podaj liczbę (w pikselach)</p>");
		$("#left").append("<input type='number' id='numberPixelsValue'>");
		$("#left").append("<button id='calculatePixelsWidth'>oblicz</button>");
		$("#left").append("<p id='subTitlePercents'>Podaj liczbę (w procentach)</p>");
		$("#left").append("<input type='number' id='numberPercentsValue'>");
		$("#left").append("<button id='calculatePercentsWidth'>oblicz</button>");
		$("#left").append("<p id='scoreTitle'>Wynik to:</p>");
		$("#left").append("<p id='scoreWidth' class='height5vh'></p>");

		$("#right").append("<p id='pixelsToPercentsHeight'>Konwersja wysokości z pikseli na procenty dla wysokości " + number4 + "px</p>");
		$("#right").append("<p id='subTitlePixelsHeight'>Podaj liczbę (w pikselach)</p>");
		$("#right").append("<input type='number' id='numberPixelsValueHeight'>");
		$("#right").append("<button id='calculatePixelsHeight'>oblicz</button>");
		$("#right").append("<p id='subTitlePercentsHeight'>Podaj liczbę (w procentach)</p>");
		$("#right").append("<input type='number' id='numberPercentsValueHeight'>");
		$("#right").append("<button id='calculatePercentsHeight'>oblicz</button>");
		$("#right").append("<p id='scoreTitleHeight'>Wynik to:</p>");
		$("#right").append("<p id='scoreHeight' class='height5vh'></p>");
	}

	$("#language").on("click", function () {
		if ($("#language").text() == "EN") {
			$("#right, #left").empty();
			$("#language").empty().append("PL");
			$(".title").empty().append("Coefficient of width and heights on percents");
		} else if ($("#language").text() == "PL") {
			$("#right, #left").empty();
			$("#language").empty().append("EN");
			$(".title").empty().append("Przelicznik szerokości i wysokości na procenty");
		}
	});

	module.exports.xxx = function (number1, number2, number3, number4) {
		$("#right, #left").empty();

		if ($("#language").text() == "EN") {
			polish(number3, number4);
			//width part
			$("#calculatePixelsWidth").on("click", function () {
				var widthPixels = $("#numberPixelsValue").val();
				$("#scoreWidth").text(widthPixels / number1 + "%");
			});

			$("#calculatePercentsWidth").on("click", function () {
				var widthPercents = $("#numberPercentsValue").val();
				$("#scoreWidth").text(widthPercents * number1 + "px");
			});

			//height part
			$("#calculatePixelsHeight").on("click", function () {
				var heightPixels = $("#numberPixelsValueHeight").val();
				$("#scoreHeight").text(heightPixels / number2 + "%");
			});

			$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
			$("#calculatePercentsHeight").on("click", function () {
				var heightPercents = $("#numberPercentsValueHeight").val();
				$("#scoreHeight").text(heightPercents * number2 + "px");
			});
		} else if ($("#language").text() == "PL") {
			english(number3, number4);

			//width part
			$("#calculatePixelsWidth").on("click", function () {
				var widthPixels = $("#numberPixelsValue").val();
				$("#scoreWidth").text(widthPixels / number1 + "%");
			});

			$("#calculatePercentsWidth").on("click", function () {
				var widthPercents = $("#numberPercentsValue").val();
				$("#scoreWidth").text(widthPercents * number1 + "px");
			});

			//height part
			$("#calculatePixelsHeight").on("click", function () {
				var heightPixels = $("#numberPixelsValueHeight").val();
				$("#scoreHeight").text(heightPixels / number2 + "%");
			});

			$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
			$("#calculatePercentsHeight").on("click", function () {
				var heightPercents = $("#numberPercentsValueHeight").val();
				$("#scoreHeight").text(heightPercents * number2 + "px");
			});
		}
	};
	first.first();
	second.second();
	third.third();
	fourth.fourth();
	fifth.fifth();
}); //koniec DOMContentLoaded

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//obsługa zdarzeń dla przycisku 800x600 pikseli
var workingFile = __webpack_require__(0);

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
var workingFile = __webpack_require__(0);

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
var workingFile = __webpack_require__(0);

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
var workingFile = __webpack_require__(0);

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
var workingFile = __webpack_require__(0);

module.exports.fifth = function () {

  $("#fifth").on("click", function () {
    workingFile.xxx(1366, 7.68, 1366, 768);
  });
};

/***/ })
/******/ ]);