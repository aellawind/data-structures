 var assert = chai.assert;

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should insert values at the correct location in the tree", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });

  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.depthFirstLog(func);
    assert.notStrictEqual(array, [5,2,1,3]);
    expect(JSON.stringify(array)).to.equal(JSON.stringify([5,2,1,3]));
  });

  it("should contain a breadthFirstMethod that returns an array", function () {
    expect(binarySearchTree.breadthFirstLog).to.be.a('function');
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.insert(21);
    binarySearchTree.insert(32);
    binarySearchTree.insert(8);
    binarySearchTree.insert(25);
    binarySearchTree.insert(15);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(30);
    var nodes = binarySearchTree.breadthFirstLog();
    expect(JSON.stringify(nodes)).to.equal(JSON.stringify([5,2,21,1,3,8,32,4,6,15,25,30]));

  });
});
