var makeQueue = function() {
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.queueSize = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
    this.storage[this.queueSize] = value;
    this.queueSize++;
  };

queueMethods.dequeue = function(){
  var item = this.storage[0];
  this.queueSize && this.queueSize--;
  delete this.storage[0];

  for ( var i = 1; i < this.queueSize + 1; i++ ){
    this.storage[i-1] = this.storage[i];
  }

  return item;
};

queueMethods.size = function(){
  return this.queueSize;
};

