
$(function(){

    let owl = $('.owl-carousel')

    //owl carousel 시작!!

    owl.owlCarousel({
        loop:true,              //반복
        margin:10,              // 슬라이드 간 간격
        nav:true,               //네비게이션 화살표
        center:true,            //센터모드
        autoplay:true,          //자동모드
        autoplayTimeout : 500, //자동 재생시간
        autoplayHoverPause: true,   //호버시, 자동재생 멈춤


        //반응형
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    //스크롤 활성화
    owl.on('mousewheel', '.owl-stage', function (e) {

        //e.deltaY >>  e.originalEvent.wheelDelta
        if (e.originalEvent.wheelDelta>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

})