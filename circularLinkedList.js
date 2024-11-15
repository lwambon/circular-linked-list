/// insertion operation in circular linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// insert at the beginning of circular linked list
function insertAtBeginning(last, value) {
    const newNode = new Node(value);

    if (last === null) {
        newNode.next = newNode;
        return newNode;
    }

    // Insert the new node at the beginning
    newNode.next = last.next;
    last.next = newNode;

    return last;
}

//insert into an empty list
function insertInEmptyList(last, value) {
    const newNode = new Node(value)

    if (last === null) {
        newNode.next = newNode; 
        return newNode;
    }

    return last; 
}

//insert at the end of the circular linked list
function insertAtEnd(last, value) {
    const newNode = new Node(value);

    if (last === null) {
        return insertInEmptyList(last, value);
    }

    newNode.next = last.next;
    last.next = newNode;

    return newNode;
}

//insert at a specific position 
function insertAtPosition(last, value, position) {
    const newNode = new Node(value);


    if (position === 1) {
        if (last === null) {
            newNode.next = newNode;
            return newNode;
        }

        newNode.next = last.next;
        last.next = newNode;

        return last;
    }

    let curr = last.next;
    for (let i = 1; i < position - 1 && curr !== last; i++) {
        curr = curr.next;
    }

   
    newNode.next = curr.next;
    curr.next = newNode;

    if (curr === last) {
        last = newNode;
    }

    return last;
}

//print the circular linked list
function printList(last) {
    if (last === null) return;

    let head = last.next;
    do {
        console.log(head.data);
        head = head.next;
    } while (head !== last.next);

    console.log();
}

const first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4);
let last = first.next.next; 
last.next = first;

console.log("Original list: ");
printList(last);

// insert at beginning of list
last = insertAtBeginning(last, 5);
console.log("List after inserting 5 at the beginning: ");
printList(last);

// in an empty list
let emptyList = null;
emptyList = insertInEmptyList(emptyList, 6);
console.log("List after inserting 6 into an empty list: ");
printList(emptyList);

// Insert at the end
last = insertAtEnd(last, 7);
console.log("List after inserting 7 at the end: ");
printList(last);

// Insert at specific position 
last = insertAtPosition(last, 8, 3);
console.log("List after inserting 8 at position 3: ");
printList(last);


////delete functionality

// Delete the first node 
function deleteFirstNode(last) {
    if (last === null) {
        console.log("List is empty.");
        return null;
    }

    if (last.next === last) {
        return null;
    }

    last.next = last.next.next;

    return last;
}

// Delete a node at a specific position
function deleteAtPosition(last, position) {
    if (last === null) {
        console.log("List is empty.");
        return null;
    }

    if (position === 1) {
        return deleteFirstNode(last);
    }

    let curr = last.next;
    let prev = null;

    for (let i = 1; i < position && curr !== last.next; i++) {
        prev = curr;
        curr = curr.next;
    }

    if (curr === last.next) {
        console.log("Invalid position.");
        return last;
    }

    prev.next = curr.next;

    if (curr === last) {
        last = prev;
    }

    return last;
}
//displaying original list before deletion
console.log("Original list: ");
printList(last);

// Delete the first node
last = deleteFirstNode(last);
console.log("List after deleting the first node: ");
printList(last);

// Delete a node at position 3
last = deleteAtPosition(last, 3);
console.log("List after deleting node at position 3: ");
printList(last);

