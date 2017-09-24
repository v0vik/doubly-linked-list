const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data, this._tail, null);
        

        if (this.length === 0) {
            this._head = this._tail = node;
        } else {
            this._tail = this._tail.next = node;
        }

        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let node = this._head;
        while ( index > 0 ) {
            node = node.next;
            index--;
        }

        return node.data;
    }

    insertAt(index, data) {
        let node = this._head;
        while ( index > 0 ) {
            node = node.next;
            index--;
        }

        let insertedNode = new Node(data, node.prev, node);
        node = node.prev.next = insertedNode;
    }

    isEmpty() {
        return (this.length === 0);
    }

    clear() {
        this.length = 0;
        this._head = this._tail = new Node;
    }

    deleteAt(index) {
        let node = this._head;
        while ( index > 0 ) {
            node = node.next;
            index--;
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    reverse() {
        let temp;
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
    }

    indexOf(data) {
        let node = this._head;
        for (let i=0; i<this.length; i++) {
            if (node.data === data) return i;
            node = node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
