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
//--------------------------------------------------------26/09/04
//무비차트 + swiper
//swiper-slide 반복 생성해서 swiper-wrapper에 붙여넣기
//swiper 플러그인 함수 연결은 swiper 최종 연결
const chart_swiper = document.querySelector('.chart_swiper');

const chart_swiper_func = new Swiper(chart_swiper, {
    slidesPerView: 2,
    spaceBetween: 10
});//플러그인연결

for(let i=0; i<5; i++){
    const chart_slide = document.createElement('div');
    chart_slide.classList.add('swiper-slide');
    
    chart_slide.innerHTML = `<p class="num">${movieDB[i].id}위</p>`;
    chart_slide.innerHTML += `<h3>${movieDB[i].title}</h3>`;
    chart_slide.innerHTML += `<p class="rating">평점 : ${movieDB[i].rating}</p>`;
    chart_slide.innerHTML += `<p class="story">${movieDB[i].summary}</p>`;
    chart_slide.style.backgroundImage = `url(${movieDB[i].poster})`;
    chart_swiper.children[0].appendChild(chart_slide);
}

const chart_swiper_anime = document.querySelector('.chart_swiper_anime');

const chart_swiper_anime_func = new Swiper(chart_swiper_anime, {
    slidesPerView: 1, loop: true, effect: 'cube', autoplay: { delay: 3000, disableOnInteraction: false }
});

for(let i=0; i<5; i++){
    const chart_slide_anime = document.createElement('div');
    chart_slide_anime.classList.add('swiper-slide');

    chart_slide_anime.innerHTML = `<p class="num">${animeDB[i].id}위</p>`;
    chart_slide_anime.innerHTML += `<h3>${animeDB[i].title}</h3>`;
    chart_slide_anime.innerHTML += `<p class="rating">평점 : ${animeDB[i].rating}</p>`;
    chart_slide_anime.innerHTML += `<p class="story">${animeDB[i].summary}</p>`;
    chart_slide_anime.style.backgroundImage = `url(${animeDB[i].poster})`;
    chart_swiper_anime.children[0].appendChild(chart_slide_anime);
}