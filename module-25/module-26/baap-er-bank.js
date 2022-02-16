//login 

document.getElementById('login-submit').addEventListener('click', function(){
   // console.log('tumi je kar tai too bolo ni')
   const userField = document.getElementById('user-mail');
   const userMail = userField.value ;

   const userPassField = document.getElementById('user-pass');
   const userPass = userPassField.value ; 
   // console.log(userPass);
   // console.log(userMail);
   if (userMail=='poi@gmil.com' && userPass == 'mirza'){
      // console.log('this is mirza bhai');
      window.location.href ="link-pager.html"
   }
   else{
      console.log('you set the wrong pass or usermail');
      
   }
})

// there we show you link-pager js 

document.getElementById('deposit-btn').addEventListener('click', function(){
   console.log('this is the deposit button')
})
















