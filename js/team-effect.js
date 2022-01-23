let points=document.querySelectorAll(".circle");
let teamSlide=document.querySelectorAll(".team-slide");

points.forEach(function (point){
    point.addEventListener("click",function(e){
        e.preventDefault();
      
        points.forEach(function(item){
            item.classList.remove("active-circle");
        })
        e.currentTarget.classList.add("active-circle");
        
        teamSlide.forEach(function(slide){
            slide.classList.remove("order");
        })
        teamSlide[e.currentTarget.getAttribute("id")].classList.add("order");
    })
})

///slides  
let i=0;
setInterval(function(){
if (i<teamSlide.length){
    teamSlide.forEach(function(item){
        item.classList.remove("order")
    })
    points.forEach(function(item){
        item.classList.remove("active-circle");
    })
    points[i].classList.add("active-circle");
    teamSlide[i++].classList.add("order");
}
else{
    i=0;
}
},2500)
