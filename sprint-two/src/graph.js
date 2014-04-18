var Graph = function(){

  this.nodes = {};

};

Graph.prototype.addNode = function(newNode, toNode){

  if ( toNode ){
    this.nodes[newNode] = [toNode];
    this.nodes[toNode].push(newNode);
  } else if ( Object.keys(this.nodes).length === 1 ){
    var firstNode = Object.keys(this.nodes)[0];
    this.nodes[firstNode].push(newNode);
    this.nodes[newNode] = [firstNode];
  } else {
    this.nodes[newNode] = [];
  }


};

Graph.prototype.contains = function(node){
  if ( this.nodes.hasOwnProperty(node) ){
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  var edgeList = this.nodes[node];
  for ( var i = 0; i < edgeList.length; i++ ){
    var edgeNodeList = this.nodes[edgeList[i]];
    var indexNode = edgeNodeList.indexOf(node);
    edgeNodeList.splice(indexNode, 1);
  }

  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if ( this.nodes[fromNode].indexOf(toNode) !== -1 &&
       this.nodes[toNode].indexOf(fromNode) !== -1 ){
    return true;
  } else {
    return false;
  }

};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromIndex = this.nodes[toNode].indexOf(fromNode);
  var toIndex = this.nodes[fromNode].indexOf(toNode);
  this.nodes[toNode].splice(fromIndex,1);
  this.nodes[fromNode].splice(toIndex,1);

  // check both of these nodes and if their edgelists are empty, delete them
  if (this.nodes[fromNode].length === 0) {
    this.removeNode(fromNode);
  }
  if (this.nodes[toNode].length === 0 ) {
    this.removeNode(toNode);
  }
};








