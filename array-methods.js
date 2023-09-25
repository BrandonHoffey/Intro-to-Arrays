/* 
    ? Array Methods
    * methods are functions that live inside of an object prototype
    * denoted by the . at the end of an object we're working on
    * Ex: someVariable.toLowerCase()
*/

let educationTeam = [
    ["Paul Niemczyk", "Rob VanArsdall", "Eric Winebrenner"],
    ["Mary Reagan", "Henry Dufour"],
    ["Lulu Browne", "Julia Assur"]
]

/* 
    ? .push()
    * adds an element to the end of an array
    * returns new length of an array
*/

let pushReturn = educationTeam.push(["Benny Boss"])
console.log("value", educationTeam, "return of .push()", pushReturn)

/* 
    ? .pop()
    * removes last array element
    * returns the last element
    * if array is empty it returns undefined
*/

let popReturn = educationTeam.pop()
console.log("value", educationTeam, "return of .pop()", popReturn)

/* 
    ? .unshift()
    * adds element to the beginning of an array
    * returns the length of an array
*/

let unshiftReturn = educationTeam.unshift("Upright Education")
console.log("value", educationTeam, "return of .unshift()", unshiftReturn)

/* 
    ? .shift()
    * removes the first element from an array
    * returns removed element
    * if array is empty, it returns undefined
*/

let shiftReturn = educationTeam.shift()
console.log("value", educationTeam, "return of .shift()", shiftReturn)

/* 
    ? .join()
    * created and returns str joining all arr elements using seperator
*/

console.log(educationTeam[0].join(" "))

/* 
    ? .flat()
    * new
    * recursively tears down nested arrays and groups values into single outermost array
*/

let flatEducation = educationTeam.flat()
console.log(educationTeam)

/* 
    ? .sort()
    & sorts array elements
    * default --> ascending
    * mutates original array
*/

let ascOrder = flatEducation.sort()
console.log(flatEducation)
console.log(educationTeam)

/* 
    ? Array Destructuring
    * [...]
    * a way to unpack values from arrays or properties from objects
*/

console.log(educationTeam)

let destructuredEducation = [...educationTeam[0], ...educationTeam[1], ...educationTeam[2]]
console.log(destructuredEducation)