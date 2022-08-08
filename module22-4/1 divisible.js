// show output from 1-50
// if the number is divisible by 3 then instead of the number show 'foo'
// if the number is divisible by 5 then instead of the number show 'bar'
// if the number is divisible by both 3 and 5 then instead of the number show 'foobar'

/* wrong
for (let i = 1; i <= 50; i++) {
  console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
    break;
  }
  if (i % 3 === 0) {
    // console.log(i);
    console.log("foo");
    break;
  }
  if (i % 5 === 0) {
    // console.log(i);
    console.log("bar");
    break;
  }
}
*/

// wrong solution
const numbers = [];
for (let i = 1; i <= 50; i++) {
  numbers.push(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
