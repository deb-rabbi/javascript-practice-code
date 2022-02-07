// var s = 'babla';
// // console.log()
// console.log(s);

let namrs = [ 12,24,33,60,98,64,23,33,65,24,47,46,98,65,32,32,60];
let unique = [];
for(let i =0; i<namrs.length; i++){
   let elementy= namrs[i];
   if ( unique.indexOf(elementy) == -1){
      unique.push(elementy)
   }

}
// console.log(unique);

function removeDuplicate ( numberes){
   let uniqueNumber = [];
   for ( let i = 0; i < numberes.length; i++){
      var elementer = numberes[i];
      if ( uniqueNumber.indexOf(elementer) == -1){
         uniqueNumber.push(elementer);
      }
   }
   return uniqueNumber;
}
var removalBox =removeDuplicate([ 12,24,33,60,98,64,23,33,65,24,47,46,98,65,32,32,60]);
console.log(removalBox);







