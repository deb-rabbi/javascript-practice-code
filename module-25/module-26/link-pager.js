document.getElementById('deposit-btn').addEventListener('click', function (){
   // console.log('this is the deposite button');
   const depositeInput = document.getElementById('Deposit-amount');
   const depositAmount = parseFloat(depositeInput.value) ;
   // console.log(depositAmount);
   const totalDeposit = document.getElementById('added-money');
   const oldestTotalDeposit = parseFloat(totalDeposit.innerText)
   console.log(oldestTotalDeposit);
   const balance = document.getElementById('total-balance');
   const availableBalance = parseFloat(balance.innerText)
   console.log(availableBalance);

   const displayDeposit = oldestTotalDeposit + depositAmount ;
   totalDeposit.innerText = displayDeposit ;

   const newBalance = availableBalance + depositAmount ;
   balance.innerText = newBalance;
   depositeInput.value = '';
   
})





// document.getElementById('withdrow-btn').addEventListener('click', function (){
//    // console.log('this is the withdrawal button');
//    const withdrawInput = document.getElementById('withdraw-amount');
//    const withdrawAmount = withdrawInput.value ;
//    console.log(withdrawAmount);
//    const totalWithdraw = document.getElementById('withdrawal-money');
//    totalWithdraw.innerText = withdrawAmount ;
//    withdrawInput.value = '';
// })