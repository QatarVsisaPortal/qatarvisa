$(document).ready(function() {

var inquiryPath = window.location.pathname;
if(inquiryPath.indexOf("/metrashInquiries-") >= 0){
$("header").remove();
$(".mainpanel").removeClass("mainpanel");
$(".leftpanel").remove();
$(".wpthemeFooter").remove();
if($("a#homelink")[0]){
$("a#homelink")[0].href = $("a#homelink")[0].href.replace("/others/","/metrashInquiries/");
}
}


if(inquiryPath.indexOf("/mobFirst-") >= 0){
	$("header").remove();
	$(".containerBox" &&  ".deptbannerdiv").remove();
	$(".mainpanel").removeClass("mainpanel");
	$(".leftpanel").remove();
	$(".wpthemeFooter").remove();
	if($("a#homelink")[0]){
	$("a#homelink")[0].href = $("a#homelink")[0].href.replace("/others/","/metrashInquiries/");
	}
	}

if(inquiryPath.indexOf("/metrashInquiries/") >= 0){
$("header").remove();
$(".mainpanel").removeClass("mainpanel");
$(".leftpanel").remove();
$(".wpthemeFooter").remove();
if($("a#homelink")[0]){
$("a#homelink")[0].href = $("a#homelink")[0].href.replace("/others/","/metrashInquiries/");
}
}


$(".publicationsLeftnav li").each(function(){
	var hrefUrl = $(this).find('a:first').attr('href');
	var re = /deptSelection=([a-zA-Z0-9]+)&?/;
	var srcDeptartment = re.exec(window.location.href);
	var deptSelection = re.exec(hrefUrl);
    if(srcDeptartment[1] == deptSelection[1]){    
	   $(this).addClass('active').siblings().removeClass('active'); 
	   $(this).children().focus();
	   return;
	}
});

$(".studiesLeftnav li").each(function(){
	var hrefUrl = $(this).find('a:first').attr('href');
	var re = /StudyType=([a-zA-Z0-9]+)&?/;
	var srcDeptartment = re.exec(window.location.href);
	if(srcDeptartment == null) { srcDeptartment = ["StudyType=All&","All"]; }
	var deptSelection = re.exec(hrefUrl);
    if(srcDeptartment[1] == deptSelection[1]){    
	   $(this).addClass('active').siblings().removeClass('active'); 
	   $(this).children().focus();
	   return;
	}
});

$(".pubNav li").each(function(){
	var hrefUrl = $(this).find('a:first').attr('href');
	var re = /publicationType=([a-zA-Z0-9]+)&/;
	var publicationType = re.exec(hrefUrl);
  if(publicationType && window.location.href.indexOf(publicationType[0])>-1){    
   $(this).addClass('active').siblings().removeClass('active'); 
  }
});


$(".navbar-nav li, .service-list li").each(function(){
  if(window.location.href.indexOf($(this).find('a:first').attr('href'))>-1){
    
   $(this).addClass('active').siblings().removeClass('active'); 
  }
  
   });
  
  //Added by Ismail.
  $(".service-list li").each(function(){
         $(this).removeClass('active');
  });


$(".nav li").each(function(){
  if(window.location.href.indexOf($(this).find('a:first').attr('href'))>-1){
    
   $(this).addClass('active').siblings().removeClass('active'); 
  }
  
   });
   
$("#nav li").each(function(){
  if(window.location.href.indexOf($(this).find('a:first').attr('href'))>-1){
    
   $(this).addClass('active').siblings().removeClass('active'); 
  }
   });   


  $(".galleryslide").hover(function(){
        $(this).find("div.snipit").slideDown("fast");
  },function(){
       $(this).find("div.snipit").slideUp("fast");    
   }); 


	//for file upload traffic update
	$("#uploadFile").click(function(){
    $("#upload-file-traffic").click();
	});
			});

// Auto Refresh

//to remove outline for main navigation in mobile
$(document).ready(function()
{
    $(".navbar-nav").mouseover(function(){
            $(this).toggleClass("bar");
        }).mouseout(function(){
            $(this).toggleClass("bar");
    });
});

// Navigation buttons in mobile auto collapse
$(document).ready(function(){
			$("#menuBtn").click(function(){
				$(".mobfeat").addClass('collapse').removeClass('in');
			});
			
			$("#qaBtn").click(function(){
				$(".mobileMenu").addClass('collapse').removeClass('in');
			});
			
			// Home Page main Carousal script
			 $('#carousel-example-generic').on('slid.bs.carousel', function () {
				$holder = $( "ol li.active" );
				$holder.removeClass('active');
				var idx = $('div.active').index('div.item');
				$('ol.carouselIndiExt li[data-slide-to="'+ idx+'"]').addClass('active');
			});
			//Home page main carousal, hide controls/dots when only one slide
			$('#carousel-example-generic .carousel-inner .carousel-inner').each(function() {
				if ($(this).children('div').length === 1) {
					$(this).siblings('.carousel-control, .carousel-indicators').hide();
					$('#carousel-example-generic .carousel-indicators').hide();
				}
			});
		
			$('ol.carouselIndiExt  li').on("click",function(){ 
				$('ol.carouselIndiExt li.active').removeClass("active");
				$(this).addClass("active");
			});
			

});
// dropdown button script for dock effect
$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation()
})

$('#menuBtn').click(function(e){
    e.preventDefault();
    $('#menuBtn').toggleClass('menuext');
	$('#qaBtn').removeClass('menuextqabtn');
});
$('#qaBtn').click(function(e){
    e.preventDefault();
    $('#qaBtn').toggleClass('menuextqabtn');
	$('#menuBtn').removeClass('menuext');
});
// Auto Height
jQuery(document).ready(function(){
setTimeout(function(){
for(var i=0;i<=99;i++) {
equalHeight(jQuery(".column" + i))
}
}, 500 );

});
function equalHeight(group) {
    var tallest = 0;
    group.each(function() {
        var thisHeight = jQuery(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
// Expnad/Collapse for Home page and department Specific page when the browser dimensions are less than 767px
$(document).ready(function()
{
	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');	
	//Open The First Accordion Section When Page Loads	
	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');	
	$('.accordion-content').first().slideDown().toggleClass('open-content');
	// The Accordion Effect
		$('.accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		});
	var lang = $('html').attr('lang');
		if(lang=="en"){
			$('.traffiAcchead').click(function(){
				$(this).next().click();
			});
		}
	return false;
});
// Home Page Expand/Collalpse menu in devices
	jQuery(window).load(function () {
	if(jQuery(window).width()<767) {	
	//Add Inactive Class To All Accordion Headers
	$('.device-accordion-header').toggleClass('device-inactive-header');	
	//Open The First Accordion Section When Page Loads
	$('.device-accordion-header').first().toggleClass('device-active-header').toggleClass('device-inactive-header');
	$('.device-accordion-content').first().slideDown().toggleClass('device-open-content');	
	// The Accordion Effect
	$('.device-accordion-header').click(function () {
		if($(this).is('.device-inactive-header')) {
			$('.device-active-header').toggleClass('device-active-header').toggleClass('device-inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('device-active-header').toggleClass('device-inactive-header');
			$(this).next().slideToggle().toggleClass('device-open-content');
			
		}
		
		else {
			$(this).toggleClass('device-active-header').toggleClass('device-inactive-header');
			$(this).next().slideToggle().toggleClass('device-open-content');
		}
	
	});
	
	return false;
	}
	
});
// for A-/A+ hiding for Tablet & Mobile View

var windowsize = $(window).width();
if (windowsize < 1025){
$('.topNav01 li:nth-child(7), .topNav01 li:nth-child(8)').hide();
}

//for making whole div clickable
$(document).ready(function() {
$('.small-banner, #mostReadNewsImage, #journalistMostDownload, .media, .galleryTest li').click(function(e) {
	e.preventDefault();
	var aClass = $('a', this).attr('class');
	if(aClass && aClass == 'external'){
		window.open($('a', this).attr('href'));
	} else {
		window.location.href = $('a', this).attr('href');
  }
  });
});

//for loading login form inside modal
$('#login-home').on('click', function(e) {
    var src = $(this).attr('data-src');
    var height = $(this).attr('data-height') || 300;
    var width = $(this).attr('data-width') || 400;
    
    $(".yamm-content iframe").attr({'src':src,
                        'height': height,
                        'width': width});
});

// for emergency contact list
/*$(document).ready(function() {
var count = $('.device-accordion-content .emerlist p');
count1 = count.length;
count.each(function(i){
  if(i == count1 - 1){
$(this).html($(this).html().replace('(','<br/> ('));
  }
});
});*/

//for department publications list page	
$(document).ready(function(){	
var selector = '.publicationsLeftnav li';
$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

var ul = $(".publicationsList");
ul.find(":nth-child(4n)").after('<div class="clearfix"></div>');

});	
function downloadImage(imgURL) {
                window.win = open (imgURL,"saveImage","width=1,height=1,menubar=no,left=900,top=1200,toolbar=no,scrollbars=no");
                setTimeout(function(){win.document.execCommand("SaveAs");
                win.close();}, 1000);
}
//for displaying content properly after adding content from Rich Text Editor
$(document).ready(function(){
$('.contentSections > p > img, .contentSections > div > p > img, .contentSections1 > p > img, .contentSections1 > div > p > img, .officials-thumbnail > p > img, .officials-warraper > p > img, .deptheading > p > img, #exportContent > div > p > img').addClass('img-responsive');
$('<br/>').insertBefore('.contentSections > p > img, .deptheading > p > img, .contentSections1 > div > p > img, #exportContent > div > p > img');
$('.contentSections > p, .contentSections > ul, .contentSections > ol, .contentSections1 > p, .contentSections1 > ul, .contentSections1 > ol, #exportContent > div > p, #exportContent > div > ol, #exportContent > div > ul').removeAttr('dir');
});

//for adding home banner slider dots dynamically based on the number of banner images
$(document).ready(function(){ 
  var j = $('.highlights');
  for(var i=0 ; i< j.length ; i++) {
    $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators');
  }
  $('.carousel-indicators > li').first().addClass('active');
});

//for adding 'img-responsive' class to Hotels/Resorts page, Tourist attractions page and Traffic updates
$(document).ready(function(){ 
$('.imgElement > img, .traffic-captcha > img').addClass('img-responsive');
});

//for right side panel with image and text
$(document).ready(function(){ 
$('.media img').addClass('pull-left margin02');

//For MOI Related News
var relatedNews = $('#relatedNews .wpthemeOverflowAuto').children().length;
if(relatedNews<=4){     
  $('#relatedNews').css('display','none');  
}

});

$(document).on('click','a.imageModalLink',function(){
	var target = $(this).data('target');
	$(target + ' #imagepreview').attr('src', $(this).find('img').attr('src'));
	$(target + ' .modal-title').html($(this).parent().find('.imgTitle').text());
	if($(this).data('desc'))
	{
		$(target + ' .modal-footer .pull-left').html($(this).data('desc'));
	}
	else if($(this).parent().find('.imgDesc'))
	{
		$(target + ' .modal-footer .pull-left').html($(this).parent().find('.imgDesc').text());
	}
	else
	{
		$(target + ' .modal-footer .pull-left').html('');
	}
	
	$(target).modal('show');
});


//loader methods
function startSpinner(){
	$('.loader').show();
	$('body').append("<div class='modal-backdrop fade in'></div>");
}

function stopSpinner(){
	$('.loader').hide();
	$('div.modal-backdrop').remove();
}

function getQueryParameter(key)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == key){return pair[1];}
       }
       return(false);
}

$(function(){
	//This is to override the base url mismatch problem for accessiblity skip link
	var winURL = window.location.href.replace(window.location.hash,"");
	$('.skip-element-invisible').attr("href",winURL+$('.skip-element-invisible').attr("href"));	
});