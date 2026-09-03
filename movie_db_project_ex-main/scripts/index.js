//기존 태그 선택 querySelector()
//기존 태그 복제 cloneNode()
//새로운 태그 생성 createElement()
//생성한 대상을 붙여넣기 appendChild()
const movieWrap1 = document.querySelector('.movie_wrap1');//부모 ul
const movieWrap2 = document.querySelector('.movie_wrap2');//부모 ul

//Q. 어벤져스 DB 1개 li에 삽입하기
// const movieLi = document.createElement('li');//li 생성
// movieLi.textContent = '어벤져스';
// movieLi.textContent = movieDB[0].title;//li에 영화제목 삽입
// movieLi.textContent += movieDB[0].date;//+= 복합대입(기존값에 더해서 대입)
// movieLi.textContent = movieDB[0].date;//= 대입(기존값을 제거하고 대입(기본))
// movieWrap1.appendChild(movieLi);//ul에 li 붙여넣기.appendChild(movieLi);//ul에 li 붙여넣기

// Q2. 영화 DB 1~9개 모두 출력하기
for(let i=0; i<movieDB.length; i++){
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${movieDB[i]/* i = n */.title}</h3>`;
    movieLi.innerHTML += `<p>${movieDB[i].date}</p>`;
    movieLi.innerHTML += `<a href="#"><img src="${movieDB[i].poster}" alt=""></a>`;
    movieWrap1.appendChild(movieLi);
}
// Q2. 애니메이션 DB 1~10개 모두 출력하기
for(let i=0; i<animeDB.length; i++){
    const animeLi = document.createElement('li');
    movieWrap2.appendChild(animeLi);
    animeLi.innerHTML = `
    <h3>${animeDB[i].title}</h3>
    <p>${animeDB[i].date}</p>
    <a href="#"><img src="${animeDB[i].poster}" alt=""></a>
    `
}