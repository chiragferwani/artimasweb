// Yuga theme data — the single source of truth for all color palettes, 
// mythological content, and motif definitions used throughout the site.

export type YugaKey = 'satya' | 'treta' | 'dvapara' | 'kali';

export interface YugaTheme {
  key: YugaKey;
  name: string;
  sanskritName: string;
  tagline: string;
  virtue: string;
  description: string;
  longDescription: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    bgDark: string;
    text: string;
    border: string;
    glow: string;
  };
  gradient: string;
  characters: { name: string; role: string }[];
  events: { name: string; desc: string }[];
  motif: string;
  icon: string;
}

export const YUGAS: Record<YugaKey, YugaTheme> = {
  satya: {
    key: 'satya',
    name: 'Satyuga',
    sanskritName: 'सत्ययुग',
    tagline: 'The Age of Truth & Purity',
    virtue: 'Truth · Purity · Dharma',
    description:
      'The golden age — an era of perfect virtue, where truth reigned supreme and no darkness touched the world.',
    longDescription:
      'In Satyuga, righteousness stood on four legs. Gods walked among mortals. The cosmos was in perfect harmony, and every soul was aligned with the eternal dharma. No disease, no war, no falsehood. This was the dawn of creation — luminous, pristine, and eternal.',
    colors: {
      primary: '#F5D76E',
      secondary: '#FFFFFF',
      accent: '#E8B84B',
      bg: '#FFFEF5',
      bgDark: '#1a1600',
      text: '#3D2B00',
      border: '#F5D76E40',
      glow: '#F5D76E60',
    },
    gradient: 'linear-gradient(135deg, #FFFDE0 0%, #F5D76E 50%, #E8B84B 100%)',
    characters: [
      { name: 'Brahma', role: 'The Creator, source of all existence' },
      { name: 'Vishnu', role: 'The Preserver, keeper of cosmic order' },
      { name: 'Manu', role: 'The first man, progenitor of humanity' },
    ],
    events: [
      { name: 'Creation of the Universe', desc: 'Brahma emerges from the cosmic lotus to shape existence' },
      { name: 'The Great Pralaya', desc: 'The dissolution and rebirth at the dawn of time' },
    ],
    motif: 'Lotus · Light Rays · Om',
    icon: '☀️',
  },
  treta: {
    key: 'treta',
    name: 'Tretayuga',
    sanskritName: 'त्रेतायुग',
    tagline: 'The Age of Duty & Sacrifice',
    virtue: 'Duty · Sacrifice · Valor',
    description:
      'The age of great heroes — where duty carved the path of destiny, and sacrifice became the highest virtue.',
    longDescription:
      'Tretayuga saw the rise of legendary warriors and the celestial battles that shaped the cosmos. Righteousness stood on three legs — one had fallen. Lord Rama walked the earth, and the story of the Ramayana became the eternal blueprint for honor, sacrifice, and the triumph of good over evil.',
    colors: {
      primary: '#7CB87C',
      secondary: '#D4A843',
      accent: '#4E8B3F',
      bg: '#F5FFF0',
      bgDark: '#0A1A00',
      text: '#1A3A00',
      border: '#7CB87C40',
      glow: '#7CB87C60',
    },
    gradient: 'linear-gradient(135deg, #E8F5E0 0%, #7CB87C 50%, #4E8B3F 100%)',
    characters: [
      { name: 'Lord Rama', role: 'The seventh avatar of Vishnu, embodiment of dharma' },
      { name: 'Hanuman', role: 'The devoted warrior, symbol of strength and loyalty' },
      { name: 'Ravana', role: 'The ten-headed king, master of knowledge and power' },
      { name: 'Sita', role: 'Daughter of the earth, the eternal symbol of purity' },
    ],
    events: [
      { name: 'The Ramayana', desc: 'Rama\'s journey — exile, war, and the rescue of Sita from Lanka' },
      { name: 'The Battle of Lanka', desc: 'The siege of Ravana\'s golden kingdom and the triumph of dharma' },
    ],
    motif: 'Bow & Arrow · Forest · Lotus Feet',
    icon: '🏹',
  },
  dvapara: {
    key: 'dvapara',
    name: 'Dwaparyuga',
    sanskritName: 'द्वापरयुग',
    tagline: 'The Age of Duality & Strategy',
    virtue: 'Strategy · Duality · Wisdom',
    description:
      'The age of the great war — where dharma and adharma clashed on the battlefield of Kurukshetra, and wisdom was born from chaos.',
    longDescription:
      'In Dwaparyuga, dharma tottered on two legs. The world split into light and shadow, strategy and deception, love and war. The Mahabharata unfolded — the greatest epic of all time — with Lord Krishna as the cosmic architect guiding Arjuna toward the eternal truth of the Bhagavad Gita.',
    colors: {
      primary: '#6B8DD6',
      secondary: '#9B59B6',
      accent: '#4A6DB5',
      bg: '#F0F2FF',
      bgDark: '#060B2A',
      text: '#0A1440',
      border: '#6B8DD640',
      glow: '#6B8DD660',
    },
    gradient: 'linear-gradient(135deg, #E8ECF5 0%, #6B8DD6 50%, #4A2C7A 100%)',
    characters: [
      { name: 'Lord Krishna', role: 'The eighth avatar, divine charioteer, master of the Gita' },
      { name: 'Arjuna', role: 'The greatest archer, student of cosmic wisdom' },
      { name: 'Karna', role: 'The tragic hero — the warrior born of the sun' },
      { name: 'Draupadi', role: 'The fiery queen whose vow reshaped the age' },
      { name: 'Bhishma', role: 'The unbreakable oath-keeper, patriarch of Hastinapur' },
    ],
    events: [
      { name: 'The Mahabharata War', desc: 'Eighteen days of cosmic battle that determined the fate of dharma' },
      { name: 'The Bhagavad Gita', desc: 'Krishna\'s divine discourse to Arjuna — the eternal song of wisdom' },
    ],
    motif: 'Sudarshana Chakra · Flute · Chariot',
    icon: '⚔️',
  },
  kali: {
    key: 'kali',
    name: 'Kalyuga',
    sanskritName: 'कलियुग',
    tagline: 'The Age of Chaos & Rebirth',
    virtue: 'Chaos · Resilience · Awakening',
    description:
      'The iron age — where darkness tests the soul, and amidst the chaos, the light of Artimas burns brightest.',
    longDescription:
      'Kalyuga is the age we inhabit. Dharma stands on one leg, fragile yet unbroken. Conflict, confusion, and chaos reign — but so does the possibility of awakening. It is in the darkest age that the most powerful transformations occur. And it is in Kalyuga that Artimas blazes forward — a convergence of all ages, a festival of fire and rebirth.',
    colors: {
      primary: '#E74C3C',
      secondary: '#2C2C2C',
      accent: '#C0392B',
      bg: '#1A0000',
      bgDark: '#0D0000',
      text: '#F5F5F5',
      border: '#E74C3C40',
      glow: '#E74C3C60',
    },
    gradient: 'linear-gradient(135deg, #3A0A0A 0%, #E74C3C 50%, #1A0000 100%)',
    characters: [
      { name: 'Kalki', role: 'The future avatar — the destroyer of evil who will restore dharma' },
      { name: 'Kali', role: 'The demon of the age, embodiment of strife and corruption' },
    ],
    events: [
      { name: 'The Descent into Kali', desc: 'The departure of Krishna marks the beginning of the iron age' },
      { name: 'The Coming of Kalki', desc: 'The prophesied end — when chaos breaks and a new Satyuga begins' },
    ],
    motif: 'Cracked Earth · Storm · Ember · Sword',
    icon: '🔥',
  },
};

export const YUGA_ORDER: YugaKey[] = ['satya', 'treta', 'dvapara', 'kali'];

export interface Event {
  id: string;
  name: string;
  yuga: YugaKey;
  tagline: string;
  description: string;
  rules: string[];
  date: string;
  time: string;
  venue: string;
  teamSize: string;
  mythTieIn: string;
  coordinators: { name: string; phone: string; email: string }[];
  registrationOpen: boolean;
}

export const EVENTS: Event[] = [
  {
    id: 'abhivyakti',
    name: 'Abhivyakti',
    yuga: 'satya',
    tagline: 'Speak the eternal truth',
    description:
      'A solo debate and oratory event where participants articulate compelling arguments on contemporary and philosophical topics. As pure as the Satyuga itself — only truth and eloquence prevail.',
    rules: [
      'Each participant gets 5 minutes for the prepared speech',
      'Impromptu round of 2 minutes on the spot topic',
      'Judged on content, delivery, and clarity',
      'No props or visual aids allowed',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Auditorium, Block A',
    teamSize: 'Solo',
    mythTieIn:
      'In Satyuga, every word spoken was truth incarnate. Language itself was sacred. Abhivyakti channels that power — where your voice becomes your dharma.',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
  {
    id: 'srishti',
    name: 'Srishti',
    yuga: 'satya',
    tagline: 'Create from pure imagination',
    description:
      'A fine arts and creative expression event — painting, sketching, and mixed media. Participants channel the pristine creative energy of Satyuga to craft something beautiful from nothing.',
    rules: [
      'Time limit: 3 hours',
      'Theme revealed on the day of the event',
      'Participants must bring their own materials',
      'Digital art not permitted in the primary round',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Creative Arts Studio, Block B',
    teamSize: 'Solo',
    mythTieIn:
      'Brahma\'s first act was creation itself — breathing existence into the void. Srishti honours that primal creative impulse, where art becomes an offering to the cosmos.',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
  {
    id: 'veer-gatha',
    name: 'Veer Gatha',
    yuga: 'treta',
    tagline: 'Tell the saga of heroes',
    description:
      'A theatrical performance event where teams enact scenes from mythology, history, or original scripts. Drama, valor, and sacrifice take center stage in honor of Tretayuga\'s heroic age.',
    rules: [
      'Teams of 5–10 participants',
      'Performance time: 10–15 minutes',
      'Original or adapted scripts accepted',
      'Props and costumes encouraged',
      'Language: Hindi, English, or Sanskrit',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Main Stage, Open Air Theatre',
    teamSize: '5–10 members',
    mythTieIn:
      'The Ramayana itself was first sung — a veer gatha, a song of valor. Lord Rama\'s journey was not just a story; it was a template for righteousness. Here, you carry that flame forward.',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
  {
    id: 'yuddha-kala',
    name: 'Yuddha Kala',
    yuga: 'treta',
    tagline: 'Compete with discipline and skill',
    description:
      'A sports and physical challenge event inspired by the martial traditions of Tretayuga. Tests of strength, agility, and discipline — where athletes embody the spirit of Rama\'s warriors.',
    rules: [
      'Open to all participants',
      'Multiple discipline rounds',
      'Fair play strictly enforced',
      'Medical clearance required for combat events',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Sports Ground',
    teamSize: 'Solo or Duo',
    mythTieIn:
      'Hanuman\'s leap across the ocean, Rama\'s single arrow felling a demon — Tretayuga celebrated physical excellence in service of dharma. Yuddha Kala is your arena.',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
  {
    id: 'chakravyuh',
    name: 'Chakravyuh',
    yuga: 'dvapara',
    tagline: 'Navigate the maze of strategy',
    description:
      'A multi-round strategy and puzzle event — quizzes, escape rooms, and tactical board challenges — echoing the labyrinthine strategies of the Mahabharata battlefield.',
    rules: [
      'Teams of 3',
      'Multiple elimination rounds',
      'Hints cost points',
      'Time is a factor in tiebreakers',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Conference Room, Block C',
    teamSize: '3 members',
    mythTieIn:
      'The Chakravyuh was the impenetrable spiral formation at Kurukshetra — only the greatest minds could navigate it. Abhimanyu entered knowing only the way in. Can you find the way out?',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
  {
    id: 'dharma-sabha',
    name: 'Dharma Sabha',
    yuga: 'dvapara',
    tagline: 'Debate the duality of right and wrong',
    description:
      'A group discussion and mock parliament event where teams argue for opposing sides of complex ethical dilemmas — mirroring the moral conflicts of Dwaparyuga.',
    rules: [
      'Teams of 4',
      'Each team argues both sides across rounds',
      'Judged on argument quality, research, and rebuttal',
      'No personal attacks',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Seminar Hall, Block A',
    teamSize: '4 members',
    mythTieIn:
      'The Kauravas and Pandavas both believed in their dharma. Krishna himself navigated the grey — where the right path was never simple. Dharma Sabha asks the same question: what is truly righteous?',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
  {
    id: 'tandav',
    name: 'Tāṇḍava',
    yuga: 'dvapara',
    tagline: 'Dance at the edge of destruction',
    description:
      'A group dance competition — classical, fusion, or contemporary — that channels the raw kinetic energy of the Dwaparyuga. The dance that Shiva himself performs at the end of ages.',
    rules: [
      'Groups of 6–15',
      'Performance: 5–8 minutes',
      'Any dance style permitted',
      'Live musicians allowed (coordinate in advance)',
      'No objectionable content',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Main Stage',
    teamSize: '6–15 members',
    mythTieIn:
      'Lord Shiva\'s Tāṇḍava is the dance of creation and destruction — the cosmic rhythm that sustains the universe. Every powerful performance echoes that eternal beat.',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
  {
    id: 'kalki-code',
    name: 'Kalki Code',
    yuga: 'kali',
    tagline: 'Forge the future from chaos',
    description:
      'A hackathon and innovation challenge — build a solution, app, or prototype that addresses a real-world problem. In Kalyuga, technology is the new dharma. Code your way to salvation.',
    rules: [
      'Teams of 2–4',
      '24-hour build window',
      'Any technology stack',
      'Working prototype required for final round',
      'Open source libraries permitted',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Computer Labs, Block D',
    teamSize: '2–4 members',
    mythTieIn:
      'Kalki arrives on a white horse with a blazing sword to cut through the darkness of Kalyuga. Your code is that sword — a tool of disruption, creation, and renewal in the age of machines.',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
  {
    id: 'pralay',
    name: 'Pralaya',
    yuga: 'kali',
    tagline: 'The grand finale — chaos becomes celebration',
    description:
      'The closing cultural extravaganza of Artimas 26-27 — a massive showcase of talent, performance, and community. Music, fusion acts, and open-mic performances as Kalyuga burns bright before the dawn of a new Satya.',
    rules: [
      'Open participation after selection',
      'Performance slots: 5–20 minutes',
      'All art forms welcome',
      'Final schedule announced 48 hours prior',
    ],
    date: 'TBD',
    time: 'TBD',
    venue: 'Main Stage, Open Air Theatre',
    teamSize: 'Open',
    mythTieIn:
      'Pralaya is the great dissolution — the cosmic reset. But dissolution is not death; it is the seed of what comes next. Artimas ends, and a new age begins. This is your moment.',
    coordinators: [
      { name: 'TBD', phone: '+91 XXXXXXXXXX', email: 'coordinator@aimsa.edu' },
    ],
    registrationOpen: false,
  },
];
