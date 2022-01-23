


//awesome slide

let awesomeIcons=document.querySelectorAll(".awesome-icon");
let awesomeDivs=document.querySelectorAll(".awesome-item");

awesomeIcons.forEach(function(item){
    item.onclick=function(e){
        e.preventDefault();
        
        
        awesomeIcons.forEach(function(it){
            //remove all class named icon-active from all awesomeicons
            it.classList.remove("icon-active");
            
            
        })
        //add the class named icon-active to the current awesomeicon  item
        e.currentTarget.classList.add("icon-active");
        awesomeDivs.forEach(function(item){
        //remove all class named order from all awesomeDivs
        item.classList.remove("order");
            
    })
        
      //add the class named icon-active to the currentawesomeiconitem
        awesomeDivs[item.getAttribute("id")].classList.add("order");    
    }
        
    
    
})

