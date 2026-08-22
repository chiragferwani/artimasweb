import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, ExternalLink, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { EVENTS, YUGAS } from '../../data/yugas';
import ParticleField from '../../components/ParticleField/ParticleField';
import styles from './EventDetail.module.css';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = EVENTS.find((e) => e.id === id);

  if (!event) {
    return (
      <main className={styles.notFound}>
        <h2>Event not found</h2>
        <Link to="/events" className={styles.backLink}>
          ← Back to Events
        </Link>
      </main>
    );
  }

  const yuga = YUGAS[event.yuga];

  return (
    <main
      className={styles.main}
      style={
        {
          '--yuga-primary': yuga.colors.primary,
          '--yuga-accent': yuga.colors.accent,
          '--yuga-glow': yuga.colors.glow,
          '--yuga-border': yuga.colors.border,
        } as React.CSSProperties
      }
    >
      {/* Hero banner */}
      <section className={styles.hero}>
        <ParticleField
          colors={[yuga.colors.primary, yuga.colors.accent, '#ffffff20']}
          count={40}
        />
        <div className={styles.heroBg} />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.heroContent}
          >
            {/* Back button */}
            <button className={styles.backBtn} onClick={() => navigate(-1)}>
              <ArrowLeft size={16} /> Back to Events
            </button>

            {/* Yuga badge */}
            <div
              className={styles.yugaBadge}
              style={{ color: yuga.colors.primary, borderColor: `${yuga.colors.primary}30` }}
            >
              {yuga.icon} {yuga.name} · {yuga.virtue}
            </div>

            <h1 className={styles.eventTitle}>{event.name}</h1>
            <p className={styles.eventTagline}>{event.tagline}</p>

            {/* Meta grid */}
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <div>
                  <div className={styles.metaLabel}>Date</div>
                  <div className={styles.metaValue}>{event.date}</div>
                </div>
              </div>
              <div className={styles.metaItem}>
                <Clock size={16} />
                <div>
                  <div className={styles.metaLabel}>Time</div>
                  <div className={styles.metaValue}>{event.time}</div>
                </div>
              </div>
              <div className={styles.metaItem}>
                <MapPin size={16} />
                <div>
                  <div className={styles.metaLabel}>Venue</div>
                  <div className={styles.metaValue}>{event.venue}</div>
                </div>
              </div>
              <div className={styles.metaItem}>
                <Users size={16} />
                <div>
                  <div className={styles.metaLabel}>Team Size</div>
                  <div className={styles.metaValue}>{event.teamSize}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Main content */}
            <div className={styles.mainContent}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.block}>
                  <h2 className={styles.blockTitle}>About the Event</h2>
                  <p className={styles.blockText}>{event.description}</p>
                </div>

                <div className={styles.block}>
                  <h2 className={styles.blockTitle}>Rules & Format</h2>
                  <ul className={styles.rulesList}>
                    {event.rules.map((rule, i) => (
                      <li key={i} className={styles.ruleItem}>
                        <span className={styles.ruleNum}>{String(i + 1).padStart(2, '0')}</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Myth tie-in */}
                <div className={styles.mythBlock}>
                  <div className={styles.mythIcon}>{yuga.icon}</div>
                  <div>
                    <div className={styles.mythLabel}>The Mythological Connection</div>
                    <p className={styles.mythText}>{event.mythTieIn}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.aside
              className={styles.sidebar}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Registration */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Registration</h3>
                {event.registrationOpen ? (
                  <a href="#" className={styles.regBtnOpen}>
                    Register Now <ExternalLink size={14} />
                  </a>
                ) : (
                  <div className={styles.regBtnClosed}>
                    Registration Opening Soon
                  </div>
                )}
              </div>

              {/* Coordinators */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Coordinators</h3>
                {event.coordinators.map((coord, i) => (
                  <div key={i} className={styles.coordinator}>
                    <div className={styles.coordName}>{coord.name}</div>
                    <div className={styles.coordContact}>
                      <a href={`tel:${coord.phone}`} className={styles.coordLink}>
                        <Phone size={12} /> {coord.phone}
                      </a>
                      <a href={`mailto:${coord.email}`} className={styles.coordLink}>
                        <Mail size={12} /> {coord.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Yuga info */}
              <div
                className={styles.yugaSideCard}
                style={{ borderColor: `${yuga.colors.primary}30` }}
              >
                <div
                  className={styles.yugaSideName}
                  style={{ color: yuga.colors.primary }}
                >
                  {yuga.icon} {yuga.name}
                </div>
                <p className={styles.yugaSideDesc}>{yuga.description}</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
