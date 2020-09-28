
//Gallery items filter
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portifolio-gallery").children;
for(let i=0; i<filterButtons.length; i++){
    console.log(filterButtons[i].addEventListener("click",function(){
        for(let x=0; x<filterButtons.length; x++){
            filterButtons[x].classList.remove("active")
            }
           this.classList.add("active");
           const target=this.getAttribute("data-target")
           for(let n=0; n<items.length; n++){
               items[n].style.display="none";
               if(target==items[n].getAttribute("data-id"))
               {
                items[n].style.display="block";
               }
               if(target=="all")
               {
                items[n].style.display="block";
               }
           }
         }))
}
//hide the clicked image in lightbox
const closelightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox ");
const lightboxImage=lightbox.querySelector("img")
//close light box image by clicking out side the area
lightbox.addEventListener("click",function(){
    if(event.target!=lightboxImage){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})
// End style for close light box image by clicking out side the area of image
closelightbox.addEventListener("click",function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

//whe we click to plus icon show lightbox
const gallery=document.querySelector(".portifolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");
galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src=element.querySelector("img").getAttribute("src")

    })
})
// Gallery sliders
const sliderContainer=document.querySelector(".testi-slider")
const slides=sliderContainer.children;
const containerWidth=sliderContainer.offsetWidth;
const margin=20;
let itemPerSlide=0;
let slideDots;
//Responsive
const responsive=[
    {breakPoint:{width:0, item:1}}, 
    {breakPoint:{width:991, item:2}},
]
function load(){
    for(let i=0; i<responsive.length; i++){
        if(window.innerWidth>responsive[i].breakPoint.width){
            itemPerSlide=responsive[i].breakPoint.item;
        }
    }
    start();
}
function start(){
       let totalWidth=0;
    for(let i=0; i<slides.length; i++){
        slides[i].style.width=(containerWidth/itemPerSlide)-margin+"px";
        slides[i].style.margin=margin/2+"px";
        totalWidth+=containerWidth/itemPerSlide;
    }
     sliderContainer.style.width=totalWidth+"px";
     slideDots=Math.ceil(slides.length/itemPerSlide);
  

    // dots for the slides
    for(let i=0; i<slideDots; i++){
        const div=document.createElement("div");
        div.id=i;
        div.setAttribute("onclick", "controlSlide(this)");
        if(i==0){
            div.classList.add("active");
        }
        document.querySelector(".slide-control").appendChild(div);
    }
}
let currentSlide=0;
let autoSlide=0;

function controlSlide(element){
    clearInterval(timer);
     timer=setInterval(autoPlay,5000);
     autoSlide=element.id;
    currentSlide=element.id;
    changeSlides(currentSlide)
}
function changeSlides(currentSlide){
    controlButton= document.querySelector(".slide-control").children;
   
    for(let i=0; i<controlButton.length; i++){
            controlButton[i].classList.remove("active");
    } 
        // console.log(currentSlide)
    controlButton[currentSlide].classList.add("active");
    sliderContainer.style.marginLeft=-(containerWidth*currentSlide)+"px";
}
//auutomatically slides images 
function autoPlay(){
    if(autoSlide==slideDots-1){
        autoSlide=0;
    }
    else{
        autoSlide++;
    }
    changeSlides(autoSlide);
}
let timer=setInterval(autoPlay,5000) ///5seconds
window.onload=load();

//fixing when scrolled auto hide navbar
window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;
    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}
// navbar links
//Nav links
const navbar=document.querySelector(".navbar");
      a=navbar.querySelectorAll("a");
      a.forEach(function(element){
          element.addEventListener("click",function(){
              for(let x=0;x<a.length;x++){
                  a[x].classList.remove("active")
              }
            this.classList.add("active")
            document.querySelector(".navbar").classList.toggle("show");
          })
        })

// Hum-burger response
const hamBurger=document.querySelector(".hamb-burger");
hamBurger.addEventListener("click", function(){
         document.querySelector(".navbar").classList.toggle("show");
})
   //if you want to close navbar clink to link 
