//obsługa zdarzeń dla przycisku 800x600 pikseli

module.exports.first = function(){

  let onePercent800 = 8;
  let onePercent600 = 6;

  $("#first").on("click", ()=>{
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

      $("#calculatePixelsWidth").on("click", () =>{
		      let widthPixels = $("#numberPixelsValue").val();
			    $("#scoreWidth").text(widthPixels/onePercent800 + "%");
	    });

      $("#calculatePercentsWidth").on("click", ()=>{
		      let widthPercents = $("#numberPercentsValue").val();
			    $("#scoreWidth").text(widthPercents*onePercent800 + "px");
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

    $("#calculatePixelsHeight").on("click", () =>{
		let heightPixels = $("#numberPixelsValueHeight").val();
			$("#scoreHeight").text(heightPixels/onePercent600 + "%");
	});

	$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsHeight").on("click", ()=>{
		let heightPercents = $("#numberPercentsValueHeight").val();
			$("#scoreHeight").text(heightPercents*onePercent600 + "px");
	});

  });
}
