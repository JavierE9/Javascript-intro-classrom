

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["aaaa", "bbbb", "ccccc", 37, true]
myArray2 = new Array("aaaa", "bbbbb", "ccccc", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Ajsk"
// myArray2[0] = "Pedro"
myArray2[1] = "javi"
myArray2[4] = "javi"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Pedro"
myArray[1] = "javi"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("javi")
myArray.push("Pedrojko")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("bbbb", "javi")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["bbbbb", "aaaa", "javiprofe", 17, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["1111", "2222", "3333", 32, true]

myArray.splice(1, 2, "Nueva")
console.log(myArray)