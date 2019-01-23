//obsługa zdarzeń dla przycisku 1024x768 pikseli
let workingFile=require("./workingFile.js");

module.exports.second = function(){

$("#second").on("click", ()=>{
      workingFile.xxx(10.24, 7.68, 1024, 768);
  });
}
