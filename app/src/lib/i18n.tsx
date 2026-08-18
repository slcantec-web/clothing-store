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
    title: 'ATELIER NOIR — නවීන විලාසිතාවේ නිමැවුම්',
  },
  nav: {
    newIn: 'නව පැමිණීම්',
    collections: 'විලාසිතා එකතු',
    atelier: 'අපේ නිර්මාණාගාරය',
    journal: 'සඟරාව',
    addedToBag: 'ඔබේ බෑගයට එක් කළා',
  },
  hero: {
    eyebrow: 'සරත් — ශීත 2025 · පළමු නව එකතුව',
    titleLine1: 'නිහඬ සුඛෝපභෝගීත්වය',
    titleLine2: 'විලාසිතාවක් ලෙස අඳින්න',
    body: 'ලොම්, කෂ්මීර් සහ හණ වැනි ස්වභාවික තන්තු භාවිතයෙන් නිමවූ, අප විශ්වාසයෙන් තෝරාගත් පවුල් සතු නිර්මාණාගාරවල සීමිත ප්‍රමාණයෙන් නිෂ්පාදනය කරන ලද ඇඳුම් එකතුවකි. ලාංඡන නැත. අනවශ්‍ය ආඩම්බරකම් නැත. කාලයත් සමඟ වටිනාකම වැඩිවන ඇඳුම් පමණි.',
    shopNewIn: 'නව පැමිණීම් බලන්න',
    ourStory: 'අපේ කතාව',
    scroll: 'පහළට යන්න',
  },
  marquee: [
    '$150 ඉක්මවන ඇණවුම් සඳහා නොමිලේ බෙදාහැරීම',
    'නව එකතුව — AW25',
    'ස්වභාවික තන්තු පමණි',
    'සීමිත නිෂ්පාදන ප්‍රමාණ',
    'දින 30ක් ඇතුළත පහසු ආපසු භාරදීම',
    'කාබන් උදාසීන බෙදාහැරීම',
  ],
  newArrivals: {
    eyebrow: '01 — තෝරාගත් නිමැවුම්',
    titlePlain: 'අලුතින් පැමිණි',
    titleItalic: 'නිමැවුම්',
    body: 'මෙම සමය සඳහා තෝරාගත් අත්‍යවශ්‍ය නිමැවුම් හතරක්. තාවකාලික විලාසිතාවන්ට වඩා, දිගු කලක් අඳින්නට හැකි ගුණාත්මක ඇඳුම් සඳහා අපි ප්‍රමුඛත්වය දෙමු.',
    addToBag: 'බෑගයට එක් කරන්න',
  },
  products: {
    overcoat: {
      name: 'කැමල් ලොම් ඕවර්කෝට්',
      detail: 'දෙපැත්තටම ඇඳිය හැකි කැමල් ලොම් · ඉතාලියේ නිෂ්පාදිතයි',
      tag: 'නව සමය',
    },
    shirt: {
      name: 'රිසෝට් හණ කමිසය',
      detail: 'මෘදු ලෙස සෝදා නිම කළ යුරෝපීය හණ · අයිවරි',
      tag: 'නැවත තොගයට',
    },
    trouser: {
      name: 'ප්ලීට් සහිත ලොම් කලිසම',
      detail: 'ඉහළ ඉණ · තද අළු පැහැති මෙරිනෝ ට්විල්',
      tag: '',
    },
    knit: {
      name: 'රිබ් රටාවේ කෂ්මීර් නිට් ඇඳුම',
      detail: 'A ශ්‍රේණියේ මොංගෝලියානු කෂ්මීර් · ඩූන් පැහැය',
      tag: 'සීමිත ප්‍රමාණයක්',
    },
  },
  collections: {
    eyebrow: '02 — විලාසිතා එකතු',
    titlePlain: 'ඇඳුම් එකතු දෙකක්,',
    titleItalic: 'එකම හැඟීමක්',
    women: { name: 'කාන්තා', note: 'නිමැවුම් 34ක් — කබා, නිට් ඇඳුම් සහ මැහුම් නිමැවුම්' },
    men: { name: 'පිරිමි', note: 'නිමැවුම් 28ක් — කමිස, පිටත ඇඳුම් සහ ඩෙනිම්' },
  },
  story: {
    eyebrow: '03 — නිර්මාණාගාරය',
    titleLine1: 'සෙමින් හා සැලකිල්ලෙන් නිමවූ,',
    titleItalic: 'දශක ගණනාවක් අඳින්නට හැකි ඇඳුම්',
    para1:
      'Noir Atelier ආරම්භ වූයේ සරල අදහසකිනි — පොලියෙස්ටර් නැත, ඉක්මනින් අභාවයට යන විලාසිතා නැත, කිහිපවරක් අඳිමින් ඉවත දැමීමට නිමවන ඇඳුම් නැත. අපි පෘතුගාලය සහ ඉතාලිය පුරා පිහිටි පවුල් සතු නිර්මාණාගාර දොළහක් සමඟ සෘජුව කටයුතු කරමු. සෑම ඇඳුමක්ම නිමවන්නේ එහි මූලාශ්‍රය දක්වාම හඳුනාගත හැකි, ප්‍රවේශමෙන් තෝරාගත් ලොම්, කෂ්මීර් සහ හණ රෙදිවලිනි.',
    para2:
      'සෑම ඇඳුමකම එය නිම කළ ශිල්පියාගේ මුලකුරු සටහන් කර ඇත. මන්ද, සැබෑ ගුණාත්මකභාවය යන්ත්‍රයකින් නොව, මිනිස් අත්වලින් උපදින බැවිනි.',
    estSince: '2019 සිට',
    places: 'ලිස්බන් · පෝර්ටෝ · ෆ්ලොරන්ස්',
    stats: [
      { value: '100%', label: 'ස්වභාවික තන්තු' },
      { value: '12', label: 'හවුල් නිර්මාණාගාර' },
      { value: '0', label: 'ලාංඡන — කිසිදා නැත' },
      { value: '10yr', label: 'අලුත්වැඩියා සහතිකය' },
    ],
  },
  testimonials: {
    eyebrow: '04 — අඳින්න. ආදරය කරන්න.',
    titlePlain: 'අපේ පාරිභෝගිකයන්ගෙන්',
    titleItalic: '',
    body: 'දිනපතා Noir Atelier අඳින අපේ පාරිභෝගිකයන්ගේ සැබෑ අත්දැකීම්.',
    quotes: [
      {
        text: 'මගේ ඇඳුම් අතරින් මම වැඩිපුරම ආදරය කරන කබාය මේකයි. ශීත ඍතු තුනක් ගතවුණත්, ගත්ත පළමු දවසටත් වඩා දැන් මේක ලස්සනයි.',
        name: 'Elena M.',
        place: 'කෝපන්හේගන්',
      },
      {
        text: 'අවසානයේ තමන්ගේ නිෂ්පාදන කරන ස්ථාන ගැන විවෘතව කතා කරන වෙළඳ නාමයක් හමුවුණා. මේ හණ කමිසය දැනටමත් සේදීම් හතළිහකට වැඩි ප්‍රමාණයක් දරාගෙන තියෙනවා.',
        name: 'Daniel K.',
        place: 'නිව් යෝර්ක්',
      },
      {
        text: 'කෂ්මීර් නිට් ඇඳුමක් තෑග්ගක් ලෙස ලැබුණා. ඒක ඇඳපු පළමු වතාවෙන්ම මම මටම තවත් එකක් ඇණවුම් කළා. ඇත්තටම අපූරු ගුණාත්මකභාවයක්.',
        name: 'Sofia R.',
        place: 'මෙල්බර්න්',
      },
    ],
  },
  newsletter: {
    eyebrow: 'ඉරිදා ලිපිය',
    titlePlain: 'නව එකතු ගැන මුලින්ම දැනගන්න,',
    titleItalic: 'අනවශ්‍ය පණිවිඩ කිසිවක් නැත',
    body: 'සතියකට එක් ලිපියක් පමණයි: නව නිමැවුම්, නිර්මාණාගාරයේ කතා සහ නව එකතු සැමට විවෘත කිරීමට පෙර ඔබට ලැබෙන විශේෂ ප්‍රවේශය. කැමති ඕනෑම අවස්ථාවක ලැයිස්තුවෙන් ඉවත් විය හැකියි.',
    placeholder: 'ඔබේ ඊමේල් ලිපිනය',
    join: 'ලියාපදිංචි වන්න',
    done: 'ඔබ දැන් අපේ ලැයිස්තුවේ — ඉරිදා හමුවෙමු.',
  },
  footer: {
    brand: 'Noir Atelier',
    blurb:
      'ස්වභාවික තන්තුවලින් නිමවූ, ප්‍රවේශමෙන් තෝරාගත් ඇඳුම්. ලිස්බනයේ සැලසුම් කර, පෘතුගාලය සහ ඉතාලිය පුරා පිහිටි නිර්මාණාගාර දොළහක නිෂ්පාදනය කරනු ලැබේ.',
    cols: [
      { title: 'සාප්පුව', links: ['නව පැමිණීම්', 'කාන්තා', 'පිරිමි', 'තෑගි කාඩ්පත්', 'අවසන් අවස්ථා'] },
      { title: 'සමාගම', links: ['අපේ නිර්මාණාගාර', 'සඟරාව', 'රැකියා අවස්ථා', 'අලෙවිසැල්'] },
      { title: 'පාරිභෝගික සේවය', links: ['බෙදාහැරීම සහ ආපසු භාරදීම', 'ප්‍රමාණ මාර්ගෝපදේශය', 'ඇඳුම් රැකබලා ගැනීම', 'අප අමතන්න'] },
    ],
    copyright: '© 2025 Noir Atelier. මෙය නිරූපණ වෙබ් අඩවියක් පමණි — සැබෑ ඇණවුම් සිදු නොකෙරේ.',
    places: 'ලිස්බන් — පෝර්ටෝ — ෆ්ලොරන්ස්',
  },
  cart: {
    title: 'ඔබේ බෑගය',
    empty: 'ඔබේ බෑගය හිස්',
    emptyBody: 'ඔබ වෙනුවෙන් තෝරාගත් නිමැවුම් ඔබ එනතුරු බලා සිටී.',
    subtotal: 'මුළු එකතුව',
    shippingNote: 'බෙදාහැරීමේ ගාස්තු සහ බදු ගෙවීමේ අවසන් පියවරේදී ගණනය කෙරේ. $150 ඉක්මවන ඇණවුම් සඳහා බෙදාහැරීම නොමිලේ.',
    checkout: 'ගෙවීම වෙත — නිරූපණය',
    remove: 'ඉවත් කරන්න',
    decrease: 'ප්‍රමාණය අඩු කරන්න',
    increase: 'ප්‍රමාණය වැඩි කරන්න',
    close: 'වසන්න',
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
