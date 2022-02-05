// var x=0;
// while(x<10){
//    console.log(x);
//    x++;
//    if(x==7){
//       break;
//    }
// }

// var numbers =[21, 24, 32, 53, 27, 14, 18, 39, 90, 88, 102, 98, 54];

// for( var x = 0; x < numbers.length; x++){
//    var number = numbers[x];
//    console.log(number);
//    if(number > 80){
//       break;
//    }

// }
var numbers =[21, 24, 32, 53, 27, 14, 18, 39, 90, 88, 102, 98, 54];

for( var x = 0; x < numbers.length; x++){
   var number = numbers[x];
   if(number > 80){
      continue;
   }
   console.log(number);

}
