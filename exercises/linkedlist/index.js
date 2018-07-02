// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        let firstNode = new Node(data);
        let tempNode = this.head;

        if (tempNode)
            firstNode.next = tempNode;

        this.head = firstNode;
    }

    size() {
        let currentNode = this.head;
        let size = 0;
        while(currentNode) {
            currentNode = currentNode.next;
            size++;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;
        while(currentNode) {
            if (!currentNode.next)
                return currentNode;
            currentNode = currentNode.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        let firstNode = this.head;
        this.head = this.head.next;
        return firstNode;
    }

    removeLast() {

        if(this.size() === 1) {
            let returnValue = this.head;
            this.head = null;
            return returnValue;
        }

        let currentNode = this.head;
        let previousNode = this.head;
        while(currentNode) {
            if (!currentNode.next){
                previousNode.next = null;
                return previousNode;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    insertLast(data) {
        let newNode = new Node(data);
        let last = this.getLast();

        if (last) {
            last.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    getAt(index) {
        if(!this.size())
            return null;

        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    removeAt(index) {

        if (!this.head) {
            return;
        }

        if (index >= this.size()) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;
        let previousNode = null;
        for(let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
    }

    insertAt(data, index) {

        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        if (index >= this.size()) {
            this.insertLast(data);
            return;
        }

        if (index === 0) {
            if (this.size > 0)  {
                newNode.next = this.head.next;
            } else {
                newNode.next = this.head;
            }
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        let previousNode = null;
        for(let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = newNode;
        newNode.next = currentNode;

    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

}

module.exports = { Node, LinkedList };
