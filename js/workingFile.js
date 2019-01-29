let first=require("./screen800x600.js");
let second=require("./screen1024x768.js");
let third=require("./screen1280x768.js");
let fourth=require("./screen1360x768.js");
let fifth=require("./screen1366x768");

document.addEventListener("DOMContentLoaded", () => {
	function english(number3, number4){
		$("#left").append("<p id='pixelsToPercents'>Conversion of width: pixels to percents for width " + number3 +"px</p>");
		$("#left").append("<p id='subTitlePixels'>It serve number (pixels)</p>");
		$("#left").append("<input type='number' id='numberPixelsValue'>");
		$("#left").append("<button id='calculatePixelsWidth'>calculate</button>");
		$("#left").append("<p id='subTitlePercents'>It serve number (percents)</p>");
		$("#left").append("<input type='number' id='numberPercentsValue'>");
		$("#left").append("<button id='calculatePercentsWidth'>calculate</button>");
		$("#left").append("<p id='scoreTitle'>Result</p>");
		$("#left").append("<p id='scoreWidth' class='height5vh'></p>");

		$("#right").append("<p id='pixelsToPercentsHeight'>Conversion of height: pixels to percents for height "+number4+"px</p>");
		$("#right").append("<p id='subTitlePixelsHeight'>It serve number (pixels)</p>");
		$("#right").append("<input type='number' id='numberPixelsValueHeight'>");
		$("#right").append("<button id='calculatePixelsHeight'>calculate</button>");
		$("#right").append("<p id='subTitlePercentsHeight'>It serve number (percents)</p>");
		$("#right").append("<input type='number' id='numberPercentsValueHeight'>");
		$("#right").append("<button id='calculatePercentsHeight'>calculate</button>");
		$("#right").append("<p id='scoreTitleHeight'>Result</p>");
		$("#right").append("<p id='scoreHeight' class='height5vh'></p>");
	}

	function polish(number3, number4){
		$("#left").append("<p id='pixelsToPercents'>Konwersja szerokości z pikseli na procenty dla szerokości " + number3 +"px</p>");
		$("#left").append("<p id='subTitlePixels'>Podaj liczbę (w pikselach)</p>");
		$("#left").append("<input type='number' id='numberPixelsValue'>");
		$("#left").append("<button id='calculatePixelsWidth'>oblicz</button>");
		$("#left").append("<p id='subTitlePercents'>Podaj liczbę (w procentach)</p>");
		$("#left").append("<input type='number' id='numberPercentsValue'>");
		$("#left").append("<button id='calculatePercentsWidth'>oblicz</button>");
		$("#left").append("<p id='scoreTitle'>Wynik to:</p>");
		$("#left").append("<p id='scoreWidth' class='height5vh'></p>");

		$("#right").append("<p id='pixelsToPercentsHeight'>Konwersja wysokości z pikseli na procenty dla wysokości "+number4+"px</p>");
		$("#right").append("<p id='subTitlePixelsHeight'>Podaj liczbę (w pikselach)</p>");
		$("#right").append("<input type='number' id='numberPixelsValueHeight'>");
		$("#right").append("<button id='calculatePixelsHeight'>oblicz</button>");
		$("#right").append("<p id='subTitlePercentsHeight'>Podaj liczbę (w procentach)</p>");
		$("#right").append("<input type='number' id='numberPercentsValueHeight'>");
		$("#right").append("<button id='calculatePercentsHeight'>oblicz</button>");
		$("#right").append("<p id='scoreTitleHeight'>Wynik to:</p>");
		$("#right").append("<p id='scoreHeight' class='height5vh'></p>");
	}

	$("#language").on("click", ()=>{
		if( $("#language").text() == "EN"){
			$("#right, #left").empty();
			$("#language").empty().append("PL");
			$(".title").empty().append("Coefficient of width and heights on percents");
		}else if( $("#language").text() == "PL"){
			$("#right, #left").empty();
			$("#language").empty().append("EN");
			$(".title").empty().append("Przelicznik szerokości i wysokości na procenty");
		}
	});

module.exports.xxx = function(number1, number2, number3, number4){
  $("#right, #left").empty();

	if($("#language").text() == "EN"){
	  polish(number3, number4);
//width part
		$("#calculatePixelsWidth").on("click", () =>{
			let widthPixels = $("#numberPixelsValue").val();
			$("#scoreWidth").text(widthPixels/number1+ "%");
		});

		$("#calculatePercentsWidth").on("click", ()=>{
			let widthPercents = $("#numberPercentsValue").val();
			$("#scoreWidth").text(widthPercents*number1 + "px");
		});

	//height part
		$("#calculatePixelsHeight").on("click", () =>{
			let heightPixels = $("#numberPixelsValueHeight").val();
			$("#scoreHeight").text(heightPixels/number2 + "%");
		});

		$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
		$("#calculatePercentsHeight").on("click", ()=>{
			let heightPercents = $("#numberPercentsValueHeight").val();
			$("#scoreHeight").text(heightPercents*number2 + "px");
		});
	}else if($("#language").text() == "PL"){
		english(number3, number4);

	//width part
		$("#calculatePixelsWidth").on("click", () =>{
			let widthPixels = $("#numberPixelsValue").val();
			$("#scoreWidth").text(widthPixels/number1+ "%");
		});

		$("#calculatePercentsWidth").on("click", ()=>{
			let widthPercents = $("#numberPercentsValue").val();
			$("#scoreWidth").text(widthPercents*number1 + "px");
		});

	//height part
		$("#calculatePixelsHeight").on("click", () =>{
			let heightPixels = $("#numberPixelsValueHeight").val();
			$("#scoreHeight").text(heightPixels/number2 + "%");
		});

		$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
		$("#calculatePercentsHeight").on("click", ()=>{
			let heightPercents = $("#numberPercentsValueHeight").val();
			$("#scoreHeight").text(heightPercents*number2 + "px");
		});
	}
}
  first.first();
  second.second();
  third.third();
  fourth.fourth();
  fifth.fifth();
});//koniec DOMContentLoaded
