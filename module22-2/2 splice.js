const friends = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(friends.length);

console.log(friends.slice(0, 3));
console.log(friends.length);

console.log(friends.splice(3, 6));
console.log(friends.length);

const friends1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(friends1.splice(3, 2));
const friendsSplice = friends1.splice(3, 2, 11, 12);
console.log(friendsSplice);
