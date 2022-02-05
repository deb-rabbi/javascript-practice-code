// with swap 

var f = 8;
var s = 5;
console.log(f,s);
var temp=f;
f = s;
s = temp;
console.log(f,s);

// without swap destructing
var x = 15;
var y = 18;
console.log(x,y);
[x=y]=[y=x]
console.log(x,y);