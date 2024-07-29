// Primitive
// 7 Categories: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEamil; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 3452782738923n //nigInt

// Reference Type (Non primitive)

// Array, Objects, Functions


const heros = ["Shaktiman", "naagraj", "doga"] //array


let myobj ={
    name: "Aman",
    age: 20,
}       //object

const myFunction = function(){
    console.log("Hello Aman"); // function return type is object function
}