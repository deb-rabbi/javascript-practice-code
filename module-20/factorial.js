// factorial number ber koro ......


// 5! = 5*4*3*2*1


var factorial = 1;
for (x = 1 ; x <= 7 ; x++){
   console.log(x);
   
   factorial *= x;
}
console.log(factorial);


function factoNumber (facto){
   var factorial = 1;
   for ( var i = 1 ; i <= facto ; i++){
      factorial *= i ;
     
   }
   return factorial;
}
var cheakFactorial = 5 ;
var factorialValue = factoNumber(cheakFactorial)
console.log(factorialValue);

var cheakFactorial = 6 ;
var a = factoNumber(cheakFactorial)
console.log(a);

var cheakFactorial = 7 ;
var b = factoNumber(cheakFactorial)
console.log(b);

var cheakFactorial = 8 ;
var c = factoNumber(cheakFactorial)
console.log(c);


function factoNumber (facto){
   var factorial = 1;
   var i = 1 ;
   while ( i <= facto){
      factorial *= i ;
      i++;
   }
   return factorial;
}
var cheakFactorial = 5 ;
var factorialValue = factoNumber(cheakFactorial)
console.log(factorialValue);


// boro theke choto kore dekhalam r ki 

function factoNumber (facto){
   var factorial = 1;
   var i = facto ;
   while ( i >= 1){
      factorial *= i ;
      i--;
   }
   return factorial;
}
var cheakFactorial = 5 ;
var factorialValue = factoNumber(cheakFactorial)
console.log(factorialValue);