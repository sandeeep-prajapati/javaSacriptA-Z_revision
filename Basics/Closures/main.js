// With closures, we can access variables that would otherwise be out of scope

function Person(pname){
    var name = pname;
    this.getName = function(){
        return name;
    }
}
var mark = new Person("MrMark");
console.log(mark.name); // undefined (out of scope)
console.log(mark.getName())