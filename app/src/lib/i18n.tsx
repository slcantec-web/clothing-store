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
    title: 'ATELIER NOIR — නවීන විලාසිතා',
  },
  nav: {
    newIn: 'අලුත්ම එකතුව',
    collections: 'එකතු',
    atelier: 'නිර්මාණාගාරය',
    journal: 'සඟරාව',
    addedToBag: 'ඔබේ බෑගයට එකතු කළා',
  },
  hero: {
    eyebrow: 'සරත් — ශීත 2025 · ඩ්‍රොප් 01',
    titleLine1: 'නිහඬ සුඛෝපභෝගී',
    titleLine2: 'විලාසිතාවෙන් සැරසෙන්න',
    body: 'ලොම්, කෂ්මීර් සහ හණ වැනි ස්වභාවික තන්තුවලින් සකස් කළ, අප හොඳින් දන්නා පවුල් සතු නිර්මාණාගාරවල සීමිත ලෙස නිපදවන ලද අත්‍යවශ්‍ය ඇඳුම් එකතුවක්. ලාංඡන නැත. අනවශ්‍ය ඝෝෂාවක් නැත. කල් පවතින ඇඳුම් පමණි.',
    shopNewIn: 'අලුත්ම එකතුව බලන්න',
    ourStory: 'අපේ කතාව',
    scroll: 'පහළට',
  },
  marquee: [
    '$150ට වැඩි ඇණවුම් සඳහා නොමිලේ ඩිලිවරි',
    'අලුත්ම ඩ්‍රොප් — AW25',
    'ස්වභාවික තන්තු පමණි',
    'සීමිත නිර්මාණාගාර නිෂ්පාදන',
    'දින 30ක් ඇතුළත පහසු ආපසු භාරදීමක්',
    'කාබන්-උදාසීන ඩිලිවරි',
  ],
  newArrivals: {
    eyebrow: '01 — තෝරාගත් එකතුව',
    titlePlain: 'අලුතින් පැමිණි',
    titleItalic: 'නිර්මාණ',
    body: 'මේ කාලයට ගැළපෙන අත්‍යවශ්‍ය නිර්මාණ හතරක්. තාවකාලික විලාසිතාවලට වඩා ඇඳුමේ සාරයට මුල්තැන දී ඇත.',
    addToBag: 'එකතු කරන්න',
  },
  products: {
    overcoat: {
      name: 'හැඩකාර ඕවර්කෝට් කබාය',
      detail: 'දෙපැත්තටම අඳින්න පුළුවන් කැමල් ලොම් · ඉතාලියේ නිෂ්පාදිතයි',
      tag: 'නව සමය',
    },
    shirt: {
      name: 'රිසෝට් හණ කමිසය',
      detail: 'මෘදු ලෙස සේදූ යුරෝපීය හණ · අයිවරි පාට',
      tag: 'නැවත තොගයේ',
    },
    trouser: {
      name: 'නැමුම් සහිත ලොම් කලිසම',
      detail: 'උස ඉණ · තද අළු මෙරිනෝ ට්විල් රෙදි',
      tag: '',
    },
    knit: {
      name: 'රිබ් රටාවේ කෂ්මීර් නිට් ඇඳුම',
      detail: 'A ශ්‍රේණියේ මොංගෝලියානු කෂ්මීර් · ඩූන් පාට',
      tag: 'සීමිතයි',
    },
  },
  collections: {
    eyebrow: '02 — එකතු',
    titlePlain: 'ඇඳුම් ආයිත්තම් දෙකක්,',
    titleItalic: 'එකම හැඟීමක්',
    women: { name: 'කාන්තා', note: 'නිර්මාණ 34ක් — කබා, නිට් ඇඳුම්, මැහුම් නිර්මාණ' },
    men: { name: 'පිරිමි', note: 'නිර්මාණ 28ක් — කමිස, පිටත ඇඳුම්, ඩෙනිම්' },
  },
  story: {
    eyebrow: '03 — නිර්මාණාගාරය',
    titleLine1: 'සෙමින් නිමැවුණු,',
    titleItalic: 'දශක ගණනාවක් අඳින ඇඳුම්',
    para1:
      'Noir Atelier ආරම්භ වුණේ සරල අරමුණකින් — පොලියෙස්ටර් නෑ, කල් ඉකුත් වන විලාසිතා නෑ, පාවිච්චි කරලා විසි කරන්න හදපු ඇඳුම් නෑ. අපි පෘතුගාලය සහ ඉතාලිය පුරා තියෙන පවුල් සතු නිර්මාණාගාර දොළහක් එක්ක සෘජුව වැඩ කරනවා. හැම ඇඳුමක්ම හදලා තියෙන්නේ මූලාශ්‍රය හරියටම දන්නා ලොම්, කෂ්මීර් සහ හණ රෙදිවලින්.',
    para2:
      'සෑම ඇඳුමකම එය නිම කළ ශිල්පියාගේ මුල් අකුරු සටහන් කරලා තියෙනවා — මොකද හොඳ ඇඳුම් හදන්නේ යන්ත්‍රවලින් නෙවෙයි, මිනිස්සුන්ගේ දෑතින්.',
    estSince: 'ආරම්භය 2019',
    places: 'ලිස්බන් · පෝර්ටෝ · ෆ්ලොරන්ස්',
    stats: [
      { value: '100%', label: 'ස්වභාවික තන්තු' },
      { value: '12', label: 'හවුල් නිර්මාණාගාර' },
      { value: '0', label: 'ලාංඡන, කවදාවත් නැත' },
      { value: '10yr', label: 'අලුත්වැඩියා සහතිකය' },
    ],
  },
  testimonials: {
    eyebrow: '04 — ඇඳලා, ආදරෙයි',
    titlePlain: 'සඟරාවෙන්',
    titleItalic: '',
    body: 'දිනපතා Noir Atelier අඳින පාරිභෝගිකයන්ගේ අවංක අදහස්.',
    quotes: [
      {
        text: 'මං ළඟ තියෙන හොඳම දෙය මේ කබායයි. ශීත ඍතු තුනක් ගෙවිලා ගියත්, ගත්ත පළමු දිනයටත් වඩා දැන් මේක ලස්සනයි.',
        name: 'Elena M.',
        place: 'කෝපන්හේගන්',
      },
      {
        text: 'අන්තිමේට තමන්ගේ කර්මාන්තශාලා හෙළිකරන වෙළඳ නාමයක් හම්බුනා. මේ හණ කමිසේ සේදුම් හතළිහකටත් වඩා දරාගෙන, තාම හොඳටම තියෙනවා.',
        name: 'Daniel K.',
        place: 'නිව් යෝර්ක්',
      },
      {
        text: 'කෂ්මීර් නිට් එක තෑග්ගක් හැටියට ගත්තා, ඊළඟටම මටත් එකක් ඇණවුම් කළා. හරිම භයානක වෙබ් සයිට් එකක්!',
        name: 'Sofia R.',
        place: 'මෙල්බර්න්',
      },
    ],
  },
  newsletter: {
    eyebrow: 'ඉරිදා ලැයිස්තුව',
    titlePlain: 'නව එකතුවලට මුල්ම ප්‍රවේශය,',
    titleItalic: 'ස්පෑම් පණිවිඩ නැත',
    body: 'සතියකට එක ලිපියයි: නව නිර්මාණ, නිර්මාණාගාර කතා සහ එකතු මහජනතාවට නිරාවරණය වීමට පෙර මුල් ප්‍රවේශය. ඕනෑම වෙලාවක අයින් වෙන්න පුළුවන්.',
    placeholder: 'your@email.com',
    join: 'එකතු වන්න',
    done: 'ඔබ ලැයිස්තුවේ ඉන්නවා — ඉරිදා හමුවෙමු.',
  },
  footer: {
    brand: 'Noir Atelier',
    blurb:
      'ස්වභාවික තන්තුවලින් නිමකළ, හිතාමතා තෝරාගත් ඇඳුම්. ලිස්බනයේ සැලසුම් කර, පෘතුගාලය සහ ඉතාලිය පුරා නිර්මාණාගාර දොළහක නිෂ්පාදිතයි.',
    cols: [
      { title: 'සාප්පුව', links: ['අලුත්ම එකතුව', 'කාන්තා', 'පිරිමි', 'තෑගි කාඩ්පත්', 'අවසන් අවස්ථාව'] },
      { title: 'සමාගම', links: ['අපගේ නිර්මාණාගාර', 'සඟරාව', 'රැකියා අවස්ථා', 'අලෙවිසැල්'] },
      { title: 'සහාය', links: ['ඩිලිවරි සහ ආපසු භාරදීම', 'සයිස් ගයිඩ්', 'රැකවරණ උපදෙස්', 'සම්බන්ධ වන්න'] },
    ],
    copyright: '© 2025 Noir Atelier. මෙය නිරූපණ වෙබ් අඩවියකි — සැබෑ ඇණවුම් සිදු නොකෙරේ.',
    places: 'ලිස්බන් — පෝර්ටෝ — ෆ්ලොරන්ස්',
  },
  cart: {
    title: 'ඔබේ බෑගය',
    empty: 'ඔබේ බෑගය හිස්යි',
    emptyBody: 'සුන්දර නිර්මාණ ඔබ එනතුරු බලා සිටී.',
    subtotal: 'උප එකතුව',
    shippingNote: 'ඩිලිවරි ගාස්තු සහ බදු චෙක්අවුට් එකේදී ගණනය කෙරේ. $150ට වැඩි නම් ඩිලිවරි නොමිලේ.',
    checkout: 'චෙක්අවුට් — ඩෙමෝ',
    remove: 'ඉවත් කරන්න',
    decrease: 'ප්‍රමාණය අඩු කරන්න',
    increase: 'ප්‍රමාණය වැඩි කරන්න',
    close: 'වහන්න',
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
