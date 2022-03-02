let imgCont = document.querySelector(".cards")
let count=0
let increase=14.7
let rightfunc =()=>{
    if(count>-60){
       count= count-increase
       imgCont.style.marginLeft = count+"vw";
       console.log(count)
       imgCont.style.transition = "ease-in-out 1s";
    }
 }
 let leftfunc =()=>{
    if(count<0){
     count= count+increase
     imgCont.style.marginLeft = count+"vw";
     imgCont.style.transition = "ease-in-out 1s";
     console.log(count)
    }
 }