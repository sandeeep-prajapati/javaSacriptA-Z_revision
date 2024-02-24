let items = [1, 10, 17, 18, 2, 7, 3, 19, 14, 5];
console.log(items.reverse())

console.log('----------------')
console.log(items.sort())

console.log('--------------------');
items.sort(function (a, b) {
    return a - b;
});
console.log(items);

items.sort(function (a, b) {
    return b - a;
});
console.log(items);


console.log('--------------------');
// can also do this
function compare(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
let items2 = [1, 10, 17, 18, 2, 7, 3, 19, 14, 5];
console.log(items2.sort(compare));

console.log('--------------------');

let friends = [
    {name: 'Bucky', age: 50},
    {name: 'Sally', age: 40},
    {name: 'Tommy', age: 70},
    {name: 'Wendy', age: 20},
    {name: 'Chris', age: 60}
];
function compaireAges(a,b){
    if(a.age<b.age){
        return -1
    }
    if(a.age>b.age){
        return 1;
    }
    return 0;
}
console.log(friends.sort(compaireAges))