var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // we want to set the value to an array of tuples
  // the keys being the original keys
  if (this._storage.get(i)) {
    var val = this._storage.get(i);
    var tuple = [k,v];
    val.push(tuple);
  } else {
    var tuple = [k,v];
    this._storage.set(i, [tuple]);
  }


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var tupleArrays = this._storage.get(i);
  console.log(tupleArrays);
  for ( var i = 0; i < tupleArrays.length; i++ ){
    if ( tupleArrays[i] === null ){
      return null;
    } else if ( tupleArrays[i][0] === k ){
      return tupleArrays[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var listLoc = getIndexBelowMaxForKey(k, this._limit);
  // listLoc is the hash for what we're looking for
  // i is the index of the list
  // v represents the array of tuples at that index
  this._storage.each(function(v, i, theList) {
    if ( listLoc === i ) {
      var tuplesArray = theList[i];
      for (var j = 0 ; j < tuplesArray.length; j++ ) {
        if (tuplesArray[j][0] === k) {
          tuplesArray[j] = null;
        }
      }
    }
  });

};

