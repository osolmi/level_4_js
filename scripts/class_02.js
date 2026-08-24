const pTag = document.querySelector('p');
const btn1 = document.querySelector('#btn1');
const userIdInput = document.querySelector('#user_id');
console.log(pTag, btn1, userIdInput)
btn1.addEventListener('click', ()=>{
    //아이디를 입력안하고 버튼 클릭 시 -> 아이디 입력 오류 출력
    //아이디 입력하고 버튼 클릭 시 -> 결과 없음
    //조건식) 아이디(입력값)를 입력했는가? 참/거짓
    console.log(userIdInput.value); //값 테스트
    console.log(Boolean(userIdInput.value)); //논리 테스트
    if(userIdInput.value == ''){
        pTag.classList.add('error');
        pTag.innerHTML = '<em>아이디</em>를 입력하세요'
    }else{/* (앞) 조건이 거짓일때 실행결 */
        pTag.classList.remove('error');
        pTag.innerHTML = '<em>로그인</em> 성공하셨습니다'
    }
    // if(userIdInput.value !== ''){
    // if(Boolean(userIdInput.value)){//if 또 쓰면 별개
    //     pTag.classList.remove('error');
    //     pTag.innerHTML = '<em>로그인</em> 성공하셨습니다'
    // }
    // pTag.innerHTML = '<em>로그인</em>이 실패했습니다';
    // pTag.textContent = '<em>로그인</em>이 실패했습니다';
    // pTag.classList.toggle('error');
})