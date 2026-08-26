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
const pwVisibleBtn = document.querySelector('#member-pw-visible')
console.log(userId,memberLoginBtn, pwVisibleBtn);

const non_memberLoginBtn = document.querySelector('#non-member-login')
const non_userId = document.querySelector('#non-user-id');
const non_userPw = document.querySelector('#non-user-pw');
const non_userOrder = document.querySelector('#non-user-order');
const non_pwVisibleBtn = document.querySelector('#non-member-pw-visible')
// memberLoginBtn.addEventListener('click', ()=>{함수명(매개변수)})


memberLoginBtn.addEventListener('click', ()=>{
    // loginErrFunc(userId, '아이디')
    // loginErrFunc(userPw, '비밀번호')
    //목표1) 아이디, 비밀번호 중 하나라도 안적으면 'ooo을 입력하세요'
    //if(userId.value == '' && userPw.value == ''){}
    if(userId.value == '' || userPw.value == ''){
        if(userId.value == '' && userPw.value == ''){//조건세트의 시작
            alert('아이디와 비밀번호를 입력하세요')
        }
        else if(userId.value == ''){//else if-하나의 조건세트에서 두번째 조건식이 필요할때(두개 이상 작성 가능)
            alert('아이디를 입력하세요');
        }else{//조건세트 안에 거짓을 처리할때(마지막에 한번만 작성 가능)
            alert('비밀번호를 입력하세요')
        }
    }
    // if(userId.value == '' && userPw.value == ''){
    //     (`{userId.value}님 환영합니다`);
    // }
    userId.value != '' && userPw.value != '' ?
        alert(`${userId.value}님 환영합니다.`) : null;
});
// non_memberLoginBtn.addEventListener('click', ()=>{
//     loginErrFunc(non_userId, '주문자명')
//     loginErrFunc(non_userOrder, '주문번호')
//     loginErrFunc(non_userPw, '비회원 주문 비밀번호')
// });
function loginErrFunc(dom, str){
    if(dom.value == ''){alert(`${str}를 입력하세요`)}
}

//비회원 이벤트-함수
//목표1)주문자명, 주문번호, 비회용주문비번을 모두 썼을 때 "ooo님 주문은 배송중입니다."
non_memberLoginBtn.addEventListener('click', () => {
    // 1. 세 개 모두 비어있지 않다면(참) ➡️ 안내창, 하나라도 비어있다면(거짓) ➡️ 세부 검사
    (non_userId.value != '' && non_userOrder.value != '' && non_userPw.value != '')
    ? alert(`${non_userId.value}님 주문은 배송중입니다.`) // ⭕ 참: 모두 잘 씀 (.value 붙이기!)
    : (() => { // ❌ 거짓: 하나라도 안 씀
        if (non_userId.value == '' && non_userOrder.value == '' && non_userPw.value == '') {
            alert('비회원 정보를 모두 입력해주세요');
        } else if (non_userId.value == '') {
            alert('주문자명을 입력하세요');
        } else if (non_userOrder.value == '') {
            alert('주문번호를 입력하세요');
        } else {
            alert('주문비밀번호를 입력하세요');
        }
    })();
});

//기존회원) 눈 아이콘 클릭 시 비밀번호 보이기/다시 누르면 비밀번호 숨기기
let pwVisibleStatus = 0; //비번 숨김상태 초기값
pwVisibleBtn.addEventListener('click', ()=>{
    pwVisibleStatus == 0 ?
        userPw.type = 'text'
        : userPw.type = 'password';
    pwVisibleStatus = !pwVisibleStatus;
})

//비회원)
let non_pwVisibleStatus = 0;
non_pwVisibleBtn.addEventListener('click', ()=>{
    non_pwVisibleStatus == 0 ?
        non_userPw.type = 'text'
        :  non_userPw.type = 'password'
    non_pwVisibleStatus = !non_pwVisibleStatus
})