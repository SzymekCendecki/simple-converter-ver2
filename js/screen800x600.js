//obsługa zdarzeń dla przycisku 800x600 pikseli
let workingFile=require("./workingFile.js");

module.exports.first = function(){
  $("#first").on("click", ()=>{
      workingFile.xxx(8, 6, 800, 600);
  });
}
