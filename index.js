const bars=document.querySelector(".bars");
const bar_nav_lin=document.getElementById('bar_nav_lin') ;

bars.addEventListener("click",() =>{
    bar_nav_lin.classList.toggle('bar_nav_link_visible') ;
    
});