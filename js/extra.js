/* Every time the window is scrolled ... */
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.showfooter').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','padding-top':'10px','margin-bottom':'-10px',},500);
        }
    }); 
});

/* Every time the window is scrolled ... */
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.showfooter2').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','padding-top':'10px','margin-bottom':'-10px',},800);
        }
    }); 
});

/* Every time the window is scrolled ... */
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.showfooter3').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','padding-top':'10px','margin-bottom':'-10px',},1100);
        }
    }); 
});

/* Every time the window is scrolled ... */
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.showfooter4').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','padding-top':'10px','margin-bottom':'-10px',},1400);
        }
    }); 
});

$(function(){
	var a = 0;
	$('li.carding').click(function(){
		$(this).next('div').fadeToggle(300);
	});
});

$(function(){
	var a = 0;
	$('.resp-menu-y').click(function(){
		$(this).next('div').fadeToggle(500);
	});
});

$(document).ready(function() {
  $('#simple-menu').sidr();
});

$(function() {
				var demo1 = $("#demo1").slippry({
					// transition: 'fade',
					// useCSS: true,
					// speed: 1000,
					// pause: 3000,
					// auto: true,
					// preload: 'visible',
					// autoHover: false
				});
				$('.prev').click(function () {
					demo1.goToPrevSlide();
					return false;
				});
				$('.next').click(function () {
					demo1.goToNextSlide();
					return false;
				});
			});
			
$(function() {
				var demo1 = $("#demo1-1").slippry({
					// transition: 'fade',
					// useCSS: true,
					// speed: 1000,
					// pause: 3000,
					// auto: true,
					// preload: 'visible',
					// autoHover: false
					pager: false
				});
				$('.prev').click(function () {
					demo1.goToPrevSlide();
					return false;
				});
				$('.next').click(function () {
					demo1.goToNextSlide();
					return false;
				});
			});
$(function() {
				var demo1 = $("#demo1-2").slippry({
					// transition: 'fade',
					// useCSS: true,
					speed: 1000,
					autoHoverDelay:10000,
					autoDelay:6000,
					pause: 3000,
					auto: true,
					// preload: 'visible',
					// autoHover: false
					pager: false
				});
			});
$(document).ready(function(){
					var sayi = $("#sayi").val(); // Input içinde ki değeri alıyoruz.
					$("#arti").click(function(){ // Artı butonuna tıklama kazandırdık.
					  if(sayi == 10){ // Burada değer en fazla 10 olacak diyoruz.
						// Eğer sayi 10 ise bir şey yapma
					  }else{
						sayi++; // Değilse arttır diyoruz.
					  }
					  $("#sayi").val(sayi); // Bu yeni değeri Input'a tekrar yazıyoruz.
					});
					$("#eksi").click(function(){ // Yukarıda ki işlemlerin tersini fazladan bir özellik ile
					  // yapıyoruz.
					  if(sayi == 1){ // En az 1 olacağından eksilere düşmesini engelliyoruz bu kodla.
						// Eğer sayi 1 ise bir şey yapma
					  }else{
						sayi--; // Değilse azalt diyoruz.
					  }
					  $("#sayi").val(sayi); // Burada yine Input'a değeri giriyoruz.
					});
				  });
$(document).ready(function(){
					var adet = $("#adet").val(); // Input içinde ki değeri alıyoruz.
					$("#ekle").click(function(){ // Artı butonuna tıklama kazandırdık.
					  if(adet == 10){ // Burada değer en fazla 10 olacak diyoruz.
						// Eğer sayi 10 ise bir şey yapma
					  }else{
						adet++; // Değilse arttır diyoruz.
					  }
					  $("#adet").val(adet); // Bu yeni değeri Input'a tekrar yazıyoruz.
					});
					$("#cikar").click(function(){ // Yukarıda ki işlemlerin tersini fazladan bir özellik ile
					  // yapıyoruz.
					  if(adet == 1){ // En az 1 olacağından eksilere düşmesini engelliyoruz bu kodla.
						// Eğer sayi 1 ise bir şey yapma
					  }else{
						adet--; // Değilse azalt diyoruz.
					  }
					  $("#adet").val(adet); // Burada yine Input'a değeri giriyoruz.
					});
				  });
				  
$(document).ready(function() {	

	//select all the a tag with name equal to modal
	$('a[name=modal]').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();

		//Get the A tag
		var id = $(this).attr('href');


		//transition effect
		$(id).fadeIn(300); 

	});

	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();

		$('#mask').hide();
		$('.window').hide();
	});		

	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});			

});

 $(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});