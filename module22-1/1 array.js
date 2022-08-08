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
