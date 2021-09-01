// problem-4
const numbers = [14, 21, 28, 35, 42];
const divided = numbers.map(num => num / 7);
console.log(divided);
//problem-5.1
numbers.forEach(num => console.log(num + 10));
//problem-5.2
const filter = numbers.filter(num => num > 30 );
console.log(filter);
//problem-5.3
const find = numbers.find(num => num === 28);
console.log(find);