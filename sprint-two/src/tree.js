var makeTree = function(value,parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent || null;

  for ( var key in treeMethods ){
    newTree[key] = treeMethods[key];
  }

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value,this));

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

treeMethods.removeFromParent = function(target) {
  // remove this node from its parents' children array
  console.log("44 " + target.parent);
  var loc = target.parent.children.indexOf(target);
  target.parent.children.splice(loc,1);
  target.parent = null;
  console.log("45 " + target.parent);
  return target;

};

// parent property, which refers to the parent node or null when there is no node
// removeFromParent() method, which disassociates the tree with its parent (in both directions)

