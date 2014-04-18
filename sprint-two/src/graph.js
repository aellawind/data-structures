var Graph = function(){

  this.nodes = {};

};

Graph.prototype.addNode = function(newNode, toNode){

  // if ( toNode ){
  //   this.nodes[newNode] = [toNode];
  //   this.nodes[toNode] = this.nodes[toNode].push(newNode);
  // }
  this.nodes[newNode] = [];

};

Graph.prototype.contains = function(node){
  for ( var key in this.nodes ){
    if ( this.nodes.hasOwnProperty(node) ){
      return true;
    } else {
      return false;
    }
  }
};

Graph.prototype.removeNode = function(node){

};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};
