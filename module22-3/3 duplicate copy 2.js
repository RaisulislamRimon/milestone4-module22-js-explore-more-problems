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
  const uniqueNames = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
    if (!uniqueNames.includes(name)) {
      uniqueNames.push(name);
    }
  }
  console.log(uniqueNames);
}
const uniqueNames = removeDuplicate(names);
