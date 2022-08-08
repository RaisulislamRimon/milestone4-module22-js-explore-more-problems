const names = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "ebul",
  "abul",
  "babul",
  "abul",
  "cabul",
  "dabul",
  "ebul",
  "babul",
  "abul",
];

function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
    if (!unique.includes(name)) {
      unique.push(name);
    }
  }
  // console.log(uniqueNames);
  return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
