$('.review-slider-wrapp').slick({
   dots:true,
   adaptiveHeight:true,
   appendArrows:$('.review-control'),
   appendDots:$('.review-control__dots'),
   responsive:[
       {
           breakpoint:768,
           settings:{
               arrows:false,
               dots:false,
               autoplay:true,
           }
       }
   ]

  });

  $('.portfolio-slider').slick({
    dots:true,
    adaptiveHeight:true,
    appendArrows:$('.portfolio-slider-control__arrows'),
    appendDots:$('.portfolio-slider-control__dots'),
    responsive:[
        {
            breakpoint:768,
            settings:{
                arrows:false,
                dots:false,
                autoplay:true,
            }
        }
    ]
 
   });
       
document.querySelector('.burger').onclick= function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}




