//problem-3.1
const number = () => 89;
const theNum = number();
console.log(theNum);
//problem-3.2
const divided = num => num/7;
const inputNum = divided(14);
console.log(inputNum);
//problem-3.3
const total = (num1, num2) => (num1 + num2) / 2;
const inputs = total(12, 23);
console.log(inputs);
//problem-3.4
const addingNum = (num1, num2) => {
    const first = num1 + 7;
    const second = num2 + 7;
    const sum = first + second;
    return sum;
}
const inputNums = addingNum(12, 13);
console.log(inputNums);