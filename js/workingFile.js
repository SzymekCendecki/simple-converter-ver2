let first=require("./screen800x600.js");
let second=require("./screen1024x768.js");
let third=require("./screen1280x768.js");
let fourth=require("./screen1360x768.js");
let fifth=require("./screen1366x768");

document.addEventListener("DOMContentLoaded", () => {

module.exports.xxx = function(number1, number2, number3, number4){
  $(".main").empty();

//width part
  $(".main").append("<p id='pixelsToPercents'>Konwersja szerokości z pikseli na procenty dla szerokości " + number3 +"px</p>");
  $(".main").append("<p id='subTitlePixels'>Podaj liczbę (w pikselach)</p>");
  $(".main").append("<input type='number' id='numberPixelsValue'>");
  $(".main").append("<button id='calculatePixelsWidth'>oblicz</button>");
  $(".main").append("<p id='subTitlePercents'>Podaj liczbę (w procentach)</p>");
  $(".main").append("<input type='number' id='numberPercentsValue'>");
  $(".main").append("<button id='calculatePercentsWidth'>oblicz</button>");
  $(".main").append("<p id='scoreTitle'>Wynik to:</p>");
  $(".main").append("<p id='scoreWidth' class='height5vh'></p>");

  $("#calculatePixelsWidth").on("click", () =>{
      let widthPixels = $("#numberPixelsValue").val();
      $("#scoreWidth").text(widthPixels/number1+ "%");
  });

  $("#calculatePercentsWidth").on("click", ()=>{
      let widthPercents = $("#numberPercentsValue").val();
      $("#scoreWidth").text(widthPercents*number1 + "px");
  });

//height part
$(".main").append("<p id='pixelsToPercentsHeight'>Konwersja wysokości z pikseli na procenty dla wysokości "+number4+"px</p>");
$(".main").append("<p id='subTitlePixelsHeight'>Podaj liczbę (w pikselach)</p>");
$(".main").append("<input type='number' id='numberPixelsValueHeight'>");
$(".main").append("<button id='calculatePixelsHeight'>oblicz</button>");
$(".main").append("<p id='subTitlePercentsHeight'>Podaj liczbę (w procentach)</p>");
$(".main").append("<input type='number' id='numberPercentsValueHeight'>");
$(".main").append("<button id='calculatePercentsHeight'>oblicz</button>");
$(".main").append("<p id='scoreTitle'>Wynik to:</p>");
$(".main").append("<p id='scoreHeight' class='height5vh'></p>");

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

  first.first();
  second.second();
  third.third();
  fourth.fourth();
  fifth.fifth();
});//koniec DOMContentLoaded
