# Artimas 26–27 — Design System Documentation

> **Theme Concept**: The convergence of ancient Indian Vedic / Hindu mythological iconography (The Four Yugas) with modern obsidian dark glassmorphism and clean, structured typography.

---

## 1. Design Philosophy & Architectural Overview

Artimas 26-27 weaves the narrative of cosmic time—spanning **Satyuga**, **Tretayuga**, **Dwaparyuga**, and **Kalyuga**—into a contemporary digital interface.

- **Dynamic Theme Engine**: Native Light / Dark mode switching via `:root[data-theme="dark"]` (default) and `:root[data-theme="light"]`.
- **Stadium Geometry**: Signature pill and stadium-shaped containers (`border-radius: 40px` for hero frames, `border-radius: 999px` for pills and buttons).
- **Glassmorphism & Depth**: Multi-layered backdrop blurs (`backdrop-filter: blur(16px)`), subtle translucent borders, and ambient colored glows.
- **Sacred Geometry & Devanagari Typography**: Seamless dual-rotating SVG wheels, Devanagari Sanskrit Shloka text paths, parabolic curved loops, and Lottie vector animations.

---

## 2. Typography & Font System

### 2.1 Font Families

| Font Family | Application | Usage |
| :--- | :--- | :--- |
| **`Sofia Sans`** | Primary UI & Display Font | Headings, Body Text, Buttons, Badges, Navigation |
| **`Sofia Sans`**, **`Noto Sans Devanagari`** | Sacred Script & Sanskrit | Sacred Shlokas, Yuga Sanskrit Names (`सत्ययुग`, `त्रेतायुग`, etc.), Om (ॐ) Emblem |
| `Arial`, `sans-serif` | System Fallback | Fallback when external web fonts fail to load |

**Google Fonts Import URL**:
```html
<link href="https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,400;0,450;0,500;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
```

### 2.2 Type Hierarchy & Scale

| Level | Size | Weight | Line Height | Letter Spacing | Color Variable | Example / Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | `64px` *(48px tab, 36px mob)* | 500 / 900 | `64px` | `-1.28px` | `var(--color-ink)` | Hero Section Title (`ARTIMAS`) |
| **Section H2** | `36px` *(28px mob)* | 500 | `44px` | `-0.72px` | `var(--color-ink)` | Section Headings (`The Arena Awaits`) |
| **Card H3** | `24px` *(20px mob)* | 500 | `28.8px` | `-0.48px` | `var(--color-ink)` | Component & Event Titles |
| **Subtitle H4**| `14px` | 700 | `18.2px` | `normal` | `var(--color-ink)` | Sub-labels, Metadata titles |
| **Body (P)** | `16px` | 400 / 450 | `22.4px` | `normal` | `var(--color-ink)` | Standard paragraphs, descriptions |
| **Eyebrow** | `14px` | 700 | `14px` | `0.56px` | `var(--color-slate)` | Uppercase section tag with orange bullet (`• 8 EVENTS · 4 ERAS`) |
| **Ghost Text** | `clamp(72px, 10vw, 128px)` | 500 | `1.0` | `-2.5px` | `var(--ghost-color)` | Background watermark behind hero and titles |

---

## 3. Color Palette & Token System

### 3.1 CSS Custom Properties (Theme Switcher Tokens)

#### Dark Mode (Default Theme — Obsidian & Glass)

```css
:root,
:root[data-theme="dark"] {
  /* Surfaces */
  --color-canvas:   #0A090F; /* Deep obsidian dark page canvas */
  --color-lifted:   #13111C; /* Raised section background */
  --color-card:     #1B1827; /* Dark card surface */
  --color-bone:     #242033; /* Accent container background */
  --color-stadium:  #14121C; /* Stadium frame background */

  /* Text & Ink */
  --color-ink:      #F3F0EE; /* Warm off-white primary text */
  --color-charcoal: #E2DFDA; /* Bright off-white */
  --color-slate:    #9E9A94; /* Muted secondary text */
  --color-granite:  #B8B4AE; /* Medium gray */
  --color-dust:     #524E48; /* Whisper / label text */

  /* Brand Accents */
  --color-orange:        #FF5500;
  --color-orange-light:  #FF7733;
  --color-clay:          #D95A1E;

  /* Borders & Dividers */
  --color-border:        rgba(255, 255, 255, 0.12);
  --color-border-subtle: rgba(255, 255, 255, 0.06);

  /* Buttons */
  --btn-primary-bg:    #F3F0EE;
  --btn-primary-text:  #0A090F;
  --btn-primary-hover: #FFFFFF;
  --btn-secondary-bg:    rgba(255, 255, 255, 0.08);
  --btn-secondary-text:  #F3F0EE;
  --btn-secondary-border:rgba(255, 255, 255, 0.18);

  /* Navigation & Footer */
  --nav-bg:        rgba(22, 19, 32, 0.85);
  --nav-border:    rgba(255, 255, 255, 0.12);
  --footer-bg:     #050409;
  --ghost-color:   rgba(255, 255, 255, 0.03);
}
```

#### Light Mode (Putty Cream & Obsidian Ink)

```css
:root[data-theme="light"] {
  /* Surfaces */
  --color-canvas:   #F3F0EE; /* Warm putty cream canvas */
  --color-lifted:   #FCFBFA; /* Lifted cream */
  --color-card:     #FFFFFF; /* Pure white card surface */
  --color-bone:     #F4F4F4; /* Cool-gray background */
  --color-stadium:  #141413; /* Stadium frame stays deep warm-black */

  /* Text & Ink */
  --color-ink:      #141413; /* Warm near-black primary text */
  --color-charcoal: #262627;
  --color-slate:    #696969; /* Slate gray secondary text */
  --color-granite:  #555555;
  --color-dust:     #A09C96;

  /* Brand Accents */
  --color-orange:        #CF4500;
  --color-orange-light:  #F37338;
  --color-clay:          #9A3A0A;

  /* Borders & Dividers */
  --color-border:        rgba(20, 20, 19, 0.12);
  --color-border-subtle: rgba(20, 20, 19, 0.06);

  /* Buttons */
  --btn-primary-bg:    #141413;
  --btn-primary-text:  #F3F0EE;
  --btn-primary-hover: #262627;
  --btn-secondary-bg:    #FFFFFF;
  --btn-secondary-text:  #141413;
  --btn-secondary-border:#141413;

  /* Navigation & Footer */
  --nav-bg:        #FFFFFF;
  --nav-border:    rgba(20, 20, 19, 0.08);
  --footer-bg:     #141413;
  --ghost-color:   #E8E2DA;
}
```

---

### 3.2 The Four Yugas (Cosmic Eras) Color Palettes

Each cosmic era has a custom color scheme, gradient, symbol, and virtue tie-in defined in `src/data/yugas.ts`:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. SATYUGA (Satya) — Golden Age of Truth & Purity                           │
├──────────────┬────────────────────────┬─────────────────────────────────────┤
│ Symbol       │ ☀️ Sun / Golden Ray    │ Virtue: Truth · Purity · Dharma     │
│ Primary Color│ #F5D76E (Light: #9A7A10)│ Secondary: #FFFFFF                  │
│ Accent Color │ #E8B84B                │ Border: #F5D76E40 | Glow: #F5D76E60 │
│ Gradient     │ linear-gradient(135deg, #FFFDE0 0%, #F5D76E 50%, #E8B84B 100%)│
└──────────────┴────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 2. TRETAYUGA (Treta) — Age of Duty & Sacrifice                              │
├──────────────┬────────────────────────┬─────────────────────────────────────┤
│ Symbol       │ 🏹 Bow & Arrow         │ Virtue: Duty · Sacrifice · Valor    │
│ Primary Color│ #62C462 (Light: #2E6B2E)│ Secondary: #D4A843                  │
│ Accent Color │ #4E8B3F                │ Border: #7CB87C40 | Glow: #7CB87C60 │
│ Gradient     │ linear-gradient(135deg, #E8F5E0 0%, #7CB87C 50%, #4E8B3F 100%)│
└──────────────┴────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 3. DWAPARYUG (Dvapara) — Age of Strategy & Duality                          │
├──────────────┬────────────────────────┬─────────────────────────────────────┤
│ Symbol       │ ⚔️ Crossed Swords / Wheel│ Virtue: Strategy · Duality · Wisdom │
│ Primary Color│ #7B9EE8 (Light: #2B4A8C)│ Secondary: #9B59B6                  │
│ Accent Color │ #4A6DB5                │ Border: #6B8DD640 | Glow: #6B8DD660 │
│ Gradient     │ linear-gradient(135deg, #E8ECF5 0%, #6B8DD6 50%, #4A2C7A 100%)│
└──────────────┴────────────────────────┴─────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 4. KALYUGA (Kali) — Age of Chaos & Rebirth                                  │
├──────────────┬────────────────────────┬─────────────────────────────────────┤
│ Symbol       │ 🔥 Sacred Flame        │ Virtue: Chaos · Resilience · Awakening│
│ Primary Color│ #EE5252 (Light: #8B2020)│ Secondary: #2C2C2C                  │
│ Accent Color │ #C0392B                │ Border: #E74C3C40 | Glow: #E74C3C60 │
│ Gradient     │ linear-gradient(135deg, #3A0A0A 0%, #E74C3C 50%, #1A0000 100%)│
└──────────────┴────────────────────────┴─────────────────────────────────────┘
```

---

## 4. Spacing, Radius & Elevation Scale

### 4.1 Spacing Scale

| CSS Token | Pixel Value | Typical Usage |
| :--- | :--- | :--- |
| `--space-4` | `4px` | Fine gaps, icon-text alignment |
| `--space-8` | `8px` | Inner button padding, badge gaps |
| `--space-16` | `16px` | Card internal gaps, list item padding |
| `--space-24` | `24px` | Card padding, mobile section gaps |
| `--space-32` | `32px` | Desktop card padding, grid gaps |
| `--space-48` | `48px` | Container horizontal padding, section margins |
| `--space-64` | `64px` | Major section vertical padding |
| `--space-96` | `96px` | Feature block margins |
| `--space-128`| `128px`| Page header hero vertical spacing |

---

### 4.2 Border Radius Scale

```css
--r-sm:      4px;    /* Subtle rounded edges (tags, small inputs) */
--r-btn:     20px;   /* Standard pill buttons */
--r-consent: 24px;   /* Consent modals & toast banners */
--r-hero:    40px;   /* Signature Stadium Frame containers */
--r-full:    999px;  /* Full pill capsules & nav bar */
--r-circle:  50%;    /* Circular avatars & icon hubs */
```

---

### 4.3 Elevation & Shadows

- **Nav Shadow (`--shadow-nav`)**: `rgba(0,0,0,0.5) 0px 8px 32px 0px` (Dark) / `rgba(0,0,0,0.04) 0px 4px 24px 0px` (Light)
- **Card Shadow (`--shadow-card`)**: `rgba(0,0,0,0.4) 0px 20px 48px 0px` (Dark) / `rgba(0,0,0,0.08) 0px 24px 48px 0px` (Light)
- **Feature Elevation (`--shadow-feature`)**: `rgba(0,0,0,0.6) 0px 40px 80px 0px` (Dark) / `rgba(0,0,0,0.25) 0px 70px 110px 0px` (Light)

---

## 5. Signature Component Patterns

### 5.1 Floating Navbar (`Navbar.module.css`)
- **Structure**: Centered floating capsule (`max-width: 1100px`) fixed at the top of the viewport.
- **Glass Effect**: `background: var(--nav-bg)`, `backdrop-filter: blur(16px)`, `border: 1px solid var(--nav-border)`.
- **Features**: AIMSA/Artimas logo mark, desktop pill links, interactive theme switcher toggle (`themeToggle`), primary CTA button (`ctaBtn`), and a full-screen mobile backdrop overlay (`mobileOverlay`).

### 5.2 SwastikChakra Engine (`SwastikChakra.tsx`)
- **Dual SVG Rotation Architecture**:
  1. **Outer Ring**: Rotates counter-clockwise (`spinAnticlockwise` 40s linear infinite) with complete 360° Gayatri & Vedic Shlokas rendered on an SVG `<textPath>`.
  2. **Inner Swastik Wheel**: Rotates clockwise (`spinClockwise` 60s linear infinite) containing:
     - Metallic gold gradient Swastika geometry (`#FFF5BA` -> `#E8B84B` -> `#F5D76E` -> `#9E761E`).
     - 4 Quadrant Yuga Badges (Top-Right: Satyuga ☀️, Bottom-Right: Tretayuga 🏹, Bottom-Left: Dwaparyug ⚔️, Top-Left: Kalyuga 🔥).
     - Central Om (ॐ) Emblem hub.

### 5.3 Curved Loop Banner (`CurvedLoop.tsx`)
- Interactive SVG marquee flowing along parabolic paths (`curveAmount: 160` / `-160`), framing the top and bottom of the Swastik Chakra stage.

### 5.4 Chakravyuh Map (`ChakravyuhMap.tsx`)
- Concentric ring interactive flag map set over a blurred battle background (`pvsk.png` + `chakra.png`).
- 8 Event Flag Anchors with Lottie vector flag animations (`redflag.json`, `orangeflag.json`), spring entrance physics, Yuga-specific glow indicators, and hover tooltip cards.

### 5.5 Countdown Timer (`CountdownTimer.tsx`)
- 4-column flip-card component displaying remaining Days, Hours, Minutes, and Seconds until the festival launch date (`2027-02-15T09:00:00`).

---

## 6. Motion Design & Animation System

- **CSS Transitions**: Standard transition timing `--transition: 250ms cubic-bezier(0.4, 0, 0.2, 1)`.
- **Framer Motion Integration**:
  - Page Fade & Lift: `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}`
  - Spring Flag Pop-ins: `type: 'spring', stiffness: 260, damping: 20`
  - Scroll-triggered Viewport Animations: `whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`
- **Continuous CSS Keyframe Animations**:
  - `spinClockwise`: `0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }`
  - `spinAnticlockwise`: `0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); }`
  - `marqueeTrack`: Seamless left-to-right infinite club logo scrolling.

---

## 7. Asset & Iconography Guidelines

- **Icon Set**: `lucide-react` (Clock, MapPin, Users, ArrowRight, ArrowLeft, Mail, Phone, ExternalLink, Sun, Moon, Share2, Play).
- **Club Logos**: AIMSA, GeeksforGeeks, IEEE CIS, AAAI, IEEE CS, INNS.
- **Mythological Character Artwork**:
  - **Lord Ram**: Rendered in hero and events section backgrounds.
  - **Panchamukhi Hanuman**: Front-layer illustration in events header.
  - **Ravana**: Ten-headed king illustration overlay.
  - **Lord Krishna**: Video animation background (`krishnaanimation.mp4`) & Legacy chronicle illustration (`krishna.png`).
  - **Narasimha**: Calendar page header backdrop illustration (`narshima.png`).
