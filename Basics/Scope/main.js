function one(){
    var a = 5;
    console.log(a)
}
function two(){
    var a = 20;
    console.log(a)
}
one()
two()
function outer(){
    var a = 10;
    function inner(){
        var a =27;
        console.log(a+a);
    }
    inner();
    console.log(a);
}
outer()