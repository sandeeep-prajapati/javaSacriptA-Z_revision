function circleArea(r){
    var PI = 3.14
    return PI*r*r;
}
let circleArea1 = (r)=>{
    const PI = 3.14;
    return PI*r*r;
}
let circleArea2 = r => 3.14 * r * r;

console.log(circleArea(7));
console.log(circleArea1(7));
console.log(circleArea2(7));
