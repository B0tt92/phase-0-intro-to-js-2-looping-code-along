// Code your solutions in this file
 function writeCards( names, event ) {
   let thank_you = []
   for ( let i = 0; i < names.length; i++ ) {
      thank_you.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`) 
      
 }
 return thank_you
 
}


function countDown(number) {
  while (number >= 0) {
      console.log(number);
      number = number-1;
    }
}
