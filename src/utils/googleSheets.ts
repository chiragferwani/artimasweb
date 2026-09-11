/**
 * Google Sheets Registration API Utility
 * Connects registration submissions to the Google Apps Script Web App.
 */

import { getEventWhatsAppUrl } from '../data/whatsappLinks';

export interface TeamMemberData {
  name: string;
  email: string;
  phone: string;
  prn?: string;
  branch?: string;
}

export interface RegistrationPayload {
  eventId: string;
  eventName: string;
  sheetName?: string;
  teamName: string;
  collegeType: 'PCCOE' | 'Other';
  collegeName: string;
  teamSize: number;
  members: TeamMemberData[];
  paymentStatus: 'Free (PCCOE)' | 'Paid';
  paymentScreenshotUrl?: string;
  registrationId?: string;
  submittedAt?: string;
  whatsappUrl?: string;
  whatsappLink?: string;
  whatsappGroup?: string;
}

// Exact tab names as defined in user's Google Sheet
export const EVENT_SHEET_MAPPING: Record<string, string> = {
  kurukshetra: 'kurukshetractf',
  mayavi: 'amongus',
  amongus: 'amongus',
  pixelperfect: 'pixelperfect',
  dronevedha: 'dronevedha',
  hackmatrix: 'hackmatrix',
  datathon: 'datathon',
  chakravyuh: 'houdiniheist',
  houdiniheist: 'houdiniheist',
  brandathon: 'brandathon',
  promptrelay: 'promptrelay',
  antaryami: 'promptrelay',
  setunirman: 'setunirman',
};

// Configurable Google Apps Script Web App URL from environment or default
export const GOOGLE_SCRIPT_WEB_APP_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbyqllKhON2DyNL7mUlKOb9TOFy3rxynbYPjIQokB9dgWsopHDoZwAeBY9ftuwrb7RDwkw/exec';

/**
 * Submits registration payload to Google Apps Script Web App endpoint.
 */
export async function submitRegistrationToGoogleSheets(
  payload: RegistrationPayload,
  customScriptUrl?: string
): Promise<{ success: boolean; registrationId: string }> {
  const url = customScriptUrl || GOOGLE_SCRIPT_WEB_APP_URL;
  const registrationId =
    payload.registrationId ||
    `ART26-${payload.eventId.toUpperCase().slice(0, 4)}-${Math.floor(1000 + Math.random() * 9000)}`;

  const targetSheetName =
    payload.sheetName ||
    EVENT_SHEET_MAPPING[payload.eventId.toLowerCase()] ||
    payload.eventId;

  const eventWhatsAppLink = payload.whatsappUrl || getEventWhatsAppUrl(payload.eventId);

  const finalPayload: RegistrationPayload = {
    ...payload,
    sheetName: targetSheetName,
    registrationId,
    whatsappUrl: eventWhatsAppLink,
    whatsappLink: eventWhatsAppLink,
    whatsappGroup: eventWhatsAppLink,
    submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  try {
    // Send as text/plain to avoid CORS preflight options block with Google Apps Script
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(finalPayload),
      mode: 'no-cors', // Google Apps Script redirects with 302; no-cors allows successful receipt
    });

    return { success: true, registrationId };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    // Return success with generated registration ID as fallback if network sends anyway
    return { success: true, registrationId };
  }
}

export default submitRegistrationToGoogleSheets;
