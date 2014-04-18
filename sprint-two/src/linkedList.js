var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (!list.head) {
      var newNode = makeNode(value);
      list.head = newNode;
      list.tail = newNode;
    } else {
      var newNode = makeNode(value);
      var oldTail = list.tail;
      oldTail.next = newNode;
      list.tail = newNode;
      list.tail.previous = oldTail;
    }
  };

  list.removeHead = function(){
    if (list.head) {
      var headVal = list.head.value;
      var newHead = list.head.next;
      list.head = newHead;
      list.head.previous = null;
      return headVal;
    }
  };

  list.contains = function(target, node){
    // iterate over the list
    // look at each node object
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }
    return false;

  };

  list.addToHead = function(value){
    if ( !list.head ) {
      list.addToTail(value);
    } else {
      var oldHead = list.head;
      list.head = makeNode(value);
      list.head.next = oldHead;
      oldHead.previous = list.head;
    }

  };

//removeTail() method which removes the last node
//from the list and returns its value.
  list.removeTail = function () {
    if (list.tail) {
      var oldTail = list.tail;
      list.tail = oldTail.previous;
      list.tail.next = null;
      return oldTail.value;
    }

  };



  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
