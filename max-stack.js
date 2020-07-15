// Use your Stack class to implement a new class MaxStack with a method getMax() that returns the largest element in the stack.getMax() should not remove the item.

// Your stacks will contain only integers.

// You've already implemented this Stack class:
class Stack {
    constructor() {

        // Initialize an empty stack
        this.items = [];
    }

    // Push a new item onto the stack
    push(item) {
        this.items.push(item);
    }

    // Remove and return the last item
    pop() {

        // If the stack is empty, return null
        // (It would also be reasonable to throw an exception)
        if (!this.items.length) {
            return null;
        }
        return this.items.pop();
    }

    // Returns the last item without removing it
    peek() {
        if (!this.items.length) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}


//Pseudocode
// We'll want to extend the stack class. 
// we could do something similar to the peek check but reduce over the array and track max value found

class MaxStack extends Stack {
    constructor() {
        super();
    }

    getMax() {
        if (!this.items.length) {
            return null;
        }
        return this.items.reduce((max, item) => {
            if(item > max) {
                max = item;
            }
            return max;
        }, 0)
    }
}