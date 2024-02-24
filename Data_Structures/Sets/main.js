function Set(){
    let items = {}
    this.add = function(values){
        if(!this.has(values)){
            items[values] = values;
            return true
        }
        else {
            return false;
        }
    }
    this.delete = function(value){
        if(this.has(value)){
            delete items[value]
            return true
        }
        return false
    }
    this.has = function(value){
        return items.hasOwnProperty(value)
    }
    this.clear = function(){
        items = {};
    }
    this.size = function(){
        return Object.keys(items).length;
    }
    this.values = function(){
        let values = [];
        for(let i=0,keys = Object.keys(items);i<keys.length;i++){
            values.push(items[keys[i]]);
        }
        return values;
    }
}
let mark = new Set()
mark.add(1)
mark.add(2)
mark.add(3)
mark.add(4)
mark.add(66)
mark.add(42)
console.log(mark.size())
console.log(mark.values())
console.log(mark.delete(3))
console.log(mark.values())