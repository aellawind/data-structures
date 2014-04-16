var Queue = function() {

  this.storage = {};
  this.queueSize = 0;

};

Queue.prototype.enqueue = function(value){
    this.storage[this.queueSize] = value;
    this.queueSize++;
};

Queue.prototype.dequeue = function(){
  var item = this.storage[0];
  this.queueSize && this.queueSize--;
  delete this.storage[0];

  for ( var i = 1; i < this.queueSize + 1; i++ ){
    this.storage[i-1] = this.storage[i];
  }

  return item;
};

Queue.prototype.size = function(){
  return this.queueSize;
};
