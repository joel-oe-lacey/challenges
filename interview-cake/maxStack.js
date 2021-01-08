// You want to be able to access the largest element in a stack. ↴

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

// Use your Stack class to implement a new class MaxStack with a method getMax() that returns the largest element in the stack. getMax() should not remove the item.

// Your stacks will contain only integers.

// Pseudocode 
// to keep true to the structure of a stack, we don't want to iterate over items like Math.max(...this.items)
// instead we want to fire a check each time we push or pop
// keep concurrent stack?
// this helps track duplication in stack nums also 

class MaxStack {
    constructor() {
        this.stack = new Stack();
        this.maxStack = new Stack();
    }
    
    push(newNum) {
        this.stack.push(newNum);
        if (this.maxesStack.peek() === null || newNum >= this.maxesStack.peek()) {
            this.maxesStack.push(newNum);
        }
    }

    pop() {
        const topNum = this.stack.pop();
        if (topNum === this.maxesStack.peek()) {
            this.maxesStack.pop();
        }
        return item;
    }

    getMax() {
        return this.maxesStack.peek();    
    }
}

const testStack = new MaxStack();
testStack.push(33)
testStack.push(2)
testStack.push(-86)
testStack.push(49)
testStack.push(13)

console.log(testStack.getMax())