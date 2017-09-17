function Unicorn(cornName, cornColor ) {
  this.name = cornName;
  this.color = cornColor || "white"
}

Unicorn.prototype.isWhite = function(){
//this is asking if the color is white
  if (this.color === "white"){
    //if it is white return true
    return true
  }
  //everything else but whire is false
  else{
    return false
  }
}
Unicorn.prototype.says = function(text){
  //this is the part   where the corn says shit
  return `**;* ${text} *;**`
}

module.exports = Unicorn;
