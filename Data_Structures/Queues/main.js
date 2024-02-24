function Queue(){
    let item = []
    this.enqueue = function(element){
        item.push(element);
    }
    this.dequeue = function(){
        return item.shift();
    }
    this.front = function(){
        return item[0]
    }
    this.isEmpty = function(){
        return item.length ==0
    }
    this.size = function(){
        return item.length
    }
    this.print = function(){
        console.log(item.toString())
    }
}
let mark = new Queue()
mark.enqueue('mrMark')
mark.enqueue('mrZuck')
mark.enqueue('mrSam')
mark.print()
console.log(mark.front())
console.log(mark.size())