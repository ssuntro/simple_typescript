// microsoft 
// ts build on top js - static typing, code completioon, refactoring, shorthand notations
// static type - know type in compile time - C++,c+, java
// dynamic type = python, js, ruby. determine type at runtime and can be change. heard to utilise the mem and avoid misbehave and predict or optimise processing time.

// dynamic type.cons or ts pan point try to fix - too big edge cases to catch this bug. bug rate tends to higher than static type lang
// ts = js + type checking
// js = interpreter, ts = compiler
// web == various runtime env.

// ts.cons - browser undestand only js. so it need transpilation step to do(+1 step) + need discipline 
// js = simple projec, mediumt to large proje - ts


// ts.cons can catch a log mistake in compile time
//ts.primitive and custom type are ref type. memory management is so important and challenging na
let age: number = 20.5
if(age < 20) {
    console.log('ddd')
}
// age = 's'

// es5 is spec that browser will accept. JS is implementation
// ES2016 - depends on where you plan to run the JS

let sale = 123_456_789
let course: string = 'tt'
let is_published: boolean = true
const aa = 6
// aa = 7

let user: [number, string] = [1, '']
let user1: [number, string, number] = [1, '', 0] //more value per tuple less clear intension. consider using union type like custom type insead.
user1.push(1) //fun fact - gap. worth to explore


const small = 1

//PascalCase
const enum Size { Small = 0, Medium, Large = '' } //fun fact: const and !const impact its js file. const is more optimise code.
let mySize : Size = Size.Medium
console.log(mySize)


function calculateTax(income: number, taxYear: number = 2022): number {
    // if((taxYear || 2022) < 50_000) //default param as old js style
    if(taxYear < 50_000)
        return income * 1.2
    return income * 1.3
}

calculateTax(10_000) //funfact: js you can pass more or less than function signature defined.