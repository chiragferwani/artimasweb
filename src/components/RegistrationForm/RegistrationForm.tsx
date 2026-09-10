import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Building,
  User,
  Mail,
  Phone,
  Hash,
  BookOpen,
  Plus,
  Trash2,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  QrCode,
  ArrowLeft,
  X,
  ExternalLink,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { Lottie } from 'lottie-react';
import type { Event } from '../../data/yugas';
import { uploadPaymentScreenshot } from '../../utils/paymentUpload';
import { submitRegistrationToGoogleSheets, type TeamMemberData } from '../../utils/googleSheets';
import { sendRegistrationConfirmationEmail } from '../../utils/resendEmail';
import getCloudinaryUrl from '../../utils/cloudinary';
import qrCodeImg from '../../data/qrCode';
import tickAnimationData, { tickAnimationUrl } from '../../data/tickAnimation';
import styles from './RegistrationForm.module.css';

const promptrelayName = getCloudinaryUrl('src/assets/eventnames/promptrelay.png');
const houdiniheistName = getCloudinaryUrl('src/assets/eventnames/houdiniheist.png');
const datathonName = getCloudinaryUrl('src/assets/eventnames/datathon.png');
const hackmatrixName = getCloudinaryUrl('src/assets/eventnames/hackmatrix.png');
const kurukshetraName = getCloudinaryUrl('src/assets/eventnames/kurukshetra.png');
const amongusName = getCloudinaryUrl('src/assets/eventnames/amongus.png');
const brandathonName = getCloudinaryUrl('src/assets/eventnames/brandathon.png');
const pixelperfectName = getCloudinaryUrl('src/assets/eventnames/pixelperfect.png');
const dronevedhaName = getCloudinaryUrl('src/assets/eventnames/dronevedha.png');

const EVENT_NAME_IMAGES: Record<string, string> = {
  promptrelay: promptrelayName,
  antaryami: promptrelayName,
  chakravyuh: houdiniheistName,
  datathon: datathonName,
  hackmatrix: hackmatrixName,
  kurukshetra: kurukshetraName,
  mayavi: amongusName,
  brandathon: brandathonName,
  'setu-nirman': brandathonName,
  pixelperfect: pixelperfectName,
  'pixel-perfect': pixelperfectName,
  dronevedha: dronevedhaName,
  'drone-vedha': dronevedhaName,
};

interface RegistrationFormProps {
  event: Event;
  onCancel: () => void;
  yugaColor?: string;
}

const BRANCH_OPTIONS = [
  'CSE (AI & ML)',
  'Computer Engineering',
  'Information Technology',
  'Electronics & Telecommunication (E&TC)',
  'Mechanical Engineering',
  'Civil Engineering',
  'Applied Science & Humanities (First Year)',
  'MCA',
  'Other',
];

function getTeamSizeLimits(teamSizeStr: string) {
  const s = teamSizeStr.toLowerCase();
  if (s.includes('individual') || s.includes('solo')) {
    return { min: 1, max: 1, isFixed: true, label: 'Individual (1 Participant)' };
  }
  if (s.includes('exactly 3')) {
    return { min: 3, max: 3, isFixed: true, label: 'Exactly 3 Members' };
  }
  if (s.includes('3-4') || s.includes('3–4') || s.includes('3 to 4')) {
    return { min: 3, max: 4, isFixed: false, label: '3 to 4 Members' };
  }
  if (s.includes('2-4') || s.includes('2–4') || s.includes('2 to 4')) {
    return { min: 2, max: 4, isFixed: false, label: '2 to 4 Members' };
  }
  if (s.includes('1-2') || s.includes('1–2') || s.includes('1 to 2')) {
    return { min: 1, max: 2, isFixed: false, label: '1 to 2 Members' };
  }
  return { min: 1, max: 4, isFixed: false, label: 'Team Registration' };
}

// ── Validation Helpers ──
const DUMMY_EMAIL_PREFIXES = new Set([
  'test', 'testing', 'abc', 'abcd', 'dummy', 'fake', 'admin', 'asdf',
  'user', 'student', 'none', 'null', 'sample', 'temp', 'xyz', 'pccoe',
  'a', 'b', 'c', '123', '1234', 'aaa', '111', 'artimas', 'demo'
]);

const DUMMY_PHONES = new Set([
  '9999999999', '8888888888', '7777777777', '6666666666',
  '9876543210', '1234567890', '9123456789', '9000000000',
  '9898989898', '9191919191', '9090909090', '0000000000'
]);

const DUMMY_PRNS = new Set([
  '12345678', '123456789', '1234567890', '87654321', '00000000',
  '11111111', '22222222', '33333333', '99999999', 'TESTPRN',
  'DUMMYPRN', 'ABCDEFGH', 'PRN12345', 'ASDFGHJK', 'QWERTYUI'
]);

function validatePccoeEmail(email: string): string | null {
  const clean = email.trim().toLowerCase();
  if (!clean) return 'Official PCCOE email is required.';
  
  if (!clean.endsWith('@pccoepune.org')) {
    return 'Must be an official email ending with @pccoepune.org';
  }

  const prefix = clean.split('@')[0];
  if (prefix.length < 3) {
    return 'Invalid email prefix. Please enter your valid college email ID.';
  }

  if (DUMMY_EMAIL_PREFIXES.has(prefix) || /^(.)\1+$/.test(prefix)) {
    return 'Please enter a genuine PCCOE student email ID.';
  }

  if (!/^[a-z0-9]+[a-z0-9._-]*$/.test(prefix)) {
    return 'Invalid characters in email ID.';
  }

  return null;
}

function validateGeneralEmail(email: string): string | null {
  const clean = email.trim();
  if (!clean) return 'Email address is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
    return 'Please enter a valid email address.';
  }
  return null;
}

function validatePrn(prn: string): string | null {
  const clean = prn.trim().toUpperCase();
  if (!clean) return 'PRN number is required for PCCOE students.';
  
  if (clean.length < 7 || clean.length > 12) {
    return 'PRN must be between 7 and 12 characters.';
  }

  if (!/^[0-9A-Z]+$/.test(clean)) {
    return 'PRN must contain only numbers and letters.';
  }

  if (DUMMY_PRNS.has(clean) || /^(.)\1+$/.test(clean)) {
    return 'Please enter a valid, authentic PRN number.';
  }

  return null;
}

function validatePhone(phone: string): string | null {
  const cleaned = phone.replace(/[\s\-()+]/g, '');
  const normalized = cleaned.startsWith('91') && cleaned.length === 12
    ? cleaned.slice(2)
    : cleaned.startsWith('0') && cleaned.length === 11
    ? cleaned.slice(1)
    : cleaned;

  if (!normalized) return 'Contact number is required.';
  
  if (!/^[6-9]\d{9}$/.test(normalized)) {
    return 'Enter a valid 10-digit Indian phone number starting with 6-9.';
  }

  if (DUMMY_PHONES.has(normalized) || /^(.)\1{7,}/.test(normalized)) {
    return 'Please enter a valid, active contact number.';
  }

  return null;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  event,
  onCancel,
  yugaColor = '#F5D76E',
}) => {
  const limits = getTeamSizeLimits(event.teamSize);

  // Form State
  const [teamName, setTeamName] = useState('');
  const [collegeType, setCollegeType] = useState<'PCCOE' | 'Other'>('PCCOE');
  const [customCollege, setCustomCollege] = useState('');

  // Initial Members Array
  const [members, setMembers] = useState<TeamMemberData[]>(() => {
    const initialCount = limits.min;
    return Array.from({ length: initialCount }, () => ({
      name: '',
      email: '',
      phone: '',
      prn: '',
      branch: 'CSE (AI & ML)',
    }));
  });

  // Payment Screenshot State
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission & Status State
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [registrationResultId, setRegistrationResultId] = useState<string>('');

  const isPCCOE = collegeType === 'PCCOE';
  const effectiveCollegeName = isPCCOE ? 'PCCoE (Pimpri Chinchwad College of Engineering)' : customCollege;

  // Clear single field error when user edits
  const clearFieldError = (key: string) => {
    if (fieldErrors[key]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  // Member Management
  const handleAddMember = () => {
    if (members.length < limits.max) {
      setMembers((prev) => [
        ...prev,
        {
          name: '',
          email: '',
          phone: '',
          prn: '',
          branch: 'CSE (AI & ML)',
        },
      ]);
    }
  };

  const handleRemoveMember = (idx: number) => {
    if (members.length > limits.min) {
      setMembers((prev) => prev.filter((_, i) => i !== idx));
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[`member_${idx}_name`];
        delete next[`member_${idx}_email`];
        delete next[`member_${idx}_phone`];
        delete next[`member_${idx}_prn`];
        delete next[`member_${idx}_branch`];
        return next;
      });
    }
  };

  const handleMemberChange = (idx: number, field: keyof TeamMemberData, value: string) => {
    clearFieldError(`member_${idx}_${field}`);
    setMembers((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [field]: value };
      return updated;
    });
  };

  // Screenshot Selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        setFieldErrors((prev) => ({ ...prev, screenshot: 'Please select a valid image file (PNG, JPG, JPEG, WEBP).' }));
        return;
      }
      setScreenshotFile(file);
      setScreenshotPreview(URL.createObjectURL(file));
      clearFieldError('screenshot');
      setFormError(null);
    }
  };

  const handleRemoveFile = () => {
    setScreenshotFile(null);
    if (screenshotPreview) {
      URL.revokeObjectURL(screenshotPreview);
    }
    setScreenshotPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Comprehensive Form Validation
  const validateForm = (): Record<string, string> => {
    const errors: Record<string, string> = {};

    // 1. Team / Participant Name
    if (!teamName.trim()) {
      errors.teamName = limits.max === 1 ? 'Participant name is required.' : 'Team name is required.';
    } else if (teamName.trim().length < 2) {
      errors.teamName = 'Name must be at least 2 characters.';
    }

    // 2. College Name (if Other)
    if (!isPCCOE && !customCollege.trim()) {
      errors.customCollege = 'Please enter your college/institute name.';
    }

    // Sets to track duplicates across team members
    const seenEmails = new Map<string, number>();
    const seenPhones = new Map<string, number>();
    const seenPrns = new Map<string, number>();

    // 3. Member validations
    members.forEach((m, idx) => {
      const label = limits.max === 1 ? 'Participant' : `Member ${idx + 1}`;

      // Name
      if (!m.name.trim()) {
        errors[`member_${idx}_name`] = `Full name is required for ${label}.`;
      } else if (m.name.trim().length < 2) {
        errors[`member_${idx}_name`] = `Enter a valid name (at least 2 characters).`;
      }

      // Email
      const emailVal = m.email.trim().toLowerCase();
      if (!emailVal) {
        errors[`member_${idx}_email`] = `Email address is required for ${label}.`;
      } else if (isPCCOE) {
        const pccoeErr = validatePccoeEmail(emailVal);
        if (pccoeErr) errors[`member_${idx}_email`] = pccoeErr;
      } else {
        const generalErr = validateGeneralEmail(emailVal);
        if (generalErr) errors[`member_${idx}_email`] = generalErr;
      }

      // Check duplicate email
      if (emailVal && !errors[`member_${idx}_email`]) {
        if (seenEmails.has(emailVal)) {
          const prevIdx = seenEmails.get(emailVal)!;
          errors[`member_${idx}_email`] = `Duplicate email! Same as Member ${prevIdx + 1}.`;
        } else {
          seenEmails.set(emailVal, idx);
        }
      }

      // Phone
      const phoneErr = validatePhone(m.phone);
      if (phoneErr) {
        errors[`member_${idx}_phone`] = phoneErr;
      } else {
        const cleanPhone = m.phone.replace(/[\s\-()+]/g, '').slice(-10);
        if (seenPhones.has(cleanPhone)) {
          const prevIdx = seenPhones.get(cleanPhone)!;
          errors[`member_${idx}_phone`] = `Duplicate contact number! Same as Member ${prevIdx + 1}.`;
        } else {
          seenPhones.set(cleanPhone, idx);
        }
      }

      // PCCOE Specific (PRN & Branch)
      if (isPCCOE) {
        const prnVal = (m.prn || '').trim().toUpperCase();
        const prnErr = validatePrn(prnVal);
        if (prnErr) {
          errors[`member_${idx}_prn`] = prnErr;
        } else if (seenPrns.has(prnVal)) {
          const prevIdx = seenPrns.get(prnVal)!;
          errors[`member_${idx}_prn`] = `Duplicate PRN! Same as Member ${prevIdx + 1}.`;
        } else {
          seenPrns.set(prnVal, idx);
        }

        if (!m.branch || !m.branch.trim()) {
          errors[`member_${idx}_branch`] = `Please select branch for ${label}.`;
        }
      }
    });

    // 4. Payment Screenshot (if non-PCCOE)
    if (!isPCCOE && !screenshotFile) {
      errors.screenshot = 'Payment transaction screenshot is required.';
    }

    return errors;
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFormError('Please resolve the highlighted errors below before proceeding.');
      
      // Auto-scroll to the first invalid field
      const firstErrorKey = Object.keys(errors)[0];
      setTimeout(() => {
        const errEl = document.getElementById(`field-${firstErrorKey}`);
        if (errEl) {
          errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const inputEl = errEl.querySelector<HTMLInputElement | HTMLSelectElement>('input, select');
          if (inputEl) inputEl.focus();
        } else {
          const banner = document.getElementById('form-error-banner');
          if (banner) banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
      return;
    }

    setSubmitting(true);

    try {
      let paymentScreenshotUrl = '';

      // 1. Upload payment screenshot to Cloudinary if non-PCCOE
      if (!isPCCOE && screenshotFile) {
        paymentScreenshotUrl = await uploadPaymentScreenshot(screenshotFile);
      }

      // 2. Submit to Google Sheets
      const response = await submitRegistrationToGoogleSheets({
        eventId: event.id,
        eventName: event.name,
        teamName: teamName.trim(),
        collegeType,
        collegeName: effectiveCollegeName.trim(),
        teamSize: members.length,
        members: members.map((m) => ({
          name: m.name.trim(),
          email: m.email.trim(),
          phone: m.phone.trim(),
          prn: isPCCOE ? (m.prn?.trim().toUpperCase() || '') : '',
          branch: isPCCOE ? (m.branch?.trim() || '') : '',
        })),
        paymentStatus: isPCCOE ? 'Free (PCCOE)' : 'Paid',
        paymentScreenshotUrl,
      });

      // 3. Dispatch confirmation emails via Resend (async, non-blocking)
      const primaryMember = members[0];
      if (primaryMember?.email) {
        sendRegistrationConfirmationEmail({
          toEmail: primaryMember.email.trim(),
          recipientName: primaryMember.name.trim() || teamName.trim(),
          eventName: event.name,
          registrationId: response.registrationId,
          teamName: teamName.trim(),
          collegeName: effectiveCollegeName.trim(),
          teamSize: members.length,
          paymentStatus: isPCCOE ? 'Free (PCCOE Student)' : 'Paid (Verified via Screenshot)',
        }).catch((emailErr) => {
          console.warn('Confirmation email dispatch warning:', emailErr);
        });
      }

      setRegistrationResultId(response.registrationId);
      setSuccessModalOpen(true);
    } catch (err: unknown) {
      console.error('Registration failed:', err);
      setFormError(
        err instanceof Error ? err.message : 'Registration failed. Please check your internet connection and try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.registrationContainer}>
      {/* Form Header */}
      <div className={styles.formHeader}>
        <button
          type="button"
          onClick={onCancel}
          className={styles.backToDetailsBtn}
          title="Back to Event Details"
        >
          <ArrowLeft size={16} />
          <span>Event Details</span>
        </button>
        <div className={styles.formHeaderTitleWrap}>
          <span className={styles.formBadge}>Registration Form</span>
          {EVENT_NAME_IMAGES[event.id] ? (
            <div className={styles.formEventTitleRow}>
              <span className={styles.formRegisterText}>Register for</span>
              <img
                src={EVENT_NAME_IMAGES[event.id]}
                alt={event.name}
                className={styles.formEventNameImg}
              />
            </div>
          ) : (
            <h2 className={styles.formTitle}>
              Register for <span style={{ color: yugaColor }}>{event.name}</span>
            </h2>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.formBody}>
        {/* Error Banner */}
        {formError && (
          <div id="form-error-banner" className={styles.errorBanner}>
            <AlertCircle size={20} className={styles.errorIcon} />
            <span>{formError}</span>
          </div>
        )}

        {/* ── SECTION 1: Team & College Info (Flipped About Block equivalent) ── */}
        <div className={styles.formSectionCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap}>
              <Building size={20} />
            </div>
            <div>
              <h3 className={styles.sectionTitle}>1. Team &amp; College Information</h3>
              <p className={styles.sectionSubtitle}>Specify your team identity and institutional affiliation</p>
            </div>
          </div>

          <div className={styles.fieldsGrid}>
            {/* Team Name */}
            <div id="field-teamName" className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="team-name">
                {limits.max === 1 ? 'Participant Name / Alias' : 'Team Name'}{' '}
                <span className={styles.requiredMark}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <Users size={16} className={styles.inputIcon} />
                <input
                  id="team-name"
                  type="text"
                  placeholder={limits.max === 1 ? 'Enter your name/alias' : 'Enter a unique team name'}
                  value={teamName}
                  onChange={(e) => {
                    setTeamName(e.target.value);
                    clearFieldError('teamName');
                  }}
                  className={`${styles.textInput} ${fieldErrors.teamName ? styles.inputError : ''}`}
                  required
                />
              </div>
              {fieldErrors.teamName && (
                <div className={styles.fieldErrorText}>
                  <AlertCircle size={13} />
                  <span>{fieldErrors.teamName}</span>
                </div>
              )}
            </div>

            {/* College Dropdown */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="college-type">
                College Affiliation <span className={styles.requiredMark}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <Building size={16} className={styles.inputIcon} />
                <select
                  id="college-type"
                  value={collegeType}
                  onChange={(e) => {
                    const val = e.target.value as 'PCCOE' | 'Other';
                    setCollegeType(val);
                    if (val === 'PCCOE') setCustomCollege('');
                    clearFieldError('customCollege');
                  }}
                  className={styles.selectInput}
                >
                  <option value="PCCOE">PCCoE (Pimpri Chinchwad College of Engineering)</option>
                  <option value="Other">Other College / External Institute</option>
                </select>
                <ChevronDown size={16} className={styles.selectArrow} />
              </div>
            </div>

            {/* Custom College Name (if Other) */}
            {!isPCCOE && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                id="field-customCollege"
                className={`${styles.fieldGroup} ${styles.fullWidthField}`}
              >
                <label className={styles.fieldLabel} htmlFor="custom-college">
                  Enter Your College / Institute Name <span className={styles.requiredMark}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <Building size={16} className={styles.inputIcon} />
                  <input
                    id="custom-college"
                    type="text"
                    placeholder="e.g. COEP, PICT, MIT WPU, VIIT, DY Patil, etc."
                    value={customCollege}
                    onChange={(e) => {
                      setCustomCollege(e.target.value);
                      clearFieldError('customCollege');
                    }}
                    className={`${styles.textInput} ${fieldErrors.customCollege ? styles.inputError : ''}`}
                    required={!isPCCOE}
                  />
                </div>
                {fieldErrors.customCollege && (
                  <div className={styles.fieldErrorText}>
                    <AlertCircle size={13} />
                    <span>{fieldErrors.customCollege}</span>
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Pricing Banner Indicator */}
          <div
            className={`${styles.feeStatusBanner} ${
              isPCCOE ? styles.feeStatusFree : styles.feeStatusPaid
            }`}
          >
            {isPCCOE ? (
              <>
                <Sparkles size={18} className={styles.feeStatusIcon} />
                <div>
                  <strong>PCCOE Student Benefit:</strong> Registration for this event is 100% <strong>FREE</strong> for all PCCOE students.
                </div>
              </>
            ) : (
              <>
                <QrCode size={18} className={styles.feeStatusIcon} />
                <div>
                  <strong>External Participant Fee:</strong> Registration fee is{' '}
                  <strong>{event.registrationFee || '₹100 per participant'}</strong> (for outside PCCOE students). Payment QR &amp; verification screenshot required below.
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── SECTION 2: Team Members Information (Flipped Details Block equivalent) ── */}
        <div className={styles.formSectionCard}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIconWrap}>
                <User size={20} />
              </div>
              <div>
                <h3 className={styles.sectionTitle}>2. Member Details</h3>
                <p className={styles.sectionSubtitle}>
                  {limits.label} · Provide contact &amp; academic records for each member
                </p>
              </div>
            </div>

            {/* Dynamic Add Member Button if range allowed */}
            {!limits.isFixed && members.length < limits.max && (
              <button
                type="button"
                onClick={handleAddMember}
                className={styles.addMemberBtn}
              >
                <Plus size={16} />
                <span>Add Member ({members.length}/{limits.max})</span>
              </button>
            )}
          </div>

          <div className={styles.membersList}>
            {members.map((member, idx) => {
              const isLeader = idx === 0;
              const memberTitle = limits.max === 1
                ? 'Participant Details'
                : isLeader
                ? 'Team Leader (Member 1)'
                : `Team Member ${idx + 1}`;

              const nameErr = fieldErrors[`member_${idx}_name`];
              const emailErr = fieldErrors[`member_${idx}_email`];
              const phoneErr = fieldErrors[`member_${idx}_phone`];
              const prnErr = fieldErrors[`member_${idx}_prn`];
              const branchErr = fieldErrors[`member_${idx}_branch`];

              return (
                <div key={idx} className={styles.memberCard}>
                  <div className={styles.memberCardHeader}>
                    <div className={styles.memberCardTitle}>
                      <span className={styles.memberNumBadge}>0{idx + 1}</span>
                      <span>{memberTitle}</span>
                    </div>

                    {!limits.isFixed && members.length > limits.min && !isLeader && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(idx)}
                        className={styles.removeMemberBtn}
                        title="Remove member"
                      >
                        <Trash2 size={15} />
                        <span>Remove</span>
                      </button>
                    )}
                  </div>

                  <div className={styles.memberFieldsGrid}>
                    {/* Full Name */}
                    <div id={`field-member_${idx}_name`} className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>
                        Full Name <span className={styles.requiredMark}>*</span>
                      </label>
                      <div className={styles.inputWrapper}>
                        <User size={16} className={styles.inputIcon} />
                        <input
                          type="text"
                          placeholder="e.g. Aarav Sharma"
                          value={member.name}
                          onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                          className={`${styles.textInput} ${nameErr ? styles.inputError : ''}`}
                          required
                        />
                      </div>
                      {nameErr && (
                        <div className={styles.fieldErrorText}>
                          <AlertCircle size={13} />
                          <span>{nameErr}</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div id={`field-member_${idx}_email`} className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>
                        {isPCCOE ? 'PCCOE Email ID' : 'Email Address'}{' '}
                        <span className={styles.requiredMark}>*</span>
                      </label>
                      <div className={styles.inputWrapper}>
                        <Mail size={16} className={styles.inputIcon} />
                        <input
                          type="email"
                          placeholder={isPCCOE ? 'e.g. yourname.prn@pccoepune.org' : 'e.g. aarav.sharma@example.com'}
                          value={member.email}
                          onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                          className={`${styles.textInput} ${emailErr ? styles.inputError : ''}`}
                          required
                        />
                      </div>
                      {emailErr ? (
                        <div className={styles.fieldErrorText}>
                          <AlertCircle size={13} />
                          <span>{emailErr}</span>
                        </div>
                      ) : isPCCOE ? (
                        <span style={{ fontSize: '11px', color: '#9E9A94', marginTop: '4px', display: 'block' }}>
                          Must be official college email ending with @pccoepune.org
                        </span>
                      ) : null}
                    </div>

                    {/* Contact Number */}
                    <div id={`field-member_${idx}_phone`} className={styles.fieldGroup}>
                      <label className={styles.fieldLabel}>
                        Contact Number <span className={styles.requiredMark}>*</span>
                      </label>
                      <div className={styles.inputWrapper}>
                        <Phone size={16} className={styles.inputIcon} />
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={member.phone}
                          onChange={(e) => handleMemberChange(idx, 'phone', e.target.value)}
                          className={`${styles.textInput} ${phoneErr ? styles.inputError : ''}`}
                          required
                        />
                      </div>
                      {phoneErr && (
                        <div className={styles.fieldErrorText}>
                          <AlertCircle size={13} />
                          <span>{phoneErr}</span>
                        </div>
                      )}
                    </div>

                    {/* PCCOE-Specific Fields: PRN & Branch */}
                    {isPCCOE && (
                      <>
                        <div id={`field-member_${idx}_prn`} className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>
                            PRN Number <span className={styles.requiredMark}>*</span>
                          </label>
                          <div className={styles.inputWrapper}>
                            <Hash size={16} className={styles.inputIcon} />
                            <input
                              type="text"
                              placeholder="e.g. 122B1B123"
                              value={member.prn || ''}
                              onChange={(e) => handleMemberChange(idx, 'prn', e.target.value.toUpperCase())}
                              className={`${styles.textInput} ${prnErr ? styles.inputError : ''}`}
                              required={isPCCOE}
                            />
                          </div>
                          {prnErr && (
                            <div className={styles.fieldErrorText}>
                              <AlertCircle size={13} />
                              <span>{prnErr}</span>
                            </div>
                          )}
                        </div>

                        <div id={`field-member_${idx}_branch`} className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>
                            Branch / Department <span className={styles.requiredMark}>*</span>
                          </label>
                          <div className={styles.selectWrapper}>
                            <BookOpen size={16} className={styles.inputIcon} />
                            <select
                              value={member.branch || 'CSE (AI & ML)'}
                              onChange={(e) => handleMemberChange(idx, 'branch', e.target.value)}
                              className={`${styles.selectInput} ${branchErr ? styles.inputError : ''}`}
                              required={isPCCOE}
                            >
                              {BRANCH_OPTIONS.map((branch) => (
                                <option key={branch} value={branch}>
                                  {branch}
                                </option>
                              ))}
                            </select>
                            <ChevronDown size={16} className={styles.selectArrow} />
                          </div>
                          {branchErr && (
                            <div className={styles.fieldErrorText}>
                              <AlertCircle size={13} />
                              <span>{branchErr}</span>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action buttons inside Section 2 when PCCOE */}
          {isPCCOE && (
            <div className={styles.cardFooter}>
              <button
                type="button"
                onClick={onCancel}
                disabled={submitting}
                className={styles.cancelBtn}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className={styles.submitBtn}
              >
                {submitting ? (
                  <span className={styles.submittingWrap}>
                    <span className={styles.submitSpinner} />
                    <span>completing registration..</span>
                  </span>
                ) : (
                  <span>Submit Registration</span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* ── SECTION 3: Payment Section (Only for Outside PCCOE) ── */}
        {!isPCCOE && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.formSectionCard}
          >
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIconWrap}>
                <QrCode size={20} />
              </div>
              <div>
                <h3 className={styles.sectionTitle}>3. Payment &amp; Verification</h3>
                <p className={styles.sectionSubtitle}>Scan the official UPI QR Code and attach transaction screenshot</p>
              </div>
            </div>

            <div className={styles.paymentGrid}>
              {/* QR Code Container */}
              <div className={styles.qrCodeBox}>
                <div className={styles.qrHeader}>
                  <span>Scan to Pay</span>
                  <span className={styles.qrFeeBadge}>
                    {event.id === 'datathon'
                      ? members.length === 2
                        ? '₹150 (2 Members)'
                        : '₹100 (1 Member)'
                      : event.registrationFee || '₹100'}
                  </span>
                </div>
                <div className={styles.qrImageWrap}>
                  <img
                    src={qrCodeImg}
                    alt="Artimas Registration Payment QR Code"
                    className={styles.qrImage}
                  />
                </div>
                <div className={styles.qrFooter}>
                  <span>UPI Payment Acceptor · AIMSA PCCOE</span>
                </div>
              </div>

              {/* Upload Screenshot Area */}
              <div id="field-screenshot" className={styles.uploadAreaContainer}>
                <label className={styles.uploadLabel}>
                  Upload Payment Screenshot <span className={styles.requiredMark}>*</span>
                </label>
                <p className={styles.uploadHelperText}>
                  Please ensure the transaction reference/UTR number and amount paid are clearly visible in the screenshot.
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className={styles.hiddenFileInput}
                  id="payment-screenshot"
                />

                {!screenshotPreview ? (
                  <div
                    className={`${styles.dropzone} ${fieldErrors.screenshot ? styles.inputError : ''}`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className={styles.dropzoneIconWrap}>
                      <UploadCloud size={28} />
                    </div>
                    <div className={styles.dropzoneText}>
                      <strong>Click to upload</strong> or drag &amp; drop screenshot
                    </div>
                    <div className={styles.dropzoneFormats}>PNG, JPG, JPEG, WEBP (Max 10MB)</div>
                  </div>
                ) : (
                  <div className={styles.previewContainer}>
                    <div className={styles.previewImageWrap}>
                      <img
                        src={screenshotPreview}
                        alt="Payment Screenshot Preview"
                        className={styles.previewImage}
                      />
                    </div>
                    <div className={styles.previewDetails}>
                      <div className={styles.previewFileName}>
                        <CheckCircle2 size={16} className={styles.successCheckIcon} />
                        <span>{screenshotFile?.name}</span>
                      </div>
                      <div className={styles.previewFileSize}>
                        {screenshotFile && (screenshotFile.size / 1024).toFixed(1)} KB
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className={styles.removeFileBtn}
                      >
                        <Trash2 size={14} /> Remove / Replace
                      </button>
                    </div>
                  </div>
                )}
                {fieldErrors.screenshot && (
                  <div className={styles.fieldErrorText}>
                    <AlertCircle size={13} />
                    <span>{fieldErrors.screenshot}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons inside Section 3 when outside PCCOE */}
            <div className={styles.cardFooter}>
              <button
                type="button"
                onClick={onCancel}
                disabled={submitting}
                className={styles.cancelBtn}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className={styles.submitBtn}
              >
                {submitting ? (
                  <span className={styles.submittingWrap}>
                    <span className={styles.submitSpinner} />
                    <span>completing registration..</span>
                  </span>
                ) : (
                  <span>Submit Registration</span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </form>

      {/* ── SUCCESS MODAL POPUP WITH TICK ANIMATION ── */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {successModalOpen && (
              <div className={styles.modalOverlay}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.successModalCard}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSuccessModalOpen(false);
                      onCancel();
                    }}
                    className={styles.modalCloseBtn}
                    title="Close"
                  >
                    <X size={18} />
                  </button>

                  {/* Lottie Tick Animation */}
                  <div className={styles.lottieWrap}>
                    <Lottie
                      src={tickAnimationUrl || tickAnimationData}
                      loop={false}
                      autoplay={true}
                      className={styles.lottieTick}
                    />
                  </div>

                  <div className={styles.successTitleWrap}>
                    <h3 className={styles.successTitle}>Registration Completed!</h3>
                    <p className={styles.successSubtitle}>
                      Your registration for <strong>{event.name}</strong> has been successfully recorded in our system.
                    </p>
                  </div>

                  {/* Registration Summary Card */}
                  <div className={styles.summaryCard}>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Registration ID</span>
                      <span className={styles.summaryIdValue}>{registrationResultId}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Team / Participant</span>
                      <span className={styles.summaryValue}>{teamName}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>College</span>
                      <span className={styles.summaryValue}>{effectiveCollegeName}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Team Size</span>
                      <span className={styles.summaryValue}>{members.length} {members.length === 1 ? 'Member' : 'Members'}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Payment Status</span>
                      <span className={styles.summaryValue}>
                        {isPCCOE ? 'Free (PCCOE Student)' : 'Paid (Verified via Screenshot)'}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Call to Action */}
                  <div className={styles.modalWhatsAppBanner}>
                    <p className={styles.modalWhatsAppText}>
                      Join the official WhatsApp group now to receive schedule announcements, round updates, and mentor support!
                    </p>
                    <a
                      href="https://chat.whatsapp.com/DgwPI9EgaAQ1Z1epQcUZ40?s=qt&p=a&mlu=4&ilr=4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalWhatsAppBtn}
                    >
                      <ExternalLink size={16} />
                      <span>Join Event WhatsApp Group</span>
                    </a>
                  </div>

                  <div className={styles.modalFooter}>
                    <button
                      type="button"
                      onClick={() => {
                        setSuccessModalOpen(false);
                        onCancel();
                      }}
                      className={styles.modalDoneBtn}
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default RegistrationForm;
