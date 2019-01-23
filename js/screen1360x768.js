//obsługa zdarzeń dla przycisku 800x600 pikseli
let workingFile=require("./workingFile.js");

module.exports.fourth = function(){

  $("#fourth").on("click", ()=>{
      workingFile.xxx(1360, 7.68, 1360, 768);
  });
}
