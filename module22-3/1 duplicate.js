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
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
  }
  console.log([...new Set(names)]);
}

const uniqueNames = removeDuplicate(names);
