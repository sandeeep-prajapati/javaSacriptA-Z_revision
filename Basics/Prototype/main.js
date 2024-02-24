function Person(first, last){
    this.firstName = first;
    this.lastName = last;
}
Person.prototype.getName = function(){
    return this.firstName + " " + this.lastName;
}
var ironMan = new Person('tony', 'stark')
var idealPerson = new Person('MrMark','Zuckerberge')

console.log(ironMan.getName())
console.log(idealPerson.getName())