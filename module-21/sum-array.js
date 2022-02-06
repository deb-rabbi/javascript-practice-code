// var sum = [62,2,01,73,62,51,26,28,35,26,24,27];
// for(i=0; i<=sum.length; i++){
// //    const element = sum[i];
//    console.log(element);
// }

function numbers(array){
   sum = 0;
   for(let i=0; i<array.length; i++){
      const element = array[i]
      sum=element+sum;
   }
   return sum;
}
// var sumOfArray = numbers([62,2,01,73,62,51,26,28,35])
// console.log(sumOfArray);

function numbers(array){
   sum = 0;
   i=0;
   while(i<array.length){
      const element = array[i]
      sum=element+sum;
      i++;
   }
   return sum;
}
var sumOfArray = numbers([62,2,01,73,62,51,26,28,35,200])
console.log('total array ar jog fol holo :',sumOfArray)

