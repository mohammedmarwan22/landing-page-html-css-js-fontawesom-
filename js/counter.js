let count1=document.querySelector(".count1");
let count2=document.querySelector(".count2");
let count3=document.querySelector(".count3");
let count4=document.querySelector(".count4");

let initial=0;
let initial2=0;
let initial3=0;
let initial4=0;

setInterval(function(){
    //count1
    if (initial<=365){
       
        count1.innerHTML=initial+=5;
    }
    else{
        count1.innerHTML="365";
    }

    //count2

    if (initial2<73987){
       
        count2.innerHTML=initial2+=300;
    }
    else{
        count2.innerHTML="73987";
    }
    //count3
    if (initial3<297345){
       
        count3.innerHTML=initial3+=600;
    }
    else{
        count3.innerHTML="297345";
    }
    //count4
    if (initial4<9823662){
       
        count4.innerHTML=initial4+=20000        ;
    }
    else{
        count4.innerHTML="9823662";
    }
},0)














