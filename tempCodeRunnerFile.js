let array9 = [14, 150, "css", null, "javascript", 25];
let newArray9 = array9.map(function (item) {
  if (typeof item === `number`) {
    let item1 = item * 2;
    console.log(item1);
  } else if (typeof item === `string`) {
    let item2 = item.toUpperCase();
    console.log(item2);
  } else {
    let item3 = [14, 150, "css", null, "javascript", 25];
    console.log(item3);
  }
});
console.log(newArray9);