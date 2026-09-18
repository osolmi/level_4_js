//자바스크립트 ver
// const popup = document.querySelector('#popup');
// popup.style.display = 'none';
// const nav = document.querySelectorAll('nav > ul >li');
// const sub = document.querySelectorAll('nav > ul >li > ul');
// const subLi = document.querySelectorAll('nav > ul >li > ul li');
// for(let s of sub){//서브 모두 숨기기(초기값)
//     s.style.height = '0';
//     s.style.overflow = 'hidden';
//     s.style.transition = 'height 0.4s'
// }
// for(let sl of subLi){//서브 li 하이라이트 효과
//     sl.addEventListener('mouseover', ()=>{ sl.style.backgroundColor = 'yellow';})
//     sl.addEventListener('mouseout', ()=>{ sl.style.background = 'none';})
// }
// for(let n of nav){
//     n.addEventListener('mouseover', ()=>{
//         n.style.backgroundColor = '#954';
//         console.log('n.children[1]');
//         n.children[1].style.height = '200px';

//     })
//     n.addEventListener('mouseout', ()=>{
//         n.style.background = 'none';
//         n.children[1].style.height = '0';
//     })
// }

// //공지사항 첫 글 클릭 시 팝업 출력, 팝업 닫기 클릭 시 팝업 숨기
// const noticeFirst = document.querySelector('.notice li:nth-child(1)');
// const popupClose = document.querySelector('.close');
// noticeFirst.addEventListener('click', ()=>{
//     popup.style.display = 'block';
//     popup.style.zIndex = '99';
// })
// popupClose.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// })

// //공지사항, 갤러리 탭 제목 클릭 시 나오는 탭 내용
// const tabTitle = document.querySelectorAll('.notice_gallery .title a');
// const tabContent = document.querySelectorAll('.notice_gallery .contents > * ');
// tabTitle.forEach((target, index)=>{
//     target.addEventListener('click',()=>{
//         for(let reset of tabContent) reset.style.display = 'none';
//         tabContent[index].style.display = 'flex'
//         for(let reset of tabTitle) reset.classList.remove('active');
//         target.classList.add('active');
//     })
// })

// //히어로배너 상<->하 슬라이드 구조(swiper 플러그인 X)
// const heroWrap = document.querySelector('.hero_wrapper');
// const heroSlide = document.querySelectorAll('.hero_slide');//모든 슬라이드 개수 세기 용
// // heroWrap.style.transform  = 'translateY(-600px)';
// let count = 0; //초기값 0으로 시작해서 hesoslides의 개수만큼 증가
// heroWrap.style.transition = 'transform 0.6s';
// const slideTimer = setInterval(() => {
//     count++; //3초마다 1 증가

//     console.log(count*300);
//     // if(count > 2){count - 0}
//     if(count > heroSlide.length-1){count = 0}
//     heroWrap.style.transform = `translateY(-${count*300}px)`;
// }, 3000);
/*위 반복 */                                                                             

//제이쿼리 ver
console.log(typeof $); //function 제이쿼리 로드 확인(필수x)

//자바스크립트에선 HTML 작업 시 저장 작업 필수!
//제이쿼리는 변수 구조가 워낙 짧아 2-3번 이상 자주 반복하는 변수만 지정하고 그 외는 일회성으로 사용가능

$('#popup').hide();
$('.notice li:nth-child(1)').on('click',function(){
    $('#popup').show();
})
$('.close').on('click',function(){
    $('#popup').hide();
})
const $sub = $('nav > ul > li > ul')
const $nav = $('nav > ul >li')
// sub.hide(); //제이쿼리는 대상이 2개 이상이어도 for 없이 한번에 다수 처리 가능함

//자바스크립트에서는 css 사용법 : 객체.style.속성 - '값'
//제이쿼리 css 사용법 : 객체.ccs('속성','값')
// $sub.css('height','0') //css() 함수 2개 이상 연결 = 체이닝
//     .css('overflow','hidden')
//     .css('transition','heigt 0.4s')

$sub.slideUp();
//제이쿼리 사용 시 화살표 함수 사용 권장안함. 일반함수 위주로 사용
$nav.on('mouseover',function(){
    // $(this) 현재 마우스 오버 한 대상
    $(this).css('background-color', 'aqua');
    $(this).children('ul').stop().slideDown();
})
$nav.on('mouseout',function(){
    // $(this) 현재 마우스 오버 한 대상
    $(this).css('background', 'none')
    $(this).children('ul').stop().slideUp();
})

$('.notice_gallery .title a').on('click',function(){
    $('.notice_gallery .title a').removeClass('active');
    $(this).addClass('active');

    let $i = $(this).index(); //현재 클릭한 대상 인덱스 변수저장
    $('.notice_gallery .contents > * ').hide();//모든 내용 숨기기
    // $('.notice_gallery .contents > * ').eq($i).show();//block
    $('.notice_gallery .contents > * ').eq($i).css('display', 'flex');
    //eq => 몇번째 인덱스에 헤당하는 요소인지 세는 제이쿼리 함수
})

//제이쿼리 슬라이드
let count = 0; //초기값 0으로 시작해서 hesoslides의 개수만큼 증가
const slideTimer = setInterval(function(){
    count++; //3초마다 1 증가
    // if(count > 2){count - 0}
    if(count > 2){count = 0}
    $('.hero_wrapper').css('transform', `translateY(-${count*300}px)`);
    // $('.hero_wrapper').css('transform', 'translateY(-'+(count*300)+'px)';
    //기존 js css에서 주로 다루는 transition 0.4s + transform 애니메이션 묶음 전용 제이쿼리 함수
/*     $('.hero_wrapper').animate({
        top:-(count*300)+'px',
    },400) */
}, 3000);
// let count = 0; //초기값 0으로 시작해서 hesoslides의 개수만큼 증가
// heroWrap.style.transition = 'transform 0.6s';
// const slideTimer = setInterval(() => {
//     count++; //3초마다 1 증가

//     console.log(count*300);
//     // if(count > 2){count - 0}
//     if(count > heroSlide.length-1){count = 0}
//     heroWrap.style.transform = `translateY(-${count*300}px)`;
// }, 3000);