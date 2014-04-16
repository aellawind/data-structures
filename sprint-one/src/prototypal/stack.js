// use Object.create with the object from step 2 to create instances
// do not use the keyword new

var makeStack = function() {
  var newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.stackSize = 0;
  return newStack;
};

// Create an object that holds the methods that will be shared by all class instances
// use 'this'
// use _.extend
// don't use new or prototype chain

var stackMethods = {};

stackMethods.push = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
};

stackMethods.pop = function(){
    this.stackSize && this.stackSize--;
    var item = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return item;
};

stackMethods.size = function(){
    return this.stackSize;
};

