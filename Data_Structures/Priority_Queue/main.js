function PriorityQueue(){
    let items = [];
    // priority queue items will also have a priority attribute
    function QueueElement(element,priority){
        this.element = element
        this.priority = priority
    }
    this.enqueue = function(element,priority){
        let queueElement = new QueueElement(element,priority)
        let added = false
        for(let i =0;i<items.length;i++){
            if(QueueElement.priority<items[i].priority){
                items.splice(i,0,QueueElement);
                added = true
                break
            }
        }
        if (!added) {
            items.push(queueElement);
        }
    }
    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    };
}

let buckysQueue = new PriorityQueue();
buckysQueue.enqueue("mrMark", 1);
buckysQueue.enqueue("mrZuck", 4);
buckysQueue.enqueue("mrSam", 2);
buckysQueue.enqueue("mrNadela", 1);
buckysQueue.print();