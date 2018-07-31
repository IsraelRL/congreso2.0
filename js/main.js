(function ($) {
     "use strict";
    // Convert All Image to SVG
    $('img.svg').each(function() {
         var $img = $(this),
             imgID = $img.attr('id'),
             imgClass = $img.attr('class'),
             imgURL = $img.attr('src');
         $.get(imgURL, function(data) {
             // Get the SVG tag, ignore the rest
             var $svg = $(data).find('svg');

             // Add replaced image's ID to the new SVG
             if (typeof imgID !== 'undefined') {
                 $svg = $svg.attr('id', imgID);
             }
             // Add replaced image's classes to the new SVG
             if (typeof imgClass !== 'undefined') {
                 $svg = $svg.attr('class', imgClass);
             }

             // Remove any invalid XML tags as per http://validator.w3.org
             $svg = $svg.removeAttr('xmlns:a');

             // Replace image with new SVG
             $img.replaceWith($svg);
         }, 'xml');
    }); 

    // Sticky Navigation
    var num = 50;
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.home1.main_toolbar').addClass('fixed');
        } else {
            $('.home1.main_toolbar').removeClass('fixed');
        }
    });

    //Scroll Down    
    $('.scroll_down').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
    });

    // Mean Menu
    $(".mobile_menu").meanmenu({
      meanScreenWidth: "991"     
    }); 

    // Parallax
    if($(window).width()>768){
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // Typed Js 
    var d=$("#ty");  
    if(d.length){
        var typed = new Typed('#ty', {
          strings: ["We can help YOU.","Let's Build the Future together."],
          typeSpeed: 90,
          loop:true
        });
    }

    // Counter up
    $(".counter").counterUp({
      time: 3000
    });

    // Testimonial slider
    $(".feedback_slider").owlCarousel({
        items:2,
        margin:30,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:3000,
        smartSpeed:3000,        
        loop: true,
        responsive:{
            300:{
                items:1
            }, 
            768:{
                items:2
            }
        }        
    });

    // Venobox
    $(".brand_veno,.veno,.venobox").venobox();    

    // Partner Slider
    $(".partner_slider").owlCarousel({
        loop:true,
        items:4,
        margin:30,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        nav:false,
         responsive:{
            300:{
                items:1
            },
            480:{
                items:2
            }, 
            768:{
                items:3
            },           
            992:{
                items:4
            }
        }
    }); 
 
    function increaseDecrease($this, command){
        var input_value = $this,
            val = parseInt(input_value.val(), 10);       

        if(!val){
            val = 0;
        }
        if(command == '+'){
            val++;
        }else if(command == '-'){
            val--;
        }
        if(val >= 0){
            input_value.val(val);
        }
    }
    
    $('.up').on('click', function(){
        var input_value = $(this).siblings('.qty');
        increaseDecrease(input_value, '+');
    });
    $('.down').on('click', function(){
        var input_value = $(this).siblings('.qty');        
        increaseDecrease(input_value, '-');
    });

    // Search 
    var $search=$(".search_all");    
    $(".mainmenu ul li:last-child").on('click', function() {
        $search.addClass('search_pos');
    });
    $search.on('focusout', function() {
        $(this).removeClass('search_pos');
    });

    // Main Slider
    $(".main_slider_area").owlCarousel({
        items:1,
        loop:true,      
        autoplay:true,  
        autoplayHoverPause:true,      
        autoplaySpeed:2000,
        smartSpeed:2000,
        nav:true,
        navText:['<i class="icofont icofont-thin-double-left"></i>','<i class="icofont icofont-thin-double-right"></i>'],
    });

    $('.main_slider_area h1, .main_slider_area h5').addClass('fadeInLeft animated');
    $('.main_slider_area p, .main_slider_area a').addClass('fadeInRight animated');
    $('.main_slider_area').on('translate.owl.carousel',function(){
      $('.main_slider_area h1, .main_slider_area h5').removeClass('fadeInLeft').addClass('fadeOutLeft animated');
      $('.main_slider_area p, .main_slider_area a').removeClass('fadeInRight').addClass('fadeOutRight animated');
    });
    $('.main_slider_area').on('translated.owl.carousel',function(){
      $('.main_slider_area h1, .main_slider_area h5').removeClass('fadeOutLeft').addClass('fadeInLeft animated');
      $('.main_slider_area p, .main_slider_area a').removeClass('fadeOutRight').addClass('fadeInRight animated');
    });

    //WOW js
    new WOW().init();  
  
    // Progress Bar
    function progressLine(progressClass) {
       var progressClass = $(progressClass);
       progressClass.each(function () {
            var $this = $(this),
                progressAnimate = function () {
                    $this.toggleClass('slideInLeft');
                };
            $this.waypoint(progressAnimate, { offset: 'bottom-in-view'});
        });
    }
    progressLine('.progress-bar');    

    // Animate the scroll to top
    $('.scroll_area').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 2000);
    });

    //Google Map
    var googleMapSelector = $('#event_loc'),
        myCenter = new google.maps.LatLng(40.8102168,-73.9621749);
    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 10,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: 
            [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
                   
        };
        var map = new google.maps.Map(document.getElementById("event_loc"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'images/marker.png'
        });
        
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    $(window).on('load',function () {
        // preloader
       $("#preloader").delay(200).fadeOut("slow");

        //Isotope & Packery
        $('.grid').isotope({
            layoutMode: 'packery',
            itemSelector: '.grid_item'
        });

        $('.filter_list').on( 'click',"li",function() {
            var $this=$(this),
                filterValue = $this.attr('data-filter');
            $('.grid').isotope({ filter: filterValue });
            $('.filter_list li').removeClass('active');
            $this.addClass('active');        
        });       
         
        /*portfolio sorting*/     
        $('.filter_list').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({ filter: filterValue });
            $(this).addClass('active');
            $('.filter_list li').not(this).removeClass('active');
        });
    }); 
})(jQuery);