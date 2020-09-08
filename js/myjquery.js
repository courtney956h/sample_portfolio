(function($){

    // $('.about_header').hide()
    // $('.pro_p').hide()
    // $('.pro_c').hide()
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
    var href, src, alt, lieq

    $('.gallery > li > a').on('click', function(e) {
        e.preventDefault();
        lieq = $(this).parent().index()
        $('.galleryPopup').addClass('on')
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr('src', src)
        $('.popupList > div > a > img').attr('alt', alt)

        $('.galleryPopup').find('.g_txt').remove()
        $(this).parent().find('.g_txt').clone().appendTo('.galleryPopup').css({
            fontSize:'18px',
            color:'#fff',
            textAlign:'right',
            marginTop:'21%',
            marginRight:'5%',
        })

        

    })




    $('.galleryPopup .close').on('click', function() {
        $('.galleryPopup').removeClass('on')
    })

    $('.popupList').on('click', function(e) {
        e.stopPropagation(); // 부모한테 이벤트 전파 막음
    })

    function changeList(ind) {
        href = $('.gallery > li').eq(ind).find('a').attr('href')
        src = $('.gallery > li').eq(ind).find('img').attr('src')
        alt = $('.gallery > li').eq(ind).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({
            'src':src,
            'alt':alt
        }).css({
            opacity: '0.5'
        }).stop().animate({
            opacity: '1'
        }, 500)

        $('.galleryPopup').find('.g_txt').remove()
            $('.gallery > li').eq(ind).find('.g_txt').clone().appendTo('.galleryPopup').css({
                fontSize:'18px',
                color:'#fff',
                textAlign:'right',
                marginTop:'21%',
                marginRight:'5%',
            })
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
        // 화면 on off
        if ( sct >= $('#aboutme').offset().top ) {
            $('.about_header').stop().fadeIn(300)
        } else {
            $('.about_header').hide()
        }

        if ( sct >= $('#aboutdetail').offset().top ) {
            $('.pro_p').stop().fadeIn(300)
            $('.pro_c').stop().fadeIn(600)
        } else {
            $('.pro_p').hide()
            $('.pro_c').hide()
        }

        if ( sct >= $('#skills').offset().top ) {
            $('.skillContainer').stop().fadeIn(300)
        } else {
            $('.skillContainer').hide()
        }
    });
    


    // 마우스 휠 이벤트
    $(".section").on("mousewheel", function (e, wh) {
        var index = $(this).index()
        // 마우스 휠 올릴때
        if (wh > 0) {
            var prev = $(this).prev().offset().top;
            $('.depth1 li').eq(index - 1).addClass('on')
            $('.depth1 li').eq(index - 1).siblings().removeClass('on')
            $("html, body").stop().animate({
                scrollTop: prev
            }, 800, "linear");

        // 마우스 휠 내렸을때
        } else if (wh < 0) {
            var next = $(this).next().offset().top;
            $('.depth1 li').eq(index + 1).addClass('on')
            $('.depth1 li').eq(index + 1).siblings().removeClass('on')
            $("html, body").stop().animate({
                scrollTop: next
            }, 800, "linear");
        }

    });

    // // 섹션에 마우스휠 이벤트 연결
    // $(".section").on("mousewheel", function (event, delta) {
        // 마우스 휠 올릴때
    //     if (delta > 0) {
    //         var prev = $(this).prev().offset().top
    //         $('html, body').stop().animate({
    //             scrollTop: prev
    //         }, 800)
        // 마우스 휠 내릴때
    //     } else if (delta < 0) {
    //         var next = $(this).next().offset().top
    //         $('html, body').stop().animate({
    //             scrollTop: next
    //         }, 800)
    //     }
    // }








    // contact 부분

    $('form').submit(function(){
        // 이름 유효성 체크
        var name = $('#name').val()
        var namechk = /^[가-힣]+$/
        if ( !(namechk.test(name)) ) {
            alert('한글이 아닙니다.')
            $('#irum').focus()
            $('#irum').select()
            return false
        }

        // 이메일 유효성 체크
        var email = $('#email').val()
        var emailchk = /^[a-zA-Z0-9]+$/   // 특수문제 제외 
        if ( !emailchk.test(email) ) {
            alert('이메일 형식이 틀립니다.')
            $('#email').focus()
            $('#email').select()
            return false
        }
        
        // 도메인타입 유효성 체크
        var domain = $('#domain').val()
        var domainchk = /^[a-zA-Z0-9]+[\.][a-z]+$/
        if ( domain.length === 0 ) {
            alert('도메인을 선택해 주세요.')
            $('#domainType').focus()
            return false
        } else {
            if ( !domainchk.test(domain) ) {
                alert('형식에 맞지 않습니다.')
                $('#domainType').focus()
                return false
            }
        }

        // 전화번호 유효성 체크
        var tel1 = $('#tel1').val()
        var tel2 = $('#tel2').val()
        var tel3 = $('#tel3').val()
        if ( !/^01\d{1}$/.test(tel1) ) {
            alert('전화번호 형식이 맞지 않습니다.')
            $('#tel1').focus()
            $('#tel1').select()
            return false
        } else if ( !/^\d{3,4}$/.test(tel2) ) {
            alert('전화번호 형식이 맞지 않습니다.')
            $('#tel2').focus()
            $('#tel2').select()
            return false
        } else if ( !/^\d{4}$/.test(tel3) ) {
            alert('전화번호 형식이 맞지 않습니다.')
            $('#tel3').focus()
            $('#tel3').select()
            return false
        }
        return false
    })


    // 이메일 도메인 선택을 변경(change())했을때 변경한 내용으로 채우기
    $('#domainType').on('change', function(){
        $('#domainType option:selected').each(function(){
            if( $(this).val()==='title' ) {
                $('#domain').val('')
                $('#domain').attr('disabled', true)
            } else if ( $(this).val()==='self' ) {
                $('#domain').val('')
                $('#domain').attr('disabled', false)
            } else {
                $('#domain').val( $(this).val() )
                $('#domain').attr('disabled', true)
            }
        })
    })









})(jQuery)