// Defines a node in the singly linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    #head;
    constructor() {
        this.#head = null;
    }

    /*
    method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addFirst(value) {
      this.#head = new Node(value, this.#head);
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    search(value) {
      let current = this.#head;
    //   let counter = 0;

      // while current
      // if current === value
      // return true
      // or else false
      while (current) {
        if (current.value === value) {
          return true 
        }
        // counter++;
        current = current.next;
      }

      return false;
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    findMax() {
      let max = 0;
    //   let counter = 0;
      let current = this.#head;

      if (this.#head === null) {
        return null;
      };

      while (current) {
        //if current.value > max
        // max = current.value
        if (current.value > max) {
          max = current.value;
        }
        // counter++;
        current = current.next;
      }

      return max;
    }
    /*
    method to return the min value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    findMin() {
      let min = Infinity;
    //   let counter = 0;
      let current = this.#head;

      if (this.#head === null) {
        return null;
      };

      while (current) {
        if (current.value < min) {
          min = current.value;
        }
        // counter++;
        current = current.next;
      }

      return min;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    length() {
      let count = 0;
      let current = this.#head;

      while (current) {
        count++;
        current = current.next;
      }

      return count;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    getAtIndex(index) {
      let counter = 0;
      let current = this.#head;

      while (current) {
        if (counter === index) {
          return current.value;
        } 
        counter++;
        current = current.next
      }

      return null;
    }

    /*
    method to print all the values in the linked list
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    visit() {
      let current = this.#head;

      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
    /*
    method to delete the first node found with specified value
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    delete(value) {
      let current = this.#head;
      let previous = null;

      if (current === null) { 
        return;
      };

      // while current !== null
      // if current.value === value
      // head === current.next
      // and break off first node
      // or else if it isn't the first node
      // then we'll traverse until we find the value we're looking for
      // previous will always === current
      // current === current.next

      while (current !== null) {
        if (current.value !== value) {
          previous = current;
          current = current.next;

          if (current.value === value) {
            previous.next = current.next;
            current = null;
            return;
          }

        } else {
          this.#head = current.next;
          current = null;
        }  
      }
    }

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    reverse() {
      let current = this.#head;
      let previous = null;
      let next = null;

      if (current === null || current.next === null) {
        return;
      }

      while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
      }

      this.#head = previous;
    }

    // Advanced Exercises

    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    findMiddleValue() {
        // throw new Error("This method hasn't been implemented yet!");
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: ?
    Space Complexity: ?
    */
    findNthFromEnd(n) {
        // throw new Error("This method hasn't been implemented yet!");
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: ?
    Space Complexity: ?
    */
    hasCycle() {
        // throw new Error("This method hasn't been implemented yet!");
    }


    // Additional Exercises 

    /*
    returns the value in the first node
    returns nil if the list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getFirst() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addLast(value) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getLast() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    method to insert a new node with specific data value, assuming the linked
    list is sorted in ascending order
    Time Complexity: ?
    Space Complexity: ?
    */
    insertAscending(value) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    Helper method for tests
    Creates a cycle in the linked list for testing purposes
    Assumes the linked list has at least one node
    */
    createCycle() {
        if (!this.#head) return; // don't do anything if the linked list is empty

        // navigate to the last node
        let current = this.#head;
        while (current.next) {
            current = current.next;
        }

        current.next = this.#head;
    }

    end

}

module.exports = LinkedList;
