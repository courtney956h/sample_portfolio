(function($){

    $('.skillContainer').hide()

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

    // 메인슬라이드 : 슬릭슬라이더 연결
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

    // $('.plpa').on("click", function(){
    //     if ( $(this).find('i').hasClass('fa-pause') ) {
    //         $(this).find('i').removeClass('fa-pause')
    //         .addClass('fa-play')
    //         $(".slide-inner").slick("slickPause")
    //     } else {
    //         $(this).find('i').removeClass('fa-play')
    //         .addClass('fa-pause')
    //         $('.slide-inner').slick("slickPlay")
    //     }
    // })

    $('.pala').toggle(
        function() {
            $(this).find('i').removeClass('fa-pause').addClass('fa-play')
            $('.slide-inner').slick('slickPause')
        },
        function() {
            $(this).find('i').removeClass('fa-play').addClass('fa-pause')
            $('.slide-inner').slick('slickPlay')
        }
    )



    // 포트폴리오 갤러리 클릭 이벤트 시 팝업박스 작동
    var href, src, alt, lieq;
    $('.gallery > li > a').on('click', function(e) {
        e.preventDefault();
        lieq = $(this).parent().index()
        $('.galleryPopup').addClass('on')
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')

        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({
            'src': src,
            'alt': alt
        })

        $('.g_txt').appendTo('.galleryPopup').css({
            fontSize:'18px',
            color:'#fff',
            textAlign:'right',
            marginTop:'21%',
            marginRight:'5%'
        })
    })

    $('.galleryPopup .close, .galleryPopup').on('click', function() {
        $('.galleryPopup').removeClass('on')
    })

    $('.popupList').on('click', function(e) {
        e.stopPropagation(); // 부모한테 이벤트 전파 막음
    })

    function changeList(ind) {
        herf = $('.gallery > li').eq(ind).find('a').attr('href')
        src = $('.gallery > li').eq(ind).find('img').attr('src')
        alt = $('.gallery > li').eq(ind).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({
            'scr':src,
            'alt':alt
        }).css({
            opacity: '0.5'
        }).stop().animate({
            opacity: '1'
        }, 500)
    }


    $('.popupList .prev').on('click', function () {
        --lieq;
        if (lieq < 0) {
            lieq = 7;
        }
        changeList(lieq)
    })

    $('.popupList .next').on('click', function () {
        ++lieq;
        if (lieq > 7) {
            lieq = 0;
        }
        changeList(lieq)
    })






    var sct=0;
    $(window).scroll(function() {
        sct = $(this).scrollTop();

        if ( sct >= $('#skills').offset().top ) {
            $('.skillContainer').stop().fadeIn(300)
        } else {
            $('.skillContainer').hide()
        }
    });
    
    $('.section, .h_profile').on('mousewheel', function (e, wh) {
        var index = $(this).index()
        if (wh > 0) {
            var prev = $(this).prev().offset().top;
            $('.depth1 li').eq(index - 1).addClass('on')
            $('.depth1 li').eq(index - 1).silblings().removeClass('on')
            $('html, body').stop().animate({
                scrollTop: prev
            }, 800, 'linear');
        } else if (wh < 0) {
            var next = $(this).next().offset().top;
            $('.depth1 li').eq(index + 1).addClass('on')
            $('.depth1 li').eq(index + 1).silblings().removeClass('on')
            $('html, body').stop().animate({
                scrollTop: next
            }, 800, 'linear');
        }
    });

})(jQuery)