
function Dragon(name, rider, color){
  this.name = name,
  this.rider = rider,
  this.color = color;
  this.hungry = true;
  this.mealCount = 0;
};
Dragon.prototype.eat = function() {
  this.mealCount++;
  if (this.mealCount > 2){
  this.hungry = false;
}
};

module.exports = Dragon;





































//   this.name = name;
//   this.rider = rider;
//   this.color = color;
//   this.hungry = true;
//   this.ate = 0;
// }
// // Dragon.prototype.eat = function(){
// //   this.eat++;
// //   if (this.eat === 3){
// //     this.hungry = false;
// //   }
// // }
// Dragon.prototype.eat = function(){
//   this.ate++;
//   if (this.ate >= 3){
//   this.hungry = false;
//   }
// }
//
//
//
//
// module.exports = Dragon;
