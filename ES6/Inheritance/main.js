class Person{
    constructor(name,age,weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    displayName(){
        console.log(this.name)
    }
    displayAge(){
        console.log(this.weight)
    }
    displayWeight(){
        console.log(this.weight)
    }
}

class Programmer extends Person{

    constructor(name, age, weight, language){
        super(name, age, weight);
        this.language = language;
    }
    displayLanguage(){
        console.log(this.language);
    }

}
let sally = new Person('Sandeep Prajapati', 21, 89);
sally.displayName();
sally.displayAge();
sally.displayWeight();

console.log('----------');

let bucky = new Programmer('Mark Zuckerbarge', 87, 250, 'JavaScript');
bucky.displayName();
bucky.displayLanguage();