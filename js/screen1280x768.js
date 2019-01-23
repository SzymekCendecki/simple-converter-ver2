//obsługa zdarzeń dla przycisku 800x600 pikseli
    let workingFile=require("./workingFile.js");

module.exports.third = function(){

  $("#third").on("click", ()=>{
    workingFile.xxx(12.80, 7.68, 1280, 768);
  });
}
