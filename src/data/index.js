export const navigateContent = ['home', 'skills', 'portfolio', 'career', 'profile'];

export const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 95 },
  { name: 'Javascript', level: 70 },
  { name: 'Vue.js', level: 70 },
  { name: 'scss', level: 85 },
];

export const portContent = [
  {
    num: '01',
    title: '댕-냥 커뮤니티 MySTORY',
    desc: '게시판과 간단한 게임으로 이루어진 커뮤니티 사이트를 만들고자 하였습니다. 로그인, 회원가입, 마이페이지 화면을 만들고 회원정보 수정 기능이 들어있습니다. 자바스크립트를 이용한 틱택토, MBTI, 카드맞추기 게임을 댕냥 컨텐츠와 연결지어 추가했습니다. ',
    thumb: 'port01.png',
    code: 'https://github.com/gomdolee1146/story.git',
    view: 'https://joyful-lokum-bac9fc.netlify.app',
    period: '작업 기간: 약 6주',
    skills: ['nuxt', 'scss'],
  },
  {
    num: '02',
    title: '날씨 어플',
    desc: 'OpenWeatherAPI를 활용하여 16개 도시의 오늘 날씨, 이번주 날씨를 불러왔습니다. API 문서를 분석해서 화면을 그리는 작업을 할 수 있었습니다. Lodash 라이브러리를 사용해 필요한 부분을 불러온 데이터를 편집하여 사용할 수 있도록 했습니다.',
    thumb: 'port02.png',
    code: 'https://github.com/gomdolee1146/vue_weather.git',
    view: 'https://melodic-beijinho-f7d240.netlify.app',
    period: '작업 기간: 약 1주일',
    skills: ['vue', 'scss'],
  },
  {
    num: '03',
    title: 'EMOJI MAKER',
    desc: '맘에 드는 에셋을 선택해 이모지를 만들 수 있습니다. 스토어를 이용하여 로컬스토리지에 완성된 이모지를 저장하는 방식으로 프리셋 기능을 만들었습니다.',
    thumb: 'port03.png',
    code: 'https://github.com/gomdolee1146/emoji_factory.git',
    view: 'https://fanciful-arithmetic-336323.netlify.app',
    period: '작업 기간 : 약 1주일',
    skills: ['vue', 'scss'],
  },
  {
    num: '04',
    title: 'Todo List - calendar',
    desc: 'v-calendar를 활용해 달력 화면을 만들었습니다. CRUD 기능을 이용해서 원하는 날짜에 TODO리스트를 작성할 수 있게 했습니다. 토글버튼을 활용하여, 해야할 일과 완료한 일을 구분할 수 있도록 했습니다.',
    thumb: 'port04.png',
    code: 'https://github.com/gomdolee1146/crud_vue.git',
    view: 'https://resonant-heliotrope-1dbe04.netlify.app',
    period: '작업 기간: 약 1주일',
    skills: ['vue', 'scss'],
  },
  {
    num: '05',
    title: '음료수 자판기',
    desc: '바닐라 자바스크립트로 만든 음료수 자판기입니다. 새로고침을 할 때마다 랜덤으로 주어지는 지갑 안의 돈을 이용해, 음료수를 선택할 수 있는 화면을 만들었습니다.',
    thumb: 'port05.png',
    code: '',
    view: 'https://dreamy-stroopwafel-ace803.netlify.app',
    period: '작업 기간 : 약 1주일',
    skills: ['html', 'css', 'javascript'],
  },
  {
    num: '06',
    title: 'Intro Page',
    desc: '저에 대한 소개와 작업물들을 담아내기 위한 화면을 만들었습니다. gsap을 이용한 인터랙션이 담겨져있습니다.',
    thumb: 'port06.png',
    code: '/',
    view: '',
    period: '포트폴리오',
    skills: ['vue', 'scss'],
  },
];

export const careerList = [
  {
    companyName: '(주)여보야 ',
    status: 'work',
    employingDate: '2021.01 ~ ',
    work: [
      '웹앱 클럽5678 서비스페이지 퍼블리싱 작업',
      '웹앱 영상통통, 캔디캠 서비스페이지 퍼블리싱 작업',
      '(주)여보야 홈페이지 퍼블리싱 유지보수',
      '사내 인트라넷 페이지 퍼블리싱 유지보수',
    ],
  },
  {
    companyName: 'RoomA',
    status: 'leave',
    employingDate: '2020.10 - 2021.01',
    work: [
      '룸에이(room a.) 웹사이트 관리, 웹디자인 전반업무',
      '웹마켓 webmarket 웹사이트 관리, 웹디자인 전반업무',
      '매장 진열용 카탈로그 제작',
      '마케팅용 홍보 자료 제작',
    ],
  },
  {
    companyName: '파라다이스팩토리',
    status: 'leave',
    employingDate: '2018.08 - 2020.06',
    work: [
      '웹 프로그램 기획 및 디자인 작업(다국어 이력서 생성 프로그램, 다국어 홈페이지 생성 프로그램 등)',
      'www.hrpass.com 구인구직 사이트 레이아웃 수정 및 웹사이트 관리',
      '웹 프로그램 설명 카탈로그 제작 등',
    ],
  },
];
