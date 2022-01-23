///slider 

let images=["images/Slider/01.jpg","images/Slider/02.jpg","images/Slider/03.jpg","images/Slider/10.jpg"];
let slide=document.querySelector(".back");


let index=0;

setInterval(function(){
    if (index<images.length){
        slide.setAttribute("src",images[index++]);
    }
    else{
        index=0;
        slide.setAttribute("src",images[index]);
    }
},3000);








