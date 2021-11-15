'use strict'


//Make Navbar transparent it is on the top
const navbar=document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu=document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target=event.target;
    const link=target.dataset.link;
    if(link==null){
        return;
    }

    const scrollTo=document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth"})

})
//conTact Me
const contactMe=document.querySelector('#contactMe');
//1.
// contactMe.addEventListener('click',function(e){
//     e.preventDefault();
//     document.querySelector('#contact').scrollIntoView({behavior:"smooth"});
//     }
// )
//2.
contactMe.addEventListener('click',()=>{
    scrollIntoView('#contact')
//밑에 미리 세팅해둔 function을 불러와서 뒤에 selector만 붙혀줌
})

//Home Scroll Fade-out
const home=document.querySelector('.homeContainer');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
   // if(window.scrollY/homeHeight>1){
   //      // home.classList.add('home--fadeout');
   //     home.style.opacity='0'
   //     home.style.transition= 'all 2s ease-in-out'
   // } else if(window.scrollY/homeHeight===0){
   //     home.style.opacity='1';
   // }
   // else {
   //     home.style.opacity='1';
   // }
    home.style.opacity=1-window.scrollY/homeHeight;
})

//Arrow UP
const arrowTop=document.querySelector('.arrow_up');
const scrollTop=window.scrollY || document.documentElement.scrollTop;
arrowTop.addEventListener('click',()=>{
    scrollIntoView('#home');
}
)

document.addEventListener('scroll',()=>{
    if(window.scrollY>homeHeight/2){
        // arrowTop.style.visibility='visible';
        arrowTop.classList.add('visiable');
    }else{
        arrowTop.classList.remove('visiable');
    }
})


//scrollIntoVIew를 계속써야되니까 그냥 미리 세팅해둠
function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"})
}










