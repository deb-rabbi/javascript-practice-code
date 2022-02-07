// var b =6;
// console.log(b);

// var xyz = 'hollo! how are you ?'
// var reverse = '';
// for (let i = 0; i < xyz.length; i++){
//    var letter = xyz[i];
//    reverse= letter + reverse;
// }
// // console.log(reverse);

function stringReverse (texts){
   let reversee = '';
   for ( let i=0; i < texts.length; i++){
      let letter = texts[i];
      reversee = letter  + reversee
   }
   return reversee
}
let reversShow = stringReverse('hello! this is mirza rabbi');
console.log(reversShow);


//module 22-5
