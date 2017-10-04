/*function hello(name) {
	console.log('Hello ' + name) 
}

hello('stepa'); */

//function<имя>(){}//объявление

/*function  sum(){
    let sum= 0;
	for( let i = 0; i < arguments.length; i++){
		sum+=arguments[i];
	}
	return sum;
}
console.log(sum(3,1,4,6,3,55,4,34)); */
/*function sayHi() {
  for (var i = 0; i < arguments.length; i++) {
    console.log( "Привет, " + arguments[i] );
  }
}

sayHi("Винни", "Пятачок")*/

//function  min(){
   // let sum= 0;
  //for( let i = 0; i < arguments.length; i++){
   // sum=arguments.min();
  //}
 // return sum;
//}

//min(2,1,5,55);
/*function  minimum(){
    let sum= 0;
    let arr=[0,0,0,0,0];
  for( let i = 0; i < arguments.length; i++){
    arr[i]=arguments[i];
      sum=Math.min.apply(Math, arr);
    console.log(arr);
  }

  return sum;
}
console.log(minimum(5,1,3,4,5,7,2));
*/
/*function genArr(){
	let a=Math.round((Math.random()*10));
	let arr=new Array(a);
	for(let i=0;i<arr.length;i++){
		arr[i]=Math.round((Math.random()*100));
	}
	
}
genArr(); */
/*let a = 'ubuntu';
function reversestr () {
	
	let Split = a.split('');
	let Reverse = Split.reverse();
	let result = Reverse.join('');
	
    console.log(result);
}

reversestr(a); */
let a = [5,2,1,3];
function reverseall () {
let b = a.reverse;	
    console.dir(b);
}

reverseall(a);
