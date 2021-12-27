

//문서준비이벤트

$(function() {

    let list = $('.slide-list')  //<ul>     : 이미지 슬라이드박스 
    let item = $('.slide-item')  //<li>     : 각 슬라이스 태그를 노드 리스트로 가져옴

    // 현재 슬라이드 위치 / 인덱스
    let currentNo = 1
    let currentIndex = 0
    let currentPosition = 0

    //<li> 태그들의 가로/세로/갯수
    let slideWidth = item.width() //슬라이드 가로
    let slideHeight = item.height() 
    let slideCount = item.length //슬라이드 개수

    //<ul> 이미 슬라이드 박스 크기를 계산한다
    // 400 x 5 = 2000px
    let totalSlideWidth = slideWidth * slideCount

    //슬라이드 박스 가로 크기 지정
    // 슬라이드 크기 : 각 슬라이드 가로크기 x 슬라이드 갯수
    list.css({width : totalSlideWidth + 50 })

    //이전 이미지 세팅
    // 슬라이드를 절반으로 나누어서 앞으로 가져올 슬라이드 갯수
    // 5 / 2 = 2.5, parseInt(2.5) --> 2
    let initNum = parseInt (slideCount /2)
    for (let i = 0; i < initNum; i++) {
        //A.prependTo(B)        : A를 부모요소(B)의 가장 첫 번째 자식요소로 추가한다

        $('.slide-item:last-child').prependTo(list)
    }

 

    //슬라이드 위치조정
    currentPosition -= slideWidth * initNum
    list.css({left : currentPosition})

    //페이지 네비게이션
    for (let i = 0; i < slideCount; i++) {
        let dot = "<a href = '#' class ='dot'></a>"
        $('.dots-box').append(dot)
    }

    // 첫번째 점을 active
    $('.dot:first-child').addClass('active')

    // 다음 버튼 (→) 클릭 이벤트
    $('.next').on('click', () => {

        //1. 맨 왼쪽 슬라이드가 맨오른쪽 끝으로 이동한다 
        currentPosition += slideWidth
        list.css({ left : currentPosition})
        $('.slide-item:first-child').appendTo(list)

        //2. 슬라이드가 전체가 왼쪽으로 이동한다.
        currentPosition -=slideWidth
        list.animate({left : currentPosition}, 1000)

    })

    //슬라이드 위치 
    // 맨 마지막 슬라이드이면, 맨 처음으로 돌아온다.
    if (currentNo == slideCount)
        currentNo = 1
    else    
        currentNo

    // 페이지 네비게이션 다음으로 이동
    $('.dot').removeClass('active')
    $('.dot:nth-child('+ currentNo + ')').addClass('active')

})