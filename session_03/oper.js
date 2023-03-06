
// types of operators

// 1)Arthmetic operator
// -arthmetic operators are used to perform arthmetic numbers

console.log('Arthmetic operator')
// i)addition

var a=10
// var y=10+a
console.log('addition',10 + a)


// ii)subtraction

var a=10
// var y=10+a
console.log('subtraction',20 - a)

// iii)multiplication

var a=10
// var y=10+a
console.log('multiplication',10 * a)


// iv)exponentiation

var a=10
// var y=10+a
console.log('exponentiation',10 ** a)

// v)division
var a=10
// var y=10+a
console.log('division',10 / a)


// vi)modulus(division remainder)
var a=10
// var y=10+a
console.log('modulus(division remainder)',10 % a)


// vii)increment

var a=10
// var y=10+a
console.log('increment',10 + ++a)
// viii)decrement

var a=10
// var y=10+a

console.log('decrement',10 + --a)


// ii)Assignment operator

// Assignment operators assign values to variables


// i)equals to 
var a = 5
console.log('equals to a = 5 ',a)

// ii)addition equals to
var a=5
console.log('addition equals to',a+=10)

// iii)subtraction equals to
var a=5
console.log('subtraction equals to',a-=10)

// iv)multiplication equals to
var a=5
console.log('subtraction equals to',a*=10)

// v)division equals to
var a=5
console.log('subtraction equals to',a/=10)

// vi)modulus equals to
var a=5
var y=10
console.log('subtraction equals to',a%=y)

// vii)exponentiation equals to
var a=5
var y=10
console.log('exponentiation equals to',a**=y)

// iii)comparision operator

// 1)equals to 
var a=10
var b=20
console.log(a==b)


// 2)equal value and equal type
var a=10
let c=10
console.log(a===c)



// 3)not equals to
var a=20
var b='20'
console.log(a!==b)

// 4)greater than

var a=10
var b=20
console.log(a>b)

// 5)less than

var a=10
var b=20
console.log(a<b)

// 6)greater than equal to

var a=10
var b=20
console.log(a>=b)

// 7)less than equal to

var a=10
var b=20
console.log(a<=b)

// 6)greater than equal to

var a=10
var b=20
console.log(a>=b)

// 7) ternary operator
// ?:

// iv)logical operators

// && = logical and 

var d=10
var e=10

console.log(' logical and :',d>e && d==e)
// ||- logical or 

var d=5
var e=5

console.log('logical or ',d==5 || d<5)

// !-logical not
console.log('logical not ',!a)

// bitwise operator treat its operands as a set of 32-bit binary digits
// (0 and 1 -binary digits) and perform actions.this bitwise operator gives 
// output in decimal value 


// iv)bitwise operator

console.log(12 & 25)
// a=0101

console.log(01100 | 11001)
// ~
console.log(1 ^ 1)
// <<
console.log(1 << 8)

// >>
console.log(1 >> 8)
c=3
// >>>

let v= 30
let z= 2
let f= -10
result = v>>>z 
result1=z>>>f

console.log(result)
console.log(result1)

console.log('hi')
