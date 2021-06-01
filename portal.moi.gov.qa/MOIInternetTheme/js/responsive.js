/**
 * custom scripts
 */
$(document).ready(function(){

	$(".increaseFont").click(function(){
		var currentFontSize = $('button').css('font-size');
	    var currentFontSizeNum = parseFloat(currentFontSize, 10);
	    var newFontSize = currentFontSizeNum+2;
	    if ( newFontSize < 16       ) {
	    	$('button').css('font-size', newFontSize);
	    	$('.toprightDiv').addClass('topNavwidth');
	    }


	    var currentFontSize1 = $('.surveyDiv, .emerlist p, body, .dropdown-menu ul li a, .footerbg, .dropdown, .topNav01, .breadcrumbExt').css('font-size');
	    var currentFontSizeNum1 = parseFloat(currentFontSize1, 10);
	    var newFontSize1 = currentFontSizeNum1+2;
	      if ( newFontSize1 < 16     ) {
	    	  $('.surveyDiv, .emerlist p, body, .footerbg, .topNav01, .breadcrumbExt').css('font-size', newFontSize1);
	    	  //$('.increaseFont').addClass('fontdisable');
	    	  $(".decreaseFont").removeClass('fontdisable');
	      }
		  else{
			  $('.decreaseFont').removeClass('fontdisable');
			  $('.increaseFont').addClass('fontdisable');
		  }


	    var currentFontSize2 = $('.collapse, .qAccItems').css('font-size');
	    var currentFontSizeNum2 = parseFloat(currentFontSize2, 10);
	    var newFontSize2 = currentFontSizeNum2+1;
	    if ( newFontSize2 < 16     ) {
	    	$('.collapse, .qAccItems').css('font-size', newFontSize2);
	    	$('.stickdiv').addClass('txtshrink');
	    	$('.stickdiv').css('width', '1040px');
	    	$('.buttonbg .navbar-default .navbar-nav > li > a').addClass('mainNavpad');
	    	//$('.increaseFont').addClass('fontdisable');		
	    }

		return false;
	});	
	
	
	$(".decreaseFont").click(function(){
        var currentFontSize = $('button').css('font-size');
        var currentFontSizeNum = parseFloat(currentFontSize, 10);
        var newFontSize = currentFontSizeNum-2;
        if (newFontSize > 8){
        	$('button').css('font-size', newFontSize);
        	$('.toprightDiv').removeClass('topNavwidth');
        	//$('.decreaseFont').addClass('fontdisable');
        }
		
        
        var currentFontSize1 = $('.surveyDiv, .emerlist p, body, .dropdown-menu, .footerbg, .topNav01, .breadcrumbExt').css('font-size');
        var currentFontSizeNum1 = parseFloat(currentFontSize1, 10);
        var newFontSize1 = currentFontSizeNum1-2;
        if (newFontSize1 > 10){
        	$('.surveyDiv, .emerlist p, body, .footerbg, .topNav01, .breadcrumbExt').css('font-size', newFontSize1);
        	$('.decreaseFont').removeClass('fontdisable');
        	$('.increaseFont').removeClass('fontdisable');
        }
        
        var currentFontSize2 = $('.collapse, .qAccItems').css('font-size');
        var currentFontSizeNum2 = parseFloat(currentFontSize2, 10);
        var newFontSize2 = currentFontSizeNum2-1;
        if ( newFontSize2 > 12     ) {
        	$('.collapse, .qAccItems').css('font-size', newFontSize2);
        	$('.buttonbg .navbar-default .navbar-nav > li > a').removeClass('mainNavpad');
        	$('.increaseFont').removeClass('fontdisable');
        }
		else {
			$('.decreaseFont').addClass('fontdisable');
		}
        
        return false;
});

	
	
	
	

$('.dropdown').on('show.bs.dropdown', function () {
	 //$(".carouselGenExt").fadeTo(700,0.4);
	  $(".overlay").fadeTo(700,0.4);
	  
	});
	 
	$('.dropdown').on('hidden.bs.dropdown', function () {
	 // $(".carouselGenExt").fadeTo(500,1.0);
	  $(".overlay").fadeTo(500,0);
	});
	 
	if( $('.overlay').length == 0 ){
	    $('#carousel-example-generic').append('<div class="overlay"></div>');
	                //$('.overlay').animate({backgroundColor:'#4E1402'}, 300);
	                
	}
	 
});



