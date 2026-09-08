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
    name: 'Hackmatrix',
    formerName: null,
    yuga: 'satya',
    tagline: 'Matrix of pure code and truth',
    description:
      'A 30-hour hackathon where teams build a working, AI/ML-integrated solution from scratch across two evaluation rounds. Round 1 is an online proof-of-concept submission judged on GitHub and demo quality; Round 2 is an offline overnight build culminating in a live prototype and pitch.',
    about:
      'A 30-hour hackathon where teams build a working, AI/ML-integrated solution from scratch across two evaluation rounds. Round 1 is an online proof-of-concept submission judged on GitHub and demo quality; Round 2 is an offline overnight build culminating in a live prototype and pitch.',
    teamSize: '3–4 members',
    registrationFee: '₹200 / Team',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Proof of Concept',
        mode: 'Online',
        date: 'Oct 9, 2026 (Online Window)',
        time: 'Problem Statement Release 11:00 AM, Submission Window 2:00 PM - 11:00 AM',
        venue: 'Online / GFG PCCOE Hackathon Portal',
        description:
          'Teams must submit a functional prototype, GitHub repo link, and brief architecture video. Top teams advance to the overnight build.',
      },
      {
        roundNumber: 2,
        title: 'Grand Finale & Build Sprint',
        mode: 'Offline',
        date: 'Oct 10–11, 2026',
        time: '11:00 AM (Oct 10) – 05:00 PM (Oct 11)',
        venue: 'Main Auditorium / Innovation Lab',
        description:
          '30-hour on-campus development sprint with periodic mentoring, surprise checkpoint reviews, and live final jury pitching.',
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
      'Teams must consist of 3 to 4 members',
      'All code must be written during the hackathon period',
      'Use of pre-built AI models / open-source libraries is permitted with disclosure',
      'Decision of the jury panel is final and binding',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1NkJAkI0yjIhUqrhZYbFfIhXRTXMJZIcc/view?usp=drive_link',
    date: 'Oct 9–11, 2026',
    time: '11:00 AM (Oct 9) – 05:00 PM (Oct 11)',
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
    name: 'Antaryami',
    formerName: 'Prompt Relay',
    yuga: 'satya',
    tagline: 'Channel the inner voice of intelligence',
    description:
      'A team relay event testing memory, communication, and prompt-engineering skill. One player observes a reference image, relays what they remember verbally to a teammate, and a final teammate crafts the AI prompt to regenerate it as closely as possible to the original.',
    about:
      'A team relay event testing memory, communication, and prompt-engineering skill. One player observes a reference image, relays what they remember verbally to a teammate, and a final teammate crafts the AI prompt to regenerate it as closely as possible to the original.',
    teamSize: '3 members (mandatory)',
    registrationFee: '₹100 / Team',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Prompt Upgrade Challenge',
        mode: 'Online',
        date: 'Oct 9, 2026',
        time: 'Submission 12:00 PM – 11:59 PM',
        venue: 'Online Submission',
        description:
          'Teams decode five pirate-themed riddles to reveal hidden keywords, integrate them into a weak base SDG-related prompt, and submit an enhanced prompt plus AI-generated image. Scored out of 100: Riddle Interpretation Accuracy (20), Prompt Quality (30), Image Quality (30), Creativity & Storytelling (20). Top 10 teams qualify for Round 2.',
      },
      {
        roundNumber: 2,
        title: 'Prompt Relay Challenge',
        mode: 'Offline',
        date: 'Oct 10, 2026',
        time: 'Reporting 9:00 AM; Relay 10:00 AM – 11:00 AM; Results 12:00 PM',
        venue: 'Labs 6517, 6518, 6519',
        description:
          'Three sequential roles: Player 1 (Observer) views the image and writes a base prompt; Player 2 (Interpreter) refines it based on verbal relay only; Player 3 (Finalizer) writes and submits the final prompt and generates the image. Scored out of 100: Accuracy to Original Image (75, based on 15 key elements x 5 pts), Prompt Quality (25).',
      },
      {
        roundNumber: 3,
        title: 'Prompt Duel: Decode, Bid, Generate',
        mode: 'Offline',
        date: 'Oct 10, 2026',
        time: 'Afternoon Duel Session',
        venue: 'Labs 6517, 6518, 6519',
        description:
          "Top 6 teams face off in head-to-head duels: Decode a puzzle, Observe a reference image for 10-15 seconds, then Prompt from memory. Includes a strategic 'Prompt Auction' bidding phase where teams spend Bid Credits on advantages (extra time, extra look, retry, hint) or disadvantages for opponents (buzzword injection, time penalty, word limit, constraint card, no revision). Weighted scoring: Puzzle Solving 20%, Prompt Quality 25%, Visual Similarity 35%, Creativity 10%, Strategic Bidding 10%.",
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
      'Teams of exactly 3 members (mandatory)',
      'Strict role division: Observer, Interpreter, Finalizer',
      'No notes, cameras, or visual aids allowed for the Observer during relay',
      'Prompt auction credits must be strategically managed in Round 3',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1iQYh2uXFR0Mh9P05klQr1_NSLWVdj4Gw/view?usp=drive_link',
    date: 'Oct 9–10, 2026',
    time: '02:30 PM – 05:30 PM',
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
    name: 'Setu Nirman',
    formerName: 'Brandathon',
    yuga: 'treta',
    tagline: 'Bridge ideas into iconic brands',
    description:
      'A three-round branding and web-development competition. Teams progress from a design aptitude quiz, to researching and pitching a brand concept via video, to a 12-hour offline build where they construct a full brand identity and product/web presence, ending in a Shark-Tank-style final pitch.',
    about:
      'A three-round branding and web-development competition. Teams progress from a design aptitude quiz, to researching and pitching a brand concept via video, to a 12-hour offline build where they construct a full brand identity and product/web presence, ending in a Shark-Tank-style final pitch.',
    teamSize: '2–4 members',
    registrationFee: '₹100 / Team',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Online Design Aptitude Quiz',
        mode: 'Online',
        date: 'Oct 9, 2026',
        time: '5:00 PM – 6:00 PM',
        venue: 'Online Quiz Portal',
        description:
          'A quiz testing design knowledge, creativity, visual thinking, branding, and logical reasoning across topics like design principles, colour theory & typography, branding & advertising, and visual communication. One submission per team; selected teams qualify for Round 2.',
      },
      {
        roundNumber: 2,
        title: 'Domain Selection & Video Presentation',
        mode: 'Online',
        date: 'Oct 10, 2026',
        time: 'Domain Selection 9:00 AM; Video Submission 6:00 PM; Shortlist 9:00 AM (Oct 11)',
        venue: 'Online Submission',
        description:
          'Shortlisted teams pick one of six domains (Luxury & Premium, Casual/Street, Food & Beverage, Technology & Gadgets, Healthcare & Wellness, Tourism & Travel), conduct research, and submit a short video presenting their brand idea. Evaluated on research quality, problem/opportunity identification, consumer understanding, brand strategy, creativity, and presentation quality. Shortlisting is domain-wise.',
      },
      {
        roundNumber: 3,
        title: 'Offline Brand Building Challenge & Final Pitch',
        mode: 'Offline',
        date: 'Oct 11, 2026',
        time: 'Reporting 7:00 AM; Challenge 8:00 AM – 4:00 PM; Final Pitch 4:30 PM – 7:30 PM (12-hour total)',
        venue: 'Old Reading Hall, PCCOE',
        description:
          'Teams turn their Round 2 brand idea into a complete product/service brand: logo & visual identity, colour palette & typography, packaging, 10-12 brand deliverables, an ad campaign, marketing/launch strategy, pricing, and a growth plan. Concludes with a Shark-Tank-style pitch to judges. Evaluated on market/consumer insight, brand strategy, creativity, product/service quality, visual identity/execution, marketing strategy, business potential, and final pitch/Q&A.',
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
      'Teams of 2–4 members',
      'Round 1 quiz submission is 1 per team',
      'Deliverables must include brand story, logo design, 10-12 assets, and marketing pitch',
      'Final pitch follows a Shark-Tank presentation format with live Q&A',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1AUBz0NDEqAadvhzAbrPBsmw5_FOWGk_M/view?usp=drive_link',
    date: 'Oct 9–11, 2026',
    time: '09:30 AM – 12:30 PM',
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
      'A machine-learning competition built around a Kaggle-hosted dataset. Round 1 has teams build and submit predictive models scored on a live leaderboard; Round 2 is an on-site event with evolving datasets and surprise task changes to test adaptability under pressure.',
    about:
      'A machine-learning competition built around a Kaggle-hosted dataset. Round 1 has teams build and submit predictive models scored on a live leaderboard; Round 2 is an on-site event with evolving datasets and surprise task changes to test adaptability under pressure.',
    teamSize: '1–2 members',
    registrationFee: '₹100 / Participant',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'Kaggle Model Submission',
        mode: 'Online',
        date: 'Oct 9, 2026',
        time: 'Submission window: 6:00 PM (Start) – 6:00 PM (End)',
        venue: 'Kaggle Platform',
        description:
          'Participants develop ML models on the provided Train.csv and submit predictions for Test.csv via Kaggle, following the SampleSubmission.csv format. Scored automatically via accuracy-based metrics on a public leaderboard. Must submit a Submission.csv and a code file (.py/.ipynb). Max 3 submissions per team per day. Top 15 teams qualify for Round 2.',
      },
      {
        roundNumber: 2,
        title: 'Live Adaptive Challenge',
        mode: 'Offline',
        date: 'Oct 10, 2026',
        time: 'Reporting 9:00 AM; Datathon 10:00 AM – 4:45 PM; Ends 5:00 PM',
        venue: 'Labs 6517, 6518, 6519',
        description:
          'Teams tackle live, evolving datasets and tasks (surprise feature additions, missing data, scope changes) with all code written on-site; no pre-built models allowed. Internet access is restricted to approved APIs. Final code, predictions, and a methodology PDF/PPT are required. Judged on Adaptability and Technical Rigor, among other hidden multidimensional metrics.',
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
      'Teams of 1–2 members',
      'Max 3 Kaggle submissions per team per day in Round 1',
      'All Round 2 code must be written on-site; no pre-trained weights without authorization',
      'Reproducible code notebooks and methodology slides mandatory',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/16Hffq-Jn3Q5RhPzedLmux5Km6E0u2q1U/view?usp=drive_link',
    date: 'Oct 9–10, 2026',
    time: '05:00 PM – 08:00 PM',
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
      'A two-round cybersecurity and AI challenge. Round 1 tests the ability to extract hidden information from LLMs via prompt jailbreaking; Round 2 is a full offline Capture-The-Flag spanning ten cybersecurity domains.',
    about:
      'A two-round cybersecurity and AI challenge. Round 1 tests the ability to extract hidden information from LLMs via prompt jailbreaking; Round 2 is a full offline Capture-The-Flag spanning ten cybersecurity domains.',
    teamSize: '2–4 members',
    registrationFee: '₹200 / Team',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'LLM Jailbreak',
        mode: 'Online',
        date: 'Oct 10, 2026',
        time: '10:00 AM – 6:00 PM',
        venue: 'Online CTF Arena',
        description:
          'Participants are given access to three LLMs, each built on a RAG setup with a hidden key embedded in their reference data. Teams craft prompts to bypass restrictions and extract the key. No prior LLM/AI experience required. Scoring based on speed and accuracy. Top 15 teams (by live leaderboard) qualify for Round 2.',
      },
      {
        roundNumber: 2,
        title: 'Capture The Flag',
        mode: 'Offline',
        date: 'Oct 11, 2026',
        time: 'Reporting 9:00 AM; CTF 10:00 AM – 4:45 PM; Ends 5:00 PM',
        venue: 'Seminar Hall, 5th Floor Mech Building, PCCOE',
        description:
          'The main CTF spans 10 domains, each with 2-3 sub-questions solved sequentially to unlock the next. Challenges span logic, decoding, hidden-information discovery, file/website analysis and other cybersecurity concepts, increasing in difficulty. Final score determines ranking.',
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
      'Jeopardy-style CTF across 10 security domains',
      'Automated scoring platform with live scoreboard',
      'Strict prohibition of attacks against competition infrastructure or fellow participants',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1K8EYvn9FTv9G3cB4R0GuIkzH08GuyG98/view?usp=drive_link',
    date: 'Oct 10–11, 2026',
    time: '01:30 PM – 04:30 PM',
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
    name: 'Chakravyuh',
    formerName: 'Houdini Heist',
    yuga: 'kali',
    tagline: 'Escape the labyrinth of illusions',
    description:
      'A three-round event moving from an aptitude test to a Chausar-inspired checkpoint mystery, and finally a live one-hour escape room. Tests general knowledge of mythology and scripture, logical reasoning, clue-based riddle solving, and physical/team problem-solving under time pressure.',
    about:
      'A three-round event moving from an aptitude test to a Chausar-inspired checkpoint mystery, and finally a live one-hour escape room. Tests general knowledge of mythology and scripture, logical reasoning, clue-based riddle solving, and physical/team problem-solving under time pressure.',
    teamSize: '3 members (exactly)',
    registrationFee: '₹200 / Team',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Aptitude Round',
        mode: 'Offline',
        date: 'Oct 10, 2026',
        time: '10:00 AM – 12:00 PM',
        venue: 'Classroom, Block A',
        description:
          'Tests knowledge of Indian mythology, Vedas, scriptures, general awareness, aptitude, and logical reasoning. Each question worth 1 mark; ties broken by submission time. Top 12 teams (out of all participating) proceed to Round 2.',
      },
      {
        roundNumber: 2,
        title: 'Chausar-Inspired Checkpoint Challenge',
        mode: 'Offline',
        date: 'Oct 10, 2026',
        time: '2:00 PM – 6:00 PM',
        venue: 'Old Reading Hall',
        description:
          '12 teams split into 3 groups of 4, competing simultaneously in a checkpoint-based challenge inspired by the game of Chausar. Each team rotates through 4 checkpoints, solving a riddle on the spot at each and memorizing (not writing down) a clue. All 4 collected clues are stitched into a single AI image/video-generation prompt, scored against a reference output. One team per group of 4 advances - 3 teams total proceed to the final.',
      },
      {
        roundNumber: 3,
        title: 'Escape Room',
        mode: 'Offline',
        date: 'Oct 11, 2026',
        time: '10:00 AM – 3:00 PM (1-hour duration per room)',
        venue: 'Rooms 6517, 6518, 6519',
        description:
          'The final 3 teams each play in separate rooms; the first team to escape within the 1-hour limit wins. No cash prize is awarded if no team escapes in time. No damage to college property is permitted.',
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
      'Teams of exactly 3 members (mandatory)',
      'Multiple elimination levels across Aptitude, Checkpoint Mystery, and Escape Room',
      'Strict 1-hour time limit for the final Escape Room',
      'Physical and logic puzzle solving under pressure; no damage to college property permitted',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1-Dydkzz8A4Yp2-CPewqPymNqRA400aGu/view?usp=drive_link',
    date: 'Oct 10–11, 2026',
    time: '10:00 AM – 02:00 PM',
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
    name: 'Mayavi',
    formerName: 'Among Us',
    yuga: 'kali',
    tagline: 'Unmask the impostor in the dark',
    description:
      'A solo-participation event bringing the social-deduction game Among Us to real life. Starts with an aptitude round, narrows into a word-guessing \'Surprise Round\' in pairs, and ends with a live in-person Impostor-vs-Sheriff round.',
    about:
      'A solo-participation event bringing the social-deduction game Among Us to real life. Starts with an aptitude round, narrows into a word-guessing \'Surprise Round\' in pairs, and ends with a live in-person Impostor-vs-Sheriff round.',
    teamSize: 'Individual participation only',
    registrationFee: '₹50 / Participant',
    numberOfRounds: 3,
    rounds: [
      {
        roundNumber: 1,
        title: 'Aptitude Round',
        mode: 'Offline',
        date: 'Oct 9, 2026',
        time: '11:00 AM – 1:00 PM',
        venue: 'Classroom, Block A',
        description:
          'Tests general knowledge, awareness, aptitude, and logical reasoning; each question worth 1 mark, ties broken by submission time. Top 16 participants advance.',
      },
      {
        roundNumber: 2,
        title: 'Surprise Round',
        mode: 'Offline',
        date: 'Oct 9, 2026',
        time: '2:00 PM – 6:00 PM',
        venue: 'Old Reading Hall',
        description:
          "Top 16 players are randomly paired into 8 two-person teams by organizers and compete in elimination matchups of a word-guessing 'Surprise Round' game; the team that identifies all their words first, or has the most correct guesses at time-out, wins. Ties go to a tie-breaker round. Top 4 teams (8 players) proceed to the final round.",
      },
      {
        roundNumber: 3,
        title: 'Live Among Us',
        mode: 'Offline',
        date: 'Oct 11, 2026',
        time: '3:00 PM – 4:00 PM (1 hour)',
        venue: 'Main Stage / Open Air Theatre',
        description:
          'The 8 finalists play individually with roles (Impostor/Sheriff) randomly assigned. Impostors win by eliminating all Sheriffs; Sheriffs win by voting out all Impostors or completing all assigned tasks. No damage to college property permitted.',
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
      'Solo participation in assigned game lobbies',
      'Secret roles (Impostor / Sheriff) assigned per game',
      'Tasks and emergency discussions strictly timed',
      'Points awarded for survival, deductions, and successful bluffs',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1vHn59xGK2iUGwnBQu6L-mn7-HB_LCnLF/view?usp=drive_link',
    date: 'Oct 9–11, 2026',
    time: '03:00 PM – 07:00 PM',
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
      'A design challenge testing UI/UX creativity, visual balance, and interactive prototyping. Designers battle to craft immaculate digital interfaces and compelling user journeys under pressure.',
    about:
      'A design challenge testing UI/UX creativity, visual balance, and interactive prototyping. Designers battle to craft immaculate digital interfaces and compelling user journeys under pressure.',
    teamSize: '1–2 members',
    registrationFee: '₹100 / Team',
    numberOfRounds: 2,
    rounds: [
      {
        roundNumber: 1,
        title: 'UI/UX Redesign & Wireframing',
        mode: 'Offline',
        date: 'Oct 10, 2026',
        time: '10:00 AM – 01:00 PM',
        venue: 'Computer Lab 3, Block D',
        description:
          'Participants receive a problem statement and must design low-fidelity wireframes and user journeys in Figma. Judged on usability, structure, and design rationale.',
      },
      {
        roundNumber: 2,
        title: 'High-Fidelity Prototype & Design Pitch',
        mode: 'Offline',
        date: 'Oct 10, 2026',
        time: '02:00 PM – 05:00 PM',
        venue: 'Computer Lab 3, Block D',
        description:
          'Qualifying teams turn their wireframes into interactive, responsive, pixel-perfect high-fidelity designs and pitch their design decisions to a jury.',
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
      'Teams of 1–2 members',
      'Design assets must be created during the event window using Figma',
      'Submissions evaluated on visual hierarchy, usability, creativity, and prototype flow',
      'Final pitch required for shortlisted candidates in Round 2',
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1VtDYxMApD2vleAYA2E34yJwV_L9ohRQq/view?usp=drive_link',
    date: 'Oct 10, 2026',
    time: '10:00 AM – 05:00 PM',
    venue: 'Computer Lab 3, Block D',
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
