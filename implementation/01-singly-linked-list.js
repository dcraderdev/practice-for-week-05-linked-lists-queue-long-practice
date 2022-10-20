// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const node = new SinglyLinkedNode(val)
        this.length++
        if (!this.head) {
            this.head = node
            node.next = null
        } else {
            node.next = this.head
            this.head = node
        }
        return this
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

let linkedList = new SinglyLinkedList()

linkedList.addToHead('A');
linkedList.addToTail('B');
linkedList.addToTail('C');

linkedList.print();




console.log(linkedList);








module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}