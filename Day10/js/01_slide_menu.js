

$(function(){



    //메인 메뉴 - 마우스 클릭했을 때 이벤트
    $('nav > ul > li').on('click', function(){
        //현재 선택한 메인 메뉴 아래 서브메뉴만 슬라이드
        // $(this).children('.submenu').stop().slideToggle(1000)
        
        //모든 서브메뉴 슬라이드
        $('.submenu').stop().slideToggle(1000)
    })

    //햄버거 메뉴 클릭 이벤트
    $('.slide-open').on('click',() =>{

        if(slide == 'off'){

            $('.slide').animate({rigth: 0}, 1000)
            // 햄버거 버튼 애니메이션..
            $('.slide-open').children('span').addClass('on')
            slide = 'on'
        } else{
            
            $('.slide').animate({rigth: '-100%'}, 1000)
            $('.slide-open').children('span').removeClass('on')
            slide = 'off'

        }
    })

    $('bg').on('click', function(){

    })


})