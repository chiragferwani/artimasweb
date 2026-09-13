import getCloudinaryUrl from '../utils/cloudinary';

const saishImg = getCloudinaryUrl('src/assets/coordinators/saish.png');
const harshImg = getCloudinaryUrl('src/assets/coordinators/harsh.png');
const shamalImg = getCloudinaryUrl('src/assets/coordinators/shamal.png');
const rutujaImg = getCloudinaryUrl('src/assets/coordinators/rutuja.png');
const muskanImg = getCloudinaryUrl('src/assets/coordinators/muskan.png');
const anuskaImg = getCloudinaryUrl('src/assets/teamaimsa/anuska.png');
const parthImg = getCloudinaryUrl('src/assets/coordinators/parth.png');
const sanikaImg = getCloudinaryUrl('src/assets/coordinators/sanika.png');
const bhumikaImg = getCloudinaryUrl('src/assets/coordinators/bhumika.png');
const kshitijImg = getCloudinaryUrl('src/assets/coordinators/kshitij.png');
const vrushabhImg = getCloudinaryUrl('src/assets/coordinators/vrushabh.png');
const debottamImg = getCloudinaryUrl('src/assets/coordinators/debottam.png');
const tanmayeeImg = getCloudinaryUrl('src/assets/coordinators/tanmayee.png');
const hariImg = getCloudinaryUrl('src/assets/team/hari.png');
const nirbhayImg = getCloudinaryUrl('src/assets/team/nirbhay.png');
const jatinImg = getCloudinaryUrl('src/assets/team/jatin.png');

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

export interface PrizeRankItem {
  label: string;
  amount: string;
  type?: 'gold' | 'silver' | 'bronze' | 'special';
}

export interface EventPrizes {
  first?: number | string | null;
  second?: number | string | null;
  third?: number | string | null;
  totalCashPrize: number | string;
  currency: string;
  note?: string;
  prizeList?: PrizeRankItem[];
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
    yuga: 'kali',
    tagline: 'Matrix of pure code and truth',
    description:
      'A two-round hackathon requiring an idea-submission PPT and GitHub prototype (Round 1), followed by an overnight offline hackathon to build a working AI/ML-integrated prototype (Round 2).',
    about:
      'A two-round hackathon requiring an idea-submission PPT and GitHub prototype (Round 1), followed by an overnight offline hackathon to build a working AI/ML-integrated prototype (Round 2).',
    teamSize: 'Teams of 3-4 members',
    registrationFee: '₹200',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 (Online) - PPT & Prototype Submission',
        mode: 'Online',
        date: '7 Sept 2026 - 27 Sept 2026',
        time: 'Problem release 11:00 AM (7 Sept); Submission window 26-27 Sept',
        venue: 'Online',
        description:
          'Teams submit an Idea PPT (fixed template) plus a GitHub-based prototype link and explanatory video via Google Drive. Evaluated on innovativeness, tech stack, UI/UX, GitHub maintenance, documentation, and social impact. Top 8 teams per track advance.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 (Offline) - Overnight Hackathon',
        mode: 'Offline',
        date: '10 Oct 2026 - 11 Oct 2026',
        time: '24 Hours (Overnight) — Kick-off 10th Oct',
        venue: 'New Reading Hall',
        description:
          'All work done onsite overnight; teams submit a working prototype integrating AI/ML. One winner selected per domain.',
      },
    ],
    prizes: {
      first: 30000,
      second: 20000,
      third: 10000,
      totalCashPrize: '1,00,000+',
      currency: 'INR',
      note: 'Goodies, vouchers & gift hampers included in the prize pool',
      prizeList: [
        { label: '4th Prize', amount: '₹5,000', type: 'special' },
        { label: '3rd Prize', amount: '₹10,000', type: 'bronze' },
        { label: '1st Prize', amount: '₹30,000', type: 'gold' },
        { label: '2nd Prize', amount: '₹20,000', type: 'silver' },
        { label: '5th Prize', amount: '₹5,000', type: 'special' },
      ],
    },
    rules: [
      'Team size must be 3-4; team composition final after registration.',
      'GitHub repo must be created by the team leader only, kept private until instructed, with all members contributing (no zip/large-file commits).',
      'PPT must strictly follow the provided template with no additional slides.',
      "Female participants must shift to the girls' hostel after dinner in Round 02 per institutional policy.",
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1DXl-JMDclFmZ_76ap_zWgzcXygCGyWPu/view?usp=sharing',
    date: '7 Sept – 11 Oct 2026',
    time: '24 Hours (Overnight)',
    venue: 'New Reading Hall',
    mythTieIn:
      'In Kaliyuga, technology and code forge the modern battleground of creation. Hackmatrix challenges developers to engineer transformative AI solutions amidst digital chaos.',
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
    yuga: 'treta',
    tagline: 'Channel the inner voice of intelligence',
    description:
      'A three-round AI prompt-engineering competition combining riddle decoding, a Chinese-whispers-style relay to recreate an image via prompts, and head-to-head prompt duels.',
    about:
      'A three-round AI prompt-engineering competition combining riddle decoding, a Chinese-whispers-style relay to recreate an image via prompts, and head-to-head prompt duels.',
    teamSize: 'Teams of exactly 3 members',
    registrationFee: '₹150',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 - Prompt Upgrade Challenge (Online)',
        mode: 'Online',
        date: '5th Oct 2026',
        time: 'Submission 12:00 PM - 11:59 PM; Results 8th Oct',
        venue: 'Online',
        description:
          'Teams decode 5 pirate-themed riddles, integrate elements with SDG themes into an upgraded AI prompt, and generate an image. Judged on riddle accuracy, prompt quality, image quality, and creativity (100 pts). Top 10 teams qualify.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 - Prompt Relay Challenge (Offline)',
        mode: 'Offline',
        date: '10th Oct 2026',
        time: '9:00 AM – 6:00 PM',
        venue: '6517, 6518, 6519',
        description:
          '3 sequential roles (Observer, Interpreter, Finalizer) relay a description of an image verbally without notes to recreate it via an AI-generated final image, scored on accuracy to 15 target elements (75 pts) and prompt quality (25 pts). Top 6 teams qualify.',
      },
      {
        roundNumber: 3,
        title: 'Round 3 - Prompt Duel: Decode, Bid, Generate (Offline)',
        mode: 'Offline',
        date: '10th Oct 2026',
        time: '9:00 AM – 6:00 PM',
        venue: '6517, 6518, 6519',
        description:
          'Head-to-head team duels: solve a puzzle, observe a reference image for 10-15 seconds, bid credits for advantages/disadvantages, then generate a prompt-based image from memory. Judged on puzzle solving, prompt quality, visual similarity, creativity, and bidding strategy.',
      },
    ],
    prizes: {
      first: 5000,
      second: 5000,
      third: 5000,
      totalCashPrize: '30,000',
      currency: 'INR',
      note: 'Goodies, vouchers & gift hampers included in the prize pool. Cash prize ₹15,000 (₹5,000 each for 1st, 2nd, and 3rd).',
      prizeList: [
        { label: 'Winner 1', amount: '₹5,000', type: 'gold' },
        { label: 'Winner 2', amount: '₹5,000', type: 'silver' },
        { label: 'Winner 3', amount: '₹5,000', type: 'bronze' },
      ],
    },
    rules: [
      'Team size must be exactly 3 (mandatory); roles (Observer, Interpreter, Finalizer) assigned before Round 2 begins.',
      'Strict sequencing and information flow control in Round 2 - each player may only speak verbally to the next, no written notes/prompt sharing.',
      'All prompts must be originally created during the competition; use of pre-written/AI-generated prompts as a foundation is prohibited.',
      'Any attempt to circumvent the relay structure, share images prematurely, or manipulate evaluation results in immediate disqualification.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1aNs2qGADLh6BYUsnLxPB_WH44HNNYyWJ/view?usp=sharing',
    date: '5th Oct – 10th Oct 2026',
    time: '09:00 AM – 06:00 PM',
    venue: '6517, 6518, 6519',
    mythTieIn:
      'In Tretayuga, the power of the spoken word and unwavering duty guided legendary heroes. Prompt Relay tests communication and instinct to channel intelligence through words.',
    gitaShloka: {
      sanskrit: 'अहमात्मा गुडाकेश सर्वभूताशयस्थितः।',
      transliteration: 'Aham atma gudakesha, sarva-bhutashaya-sthitah',
      meaning:
        '"I am the Self, seated in the hearts of all beings" — the indweller who perceives from within. Mirrors the event\'s core act: reading and relaying an inner, unseen truth to another mind.',
    },
    coordinators: [
      { name: 'Muskan', phone: '+91 92668 60617', email: 'muskan@aimsa.edu', avatar: muskanImg },
      { name: 'Anuska', phone: '+91 81045 95396', email: 'anuska@aimsa.edu', avatar: anuskaImg },
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
      'Brandathon is a 3-round branding challenge testing design, research, strategy, and creativity. Participants begin with a Design Aptitude Test, followed by a research video submission on the given domain. The final round challenges teams to brand a given brand through strategy and visual identity, based on a problem statement.',
    about:
      'Brandathon is a 3-round branding challenge testing design, research, strategy, and creativity. Participants begin with a Design Aptitude Test, followed by a research video submission on the given domain. The final round challenges teams to brand a given brand through strategy and visual identity, based on a problem statement.',
    teamSize: 'Teams of 2-4 members',
    registrationFee: '₹100 per team',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 — Design Aptitude Test',
        mode: 'Online',
        date: '4th Oct 2026',
        time: '5:00 PM – 6:00 PM',
        venue: 'Online',
        description:
          'Test your design fundamentals, creativity & visual reasoning.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 — Research Video Submission',
        mode: 'Online',
        date: '10th Oct 2026',
        time: 'Online Evaluation & Shortlist',
        venue: 'Online',
        description:
          'Based on the selected problem statement, submit a research video with relevant insights and analysis.',
      },
      {
        roundNumber: 3,
        title: 'Round 3 — Brand Building Challenge',
        mode: 'Offline',
        date: '11th Oct 2026',
        time: '9:00 AM – 7:00 PM',
        venue: 'Old Reading Hall',
        description:
          'Based on the selected problem statement and its product/service, build and present a complete brand identity.',
      },
    ],
    prizes: {
      first: 10000,
      second: 6000,
      third: 4000,
      totalCashPrize: '30,000',
      currency: 'INR',
      note: 'Goodies, vouchers & gift hampers included in the prize pool',
    },
    rules: [
      'Team size must be 2-4 members; team composition is final after registration.',
      'All work must be original; plagiarism or fabricated research leads to disqualification.',
      'Round 3 members must be present offline and bring their own laptops/chargers.',
      'Teams must continue with their Round 2 brand idea; organizers may give on-spot changes.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1aVFIKSv7ajzPW1TEbKhcugTqk_61feSi/view?usp=drive_link',
    date: '4th Oct – 11th Oct 2026',
    time: '09:00 AM – 07:00 PM',
    venue: 'Old Reading Hall',
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
    yuga: 'satya',
    tagline: 'Unravel insights from cosmic chaos',
    description:
      'A two-round data science/ML competition where teams build predictive models on Kaggle (Round 1) and tackle a live, evolving data challenge onsite (Round 2).',
    about:
      'A two-round data science/ML competition where teams build predictive models on Kaggle (Round 1) and tackle a live, evolving data challenge onsite (Round 2).',
    teamSize: 'Teams of 1-2 members',
    registrationFee: '₹100 (Solo) / ₹150 (Duo)',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 (Online)',
        mode: 'Online',
        date: '6th Oct 2026',
        time: 'Online Submission',
        venue: 'Online',
        description:
          'Teams build ML models on provided training data and submit predictions on Test.csv via Kaggle; scored on public leaderboard. Max 3 submissions/day. Top 15 teams qualify.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 (Offline)',
        mode: 'Offline',
        date: '9th Oct 2026',
        time: '10:00 AM – 6:00 PM',
        venue: '6517, 6518, 6519',
        description:
          'Onsite challenge with evolving datasets and surprise task twists; code must be written entirely onsite with no pre-built models.',
      },
    ],
    prizes: {
      first: 10000,
      second: 6000,
      third: 4000,
      totalCashPrize: '30,000',
      currency: 'INR',
      note: 'Goodies, vouchers & gift hampers included in the prize pool',
    },
    rules: [
      'Unauthorized use of the dataset for external purposes is strictly prohibited.',
      'Submissions must be original work; plagiarized/copied code results in disqualification.',
      'Round 2: no pre-built code/models allowed, and no collaboration between teams.',
      'All submissions must be made through the official Datathon Portal.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/16Hffq-Jn3Q5RhPzedLmux5Km6E0u2q1U/view?usp=drive_link',
    date: '6th Oct – 9th Oct 2026',
    time: '10:00 AM – 06:00 PM',
    venue: '6517, 6518, 6519',
    mythTieIn:
      'In Satyuga, knowledge and truth were pure and absolute. Datathon puts analytical precision to the test to unravel divine clarity and predictive wisdom from raw data.',
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
    registrationFee: '₹200',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1 - LLM Jailbreak (Online)',
        mode: 'Online',
        date: '3rd Oct 2026',
        time: 'Online Arena Challenge',
        venue: 'Online',
        description:
          'Teams craft prompts to extract a hidden key from RAG-based LLMs. Scored on speed and accuracy. Top 30 teams on the leaderboard qualify.',
      },
      {
        roundNumber: 2,
        title: 'Round 2 - Capture The Flag (Offline)',
        mode: 'Offline',
        date: '11th Oct 2026',
        time: '9:00 AM – 7:00 PM',
        venue: 'Architecture Hall',
        description:
          '10 domains, each with 2-3 ordered sub-questions/flags covering cybersecurity concepts (logic, decoding, file/website analysis). Prize pool ₹15,000.',
      },
    ],
    prizes: {
      first: 10000,
      second: 6000,
      third: 4000,
      totalCashPrize: '30,000',
      currency: 'INR',
      note: 'Goodies, vouchers & gift hampers included in the prize pool',
    },
    rules: [
      'Team size 2-4; team composition final after registration; participants must bring own laptops.',
      'Use of AI/LLM tools (ChatGPT, Gemini, Claude) is allowed in Round 1.',
      'Any attempt to manipulate results or bypass evaluation leads to immediate disqualification.',
      "Only the top 30 teams from Round 1 qualify for Round 2; judges' decisions are final.",
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1K8EYvn9FTv9G3cB4R0GuIkzH08GuyG98/view?usp=drive_link',
    date: '3rd Oct – 11th Oct 2026',
    time: '09:00 AM – 07:00 PM',
    venue: 'Architecture Hall',
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
    yuga: 'dvapara',
    tagline: 'Escape the labyrinth of illusions',
    description:
      'A mythology-and-riddle-themed escape challenge across three rounds, culminating in a live escape-room finale inspired by the Chakravyuh.',
    about:
      'A mythology-and-riddle-themed escape challenge across three rounds, culminating in a live escape-room finale inspired by the Chakravyuh.',
    teamSize: 'Teams of exactly 3 members',
    registrationFee: '₹150',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Aptitude Test',
        mode: 'Offline',
        date: '10th Oct 2026',
        time: '10:00 AM – 12:00 PM',
        venue: 'Classroom',
        description:
          'An offline aptitude test to assess participants’ analytical thinking, logical reasoning, and problem-solving abilities. The top 12 teams based on their performance will qualify for Round 2.',
      },
      {
        roundNumber: 2,
        title: 'Mystery Round',
        mode: 'Offline',
        date: '10th Oct 2026',
        time: '2:00 PM – 6:00 PM',
        venue: 'Old Reading Hall',
        description:
          'A thrilling challenge of clues, riddles, memory, and problem-solving awaits! Navigate through checkpoints, solve riddles, uncover clues, and connect the pieces to complete the final challenge. Stay sharp, think fast, and crack the mystery together!',
      },
      {
        roundNumber: 3,
        title: 'Final Escape',
        mode: 'Offline',
        date: '11th Oct 2026',
        time: '10:00 AM – 3:00 PM',
        venue: '6517, 6518, 6519',
        description:
          'The final 3 teams enter 3 separate escape rooms, where teamwork, observation, and problem-solving will determine who escapes first. With a maximum of 1 hour to complete the challenge, the first team to successfully escape will claim victory and the cash prize.',
      },
    ],
    prizes: {
      first: 10000,
      second: null,
      third: null,
      totalCashPrize: '25,000',
      currency: 'INR',
      note: 'Goodies, vouchers & gift hampers included in the prize pool. Single winner cash prize: ₹10,000.',
    },
    rules: [
      'Teams must consist of exactly 3 players; no more, no less.',
      'Once a round commences, requests for team changes will not be entertained.',
      'In Round 2, clues must be memorized (cannot be written down).',
      'No damage to college property; no cash prize if a team fails to escape within the time limit.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1mjoldllqGbE4DMTYR3c2k9ia8apc5suY/view?usp=sharing',
    date: '10th Oct – 11th Oct 2026',
    time: '10:00 AM – 06:00 PM (10th) | 10:00 AM – 03:00 PM (11th)',
    venue: 'Classroom / Old Reading Hall / 6517–6519',
    mythTieIn:
      'The Chakravyuh was the legendary military labyrinth conceived in the Mahabharata war of Dwaparyuga. Houdini Heist tests your tactical intellect to decode the layers and escape the maze.',
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
    registrationFee: '₹80',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Round 1',
        mode: 'Offline',
        date: '9th Oct 2026',
        time: '11:00 AM – 1:00 PM',
        venue: 'Classroom',
        description:
          'Individual test of general awareness, aptitude, and logical/technical reasoning. 1 mark per question. Top 16 advance.',
      },
      {
        roundNumber: 2,
        title: 'Round 2',
        mode: 'Offline',
        date: '9th Oct 2026',
        time: '2:00 PM – 6:00 PM',
        venue: 'Old Reading Hall',
        description:
          '16 players randomly split into 4 teams of 4. Teams play a Surprise Round elimination bracket and social deduction finale to unmask the impostors.',
      },
    ],
    prizes: {
      first: 10000,
      second: null,
      third: null,
      totalCashPrize: '25,000',
      currency: 'INR',
      note: 'Goodies, vouchers & gift hampers included in the prize pool. Single winner cash prize: ₹10,000.',
    },
    rules: [
      'Only individual participation is allowed.',
      'Requests for team/role changes will not be entertained once assigned.',
      'No damage to college property; strict action will be taken otherwise.',
      'Organizers reserve the right to disqualify any participant violating rules or instructions.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1Y0bZ0fXJkUocIFuhmwAVQH8Z1BDnia7v/view?usp=drive_link',
    date: '9th Oct 2026',
    time: '11:00 AM – 06:00 PM',
    venue: 'Classroom / Old Reading Hall',
    mythTieIn:
      'Kalyug is marked by illusion (Maya) and deception. Mayavi tests your perception to distinguish truth from deceit in an era of shadows.',
    gitaShloka: {
      sanskrit: 'दैवी ह्येषा गुणमयी मम माया दुरत्यया।',
      transliteration: 'Daivi hy esha guna-mayi mama maya duratyaya',
      meaning:
        'This divine illusion (maya) of mine, woven from the gunas, is exceedingly difficult to see through. Captures the essence of a hidden-identity social-deception game — nothing is quite what it appears to be.',
    },
    coordinators: [
      { name: 'Jatin Patil', phone: '+91 78419 69111', email: 'jatin@aimsa.edu', avatar: jatinImg },
      { name: 'Bhumika', phone: '+91 87666 42327', email: 'bhumika@aimsa.edu', avatar: bhumikaImg },
    ],
    registrationOpen: false,
  },
  {
    id: 'pixelperfect',
    name: 'Pixel Perfect',
    formerName: null,
    yuga: 'satya',
    tagline: 'Precision in design and visual mastery',
    description:
      'An online themed photography competition where participants capture and submit a single original photograph based on a released theme within a fixed time window.',
    about:
      'An online themed photography competition where participants capture and submit a single original photograph based on a released theme within a fixed time window.',
    teamSize: 'Individual only',
    registrationFee: '₹40',
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
      first: 1500,
      second: 1500,
      third: null,
      totalCashPrize: '10,000',
      currency: 'INR',
      note: 'Goodies, vouchers & gift hampers included in the prize pool. Cash prize: ₹3,000 (2 Winners ₹1,500 each).',
      prizeList: [
        { label: 'Winner 1', amount: '₹1,500', type: 'gold' },
        { label: 'Winner 2', amount: '₹1,500', type: 'gold' },
      ],
    },
    rules: [
      'Only basic editing (brightness, contrast, colour correction, cropping) is allowed; heavy manipulation/photoshopping is not.',
      'If edited, both the original (with metadata) and edited image must be submitted.',
      'NSFW or inappropriate content is strictly prohibited; late submissions are never accepted.',
      'By submitting, participants grant organizers rights to use/reproduce/publish the image for promotion.',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1shHKOOFnlG1Oe96awwV5EqLkcLm-8CEf/view?usp=sharing',
    date: '1st Oct – 11th Oct 2026',
    time: 'Theme 9:00 AM (1st Oct) – Submissions 9:00 PM (11th Oct)',
    venue: 'Online Submission',
    mythTieIn:
      'In Satyuga, truth, symmetry, and perfection were uncompromised. Pixel Perfect celebrates meticulous visual accuracy and aesthetic purity where every pixel matters.',
    gitaShloka: {
      sanskrit: 'योगः कर्मसु कौशलम्।',
      transliteration: 'Yogah karmasu kaushalam',
      meaning:
        'Excellence in action is yoga. True mastery lies in the perfection and precision brought to every stroke of creative craftsmanship.',
    },
    coordinators: [
      { name: 'Hari', phone: '+91 94042 60399', email: 'hari@aimsa.edu', avatar: hariImg },
      { name: 'Nirbhay', phone: '+91 86689 54048', email: 'nirbhay@aimsa.edu', avatar: nirbhayImg },
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
