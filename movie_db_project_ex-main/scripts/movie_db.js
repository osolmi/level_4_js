//영화 DB
//어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마는 프라다를 입는다2, 마이클, 슈퍼마리오갤럭시, 프로젝트 헤일메리, 폭풍의 언덕
const movieDB = [
    {
    id: 1,
    title: '어벤져스',
    date: '2026-12-18',
    poster: 'poster/poster_avengersdoomsday.jpg',
    genre: ['액션', 'SF', '모험'],
    director: '앤서니 루소, 조 루소',
    rating: 4.8,
    cast: ['닥터 둠', '스파이더맨', '토르'],
    summary: '새로운 위협에 맞서 지구와 다중우주를 구하기 위해 다시 모인 어벤져스의 거대한 모험.'
    },
    {
    id: 2,
    title: '스파이더맨',
    date: '2026-07-24',
    poster: 'poster/poster_spidermanbrandnewday.jpg',
    genre: ['액션', 'SF'],
    director: '데스틴 대니얼 크레턴',
    rating: 4.7,
    cast: ['피터 파커'],
    summary: '정체를 숨기고 세상을 구하는 친절한 이웃 스파이더맨의 새로운 도약과 갈등.'
    },
    {
    id: 3,
    title: '오디세이',
    date: '2026-01-01',
    poster: 'poster/poster_theodyssey.jpg',
    genre: ['모험', '드라마', '판타지'],
    director: '미정',
    rating: 4.5,
    cast: ['오디세우스'],
    summary: '트로이 전쟁 후 고향으로 돌아가기 위한 오디세우스의 길고 험난한 항해기.'
    },
    {
    id: 4,
    title: '토이스토리5',
    date: '2026-06-19',
    poster: 'poster/poster_toystory5.jpg',
    genre: ['애니메이션', '모험', '코미디'],
    director: '앤드류 스탠튼',
    rating: 4.6,
    cast: ['우디', '버즈 라이트이어'],
    summary: '스마트 기기에 아이들의 관심이 빼앗긴 시대, 장난감들이 펼치는 새로운 도전.'
    },
    {
    id: 5,
    title: '악마는 프라다를 입는다2',
    date: '2026-05-01',
    poster: 'poster/poster_thedevilwearsprada2.jpg',
    genre: ['드라마', '코미디'],
    director: '데이비드 프랭클',
    rating: 4.3,
    cast: ['미란다 프리스트리', '앤디 색스'],
    summary: '변화하는 패션 잡지 미디어 시장 속에서 다시 만난 미란다와 앤디의 이야기.'
    },
    {
    id: 6,
    title: '마이클',
    date: '2025-04-18',
    poster: 'poster/poster_michael.jpg',
    genre: ['전기', '음악', '드라마'],
    director: '안톤 후쿠아',
    rating: 4.9,
    cast: ['마이클 잭슨'],
    summary: '팝의 황제 마이클 잭슨의 삶과 음악, 그리고 그 이면의 비하인드 스토리.'
    },
    {
    id: 7,
    title: '슈퍼마리오갤럭시',
    date: '2026-04-03',
    poster: 'poster/poster_thesupermariogalaxymovie.jpg',
    genre: ['애니메이션', '모험', 'SF'],
    director: '아론 호바스, 마이클 예레닉',
    rating: 4.5,
    cast: ['마리오', '루이지', '피치 공주'],
    summary: '우주로 무대를 넓힌 마리오 형제가 펼치는 스펙터클한 은하수 모험.'
    },
    {
    id: 8,
    title: '프로젝트 헤일메리',
    date: '2026-03-20',
    poster: 'poster/poster_projecthailmary.jpg',
    genre: ['SF', '드라마'],
    director: '필 로드, 크리스토퍼 밀러',
    rating: 4.8,
    cast: ['라일랜드 그레이스'],
    summary: '인류 멸망의 위기를 막기 위해 우주로 홀로 떠난 과학자의 외롭고 치열한 여정.'
    },
    {
    id: 9,
    title: '폭풍의 언덕',
    date: '2026-02-14',
    poster: 'poster/poster_wutheringheights.jpg',
    genre: ['로맨스', '드라마'],
    director: '에메랄드 페넬',
    rating: 4.4,
    cast: ['히스클리프', '캐서린'],
    summary: '황량한 요크셔 언덕을 배경으로 펼쳐지는 비극적이고 강렬한 사랑과 복수.'
    }
];

// 애니DB
//마루 밑 아리에티, 체인소맨, 하울의 움직이는 성, , 귀멸의 칼날, 벼랑 위의 포뇨, 센과 치히로의 행방불명, 스즈메의 문단속, 그대들은 어떻게 살것인가, 더 퍼스트 슬램덩크, 너의 이름은
const animeDB = [
    {
    id: 1,
    title: '마루 밑 아리에티',
    date: '2010-09-09',
    poster: 'poster_anime/poster_arrietty.jpg',
    genre: ['애니메이션', '판타지'],
    director: '요네바야시 히로마사',
    rating: 4.6,
    cast: ['아리에티', '쇼'],
    summary: '마루 밑에 사는 10cm 소인 아리에티와 인간 소년 쇼의 비밀스러운 만남과 우정.'
    },
    {
    id: 2,
    title: '체인소맨',
    date: '2022-10-12',
    poster: 'poster_anime/poster_chainsawmanreze.jpg',
    genre: ['애니메이션', '액션', '다크 판타지'],
    director: '나카조노 코헤이',
    rating: 4.7,
    cast: ['덴지', '마키마', '파워', '아키'],
    summary: '체인소 악마와 계약해 체인소맨으로 거듭난 덴지가 데빌 헌터로 성장해가는 이야기.'
    },
    {
    id: 3,
    title: '하울의 움직이는 성',
    date: '2004-12-23',
    poster: 'poster_anime/poster_howlsmovingcastle.jpg',
    genre: ['애니메이션', '판타지', '로맨스'],
    director: '미야자키 하야오',
    rating: 4.9,
    cast: ['하울', '소피'],
    summary: '마녀의 저주로 할머니가 된 소피가 마법사 하울의 움직이는 성에 들어가며 벌어지는 모험.'
    },
    {
    id: 4,
    title: '귀멸의 칼날',
    date: '2020-10-16',
    poster: 'poster_anime/poster_kimetsuinfinitycastle.jpg',
    genre: ['애니메이션', '액션', '시대극'],
    director: '소토자키 하루오',
    rating: 4.8,
    cast: ['카마도 탄지로', '카마도 네즈코'],
    summary: '혈귀가 된 여동생을 인간으로 돌아오게 하기 위해 귀살대에 들어간 탄지로의 치열한 전투.'
    },
    {
    id: 5,
    title: '벼랑 위의 포뇨',
    date: '2008-12-17',
    poster: 'poster_anime/poster_ponyo.jpg',
    genre: ['애니메이션', '모험', '가족'],
    director: '미야자키 하야오',
    rating: 4.5,
    cast: ['포뇨', '소스케'],
    summary: '인간이 되고 싶은 물고기 소녀 포뇨와 5살 소년 소스케의 순수하고 아름다운 우정.'
    },
    {
    id: 6,
    title: '센과 치히로의 행방불명',
    date: '2002-06-28',
    poster: 'poster_anime/poster_spiritedaway.jpg',
    genre: ['애니메이션', '판타지', '모험'],
    director: '미야자키 하야오',
    rating: 4.9,
    cast: ['치히로', '하쿠'],
    summary: '돼지로 변한 부모님을 구하고 현실 세계로 돌아가기 위한 치히로의 신비로운 온천장 모험.'
    },
    {
    id: 7,
    title: '스즈메의 문단속',
    date: '2023-03-08',
    poster: 'poster_anime/poster_suzume.jpg',
    genre: ['애니메이션', '판타지', '재난'],
    director: '신카이 마코토',
    rating: 4.7,
    cast: ['이와토 스즈메', '무나카타 소타'],
    summary: '일본 각지의 문을 닫으며 재난을 막아나가는 스즈메와 문단속 기술자의 여정.'
    },
    {
    id: 8,
    title: '그대들은 어떻게 살것인가',
    date: '2023-10-25',
    poster: 'poster_anime/poster_theboyandtheheron.jpg',
    genre: ['애니메이션', '모험', '판타지'],
    director: '미야자키 하야오',
    rating: 4.2,
    cast: ['마히토', '왜가리'],
    summary: '시공간을 초월한 신비로운 세계로 들어간 소년 마히토의 삶과 삶에 대한 질문.'
    },
    {
    id: 9,
    title: '더 퍼스트 슬램덩크',
    date: '2023-01-04',
    poster: 'poster_anime/poster_thefirstslamdunk.jpg',
    genre: ['애니메이션', '스포츠', '드라마'],
    director: '이노우에 타케히코',
    rating: 4.9,
    cast: ['송태섭', '강백호', '서태웅', '정대만', '채치수'],
    summary: '전국제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 그리고 최강 산왕전 경기.'
    },
    {
    id: 10,
    title: '너의 이름은.',
    date: '2017-01-04',
    poster: 'poster_anime/poster_yourname.jpg',
    genre: ['애니메이션', '드라마', '로맨스'],
    director: '신카이 마코토',
    rating: 4.8,
    cast: ['타치바나 타키', '미야미즈 미츠하'],
    summary: '꿈속에서 몸이 뒤바뀌는 시골 소녀 미츠하와 도시 소년 타키의 운명적인 인연.'
    }
];
// export default movieDB;