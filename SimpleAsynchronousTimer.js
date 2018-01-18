// Creating a simple asynchronous timer from scratch project, with added notes

//this runs first
console.log("Before setTimeout")

//this waits 3 seconds to run
//Asynchronous function  waits (timer) while rest of program
//continues to execute in the meantime
setTimeout( function() {
  console.log("The function has been executed")
}, 3000)
//3000 argument is milliseconds until the callback is performed
//3 second delay in this case

//this runs second, immediately after Before setTimeout
console.log("After setTimeout")
