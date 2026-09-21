// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//1.---------------------------변수
const $viewBtn = $('#view_mode_btn');
console.log($viewBtn.children('img'));
let modeCount = 1; //1(라이트모드) 0(다크모드)
//2.---------------------------함수
//3.---------------------------이벤트
$viewBtn.on('click',function(){
    //메인 클래스 on/off 적용하기
    $('main').toggleClass('darkmode');
    modeCount = !modeCount;
    console.log(modeCount);
    //삼항조건연산자
    //조건 ? 참일때결과 : 거짓일때결과;
    modeCount == 1? 
    $viewBtn.children('img').attr('src', 'https://cdn-icons-png.flaticon.com/128/439/439842.png') : $viewBtn.children('img').attr('src', 'https://cdn-icons-png.flaticon.com/128/17406/17406104.png')
    //다크모드 진행 시 달/해 이미지 변경
    //$viewBtn.children('img').attr('src', 'https://cdn-icons-png.flaticon.com/128/17406/17406104.png');
})
//----------자주하는 질문
const $q = $('.qa .question');

$q.on('click', function(){
    $q.removeClass('active');
    $(this).toggleClass('active')
    $q.next().stop().slideUp(300);
    $(this).next().stop().slideDown();
})