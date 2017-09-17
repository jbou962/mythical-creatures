
function Rick(alterEgo,){
  this.alterEgo = alterEgo || "None";
  if (alterEgo === "Tiny Rick"){
    this.age = 14;
  }
  else{
    this.age = 60;
  }

};
Rick.prototype.catchPhrase = function(){
  if(this.alterEgo === "Tiny Rick"){
    return "Im Tiny Rick!";
  }
  else{
    return "Wubalubadubdub!"
  }
}

Rick.prototype.killVampire = function(){
  this.kills++;
  if(this.kills >= 3){
    this.age = 60;
    this.alterEgo = 'None';
  }
}
function Morty()

module.exports = {Rick};
