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

// it's for 4.button id with onclick handler more simple way
const greenBtn = document.getElementById('make-green');
      //  console.log(greenBtn);
      greenBtn.onclick = function makeGreen (){
         document.body.style.backgroundColor = 'green';
      }

 //it's for 5. event on addEventListener handler
const slateBlueBtn = document.getElementById ('make-SlateBlue');
slateBlueBtn.addEventListener('click', makeSlateBlue);

function makeSlateBlue (){
   document.body.style.backgroundColor= 'SlateBlue';
}

