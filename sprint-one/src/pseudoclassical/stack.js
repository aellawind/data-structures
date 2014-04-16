// capitalize fn name to indicate it is run with keyword new
// use the keyword new when instantiating your class
// use the keyword this in your constructor
// dont declare the instance explicitly or return it explicitly

var Stack = function () {

  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function () {
  this.stackSize && this.stackSize--;
  var item = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return item;
};

Stack.prototype.size = function () {
  return this.stackSize;
};

