const navBr=document.getElementById("nv");

window.addEventListener('scroll',(e)=>{
        
    if (window.pageYOffset>0) {
        navBr.classList.add("scrolling");
    } else {
        navBr.classList.remove("scrolling");
    }


    /*let scroll=this.scrollY;
    if (window.pageYOffset<scroll) {
        mnlogo.style.fontSize="30px";
    }*/
});