



/*Latest index-slider (Index Page)*/
 $(document).ready(function() { 
    



moicarousalThreeMedium('moicarousal1','leftArrow1','rightArrow1');
      
moicarousalThreeLarge('moicarousal2','leftArrow2','rightArrow2');

moicarousalFive('moicarousal3','leftArrow3','rightArrow3');

//for reversing arrows in ar
   if($('html').attr('lang') == 'en'){
    
   $('.ar-reverse, .ar-reverse1, .ar-reverse2, .ar-reverse3, .ar-reverse4').css('float','left'); 
  } 
else if($('html').attr('lang')== 'ar'){
 var arrows =  $('.ar-reverse');
var arrowItems = arrows.children();
arrows.append(arrowItems.get().reverse());
  var arrows1 =  $('.ar-reverse1');
var arrowItems1 = arrows1.children();
arrows1.append(arrowItems1.get().reverse());  
  var arrows2 =  $('.ar-reverse2');
var arrowItems2 = arrows2.children();
arrows2.append(arrowItems2.get().reverse());      
  var arrows3 =  $('.ar-reverse3');
var arrowItems3 = arrows3.children();
arrows3.append(arrowItems3.get().reverse());    
   var arrows4 =  $('.ar-reverse4');
var arrowItems4 = arrows4.children();
arrows4.append(arrowItems4.get().reverse());    
  }
  



// for Quick access  
 function moicarousalFive(dclass,lid,rid){
       var list= $('.'+dclass+' ul li');
         $.each(list,function(i,v){
         if(i==0){
           $(this).addClass('first');
         }
         else if(i==list.length-1){
          $(this).addClass('last'); 
         }
       });
   
       // adding style left to ul for setting up carousal
	if($('.overflowholder').hasClass('moicarousal3')){
        $('.'+dclass+' ul').css({'left' : '-189px'});
}
else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
                $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
                $('#'+lid).addClass('notclickable'); 
           
               
   
   $('#'+rid+' img').click(function(event) {
                 //onclick of right side remove left button icon
                  $('#'+lid).removeClass('notclickable'); 
                   var check = $('#'+rid).hasClass('notclickable');
                     if(check){
                       event.preventDefault();
                      return;
                     }
    
                   var len,len1, display;
                   len=  $('.'+dclass+' ul li').length;
                  // len1=len++;
      if(len==6){
       $('#'+rid).addClass('notclickable');
       }  
     
     var windowsize = $(window).width();
     
      if (windowsize < 992){
     
       if(len++){
         display =5;
      }
        
      }
           else if (windowsize > 992){
     
       if(len++){
         display =6;
      }
        
      }
   
     if($('.'+dclass+' ul li').eq(display).hasClass('last')) {  
                        $('#'+rid).addClass('notclickable');    
                     }  
    
                 var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                    var leftIndent = parseInt($('.'+dclass+' ul').css('left')) - listItem;
                     $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){    
                     $('.'+dclass+' ul li:last').after($('.'+dclass+' ul li:first')); 
                     		if($('.overflowholder').hasClass('moicarousal3')){
        $('.'+dclass+' ul').css({'left' : '-189px'});
}
else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
                     }); 
 });
   
   
   
               
                $('#'+lid+' img').click(function(event) {
                   var check = $('#'+lid).hasClass('notclickable');
                     if(check){
                       event.preventDefault();
                       return;
                     }
                   var len,len1 ;
                   len=  $('.'+dclass+' ul li').length;
                   len1=len;
                   var display = len-len1;
                     $('#'+rid).removeClass('notclickable'); 
                    if($('.'+dclass+' ul li').eq(display).hasClass('first')) {  
                          $('#'+lid).addClass('notclickable');  
                     }
                   var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                   var leftIndent = parseInt($('.'+dclass+' ul').css('left')) + listItem;
                   $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){ 
                     $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
                         		if($('.overflowholder').hasClass('moicarousal3')){
        $('.'+dclass+' ul').css({'left' : '-189px'});
}
else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
                   });                        
               });
    
 }
 

//Three Images - for Featured Services
   
function moicarousalThreeMedium(dclass,lid,rid){
   
       var list= $('.'+dclass+' ul li');
         $.each(list,function(i,v){
         if(i==0){
           $(this).addClass('first');
         }
         else if(i==list.length-1){
          $(this).addClass('last'); 
         }
       });
   
       // adding style left to ul for setting up carousal
	
	  $('.'+dclass+' ul').css({'left' : '-214px'});

                $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
                $('#'+lid).addClass('notclickable'); 
           
               
   
   $('#'+rid+' img').click(function(event) {
                 //onclick of right side remove left button icon
                  $('#'+lid).removeClass('notclickable'); 
                   var check = $('#'+rid).hasClass('notclickable');
                     if(check){
                       event.preventDefault();
                      return;
                     }
    
                   var len,len1, display;
                   len=  $('.'+dclass+' ul li').length;
                   len1=len++;
      if(len==5){
       $('#'+rid).addClass('notclickable');
         
       } 
     
     var windowsize = $(window).width();
     
      if (windowsize < 480){
       if(len++){
        display =2;
      }
      }
     
    else if (windowsize < 1002){
       if(len++){
        display =3;
      }
       
     }
	     else {
       if(len++){
        display =4;
      }
       }
   
     if($('.'+dclass+' ul li').eq(display).hasClass('last')) {  
                        $('#'+rid).addClass('notclickable');    
                     }  
    
                 var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                    var leftIndent = parseInt($('.'+dclass+' ul').css('left')) - listItem;
                     $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){    
                     $('.'+dclass+' ul li:last').after($('.'+dclass+' ul li:first')); 
	
            $('.'+dclass+' ul').css({'left' : '-214px'});
                     }); 
               });
   

     function leftSlider() {
   
               
                $('#'+lid+' img').click(function(event) {
                   var check = $('#'+lid).hasClass('notclickable');
                     if(check){
                       event.preventDefault();
                       return;
                     }
                   var len,len1 ;
                   len=  $('.'+dclass+' ul li').length;
                   len1=len;
                   var display = len-len1;
                     $('#'+rid).removeClass('notclickable'); 
                    if($('.'+dclass+' ul li').eq(display).hasClass('first')) {  
                          $('#'+lid).addClass('notclickable');  
                     }
                   var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                   var leftIndent = parseInt($('.'+dclass+' ul').css('left')) + listItem;
                   $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){ 
                     $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
				  
	//four	
	  
                         
					 $('.'+dclass+' ul').css({'left' : '-214px'});
                   });
          });
   }; 
leftSlider();
 }  
  
  
 //for Latest News
 function moicarousalThreeLarge(dclass,lid,rid){
   
       var list= $('.'+dclass+' ul li');
         $.each(list,function(i,v){
         if(i==0){
           $(this).addClass('first');
         }
         else if(i==list.length-1){
          $(this).addClass('last'); 
         }
       });
   
       // adding style left to ul for setting up carousal
   var windowsize = $(window).width();
    if (windowsize > 992){
	 if($('.overflowholder').hasClass('moicarousal2')){
        $('.'+dclass+' ul').css({'left' : '-312px'});
	 }
    }
     
   else if (windowsize < 992){
    	 if($('.overflowholder').hasClass('moicarousal2')){
        $('.'+dclass+' ul').css({'left' : '-332px'});
	 } 
     
   }

	 else{ $('.'+dclass+' ul').css({'left' : '-214px'});}

                $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
                $('#'+lid).addClass('notclickable'); 
           
               
   
   $('#'+rid+' img').click(function(event) {
                 //onclick of right side remove left button icon
                  $('#'+lid).removeClass('notclickable'); 
                   var check = $('#'+rid).hasClass('notclickable');
                     if(check){
                       event.preventDefault();
                      return;
                     }
    
                   var len,len1, display;
                   len=  $('.'+dclass+' ul li').length;
                   len1=len++;
      if(len==5){
       $('#'+rid).addClass('notclickable');
         
       }  
		
       if(len++){
        display =4;
      }
   
     if($('.'+dclass+' ul li').eq(display).hasClass('last')) {  
                        $('#'+rid).addClass('notclickable');    
                     }  
    
                 var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                    var leftIndent = parseInt($('.'+dclass+' ul').css('left')) - listItem;
                     $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){    
                     $('.'+dclass+' ul li:last').after($('.'+dclass+' ul li:first')); 
	
                     		    var windowsize = $(window).width();
    if (windowsize > 992){
	 if($('.overflowholder').hasClass('moicarousal2')){
        $('.'+dclass+' ul').css({'left' : '-312px'});
	 }
    }
     
   else if (windowsize < 992){
    	 if($('.overflowholder').hasClass('moicarousal2')){
        $('.'+dclass+' ul').css({'left' : '-332px'});
	 } 
     
   }

				else{  $('.'+dclass+' ul').css({'left' : '-214px'});}
                     }); 
               });
   

     function leftSlider() {
   
               
                $('#'+lid+' img').click(function(event) {
                   var check = $('#'+lid).hasClass('notclickable');
                     if(check){
                       event.preventDefault();
                       return;
                     }
                   var len,len1 ;
                   len=  $('.'+dclass+' ul li').length;
                   len1=len;
                   var display = len-len1;
                     $('#'+rid).removeClass('notclickable'); 
                    if($('.'+dclass+' ul li').eq(display).hasClass('first')) {  
                          $('#'+lid).addClass('notclickable');  
                     }
                   var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                   var leftIndent = parseInt($('.'+dclass+' ul').css('left')) + listItem;
                   $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){ 
                     $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
				  
	//four	
   var windowsize = $(window).width();
    if (windowsize > 992){
	 if($('.overflowholder').hasClass('moicarousal2')){
        $('.'+dclass+' ul').css({'left' : '-312px'});
	 }
    }
     
   else if (windowsize < 992){
    	 if($('.overflowholder').hasClass('moicarousal2')){
        $('.'+dclass+' ul').css({'left' : '-332px'});
	 } 
     
   }
                        
					else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
                   });
          });
   }; 
leftSlider();
 }



   

 
 





/* Journalist Downloads Page */  
moicarousalFour('moicarousal4','leftArrow4','rightArrow4');
moicarousalFour('moicarousal5','leftArrow5','rightArrow5');
moicarousalThree('moicarousal6','leftArrow6','rightArrow6');
moicarousalFour('moicarousal7','leftArrow7','rightArrow7');

/* MOI News Page */  
moicarousalTwo('moicarousal8','leftArrow8','rightArrow8');

moicarousalFive1('moicarousal9','leftArrow9','rightArrow9');


   

  function moicarousalFive1(dclass,lid,rid){

        var list= $('.'+dclass+' ul li');
          $.each(list,function(i,v){
          if(i==0){
            $(this).addClass('first');
          }
          else if(i==list.length-1){
           $(this).addClass('last'); 
          }

        });

    
        // adding style left to ul for setting up carousal
		if($('.overflowholder').hasClass('moicarousal9')){

         $('.'+dclass+' ul').css({'left' : '-189px'});
}
else{ $('.'+dclass+' ul').css({'left' : '-214px'});}

                 $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));


                 $('#'+lid).addClass('notclickable'); 
            
                
    
    $('#'+rid+' img').click(function(event) {

                  //onclick of right side remove left button icon
                   $('#'+lid).removeClass('notclickable'); 
                    var check = $('#'+rid).hasClass('notclickable');
                      if(check){
                        event.preventDefault();
                       return;
                      }
     
                    var len,len1, display;
                    len=  $('.'+dclass+' ul li').length;
                   // len1=len++;

       if(len==6){
        $('#'+rid).addClass('notclickable');


        }   
        if(len++){
          display =6;
       }


	   
      if($('.'+dclass+' ul li').eq(display).hasClass('last')) {  
                         $('#'+rid).addClass('notclickable');    
                      }  
     
                  var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                     var leftIndent = parseInt($('.'+dclass+' ul').css('left')) - listItem;

                      $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){    
                      $('.'+dclass+' ul li:last').after($('.'+dclass+' ul li:first')); 
                      		if($('.overflowholder').hasClass('moicarousal9')){

         $('.'+dclass+' ul').css({'left' : '-189px'});
}
else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
                      }); 
  });
    
    
    
                
                 $('#'+lid+' img').click(function(event) {
                    var check = $('#'+lid).hasClass('notclickable');
                      if(check){
                        event.preventDefault();
                        return;
                      }

                    var len,len1 ;
                    len=  $('.'+dclass+' ul li').length;
                    len1=len;
                    var display = len-len1;
                      $('#'+rid).removeClass('notclickable'); 
                     if($('.'+dclass+' ul li').eq(display).hasClass('first')) {  
                           $('#'+lid).addClass('notclickable');  
                      }

                    var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                    var leftIndent = parseInt($('.'+dclass+' ul').css('left')) + listItem;
                    $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){ 
                      $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
                          		if($('.overflowholder').hasClass('moicarousal9')){

         $('.'+dclass+' ul').css({'left' : '-189px'});
}
else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
                    });                        
                });

     


  }
  
  //four Images

  function moicarousalFour(dclass,lid,rid){


        var list= $('.'+dclass+' ul li');
    //console.log(list);
          $.each(list,function(i,v){
            $(this).addClass('ll');
          if(i==0){
            $(this).addClass('first');
          }
          else if(i==list.length-1){
           $(this).addClass('last'); 
          }

        });
if($('.overflowholder').hasClass('moicarousal4')){

 $('.'+dclass+' ul').css({'left' : '-152px'});
}
 else{   
        // adding style left to ul for setting up carousal
         $('.'+dclass+' ul').css({'left' : '-214px'});
		 }

                 $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));


                 $('#'+lid).addClass('notclickable'); 
            
                
    
    $('#'+rid+' img').click(function(event) {

                  //onclick of right side remove left button icon
                   $('#'+lid).removeClass('notclickable'); 
                    var check = $('#'+rid).hasClass('notclickable');
                      if(check){
                        event.preventDefault();
                       return;
                      }
     
                    var len,len1, display;
                    len=  $('.'+dclass+' ul li').length;
                    len1=len++;

       if(len==5){
        $('#'+rid).addClass('notclickable');
          
        }   
        if(len++){
          display =5;
       }
             
      if($('.'+dclass+' ul li').eq(display).hasClass('last')) {  
                         $('#'+rid).addClass('notclickable');    
                      }  
     
                  var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                     var leftIndent = parseInt($('.'+dclass+' ul').css('left')) - listItem;

                      $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){    
                      $('.'+dclass+' ul li:last').after($('.'+dclass+' ul li:first')); 
					  if($('.overflowholder').hasClass('moicarousal4')){
                         $('.'+dclass+' ul').css({'left' : '-152px'});
                          }
                      else{
					  $('.'+dclass+' ul').css({'left' : '-214px'});
					  }
                      }); 
      
      


          
      
    
      
                });
    
    
    
                
                 $('#'+lid+' img').click(function(event) {
                    var check = $('#'+lid).hasClass('notclickable');
                      if(check){
                        event.preventDefault();
                        return;
                      }

                    var len,len1 ;
                    len=  $('.'+dclass+' ul li').length;
                    len1=len;
                    var display = len-len1;
                      $('#'+rid).removeClass('notclickable'); 
                     if($('.'+dclass+' ul li').eq(display).hasClass('first')) {  
                           $('#'+lid).addClass('notclickable');  
                      }

                    var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                    var leftIndent = parseInt($('.'+dclass+' ul').css('left')) + listItem;
                    $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){ 
                      $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
					  if($('.overflowholder').hasClass('moicarousal4')){
                      $('.'+dclass+' ul').css({'left' : '-152px'});
                        }
						else{
                          $('.'+dclass+' ul').css({'left' : '-214px'});
						  }
                    });
                   
                   

                   
   
                                      
                   
                   
                });

     


  }

//Three Images
  
  
  function moicarousalThree(dclass,lid,rid){
    
        var list= $('.'+dclass+' ul li');
          $.each(list,function(i,v){
          if(i==0){
            $(this).addClass('first');
          }
          else if(i==list.length-1){
           $(this).addClass('last'); 
          }

        });

    
        // adding style left to ul for setting up carousal

		 if($('.overflowholder').hasClass('moicarousal6')){
         $('.'+dclass+' ul').css({'left' : '-201px'});
		 }
		 else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
	

                 $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));


                 $('#'+lid).addClass('notclickable'); 
            
                
    
    $('#'+rid+' img').click(function(event) {

                  //onclick of right side remove left button icon
                   $('#'+lid).removeClass('notclickable'); 
                    var check = $('#'+rid).hasClass('notclickable');
                      if(check){
                        event.preventDefault();
                       return;
                      }
     
                    var len,len1, display;
                    len=  $('.'+dclass+' ul li').length;
                    len1=len++;

       if(len==5){
        $('#'+rid).addClass('notclickable');
          
        }  
 		
        if(len++){
         display =4;
       }





	   
      if($('.'+dclass+' ul li').eq(display).hasClass('last')) {  
                         $('#'+rid).addClass('notclickable');    
                      }  
     
                  var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                     var leftIndent = parseInt($('.'+dclass+' ul').css('left')) - listItem;

                      $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){    
                      $('.'+dclass+' ul li:last').after($('.'+dclass+' ul li:first')); 
		
                      		 if($('.overflowholder').hasClass('moicarousal6')){
         $('.'+dclass+' ul').css({'left' : '-201px'});
		 }
					else{  $('.'+dclass+' ul').css({'left' : '-214px'});}
                      }); 
                });
    
 
      function leftSlider() {
    
                
                 $('#'+lid+' img').click(function(event) {
                    var check = $('#'+lid).hasClass('notclickable');
                      if(check){
                        event.preventDefault();
                        return;
                      }

                    var len,len1 ;
                    len=  $('.'+dclass+' ul li').length;
                    len1=len;
                    var display = len-len1;
                      $('#'+rid).removeClass('notclickable'); 
                     if($('.'+dclass+' ul li').eq(display).hasClass('first')) {  
                           $('#'+lid).addClass('notclickable');  
                      }

                    var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                    var leftIndent = parseInt($('.'+dclass+' ul').css('left')) + listItem;
                    $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){ 
                      $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
					  
		//four	
		  
		if($('.overflowholder').hasClass('moicarousal6')){
		
         $('.'+dclass+' ul').css({'left' : '-201px'});
		 }                         
						else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
                    });
           });

    }; 
leftSlider();

  }

function moicarousalTwo(dclass,lid,rid){
    
        var list= $('.'+dclass+' ul li');
    //console.log(list);
          $.each(list,function(i,v){
            $(this).addClass('ll');
          if(i==0){
            $(this).addClass('first');
          }
          else if(i==list.length-1){
           $(this).addClass('last'); 
          }

        });

    
        // adding style left to ul for setting up carousal
		if($('.overflowholder').hasClass('moicarousal8')){
         $('.'+dclass+' ul').css({'left' : '-304px'});
		 }
		 else{ $('.'+dclass+' ul').css({'left' : '-214px'});}

                 $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));


                 $('#'+lid).addClass('notclickable'); 
            
                
    
    $('#'+rid+' img').click(function(event) {

                  //onclick of right side remove left button icon
                   $('#'+lid).removeClass('notclickable'); 
                    var check = $('#'+rid).hasClass('notclickable');
                      if(check){
                        event.preventDefault();
                       return;
                      }
     
                    var len,len1, display;
                    len=  $('.'+dclass+' ul li').length;
                    len1=len++;

       if(len==5){
        $('#'+rid).addClass('notclickable');
          
        }   
        if(len++){
         display =3;
       }
             
      if($('.'+dclass+' ul li').eq(display).hasClass('last')) {  
                         $('#'+rid).addClass('notclickable');    
                      }  
     
                  var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                     var leftIndent = parseInt($('.'+dclass+' ul').css('left')) - listItem;

                      $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){    
                      $('.'+dclass+' ul li:last').after($('.'+dclass+' ul li:first')); 
                      		if($('.overflowholder').hasClass('moicarousal8')){
         $('.'+dclass+' ul').css({'left' : '-304px'});
		 }
					else{  $('.'+dclass+' ul').css({'left' : '-214px'});}
                      }); 
      
      


          
      
    
      
                });
    
      var leftSlider = function() {
    
                
                 $('#'+lid+' img').click(function(event) {
                    var check = $('#'+lid).hasClass('notclickable');
                      if(check){
                        event.preventDefault();
                        return;
                      }

                    var len,len1 ;
                    len=  $('.'+dclass+' ul li').length;
                    len1=len;
                    var display = len-len1;
                      $('#'+rid).removeClass('notclickable'); 
                     if($('.'+dclass+' ul li').eq(display).hasClass('first')) {  
                           $('#'+lid).addClass('notclickable');  
                      }

                    var listItem = $('.'+dclass+' ul li').outerWidth() + 5;
                    var leftIndent = parseInt($('.'+dclass+' ul').css('left')) + listItem;
                    $('.'+dclass+' ul:not(:animated)').animate({'left' : leftIndent},700,function(){ 
                      $('.'+dclass+' ul li:first').before($('.'+dclass+' ul li:last'));
		if($('.overflowholder').hasClass('moicarousal8')){
		
         $('.'+dclass+' ul').css({'left' : '-304px'});
		 }                         
						else{ $('.'+dclass+' ul').css({'left' : '-214px'});}
                    });
           });

    };  
leftSlider();


  }
  

});



