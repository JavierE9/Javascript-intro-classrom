
// Objetos

// Sintaxis

let person = {
    name: "javi",
    age: 37,
    alias: "gtsdf"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "JAVI prof"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "javi@profe.com"
person["age"] = 37

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "prodfe",
    age: 37,
    alias: "javi prof",
    walk: function () {
        console.log("El perro come.")
    }
}
person2.walk()

// Anidación de objetos

let person3 = {
    name: "pRDOR",
    age: 17,
    alias: "JKLO",
    walk: function () {
        console.log("La caminata.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()







