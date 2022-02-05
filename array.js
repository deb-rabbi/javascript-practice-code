var friendsAge = [11, 13, 18, 20, 25];
var favouriteNayika = ['Mahi', 'opu', 'Sabana'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var totalVowels = vowels.length;
// console.log(vowels)
// console.log(friendsAge)
// console.log(vowels.length)
// console.log(totalVowels)

var friendsName = [ 'rabbi', 'asif', 'safayet', 'ovi', 'mahedi', 'tanvir'];
var oviIndex = friendsName.indexOf('ovi');
var tanvirIndex = friendsName.indexOf('tanvir');
// console.log(oviIndex)
// console.log(tanvirIndex)

var roll = [1, 5, 9, 11, 29, 46, 4, 7, 10, 16, 24, 60, 38, 50]
roll[5] = 55;
roll[9] = 55;
roll[12] = 55;
roll[7] = 55;
// console.log(roll.indexOf(46))
// console.log(roll.indexOf(38))
// console.log(roll.indexOf(78))
// console.log(roll)
// console.log(roll)

var friends = [ 'rabbi', 'asif', 'safayet'];
friends.push('ovi');
friends.push('mehedi');
friends.push('tanvir');
friends.pop();
friends.pop();
friends.pop();
friends.pop();
// console.log(friends);
var roller = [1, 5, 9, 11, 29, 46, 4, 7, 10];
roller.push(22);
roller.push(52);
roller.push(72);
roller.pop();
roller.pop();
roller.pop();
roller.pop();
roller.pop();
// console.log(roller);


// console.log(age > experience);
// console.log(age < experience);
// console.log(age == egu);
// console.log(age != experience);

// IF / ELSE 

// if (age < experience){
//    console.log("Tui ekta baper boro");
// }
// else {
//    console.log('tui ekta experience lok');
// }
// if (age == egu){
//    console.log("tor r amr egu soman");
// }
// else {
//    console.log('tor ceye amr egu beshi');
// }


var isBreackfast = true;
var ready = false;
var hasCar = false;

if ((isBreackfast == true && ready == false) || hasCar == true){
   console.log('taile akn cffice a jao');
}
else{
   console.log('basay bose thako')
}
console.log(6 >= 6);