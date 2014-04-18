var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  for ( var key in treeMethods ){
    newTree[key] = treeMethods[key];
  }

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var contains = false;
  if ( this.value === target ){
    contains = true;
  } else {
    if ( this.children ){
      for ( var i = 0; i < this.children.length; i++ ){
        if (!contains){
          contains = this.children[i].contains(target);
        }
      }
    }
  }
  return contains;
};

