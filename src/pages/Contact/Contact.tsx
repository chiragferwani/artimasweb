import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, Globe } from 'lucide-react';
import CtaBlock from '../../components/CtaBlock/CtaBlock';
import getCloudinaryUrl from '../../utils/cloudinary';
import styles from './Contact.module.css';

const krishnaVid = getCloudinaryUrl('src/assets/krishnacontact.mp4');
const chiranjeeviImg = getCloudinaryUrl('src/assets/chiranjeevi.png');

// Development Team Image Assets
const chiragImg = getCloudinaryUrl('src/assets/team/chiragferwani.png');
const vrushabhImg = getCloudinaryUrl('src/assets/team/vrushabh.png');
const hariImg = getCloudinaryUrl('src/assets/team/hari.png');
const nirbhayImg = getCloudinaryUrl('src/assets/team/nirbhay.png');
const meetImg = getCloudinaryUrl('src/assets/team/meetr.png');
const anayImg = getCloudinaryUrl('src/assets/team/anay.jpeg');
const maitriImg = getCloudinaryUrl('src/assets/team/maitri.jpeg');
const parthImg = getCloudinaryUrl('src/assets/team/parth.jpeg');
const rohanImg = getCloudinaryUrl('src/assets/team/rohan.jpeg');
const saviImg = getCloudinaryUrl('src/assets/team/savi.jpeg');
const siyaImg = getCloudinaryUrl('src/assets/team/siya.jpeg');
const vernitImg = getCloudinaryUrl('src/assets/team/vernit.jpeg');
const shardulImg = getCloudinaryUrl('src/assets/team/shardul.jpeg');

// Overall Coordinators Image Assets
const harshilImg = getCloudinaryUrl('src/assets/team/harshil.png');
const anushkaImg = getCloudinaryUrl('src/assets/team/anushka.png');

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

const DEV_ROW_1: TeamMember[] = [
  { id: 'dev-1', name: 'Hari', role: 'Technical Head', tag: '', img: hariImg },
  { id: 'dev-2', name: 'Vrushabh Hirap', role: 'Technical Head', tag: '', img: vrushabhImg },
  { id: 'dev-3', name: 'Chirag Ferwani', role: 'Technical Head', tag: '', img: chiragImg },
  { id: 'dev-4', name: 'Nirbhay', role: 'Technical Head', tag: '', img: nirbhayImg },
  { id: 'dev-5', name: 'Meet', role: 'Technical Head', tag: '', img: meetImg },
];

const DEV_ROW_2: TeamMember[] = [
  { id: 'dev-6', name: 'Anay', role: '', tag: '', img: anayImg },
  { id: 'dev-7', name: 'Maitri', role: '', tag: '', img: maitriImg },
  { id: 'dev-8', name: 'Parth', role: '', tag: '', img: parthImg },
  { id: 'dev-9', name: 'Rohan', role: '', tag: '', img: rohanImg },
];

const DEV_ROW_3: TeamMember[] = [
  { id: 'dev-10', name: 'Savi', role: '', tag: '', img: saviImg },
  { id: 'dev-11', name: 'Siya', role: '', tag: '', img: siyaImg },
  { id: 'dev-12', name: 'Vernit', role: '', tag: '', img: vernitImg },
  { id: 'dev-13', name: 'Shardul', role: '', tag: '', img: shardulImg },
];

const OVERALL_COORDINATORS: TeamMember[] = [
  {
    id: 'overall-1',
    name: 'Harshil Biyani',
    role: 'Overall Coordinator',
    tag: '',
    img: harshilImg,
  },
  {
    id: 'overall-2',
    name: 'Anushka Shinde',
    role: 'Overall Coordinator',
    tag: '',
    img: anushkaImg,
  },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('access_key', '054a649b-befd-4f4f-9178-3a6f0346101f');
      formData.append('from_name', 'Artimas 2026 Portal Contact');
      formData.append('subject', `Artimas Contact Inquiry: ${form.subject.toUpperCase()} - ${form.name}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm(INITIAL_FORM);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setErrorMessage('Failed to connect to the server. Please check your network and try again.');
    } finally {
      setSubmitting(false);
    }
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
            <div className={styles.breadcrumb}>Dept. of CSE (AI &amp; ML) · Reach the Council</div>
            <h1 className={styles.pageTitle}>Contact AIMSA</h1>
            <p className={styles.pageSubtitle}>
              Questions about registration, events, or collaborations?
              The Department of CSE (AI &amp; ML) and AIMSA council await your message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className="container">
          {/* Centered Krishna Feature Video & Chiranjeevi Motif */}
          <div className={styles.krishnaVideoWrap}>
            <video
              src={krishnaVid}
              autoPlay
              loop
              muted
              playsInline
              className={styles.krishnaVideo}
            />
            <img
              src={chiranjeeviImg}
              alt="Chiranjeevi"
              className={styles.chiranjeeviImg}
              draggable={false}
            />
          </div>

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

                  {errorMessage && (
                    <div className={styles.formErrorMsg}>
                      {errorMessage}
                    </div>
                  )}

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
                    href="https://aimsapccoe.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                  >
                    <Globe size={18} />
                    <span>aimsapccoe.in ↗</span>
                  </a>
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
            <span className={styles.teamEyebrow}>Dept. of CSE (AI &amp; ML) · Council of Artimas</span>
            <h2 className={styles.teamTitle}>Meet the Team</h2>
            <p className={styles.teamSubtitle}>
              The visionaries and orchestrators behind the cosmic saga of Artimas 26–27.
            </p>
          </motion.div>

          {/* Development Team */}
          <div className={styles.teamGroup}>
            <div className={styles.teamGroupHeader}>
              <h3 className={styles.teamGroupTitle}>Development Team</h3>
            </div>
            
            {/* Row 1: 5 Members (Hari, Vrushabh, Chirag, Nirbhay, Meet) */}
            <div className={styles.devGridRow5}>
              {DEV_ROW_1.map((member, i) => (
                <motion.div
                  key={member.id}
                  className={styles.profileBox}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.avatarCircleWrap}>
                    <div className={styles.avatarCircle}>
                      <img src={member.img} alt={member.name} className={styles.avatarImg} />
                    </div>
                  </div>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  {member.role && <div className={styles.memberRole}>{member.role}</div>}
                </motion.div>
              ))}
            </div>

            {/* Row 2: 4 Members */}
            <div className={styles.devGridRow4}>
              {DEV_ROW_2.map((member, i) => (
                <motion.div
                  key={member.id}
                  className={styles.profileBox}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.avatarCircleWrap}>
                    <div className={styles.avatarCircle}>
                      <img src={member.img} alt={member.name} className={styles.avatarImg} />
                    </div>
                  </div>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  {member.role && <div className={styles.memberRole}>{member.role}</div>}
                </motion.div>
              ))}
            </div>

            {/* Row 3: 4 Members */}
            <div className={styles.devGridRow4}>
              {DEV_ROW_3.map((member, i) => (
                <motion.div
                  key={member.id}
                  className={styles.profileBox}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.avatarCircleWrap}>
                    <div className={styles.avatarCircle}>
                      <img src={member.img} alt={member.name} className={styles.avatarImg} />
                    </div>
                  </div>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  {member.role && <div className={styles.memberRole}>{member.role}</div>}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Overall Coordinators Section */}
          <div className={styles.teamGroup}>
            <div className={styles.teamGroupHeader}>
              <h3 className={styles.teamGroupTitle}>Overall Coordinators</h3>
            </div>
            <div className={styles.overallGrid}>
              {OVERALL_COORDINATORS.map((member, i) => (
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
        </div>
      </section>

      {/* Cta Block */}
      <CtaBlock
        primaryButton={{ label: 'See all events', to: '/events' }}
        secondaryButton={{ label: 'Our Sponsors', to: '/sponsors' }}
      />
    </main>
  );
};

export default Contact;
