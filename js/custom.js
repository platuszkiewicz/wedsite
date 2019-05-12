/**	
	* Template Name: MU Material
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. MOBILE MENU
	-2. EXPERIENCE SLIDER (Owl Carousel)
	-3. EDUCATION SLIDER (Owl Carousel)
	-4. PORTFOLIO SLIDER
	-5. COUNTER
	-6. TESTIMONIAL SLIDER (Owl Carousel)	
	7. MENU SMOOTH SCROLLING
	8. PRELOADER
	9. CALL TO ABOUT
	10. BOTTOM TO UP 
	11. PARALLAX HEADER
	-12. HIRE ME SCROLL
	
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. Mobile MENU
	/* ----------------------------------------------------------- */

    jQuery(".button-collapse").sideNav();
    
	/* ----------------------------------------------------------- */
	/*  2. Experience SLider(Owl Carousel)
	/* ----------------------------------------------------------- */

    /* ----------------------------------------------------------- */
	/*  3. EDUCATION SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

    /* ----------------------------------------------------------- */
	/*  4. PORTFOLIO SLIDER
	/* ----------------------------------------------------------- */

	/* ----------------------------------------------------------- */
	/*  5. COUNTER
	/* ----------------------------------------------------------- */
	// jQuery('.counter').counterUp({
        // delay: 10,
        // time: 1000
    // });	  
	/* ----------------------------------------------------------- */
	/*  6. TESTIMONIAL SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

	/* ----------------------------------------------------------- */
	/*  7. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 
	
	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $(".menu-scroll"),
	topMenuHeight = topMenu.outerHeight()+13,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+15;
	  jQuery('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }           
	})
    
	/* ----------------------------------------------------------- */
	/*  8. PRELOADER 
	/* ----------------------------------------------------------- */ 

	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('.progress').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })
	  
	/* ----------------------------------------------------------- */
	/* 9. CALL TO SLUB
	/* ----------------------------------------------------------- */ 
	
	jQuery(".call-to-about").click(function() {
    jQuery('html,body').animate({
        scrollTop: $("#skill").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/* 10. BOTTOM TO UP
	/* ----------------------------------------------------------- */ 

	jQuery(".up-btn").click(function() {
    jQuery('html,body').animate({
        scrollTop: $("#header").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/* 11. PARALLAX HEADER
	/* ----------------------------------------------------------- */ 

    jQuery('.parallax').parallax();

	/* ----------------------------------------------------------- */
	/* 12. HIRE ME SCROLL
	/* ----------------------------------------------------------- */ 


	/* ----------------------------------------------------------- */
	/* PL - custom
	/* ----------------------------------------------------------- */ 
	
	// ustaw wysokosc mapy Kościoła	
	var setHeight1 = $("#img-kosciol").height();
	$("#div-map-kosciol").height(setHeight1);
	$(window).on('resize',function(){
		var setHeight1 = $("#img-kosciol").height();
		$("#div-map-kosciol").height(setHeight1);
	});

	// ustaw wysokosc mapy Pałacyku
	var setHeight2 = $("#img-kasyno").height();
	$("#div-map-kasyno").height(setHeight2);
	$(window).on('resize',function(){
		var setHeight2 = $("#img-kasyno").height();
		$("#div-map-kasyno").height(setHeight2);
	});
	
	// zmniejsz wysokość podkowy dla mobilnych
	function mobileCheck() {
		var check = false;
		(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	}
    var isMobile = mobileCheck();

	$( document ).ready(function() {
		if(isMobile){
			jQuery("#horseshoe").height("34px");
		} 
	});
	
	// ustaw link napisu "OLA PIOTREK"
	var anchor = document.getElementById("brand-logo-inscription");
	var result = anchor.protocol; 
	
	if(result == 'file:'){ // local
		anchor.setAttribute("href", "index.html");
	} else if (result =='http:') { // www
		anchor.setAttribute("href", "/");
	} else { // undefined
		// do nothing, default: index.html
	}
	
	// RSVP
    (function () {
       emailjs.init("user_XkRsr5jWXuhLmNhMch6wx");
    })();


    $('input[type=radio][name=presence]').change(function () {
            if (this.value == 'TAK') {
                $('#companion').parent().show();
            }
            else if (this.value == 'NIE') {
                $('#companion').parent().hide();
            }
        });

	$('#btn-rsvp').click(function(ev){
		ev.preventDefault();

        if (validateForm()) {
            sendEmail(function () {
                showThankYou();
                clearForm();
            });
        }
	});

    $('#contact-name').on('input', function () {
        validateForm();
    });

    function validateForm() {
        if ($('#contact-name').val() == "") {
            $('#contact-name').addClass('invalidInput');
            $('label[for="contact-name"]').addClass('invalidLabel');
            return false;
        } else {
            $('#contact-name').removeClass('invalidInput');
            $('label[for="contact-name"]').removeClass('invalidLabel');
            return true;
        }
    }

    function sendEmail(callback) {
        // email js
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "default_service";
        var template_id = "wedsite";

        var myform = $("form#rsvp-form");

        emailjs.sendForm(service_id, template_id, myform[0])
            .then(function () {
                console.log("SENT", myform[0].contactName.value, myform[0].presence.value,myform[0].companion.value, myform[0].contactMessage.value);
                callback();
            }, function (err) {
                alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                //myform.find("button").text("Send");
            });
        return false;

        // end email js
    }
	
	function showThankYou(){
		alert("Dziekujemy za informację");
	}
	
	function clearForm() {
		$('#contact-name').val("");
        document.getElementById("presence-radio").checked = true;
        $('#textarea1').val("");
        $('#companion').val("");
        $('.submit-btn').blur();
	}
});