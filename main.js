// part 1
// Q1

console.log("Part 1 -----------")
console.log("--------Q1")
let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10];

numbers.sort((a, b) => a - b);

console.log(numbers);

//Q2
console.log("--------Q2")


let squares = numbers.map(num => num * num);

console.log(squares);

//Q3
console.log("--------Q3")

let numberArr = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 26, 30];

let firstGreaterThan25 = numberArr.find(num => num > 25);

console.log(firstGreaterThan25);

//Q4
console.log("--------Q4")

let greaterThanFive = numbers.filter((num)=>{
    return num >5
})

console.log(greaterThanFive)

console.log("--------Q5")


console.log(numbers.includes(3))


console.log("--------Q6")

let evenNum = numbers.filter((num)=>{
    return num%2==0
})

console.log(evenNum)

console.log("--------Q7")

let midIndex = Math.floor(numbers.length / 2);

if (numbers.length % 2 === 0) {
    numbers.splice(midIndex - 1, 2);
} else {
    numbers.splice(midIndex, 1); 
}

console.log(numbers);

console.log("--------Q7")



let product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue,1);

console.log(product);


console.log("--------Q8")

let index = numbers.findIndex(num => num > 5);

console.log(index);


console.log("--------Q9")

console.log(numbers.pop())
console.log(numbers)



console.log("--------Q10")

numbers.push(100)
console.log(numbers)



// part 2
console.log("Part 2 ---------")


console.log("--------Q1")


let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];


let namesWithA = names.filter(name => name.toLowerCase().includes('a'));

console.log(namesWithA);


console.log("--------Q2")

let splits = names.join('-')
console.log(splits)


console.log("--------Q3")

let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];

let hasNameStartingWithB = fruits.some(fruit => fruit.startsWith('b'));
console.log(hasNameStartingWithB);

let newFruitsArray = fruits.slice(1, 4);
console.log(newFruitsArray); 

newFruitsArray.unshift('yellow');
console.log(newFruitsArray);

console.log("--------Q4")
let words = ['hello', 'world', 'javascript', 'array', 'function'];

let lengths = words.map(word => word.length);
console.log(lengths); 


let searchWord = 'javascript';
if (words.includes(searchWord)) {
    console.log(`${searchWord} existed in array`);
} else {
    console.log(`${searchWord} not existed in array.`);
}

