var a = 20;
var b=23
if(a>b){

}
// function maxNumber(a,b){
//    if(a>b){
//       return a;
//    }
//    else{
//       return b;
//    }
// }
// var findMaxNumbr = maxNumber(20,30);
// console.log('the largesst number :',findMaxNumbr);


function maxNumber(a,b,c){
   if((a>b) && (a>c)){
      return a;
   }
   else if((b>a) && (b>c)){
      return b;
   }
   else{
      return c;
   }
}
var findMaxNumbr = maxNumber(20,30,35);
console.log('the largesst number :',findMaxNumbr);

function minNumber(x,y,z){
   if((x<y) && (x<x)){
      return x;
   }
   else if((y<x) && (y<z)){
      return y;
   }
   else{
      return z;
   }
}
var findMinNumbr = minNumber(28,23,15);
console.log('the smallest number :',findMinNumbr);