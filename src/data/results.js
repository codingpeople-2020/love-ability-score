const results = [
  {
    grade: 1,
    name: "연애 신(神)",
    scoreRange: [45, 48],
    keywords: ["완벽", "카리스마", "리드"],
    description: "연애의 정점을 찍는 당신!\n 말과 행동 하나하나가 매력 그 자체.\n 상대방은 이미 빠져들었어요.",
    image: {
      male: "/images/god_of_love_m.png",
      female: "/images/god_of_love_f.png"
    },
    tips: [
      "🔹 너무 리드하려고만 하지 말고,상대의 의견도\n 존중해 주세요.",
      "🔹 완벽한 모습에만 집착하다 보면 감정 표현이\n 부족해질 수 있어요.",
      "🔹 자기 확신도 좋지만, 가끔은 상대의 생각에\n 귀 기울여보세요."
    ]
  },
  {
    grade: 2,
    name: "썸 마스터",
    scoreRange: [40, 44],
    keywords: ["눈치", "타이밍", "센스"],
    description: "썸을 타면 연애로 자연스레 이어지는 썸 능력자!\n 상대방의 감정을 읽는 데 천부적인 재능이 있네요.",
    image: {
      male: "/images/some_master_m.png",
      female: "/images/some_master_f.png"
    },
    tips: [
      "🔹 썸이 너무 길어지면 진심이 의심받을 수 있어요.\n 결단력이 필요해요.",
      "🔹 센스 있는 척만 하면 가벼워 보일 수 있으니,\n 진심도 함께 전하세요.",
      "🔹 타이밍도 좋지만, 감정 표현은 타이밍보다\n 더 중요해요."
    ]
  },
  {
    grade: 3,
    name: "로맨틱 중독자",
    scoreRange: [35, 39],
    keywords: ["감성", "표현", "몰입"],
    description: "당신의 연애는 마치 로맨스 영화!\n 감정에 솔직하고 표현도 풍부한 사랑꾼입니다.",
    image: {
      male: "/images/romantic_m.png",
      female: "/images/romantic_f.png"
    },
    tips: [
      "🔹 과도한 감정 몰입은 상대에게 부담이\n 될 수 있어요.",
      "🔹 연애가 전부가 되지 않도록 삶의 균형을\n 지켜보세요.",
      "🔹 감정 표현 못지않게 상대의 감정도 살피는 게\n 중요해요."
    ]
  },
  {
    grade: 4,
    name: "직진 불도저",
    scoreRange: [30, 34],
    keywords: ["열정", "추진력", "솔직함"],
    description: "좋아하면 무조건 직진하는 당신!\n 복잡한 밀당보다는 내 감정을 솔직하게 표현하는 스타일이에요.",
    image: {
      male: "/images/bulldozer_m.png",
      female: "/images/bulldozer_f.png"
    },
    tips: [
      "🔹 상대의 속도에 맞춰주는 연습이 필요해요.",
      "🔹 솔직함이 때로는 상처가 될 수 있으니 말투에\n 신경 써 보세요.",
      "🔹 감정 표현도 좋지만, 타인의 감정도 관찰하는\n 여유가 필요해요."
    ]
  },
  {
    grade: 5,
    name: "눈치 백단",
    scoreRange: [25, 29],
    keywords: ["관찰", "분석", "신중함"],
    description: "표현은 서툴지만 상대의 감정을\n 섬세하게 읽는 당신!\n 조심스럽게 관계를 이어가요.",
    image: {
      male: "/images/observer_m.png",
      female: "/images/observer_f.png"
    },
    tips: [
      "🔹 감정 표현이 부족하면 오해를 살 수 있어요.\n 작은 표현이라도 시도해보세요.",
      "🔹 상대의 반응을 지나치게 분석하지 마세요.\n 단순한 표현일 수도 있어요",
      "🔹 타이밍을 놓치지 않도록 결단력도 함께 키워보세요."
    ]
  },
  {
    grade: 6,
    name: "연애 초보",
    scoreRange: [20, 24],
    keywords: ["소극적", "낯가림", "서툶"],
    description: "연애는 낯설지만 관심은 많은 당신!\n 아직은 서툴지만 충분히 성장 가능성이 보여요!",
    image: {
      male: "/images/rookie_m.png",
      female: "/images/rookie_f.png"
    },
    tips: [
      "🔹 자신감이 부족해도 괜찮아요. 있는 그대로의\n 나를 믿어보세요.",
      "🔹 표현은 연습으로 늘어요. 서툴러도 시도하는 게\n 중요해요.",
      "🔹 경험을 두려워하지 마세요. 누구나 처음은\n 있습니다."
    ]
  },
  {
    grade: 7,
    name: "썸실패 전문가",
    scoreRange: [16, 19],
    keywords: ["불안", "오해", "타이밍 실패"],
    description: "썸은 타는데 연애로 이어지지 않는 당신!\n 이유는... 타이밍! 조금만 더 용기를 내봐요.",
    image: {
      male: "/images/fail_m.png",
      female: "/images/fail_f.png"
    },
    tips: [
      "🔹 지나치게 머리로 계산하지 말고, 감정에\n 솔직해져 보세요.",
      "🔹 실패를 너무 두려워하면 아무 일도 일어나지 않아요.",
      "🔹 타이밍을 놓치지 않으려면 지금 표현해보세요."
    ]
  },
  {
    grade: 8,
    name: "모태솔로 대표주자",
    scoreRange: [0, 15],
    keywords: ["둔감", "현실주의", "방어적 태도"],
    description: "연애가 낯설고 필요성도 잘 못 느끼는 당신!\n 하지만 지금 이 테스트가 시작이라면?",
    image: {
      male: "/images/solo_m.png",
      female: "/images/solo_f.png"
    },
    tips: [
      "🔹 너무 방어적으로 굴지 말고, 가벼운 대화부터\n 시작해보세요.",
      "🔹 자기비하보다는 스스로의 장점을 찾아보세요.",
      "🔹 연애를 어렵게 생각하지 말고, 사람 대 사람으로\n 다가가보세요."
    ]
  }
];

export default results;
