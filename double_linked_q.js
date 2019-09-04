class _Node{
  constructor(value,prev=null,next=null){
    this.value = value;
    this._prev = prev;
    this._next = next;
  }
}
module.exports = class dQueue{
  constructor(){
    this._first = null;
    this._last = null;
  }
  enqueue(value){
    let node = new _Node(value);
    if(!this._first){
      this._first = node;
    }
    if(this._last){
      this._last._next = node;
      node._prev = this._last;
    }
    this._last = node;
  }
  dequeue(){
    let node = this._first;

    this._first = this._first._next;
    if(this._first === null)
      this._last = null;
    else
      this._first._prev = null;
    

    return node;
  }
};