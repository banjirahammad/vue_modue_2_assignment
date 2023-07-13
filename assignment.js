
// Exercise 1:
/*function destructureExampl(pobj, parr) {
    const { name, age, ...newObj } = pobj;
    const [a, , b, ...newArr] = parr;
    return { name: name, age: age };
}
const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
console.log(destructureExampl(obj, arr)); */



// Exercise 2:
/*function sumNumbers(...num)
{
    let total = 0;
    for (let i of num)
        total += i;
    return total;
}
console.log(sumNumbers(1, 2, 3, 4, 5));*/



// Exercise 3:
/*function createGreeting(name){
    return `Hello, ${name}! Welcome to our website.`
}
console.log(createGreeting("Banjir")); */



// Exercise 4:
/*function isEven(num){
    return num % 2==0 ? 'Even' : 'Odd';
}
console.log(isEven(6));*/



// Exercise 5:
/*const multiply = (a, b) => a * b;
console.log(multiply(5,10))*/



// Exercise 6:
/*function getLargestNumber(a, b) {
  return (a > b && a) || b;
}
console.log(getLargestNumber(0,10))*/



// Exercise 7:
/*function getAddressCity({ ...obj }) {
    const city = obj.city ? obj.city : 'Unknown';
    return city;
}
const address = { street: '123 Main St', country: 'USA' };
console.log(getAddressCity(address));*/



// Exercise 8:
/*const doubleNumbers = (arr) => arr.map((e) => e * 2);
console.log(doubleNumbers([1, 2, 3, 4, 5])); */



// Exercise 9:
/*function filterEvenNumbers(arr) {
    const newArray = arr.filter((n) => n % 2===0);
    return newArray;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5]));*/



// Exercise 10:
/*const sumArray = (arr) => arr.reduce((t, n) => t + n);
console.log(sumArray([1, 2, 4, 5, 6]));*/




// Exercise 11:
/*function sortNumbers(arr) {
    const sortArray = arr.sort((a,b)=>a-b);
    return sortArray;
}
console.log(sortNumbers([1,2,6,8,5]));*/







