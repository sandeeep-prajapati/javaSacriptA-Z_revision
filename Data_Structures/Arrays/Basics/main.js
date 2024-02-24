var food = ['paneer', 'poha','litti Chokha', 'paratha','Sahi - Paneer']
console.log(food[1])
console.log(food.length)

for(var i = 0;i<food.length;i++){
    console.log(food[i])
}
food.forEach(function(item,index){
    console.log(`the ${index+1}st is ${item}`)
})
console.log('----------');
food.push('paneer-paratha')
var lastItem = food.pop()
console.log(lastItem);
console.log(food);

console.log('#########################')
var firstItem = food.shift();
console.log(firstItem)
console.log(food)

console.log('$$$$$$$$$$$$$$$$')
var pos = 0
food = food.slice(pos,3);
console.log(food)

console.log('____________');
var number = [10,11,12,13,14];
console.log(number.toString())
console.log(number.join('~'))