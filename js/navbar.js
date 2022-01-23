//active class
let links=document.querySelectorAll(".nav-bar ul li a");


links.forEach(function(item){
    item.onclick=function(e){
        
        links.forEach(function(it){
            it.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    }
})

let linksBar=document.querySelectorAll("aside ul li a");
linksBar.forEach(function(item){
    item.onclick=function(e){
        
        linksBar.forEach(function(it){
            it.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    }
})


 
    //nav bar media query

    
    let bars =document.querySelector(".bars-icon");
let close=document.querySelector(".close-icon");

let nav=document.querySelector("aside");

 if(window.innerWidth<=900){
       
        bars.style.visibility="visible";
         close.style.visibility="hidden";
        nav.style.visibility="hidden";
    }
    
    else{
       nav.style.visibility="hidden";
    }

 bars.onclick=function(e){
    e.preventDefault();
    nav.style.visibility="visible";
    e.currentTarget.style.visibility="hidden";
    close.style.visibility="visible";
    
}

close.onclick=function(e){
    e.preventDefault();
    nav.style.visibility="hidden";
    e.currentTarget.style.visibility="hidden";
    bars.style.visibility="visible";
    
}

    


    
    
    
