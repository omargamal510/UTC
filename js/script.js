

//  Start Loader function 



//  End Loader function 

/* Start Navbar function */

$(document).ready(function () {
    $('#bars').click(function () {
    $(this).toggleClass('bars-toggle');
    $('.beside-nav').toggleClass('beside-toggle');
    $('.beside-nav li').slideToggle();
})
});


var nav = document.querySelector('nav');
var navArr = [
    document.getElementById('nav-a1'),
    document.getElementById('nav-a2'),
    document.getElementById('nav-a3'),
    document.getElementById('nav-a4'),
    document.getElementById('nav-a5')
];

var navHr = [
    document.getElementById('navhr1'),
    document.getElementById('navhr2'),
    document.getElementById('navhr3'),
    document.getElementById('navhr4'),
    document.getElementById('navhr5')
];

var bars      = document.getElementById('bars');
var navP      = document.getElementById('nav-p');
var aboutUs   = document.getElementById('about-us');
var portfolio = document.getElementById('portfolio');
var ourWorks  = document.getElementById('our-works');
var contactUs = document.getElementById('contact-us');
var i = 0;

window.onscroll = function () {
    'use strict';

    if (pageYOffset >= 80) {
        navP.setAttribute('style', 'color:#FFF');
        bars.setAttribute('style', 'color:#FFF;');
        nav.setAttribute('style', 'background-color:#333;color:#333;');
        for(i = 0; i <= 4; i++) {
            navArr[i].setAttribute('style', 'color:#FFF;');
        }

        for(i = 0; i <= 4; i++) {
            navHr[i].setAttribute('style', 'border:1px solid #333;');
        }

        } 
    

    else {
        navP.setAttribute('style', 'color:#333');
        bars.setAttribute('style', 'color:#333;');
        nav.setAttribute('style', 'background-color:#FFF;color:#FFF;');
        for(i = 0; i <= 4; i++) {
            navArr[i].setAttribute('style', 'color:#000;');
        }

        for(i = 0; i <= 4; i++) {
            navHr[i].setAttribute('style', 'border:1px solid #FFF;');
        }


        
    }
};

$(function () {
    $('#nav-a1').mouseenter(function () {
        $(this).css('color', '#1490d7');
        $('#navhr1').css('border', '1px solid #1490d7');
    });
    $('#nav-a1').mouseleave(function () {
        if (pageYOffset >= 80) {
            $(this).css('color', '#FFF');
            $('#navhr1').css('border', '1px solid #333');
        } else {
            $(this).css('color', '#000');
            $('#navhr1').css('border', '1px solid #FFF');
        }
    });


    $('#nav-a2').mouseenter(function () {
        $(this).css('color', '#1490d7');
        $('#navhr2').css('border', '1px solid #1490d7');
    });
    $('#nav-a2').mouseleave(function () {
        if (pageYOffset >= 80) {
            $(this).css('color', '#FFF');
            $('#navhr2').css('border', '1px solid #333');
        } else {
            $(this).css('color', '#000');
            $('#navhr2').css('border', '1px solid #FFF');
        }
    });

    $('#nav-a3').mouseenter(function () {
        $(this).css('color', '#1490d7');
        $('#navhr3').css('border', '1px solid #1490d7');
    });
    $('#nav-a3').mouseleave(function () {
        if (pageYOffset >= 80) {
            $(this).css('color', '#FFF');
            $('#navhr3').css('border', '1px solid #333');
        } else {
            $(this).css('color', '#000');
            $('#navhr3').css('border', '1px solid #FFF');
        }
    });

    $('#nav-a4').mouseenter(function () {
        $(this).css('color', '#1490d7');
        $('#navhr4').css('border', '1px solid #1490d7');
    });
    $('#nav-a4').mouseleave(function () {
        if (pageYOffset >= 80) {
            $(this).css('color', '#FFF');
            $('#navhr4').css('border', '1px solid #333');
        } else {
            $(this).css('color', '#000');
            $('#navhr4').css('border', '1px solid #FFF');
        }
    });

    $('#nav-a5').mouseenter(function () {
        $(this).css('color', '#1490d7');
        $('#navhr5').css('border', '1px solid #1490d7');
    });
    $('#nav-a5').mouseleave(function () {
        if (pageYOffset >= 80) {
            $(this).css('color', '#FFF');
            $('#navhr5').css('border', '1px solid #333');
        } else {
            $(this).css('color', '#000');
            $('#navhr5').css('border', '1px solid #FFF');
        }
    });

});




/* End navbar function */


/* Start Scrolling to specific element */

$(document).ready(function () {
    $('.about-us-li').click(function() {
        $('html, body').animate({
            scrollTop : $('#about-us').offset().top - 100
        }, 1000);
    });


    $('.portfolio-li').click(function() {
        $('html, body').animate({
            scrollTop : $('#portfolio').offset().top - 100
        }, 1000);
    });

    $('.our-works-li').click(function() {
        $('html, body').animate({
            scrollTop : $('#our-works').offset().top - 50
        }, 1000);
    });

    $('.partners-li').click(function() {
        $('html, body').animate({
            scrollTop : $('#partners').offset().top - 90
        }, 1000);
    });

    $('.contact-us-li').click(function() {
        $('html, body').animate({
            scrollTop : $('#contact-us').offset().top - 50
        }, 1000);
    });
});

/* End Scrolling specific element  */



/* Start Bx-slider */

$(document).ready(function () {

    $('.bxslider').bxSlider({
    controls:false,
    pager: true,
    pause:4000,
    auto: true,
    infiniteLoop : true,
    touchEnabled: false,
    autoDirection: 'next',    
});

});

/* End Bx-slider */


/* Start our works us functions */
$(document).ready(function () {
    $('.show-more').click(function () {
        $(this).fadeOut();
        $('.more-pics').slideDown();
        $('.show-less').fadeIn();
    });

    $('.show-less').click(function () {
        $(this).fadeOut();
        $('.more-pics').slideUp();
        $('.show-more').fadeIn();
        $('html, body').animate({
            scrollTop : $('#our-works').offset().top - 100
        }, 1000);
    });
});

/* End our works functions */




/* Start Scrolling Functions */

function aboutUsScroll() {

    if (pageYOffset >= aboutUs.offsetTop - 300) {
        aboutUs.setAttribute('style', 'opacity:1;');
    }

} addEventListener('scroll', aboutUsScroll);


function portfolioScroll () {
    if (pageYOffset >= portfolio.offsetTop - 400) {
        portfolio.setAttribute('style', 'opacity:1;');
    }
} addEventListener('scroll', portfolioScroll);

function ourWorksScroll () {
    if (pageYOffset >= ourWorks.offsetTop - 400) {
        ourWorks.setAttribute('style', 'opacity:1;');
    }
} addEventListener('scroll', ourWorksScroll);

function partnersScroll () {
    if (pageYOffset >= partners.offsetTop - 400) {
        partners.setAttribute('style', 'opacity:1;');
    }
} addEventListener('scroll', partnersScroll);

function contactUsScroll() {
    if (pageYOffset >= contactUs.offsetTop - 400) {
        contactUs.setAttribute('style', 'opacity:1;');
    }
} addEventListener('scroll', contactUsScroll)

/* End Scrolling Functions */