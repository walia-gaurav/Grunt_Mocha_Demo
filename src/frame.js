var Frame = function(i, j){
  this._firstThrow = i;
  this._secondThrow = j;
}

Frame.prototype.isStrike = function(){
  return (this._firstThrow === 10);
}


Frame.prototype.sum = function(){
  return (this._firstThrow + this._secondThrow);
}

module.exports = Frame;
