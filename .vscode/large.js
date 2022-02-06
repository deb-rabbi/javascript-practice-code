// console.log('this is mirza');

var arrayList = [62,2,01,73,62,51,26,28,35,200];
// var largest = 0 ;
// for(i=0; i < arrayList.length; i++){
//    var arrayElement = arrayList[i];
//    if(arrayElement>largest){
//       largest=arrayElement
//    }
// }
// console.log(largest);

function numbering(arrays){
   var lar = 0;
   for ( i=0; i < arrays.length; i++){
      var elements = arrays[i];
      // console.log(elements);
      if( elements > lar){
         lar = elements
      }
   }
   return lar;

}

var largeNumber = numbering([62,2,01,73,62,51,89,28,108, 107,200]);
console.log('this is the large number of the array :', largeNumber);

//smallest number find from a array

function numberlist(array){
   var small = 62;
   for ( i=0; i < array.length; i++){
      var element = array[i];
      // console.log(element);
      if( element < small){
         small = element
      }
   }
   return small;

}

var smallestNumber = numberlist([62,2,01,73,62,51,89,28,108, 107,200]);
console.log('this is the smallest number of the array :', smallestNumber);
