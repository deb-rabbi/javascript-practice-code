// anaToVori

function anaToVori(ana){
   if ( typeof ana != "number"){
      return 'wrong number';
   }
   else if (ana <= 0 ){
      return 'enter more than 0';
   }
   const vori = ana/16;
   return vori;
} 
let convertAnaToVori = anaToVori(640);
console.log(convertAnaToVori);

//  pandaCost

function pandaCost (singgaraQuantity, somucaQuantity, jilapiQuantity){
   const perSinggaraPrice = 7;
   const perSomucaPrice = 10;
   const perJilapiPrice = 15;

   const totalSinggaraPrice = singgaraQuantity * perSinggaraPrice;
   const totalSomucaPrice = somucaQuantity * perSomucaPrice;
   const totalJilapiPrice = jilapiQuantity * perJilapiPrice;

   const totalPrice = totalSinggaraPrice + totalSomucaPrice + totalJilapiPrice;

   return totalPrice;
}
const avaragePrice = pandaCost(21,41,18);
console.log(avaragePrice);

// picnicBudget

function picnicBudget (people){
   const per100people = 5000;
   const over100people = 4000;
   const over200people = 3000;
   
   if (people <= 100){
      const total100cost = people * per100people;
      return total100cost;
   }
   else if (people <= 200){
      const for100people = per100people * 100;
      const restpeople = people - 100;
      const totalOver100people = restpeople * over100people;
      const total2ndCost = for100people + totalOver100people;
      return total2ndCost;
   }
   else {
      const for100people = per100people * 100;
      const totalOver100people = over100people * 100;
      const restpeople = people - 200;
      const totalOver200people = restpeople * over200people;
      const avaragePicnicCost = for100people + totalOver100people + totalOver200people;

      return avaragePicnicCost;
   }
}

const totalcollection = picnicBudget(900);
console.log(totalcollection);

// oddFriend

function oddFriend (friends){
   var firstOddFriend = '';
   for (let i = 0; i < friends.length ; i++){
      var checkfriend = friends[i];
      if (checkfriend.length % 2 == 1){
         firstOddFriend = checkfriend;
         break;
      }
   }
   return firstOddFriend;
}

const myOddFriend = oddFriend(['kalu', 'mahedi', 'rabbi', 'ovi', 'asif']);
console.log(myOddFriend);







