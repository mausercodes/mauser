$(function(){
	$("#myForm").ajaxForm(function() { 
      	alert("Thank you for your comment!"); 
   	});

   	cbpFixedScrollLayout.init();
   	
   	new WOW().init();

   	$('.menu a').smoothScroll();
   	// $('.cbp-fbscroller').midnight();

   	$(".aboutMe").on("click", function(e){
   		e.preventDefault();
   		$(".modal").addClass("show");
   	});

   	$(".close").on("click", function(e){
   		e.preventDefault();
   		$(".modal").removeClass("show");
   	});

	$(".fa-bars").on("click", function(){
		$(".dropdown").toggleClass("open");
	});

	$(window).on("scroll", function(){
		$(".dropdown").removeClass("open");
	});

   $('#myForm').ajaxForm(function() { 
      alert("Thank you for your comment!"); 
   }); 
});