import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'en' | 'si'

const STORAGE_KEY = 'noir-atelier-lang'

const en = {
  meta: {
    title: 'ATELIER NOIR — Modern Clothing',
  },
  nav: {
    newIn: 'New In',
    collections: 'Collections',
    atelier: 'Atelier',
    journal: 'Journal',
    addedToBag: 'added to your bag',
  },
  hero: {
    eyebrow: 'Autumn — Winter 2025 · Drop 01',
    titleLine1: 'Dress in',
    titleLine2: 'quiet luxury',
    body: 'Considered essentials cut from natural fibres — wool, cashmere, flax — made in small batches by ateliers we know by name. No logos. No noise. Just clothes that last.',
    shopNewIn: 'Shop new in',
    ourStory: 'Our story',
    scroll: 'Scroll',
  },
  marquee: [
    'Free shipping over $150',
    'New drop — AW25',
    'Natural fibres only',
    'Small-batch ateliers',
    '30-day easy returns',
    'Carbon-neutral delivery',
  ],
  newArrivals: {
    eyebrow: '01 — The Edit',
    titlePlain: 'New',
    titleItalic: 'arrivals',
    body: 'Four essentials for the season. Cut close to the body of work — never close to the trend.',
    addToBag: 'Add',
  },
  products: {
    overcoat: {
      name: 'The Sculpted Overcoat',
      detail: 'Double-faced camel wool · Made in Italy',
      tag: 'New Season',
    },
    shirt: {
      name: 'Resort Linen Shirt',
      detail: 'Stone-washed European flax · Ivory',
      tag: 'Back in Stock',
    },
    trouser: {
      name: 'Pleated Wool Trouser',
      detail: 'High-rise · Charcoal merino twill',
      tag: '',
    },
    knit: {
      name: 'Ribbed Cashmere Knit',
      detail: 'Grade-A Mongolian cashmere · Dune',
      tag: 'Limited',
    },
  },
  collections: {
    eyebrow: '02 — Collections',
    titlePlain: 'Two wardrobes,',
    titleItalic: 'one language',
    women: { name: 'Women', note: '34 pieces · coats, knits, tailoring' },
    men: { name: 'Men', note: '28 pieces · shirting, outerwear, denim' },
  },
  story: {
    eyebrow: '03 — The Atelier',
    titleLine1: 'Slow made,',
    titleItalic: 'worn for decades',
    para1:
      'Noir Atelier began with a simple refusal: no polyester, no seasons that expire, no garments designed to be replaced. We work directly with twelve family-run ateliers across Portugal and Italy, cutting every piece from traceable wool, cashmere and flax.',
    para2:
      'Each garment carries the initials of the person who finished it — because good clothes are made by people, not production lines.',
    estSince: 'Est. 2019',
    places: 'Lisbon · Porto · Florence',
    stats: [
      { value: '100%', label: 'Natural fibres' },
      { value: '12', label: 'Partner ateliers' },
      { value: '0', label: 'Logos, ever' },
      { value: '10yr', label: 'Repair guarantee' },
    ],
  },
  testimonials: {
    eyebrow: '04 — Worn & Loved',
    titlePlain: 'From the',
    titleItalic: 'journal',
    body: 'Unedited words from customers who wear Noir Atelier every day.',
    quotes: [
      {
        text: 'The overcoat is the single best thing I own. Three winters in and it looks better than the day it arrived.',
        name: 'Elena M.',
        place: 'Copenhagen',
      },
      {
        text: 'Finally a brand that publishes its factories. The linen shirt has survived forty washes and counting.',
        name: 'Daniel K.',
        place: 'New York',
      },
      {
        text: 'Bought the cashmere knit as a gift and immediately ordered one for myself. Dangerous website.',
        name: 'Sofia R.',
        place: 'Melbourne',
      },
    ],
  },
  newsletter: {
    eyebrow: 'The Sunday List',
    titlePlain: 'First access to drops,',
    titleItalic: 'zero spam',
    body: 'One letter a week: new pieces, atelier stories, and early access before collections go public. Unsubscribe anytime.',
    placeholder: 'your@email.com',
    join: 'Join',
    done: "You're on the list — see you Sunday.",
  },
  footer: {
    brand: 'Noir Atelier',
    blurb:
      'Considered clothing in natural fibres. Designed in Lisbon, made by twelve ateliers across Portugal and Italy.',
    cols: [
      { title: 'Shop', links: ['New In', 'Women', 'Men', 'Gift Cards', 'Last Chance'] },
      { title: 'Company', links: ['Our Ateliers', 'Journal', 'Careers', 'Stockists'] },
      { title: 'Support', links: ['Shipping & Returns', 'Size Guide', 'Care Guide', 'Contact'] },
    ],
    copyright: '© 2025 Noir Atelier. A demo storefront — no real orders are processed.',
    places: 'Lisbon — Porto — Florence',
  },
  cart: {
    title: 'Your Bag',
    empty: 'Your bag is empty',
    emptyBody: 'Beautiful things are waiting on the other side of this drawer.',
    subtotal: 'Subtotal',
    shippingNote: 'Shipping and taxes calculated at checkout. Free shipping over $150.',
    checkout: 'Checkout — Demo',
    remove: 'Remove',
    decrease: 'Decrease quantity',
    increase: 'Increase quantity',
    close: 'Close cart',
  },
}

const si: typeof en = {
  meta: {
    title: 'ATELIER NOIR — නවීන ඇඳුම්',
  },
  nav: {
    newIn: 'අලුත් එකතුව',
    collections: 'එකතු',
    atelier: 'නිර්මාණාගාරය',
    journal: 'සඟරාව',
    addedToBag: 'ඔබේ බෑගයට එකතු විය',
  },
  hero: {
    eyebrow: 'සරත් — ශීත 2025 · මුදාහැරීම 01',
    titleLine1: 'සැරසෙන්න',
    titleLine2: 'නිහඬ සුඛෝපභෝගී බවින්',
    body: 'ලොම්, කෂ්මීර්, හණ වැනි ස්වභාවික තන්තු වලින් සැලසුම් සහගතව නිර්මාණය කළ අත්‍යවශ්‍ය ඇඳුම්. අප නමින්ම හඳුනන කුඩා නිර්මාණාගාර මගින් සුළු පිරිසකට නිපදවනු ලැබේ. ලාංඡන නැත. ඝෝෂාවක් නැත. කල් පවතින ඇඳුම් පමණයි.',
    shopNewIn: 'අලුත් එකතුව බලන්න',
    ourStory: 'අපේ කතාව',
    scroll: 'පහළට',
  },
  marquee: [
    '$150ට වැඩි නම් නොමිලේ බෙදාහැරීම',
    'අලුත් එකතුව — AW25',
    'ස්වභාවික තන්තු පමණයි',
    'සුළු පිරිසකට නිර්මාණාගාර නිෂ්පාදන',
    'දින 30ක් තුළ පහසු ආපසු භාරදීම',
    'කාබන් උදාසීන බෙදාහැරීම',
  ],
  newArrivals: {
    eyebrow: '01 — තෝරාගත් එකතුව',
    titlePlain: 'අලුත්',
    titleItalic: 'එකතුව',
    body: 'මේ සමයට අවශ්‍ය අත්‍යවශ්‍ය අයිතම හතරක්. නිර්මාණයේ සාරයට සමීපව, නමුත් තාවකාලික විලාසිතාවලට කිසි විටෙකත් සමීප නොවී.',
    addToBag: 'එකතු කරන්න',
  },
  products: {
    overcoat: {
      name: 'හැඩගැසූ ඕවර්කෝට් එක',
      detail: 'දෙපැත්තටම පාවිච්චි කළ හැකි කැමල් ලොම් · ඉතාලියේ නිෂ්පාදිතයකි',
      tag: 'නව සමය',
    },
    shirt: {
      name: 'රිසෝට් හණ කමිසය',
      detail: 'ගල් සේදූ යුරෝපීය හණ · අයිවරි පාට',
      tag: 'නැවත තොගයේ',
    },
    trouser: {
      name: 'නවුම් සහිත ලොම් කලිසම',
      detail: 'උස ඉණ · තද අළු මෙරිනෝ ට්විල්',
      tag: '',
    },
    knit: {
      name: 'රිබ් රටාවේ කෂ්මීර් නිට් එක',
      detail: 'A-ශ්‍රේණි මොංගෝලියානු කෂ්මීර් · වැලි පාට',
      tag: 'සීමිත සංඛ්‍යාවක්',
    },
  },
  collections: {
    eyebrow: '02 — එකතු',
    titlePlain: 'අඳුම් අල්මාරි දෙකක්,',
    titleItalic: 'පොදු නිර්මාණ භාෂාවක්',
    women: { name: 'කාන්තා', note: 'නිර්මාණ 34ක් · කබා, නිට්, මසන ලද ඇඳුම්' },
    men: { name: 'පිරිමි', note: 'නිර්මාණ 28ක් · කමිස රෙදි, පිටත ඇඳුම්, ඩෙනිම්' },
  },
  story: {
    eyebrow: '03 — නිර්මාණාගාරය',
    titleLine1: 'සෙමින් නිර්මාණය කළ,',
    titleItalic: 'දශක ගණනාවක් පැළඳිය හැකි',
    para1:
      'Noir Atelier ආරම්භ වුයේ සරල ප්‍රතික්ෂේපයකින්: පොලියෙස්ටර් නැත, කල් ඉකුත් වන සමයන් නැත, ප්‍රතිස්ථාපනය සඳහාම නිර්මාණය කළ ඇඳුම් නැත. අපි පෘතුගාලය සහ ඉතාලිය පුරා පවුල් සතු නිර්මාණාගාර දොළහක් සමඟ සෘජුවම කටයුතු කරමින්, සොයාගත හැකි මූලාශ්‍රවලින් යුත් ලොම්, කෂ්මීර් සහ හණ වලින් සෑම නිර්මාණයක්ම කපා නිෂ්පාදනය කරමු.',
    para2:
      'සෑම ඇඳුමකම එය නිම කළ පුද්ගලයාගේ මුල් අකුරු සටහන් වේ — මන්ද යහපත් ඇඳුම් නිර්මාණය වන්නේ මිනිසුන් අතින් මිස නිෂ්පාදන පේළි මගින් නොවේ.',
    estSince: 'ආරම්භය 2019',
    places: 'ලිස්බන් · පෝර්ටෝ · ෆ්ලොරන්ස්',
    stats: [
      { value: '100%', label: 'ස්වභාවික තන්තු' },
      { value: '12', label: 'හවුල් නිර්මාණාගාර' },
      { value: '0', label: 'ලාංඡන, කවදාවත්' },
      { value: '10yr', label: 'අලුත්වැඩියා සහතිකය' },
    ],
  },
  testimonials: {
    eyebrow: '04 — පැළඳ ආදරය කළ',
    titlePlain: 'සඟරාවෙන්',
    titleItalic: '',
    body: 'දිනපතා Noir Atelier ඇඳගන්නා පාරිභෝගිකයන්ගේ සංස්කරණය නොකළ වදන්.',
    quotes: [
      {
        text: 'මගේ අත්පිට ඇති හොඳම දෙය මේ කබායයි. ශීත ඍතු තුනක් ගත වුවත් එය පැමිණි දිනට වඩා ලස්සනට පෙනේ.',
        name: 'Elena M.',
        place: 'කෝපන්හේගන්',
      },
      {
        text: 'අන්තිමේදී තමන්ගේ කර්මාන්තශාලා හෙළිදරව් කරන වෙළඳ නාමයක්. හණ කමිසය සේදුම් හතළිහක්ම දරාගෙන තවමත් හොඳින් තිබෙනවා.',
        name: 'Daniel K.',
        place: 'නිව්යෝර්ක්',
      },
      {
        text: 'කෂ්මීර් නිට් එක තෑග්ගක් ලෙස මිලදී ගත්තා, වහාම මටත් එකක් ඇණවුම් කළා. භයානක වෙබ් අඩවියක්.',
        name: 'Sofia R.',
        place: 'මෙල්බර්න්',
      },
    ],
  },
  newsletter: {
    eyebrow: 'ඉරිදා ලැයිස්තුව',
    titlePlain: 'අලුත් එකතු වලට මුල්ම ප්‍රවේශය,',
    titleItalic: 'ස්පෑම් රහිතව',
    body: 'සතියකට ලිපියක්: නව නිර්මාණ, නිර්මාණාගාර කථා, එකතු ප්‍රසිද්ධ කිරීමට පෙර ඉක්මන් ප්‍රවේශය. ඕනෑම වේලාවක නවත්වා දමන්න.',
    placeholder: 'your@email.com',
    join: 'එකතු වන්න',
    done: 'ඔබ ලැයිස්තුවේ ඇත — ඉරිදා හමුවෙමු.',
  },
  footer: {
    brand: 'Noir Atelier',
    blurb:
      'ස්වභාවික තන්තු වලින් සැලසුම් සහගතව නිර්මාණය කළ ඇඳුම්. ලිස්බනයේ සැලසුම් කර, පෘතුගාලය සහ ඉතාලිය පුරා නිර්මාණාගාර දොළහක් විසින් නිෂ්පාදනය කරන ලදී.',
    cols: [
      { title: 'සාප්පුව', links: ['අලුත් එකතුව', 'කාන්තා', 'පිරිමි', 'තෑගි කාඩ්පත්', 'අවසන් අවස්ථාව'] },
      { title: 'සමාගම', links: ['අපගේ නිර්මාණාගාර', 'සඟරාව', 'රැකියා අවස්ථා', 'බෙදාහරින්නන්'] },
      { title: 'සහාය', links: ['බෙදාහැරීම සහ ආපසු භාරදීම', 'ප්‍රමාණ මාර්ගෝපදේශය', 'රැකවරණ මාර්ගෝපදේශය', 'අමතන්න'] },
    ],
    copyright: '© 2025 Noir Atelier. මෙය නිරූපණ (ඩෙමෝ) වෙළඳසැලකි — සැබෑ ඇණවුම් ක්‍රියාත්මක නොවේ.',
    places: 'ලිස්බන් — පෝර්ටෝ — ෆ්ලොරන්ස්',
  },
  cart: {
    title: 'ඔබේ බෑගය',
    empty: 'ඔබේ බෑගය හිස්ය',
    emptyBody: 'ලස්සන දේවල් මේ දොරෙන් එහායින් ඔබව එනතුරු බලා සිටියි.',
    subtotal: 'උප එකතුව',
    shippingNote: 'බෙදාහැරීම සහ බදු ගෙවීම් වේලාවේදී ගණනය කෙරේ. $150ට වැඩි නම් නොමිලේ බෙදාහැරීම.',
    checkout: 'ගෙවීම් කරන්න — ඩෙමෝ',
    remove: 'ඉවත් කරන්න',
    decrease: 'ප්‍රමාණය අඩු කරන්න',
    increase: 'ප්‍රමාණය වැඩි කරන්න',
    close: 'බෑගය වසන්න',
  },
}

const dictionaries: Record<Language, typeof en> = { en, si }

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
  setLanguage: (l: Language) => void
  t: typeof en
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'si') return saved
  } catch {
    /* storage unavailable */
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* storage unavailable */
    }
  }, [language])

  useEffect(() => {
    document.title = dictionaries[language].meta.title
  }, [language])

  const value: LanguageContextValue = {
    language,
    setLanguage: setLanguageState,
    toggleLanguage: () => setLanguageState((prev) => (prev === 'en' ? 'si' : 'en')),
    t: dictionaries[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
