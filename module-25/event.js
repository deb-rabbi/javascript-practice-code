// it's for 2.button onclick handler
function makeRed (){
   document.body.style.backgroundColor='red';
}

// it's for 3.button id with onclick handler
const blueBtn = document.getElementById('make-blue');
blueBtn.onclick = makeMeBlue; 
// console.log(blueBtn);
function makeMeBlue(){
   document.body.style.backgroundColor = 'blue';
}




