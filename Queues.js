class Queues {
    constructor(){
        this.storage={}
        this.head=0
        this.tail=0
    }
    enqueue(element){
        this.storage[this.tail]=element
        this.tail++
    }
    dequeue(){
        let removed =this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}
const queues =new Queues()

queues.enqueue("bengalore")
queues.enqueue("Mumbai")
queues.enqueue("Pune")

console.log(queues.dequeue())