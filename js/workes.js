let works=document.querySelectorAll(".awesome-links ul li a");


works.forEach(function(item){
    item.onclick=function(e){
        e.preventDefault();
        works.forEach(function(it){
            it.classList.remove("pointer");
        })
    e.currentTarget.classList.add("pointer");
                      
                      
    }
})