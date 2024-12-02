const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

//1
numbers.forEach(item => {
    console.log(item)
})

//2
numbers.forEach(item => {
  console.log(Math.pow(item, 2))
})

//3
numbers.forEach(item => {
  if (item < 0) {
    console.log(item);
  }
});

//4
numbers.forEach(item => {
  console.log(Math.abs(item))
})

//5
numbers.forEach(item => {
  if (item % 2 === 0) {
    console.log(item)
  }
})

//6
numbers.forEach(item => {
  if (Math.abs(item) % 3 ===0) {
    console.log(item)
  }
})

//7
numbers.map(item => {
  const vzdalenost = Math.abs(item - 5)
  console.log(vzdalenost)
})

//8
numbers.map(item => {
  const vzdalenost = Math.abs(item - 5)
  console.log(Math.pow(vzdalenost, 2))
})

//9
let zaporna = [];
numbers.forEach(item => {
  if (item < 0) {
    zaporna.push(item)
  }
})
console.log(zaporna)
console.log(zaporna.length)

//10
let soucet = 0
numbers.forEach(item => {
  soucet += item
})
console.log(soucet)

//11
let soucet = 0
numbers.forEach(item => {
  soucet += item
})
prumer = soucet/numbers.length
console.log(prumer)

//12
let kladna = []
let soucet = 0

numbers.forEach(item => {
  if (item > 0) {
    kladna.push(item)
  }
})
kladna.forEach(item => {
  soucet += item
})
console.log(soucet)

