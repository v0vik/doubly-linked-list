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
        return this;
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

        node.data = data;
        return this;
    }

    isEmpty() {
        return (this.length === 0);
    }

    clear() {
        this.length = 0;
        this._head = this._tail = new Node;
        return this;
    }

    deleteAt(index) {
        if (this.length === 1) {
             return this.clear()
        };

        let node = this._head;

        while ( index > 0 ) {
            node = node.next;
            index--;
        }

        if (node.prev === null) {
            this._head = node.next;
            this._head.prev = null;
        } else if (node.next === null) {
            this._tail = node.prev;
            this._tail.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.length--;
        return this;
    }

    reverse() {
        let newList = new LinkedList();
        let node = this._tail;
        for (let i=0; i<this.length; i++) {
            newList.append(node.data);
            node = node.prev;
        }
        this._head = newList._head;
        this._tail = newList._tail;
        return this;
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
