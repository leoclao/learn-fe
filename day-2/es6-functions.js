function greet (name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

// function arrow
const greet1 = (name) => {
  return `Hello, ${name}!`;
}

const sayHi = (name) => `Hi, ${name}!`;

console.log(greet1('Alice')); // Output: Hello, Alice!
console.log(sayHi('Bob')); // Output: Hi, Bob!
