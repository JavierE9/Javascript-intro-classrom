
// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["HJKS", "Pedro", "javi", 22, true, "javi@gmail.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://goog.com")

console.log(mySet)

mySet.delete("https://goog.com")

console.log(mySet)

console.log(mySet.delete("Reco"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("AJAVI"))
console.log(mySet.has("Reco"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("javi@gmail.com")
mySet.add("javi@gmail.com")
mySet.add("javi@gmail.com")
mySet.add("javi@gmail.com")
console.log(mySet)