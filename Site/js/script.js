/*
  ==========================================================
 |  Matheus Lino Portfolio
 | ---------------------------------------------------------
 |  Versão: 2.0
 |  Ano: 2019
 |  Developed by: Matheus Lino
 |  LinkedIn: https://br.linkedin.com/in/matheus-lino
 |  GitHub:   https://matheuslino.github.io
 | ---------------------------------------------------------
 |  Closed Source Software - All Rights Reserved
 |  Any kind of copy (partial or full) is prohibited
  ==========================================================
*/

// document ready
$(function(){

/*-------------------------------------------------------
General configurations
-------------------------------------------------------- */
// Global vars
var server = 'https://matheuslino.com.br/email/email.php';

// Fix Tooltip click
$("body").tooltip({ selector: '[data-toggle=tooltip]' });

// Lodash Debounce
debounce = function(func, wait, immediate){
	var timeout;
	return function(){
		var context = this, args = arguments;
		var later = function(){
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

$('[data-toggle="tooltip"]').tooltip({
	trigger : 'hover'
});

// Sleep Function
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/*-------------------------------------------------------
Header animation
-------------------------------------------------------- */

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value":85, "density": {
				"enable": true, "value_area": 789.1476416322727
			}
		}
		, "color": {
			"value": "#f4f4f4"
		}
		, "shape": {
			"type":"circle", "stroke": {
				"width": 0, "color": "#000000"
			}
			, "polygon": {
				"nb_sides": 4
			
}			, "image": {
				"src": "img/github.svg", "width": 100, "height": 100
			}
		}
		, "opacity": {
			"value":0.2019226793140727, "random":false, "anim": {
				"enable": false, "speed": 7.9120879120879115, "opacity_min": 0.1, "sync": false
			}
		}
		, "size": {
			"value":5.5, "random":true, "anim": {
				"enable": false, "speed": 40, "size_min": 0.1, "sync": false
			}
		}
		, "line_linked": {
			"enable": false, "distance": 120, "color": "#f4f4f4", "opacity": 0.19546529723245905, "width": 1.2
		}
		, "move": {
			"enable":true, "speed":2.5, "direction":"none", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
				"enable": true, "rotateX": 600, "rotateY": 1200
			}
		}
	}
	, "interactivity": {
		"detect_on":"window", "events": {
			"onhover": {
				"enable": false, "mode": "grab"
			}
			, "onclick": {
				"enable": true, "mode": "push"
			}
			, "resize":true
		}
		, "modes": {
			"grab": {
				"distance":175.84415584415586, "line_linked": {
					"opacity": 0.50246529723245905
				}
			}
			, "bubble": {
				"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
			}
			, "repulse": {
				"distance": 200, "duration": 0.4
			}
			, "push": {
				"particles_nb": 3
			}
			, "remove": {
				"particles_nb": 2
			}
		}
	}
	, "retina_detect":true
}

);

/*-------------------------------------------------------
Refresh links
-------------------------------------------------------- */

function clearMenu(){
	$("nav ul").find('.active').removeClass("active");
	$("#navbarResponsive a:after").css({"width":"10%"});
}

/*-------------------------------------------------------
Scroll page animation
-------------------------------------------------------- */

function scrollDown(h){
	$("html, body").animate({ scrollTop: h },
	{
		duration: 1000,
		specialEasing: {
			height: "easeOutBounce"
		}
	});
}

function scrollUp(){
	$("html, body").animate({ scrollTop: 0 },
	{
		duration: 1000,
		specialEasing: {
			height: "easeOutBounce"
		}
	});
}

// Scroll Down - Arrow
$(".arrows").on('click', function(){
	$('[data-toggle="tooltip"]').tooltip('hide');
	scrollDown($(window).height() - $('.navbar').height());	
});

// Scroll Down - Button see more
$(".masthead button").on('click', function(){
	scrollDown($(window).height() - $('.navbar').height());	
});


(function(){

	// Variables
	var 	 		 offset = $(window).height() * 3/4;
	var 	 		 offset2 = $(window).height() * 2/6;
	var 				about = $("#about").offset().top;
	var 		portfolio = $("#portfolio").offset().top;
	var 				team  = $("#team").offset().top;
	var 			contact = $("#contact").offset().top;

	// $(this).addClass("active");

	// Content animation
	function sectionAnimation(){

		// Variables
		var documentTop = $(document).scrollTop();

		$("body .animation").each(async function(){

			// Variables
			var itemTop = $(this).offset().top;

			if(documentTop > itemTop - offset){
				$(this).addClass('animationStart');
			}
			else{
				// $(this).removeClass('animationStart');
			}
		});

		if($(".b").hasClass("animationStart")){
			bars();
		}
	}

	function currentPage(){

		// Variables
		var documentTop = $(document).scrollTop();

		// Update Menu Link
		if(documentTop >= team-offset2){
			clearMenu();
			$("a[href='#team']").addClass("active");
		}
		else if(documentTop >= portfolio-offset2){
			clearMenu();
			$("a[href='#portfolio']").addClass("active");
		}
		else if(documentTop >= about-offset2){
			clearMenu();
			$("a[href='#about']").addClass("active");
		}
		else{
			clearMenu();
			$("a[href='#home']").addClass("active");
		}
	}

	function navStyle(){
		// Update Nav styles - Fill
		if ($(this).scrollTop() > $(window).height() - $('.navbar').height()-1) {
			$('.navbar').removeClass('clearNavbar');
			$('.navbar').addClass('fillNavbar');
			$('.navbar').addClass('shadow');
		} else {
			$('.navbar').removeClass('fillNavbar');
			$('.navbar').removeClass('shadow');
			$('.navbar').addClass('clearNavbar');
		}
	}

	// First initialization
	sectionAnimation();
	currentPage();
	navStyle();

	// Page Scroll
	$(window).scroll(debounce(function () {

		// Show arrow scroll top
		if ($(this).scrollTop() > 100) {
			$('a[href="#top"]').fadeIn();
		} else {
			$('a[href="#top"]').fadeOut();
		}

		// Udates
		sectionAnimation();		// Animations - Content Load
		currentPage();				// Current Page
		navStyle();						// Fiill (or not) the nav


	}, 200));
}());


// Click in the Nav Button
$('nav button').on('click',function(){

	// Add Styles
	$('.navbar').removeClass('clearNavbar');
	$('.navbar').addClass('fillNavbar');
	$('.navbar').addClass('shadow');
});

// Click in the header
$(".particles-js-canvas-el").on('click',function(){
	$('.navbar').removeClass('fillNavbar');
	$('.navbar').removeClass('shadow');
	$('.navbar').addClass('clearNavbar');
});

// Links
$('nav a').on('click', function(){


	event.preventDefault();

	if($(this).attr('href') == "#logo"){
		scrollUp();
	}
	else{
		$('[data-toggle="tooltip"]').tooltip('hide');

		var page = $(this).attr('href');

		if(page != "#language"){

			// Clear Menu
			clearMenu();

			// $('#navbarResponsive').hide();

			// Add Active Class
			$(this).addClass("active");

			// var distance = -$('.navbar').height();
			var distance = 0;

			if(page == "#home")
				distance = 0;
			else if (page == "#about")
				distance += -40 + $(""+page+"").offset().top;
			else
				distance += $(""+page+"").offset().top;

			scrollDown(distance);
		}
	}

});

/*-------------------------------------------------------
Scroll page animation - Scroll top
-------------------------------------------------------- */

$('a[href="#top"]').click(function(){	
	$('[data-toggle="tooltip"]').tooltip('hide');
	$('html, body').animate({scrollTop : 0},800);
	return false;
});

/*-------------------------------------------------------
Skills bar animations
-------------------------------------------------------- */

async function bars() {
	await sleep(1100);

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		}, 1500);
	});
}

/*-------------------------------------------------------
Portfolio images
-------------------------------------------------------- */

// Update portfolio image
function updateImage(obj, url){
	obj.css('background-image',url);
}

// Check if there is a project class
if($(".project").length > 0){

	// Variables
	var totalImgs = $('.project .head img').length;

	$('.project .head').each(function(){

		// Variables
		var   url = 'url(';
		var  root = $(this);
		var nImgs = root.children('img').length;
		var 	aux = totalImgs.toString(10).length;
		var 	 id = '';
		var  cont = '';

		// Set url for the first image
		url += $(this).find("img").attr('src');
		url += ')';
		id = url.substring(16,(16+aux));
		id = id.split('.')[0];
		cont = id;

		// Set background
		updateImage(root, url);

		// Add circles links in images
		for(var i = 0; i < nImgs; i++){
			root.children('.numberImages').append('<i class="fas fa-circle" id="'+cont+'"></i>');
			cont++;
		}

	});

	// Circles links view
	$(".project").on('mouseenter',function(){
		$(this).find('.numberImages').fadeIn();		
	});
	$(".project").on('mouseleave',function(){
		$(this).find('.numberImages').fadeOut();		
	});

	// Change background when circles links are active
	$(".project .head i").on('mouseenter',function(){

		// Variable
		var parent = $(this).parent().parent();
		var 	  id = $(this).attr('id');
		var 	 url = 'url(img/project/'+id+'.jpg)';

		updateImage(parent, url);

	});
	$(".project .head i").on('mouseleave',function(){

		// Variable
		var  parent = $(this).parent().parent();
		var 		 id = $(this).parent().children().attr('id');
		var 		url = 'url(img/project/'+id+'.jpg)';

		updateImage(parent, url);

	});

}

/*-------------------------------------------------------
Modal and SlideShow
-------------------------------------------------------- */

// Modal with project details
$('.project').on('click',function(){

	// Variables
	var 		root = $(this);
	var 	 title = root.find('.name').html();
	var subtitle = root.find('.desc').html();
	var 		info = root.find('.info').html();
	var 	client = root.find('.client').html();
	var 		tecs = root.find('.tec').html();

	// Insert project data into modal
	$('#projectView .infoBox #title').html(title);
	$('#projectView .infoBox #subtitle').html(subtitle);
	$('#projectView .infoBox #info').html(info);
	$('#projectView .infoBox #client').html(client);
	$('#projectView .infoBox #tec').html(tecs);

	// Reset Modal images
	$('#projectView .swiper-wrapper').html("");

	// Add images
	$(this).find(".numberImages").children().each(function(){

		// Variables
		var 		 id = $(this).attr('id');
		var content = "<div class='swiper-slide' style='" +
		"background-image: url(img/project/" +
		id + ".jpg)'>.</div>";

		$('#projectView .swiper-wrapper').append(content);

	});

	// Swiper
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	$('#projectView').modal('show');
	$('#projectView').on('shown.bs.modal', function (e) {
		swiper.update();
	});

	$('#projectView').on('hidden.bs.modal', function (e) {
		swiper.update();
	});

});

/*-------------------------------------------------------
Contact
-------------------------------------------------------- */

// Field validation
if($("#formContact").length > 0){

	// Variables
	var 					submit = $("#formContact").find('button');
	var 					 input = $("#formContact").find('input');
	var 				textArea = $("#formContact").find('textarea');
	var 						bool = false;
	var 	 inputNameDesc = $('#inputNameDesc').html();
	var 	inputEmailDesc = $('#inputEmailDesc').html();
	var inputMessageDesc = $('#inputMessageDesc').html();

	submit.on('click', function(){
		event.preventDefault();

		// Variables
		var  	 inputName = $('#inputName').val();
		var   inputEmail = $('#inputEmail').val();
		var inputMessage = $('#inputMessage').val();

		if(textArea.val().length==0){
			textArea.focus();
			textArea.addClass("inputFocus");
			textArea.attr("placeholder", inputMessageDesc).val("").focus();
			bool = false;
		}
		else{			
			textArea.removeClass("inputFocus");
			bool = true;
		}
		input.each(function(){
			if($(this).val().length==0){
				$(this).focus();				
				$(this).addClass("inputFocus");
				if($(this).attr('id') =='inputEmail')
					$(this).attr("placeholder", inputEmailDesc).val("").focus();
				else
					$(this).attr("placeholder", inputNameDesc).val("").focus();
				bool = bool&&false;
			}
			else{
				$(this).removeClass("inputFocus");
				bool = bool&&true;				
			}
		});

		// SenD form
		if(bool){

			$.ajax({
				url : server,
				type : 'post',
				dataType: "json",
				data : {
					mail: "",
					name: inputName,
					email: inputEmail,
					message: inputMessage
				},
				beforeSend: function(){
					$("#submitButton").html($("#submitButtonBefore").html());
				},
				error: function(){
					$("#submitButton").html('error');
				},
				success: function(e){
					if(e.status=="failed")
						$("#submitButton").html('error');
					else
						$("#submitButton").html($("#submitMessageOk").html());
					$("#alertMessage").fadeIn("slow");
				},
				complete: function(){
					setTimeout(function(){
						$("#submitButton").html($("#submitButtonDesc").html());
						$('#inputName').val("");
						$('#inputEmail').val("");
						$('#inputMessage').val("");						
						$("#alertMessage").fadeOut("slow");
					}, 5000);
					
				}
			});
		}
	});
}
}); // end document ready