'use strict'

/*
	let 只在块级作用域内有效
 */
/*{
  let a = 10
  console.log(a)
}
console.log(a)*/

/*
	此时i在函数执行时的环境中，所以都为10
 */
/*var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();*/


/*
	此时i在函数执行时的环境中，所以都为10
 */

/*var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[3]();*/

/*
	不存在变量提升
 */
/*typeof x; // ReferenceError
let x;*/

/*
	暂时性死区
 */
/*var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}*/

/*
	不允许重复声明
 */
/*// 报错
function () {
  let a = 10;
  var a = 1;
}

// 报错
function () {
  let a = 10;
  let a = 1;
}*/

/*
	块级作用域
 */
/*{
	{
		{
			{
				let insane = 'Hello World'
  			{
  				let insane = 'Hello World insane'
  				console.log(insane, 'inside')
  			}
  			console.log(insane, 'out')
			}
		}
	}
}
// IIFE写法
(function () {
  var tmp = '2';
  console.log('IIFE写法: ', tmp)
}());

// 块级作用域写法
{
  let tmp = '3';
  console.log('let 作用域：', tmp)
}
*/

/*
	es5的结果是inside， es6的结果是outside
 */
/*function f() {
	console.log('I am outside!');
}
(function () {
  if(false) {
    // 重复声明一次函数f
    function f() {
    	console.log('I am inside!');
  	}
  }

  f()
}())*/

/*
	const变量不可以被赋值
 */
const foo = {};
foo.prop = 123;
console.log(foo.prop)
// 123
foo = {} // TypeError: "foo" is read-only不起作用
const a = [];
a.push("Hello"); // 可执行
a.length = 0;    // 可执行
a = ["Dave"];    // 报错
