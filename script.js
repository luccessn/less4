//1
let array1 = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`];
array1.splice(-2, 1, `strawbarry`);
console.log(array1);

//2
let info = `good day`;
let newstring = info.slice(5, 8);
console.log(newstring);

//3
let x = 0;
function fnc1() {
  return x;
}
let result = fnc1();
console.log(result);

//4
let array2 = [`5`, `25`, `89`, `120`, `36`];
array2.unshift(`javascript`, `python`);
array2.push(`html`, `css`);
console.log(array2); // [ 'javascript', 'python', '5', '25', '89', '120', '36', 'html', 'css' ]
//
array2.shift();
array2.pop();
console.log(array2); // [ 'python', '5', '25', '89', '120', '36', 'html' ]

//5
let fruits = [`orange`, `banana`, `kiwi`];
console.log(fruits); //[ 'fortoxali', 'banani', 'kivi' ]
fruits.push(`apple`, `pineapple`);
fruits.unshift(`watermelon`);
console.log(fruits); // [ 'watermelon', 'orange', 'banana', 'kiwi', 'apple', 'pineapple' ]
fruits.splice(2, 0, `mango`);
fruits.shift();
fruits.pop();
console.log(fruits);

//6
let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, `a`, `b`, `c`);
console.log(array3);

//7
let array7 = [15, 100, 25, 10, 36];
array7.splice(3, 1);
console.log(array7);

//8
let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, `three`);
console.log(array8);

//9
let array9 = [14, 150, "css", null, "javascript", 25];
let newArray9 = array9.map(function (item) {
  if (typeof item === `number`) {
    let item1 = item * 2;
    console.log(item1);
  } else if (typeof item === `string`) {
    let item2 = item.toUpperCase();
    console.log(item2);
  } else {
    console.log(item);
  }
});
console.log(newArray9);

//10
let array10 = [12, 25, 3, 6, 8, 14, 7, 23];
let newarray10 = array10.map((item) => item / 3);
console.log(newarray10);
