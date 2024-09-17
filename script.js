const links = document.querySelector(".mobile-links");
const icons = document.querySelector('.icon');
var a =0;
icons.addEventListener("click",(e)=>{
    if(a==0){
        links.style.display = "flex";
        icons.innerHTML = `<i class="ri-close-large-line text-xl hover:cursor-pointer"></i>`;
        a=1;
        gsap.from('.mobile-links',{
            x:300,
            opacity:0,
            duration:1,
            ease:Power2
        
        
        })
    }
    else{
        gsap.from('.mobile-links',{
            x:0,
            opacity:0,
            duration:1,
            ease:Power2
        
        
        })
        links.style.display = "none";
        icons.innerHTML = `<i class="ri-menu-line text-xl hover:cursor-pointer"></i>`;
        a=0;
       
    }

})





