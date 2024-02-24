function Stack(){
    let items = []
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
mark.push(10)
mark.push(20)
mark.push(30)
mark.push(40)
mark.print()
console.log('------------------')
console.log(mark.peek())
console.log(mark.size())
console.log('+++++++++++++')
console.log(mark.isEmpty())
mark.clear()
console.log(mark.isEmpty())
