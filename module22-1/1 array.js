const namePerson = "Rimon";
const age = 21;
const isIndependent = true;
const student = { id: 101, class: 11, name: "RobinHood" };
const friends = [13, 14, 11, 22, 41];

function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof namePerson);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// array is not detected by typeof
// because it gives object
console.log(typeof friends);

// check array using Array.isArray()
// it is only detectable by Array.isArray() method
console.log(Array.isArray(friends));

console.log(Array.isArray(age));

console.log(typeof add);

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.includes(3));
console.log(arr.includes(7));
console.log(arr.includes(1));
console.log(arr.includes(1, 2));

if (arr.indexOf(1) !== -1) {
  console.log("1 is present in the array");
} else {
  console.log("1 is not present in the array");
}

if (arr.indexOf(10) !== -1) {
  console.log("10 is present in the array");
} else {
  console.log("10 is not present in the array");
}

// concat - merge two arrays - put two arrays together

const newFriensAge = [12, 13, 12, 14, 15, 16];
const friends1 = [13, 14, 11, 22, 41];
const allFriends = newFriensAge.concat(friends1);
console.log(allFriends);

// removing duplicates from array
console.log([...new Set(allFriends)]);
