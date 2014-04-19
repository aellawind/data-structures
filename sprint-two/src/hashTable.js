
// make your hashTable double in size as soon as 75 percent of the spaces have been filled.
// make sure the hashTable shrinks when space usage falls below 25 percent.

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._numValues = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // rehash function declaration
  var rehash = function(hTable){
    var temp = this._storage;
    console.log("TEEEEMP", temp);
    // console.log(temp);
    for (var j = 0; j< hTable._limit/2; j++) {
      if (hTable._storage.get(j)) {
        var tuplesArray = hTable._storage.get(j);
        temp.push(tuplesArray);
      }
    }

    // remove everything from the hash table
    // rehash using our temp array by readding each key value pair

  };



  // when we insert something, check to see if usage is 75%+
  // if it is, then we want to double the limit
  this._numValues++;
  if (this._numValues/this._limit > 0.75) {
    this._limit = this._limit * 2;
    rehash(this);
  }

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

