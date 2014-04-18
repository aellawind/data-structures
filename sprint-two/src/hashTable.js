var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
  console.log("inserting" + k);
  console.log(this._storage);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var listLoc = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(v, i, theList) {
    if ( listLoc === i ) {
      theList[i] = null;
    }
  });

};

