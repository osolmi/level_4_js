//목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
//1. 비회원(비활성화) 내용 초반 숨기기
//2. 각 탭 제목 클릭 시
//3. 기존회원 클릭 -> 기존회원 내용 보이기/비회원 내용 숨기기
//4. 비회원 클릭 -> 기존회원 내용 숨기기/비회원 내용 보이기
const loginTabTitle = document.querySelectorAll('#login-frm .title button');
const loginTabContent = document.querySelectorAll('#login-frm .contents > ul')
console.log(loginTabTitle, loginTabContent);
loginTabContent[1].classList.add('display-hide');//초기 숨기기
loginTabTitle[1].addEventListener('click', ()=>{loginTabFunc(1)})
loginTabTitle[0].addEventListener('click', ()=>{loginTabFunc(0)})
function loginTabFunc(index){
    loginTabContent[0].classList.add('display-hide');//모두 숨기기
    loginTabContent[1].classList.add('display-hide');//모두 숨기기
    loginTabContent[index].classList.remove('display-hide');//클릭 대상과 일치하는

    loginTabTitle[0].classList.remove('active');//모두 비활성화
    loginTabTitle[1].classList.remove('active');//모두 비활성화
    loginTabTitle[index].classList.add('active');//클릭한 대상만 활성화
}

//목표2) 기존회원 - 아이디를 입력 안하고 기존회원 로그인 버튼 클릭 시 '아이디를 입력하세요' 경고창 출력
const userId = document.querySelector('#user-id');
const userPw = document.querySelector('#user-pw');
const memberLoginBtn = document.querySelector('#member-login');
console.log(userId,memberLoginBtn);

const non_memberLoginBtn = document.querySelector('#non-member-login')
const non_userId = document.querySelector('#non-user-id');
const non_userPw = document.querySelector('#non-user-pw');
const non_userOrder = document.querySelector('#non-user-order');
// memberLoginBtn.addEventListener('click', ()=>{함수명(매개변수)})


memberLoginBtn.addEventListener('click', ()=>{
    loginErrFunc(userId, '아이디')
    loginErrFunc(userPw, '비밀번호')
});
non_memberLoginBtn.addEventListener('click', ()=>{
    loginErrFunc(non_userId, '주문자명')
    loginErrFunc(non_userOrder, '주문번호')
    loginErrFunc(non_userPw, '비회원 주문 비밀번호')
});
function loginErrFunc(dom, str){
    if(dom.value == ''){alert(`${str}를 입력하세요`)}
}