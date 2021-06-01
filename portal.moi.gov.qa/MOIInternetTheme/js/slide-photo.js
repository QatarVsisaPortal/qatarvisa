


$('#myCarousel1, #myCarousel2').carousel('pause');


  $('#myCarousel').on('slid.bs.carousel', function (e)
        {
      //console.log($('#myCarousel .carousel-inner .item').length);
         
          
          if($('#myCarousel .carousel-inner .item:nth-child(5)').hasClass('active')){
            
                          
            $('#myCarousel1 .item02').addClass('active');
            $('#myCarousel1 .item01').removeClass('active');     
          }
		  
        else  if($('#myCarousel .carousel-inner .item:nth-child(1)').hasClass('active')){
            
                          
            $('#myCarousel1 .item02').removeClass('active');
            $('#myCarousel1 .item01').addClass('active');     
          }

        else  if($('#myCarousel .carousel-inner .item:nth-child(4)').hasClass('active')){
            
                          
            $('#myCarousel1 .item02').removeClass('active');
            $('#myCarousel1 .item01').addClass('active');     
          }		  
		  
        
        });


$('#myCarousel').carousel({
    interval: 4000
});

$('#carousel-example-generic1').carousel({
    interval: 4000
});


// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
 
  
});

// when the carousel slides, auto update
$('#myCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);

  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id^=carousel-selector-'+id+']').addClass('selected');
});



// handles the carousel thumbnails
$('[id^=carousel-selector1-]').click( function(){
  var id_selector1 = $(this).attr("id");
  var id = id_selector1.substr(id_selector1.length -1);
  id = parseInt(id);
  $('#carousel-example-generic1').carousel(id);
  $('[id^=carousel-selector1-]').removeClass('selected');
  $(this).addClass('selected');
 
  
});

// when the carousel slides, auto update
$('#carousel-example-generic1').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);

  $('[id^=carousel-selector1-]').removeClass('selected');
  $('[id^=carousel-selector1-'+id+']').addClass('selected');
});





//$('#carousel-example-generic1').carousel('pause');

$('.btn-lg').on('click',function(){
$('#myCarousel').carousel('pause');
  
 
   if($('#myCarousel .carousel-inner .item:nth-child(1)').hasClass('active')) {
   //console.log('Success 01');
   $('#carousel-example-generic1').carousel(0);
   $('#carousel-example-generic1').carousel('cycle'); 
  }
  
  
   else if($('#myCarousel .carousel-inner .item:nth-child(2)').hasClass('active')) {
   $('#carousel-example-generic1').carousel(1);
   $('#carousel-example-generic1').carousel('cycle'); 
  }
  
   else if($('#myCarousel .carousel-inner .item:nth-child(3)').hasClass('active')) {
   $('#carousel-example-generic1').carousel(2);
   $('#carousel-example-generic1').carousel('cycle'); 
  }
  
   else if($('#myCarousel .carousel-inner .item:nth-child(4)').hasClass('active')) {
   $('#carousel-example-generic1').carousel(3);
   $('#carousel-example-generic1').carousel('cycle'); 
  }

   else if($('#myCarousel .carousel-inner .item:nth-child(5)').hasClass('active')) {
   $('#carousel-example-generic1').carousel(4);
   $('#carousel-example-generic1').carousel('cycle'); 
  }
  
});


$('#myModal').on('hidden.bs.modal',function(e){
 $('#myCarousel').carousel('cycle');
 $('#carousel-example-generic1').carousel('pause'); 
$('.sticky').show(); 
})

$('#myModal').on('show.bs.modal', function (e) {
$('.sticky').hide();
})

/* Truncate text script for most popular photos section */
$(document).ready(function(){
var title = $('.popularPhotos').text();

var truncatedText = jQuery.trim(title).substring(0, 60) + "...";
$('.popularPhotos').html(truncatedText);
});

