
const navbar= document.querySelector('#navbar');

const ham=document.querySelector('.ham');

 ham.addEventListener('click',showHide);

 function showHide(){

    navbar.classList.toggle('active');
 }
