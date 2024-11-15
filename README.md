# Circular Linked List
A Circular Linked List is a data structure where the last node connects back to the first node, forming a loop. This structure allows for continuous traversal without any interruptions and is useful for tasks like scheduling and playlist management.

## Features of Circular Linked List
Continuous navigation through the list. 

Useful in applications like:  
Scheduling tasks (e.g., CPU scheduling).  
Managing multimedia playlists. 

Node Structure->
A node in a circular linked list consists of:

Data: Holds the value of the node.
Pointer: Points to the next node in the list.
#### Example Node Declaration (JavaScript)
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```
### Operations on Circular Linked List

##### Creating a Circular Linked List
```javascript
// Create nodes
let first = new Node(2);
let second = new Node(3);
let last = new Node(4);

// Link nodes
first.next = second;
second.next = last;
last.next = first; // Forms the circular link
```
### Basic Operations


#### Insertion  
In an empty list  
At the beginning  
At the end  
At a specific position     


#### Deletion  
Deleting the first node  
Deleting a specific node  

#### Traversal  
Display all elements in the circular list.

Algorithms
```Insertion in an Empty List
Create a new node.
Point the new node to itself.
Set this node as the last node.
```
#### Example 
```javascript

function insertInEmptyList(last, data) {
    if (last !== null) return last;
    let newNode = new Node(data);
    newNode.next = newNode;
    return newNode;
}
```
### Insertion at the Beginning
Create a new node.  
Point the new node to the current head.  
Update the last node to point to the new node.   
#### Example 
```javascript
function insertAtBeginning(last, value) {
    const newNode = new Node(value);
    if (last === null) {
        newNode.next = newNode;
        return newNode;
    }
    newNode.next = last.next;
    last.next = newNode;
    return last;
}
```
### Insertion at the End
Create a new node.  
Point the new node to the current head.  
Update the last node’s pointer.  
Set the new node as the last node.  
#### Example 
```javascript

function insertEnd(tail, value) {
    let newNode = new Node(value);
    if (tail === null) {
        tail = newNode;
        newNode.next = newNode;
    } else {
        newNode.next = tail.next;
        tail.next = newNode;
        tail = newNode;
    }
    return tail;
}
```
### Insertion at a Specific Position
Traverse the list to find the desired position.  
Insert the new node.  
Update pointers accordingly.  
#### Example 
```javascript
function insertAtPosition(last, data, pos) {
    if (last === null && pos !== 1) {
        console.log("Invalid position!");
        return last;
    }
    let newNode = new Node(data);
    if (pos === 1) {
        newNode.next = last ? last.next : newNode;
        if (last) last.next = newNode;
        else last = newNode;
        return last;
    }
    let curr = last.next;
    for (let i = 1; i < pos - 1 && curr !== last; ++i) {
        curr = curr.next;
    }
    if (curr === last.next && pos > 1) {
        console.log("Invalid position!");
        return last;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    if (curr === last) last = newNode;
    return last;
}
```
### Deletion from Circular Linked List
Delete the First Node  
Update the last node to skip the current head.  
Remove the first node.  
#### Example 
```javascript
function deleteFirstNode(last) {
    if (last === null) {
        console.log("List is empty");
        return null;
    }
    let head = last.next;
    if (head === last) {
        return null; // Only one node
    }
    last.next = head.next;
    return last;
}
```
### Delete a Specific Node
Traverse the list to locate the node.  
Update pointers to bypass the node.  
Remove the node.  
#### Example  
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


function printList(last) {
    if (last === null) return;
    let head = last.next;
    do {
        console.log(head.data);
        head = head.next;
    } while (head !== last.next);
}

// Create a circular linked list
let first = new Node(2);
let second = new Node(3);
let third = new Node(4);

first.next = second;
second.next = third;
third.next = first;

let last = third;

// Insert a node
last = insertAtBeginning(last, 1);
printList(last);

// Delete a node
last = deleteFirstNode(last);
printList(last);
```