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

/* 
    ? Advanced Array Methods
*/

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachussets",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Arkansas",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesotta",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

console.log(states.length)

// for (state of states) {
    // console.log(state)
// }

/* 
    ? .forEach()
    * executes a callback function once for each item in an array
    * callback has three parameters:
        * value - the integer
        * index - of each iterable
        * array - the entire array .forEach was called upon
*/

// states.forEach((state, index, arr) => console.log(state, index, arr))

let startWithA = []

states.forEach(state => {
    state[0] === "A" ? startWithA.push(state) : null
})
console.log(startWithA)

// TODO: Reintroduce a duplicate state. Think algorithmically how you could find a duplicate.

/* 
    ? .map()
    * creates an array with elements resulting from the callback function
*/

let statesUpperCase = states.map(state => state.toUpperCase())
console.log(statesUpperCase)

/* 
    ? .filter()
    * creates a new array based on the filter function
    * only filtered items can be added to an array
    * cannot have (if/else) where else also gets added
*/

let weHateA = states.filter(state => !state.toLowerCase().includes("a"))
console.log(weHateA)

let grades = [22, 57, 98, 72, 54, 81, 84, 3]

let raisedGrades = []

grades.forEach(grade => {
    grade <= 90 ? raisedGrades.push(grade) : null
})

console.log(raisedGrades)

/* 
    ? .reduce()
    * calls callback on array elements with calculation of proceeding element
    * start value is initial value or [0] of an array on which it's called
*/

let numbers = [1, 2, 3, 4, 5, 6, 7]
let initialValue = 0
let sum = numbers.reduce((prevValue, currValue) => prevValue + currValue)
console.log(sum)