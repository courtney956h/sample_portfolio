(function($){

    function openNav() {
        $('#header').toggleClass('on')
        if ( $('#header').hasClass('on')) {
            $('.nav').css({
                display:'block'
            }).animate({
                right:'0px'
            }, 500)
        } else {
            $('.nav').animate({
                right:'-280px'
            }, 500, function() {
                $(this).css({
                    display:'none'
                })
            })
        }
    }
    $('.open_gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)

    $(window).resize(function(){
        var winWidth = $(this).innerWidth()
        if ( winWidth > 800 ) {
            $('#header').removeClass('on')
            $('.nav').css({
                display:'block',
                right:'0px',
            })
        } else if ( winWidth <= 800 ) {
            $('#header').removeClass('on')
            $('.nav').css({
                display:'none',
                right:'-280px'
            })
        }
    })

    // 메인슬라이드
    $('.slide-inner').slick({
        autoplay:true,
        dots:true,
        autoplaySpeed:3000,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        pauseOnFocus:true,
        draggable:true,
        fade:false,
        arrows:false,
        // prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        // nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
    })

    $('.plpa').on("click", function(){
        if ( $(this).find('i').hasClass('fa-pause') ) {
            $(this).find('i').removeClass('fa-pause')
            .addClass('fa-play')
            $(".slide-inner").slick("slickPause")
        } else {
            $(this).find('i').removeClass('fa-play')
            .addClass('fa-pause')
            $('.slide-inner').slick("slickPlay")
        }
    })

    


})(jQuery)