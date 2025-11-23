export const apps = [
    {
        id: 'kanjiquiz',
        title: 'KanjiQuiz',
        status: 'LIVE',
        shortDescription: 'Master Japanese Kanji through an immersive, gamified learning experience.',
        fullDescription: `
      KanjiQuiz is the ultimate tool for mastering Japanese Kanji. 
      Designed for learners of all levels, it combines spaced repetition with 
      gamified elements to make learning addictive and effective.
      
      Features include:
      - Comprehensive Kanji database (JLPT N5-N1)
      - Smart spaced repetition algorithm
      - Writing practice with stroke order detection
      - Progress tracking and analytics
      - Offline mode support
    `,
        features: [
            'JLPT N5-N1 Coverage',
            'Spaced Repetition System',
            'Stroke Order Practice',
            'Offline Mode',
            'Progress Analytics'
        ],
        image: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)', // Placeholder
        screenshots: [
            'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
            'linear-gradient(135deg, #2c3e50 0%, #e74c3c 100%)',
            'linear-gradient(135deg, #2c3e50 0%, #f1c40f 100%)'
        ],
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.viodrastudios.kanjiquiz'
    },
    {
        id: 'ai-apps',
        title: 'AI Apps',
        status: 'COMING SOON',
        shortDescription: 'Next-generation AI tools designed to enhance productivity and creativity.',
        fullDescription: 'We are building a suite of AI-powered applications that will revolutionize how you work and create. Stay tuned for updates.',
        features: ['AI Content Generation', 'Smart Automation', 'Voice Control'],
        image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        screenshots: [],
        playStoreLink: '#'
    },
    {
        id: 'project-x',
        title: 'Project X',
        status: 'COMING SOON',
        shortDescription: 'A revolutionary gaming experience pushing the boundaries of mobile graphics.',
        fullDescription: 'Project X is an unannounced title that aims to bring console-quality graphics and gameplay to mobile devices.',
        features: ['Unreal Engine 5', 'Multiplayer', 'Open World'],
        image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        screenshots: [],
        playStoreLink: '#'
    }
];
