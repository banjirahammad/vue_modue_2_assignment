/*Write a function that takes an object as an argument and destructures it to extract the 'name' and 'age' properties. Return a string in the format "My name is {name} and I am {age} years old."*/

function destractObj(myObj) {
    const { name, age } = myObj;
    console.log(`My name is ${name} and I am ${age} years old.`)
}

const obj = { name: 'Banjir Ahammad', country: 'Bangladesh', age: 23, city: 'Mirpur' }

destractObj(obj);
