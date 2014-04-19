var makeBinarySearchTree = function(value){

  // var newBST = Object.create(bstMethods);
  // newBST.topNode = makeNode(value);

  var newBST = makeBSTree(value);

  for (var key in bstMethods ) {
    newBST[key] = bstMethods[key];
  }

  return newBST;

};

var bstMethods = {};

// recursive
bstMethods.insert = function(value) {

  var checkLeftRight = function(value, node) {
    if (value > node.value) {
      if (node && node.right) {
        checkLeftRight(value,node.right);
      } else {
        //debugger;
        node.right = makeBSTree(value);
      }
    } else {
      if (node && node.left) {
        checkLeftRight(value,node.left);
      } else {
        node.left = makeBSTree(value);
      }
    }
  };

  checkLeftRight(value,this);

};

bstMethods.contains = function(value) {


  var found = false;

  var searchBSTree = function(value, node) {
    if ( found === true ) return found;
    if (value === node.value) {
      found = true;
    } else {
      if ( value > node.value && node.right ){
        searchBSTree(value, node.right);
      } else if (node.left) {
        searchBSTree(value, node.left);
      }
    }
  };

  searchBSTree(value, this);

  return found;

};

bstMethods.depthFirstLog = function(func) {

  var runDepthFirst = function(func, node) {
    func(node.value);
    if (node.left) {
      runDepthFirst(func, node.left);
    }
    if (node.right) {
      runDepthFirst(func, node.right);
    }
  };

  runDepthFirst(func,this);

};

// .breadthFirstLog() method for binarySearchTee
// logs the nodes contained in the tree using a breadth-first approach
bstMethods.breadthFirstLog = function() {
  var nodesArray = [this.value];
  var nextArray = [this];

  while ( nextArray.length > 0 ){

    if ( nextArray[0].left ){
      nodesArray.push(nextArray[0].left.value);
      nextArray.push(nextArray[0].left);
    }
    if ( nextArray[0].right ){
      nodesArray.push(nextArray[0].right.value);
      nextArray.push(nextArray[0].right);
    }

    //console.dir(nextArray);
    // nodesArray.push(nextArray[0].value);
    //console.log("nodesArray", nodesArray);
    nextArray.shift();
    // debugger;
  }

  return nodesArray;
};

var makeBSTree = function(value) {
  var tree = {};
  tree.left = null;
  tree.right = null;
  tree.value = value;

  return tree;
}
