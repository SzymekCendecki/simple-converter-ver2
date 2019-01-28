//obsługa zdarzeń dla przycisku 800x600 pikseli
let workingFile=require("./workingFile.js");

module.exports.language = function(){

  $("#language").on("click", ()=>{
        if($("#language").text() == "EN"){
        $(".title").empty().append("Coefficient of width and heights on percents");
        $("#pixelsToPercents").empty().append("Conversion of width: pixels to percents for width 800px ");
        $("#subTitlePixels").empty().append("It serve number (pixels)");
        $("#subTitlePercents").empty().append("It serve number (percents)");
        $("#calculatePixelsWidth").empty().append("calculate");
        $("#calculatePercentsWidth").empty().append("calculate");
        $("#scoreTitle").empty().append("Result");

        $("#pixelsToPercentsHeight").empty().append("Conversion of height: pixels to percents for height 600px ");
        $("#subTitlePixelsHeight").empty().append("It serve number (pixels)");
        $("#subTitlePercentsHeight").empty().append("It serve number (percents)");
        $("#calculatePixelsHeight").empty().append("calculate");
        $("#calculatePercentsHeight").empty().append("calculate");
        $("#scoreTitleHeight").empty().append("Result");


        $("#language").empty().append("PL");
      }else if($("#language").text() == "PL"){
        $(".title").empty().append("Przelicznik szerokości i wysokości na procenty");

        $("#pixelsToPercents").empty().append("Conversion of width: pixels to percents for width 800px ");
        $("#subTitlePixels").empty().append("Podaj liczbę (w pikselach)");
        $("#subTitlePercents").empty().append("Podaj liczbę (w procentach)");
        $("#calculatePixelsWidth").empty().append("oblicz");
        $("#calculatePercentsWidth").empty().append("Oblicz");
        $("#scoreTitle").empty().append("Wynik to:");

        $("#pixelsToPercentsHeight").empty().append("Kowersja wysokości z pikseli na procenty dla wysokości 600px");
        $("#subTitlePixelsHeight").empty().append("Podaj liczbę (w pikselach)");
        $("#subTitlePercentsHeight").empty().append("Podaj liczbę (w procentach)");
        $("#calculatePixelsHeight").empty().append("oblicz");
        $("#calculatePercentsHeight").empty().append("oblicz");
        $("#scoreTitleHeight").empty().append("Wynik to:");
        $("#language").empty().append("EN");
      }
  });
}
