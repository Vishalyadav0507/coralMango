// Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4]. The solution should be of the form: 

const a = [1, 3, 5, 2, 4] 
let result1 = a.filter((num) => num % 2 !== 0);
console.log(result1)

// Given an array const a = [1, 3, 5, 2, 4]generate an array result2 from a, which should be equal to [1, 9, 25, 4, 16]. The solution should be of the form: 

const result2 = a.map((num) => num ** 2);
console.log(result2)

// Given an array const a = [1, 3, 5, 2, 4]generate an array result3 from a, which should be equal to [1, 25, 16]. The solution should be of the form: 

const result3 = a.filter((num) => num % 2 !== 0).map((num) => num ** 2);
console.log(result3)