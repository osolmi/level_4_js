// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//small1 == big1
//small2 == big2
const small = document.querySelectorAll('.small_thum img')
const big = document.querySelector('.big_thum img')

small[1].addEventListener('mouseover', ()=>{
    big.src = small[1].src;
})
small[0].addEventListener('mouseover', ()=>{
    big.src= small[0].src;
})
// small.forEach((img)=>{
//     img.addEventListener('mouseenter', function(){
//         big.src = this.src;
//     })
// })

const colorSelect = document.querySelector('#color');
const sizeSelect = document.querySelector('#size');
const resultTxt = document.querySelector('.result');

// 2. 색상이나 사이즈가 변경될 때 실행할 함수 만들기
function updateResult() {
    // 선택된 option 태그 내부의 '글자' 가져오기
    const selectedColor = colorSelect.options[colorSelect.selectedIndex].text;
    const selectedSize = sizeSelect.options[sizeSelect.selectedIndex].text;

    // 두 옵션이 모두 기본값(색상, 사이즈)이 아닐 때만 결과 출력
    if (colorSelect.value !== "" && sizeSelect.value !== "") {
        resultTxt.textContent = `색상: ${selectedColor} / 사이즈: ${selectedSize}`;
    }
}

// 3. select 값이 바뀌는(change) 이벤트 등록
colorSelect.addEventListener('change', updateResult);
sizeSelect.addEventListener('change', updateResult);
//1.---------------------------변수
//2.---------------------------함수
//3.---------------------------이벤트