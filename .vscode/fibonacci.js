//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// ager duiti songkar jogful hobe ar poroborti songka 
// 0+1=1
// 1+1=2
// 1+2=3
// 2+3=5
// 3+5=8
// 5+8=13
// nth = (n-1) + (n-2)

// var fibo = [0,1]
// for (let i=2; 1<=12 ; i++){
//    fibo[i]= fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);

// var b=3;
// console.log(b);

// var fibo = [0 ,1];
// for( let i =2 ; i <= 12; i ++){
//    // console.log(i);
//    fibo[i]= fibo[i-1] + fibo[i-2];
//    console.log(fibo);
// }

function fibonacciNumber (fibo){
   let fibonacci = [ 0 , 1];
   for ( let i = 2 ; i < fibo; i ++){
      fibonacci[i]=fibonacci[i-1] + fibonacci[i-2];
   }
   return fibonacci;
}
const totalfibonacci = fibonacciNumber(9);
console.log(typeof totalfibonacci);







// var oddFriends = '';
// for (let i = 0 ; i <= oddFriend.length; i++){
//    var element = oddFriend[i];
//    if ( element.length % 2 == 1){
//       oddFriends = element;
//       break;
//    }
  
// }
// console.log(oddFriends);