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

export interface EventRound {
  roundNumber: number;
  title: string;
  mode: 'Online' | 'Offline';
  date: string;
  time?: string | null;
  venue?: string | null;
  description: string;
}

export interface EventPrizes {
  first?: number | string | null;
  second?: number | string | null;
  third?: number | string | null;
  totalCashPrize: number | string;
  currency: string;
  note?: string;
}

export interface Event {
  id: string;
  name: string;
  formerName?: string | null;
  yuga: YugaKey;
  tagline: string;
  description: string;
  about?: string;
  rules: string[];
  rulebookUrl?: string;
  date: string;
  time: string;
  venue: string;
  teamSize: string;
  registrationFee?: string;
  numberOfRounds?: number;
  rounds?: EventRound[];
  prizes?: EventPrizes;
  mythTieIn: string;
  gitaShloka?: GitaShloka;
  coordinators: Coordinator[];
  registrationOpen: boolean;
}

export const EVENTS: Event[] = [
  {
    id: 'hackmatrix',
    name: 'HackMatrix',
    formerName: null,
    yuga: 'satya',
    tagline: 'Matrix of pure code and truth',
    description:
      'A two-round hackathon requiring an idea-submission PPT and GitHub prototype (Round 1), followed by an overnight offline hackathon to build a working AI/ML-integrated prototype (Round 2).',
    about:
      'A two-round hackathon requiring an idea-submission PPT and GitHub prototype (Round 1), followed by an overnight offline hackathon to build a working AI/ML-integrated prototype (Round 2).',
    teamSize: 'Teams of 3-4 members',
    registrationFee: '₹100',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 (Online) - PPT & Prototype Submission',
        mode: 'Online',
        date: '7 Sept 2026 - 27 Sept 2026',
        time: 'Problem release 11:00 AM (7 Sept); Submission window 26-27 Sept',
        venue: 'Online / Google Drive',
        description:
          'Teams submit an Idea PPT (fixed template) plus a GitHub-based prototype link and explanatory video via Google Drive. Evaluated on innovativeness, tech stack, UI/UX, GitHub maintenance, documentation, and social impact. Top 8 teams per track advance.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 (Offline) - Overnight Hackathon',
        mode: 'Offline',
        date: '10 Oct 2026 - 11 Oct 2026',
        time: 'Kick-off 9:00 AM (10th) through Final Evaluation 11:00 AM (11th)',
        venue: 'Main Auditorium / Innovation Lab',
        description:
          'All work done onsite overnight; teams submit a working prototype integrating AI/ML. One winner selected per domain.',
      },
    ],
    prizes: {
      first: 25000,
      second: 15000,
      third: 10000,
      totalCashPrize: 50000,
      currency: 'INR',
    },
    rules: [
      'Team size must be 3-4; team composition final after registration.',
      'GitHub repo must be created by the team leader only, kept private until instructed, with all members contributing (no zip/large-file commits).',
      'PPT must strictly follow the provided template with no additional slides.',
      "Female participants must shift to the girls' hostel after dinner in Round 02 per institutional policy.",
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1NkJAkI0yjIhUqrhZYbFfIhXRTXMJZIcc/view?usp=drive_link',
    date: '7 Sept – 11 Oct 2026',
    time: 'Kick-off 9:00 AM (10th) – 11:00 AM (11th)',
    venue: 'Main Auditorium / Innovation Lab',
    mythTieIn:
      'In Satyuga, truth was absolute and uncompromised. Hackmatrix embodies this spirit: pure creation from raw truth, where every line of code must stand on its own merit without illusion.',
    gitaShloka: {
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि',
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
    id: 'promptrelay',
    name: 'Prompt Relay',
    formerName: 'Antaryami',
    yuga: 'satya',
    tagline: 'Channel the inner voice of intelligence',
    description:
      'A three-round AI prompt-engineering competition combining riddle decoding, a Chinese-whispers-style relay to recreate an image via prompts, and head-to-head prompt duels.',
    about:
      'A three-round AI prompt-engineering competition combining riddle decoding, a Chinese-whispers-style relay to recreate an image via prompts, and head-to-head prompt duels.',
    teamSize: 'Teams of exactly 3 members',
    registrationFee: '₹100',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 - Prompt Upgrade Challenge (Online)',
        mode: 'Online',
        date: '5th Oct 2026',
        time: 'Submission 12:00 PM - 11:59 PM; Results 8th Oct',
        venue: 'Online Submission',
        description:
          'Teams decode 5 pirate-themed riddles, integrate elements with SDG themes into an upgraded AI prompt, and generate an image. Judged on riddle accuracy, prompt quality, image quality, and creativity (100 pts). Top 10 teams qualify.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 - Prompt Relay Challenge (Offline)',
        mode: 'Offline',
        date: '10th Oct 2026',
        time: '9:00 AM Reporting; Relay begins 10:00 AM; Submission 11:00 AM; Results 12:00 PM',
        venue: 'Labs 6517, 6518, 6519',
        description:
          '3 sequential roles (Observer, Interpreter, Finalizer) relay a description of an image verbally without notes to recreate it via an AI-generated final image, scored on accuracy to 15 target elements (75 pts) and prompt quality (25 pts). Top 6 teams qualify.',
      },
      {
        roundNumber: 3,
        title: 'Round 3 - Prompt Duel: Decode, Bid, Generate (Offline)',
        mode: 'Offline',
        date: '10th Oct 2026',
        time: '1:00 PM - 4:00 PM; Results 5:00 PM',
        venue: 'Labs 6517, 6518, 6519',
        description:
          'Head-to-head team duels: solve a puzzle, observe a reference image for 10-15 seconds, bid credits for advantages/disadvantages, then generate a prompt-based image from memory. Judged on puzzle solving, prompt quality, visual similarity, creativity, and bidding strategy.',
      },
    ],
    prizes: {
      first: 7000,
      second: 7000,
      third: 7000,
      totalCashPrize: 21000,
      currency: 'INR',
      note: 'Equal cash prizes for all three podium positions',
    },
    rules: [
      'Team size must be exactly 3 (mandatory); roles (Observer, Interpreter, Finalizer) assigned before Round 2 begins.',
      'Strict sequencing and information flow control in Round 2 - each player may only speak verbally to the next, no written notes/prompt sharing.',
      'All prompts must be originally created during the competition; use of pre-written/AI-generated prompts as a foundation is prohibited.',
      'Any attempt to circumvent the relay structure, share images prematurely, or manipulate evaluation results in immediate disqualification.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1iQYh2uXFR0Mh9P05klQr1_NSLWVdj4Gw/view?usp=drive_link',
    date: '5th Oct – 10th Oct 2026',
    time: '09:00 AM – 05:00 PM',
    venue: 'Seminar Hall, Block A',
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
    id: 'brandathon',
    name: 'Brand-A-Thon',
    formerName: 'Setu Nirman',
    yuga: 'treta',
    tagline: 'Bridge ideas into iconic brands',
    description:
      'A three-round branding and design competition testing design aptitude, brand strategy research, and a 12-hour brand-building challenge culminating in a Shark Tank-style pitch.',
    about:
      'A three-round branding and design competition testing design aptitude, brand strategy research, and a 12-hour brand-building challenge culminating in a Shark Tank-style pitch.',
    teamSize: 'Teams of 2-4 members',
    registrationFee: '₹100 per team',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 - Online Design Aptitude Quiz',
        mode: 'Online',
        date: '2/10/2026',
        time: '5:00 PM - 6:00 PM',
        venue: 'Online Quiz Portal',
        description:
          'Quiz on design principles, colour theory, branding, visual communication, and logical reasoning. One submission per team.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 - Domain Selection & Video Presentation',
        mode: 'Online',
        date: '3/10/2026 - 6/10/2026',
        time: 'Domain selection 9:00-11:00 AM (3/10); Video due 6:00 PM (4/10); Shortlist 9:00 AM (6/10)',
        venue: 'Online Submission',
        description:
          'Teams pick a domain, research it, and submit a short video pitching a brand idea. Shortlisting is domain-wise.',
      },
      {
        roundNumber: 3,
        title: 'Round 3 - 12-Hour Brand Building Challenge',
        mode: 'Offline',
        date: 'Offline finale',
        time: '7:00 AM Reporting - 8:00 PM Event Ends',
        venue: 'Old Reading Hall, PCCOE',
        description:
          '8-hour development + 4-hour evaluation. Teams build a complete brand (logo, identity, campaign, pricing, growth plan) and deliver a Shark Tank-style final pitch.',
      },
    ],
    prizes: {
      first: 7500,
      second: 5000,
      third: 2500,
      totalCashPrize: 15000,
      currency: 'INR',
    },
    rules: [
      'Team size must be 2-4 members; team composition is final after registration.',
      'All work must be original; plagiarism or fabricated research leads to disqualification.',
      'Round 3 members must be present offline and bring their own laptops/chargers.',
      'Teams must continue with their Round 2 brand idea; organizers may give on-spot changes.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1AUBz0NDEqAadvhzAbrPBsmw5_FOWGk_M/view?usp=drive_link',
    date: '2/10/2026 – Offline Finale',
    time: '7:00 AM – 8:00 PM',
    venue: 'Old Reading Hall / Block C',
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
    formerName: null,
    yuga: 'dvapara',
    tagline: 'Unravel insights from cosmic chaos',
    description:
      'A two-round data science/ML competition where teams build predictive models on Kaggle (Round 1) and tackle a live, evolving data challenge onsite (Round 2).',
    about:
      'A two-round data science/ML competition where teams build predictive models on Kaggle (Round 1) and tackle a live, evolving data challenge onsite (Round 2).',
    teamSize: 'Teams of 1-2 members',
    registrationFee: '₹100 per participant',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 (Online)',
        mode: 'Online',
        date: '6th Oct 2026 - 8th Oct 2026',
        time: 'Submission opens 6:00 PM (6th); closes 6:00 PM (8th)',
        venue: 'Online (Kaggle)',
        description:
          'Teams build ML models on provided training data and submit predictions on Test.csv via Kaggle; scored on public leaderboard. Max 3 submissions/day. Top 15 teams qualify.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 (Offline)',
        mode: 'Offline',
        date: '9th October 2026',
        time: '9:00 AM Reporting - 5:00 PM Ends',
        venue: 'Labs 6517, 6518, 6519',
        description:
          'Onsite challenge with evolving datasets and surprise task twists; code must be written entirely onsite with no pre-built models.',
      },
    ],
    prizes: {
      first: 10000,
      second: 6000,
      third: 4000,
      totalCashPrize: 20000,
      currency: 'INR',
    },
    rules: [
      'Unauthorized use of the dataset for external purposes is strictly prohibited.',
      'Submissions must be original work; plagiarized/copied code results in disqualification.',
      'Round 2: no pre-built code/models allowed, and no collaboration between teams.',
      'All submissions must be made through the official Datathon Portal.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/16Hffq-Jn3Q5RhPzedLmux5Km6E0u2q1U/view?usp=drive_link',
    date: '6th Oct – 9th Oct 2026',
    time: '09:00 AM – 05:00 PM',
    venue: 'Data Analytics Lab, Block D',
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
    formerName: 'CTF',
    yuga: 'dvapara',
    tagline: 'The ultimate cybersecurity battleground',
    description:
      'A two-round cybersecurity and AI challenge: an LLM jailbreaking round to extract a hidden key, followed by a multi-domain Capture The Flag event.',
    about:
      'A two-round cybersecurity and AI challenge: an LLM jailbreaking round to extract a hidden key, followed by a multi-domain Capture The Flag event.',
    teamSize: 'Teams of 2-4 members',
    registrationFee: '₹100',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 - LLM Jailbreak (Online)',
        mode: 'Online',
        date: 'Saturday, 3rd Oct',
        time: '10:00 AM - 6:00 PM',
        venue: 'Online Arena',
        description:
          'Teams craft prompts to extract a hidden key from RAG-based LLMs. Scored on speed and accuracy. Top 20 teams on the leaderboard qualify.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 - Capture The Flag (Offline)',
        mode: 'Offline',
        date: 'Sunday, 11th Oct',
        time: '9:00 AM Reporting - 5:00 PM Ends',
        venue: 'Seminar Hall, 5th Floor Mech Building, PCCOE',
        description:
          '10 domains, each with 2-3 ordered sub-questions/flags covering cybersecurity concepts (logic, decoding, file/website analysis). Prize pool ₹15,000.',
      },
    ],
    prizes: {
      first: 15000,
      second: 10000,
      third: 5000,
      totalCashPrize: 30000,
      currency: 'INR',
    },
    rules: [
      'Team size 2-4; team composition final after registration; participants must bring own laptops.',
      'Use of AI/LLM tools (ChatGPT, Gemini, Claude) is allowed in Round 1.',
      'Any attempt to manipulate results or bypass evaluation leads to immediate disqualification.',
      "Only the top 20 teams from Round 1 qualify for Round 2; judges' decisions are final.",
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1K8EYvn9FTv9G3cB4R0GuIkzH08GuyG98/view?usp=drive_link',
    date: '3rd Oct – 11th Oct 2026',
    time: '10:00 AM – 05:00 PM',
    venue: 'Seminar Hall, 5th Floor Mech Building',
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
    name: 'Houdini Heist',
    formerName: 'Chakravyuh',
    yuga: 'kali',
    tagline: 'Escape the labyrinth of illusions',
    description:
      'A mythology-and-riddle-themed escape challenge across three rounds, culminating in a live escape-room finale inspired by the Chakravyuh.',
    about:
      'A mythology-and-riddle-themed escape challenge across three rounds, culminating in a live escape-room finale inspired by the Chakravyuh.',
    teamSize: 'Teams of exactly 3 members',
    registrationFee: '₹100',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1',
        mode: 'Offline',
        date: '10/10/2026',
        time: '10:00 AM – 12:00 PM',
        venue: 'Classroom, Block A',
        description:
          'Written test on Indian mythology, Vedas, scriptures, general awareness, and logical reasoning; 1 mark/question. Top 12 teams advance.',
      },
      {
        roundNumber: 2,
        title: 'Round 2',
        mode: 'Offline',
        date: '10/10/2026',
        time: '2:00 PM – 6:00 PM',
        venue: 'Old Reading Hall',
        description:
          '12 teams split into 3 groups of 4; checkpoint-based Chausar-inspired challenge collecting 4 clues, combined into a single AI image/video prompt scored against a reference. One team per group (3 total) advances.',
      },
      {
        roundNumber: 3,
        title: 'Round 3 (Final)',
        mode: 'Offline',
        date: '11/10/2026',
        time: '10:00 AM – 3:00 PM (1 hour duration)',
        venue: 'Rooms 6517, 6518, 6519',
        description:
          'Final 3 teams compete in 3 separate escape rooms; first team to escape within the hour wins the cash prize.',
      },
    ],
    prizes: {
      first: 25000,
      second: null,
      third: null,
      totalCashPrize: 25000,
      currency: 'INR',
      note: 'Winner-take-all single championship cash prize of ₹25,000',
    },
    rules: [
      'Teams must consist of exactly 3 players; no more, no less.',
      'Once a round commences, requests for team changes will not be entertained.',
      'In Round 2, clues must be memorized (cannot be written down).',
      'No damage to college property; no cash prize if a team fails to escape within the time limit.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1-Dydkzz8A4Yp2-CPewqPymNqRA400aGu/view?usp=drive_link',
    date: '10/10/2026 – 11/10/2026',
    time: '10:00 AM – 03:00 PM',
    venue: 'Auditorium / Rooms 6517–6519',
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
    name: 'Among Us in Real Life',
    formerName: 'Mayavi',
    yuga: 'kali',
    tagline: 'Unmask the impostor in the dark',
    description:
      'A real-life adaptation of the game Among Us testing knowledge, aptitude, logical reasoning, and teamwork across three escalating rounds.',
    about:
      'A real-life adaptation of the game Among Us testing knowledge, aptitude, logical reasoning, and teamwork across three escalating rounds.',
    teamSize: 'Individual only',
    registrationFee: '₹100',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1',
        mode: 'Offline',
        date: '09/10/2026',
        time: '11:00 AM',
        venue: 'Classroom, Block A',
        description:
          'Individual test of general awareness, aptitude, and logical/technical reasoning. 1 mark per question. Top 16 advance.',
      },
      {
        roundNumber: 2,
        title: 'Round 2',
        mode: 'Offline',
        date: '09/01/2026',
        time: '1:00 PM',
        venue: 'Old Reading Hall',
        description:
          '16 players randomly split into 4 teams of 4. Teams play a Surprise Round elimination bracket; top 2 teams (8 players) advance.',
      },
      {
        roundNumber: 3,
        title: 'Round 3 (Final)',
        mode: 'Offline',
        date: '09/10/2026',
        time: '3:00 PM (1 hour duration)',
        venue: 'Main Stage / Open Air Theatre',
        description:
          '8 finalists play individually with randomly assigned roles (Sheriff, Crewmates, Impostors). Impostors win by eliminating all others; Crewmates/Sheriff win by voting out impostors or completing tasks.',
      },
    ],
    prizes: {
      first: 5000,
      second: 3000,
      third: 2000,
      totalCashPrize: 10000,
      currency: 'INR',
    },
    rules: [
      'Only individual participation is allowed.',
      'Requests for team/role changes will not be entertained once assigned.',
      'No damage to college property; strict action will be taken otherwise.',
      'Organizers reserve the right to disqualify any participant violating rules or instructions.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1vHn59xGK2iUGwnBQu6L-mn7-HB_LCnLF/view?usp=drive_link',
    date: '09/10/2026',
    time: '11:00 AM – 04:00 PM',
    venue: 'Main Stage / Open Air Theatre',
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
  {
    id: 'pixelperfect',
    name: 'Pixel Perfect',
    formerName: null,
    yuga: 'treta',
    tagline: 'Precision in design and visual mastery',
    description:
      'An online themed photography competition where participants capture and submit a single original photograph based on a released theme within a fixed time window.',
    about:
      'An online themed photography competition where participants capture and submit a single original photograph based on a released theme within a fixed time window.',
    teamSize: 'Individual only',
    registrationFee: '₹100',
    numberOfRounds: 1,
    rounds: [
      {
        roundNumber: 1,
        title: 'Single Round (Online)',
        mode: 'Online',
        date: '1st October 2026 - 11th October 2026',
        time: 'Theme released 9:00 AM (1st Oct); submissions close 9:00 PM (11th Oct)',
        venue: 'Online Submission (Google Form)',
        description:
          'One theme, one winner. Only one submission per participant, photograph must be taken within the given window with location noted, and submitted via Google Form with a brief concept/story.',
      },
    ],
    prizes: {
      first: 10000,
      second: 6000,
      third: 4000,
      totalCashPrize: 20000,
      currency: 'INR',
    },
    rules: [
      'Only basic editing (brightness, contrast, colour correction, cropping) is allowed; heavy manipulation/photoshopping is not.',
      'If edited, both the original (with metadata) and edited image must be submitted.',
      'NSFW or inappropriate content is strictly prohibited; late submissions are never accepted.',
      'By submitting, participants grant organizers rights to use/reproduce/publish the image for promotion.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1VtDYxMApD2vleAYA2E34yJwV_L9ohRQq/view?usp=drive_link',
    date: '1st Oct – 11th Oct 2026',
    time: 'Theme 9:00 AM (1st Oct) – Submissions 9:00 PM (11th Oct)',
    venue: 'Online Submission',
    mythTieIn:
      'In Tretayuga, the architecture of bridges and bows demanded flawless craftsmanship and divine symmetry. Pixel Perfect celebrates meticulous design accuracy where every pixel matters.',
    gitaShloka: {
      sanskrit: 'योगः कर्मसु कौशलम्।',
      transliteration: 'Yogah karmasu kaushalam',
      meaning:
        'Excellence in action is yoga. True mastery lies in the perfection and precision brought to every stroke of creative craftsmanship.',
    },
    coordinators: [
      { name: 'Saish', phone: '+91 84594 77995', email: 'saish@aimsa.edu', avatar: saishImg },
      { name: 'Rutuja', phone: '+91 91583 05670', email: 'rutuja@aimsa.edu', avatar: rutujaImg },
    ],
    registrationOpen: false,
  },
  {
    id: 'dronevedha',
    name: 'Drone Vedha',
    formerName: null,
    yuga: 'kali',
    tagline: 'Aerial mastery and precision obstacle navigation',
    description:
      'An exhilarating aerial obstacle racing and drone piloting competition. Pilots navigate intricate flight courses, tight slalom gates, and speed challenges to prove ultimate control of modern Astra technology.',
    about:
      'An exhilarating aerial obstacle racing and drone piloting competition. Pilots navigate intricate flight courses, tight slalom gates, and speed challenges to prove ultimate control of modern Astra technology.',
    teamSize: '2–4 members',
    registrationFee: '₹250 / Team',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Time Trial & Slalom Gate Navigation',
        mode: 'Offline',
        date: 'Oct 11, 2026',
        time: '10:00 AM – 01:00 PM',
        venue: 'Football Ground / Open Arena',
        description:
          'Individual time trials through a set aerial course with tight gates and altitude markers. Evaluated on lap time and gate clearance accuracy.',
      },
      {
        roundNumber: 2,
        title: 'Championship Obstacle Pursuit',
        mode: 'Offline',
        date: 'Oct 11, 2026',
        time: '02:00 PM – 05:00 PM',
        venue: 'Football Ground / Open Arena',
        description:
          'Top qualifiers compete head-to-head in an advanced obstacle course with dynamic hoops and precision landing targets.',
      },
    ],
    prizes: {
      first: 15000,
      second: 10000,
      third: 5000,
      totalCashPrize: 30000,
      currency: 'INR',
    },
    rules: [
      'Teams of 2–4 members',
      'Drones must comply with size and weight safety specifications',
      'All pilots must pass pre-flight safety and frequency check',
      'Penalties incurred for missing gates or out-of-boundary flight',
    ],
    date: 'Oct 11, 2026',
    time: '10:00 AM – 05:00 PM',
    venue: 'Football Ground / Open Arena',
    mythTieIn:
      'In Kaliyuga, machines and airborne technology dominate the skies like celestial arrows. Drone Vedha tests the razor-sharp focus and aim (Vedha) required to pilot high-speed flying craft.',
    gitaShloka: {
      sanskrit: 'अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।',
      transliteration: 'Abhyasena tu kaunteya vairagyena cha grihyate',
      meaning:
        'By constant practice and disciplined focus, O Arjuna, the mind and craft are mastered. Meticulous control of flying craft requires unwavering focus and intense practice.',
    },
    coordinators: [
      { name: 'Kshitij', phone: '+91 93700 81223', email: 'kshitij@aimsa.edu', avatar: kshitijImg },
      { name: 'Vrushabh', phone: '+91 95276 43288', email: 'vrushabh@aimsa.edu', avatar: vrushabhImg },
    ],
    registrationOpen: false,
  },
];
