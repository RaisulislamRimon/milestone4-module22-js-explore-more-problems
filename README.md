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
- - removing duplicates from array
- - console.log([...new Set(allFriends)]);

- 22-2 Get part of an array and insert elements using slice, splice

- - slice (will not change the original array)

    ![image](https://user-images.githubusercontent.com/51745662/183359200-cd68dbb3-aabe-4dab-ab28-80010502f099.png)

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

- - splice (will change the original array)

![image](https://user-images.githubusercontent.com/51745662/183361379-47d3d644-9f20-4227-8cc1-c74585ce4f57.png)

- 22-3 Remove duplicate items from an array
- - let chars = ['A', 'B', 'A', 'C', 'B'];
- - let uniqueChars = [...new Set(chars)];
- - console.log(uniqueChars);

- 22-4 Write foo, bar, foobar if divisible by 3 or 5 or both
- - show output from 1-50
- - if the number is divisible by 3 then instead of the number show 'foo'
- - if the number is divisible by 5 then instead of the number show 'bar'
- - if the number is divisible by both 3 and 5 then instead of the number show 'foobar'

- 22-5 Use add and multiplication to calculate wood requirements
- 22-6 Find the cheapest phone from an array of phone objects
- -
