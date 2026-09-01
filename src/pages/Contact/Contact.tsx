import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Contact.module.css';

const durgaImg = getCloudinaryUrl('src/assets/durga.png');
const lotusImg = getCloudinaryUrl('src/assets/lotus.png');

// Senior Team Image Assets
const harshilImg = getCloudinaryUrl('src/assets/team/harshil.png');
const vrushabhImg = getCloudinaryUrl('src/assets/team/vrushabh.png');
const chiragImg = getCloudinaryUrl('src/assets/team/chiragferwani.png');
const anushkaImg = getCloudinaryUrl('src/assets/team/anushka.png');

// Junior Team Image Assets
const anayImg = getCloudinaryUrl('src/assets/team/anay.jpeg');
const maitriImg = getCloudinaryUrl('src/assets/team/maitri.jpeg');
const parthImg = getCloudinaryUrl('src/assets/team/parth.jpeg');
const rohanImg = getCloudinaryUrl('src/assets/team/rohan.jpeg');
const saviImg = getCloudinaryUrl('src/assets/team/savi.jpeg');
const siyaImg = getCloudinaryUrl('src/assets/team/siya.jpeg');
const vernitImg = getCloudinaryUrl('src/assets/team/vernit.jpeg');
const shardulImg = getCloudinaryUrl('src/assets/team/shardul.jpeg');

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' };

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tag: string;
  img: string;
}

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const SENIOR_TEAM: TeamMember[] = [
  {
    id: 'sen-1',
    name: 'Harshil Biyani',
    role: 'Overall Organizer',
    tag: '',
    img: harshilImg,
  },
  {
    id: 'sen-2',
    name: 'Vrushabh Hirap',
    role: 'Technical Head',
    tag: '',
    img: vrushabhImg,
  },
  {
    id: 'sen-3',
    name: 'Chirag Ferwani',
    role: 'Technical Head',
    tag: '',
    img: chiragImg,
  },
  {
    id: 'sen-4',
    name: 'Anushka Shinde',
    role: 'Overall Organizer',
    tag: '',
    img: anushkaImg,
  },
];

const JUNIOR_TEAM: TeamMember[] = [
  { id: 'jun-1', name: 'Anay', role: '', tag: '', img: anayImg },
  { id: 'jun-2', name: 'Maitri', role: '', tag: '', img: maitriImg },
  { id: 'jun-3', name: 'Parth', role: '', tag: '', img: parthImg },
  { id: 'jun-4', name: 'Rohan', role: '', tag: '', img: rohanImg },
  { id: 'jun-5', name: 'Savi', role: '', tag: '', img: saviImg },
  { id: 'jun-6', name: 'Siya', role: '', tag: '', img: siyaImg },
  { id: 'jun-7', name: 'Vernit', role: '', tag: '', img: vernitImg },
  { id: 'jun-8', name: 'Shardul', role: '', tag: '', img: shardulImg },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: replace with actual API call when backend is ready
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
    setForm(INITIAL_FORM);
  };

  return (
    <main className={styles.main}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg} />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.headerContent}
          >
            <div className={styles.breadcrumb}>Reach the Council</div>
            <h1 className={styles.pageTitle}>Contact AIMSA</h1>
            <p className={styles.pageSubtitle}>
              Questions about registration, events, or collaborations?
              The AIMSA council awaits your message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className="container">
          {/* Centered Durga Illustration with Rotating Ring */}
          <motion.div
            className={styles.durgaImgWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Rotating Lotus Background */}
            <div className={styles.durgaRingWrap}>
              <img
                src={lotusImg}
                alt=""
                className={styles.durgaRingImg}
                draggable={false}
              />
            </div>

            <img
              src={durgaImg}
              alt="Durga Illustration"
              className={styles.durgaImg}
            />
          </motion.div>

          <div className={styles.contentGrid}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✦</div>
                  <h3 className={styles.successTitle}>Message Received</h3>
                  <p className={styles.successText}>
                    Your message has been sent to the AIMSA council. We shall respond
                    within the cosmic cycle (2–3 business days).
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h2 className={styles.formTitle}>Send a Message</h2>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={styles.input}
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.input}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="subject">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className={styles.select}
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="registration">Event Registration</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="media">Media & Press</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={styles.textarea}
                      placeholder="Write your message here..."
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={submitting}
                  >
                    {submitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              className={styles.infoCol}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Direct contact */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Direct Contact</h3>
                <div className={styles.contactList}>
                  <a href="mailto:pccoeaimsa2022@gmail.com" className={styles.contactItem}>
                    <div className={styles.contactIcon}><Mail size={18} /></div>
                    <div>
                      <div className={styles.contactLabel}>Email</div>
                      <div className={styles.contactValue}>pccoeaimsa2022@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:+919422001054" className={styles.contactItem}>
                    <div className={styles.contactIcon}><Phone size={18} /></div>
                    <div>
                      <div className={styles.contactLabel}>Phone</div>
                      <div className={styles.contactValue}>+91 94220 01054</div>
                    </div>
                  </a>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}><MapPin size={18} /></div>
                    <div>
                      <div className={styles.contactLabel}>Location</div>
                      <div className={styles.contactValue}>
                        PCCOE Campus, Department of CSE (AI & ML), Nigdi, Pune
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Follow AIMSA</h3>
                <div className={styles.socialList}>
                  <a
                    href="https://www.linkedin.com/company/pccoe-s-aimsa/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                  >
                    <LinkedinIcon size={18} />
                    <span>PCCOE&apos;s AIMSA (LinkedIn) ↗</span>
                  </a>
                  <a
                    href="https://www.instagram.com/pccoe_aimsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                  >
                    <InstagramIcon size={18} />
                    <span>@pccoe_aimsa (Instagram) ↗</span>
                  </a>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <motion.div
            className={styles.teamHeader}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className={styles.teamEyebrow}>The Council of Artimas</span>
            <h2 className={styles.teamTitle}>Meet the Team</h2>
            <p className={styles.teamSubtitle}>
              The visionaries and orchestrators behind the cosmic saga of Artimas 26–27.
            </p>
          </motion.div>

          {/* Senior Team (2 People) */}
          <div className={styles.teamGroup}>
            <div className={styles.teamGroupHeader}>
              <h3 className={styles.teamGroupTitle}>Senior Team</h3>
            </div>
            <div className={styles.seniorGrid}>
              {SENIOR_TEAM.map((member, i) => (
                <motion.div
                  key={member.id}
                  className={`${styles.profileBox} ${styles.seniorCard}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.avatarCircleWrap}>
                    <div className={styles.avatarCircleSenior}>
                      <img src={member.img} alt={member.name} className={styles.avatarImg} />
                    </div>
                  </div>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <div className={styles.memberRole}>{member.role}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Junior Team (8 People) */}
          <div className={styles.teamGroup}>
            <div className={styles.teamGroupHeader}>
              <h3 className={styles.teamGroupTitle}>Junior Team</h3>
            </div>
            <div className={styles.juniorGrid}>
              {JUNIOR_TEAM.map((member, i) => (
                <motion.div
                  key={member.id}
                  className={styles.profileBox}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.avatarCircleWrap}>
                    <div className={styles.avatarCircleJunior}>
                      <img src={member.img} alt={member.name} className={styles.avatarImg} />
                    </div>
                  </div>
                  <h4 className={styles.memberName}>{member.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cta Block */}
      <CtaBlock
        primaryButton={{ label: 'See all events', to: '/events' }}
        secondaryButton={{ label: 'Our Celestial Partners', to: '/sponsors' }}
      />
    </main>
  );
};

export default Contact;
