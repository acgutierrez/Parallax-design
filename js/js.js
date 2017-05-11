 $(document).ready(function(){

     $('.explore').click(function() {
       $('html, body').animate({
         scrollTop: $("div.createDiv").offset().top
       }, 900)
     })

     $('.discover').click(function() {
       $('html, body').animate({
         scrollTop: $("div.discoverDiv").offset().top
       }, 1000)
     })

   });
