import getCloudinaryUrl from '../utils/cloudinary';

const saishImg = getCloudinaryUrl('src/assets/coordinators/saish.png');
const harshImg = getCloudinaryUrl('src/assets/coordinators/harsh.png');
const shamalImg = getCloudinaryUrl('src/assets/coordinators/shamal.png');
const rutujaImg = getCloudinaryUrl('src/assets/coordinators/rutuja.png');
const muskanImg = getCloudinaryUrl('src/assets/coordinators/muskan.png');
const shrutiImg = getCloudinaryUrl('src/assets/coordinators/shruti.png');
const parthImg = getCloudinaryUrl('src/assets/coordinators/parth.png');
const sanikaImg = getCloudinaryUrl('src/assets/coordinators/sanika.png');
const prathamImg = getCloudinaryUrl('src/assets/coordinators/pratham.png');
const bhumikaImg = getCloudinaryUrl('src/assets/coordinators/bhumika.png');
const kshitijImg = getCloudinaryUrl('src/assets/coordinators/kshitij.png');
const vrushabhImg = getCloudinaryUrl('src/assets/coordinators/vrushabh.png');
const debottamImg = getCloudinaryUrl('src/assets/coordinators/debottam.png');
const tanmayeeImg = getCloudinaryUrl('src/assets/coordinators/tanmayee.png');

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

export interface Coordinator {
  name: string;
  phone: string;
  email: string;
  avatar?: string;
}

export interface GitaShloka {
  sanskrit: string;
  transliteration: string;
  meaning: string;
}

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
  gitaShloka?: GitaShloka;
  coordinators: Coordinator[];
  registrationOpen: boolean;
}

export const EVENTS: Event[] = [
  {
    id: 'hackmatrix',
    name: 'Hackmatrix',
    yuga: 'satya',
    tagline: 'Matrix of pure code and truth',
    description:
      'A high-stakes coding hackathon where purity of logic and truth of code reign supreme, as unblemished as the Satyuga itself.',
    rules: [
      'Teams of 1–4 members',
      'Code must be written during the event window',
      'Open-source libraries permitted',
      'Judged on innovation, clean architecture, and execution',
    ],
    date: 'Oct 9, 2026',
    time: '09:30 AM – 01:30 PM',
    venue: 'Computer Labs, Block D',
    teamSize: '1–4 members',
    mythTieIn:
      'In Satyuga, pure truth governed all existence. Hackmatrix challenges coders to craft immaculate, flawless solutions in harmony with fundamental logic.',
    gitaShloka: {
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      transliteration: 'Karmanye vadhikaraste, ma phaleshu kadachana',
      meaning:
        'Your right is to the work alone, never to its fruits — act without attachment to the outcome. A fitting anchor for a 30-hour build sprint, where the grind of creation matters more than guaranteed results.',
    },
    coordinators: [
      { name: 'Saish', phone: '+91 75887 68990', email: 'saish@aimsa.edu', avatar: saishImg },
      { name: 'Harsh', phone: '+91 96043 71041', email: 'harsh@aimsa.edu', avatar: harshImg },
    ],
    registrationOpen: false,
  },
  {
    id: 'antaryami',
    name: 'Antaryami',
    yuga: 'satya',
    tagline: 'Channel the inner voice of intelligence',
    description:
      'A prompt relay challenge testing your ability to guide AI systems with clarity, wisdom, and inner intuition.',
    rules: [
      'Teams of 2 participants',
      'Multiple prompt engineering rounds',
      'Time limits per relay round',
      'Judged on response accuracy and creativity of prompts',
    ],
    date: 'Oct 9, 2026',
    time: '02:30 PM – 05:30 PM',
    venue: 'Seminar Hall, Block A',
    teamSize: 'Duo',
    mythTieIn:
      'Antaryami refers to the inner guide and divine consciousness within. Expressing thoughts clearly to guide intelligence echoes the divine word of Satyuga.',
    gitaShloka: {
      sanskrit: 'अहमात्मा गुडाकेश सर्वभूताशयस्थितः।',
      transliteration: 'Aham atma gudakesha, sarva-bhutashaya-sthitah',
      meaning:
        '"I am the Self, seated in the hearts of all beings" — the indweller who perceives from within. Mirrors the event\'s core act: reading and relaying an inner, unseen truth to another mind.',
    },
    coordinators: [
      { name: 'Muskan', phone: '+91 92668 60617', email: 'muskan@aimsa.edu', avatar: muskanImg },
      { name: 'Shruti', phone: '+91 80103 52757', email: 'shruti@aimsa.edu', avatar: shrutiImg },
    ],
    registrationOpen: false,
  },
  {
    id: 'setu-nirman',
    name: 'Setu Nirman',
    yuga: 'treta',
    tagline: 'Bridge ideas into iconic brands',
    description:
      'A brandathon where teams build complete brand identities, strategies, and narratives from scratch in record time.',
    rules: [
      'Teams of 2–4 members',
      'Case study revealed on the spot',
      'Deliverables include brand story, logo design, and marketing pitch',
      'Presentation time: 8 minutes',
    ],
    date: 'Oct 10, 2026',
    time: '09:30 AM – 12:30 PM',
    venue: 'Conference Room, Block C',
    teamSize: '2–4 members',
    mythTieIn:
      'Just as the Vanar Sena constructed Ram Setu across the ocean, Setu Nirman challenges you to bridge vision and reality to build an enduring brand.',
    gitaShloka: {
      sanskrit: 'तस्मादसक्तः सततं कार्यं कर्म समाचर।',
      transliteration: 'Tasmad asaktah satatam karyam karma samachara',
      meaning:
        'Therefore, without attachment, perform continuously the work that is to be done. Speaks to teams executing a brief that isn\'t their own — building with full commitment toward an assigned brand\'s vision.',
    },
    coordinators: [
      { name: 'Debottam', phone: '+91 86986 51336', email: 'debottam@aimsa.edu', avatar: debottamImg },
      { name: 'Tanmayee', phone: '+91 90758 59781', email: 'tanmayee@aimsa.edu', avatar: tanmayeeImg },
    ],
    registrationOpen: false,
  },
  {
    id: 'datathon',
    name: 'Datathon',
    yuga: 'dvapara',
    tagline: 'Unravel insights from cosmic chaos',
    description:
      'A data science and analytics battle to uncover patterns, forecast trends, and make strategic data-driven decisions.',
    rules: [
      'Teams of 2–3 members',
      'Dataset provided on event day',
      'Models must be submitted with reproducible notebooks',
      'Judged on statistical rigor, accuracy metric, and insight presentation',
    ],
    date: 'Oct 10, 2026',
    time: '05:00 PM – 08:00 PM',
    venue: 'Data Analytics Lab, Block D',
    teamSize: '2–3 members',
    mythTieIn:
      'Dwaparyug was the age of deep strategy and calculated moves. Datathon puts your strategic analytical wisdom to the ultimate test.',
    gitaShloka: {
      sanskrit: 'योगः कर्मसु कौशलम्।',
      transliteration: 'Yogah karmasu kaushalam',
      meaning:
        'Excellence in action is yoga — skill applied with clarity and discipline. Ties directly to the strategic precision of building and tuning an ML model under pressure.',
    },
    coordinators: [
      { name: 'Shamal', phone: '+91 95117 46783', email: 'shamal@aimsa.edu', avatar: shamalImg },
      { name: 'Rutuja', phone: '+91 82619 77022', email: 'rutuja@aimsa.edu', avatar: rutujaImg },
    ],
    registrationOpen: false,
  },
  {
    id: 'kurukshetra',
    name: 'Kurukshetra (CTF)',
    yuga: 'dvapara',
    tagline: 'The ultimate cybersecurity battleground',
    description:
      'A Capture The Flag (CTF) cybersecurity war where ethical hackers clash to breach defenses, decipher codes, and secure flags.',
    rules: [
      'Teams of 1–4 members',
      'Jeopardy-style CTF format (Web, Crypto, Reverse Engineering, Forensics)',
      'Automated scoring platform',
      'Strict prohibition of attacks against infrastructure',
    ],
    date: 'Oct 10, 2026',
    time: '01:30 PM – 04:30 PM',
    venue: 'Cyber Lab, Block D',
    teamSize: '1–4 members',
    mythTieIn:
      'Kurukshetra was the legendary battlefield of strategic warfare. In this digital Kurukshetra, offense and defense clash for supreme cyber victory.',
    gitaShloka: {
      sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
      transliteration:
        'Yada yada hi dharmasya glanir bhavati bharata, abhyutthanam adharmasya tadatmanam srijamyaham',
      meaning:
        'Whenever dharma declines and adharma rises, the divine manifests to restore balance. The perfect anchor for a security battlefield — defenders rising each time a system\'s order is breached.',
    },
    coordinators: [
      { name: 'Kshitij', phone: '+91 93226 42174', email: 'kshitij@aimsa.edu', avatar: kshitijImg },
      { name: 'Vrushabh', phone: '+91 74993 40612', email: 'vrushabh@aimsa.edu', avatar: vrushabhImg },
    ],
    registrationOpen: false,
  },
  {
    id: 'chakravyuh',
    name: 'Chakravyuh',
    yuga: 'kali',
    tagline: 'Escape the labyrinth of illusions',
    description:
      'A Houdini-style escape and tactical heist challenge where teams solve high-pressure puzzles and complex traps before time runs out.',
    rules: [
      'Teams of 3–4 members',
      'Multiple elimination levels',
      'Time penalties for hints',
      'Physical and logic puzzle solving under pressure',
    ],
    date: 'Oct 11, 2026',
    time: '10:00 AM – 02:00 PM',
    venue: 'Auditorium, Block A',
    teamSize: '3–4 members',
    mythTieIn:
      'In the chaotic Kalyug, the web of illusions is densest. Only the sharpest minds can unravel the Chakravyuh and escape the maze.',
    gitaShloka: {
      sanskrit: 'भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च।\nअहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा॥',
      transliteration:
        'Bhumir apo \'nalo vayuh kham mano buddhir eva cha, ahankara itiyam me bhinna prakritir ashtadha',
      meaning:
        'Earth, water, fire, air, space, mind, intellect, and ego — these form the eightfold division of my material nature. The eight-layered nature of existence itself mirrors the nested, multi-layered structure of the chakravyuh formation — aptitude, mystery, and escape room, each ring harder to break through than the last.',
    },
    coordinators: [
      { name: 'Parth', phone: '+91 87884 23371', email: 'parth@aimsa.edu', avatar: parthImg },
      { name: 'Sanika', phone: '+91 86057 68657', email: 'sanika@aimsa.edu', avatar: sanikaImg },
    ],
    registrationOpen: false,
  },
  {
    id: 'mayavi',
    name: 'Mayavi',
    yuga: 'kali',
    tagline: 'Unmask the impostor in the dark',
    description:
      'A social deduction and deception game inspired by Among Us. Identify the illusionist before chaos consumes the ship.',
    rules: [
      'Solo participation in assigned game lobbies',
      'Secret roles assigned per game',
      'Tasks and emergency discussions timed',
      'Points awarded for survival, deductions, and successful bluffs',
    ],
    date: 'Oct 11, 2026',
    time: '03:00 PM – 07:00 PM',
    venue: 'Main Stage / Open Air Theatre',
    teamSize: 'Solo / Group',
    mythTieIn:
      'Kalyug is marked by illusion (Maya) and deception. Mayavi tests your perception to distinguish truth from deceit in an era of shadows.',
    gitaShloka: {
      sanskrit: 'दैवी ह्येषा गुणमयी मम माया दुरत्यया।',
      transliteration: 'Daivi hy esha guna-mayi mama maya duratyaya',
      meaning:
        'This divine illusion (maya) of mine, woven from the gunas, is exceedingly difficult to see through. Captures the essence of a hidden-identity social-deception game — nothing is quite what it appears to be.',
    },
    coordinators: [
      { name: 'Pratham', phone: '+91 82639 67306', email: 'pratham@aimsa.edu', avatar: prathamImg },
      { name: 'Bhumika', phone: '+91 87666 42327', email: 'bhumika@aimsa.edu', avatar: bhumikaImg },
    ],
    registrationOpen: false,
  },
];
