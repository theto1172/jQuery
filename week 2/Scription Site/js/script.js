(function(){ 
	"use strict"

	// Smooth Scroll
	$('nav ul li a').click(function(t){
		t.preventDefault();
		const e = $(this).attr('href');

		$('html,body').stop().animate({
			scrollTop:$(e).offset().top - 120
		},800,'easeInCirc');

	}),

	$('header .logo').click(function(){
	   $('html,body').stop().animate({
	   	scrollTop:$('body').offset().top
	   },800,'easeInCirc'); 

	}),


// Flexslider
 $(window).on('load',function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshowSpeed: 3e3,
    pauseOnHover:!0,
    directionNav: !1,
    before: function() {
            $(".cta").css("bottom", "-223px")
        },
    start: function() {
            $(".cta").animate({
                bottom: "0"
            }, 600, "easeInCirc")
        },
    after: function() {
            $(".cta").animate({
                bottom: "0"
            }, 600, "easeInCirc")
        }



  })
}),

// Tabs

 $('#tabs > ul > li> a').click( function(t){
 	t.preventDefault();
 	 $('#tabs > ul > li> a').css( { background: "#C8D6AF"});
 	 $(this).css({background: "#F7FFEA"});
 	 const e = $(this).attr('href');
 	 $('#tabs > div:visible').fadeOut(200, function(){
 	 	$(e).fadeIn(200);
 	 })
 }),


// Content Rotator

function () {
    let t = 1;
    !function e() {
    $(`#rotator blockquote:nth-child(${t})`).fadeIn(2e3, function() {
        $(this).is("#rotator blockquote:last-child") ? setTimeout(function() {
            $(`#rotator blockquote:nth-child(${t})`).fadeOut(2e3, function() {
                t = 1,
                e()
            })
        }, 7e3) : setTimeout(function() {
            $(`#rotator blockquote:nth-child(${t})`).fadeOut(2e3, function() {
                t++,
                e()
            })
        }, 7e3)
        })
    }()
}(),

// Features Rotator

function() {
    let t = 1
      , e = 0;
    const o = $("#features ul:first-of-type li").length;
    let n = $("#features ul:first-of-type").clone();
    $("#features ul:first-of-type li:nth-child(1)").css({
        color: "#FF5964",
        fontWeight: "600"
    }),
    $("#features").append(n),
    function i() {
        setTimeout(function() {
        t <= o ? (e -= 30,
        $("#features").animate({
            top: e + "px"
        }, 500, function() {
            $("#features ul:first-of-type li:nth-child(" + (t + 1) + ")").css({
                color: "#FF5964",
                fontWeight: "600"
            }),
            t++,
            i()
        })) : ($("#features ul:first-of-type").remove(),
        n = $("#features ul:first-of-type").clone(),
        $("#features").css("top", "0"),
        $("#features").append(n),
        e = 0,
        t = 1,
        $("#features ul:first-of-type li:nth-child(1)").css({
            color: "#FF5964",
            fontWeight: "600"
        }),
        i())
        }, 1500)
    }()
}();



})();


 


