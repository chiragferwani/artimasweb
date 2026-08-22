import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Share2, Play, Send, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' };

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
                  <a href="mailto:aimsa@college.edu" className={styles.contactItem}>
                    <div className={styles.contactIcon}><Mail size={18} /></div>
                    <div>
                      <div className={styles.contactLabel}>Email</div>
                      <div className={styles.contactValue}>aimsa@college.edu</div>
                    </div>
                  </a>
                  <a href="tel:+91XXXXXXXXXX" className={styles.contactItem}>
                    <div className={styles.contactIcon}><Phone size={18} /></div>
                    <div>
                      <div className={styles.contactLabel}>Phone</div>
                      <div className={styles.contactValue}>+91 XXXXXXXXXX</div>
                    </div>
                  </a>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}><MapPin size={18} /></div>
                    <div>
                      <div className={styles.contactLabel}>Location</div>
                      <div className={styles.contactValue}>
                        College Campus, City — PIN XXXXXX
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
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                  >
                    <Share2 size={18} />
                    <span>@aimsa_official</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                  >
                    <Play size={18} />
                    <span>AIMSA Club</span>
                  </a>
                </div>
              </div>

              {/* Key coordinators */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Event Coordinators</h3>
                <p className={styles.coordNote}>
                  For event-specific queries, contact the coordinator listed on each event&apos;s
                  individual page.
                </p>
                <a href="/events" className={styles.coordLink}>
                  Browse Events →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
