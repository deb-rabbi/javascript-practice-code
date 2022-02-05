function mirzaRabbi(){
   console.log('tumi ki tea nite pochondho korba')
   console.log('hard work and get the success')
}
mirzaRabbi();

function bookPrice(taka){
   console.log('mem saheb boi tar dam hocche ' , taka);
}

bookPrice(150);


function bookPrice(taka){
   console.log('mem saheb boi tar dam hocche ' , taka);
   console.log('mama boi den')
   var perBookprice = 50;
   var boookQuantity = taka / perBookprice;
   return boookQuantity;
}
var money = 350;
var boookQuantity = bookPrice(money);
console.log('ai nen apnar boi ', boookQuantity);


devision

function rise(money , kg){
   console.log('amr kache money ache ', money , '|', 'per kg rise ar dam ', kg);
   var totalRise = money / kg;
   return totalRise;
}
var x = 750;
var xx = 50;
var totalRise = rise(x, xx);
console.log('apni rise paben ', totalRise ,' kg');

//sum

function sum( x ,y){
   var totalSum = x+y;
   return totalSum;
}
var a = 100;
var b = 150;
var totalSum = sum(a,b);
console.log('mut jug fol ', totalSum);
