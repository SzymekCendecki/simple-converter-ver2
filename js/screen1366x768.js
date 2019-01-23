//obsługa zdarzeń dla przycisku 800x600 pikseli
let workingFile=require("./workingFile.js");

module.exports.fifth = function(){

  $("#fifth").on("click", ()=>{
      workingFile.xxx(1366, 7.68, 1366, 768);
  });
}
