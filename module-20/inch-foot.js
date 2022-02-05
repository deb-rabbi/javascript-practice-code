// const inch = 60;
// const foot = inch/12;
// console.log(foot);

// how to convert inch to foot

function inchTofoot(inch){
   const foot = inch/12;
   return foot;

} 
let convertedFootIs = inchTofoot(120);
console.log(convertedFootIs);

let x = inchTofoot(168);
console.log(x);

let y = inchTofoot(240);
console.log(y);

let z = inchTofoot(288);
console.log(x);

let a = inchTofoot(108);
console.log(a);

// how to convert mile to kilomitter

function mileTokilomitter (mile){
   const kilomitter = mile * 1.60934;
   return kilomitter;
}
const myKilomitterIs = mileTokilomitter(10);
console.log('my kilomitter is', myKilomitterIs);

const theKillomitterIs = mileTokilomitter(15);
console.log('the kilomitter is', theKillomitterIs);



