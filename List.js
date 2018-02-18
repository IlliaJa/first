'use strict';

class List {
  constructor() {
    this.last = null;
  }
  push(data) {
  	const element = new Node(this, data);
    const prev = this.last;
    element.prev = this.last;
    this.last = element;
    // element.prev.next = element;
    return element;
  }
  pop() {
  	this.last = this.last.prev;
  	this.last.prev.next = null;
  }
  [Symbol.iterator]() {
  	const element = this.first;
  	return {
  		сurrent: element,
  		next() {
  			 this.current = element;
  			 if (!element) {
  			 	return {
  				  value: null,
  				  done: true
  				};
  			} else {
  				return {
  					value: element.data,
  					done: false
  				};
  			}
  		}
  	};
  }
  lenght() {
  	let l = 0;
  	let a = {};
  	if (this.last != null) {
  		a = this.last;
  		l++;
  	}
  	while (a.prev != null) {
  	  a = a.prev;
  	  l++;
  	}
  	return l;
  }
  insert(index, data) {
  	let i = 0;
  	let element = this.last;
  	for (i; i < this.lenght() - index; i++) {
  	  element = element.prev;
  	}
    let prev = element.prev || null;
  	prev.next = data;
  	element.prev = data;
    data.next = element
    return element;
  }
  delete(index) {
    let i = 0;
    let element = this.last;
    for (i; i < this.lenght() - index; i++) {
      element = element.prev;
    }
    let prev = element.prev || null;
    let next = element.next || null;
    if(prev) prev.next = next;
    if(next) next.prev = prev;
    return element;
  }
}

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };
const obj4 = { name: 'forth' };

const list = new List();
list.push(obj1);
list.push(obj2);
list.push(obj4);
list.insert(3, obj3);
list.pop();
console.log(list)
// for (const element of list) {
//   console.log(element);
// }

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.next = null;
  this.prev = null;
}
