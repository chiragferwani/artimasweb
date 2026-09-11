/**
 * Official WhatsApp Group Links for each Artimas 2026 Event
 */
export const EVENT_WHATSAPP_LINKS: Record<string, string> = {
  pixelperfect: 'https://chat.whatsapp.com/ITNyOJQPemgAGwx4Jn2XTN',
  'pixel-perfect': 'https://chat.whatsapp.com/ITNyOJQPemgAGwx4Jn2XTN',

  mayavi: 'https://chat.whatsapp.com/J3Mv0JxW9wGKZrUWUQpVZa',
  amongus: 'https://chat.whatsapp.com/J3Mv0JxW9wGKZrUWUQpVZa',
  'among-us': 'https://chat.whatsapp.com/J3Mv0JxW9wGKZrUWUQpVZa',

  chakravyuh: 'https://chat.whatsapp.com/BlLAG6eMzCA6SE4sCwvrgR',
  houdini: 'https://chat.whatsapp.com/BlLAG6eMzCA6SE4sCwvrgR',
  houdiniheist: 'https://chat.whatsapp.com/BlLAG6eMzCA6SE4sCwvrgR',
  'houdini-heist': 'https://chat.whatsapp.com/BlLAG6eMzCA6SE4sCwvrgR',

  brandathon: 'https://chat.whatsapp.com/IPfbUXUeiur2sq5jMhfiZ1',
  designwars: 'https://chat.whatsapp.com/IPfbUXUeiur2sq5jMhfiZ1',
  vishwakarma: 'https://chat.whatsapp.com/IPfbUXUeiur2sq5jMhfiZ1',
  'setu-nirman': 'https://chat.whatsapp.com/IPfbUXUeiur2sq5jMhfiZ1',

  kurukshetra: 'https://chat.whatsapp.com/DXC58rAlLSXK7uHVBunJ6a',
  ctf: 'https://chat.whatsapp.com/DXC58rAlLSXK7uHVBunJ6a',
  'kurukshetra-ctf': 'https://chat.whatsapp.com/DXC58rAlLSXK7uHVBunJ6a',

  hackmatrix: 'https://chat.whatsapp.com/FONJvxabDmp9NtIuI5TQOr',
  'hack-matrix': 'https://chat.whatsapp.com/FONJvxabDmp9NtIuI5TQOr',

  promptrelay: 'https://chat.whatsapp.com/C9Nt9vvwMdpL0yrTbnH8gB',
  'prompt-relay': 'https://chat.whatsapp.com/C9Nt9vvwMdpL0yrTbnH8gB',
  antaryami: 'https://chat.whatsapp.com/C9Nt9vvwMdpL0yrTbnH8gB',

  datathon: 'https://chat.whatsapp.com/HlP9bGbGYVuAkEPChjWwHx',
  samudra: 'https://chat.whatsapp.com/HlP9bGbGYVuAkEPChjWwHx',
};

export const DEFAULT_WHATSAPP_GROUP_LINK =
  'https://chat.whatsapp.com/DgwPI9EgaAQ1Z1epQcUZ40?s=qt&p=a&mlu=4&ilr=4';

export function getEventWhatsAppUrl(eventId?: string): string {
  if (!eventId) return DEFAULT_WHATSAPP_GROUP_LINK;
  const key = eventId.toLowerCase().replace(/[\s_]+/g, '-');
  return (
    EVENT_WHATSAPP_LINKS[key] ||
    EVENT_WHATSAPP_LINKS[eventId.toLowerCase()] ||
    DEFAULT_WHATSAPP_GROUP_LINK
  );
}
