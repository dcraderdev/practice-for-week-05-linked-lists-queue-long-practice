// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);
        this.length++;


        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        
        } else {
            this.head = newNode;
            this.tail = newNode;

            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            // this.head.prev = null
           
        }


        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(data) {
        // There are bugs in this method! Fix them!!!
        // Add node of val to tail of linked list
        let node = new SinglyLinkedNode(data);
        
        if (!this.head) {
            this.addToHead(data)
        }
        else {
        this.length++
        let curr = this.head;

        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
        node.next = null
        
    }
        return this
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        let temp = this.head
        if(this.length === 0) {return undefined}
        if(this.head){
            this.head = this.head.next 
            this.length --
       }
       return temp
    }

    removeFromTail() {
        if(this.length === 0) {return undefined}
        if(this.length === 1) {
            let temp = this.head
            this.head = null
            this.length --
            return temp
        }
        else{
        this.length --
        let curr = this.head; 
        let beforeLast;
        while (curr.next) {
            beforeLast = curr
            curr = curr.next;
        }
        beforeLast.next = null
        return curr
        }
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if(this.length === 0) {return undefined}
        else {
            return this.head.value
        }
        // Write your hypothesis on the time complexity of this method here
    }

    print() {

        if(this.length === 0) {return undefined}

        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
          }
    }
        // Write your hypothesis on the time complexity of this method here
}


module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}