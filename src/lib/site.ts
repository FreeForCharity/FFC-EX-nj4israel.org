/**
 * Site-wide content constants for New Jersey Support Israel.
 * Centralized so contact info, EIN, donation links etc. can be updated in one place.
 */

export const site = {
  name: 'New Jersey Support Israel',
  shortName: 'NJ4Israel',
  legalName: 'New Jersey Support Israel, Inc.',
  tagline: 'Humanitarian relief for families of terror victims and wounded IDF soldiers.',
  domain: 'nj4israel.org',
  url: 'https://nj4israel.org',
  description:
    'New Jersey Support Israel is a humanitarian relief organization, established in 2014 and recognized as a 501(c)(3) charitable non-profit, providing financial aid and moral support to families of terror victims and wounded IDF soldiers in Israel.',
  ein: '47-1257878',
  founded: 2014,
  contact: {
    poBox: 'P.O. Box 224',
    cityState: 'Fair Lawn, NJ 07410-0224',
    phone: '(201) 773-3788',
    phoneTel: '+12017733788',
    email: 'info@nj4israel.org',
  },
  social: {
    facebook: 'https://www.facebook.com/nj4israel',
    twitter: 'https://twitter.com/nj4israel',
    instagram: 'https://www.instagram.com/nj4israel',
  },
  donate: {
    paypal: 'https://www.paypal.com/us/fundraiser/charity/1710088',
    donorsFund: 'https://thedonorsfund.org/donate/new-jersey-support-israel/471257878',
    venmoHandle: '@nj4israel',
    venmoUrl: 'https://venmo.com/u/nj4israel',
  },
} as const

export type Site = typeof site
