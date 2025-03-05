
// Objetos avanzados

// - Prototipos y Herencia

// Prototipos

let person = {
    name: "Brais",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()

// Herencia

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "Perico"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()

// - Métodos estáticos y de instancia

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("javi", 31)
newPerson.greet()

// - Métodos avanzados

// assign

let personCore = { name: "javi" }
let personDetails = { age: 37, alias: "vvvvv" }

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))