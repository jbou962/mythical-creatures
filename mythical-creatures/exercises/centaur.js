


































function Centaur(name, breed,){
  this.name = name,
  this.breed = breed,
  this.cranky = false,
  this.standing = true,
  this.counter = 0,
  this.awake = true;
  // this.snooze = "ZZZZ";
  this.layingDown = false;
  // this.woke = "NO!";
  this.noise = 'Clop clop clop clop!!!'



};
Centaur.prototype.shoot = function(){
  this.addCounter()
  if (this.cranky === false && this.standing === true){
  return 'Twang!!!'
}
  // else if (this.layingDown === true){
  //   return "NO!"
  // }
else {return "NO!"}
// if(this.standing === true){
//   return 'Twang!!!'
// }
// else{
//   return "NO!"
// }


};

Centaur.prototype.run = function(){
  // this.standing = true;
  this.counter++
  if (this.counter>2){
    this.cranky = true;
  }
  return 'Clop clop clop clop!!!'

  if(this.standing === true){
    return 'Twang!!!'
  }
  else{
    return "NO!"
  }
//should n0t shoot when laying down clop should be NO!

};

Centaur.prototype.addCounter = function () {
  this.counter++
  if (this.counter>2){
    this.cranky = true
  }
};

Centaur.prototype.sleep = function(){
    if (this.standing === true ){
      return "NO!"
    }
};


Centaur.prototype.layDown = function(){
  this.standing = false;
  this.layingDown = true;

};


Centaur.prototype.standUp = function(){
  this.standing = true;
  this.layingDown = false;
};



module.exports = Centaur;
