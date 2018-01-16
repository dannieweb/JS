// This is a project that I improved on by adding the .toFixed method to the femaleAgeAverage variable 
// since it came out to several decimal places and I just wanted a whole number.

var _ = require("lodash")

var employees = [
  { name: "John",   salary: 60000,  age: 27, gender: 'M' },
  { name: "Mary",   salary: 110000, age: 50, gender: 'F' },
  { name: "Susan",  salary: 50000,  age: 21, gender: 'F' },
  { name: "Greg",   salary: 100000, age: 45, gender: 'M' },
  { name: "Jerry",  salary: 90000,  age: 39, gender: 'M' },
  { name: "Barb",   salary: 95000,  age: 36, gender: 'F' }
]

//Assignment description:
// chain map, filter, and reduce functions together to find average ages of
// male employees and average ages of female employees

//Filter all male employees into a new array
var males =_.filter(employees, function(employee) {
  return employee.gender === 'M'
})
var maleAges =_.map(males, function(male) {
  return male.age
})
var maleAgeTotal = _.reduce(maleAges, function(acc, age) {
  return acc + age
})
var maleAgeAverage = maleAgeTotal / males.length

//.length is the length of the array of males, therefore the number of
//males total.

console.log("Average age of male employees: " + maleAgeAverage)

//Do the same thing for females now

var females =_.filter(employees, function(employee) {
  return employee.gender === 'F'
})
var femaleAges =_.map(females, function(female) {
  return female.age
})
var femaleAgeTotal =_.reduce(femaleAges, function(acc, age) {
  return acc + age
})
var femaleAgeAverage = femaleAgeTotal / females.length

console.log("Average age of female employees: " + femaleAgeAverage.toFixed(0))

//.toFixed(0) makes female averge of ages a whole number (it removed
//the fraction)
