$(document).ready(function(){
  
  
  $('.navbar-collapse ul li:nth-child(4)').addClass('subNav01');
   $('.navbar-collapse ul li:nth-child(5)').addClass('subNav02');
   $('.navbar-collapse ul li:nth-child(6)').addClass('subNav03');
   $('.navbar-collapse ul li:nth-child(7)').addClass('subNav04');
  
  $('.subNav01 b:nth-child(1)').addClass('caret01');
  $('.subNav02 b:nth-child(1)').addClass('caret02');
  $('.subNav03 b:nth-child(1)').addClass('caret03');
  $('.subNav04 b:nth-child(1)').addClass('caret04');  
  
   $('.subNav01 a:nth-child(1)').addClass('min01');
   $('.subNav02 a:nth-child(1)').addClass('min02');
   $('.subNav03 a:nth-child(1)').addClass('min03'); 
   $('.subNav04 a:nth-child(1)').addClass('min04');
  





$('.subNav01').on('show.bs.dropdown', function(){
  
$('.caret01').addClass('caret1');

$('.caret02, .caret03, .caret04').removeClass('caret1');
  
});

$('.subNav02').on('show.bs.dropdown', function(){
  
$('.caret02').addClass('caret1');

$('.caret01, .caret03, .caret04').removeClass('caret1');
  
});

$('.subNav03').on('show.bs.dropdown', function(){
  
$('.caret03').addClass('caret1');

$('caret01, .caret02, .caret04').removeClass('caret1');
  
});

$('.subNav04').on('show.bs.dropdown', function(){
  
$('.caret04').addClass('caret1');

$('.caret02, .caret03, .carte01').removeClass('caret1');
  
});



$(document).click(function(e){
  if($(e.target).parents('.dropdown').length === 0){
   $('.caret').removeClass('caret1');
}
});



$( ".min01" ).on({
    "mouseenter": function() { $('.caret01').addClass('caret1').removeClass('caret3'); },
    "mouseout": function() {  $('.caret01').removeClass('caret1'); },
                
});

$( ".min02" ).on({
    "mouseenter": function() { $('.caret02').addClass('caret1').removeClass('caret3'); },
    "mouseout": function() {  $('.caret02').removeClass('caret1'); },
                
});

$( ".min03" ).on({
    "mouseenter": function() { $('.caret03').addClass('caret1').removeClass('caret3'); },
    "mouseout": function() {  $('.caret03').removeClass('caret1'); }
});

$( ".min04" ).on({
   "mouseenter": function() { $('.caret04').addClass('caret1').removeClass('caret3'); },
    "mouseout": function() {  $('.caret04').removeClass('caret1'); }
});


$( ".subNav01").on({
    "show.bs.dropdown": function() { $('.caret01').addClass('caret2').removeClass('caret1');},
                
    "hide.bs.dropdown": function() { $('.caret01').addClass('caret1').removeClass('caret2'); }          
});

$( ".subNav02").on({
    "show.bs.dropdown": function() { $('.caret02').addClass('caret2').removeClass('caret1');},
    "hide.bs.dropdown": function() { $('.caret02').addClass('caret1').removeClass('caret2'); }
});

$( ".subNav03").on({
    "show.bs.dropdown": function() { $('.caret03').addClass('caret2').removeClass('caret1');},
    "hide.bs.dropdown": function() { $('.caret03').addClass('caret1').removeClass('caret2'); }
});

$( ".subNav04").on({
    "show.bs.dropdown": function() { $('.caret04').addClass('caret2').removeClass('caret1');},
    "hide.bs.dropdown": function() { $('.caret04').addClass('caret1').removeClass('caret2'); }
});

});

