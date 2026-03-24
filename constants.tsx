
import { MainProject, Skill, OtherProject } from './types';

export const MAIN_PROJECTS: MainProject[] = [
  {
    id: '1',
    title: '야핏무브 (Yafit Move)',
    description: '걷기, 주행 기능을 통해 에너지, 마일리지를 획득하며 기프티콘으로 교환 가능한 광고형 건강 챌린지 앱 (DAU 30만)',
    fullDescription: '걷기, 주행 기능을 통해 에너지, 마일리지를 획득하며 기프티콘으로 교환 가능한 광고형 건강 챌린지 앱 (DAU 30만)',
    responsibilities: [
      '만보기 기능 및 삼성헬스 연동, 지도를 활용한 주행 기능 개선',
      'XML에서 Compose로 화면 개발 개선 및 점진적 도입',
      '안드로이드 기반 하이브리드 앱 개발 및 SDUI(Firebase Remote Config)를 활용한 리스트형 홈 UI 구성',
      'Rive와 Compose를 활용한 위치 기반 게임 [렛츠 두두] 개발 (구글맵 콜라보 이벤트 등)',
      'Sensor를 활용한 심박수 측정 WearOS 앱 구현',
      '매시간마다 UI가 변경되는 보너스 기능 안내 Widget 개발',
      '뉴스 및 날씨 연동 가능한 잠금화면 마일리지 적립 기능 구현',
      'ANR 및 앱 성능 최적화 작업, Google Admob 및 각종 오퍼월 연동 최적화'
    ],
    storeUrl: 'https://play.google.com/store/apps/details?id=kr.co.openit.openrider&hl=ko',
    libraries: [
      'Java, Kotlin',
      'Compose, XML',
      'Coroutine, Flow',
      'GPS, Sensor',
      'Google Admob, 각종 Offerwall(Buzzvil, NStataion, Adison, TabJoy 등)',
      'Rive Animation',
      'Dagger Hilt',
      'Room, DataStore'
    ],
    maintenanceExperience: [
      '만보기 기능 및 삼성헬스 연동',
      '지도를 활용한 주행 기능 개선',
      'XML > Compose로 개선하여 화면 개발',
      'ANR 및 성능 개선'
    ],
    newDevelopmentExperience: [
      '안드로이드 기반 하이브리드 앱 개발',
      'Admob, AdPie, MobWith, Nas 광고 구현, 최적화 작업 및 오퍼월 연동',
      'SDUI (Firebase Remote Config 기능을 활용한 리스트형 홈 UI 구성)',
      '포켓몬고, 피크민과 유사한 걸으며 아이템 수집이 가능한 [렛츠 두두] 개발',
      '잠금화면 기능 구현',
      'Sensor를 활용한 심박수를 측정하는 Wear 앱 개발',
      '매 시간마다 UI가 변경되는 Widget 개발'
    ],
    heroImage: '/yafit_move/yafit_1.webp',
    screenshots: [
      '/yafit_move/yafit_2.webp',
      '/yafit_move/yafit_3.webp',
      '/yafit_move/yafit_4.webp',
    ],
    icon: '/yafit_move/yafit_logo.webp',
    iconBg: 'bg-blue-500',
    technologies: [
      { name: 'KOTLIN', colorClass: 'bg-blue-500/10 text-blue-600' },
      { name: 'COMPOSE', colorClass: 'bg-green-500/10 text-green-600' },
      { name: 'COROUTINES', colorClass: 'bg-purple-500/10 text-purple-600' },
      { name: 'RIVE', colorClass: 'bg-yellow-500/10 text-yellow-600' },
      { name: 'HILT / ROOM', colorClass: 'bg-red-500/10 text-red-600' }
    ]
  },
  {
    id: '2',
    title: '민병철유폰 (U-Phone)',
    description: '외국인강사와 전화영어 수업을 체험하고 강약점 분석리포트 및 전문 학습 컨설팅 어플',
    fullDescription: '외국인강사와 전화영어 수업을 체험하고 강약점 분석리포트 및 전문 학습 컨설팅 어플',

    libraries: [
      'Java, Kotlin',
      'Amazon Chime',
      'Dagger Hilt',
      'AppsFlyer',
      'Coroutine',
      'MVVM Architecture',
      'Databinding, LiveData'
    ],
    newDevelopmentExperience: [
      '안드로이드 기반 하이브리드 앱 개발',
      '기존 HttpConnection으로 서버처리를 했던 부분을 Clean Architecture 적용 및 Coroutine으로 Refactoring',
      '영작 문장 첨삭 화면을 위한 MarkDown 기능 구현',
      'SpeechAce 기능을 사용하여 실시간 발음교정기능 구현',
      'WebRTC를 이용한 보이스콜/페이스콜 기능 구현, 백그라운드/앱 종료시에서도 전화 기능 구현\n  · 잠금화면 위에서 앱화면이 뜨는 기능 구현\n  · Push 진입시 디바이스 OS별 전화 벨소리 및 진동 기능 구현\n  · 학생 수업 스타일에 맞는 보이스콜/페이스콜 화면 구현'
    ],
    storeUrl: 'https://play.google.com/store/apps/details?id=com.bcm.uphone3.android', // 주소 변경이 필요합니다
    heroImage: '/uphone/uphone_main.webp',
    screenshots: [
      '/uphone/uphone_1.webp',
      '/uphone/uphone_2.png',
      '/uphone/uphone_3.png',
      '/uphone/uphone_4.png',
      '/uphone/uphone_5.png',
    ],
    icon: '/uphone/uphone_logo.webp',
    iconBg: 'bg-green-600',
    technologies: [
      { name: 'KOTLIN', colorClass: 'bg-blue-500/10 text-blue-600' },
      { name: 'COROUTINE', colorClass: 'bg-indigo-500/10 text-indigo-600' },
      { name: 'MVVM', colorClass: 'bg-orange-500/10 text-orange-600' },
      { name: 'HILT', colorClass: 'bg-red-500/10 text-red-600' }
    ]
  }
];

export const SKILLS: Skill[] = [
  { id: '1', title: 'Kotlin & Java', icon: 'code' },
  { id: '2', title: 'MVVM / MVI', icon: 'layers' },
  { id: '3', title: 'CI / CD', icon: 'settings_input_component' },
  { id: '4', title: 'UI / UX Design', icon: 'brush' }
];

export const OTHER_PROJECTS: OtherProject[] = [
  {
    id: 'other-1',
    title: 'Energy Slime',
    description: '슬라임을 성장시키며 목표 걸음 수를 채워나가는, 재미있고 직관적인 건강 관리 및 만보기 앱입니다! 걸음 수에 따라 동적으로 반응하는 슬라임 캐릭터를 통해 동기 부여를 제공하며, 사용자의 일일 활동 및 누적 데이터를 달력으로 정리하여 보여줍니다.',
    icon: 'bolt',
    tags: ['FLUTTER', 'RIVERPOD', 'SQPLITE', 'HEALTH CONNECT'],
    heroImage: '/energy_slime/es_logo.jpeg',
    screenshots: [
      '/energy_slime/es_main.jpg',
      '/energy_slime/es_shop.jpg',
      '/energy_slime/es_history.jpg',
    ],
    githubUrl: 'https://github.com/dduddupark/EnergySlime',
    keyFeatures: [
      '실시간 걸음 수 측정 & 배경 동기화',
      '포인트 적립 및 상점 (Shop & Points)',
      '성장하는 귀여운 슬라임 (Gamification)',
      '히스토리 달력 및 직관적 시각화',
      '다크 모드 (Dark Theme)',
      '다국어 지원 (Localization)'
    ]
  },
  {
    id: 'other-2',
    title: 'Daily Note (하루 한 줄)',
    description: '하루 100자 제한으로 기록의 부담을 줄인 iOS 전용 미니멀 다이어리 앱입니다.',
    fullDescription: '기록의 부담을 덜어주는 100자 다이어리. 단순한 일기장을 넘어 사용자의 꾸준함을 시각화하는 습관 형성 도구입니다.',
    icon: 'edit_note',
    tags: ['SWIFTUI', 'FIREBASE', 'MVVM', 'GOOGLE LOGIN'],
    heroImage: '/daily_note/dn_splash.PNG',
    screenshots: [
      '/daily_note/dn_main.PNG',
      '/daily_note/dn_login.PNG',
      '/daily_note/dn_stats.PNG',
      '/daily_note/dn_search.PNG',
    ],
    githubUrl: 'https://github.com/dduddupark/DailyNote',
    keyFeatures: [
      '글자 수 제한(100자)을 통한 심리적 기록 문턱 감소',
      'GitHub 스타일의 연간 기여도 그래프(잔디) 구현',
      'Firebase 기반 실시간 데이터 동기화 및 구글 소셜 로그인',
      '작성한 일기 내용을 분석하여 감정에 맞는 이모지를 자동으로 매칭하는 기능',
      '과거 기록을 한눈에 확인하는 타임라인 및 스마트 검색 기능'
    ]
  },
  {
    id: 'other-3',
    title: 'Summarize Articles',
    description: '효율적인 독서를 위한 AI 기반 뉴스레터 및 블로그 요약 서비스입니다.',
    icon: 'summarize',
    tags: ['NEXT.JS', 'OPENAI', 'PYTHON'],
    heroImage: '/summarize_articles/summarize_hero.png',
    externalUrl: 'https://vibe-digest-pi.vercel.app/',
    githubUrl: 'https://github.com/dduddupark/Vibe-Digest?tab=readme-ov-file',
    screenshots: [
      '/summarize_articles/summarize_screenshot_2.png',
      '/summarize_articles/summarize_screenshot_3.png'
    ]
  }
];

export const AI_SYSTEM_INSTRUCTION = `Suyeon Park Portfolio`;
