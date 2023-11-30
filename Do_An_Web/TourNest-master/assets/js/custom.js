$(document).ready(function(){

	"use strict";

    

        /*==================================

* Author        : "ThemeSine"

* Template Name : Travel HTML Template

* Version       : 1.0

==================================== */


        /*=========== TABLE OF CONTENTS ===========

1. Scroll To Top
2. Range js
3. Countdown timer
4. owl carousel
5. datepicker
6. Smooth Scroll spy
7. Animation support
======================================*/
    

    // 1. Scroll To Top 

		$(window).on('scroll',function () {

			if ($(this).scrollTop() > 600) {

				$('.return-to-top').fadeIn();

			} else {

				$('.return-to-top').fadeOut();

			}

		});

		$('.return-to-top').on('click',function(){

				$('html, body').animate({

				scrollTop: 0

			}, 1500);

			return false;

		});

    // 2. range js
        
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 12000,
            values: [ 2677, 9241 ],
            slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        
        
        // Quantity Buttons Shop
    
        $(".qtyplus").on("click", function(){
        var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) + 1,
                d = parseInt(b.attr("max"), 10);
            d || (d = 9999999999), c <= d && (b.val(c), b.change())
        });
        $(".qtyminus").on("click", function(){
            var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) - 1,
                d = parseInt(b.attr("min"), 10);
            d || (d = 1), c >= d && (b.val(c), b.change())
        });


    // 4. owl carousel
    
        // i. #testimonial-carousel
    
        
        var owl=$('#testemonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            
            //nav:false,
            //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            
            dots:true,
            autoplayHoverPause:true,
        
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            
            
        });

    // 5. datepicker
            $('[data-toggle="datepicker"]').datepicker();

    // 6. Smooth Scroll spy
        
        $('.header-area').sticky({
           topSpacing:0
        });
        
        //=============

        $('li.smooth-menu a').bind("click", function(event) {
            event.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - -1
            }, 1200,'easeInOutExpo');
        });
        
        $('body').scrollspy({
            target:'.navbar-collapse',
            offset:0
        });

    $('.header-area').sticky({
        topSpacing:0
    });

    //=============

    $('li.smooth-menu a').bind("click", function(event) {
        event.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - -1
        }, 1200,'easeInOutExpo');
    });

    $('body').scrollspy({
        target:'.navbar-collapse',
        offset:0
    });

    // 7.animation support

        $(window).load(function(){

            $(".about-us-txt h2").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".about-us-txt h2").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").addClass("animated fadeInDown").css({'opacity':'0'});

        });
        
        //fixed
    //scroll


});
    //pagination
var activePage  = document.querySelector('.pagination-active');
var currentPage = parseInt(activePage.textContent);
changePage(currentPage);

function changePage(pageNumber) {
    currentPage = parseInt(pageNumber);
    var paginationLinks = document.getElementsByClassName('pagination-inner')[0].getElementsByTagName('a');
    for (var i = 0; i < paginationLinks.length; i++) {
        paginationLinks[i].classList.remove('pagination-active');
    }
    paginationLinks[pageNumber - 1].classList.add('pagination-active');

    var startId = (pageNumber - 1) * 16 + 1;
    var endId = pageNumber * 16;

    for (var j = 1; j <= 210; j++) {
        var itemId = document.getElementById(String(j));
        if (itemId) {
            if (j >= startId && j <= endId) {
                itemId.style.display = 'block';
            } else {
                itemId.style.display = 'none';
            }
        }
    }

}
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

function nextPage() {
    if (currentPage<14){
        currentPage++;
        changePage(currentPage);
    }
}

    // đặt tour
var packageImages = document.getElementsByClassName('packageImage');

// Lặp qua từng phần tử trong HTMLCollection
for (var i = 0; i < packageImages.length; i++) {
    packageImages[i].addEventListener('click', function() {
        window.location.href = "detail.html"; // Thay đổi URL tới liên kết mong muốn
    });

}
function sendMail(){
    window.location.href = "mailto:thinh913011@gmail.com?subject=THƯ GÓP Ý ĐÁNH GIÁ NGƯỜI DÙNG";
}




	