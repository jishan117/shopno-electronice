

var slidepace = document.querySelector('.slidenav');

var opened = document.querySelector('.optionbutton');
var closedd = document.querySelector('.close');
var supfromslide = document.querySelector('#sp')




opened.addEventListener('click',function(){
   slidepace.classList.remove('slidenavactive');
});

closedd.addEventListener('click',function () {
    slidepace.classList.add('slidenavactive');
})
  
document.querySelector('.slidesupervaisorjs').addEventListener('click',function(){
    slidepace.classList.add('slidenavactive');
})

// inner staf start 
function blank (){
    alert('Phone number is not impoted')
}



// inner staf end 