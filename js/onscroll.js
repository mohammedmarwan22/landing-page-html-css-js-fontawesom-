
let ab=document.querySelector("#about")
// pricing effect 
// service-section animation

let progdesc=document.querySelectorAll(".progress-desc");
let progress=document.querySelectorAll(".progress-item");
let photo=document.querySelector(".aniphoto");
console.log(window.pageYOffset);
//for pricing animation
let priceItem =document.querySelectorAll(".price-item");
     
// contact animation
let input=document.querySelector(".first-line");




document.body.onscroll=function(){
    
    if(window.scrollY>=1250){
        
    for(i=0; i<progress.length;i++){
       
          progdesc[i].style.animationPlayState="running";
        progress[i].style.animationPlayState="running";
    }
        photo.style.animationPlayState="running";
  
   }
    
    
    //for pricining animation
    if(window.scrollY>=3300){
    for(i=0; i<priceItem.length;i++){
    
        priceItem[i].style.transform="scale(1)";
    }
}
    
    if(window.scrollY>=5500){
    
        input.style.transform="scale(1)";
        input.style.transform="translate(0,0)";
    
}
    
   
  }











     
