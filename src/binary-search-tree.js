const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {


    constructor() {
        this.binaryRoot = null
    }

    root() {
        return this.binaryRoot;
    }

    addNode(node, data) {

        if (!node) {
            return new Node(data);
        }
        if (node.data === data) {
            return node;
        }

        node.data > data ? node.left = this.addNode(node.left, data) : node.right = this.addNode(node.right, data);
        return node;
    }


    add(data) {
        this.binaryRoot = this.addNode(this.binaryRoot, data);
    }

    search(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else return node;
    }

    has(data) {
        return this.search(this.binaryRoot, data) !== null;
    }

    find(data) {
        return this.search(this.binaryRoot, data);
    }

    remove(data) {

    }

    min() {

        let currentNode = this.binaryRoot;
        if (currentNode) {
            while (currentNode.left) {
                currentNode = currentNode.left;
            }
            return currentNode.data;
        } else {
            return null;
        }

    }

    max() {

        let currentNode = this.binaryRoot;
        if (currentNode) {
            while (currentNode.right) {
                currentNode = currentNode.right;
            }
            return currentNode.data;
        } else {
            return null;
        }
    }
}

module.exports = {
  BinarySearchTree
};