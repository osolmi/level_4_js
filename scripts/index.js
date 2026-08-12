//1. 변수
let itemPrice = 24600;
const titleBig = document.querySelector('h1');
const result1p = document.querySelector('.result1')
let replaceData = itemPrice.toLocaleString('ko-kr');//데이터 종류 변경 변수
//----------------------------------------연습(웹은행 150만원 입금)
const result2p = document.querySelector('.result2')
let inputPrice = 1500000;
let replaceData2 = inputPrice.toLocaleString('ko-kr');
//출력 테스트 콘솔
console.log(itemPrice, titleBig, result1p, replaceData);
console.log(result2p, inputPrice, replaceData2);
//실행 결과
result1p.textContent = replaceData +'원';
result2p.textContent = replaceData2 + '원';

//-------------------------------------------
//2. 배열
const money = [24600, 32000, 19900];
const listLi = document.querySelectorAll('.list1>li')

console.log(listLi)
console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));

listLi[0].textContent = money[0]+'원'
listLi[1].textContent = money[1]+'원'
listLi[2].textContent = money[2]+'원'

listLi[3].children[0].textContent = itemName[0];
listLi[3].children[1].textContent = itemPriceOG[0];

const studyDt = document.querySelectorAll ('.study dt')
const studyDd = document.querySelectorAll ('.study dd');

studyDt[0].textContent = itemName[2]
studyDd[0].textContent = itemPriceOG[2]
studyDt[1].textContent = itemName[3]
studyDd[1].textContent = itemPriceOG[3]

console.log(studyDt, studyDd);

//-------------------------------------식판
let plate = ['계란', '스테이크', '샐러드', '김치', '단무지', '쌀밥', '콩나물국'];
console.log(plate);
//계란, 콩나물국, 김치 출력
console.log(plate[0])
console.log(plate[6])
console.log(plate[3])
//스테이크 -> 연어 변경
plate[1] = '연어'
console.log(plate[1]);

//------------------------------------------------영화
//3. 객체
const movie = {
    name:'스파이더맨',
    price:12000,
}
console.log(movie.name); //객체.속성 출력
console.log(movie.price);
//-------------------------객체+cgv DB연결
const cgv = document.querySelector('.cgv');
const cgvPoster = cgv.querySelector('img');
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age')
const cgvRate = cgv.querySelector('.rate')
const cgvGenre = cgv.querySelector('.genre')

console.log(cgv, cgvPoster, cgvTitle, cgvAge, cgvRate, cgvGenre);

cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name;
cgvAge.textContent = movieDb[0].age+'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGenre.textContent = movieDb[0].genre;

//----------------객체변수 연습
const desserTray = {
    top:['파랑마카롱','분홍마카롱','초록마카롱','노랑마카롱'],
    middle:['슈크림','머핀','에그타르트'],
    bottom:['방울토마토','청포도','오렌지'],
}
console.log(desserTray);//콘스트 출력
console.log(desserTray.top[3]);//노랑마카롱 출력
console.log(desserTray.middle[0]);//슈크림 출력
console.log(desserTray.bottom[1]);//청포도 출력
//객체.속성
desserTray.bottom[2] = '망고'//오렌지에 망고 값 대입
console.log(desserTray.bottom[2]);//출력 확인

//---------------------------------------------------------증감연산자
let num = 1;

console.log(num); //1

num++; //1증가
console.log(num); //2 (위 연산 후 실행 테스트)

num--; //1감소
console.log(num); //1 (위 연산 후 실행 테스트)
//------------------------------------------증감연산자, 2개 변수 활용
let number1 = 10;
let number2;

console.log(number1, number2)
number2 = number1++;
//증감연산자를 변수 뒤에 붙이면?
//기존 변수값(number1)을, 대입(=)을 만나 number2로 먼저 보내고
//++로 number1을 나중에 증가시킨다(후처리)
console.log(number1, number2);