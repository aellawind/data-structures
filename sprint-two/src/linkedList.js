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
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if (list.head) {
      var headVal = list.head.value;
      var newHead = list.head.next;
      list.head = newHead;
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

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
