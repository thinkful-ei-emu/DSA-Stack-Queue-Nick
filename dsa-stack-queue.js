class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(data){
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack){

  if(stack.top === null){
    console.log('Empty stack');
    return 'stack is empty';
  }

  //print the data of the top element in the stack
  // console.log(stack.top.data);
  return stack.top;
}

function isEmpty(stack){

  if(stack.top === null){
    return true;
  }
  else {
    return false;
  }
}

function display(stack){

  if(stack.top === null){
    console.log('Empty stack');
    return 'Empty stack';
  }

  let results = [];
  let currNode = stack.top;

  while(currNode !== null){
    // console.log(currNode);
    results.push(currNode.data);
    currNode = currNode.next;
  }

  console.log(results);
  return results;
}

function main(){

  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  

  

  // display(starTrek);

  // peek(starTrek);
}

main();

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // console.log(s[0]);
  
  const stringStack = new Stack();
  const backwardStack = new Stack();
  let result = false;
  
  for (let i = 0; i < s.length; i++){
    stringStack.push(s[i]);
  }

  for(let i = s.length -1; i >= 0; i--){
    backwardStack.push(s[i]);
  }

  while((stringStack.top !== null) && (backwardStack.top !== null)){
    if(stringStack.top.data === backwardStack.top.data){
      stringStack.top = stringStack.top.next;
      backwardStack.top = backwardStack.top.next;
      result = true;
    }
    else {
      return result = false;
    }
  }

  return result;
}

// console.log(is_palindrome('afaa'));

function parenMatch(str){

  const expStack = new Stack();
  let result = false;
  let currentParen = '';

  for (let i = str.length - 1; i >= 0; i--){
    expStack.push(str[i]);
  }

  let currNode = expStack.top;

  while(currNode !== null){
    if((currNode.data === ')') && (currentParen !== '(')){
      return result = false;
    }
    if(currNode.data === '('){
      currentParen = '(';
      result = true;
    }
    if((currNode.data === ')') && (currentParen === '(')){
      currentParen = ')';
      result = true;
    }
   
    currNode = currNode.next;
  }

  if(currentParen === '('){
    result = false;
  }

  return result;
}


let c = '(x) (y) ()';
let inc = '(x) y) ()';
let incTwo = ') () ()';

// console.log(parenMatch(c));


function sortStack(stack) {
  
  let tempStack = new Stack();
  
  while (stack.top !== null) {
    // console.log('TOP:',stack.top.data);
    let placeholder = stack.pop();
    // console.log(tempStack.top !== null);
    if(tempStack.top) {
      // console.log(tempStack.top.data, placeholder);
    }
    while (tempStack.top !== null && tempStack.top.data < placeholder) {
      stack.push(tempStack.pop());
      // console.log('INNER LOOP RUNS');
    }
    // console.log('ADDING TO TEMP:', placeholder);
    tempStack.push(placeholder);
  }
  display(tempStack);
  // console.log('TEMPSTACK', tempStack);
}

// const numStack = new Stack();

// numStack.push(5);
// numStack.push(1);
// numStack.push(6);
// numStack.push(9);

// sortStack(numStack);


class _Qnode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = new _Qnode(data);

    if (this.first === null){
      this.first = node;
    }

    if(this.last){
      this.last.next = node;
    }
    
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      console.log('empty queue');
      return 'Empty queue';
    }
    const node = this.first;
    this.first = this.first.next;
  
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }

}

function qPeek(q){

  if (q.first === null){
    console.log('empty queue');
    return;
  }

  return q.first.value;
}

const qIsEmpty = q => {
  let result = false;
  if (q.first === null){
    result = true;
  }

  return result;
};

const qDisplay = q => {
  let result = [];

  if (q.first === null){
    console.log('Queue is empty');
    return;
  }

  let currNode = q.first;
  while(currNode !== null){
    result.push(currNode.value);
    currNode = currNode.next;
  }

  console.log(result);
  return;
};


function qMain(){

  const starTrek = new Queue();

  starTrek.enqueue('kirk');
  starTrek.enqueue('spock');

  qDisplay(starTrek);
}

qMain();