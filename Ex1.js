/** @format */

// Adding Two Numbers as Linked List

const nodeA1 = getNode(4);
const nodeA2 = getNode(3);
const nodeA3 = getNode(8);
nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
const nodeB1 = getNode(5);
const nodeB2 = getNode(6);
const nodeB3 = getNode(4);
nodeB1.next = nodeB2;
nodeB2.next = nodeB3;

function getSumOdLinkedList(listA, listB) {
  // defining and assigning variables

  let partA = nodeA1;
  let partB = nodeB1;
  let resListHead = null;
  let reslistPart = null;
  let carry = 0;

  while (partA && partB) {
    const sumOfParts = partA.value + partB.value + carry;
    carry = Math.floor(sumOfParts / 10);
    const node = getNode(sumOfParts % 10);
    console.log(carry)

    if (!resListHead) {
      resListHead = node;
      reslistPart = resListHead;
    } else {
      reslistPart.next = node;
      reslistPart = reslistPart.next;
    }

    partA = partA.next;
    partB = partB.next;
  }

  while (partA) {
    const sumOfParts = partA.value + carry;
    carry = sumOfParts >= 10 ? sumOfParts % 10 : 0;
    const node = getNode(sumOfParts >= 10 ? sumOfParts % 10 : sumOfParts);

    if (!resListHead) {
      resListHead = node;
      reslistPart = resListHead;
    } else {
      reslistPart.next = node;
      reslistPart = reslistPart.next;
    }
    partA = partA.next;
  }

  while (partB) {
    const sumOfParts = partB.value + carry;
    carry = sumOfParts >= 10 ? sumOfParts % 10 : 0;
    const node = getNode(sumOfParts >= 10 ? sumOfParts % 10 : sumOfParts);

    if (!resListHead) {
      resListHead = node;
      reslistPart = resListHead;
    } else {
      reslistPart.next = node;
      reslistPart = reslistPart.next;
    }
    partB = partB.next;
  }

  if (carry) {
    reslistPart.next = getNode(carry);
    reslistPart = reslistPart.next;
  }

  return resListHead;
}

const resListHeadd = getSumOdLinkedList(nodeA1, nodeB1);
console.log(resListHeadd);
printList(resListHeadd);

function getNode(value) {
  return {
    value,
    next: null,
  };
}

function printList(listHead) {
  let part = listHead;
  while (part) {
    console.log(part.value);
    part = part.next;
  }
}
