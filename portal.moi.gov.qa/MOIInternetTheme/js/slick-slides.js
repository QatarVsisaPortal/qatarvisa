$(document).ready(function(){
$('.slider1').slick({
        // dots: true,
		//rtl:true,
	accessibility:false,
		dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
		//prevArrow:'<button class="slick-prev slick-disabled" data-role="none" type="button" ></button>' ,
		arrows:true,
		prevArrow:'<button class="slick-prev slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Previous</span></button>' ,
		nextArrow:'<button class="slick-next slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Next</span></button>' ,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }

        },  {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1               
                
            }
        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1               
                
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1               
            }
        }]
    });
	
//latest news slider
$('.slider2').slick({
        // dots: true,
		//rtl:true,
	 	accessibility:false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
		prevArrow:'<button class="slick-prev slick-disabled" data-role="none" type="button" tabindex="-1" ><span class="noshow">Previous</span></button>' ,
		nextArrow:'<button class="slick-next slick-disabled" data-role="none" type="button" tabindex="-1" ><span class="noshow">Next</span></button>' ,
		arrows:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                // centerMode: true,

            }

        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                infinite: false

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
                autoplay: false
            }
        }]
    });	
	$('.slider2').show();
	
$('.publication_slide1').slick({
	  accessibility:false,
      variableWidth: false,	
	  infinite: false,
	  autoplay: false,
	  dots: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows:true,
	  prevArrow:'<button class="slick-prev slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Previous</span></button>' ,
	  nextArrow:'<button class="slick-next slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Next</span></button>' ,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
                // centerMode: true,

            }       

        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1                
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }    
        }, {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }    
            
        }]
    });
    $('.publication_slide1 div.slick-slide').show();
	
	if ($('.moi_news_slide1 div') && $('.moi_news_slide1 div').length > 0){
		$('.moi_news_slide1').slick({
		  accessibility:false,
	      variableWidth: false,	
		  infinite: false,
		  autoplay: false,
		  dots: false,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  arrows:true,
		  prevArrow:'<button class="slick-prev slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Previous</span></button>' ,
		  nextArrow:'<button class="slick-next slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Next</span></button>' ,
	        responsive: [{
	            breakpoint: 1024,
	            settings: {
	                slidesToShow: 2,
	                slidesToScroll: 1
	                // centerMode: true,
	            }
	        }, {
	            breakpoint: 550,
	            settings: {
	                slidesToShow: 1,
	                slidesToScroll: 1
	            }    
	                   
	        }]
	    });
		$('.moi_news_slide1 div.slick-slide').show();
		$('.moi_news_slide1').siblings('.slideshowdiv').show();
	}

	$('.journalist_slide1, .awareness_slide1, .videos_slide1').slick({
		accessibility:false,
      variableWidth: false,	
	  infinite: false,
	  autoplay: false,
	  dots: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows:true,
	  prevArrow:'<button class="slick-prev slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Previous</span></button>' ,
	  nextArrow:'<button class="slick-next slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Next</span></button>' ,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                // centerMode: true,

            }       

        }, {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1                
            }
        },  {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }    
            
        }]
    });	
	$('.journalist_slide1 div.slick-slide, .awareness_slide1 div.slick-slide, .videos_slide1 div.slick-slide').show();

	$('.traffic_slide1').slick({
		accessibility:false,
      variableWidth: false,	
	  infinite: false,
	  autoplay: false,
	  dots: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows:true,
	  prevArrow:'<button class="slick-prev slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Previous</span></button>' ,
	  nextArrow:'<button class="slick-next slick-disabled" data-role="none" type="button" tabindex="-1"><span class="noshow">Next</span></button>' ,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                // centerMode: true,

            }       

        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1                
            }
        },  {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }       
        }]
    });	
	$('.traffic_slide1 div.slick-slide').show();
	



});			
	
