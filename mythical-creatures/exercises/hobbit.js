function Hobbit(name){
  this.name = name;
  this.disposition = "homebody";
  this.age = 0;
  this.adult = false;
  this.isShort = true;
  this.old = false;
  this.hasRing = false;

  if(name === "Frodo"){
  this.hasRing = true;
  }
  else {this.hasRing = false}
};
Hobbit.prototype.celebrateBirthday = function(){
  this.age++;

  //put the bigger number first

  if (this.age >= 101){
  this.old = true;
  }
  else if(this.age >= 33){
    this.adult = true;
  }
};






module.exports = Hobbit;
