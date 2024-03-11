const nav=document.querySelector(".small-nav");
const bars=document.querySelector(".fa-bars");
const xmark=document.querySelector(".fa-xmark"),

bars.addEventListener('click',()=>{
    nav.style.display="block";
    xmark.style.display="block";
    bars.style.display="none";
})
xmark.addEventListener('click',()=>{
    nav.style.display="none";
    xmark.style.display="none";
    bars.style.display="block";
})

// ------------------------------------------------------------
const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.fa-arrow-left');
const arrowRight = document.querySelector('.fa-arrow-right');

let currentSlide = 0;

arrowLeft.addEventListener('click', () => {
    currentSlide--; 
    if(currentSlide===0){
      arrowLeft.style.display="none"; 
      arrowRight.style.display='block'
     }
    if (currentSlide <0) {
      currentSlide = slider.children.length - 1;
    }
    slider.style.transform = `translateX(${-currentSlide * 120}%`;
    
});
//-----------------------------------------------------------------------------------------------

arrowRight.addEventListener('click', () => {

  currentSlide++;
    if (currentSlide>0){
      arrowLeft.style.display="block";     
     }
    if(currentSlide===2){
      arrowRight.style.display="none"; 
     }

  // if (currentSlide === slider.children.length) {
  //   currentSlide = 0;
  // }

  slider.style.transform = `translateX(${-currentSlide * 120}%`;
  
});
