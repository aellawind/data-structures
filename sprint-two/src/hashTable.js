
// make your hashTable double in size as soon as 75 percent of the spaces have been filled.
// make sure the hashTable shrinks when space usage falls below 25 percent.

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._numValues = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i)) {
    var val = this._storage.get(i);
    var tuple = [k,v];
    val.push(tuple);
    this._numValues++;
  } else {
    var tuple = [k,v];
    this._storage.set(i, [tuple]);
    this._numValues++;
  }

  if (this._numValues/this._limit > 0.75) {
    this.resize('up');
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArrays = this._storage.get(i);
  if ( tupleArrays ){
    for ( var i = 0; i < tupleArrays.length; i++ ){
      if ( tupleArrays[i] === null ){
        return null;
      } else if ( tupleArrays[i][0] === k ){
        return tupleArrays[i][1];
      }
    }
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var listLoc = getIndexBelowMaxForKey(k, this._limit);
  // listLoc is the hash for what we're looking for
  // i is the index of the list
  // v represents the array of tuples at that index
  //

  var that = this;
  this._storage.each(function(v, i, theList) {
    if ( listLoc === i ) {
      var tuplesArray = theList[i];
      for (var j = 0 ; j < tuplesArray.length; j++ ) {
        if (tuplesArray[j][0] === k) {
          tuplesArray[j] = null;
          that._numValues--;
        }
      }
    }
  });

  if (this._numValues/this._limit < 0.25) {
    this.resize('down');
  }
};

HashTable.prototype.resize = function(direction) {

  var that = this;
  var temp = this._storage;

  if ( direction === 'up' ) {
    this._limit = this._limit * 2;
  } else {
    this._limit = this._limit/2;
  }

  this._storage = makeLimitedArray(this._limit);
  this._numValues = 0;

  temp.each(function(value, index, storage){
    if(value){
      for(var i=0; i<value.length; i++){
        if ( value[i] ){
          that.insert(value[i][0], value[i][1]);
        }
      }
    }
  });

};






