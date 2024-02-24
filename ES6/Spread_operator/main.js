function addNumbers(a,b,c){
    console.log(a+b+c)
}
var num=[3,4,5]
addNumbers(...num);

var fastFood = ['burger','sandwich']
var food = ['sahi-paneer',...fastFood,'fried-rice']
console.log(food)