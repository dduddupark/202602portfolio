
import { MainProject, Skill, OtherProject } from './types';

export const MAIN_PROJECTS: MainProject[] = [
  {
    id: '1',
    title: 'MarketMate Pro',
    description: 'Enterprise-grade e-commerce solution with real-time sync.',
    fullDescription: 'An enterprise-grade e-commerce application designed for high-performance inventory management and real-time customer engagement. MarketMate Pro facilitates seamless communication between store owners and customers. It features a robust offline-first architecture, ensuring that inventory updates are never lost even with intermittent connectivity.',
    responsibilities: [
      'Implemented real-time data synchronization using Firebase Realtime Database and WorkManager.',
      'Architected the application using MVVM pattern with Clean Architecture principles.',
      'Designed and developed custom UI components using Jetpack Compose for a consistent brand experience.',
      'Optimized local database performance by 40% through advanced Room indexing and query optimization.'
    ],
    screenshots: [
      'https://picsum.photos/seed/mm1/400/800',
      'https://picsum.photos/seed/mm2/400/800',
      'https://picsum.photos/seed/mm3/400/800'
    ],
    icon: 'shopping_bag',
    iconBg: 'bg-primary',
    technologies: [
      { name: 'JETPACK COMPOSE', colorClass: 'bg-primary/10 text-primary' },
      { name: 'HILT', colorClass: 'bg-green-500/10 text-green-600' },
      { name: 'ROOM', colorClass: 'bg-purple-500/10 text-purple-600' }
    ]
  },
  {
    id: '2',
    title: 'FitFlow Analytics',
    description: 'Advanced biometric tracking with WearOS integration.',
    fullDescription: 'A comprehensive fitness tracking solution that integrates deeply with WearOS devices. FitFlow provides real-time biometric analysis and long-term health trends using advanced data visualization techniques and on-device machine learning.',
    responsibilities: [
      'Developed native WearOS tiles and complications using Wear Health Services.',
      'Integrated Google Health Connect for centralized health data management.',
      'Built custom data visualization components using Canvas API in Compose.',
      'Implemented background processing for continuous heart rate monitoring.'
    ],
    screenshots: [
      'https://picsum.photos/seed/ff1/400/800',
      'https://picsum.photos/seed/ff2/400/800'
    ],
    icon: 'fitness_center',
    iconBg: 'bg-indigo-600',
    technologies: [
      { name: 'COROUTINES', colorClass: 'bg-indigo-500/10 text-indigo-600' },
      { name: 'RETROFIT', colorClass: 'bg-orange-500/10 text-orange-600' },
      { name: 'WEAROS', colorClass: 'bg-pink-500/10 text-pink-600' }
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
    title: 'SkyCast Weather',
    description: 'Clean architecture weather app using OpenWeather API.',
    icon: 'cloud',
    tags: ['DAGGER HILT', 'FLOW']
  },
  {
    id: 'other-2',
    title: 'Daily Note (하루 한 줄)',
    description: '하루 100자 제한으로 기록의 부담을 줄인 iOS 전용 미니멀 다이어리 앱입니다.',
    fullDescription: '기록의 부담을 덜어주는 100자 다이어리. 단순한 일기장을 넘어 사용자의 꾸준함을 시각화하는 습관 형성 도구입니다.',
    icon: 'edit_note',
    tags: ['SWIFTUI', 'FIREBASE', 'MVVM', 'GOOGLE LOGIN'],
    heroImage: '/dn_splash.PNG',
    screenshots: [
      '/dn_main.PNG',
      '/dn_login.PNG',
      '/dn_stats.PNG',
      '/dn_search.PNG',
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
    heroImage: '/summarize_hero.png',
    externalUrl: 'https://vibe-digest-pi.vercel.app/',
    githubUrl: 'https://github.com/dduddupark/Vibe-Digest?tab=readme-ov-file',
    screenshots: ['/summarize_screenshot_2.png', '/summarize_screenshot_3.png']
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are Alex Rivera's virtual assistant. 
Alex is a world-class Android Developer.
Key facts about Alex:
- Skills: Kotlin, Java, Jetpack Compose, Hilt, MVVM, MVI.
- Main Projects: MarketMate Pro (e-commerce) and FitFlow Analytics (WearOS/Biometrics).
- Goal: Be helpful, professional, and concise. 
- If someone asks about hiring, tell them to click the "Hire Me" button.
- Keep responses short (under 2 sentences).`;
