'use strict';

class Node{
  constructor(list, data, priority) {
  	this.list = list;
  	this.data = data;
  	this.next = next;
  	this.prev = prev;
  	this.priority = priority;
  }
}

class Dequeue {
	constructor() {
		this.last = last;
		this.first = first;
	}

	put (data) {
		const element = new Node(this, data);
		if(!this.first) {
			this.first = element;
			this.last = element;
		} else {
			let swap = this.last.prev;
			this.last = element;
			swap.next = element;
			element.prev = swap;
			console.log('hello')
			if (element.priority > swap.priority) {
				this.last = swap;
				while(element.priority > swap.priority) {
					if(element.next) {
						let next = element.next;
						next.prev = swap;
					}
					if (swap.prev) {
						let prev = swap.prev;
						prev.next = element;
					} else {
						this.first = element;
					}
					element.prev = prev;
					element.next = swap;					
					swap.prev = element;
					swap.next = next;
					console.log('hello');
					swap = element.prev;
				} 
			}
		}
		return element;
	}
}

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };
const obj4 = { name: 'forth' };

let dequeue = new Dequeue();
dequeue.put(obj1);




console.log(dequeue);