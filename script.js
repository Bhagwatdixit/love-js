

//* primitive string
// let firstName = 'bhagwat'



//* object string
// let lastName = new String("Dixit")
// console.log(lastName);



// let date = new Date()
// let date2 = new Date
// console.log(date);


// let arr = [2, 3, 4, 5,];
//for adding in start use unshift
// arr.unshift("add")

//for adding in end use push
// arr.push("add")


//for adding in mid use splice 2 is index where you want to add, 0 is number that is use for deletion in array, and than add 
// arr.splice(2, 0, "add", 6)



//includes use for checking num present or not give ans in tru false
// console.log(arr.includes(6));


// let courses = [
//     {num : 1, name : " bhagwat"},
//     {num : 2, name : " rahul"}
    
// ]


// let course = courses.find((course) => 
//      course.name === "rahul")

// console.log(course);



//  let course = courses.find(function(course){
//     return course.name === "bhagwat"
// })
// console.log(course);

//! spread operator




// let num = [2 , 3, 4, 5]

// let num1 = [3, "hlo", 8, 10]

// let combine = [...num, 'ok ok', ...num1]

// console.log(combine);



//! iterating array

//*for of iteration 

// let num = [ 1, 2, 5, 6, 4]
// for(let value of num){
//     console.log(num);
// }

//* for each itraetion

// let num = [ 1, 2, 5, 6, 4]

// let num1 = num.forEach(element => {
//    console.log(num); 
// });


// let grocerry = [ 'apple', 'banana', 2, true]

// let store = grocerry.forEach(function(value){
//     console.log(grocerry);

// })


// let sports = ['cricket', 'ufc', 'f1']

// let best = sports.forEach((value)=>{
//     console.log(sports);
// })

//! joinning array

// let sports = ['cricket', 'ufc', 'f1']

// let store = sports.join();
// console.log(store);

//! sorting array

// let sports = ['cricket', 'ufc', 'f1']

// let num = [2, 3,99, 44, -2, -66, 22]

// let store = num.sort()

//* for reverse
//  let store = num.reverse()

// console.log(store);

//! filtring array

// let num = [2, 3,99, 44, -2, -66, 22]

// let store = num.filter(function(value){
//     return value >= 0
// })
// console.log(store);

// let sports = ['cricket', 'ufc', 'f1', 'volleyball', 'football']
// let minLength = 8

// let word = 'ball'
// let key = 'cric'

// let store = sports.filter(function(value){
//     return value.includes(word ) || value.includes(key)
// })
// console.log(store);

//! mapping array primitive

// let num = [ 2, 3, 4, 5]

// let store = num.map((value)=>{
//     return 'number' + value
// })
// console.log(store);

// let sports = ['cricket', 'ufc', 'f1', 'volleyball', 'football']

// let store = sports.map((value)=>{
//     return 'love' + ' '+ value
// })
// console.log(store);

//! mapping in object

// let num = [ 2, 3, -3, 5]

// let filtered = num.filter((value)=>{
//     return value >= 0
// })
// console.log(filtered);

// let mapping = filtered.map((value2)=>{
//     return {number : value2}
// })

// console.log(mapping);

//! combinig obj

