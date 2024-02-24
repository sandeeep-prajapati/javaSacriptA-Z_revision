function Stack(){
    let iteam = []
    this.clear = function(){
        items = []
    }
    this.isEmpty = function(){
        return items.length==0;
    }
    this.peek = function(){
        return items[items.length -1]
    }
    this.pop = function(){
        console.log(items.toString())
    }
    this.print = function(){
        console.log(items.toString())
    }
    this.push = function(element){
        items.push(element)
    }
    this.size = function(){
        return items.length
    }
}
let mark = new Stack();
console.log(mark.isEmpty())