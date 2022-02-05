function leapYearOrNot (year){
      
      if((year % 4 == 0) && (year % 100 !=0) || (year % 400 ==0)){
         return ('this ia a leap year')
      }
      else{
         return('this is not a leap year')
      }
}
const myyear = leapYearOrNot(2023);
console.log(myyear);
const ouryear = leapYearOrNot(2024);
console.log(ouryear);
const hisyear = leapYearOrNot(2027);
console.log(hisyear);
const heryear = leapYearOrNot(2032);
console.log(heryear);






