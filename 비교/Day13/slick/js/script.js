




$(function() {


    //슬릭 슬라이드시작!
    $('.slide-container').slick({
        dots: true,
        arrows : true,

        autoplay:true,              // 자동재생여부
        autoplaySpeed: 3000,        // 자동재생 슬라이드 시간
        Infinity : true ,            // 무한재생
        speed:500,                 // 슬라이드가 전환되는 시간

        centerMode: true,           // 센터모드
        centerPadding:'60px',       //센터 모드 시, 내부여백
        slidesToShow : 1,           //보여질 슬라이드 개수
        slidesToScroll: 1,          //스크롤될 슬라이드 개수         
       
       
        pauseOnDotsHover: true,      //페이지네이션 호버 시 자동재생 멈춤   
        pauseOnFocus: true,          // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,            // 호버 시, 자동재생 멈춤
        
        /*효과*/
        fade: true,
        cssEase:'linear',


        /*반응형*/
        responsive: [
            {

                breakpoint: 1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll : 1,
                }
        },
        {
            breakpoint: 800,
            settings:{
                slidesToShow:2,
                slidesToScroll : 2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow:1,
                slidesToScroll : 1,
            }
        }
    ]


    }) 

})