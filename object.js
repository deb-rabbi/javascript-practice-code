// declear object
var laptop ={
   price:50000,
   display:15.6,
   color: 'silvar',
   prossesor : 'intel core i5',
   ram : '16gb',
   Storage : '1tb'
}
// console.log(laptop);
console.log(laptop.prossesor);
var laptopPrice = laptop.price;
console.log(laptopPrice);



laptop.price=7000;

var oldProssesor = 'g-store 11';

laptop.prossesor='ryzon 5';

laptop.prossesor= oldProssesor;

var newColor = 'color';
laptop["color"] = 'black';

console.log(laptop);
