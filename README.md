# milestone4-module22-js-explore-more-problems

- 22-1 Module Introduction and isArray, includes, concat
- - const namePerson = "Rimon";
- - console.log(typeof namePerson);
- - const age = 21;
- - console.log(typeof age);
- - array is not detected by typeof, because it gives object
- - check array using Array.isArray()
- - it is only detectable by Array.isArray() method
- - const friends = [13, 14, 11, 22, 41];
- - console.log(Array.isArray(friends));
- - concat - merge two arrays - put two arrays together
- - const newFriensAge = [12, 13, 12, 14, 15, 16];
- - const friends1 = [13, 14, 11, 22, 41];
- - const allFriends = newFriensAge.concat(friends1);
- - console.log(allFriends);
- -removing duplicates from array
- - console.log([...new Set(allFriends)]);

- 22-2 Get part of an array and insert elements using slice, splice

- - slice
  <pre>
- -                   |         |
- -                   |         |
- - const friends = [ |1, 2, 3, | 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
- -                   |         |
- -                   |         |
- - const partial = friends.slice(0, 3);
- - console.log(partial); // [ 1, 2, 3 ]
- -                           |         |
- -                           |         |
- - const friends = [ 1, 2, 3,| 4, 5, 6,| 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
- -                           |         |
- -                           |         |
- - const partial2 = friends.slice(3, 6);
- - console.log(partial2); // [ 4, 5, 6 ]

</pre>
