$(function(){


var photoglryID = "allphotos";
var thumbsglryID= "AllThumbs";
var url=window.location.href.indexOf("deptSelected");
var navUrl = window.location.href.indexOf("deptSelected=AllDepartments");
if((url==-1) || (navUrl>-1)){

$("#deptphotos").remove();
$("#deptThumbs").remove();

}
else {

photoglryID = "allphotos";
thumbsglryID= "AllThumbs";
$("#allphotos").remove();
$("#AllThumbs").remove();
}



$("#expandPage").remove();


var imgList = $('.imageThumbnail img').length;
                if($('#photoGallery.fullscreen-gallery').length > 0 ){ 
                                /*           
                                                $('.imageLarge').children().clone(true).appendTo('.fullImageLarge');
                                                $('.imageThumbnail').children().clone(true).appendTo('.fullImageThumbnail');
                                                $('.imageLargePanel .gIcons').children().clone(true).appendTo('.fullImageLargePanel .gIcons');
                                                $('#fullPhotoGallery .gIcons').find('.fullScreenOn').addClass('fullScreenOff').removeClass('fullScreenOn');
                                                $('#fullPhotoGallery .fullScreenOff').find('img').attr('src', 'photogallery/icons/fullscreenoff.png');
                                */

                                // Large photo gallery DOM //    
                                                var vImageLarge = $('.imageLarge').children().clone(true), vImageThumbnail = $('.imageThumbnail').children().clone(true),
                                                                vImageLargePanelgIcon = $('.imageLargePanel .gIcons').children().clone(true); 
                                                
                                                var l1 = $("<div/>", {id:"expandPage", class: "col-md-12 col-sm-12 col-xs-12"}),
                                                                l2 = $("<div/>", {class: "containerBox margin00"}),
                                                                l3 = $("<div/>", {id: "fullPhotoGallery"}),
                                                                //l31 = $("<div/>"),
                                                                l31 = $("<div/>", {class: "col-md-1 hidden-xs hidden-sm"}),
                                                                l32 = $("<div/>", {class: "fullImageLargePanel col-md-10 col-sm-12 col-xs-12"}),
                                                                l321 = $("<div/>", {class: "spaceAdjDiv"}),
                                                                l322 = $("<div/>", {class: "gIcons", html: vImageLargePanelgIcon}),
                                                                //l323 = $("<div/>", {class: "fullImageLarge" , html: vImageLarge}),
                                                                l323 = $("<div/>", {class: "fullImageLarge col-md-12 col-sm-12 col-xs-12", html: vImageLarge}),
                                                                l33 = $("<div/>", {style: "clear:both"}),
                                                                //l34 = $("<div/>"),
                                                                l34 = $("<div/>", {class: "col-md-1 hidden-xs hidden-sm"}),
                                                                //l35 = $("<div/>", {class: "fullImageThumbnail", html: vImageThumbnail});
                                                                l35 = $("<div/>", {class: "fullImageThumbnail col-md-10 col-sm-12 col-xs-12", html: vImageThumbnail});
                                                                
                                
                                                $('body').append(l1.append(l2.append(l3.append(l31).append(l32.append(l321).append(l322).append(l323)).append(l33).append(l34).append(l35))));
                                                $('#expandPage .gIcons').find('.fullScreenOn').addClass('fullScreenOff').removeClass('fullScreenOn');
                                                $('#expandPage .gIcons').find('.thumbsOn').addClass('thumbsOnFull');
                                                $('#expandPage .gIcons').find('.thumbsOff').addClass('thumbsOffFull');
                                                $('#expandPage .gIcons').find('.popOutOff').addClass('popOutOffFull');
                                                $('#expandPage .fullScreenOff').find('img').attr('src', '/MOIInternetTheme/photogallery/icons/fullscreenoff.png');
                                                $('#expandPage .fullScreenOff').find('img').attr('title','fullscreenOff');
                                                                                                
                                                $('<div class="ExpandOverlay"></div>').css({'display':'none','position':'fixed','z-index':'888','top':'0px', 'left':'0px','width':$(document).width(),'height':$(document).height(),'background':'#222222'}).appendTo('body');
                }                              
                                // small photo gallery loading... //  
                                                $('.imageLarge').slick({
                                                  slidesToShow: 1,
                                                  slidesToScroll: 1,
                                                  arrows: true,
                                                  fade: true,
                                                  asNavFor: '.imageThumbnail',
                                                  infinite: true,
                                                  autoplay: true,
                                                  pauseOnHover: true
                                                });
                                                $('.imageLarge div.slick-slide').show();

                                                if(imgList == 1){
                                                $('.imageThumbnail').css('padding-left','12px');
                                                $('.imageThumbnail').slick({
                                                centerMode: false,
                                                });
                                                $('.imageThumbnail div.slick-slide').show();
                                                $('.fullImageThumbnail').slick({
                                                centerMode: true,
                                                                });
                
                                                }

if(imgList > 1 && imgList <= 3){
$('.imageThumbnail').css('padding-left','0px');
}                                              
  

if(imgList <= 4){
$('.fullImageThumbnail img, .imageThumbnail img').css('width','132px');

}

if(imgList == 5){
$('.fullImageThumbnail img, .imageThumbnail img').css('width','90px');

}
            


if(imgList <= 5){

$('.fullImageThumbnail img, .imageThumbnail img').css('width','90px');
$('.fullImageThumbnail img, .imageThumbnail img').css('height','70px');
                                                $('.imageThumbnail').slick({
                                                                  variableWidth: false,
                                                                centerMode: true,
                                                                  focusOnSelect: true,
                                                                  
                                                                  
                                                                  slidesToShow: imgList -1,
                                                                  slidesToScroll: 1,
                                                                  dots: false,
                                                                  arrows:true,
                                                                  asNavFor: '.imageLarge',
                                                                  infinite: true,
                                                                  autoplay: true,
                                                                  pauseOnHover: true,
                                                                                    

                                                                });
                                                $('.imageThumbnail div.slick-slide').show();
}              

 else if(imgList > 5){

//$('.fullImageThumbnail img').css('width','132px');

                                                $('.imageThumbnail').slick({
                                                                  variableWidth: false,
                                                                  centerMode: true,
                                                                  focusOnSelect: true,
                                                                  slidesToShow: 5,
                                                                  slidesToScroll: 1,
                                                                  dots: false,
                                                                 arrows:true,
                                                                  asNavFor: '.imageLarge',
                                                                  infinite: true,
                                                                  autoplay: true,
                                                                  pauseOnHover: true,
                                                                                responsive: [{
                                                                                                breakpoint: 1024,
                                                                                                settings: {
                                                                                                                slidesToShow: 5,
                                                                                                                slidesToScroll: 1
                                                                                                                // centerMode: true,

                                                                                                }       

                                                                                }, {
                                                                                                breakpoint: 768,
                                                                                                settings: {
                                                                                                                slidesToShow: 3,
                                                                                                                slidesToScroll: 1                
                                                                                                }
                                                                                },  {
                                                                                                breakpoint: 420,
                                                                                                settings: {
                                                                                                                slidesToShow: 3,
                                                                                                                slidesToScroll: 1
                                                                                                }       
                                                                                }]
                                                                });
                                                $('.imageThumbnail div.slick-slide').show();
}
                                                                
                                                $('#photoGallery .imageLarge .slick-prev').hide();
                                                $('#photoGallery .imageLarge .slick-next').hide();
                                                $('#photoGallery .slideShowCont').hide();
                                
								
		
                                
                // fullView gallery loading... //   
				
				$('.fullImageLarge').slick({
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true,
                                fade: true,
                                asNavFor: '.fullImageThumbnail',
                                infinite: true,
                                autoplay: true,
								centerMode: true
                });
				$('.fullImageLarge div.slick-slide').show();
				if(imgList <= 8){
                $('.fullImageThumbnail').slick({
                                variableWidth: false,      
                                infinite: true,
                                autoplay: true,
                                centerMode: true,
                                focusOnSelect: true,
                                slidesToShow: imgList -1,
                                slidesToScroll: 1,                               
                                asNavFor: '.fullImageLarge',                        
                                dots: false,                          
                                arrows:true,
                                responsive: [{
                                                breakpoint: 1024,
                                                settings: {
                                                                slidesToShow: 5,
                                                                slidesToScroll: 1
                                                                }       
														}, {
                                                                breakpoint: 768,
                                                                settings: {
																		slidesToShow: 3,
																		slidesToScroll: 1                
                                                                }
														},  {
                                                                breakpoint: 420,
                                                                settings: {
																		slidesToShow: 3,
																		slidesToScroll: 1
																}       
                                                }]
				});
			}

			else if(imgList > 8){
                $('.fullImageThumbnail').slick({
						variableWidth: false,      
						infinite: true,
						autoplay: true,
						centerMode: true,
						focusOnSelect: true,
						slidesToShow: imgList-1,
						slidesToScroll: 1,                               
						asNavFor: '.fullImageLarge',                        
						dots: false,                          
						arrows:true,
						responsive: [{
										breakpoint: 1024,
										settings: {
														slidesToShow: 5,
														slidesToScroll: 1
														}       

										}, {
														breakpoint: 768,
														settings: {
																		slidesToShow: 3,
																		slidesToScroll: 1                
														}
										},  {
														breakpoint: 420,
														settings: {
																		slidesToShow: 3,
																		slidesToScroll: 1
														}       
									}]

				});	
			}
			$('.fullImageThumbnail div.slick-slide').show();
});           



                //Gallery events //
                
                $('#photoGallery, #fullScreen').on('click','.facebookIcon', function(event){
                                event.preventDefault();               
                                                FB.ui({
                                                                method: "feed",
                                                                link: "http://localhost:8080/moi/Internet%20HTMLs/Moi-English",
                                                                picture: "http://localhost:8080/moi/Internet%20HTMLs/Moi-English/photogallery/thumbs/1.jpg",
                                                                name: "Ministry of Interior",
                                                                caption: 'Ministry of Interior, Qatar',
                                                                description: "Celebrations port Abu Samra sports day of the State 2014"
                                                }, function(response){});                              
                                //shareOnFB()
                                //var hrefSrc = $('.imageLarge').find('.slick-active img').attr('src');                              
                                  //window.open(this.href + hrefSrc, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600', '_blank');
                  
                });

                $(document).on('mouseover','#photoGallery .imageLargePanel', function(){
                                $('#photoGallery .imageLarge .slick-prev').fadeIn('slow');
                                $('#photoGallery .imageLarge .slick-next').fadeIn('slow');
                                $('#photoGallery .slideShowCont').fadeIn('slow');
                                //$('#photoGallery .gIcons').fadeIn('slow');
                });           
                
                $(document).on('mouseleave','#photoGallery .imageLargePanel', function(){    
                    $('#photoGallery .imageLarge .slick-prev').fadeOut('slow');
                                $('#photoGallery .imageLarge .slick-next').fadeOut('slow');
                                $('#photoGallery .slideShowCont').fadeOut('slow');
                                //$('#photoGallery .gIcons').fadeOut('slow');                     
                });       





                $(document).on('click','#photoGallery .fullScreenOn', function(event){
								if($('.imageThumbnail img').length == 1){
										$('.slick-track, .slick-slide').css('width', '100%');  
								}  
                                event.preventDefault();
                                var currentSlide1 = $('.imageLarge').slick('slickCurrentSlide');
								var currentThumbSlide1 = $('.imageThumbnail').slick('slickCurrentSlide');
                                $('.ExpandOverlay').fadeIn('slow');
                                $('#expandPage').fadeIn('slow');
       // loadFullgallery();     							
								$('.fullImageLarge').slick('reinit');
								$('.fullImageThumbnail').slick('reinit');
								$('.fullImageLarge').slick('slickGoTo', currentSlide1);
								$('.fullImageThumbnail').slick('slickGoTo', currentThumbSlide1);
                });     

  

                $(document).on( 'click', 'body .fullScreenOff', function(event){
                                event.preventDefault();                               
                                $('.fullscreen-gallery').show();
                                var currentSlide2 = $('.fullImageLarge').slick('slickCurrentSlide');
                                $('.ExpandOverlay').fadeOut('slow');
                                $('#expandPage').fadeOut('slow');                          
                                $('.imageLarge').slick('slickGoTo', currentSlide2); 								
                                $('html,body').animate({scrollTop:120},0);
								
								$('.fullImageLarge').slick('unload');
								$('.fullImageThumbnail').slick('unload');
								
                });           
                                
                $(document).on('click','#photoGallery .thumbsOff', function(event){
                                event.preventDefault();
                    var thumbHeight = $('.imageThumbnail').outerHeight();            
                    $(this).addClass('thumbsOn').removeClass('thumbsOff');                         
                                $("<div class='spaceAdjDiv padAdj'></div>").appendTo('.imageLarge .slick-slide');                           
                                $('.imageThumbnail').slideToggle( "fast");                            
                                $(".spaceAdjDiv").animate({height: (thumbHeight/2)-30}, 500);                                
    });
                
                $(document).on('click','#photoGallery .thumbsOn', function(event){
                                event.preventDefault();
                                var currentSlide3 = $('.imageLarge').slick('slickCurrentSlide');                       
                    $(this).addClass('thumbsOff').removeClass('thumbsOn');                         
                                $(".spaceAdjDiv").animate({height: "0px"}, 200);
                                $('.imageThumbnail').slideToggle( "fast");                            
                                $(".imageLarge .spaceAdjDiv").remove();                            
                                $('.imageThumbnail').slick('slickGoTo', currentSlide3);
    });
                                
                $(document).on('click','body .thumbsOffFull', function(event){ 
                                event.preventDefault();                               
                    var thumbHeight2 = $('.fullImageThumbnail').outerHeight();   
                    $(this).addClass('thumbsOnFull').removeClass('thumbsOffFull');                           
                                $("<div class='spaceAdjDiv padAdj'></div>").appendTo('.fullImageLarge .slick-slide');
                                $('.fullImageThumbnail').slideToggle( "fast");
                                $('#fullPhotoGallery').find(".spaceAdjDiv").animate({height: (thumbHeight2/2)-30}, 500);            
    });
                
                $(document).on('click','body .thumbsOnFull', function(event){
                                event.preventDefault();               
                                var currentSlide4 = $('.fullImageLarge').slick('slickCurrentSlide');                                
                    $(this).addClass('thumbsOffFull').removeClass('thumbsOnFull');                           
                                $('#fullPhotoGallery').find(".spaceAdjDiv").animate({height: "0px"}, 200);
                                $('.fullImageThumbnail').slideToggle( "fast");                     
                                $("#fullPhotoGallery .fullImageLarge .spaceAdjDiv").remove();                 
                                $('.fullImageThumbnail').slick('slickGoTo', currentSlide4);
    });

            	$(document).on('click','#photoGallery .popOutOff', function(event){
            		var target = $(this).closest('a').data('target');
            		$(target + ' #imagepreview').attr('src', $('.imageLarge .slick-slide.slick-active .photoGalImage img').attr('src'));
            		$(target + ' .modal-title').html($('.imageLarge .slick-slide.slick-active .imgTitle').text());
            		$(target + ' .modal-footer .pull-left').html($('.imageLarge .slick-slide.slick-active .imgDesc').text());
            		$(target).modal('show');
            	});
            	
            	$(document).on('click','body .popOutOffFull', function(event){
            		event.preventDefault();
            		var target = $(this).closest('a').data('target');
            		$(target + ' #imagepreview').attr('src', $('.fullImageLarge .slick-slide.slick-active .photoGalImage img').attr('src'));
            		$(target + ' .modal-title').html($('.fullImageLarge .slick-slide.slick-active .imgTitle').text());
            		$(target + ' .modal-footer .pull-left').html($('.fullImageLarge .slick-slide.slick-active .imgDesc').text());
            		$(target).modal('show');
            	});
            	
