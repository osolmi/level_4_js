//student index.js
//1. 데스크탑 내비 복제 -> 모바일 내비 위치에 붙여넣기
const full_nav = document.querySelector('.full_nav .menu')//복제대상
const m_nav = document.querySelector('#m_nav')//붙여넣기 위치
//변수생성 -> 복제대상 정하고 복제 -> 붙여넣기 대상 정하고 붙여넣기
const cloneMenu = full_nav.cloneNode(true);//복제실행
m_nav.appendChild(cloneMenu);//붙여넣기

//2. 모바일 메뉴(햄버거) 클릭 시 모바일배경+모바일메뉴 출력하기
const m_nav_btn = document.querySelector('#m_nav_btn')
const m_nav_bg = document.querySelector('.m_nav_bg')

let menu_visible = 0;
m_nav_btn.addEventListener('click', ()=>{
    //기존 css에서 어떤 속성으로 숨겨져 있었는지에 따라 반대되는 값 작성하기
    //기존 display:none -> 변경 display:block or flex
    //기존 opacity:0 -> 변경 opacity:1
    // m_nav_bg.style.right = '0%'
    // m_nav_bg.style.opacity = '1'
    //클릭 이벤트의 동작이 1개다 == (위 명령어로 끝)
    //클릭 이벤트의 동작이 2개 이상이다 == (조건에 따른 함수 실행으로 코드 업글)
    //보인다?안보인다?리는 뜻은 조건으로 불가능 --> 컴퓨터가 이해하는 언어 0,1
    menu_visible = !menu_visible; //클릭 이벤트가 실행될때마다 상태변수값 반전
    console.log(menu_visible)//반전되는 값 확인
    //메뉴의 보이는상태(menu_visible)가 0(안보이는값)이라면 어떻게 할 것인가?
    menu_visible == 0 ? (()=>{
        //안보인다(참)-> right:0, opacity:1;
        m_nav_bg.style.right = '0%';
        m_nav_bg.style.opacity = '1';
        m_nav_btn.children[0].style.backgroundColor = '#fff';
        m_nav_btn.children[1].style.backgroundColor = '#fff';
        m_nav_btn.children[2].style.backgroundColor = '#fff';
    })() : (()=>{
        //보인다(거짓)-> right:-100%, opacity:0;
        m_nav_bg.style.right = '-100%';
        m_nav_bg.style.opacity = '0';
        m_nav_btn.children[0].style.backgroundColor = '#222';
        m_nav_btn.children[1].style.backgroundColor = '#222';
        m_nav_btn.children[2].style.backgroundColor = '#222';
    })();
})