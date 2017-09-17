
function Pirate(name, job){
  this.name = name;
  this.job = "Scallywag";
  this.cursed = false;
  this.acts = 0;
  this.booty = 0;

//should be a cook IF passed into an argument

  if (this.job === "job"){
    return this.job = "Scallywag";
  }
  else{this.job = "cook"}


};

Pirate.prototype.commitHeinousAct = function(){
  this.acts++;
  if (this.acts >= 3){
    this.cursed = true;
  }
};
Pirate.prototype.robShip = function(){
  this.booty = 100;
  return "YAARRR!";
};


module.exports = Pirate;
