// const odd = 5;
// const remineder = odd % 2;
// if ( remineder==0){
//    console.log('this is a odd number')
// }
// else{
//    console.log('this is not a odd number')
// }

function oddNumber (odd){
   const remineder = odd%2;
   if ( remineder==0){
      return ('this is a odd number')
   }
   return ('this is not a odd number')
}
const myNumberIs = oddNumber(147);
console.log(myNumberIs);


const yourNumberIs = oddNumber(208);
console.log(yourNumberIs);


const hisNumberIs = oddNumber(591);
console.log(hisNumberIs);


const herNumberIs = oddNumber(902);
console.log(herNumberIs);



