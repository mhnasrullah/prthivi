import { useEffect } from "react";

export const directionScroll=()=>{
    let old = window.scrollY;
    let news ;
    window.addEventListener("scroll",()=>{
        news = window.scrollY
    })
        console.log(old)
        console.log(news);
    if(old > news){
        return "TOP"
    }else{
        return "DOWN"
    }

    
}