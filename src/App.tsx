import { useState, useEffect } from 'react';
import { translations } from './translations';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MessageCircle, 
  BookOpen, 
  ShoppingBag, 
  User, 
  Facebook, 
  ArrowRight,
  Droplets,
  Flower2,
  FlaskConical,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'bn' | 'en';

// লোগো যুক্ত করার জন্য নিচে URL বসাতে পারবেন
const ACADEMY_LOGO_URL = 'https://res.cloudinary.com/jhuyxb5t/image/upload/v1795171531/logo.jpg';
const SHOP_LOGO_URL = 'https://res.cloudinary.com/jhuyxb5t/image/upload/v1795173113/3f9c48e7-399a-4871-a41e-2545c1bebaf0.png';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [productFilter, setProductFilter] = useState<'all' | 'honey' | 'oil' | 'attar'>('all');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(lang === 'bn' ? 'en' : 'bn');

  const whatsappLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/8801962402792?text=${encodedMessage}`;
  };

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.quran, href: "#quran" },
    { name: t.nav.shop, href: "#shop" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100 selection:text-orange-900 ${lang === 'bn' ? 'font-["Hind_Siliguri"]' : 'font-sans'}`}>
      
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-8">
          {/* Brand */}
          <a href="#home" className="text-xl font-bold text-sky-900 whitespace-nowrap shrink-0 tracking-tight">
            ATHAR MASOUD
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-sky-900 hover:underline transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'bn' ? 'English' : 'বাংলা'}
            </button>
          </nav>

          {/* Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a 
              href={whatsappLink("আসসালামু আলাইকুম, আমি আপনার সাথে যোগাযোগ করতে চাই।")}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-sm font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              {t.nav.whatsapp}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 w-full bg-white z-40 border-b border-slate-200 md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-900 border-b border-slate-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-2">
                <button 
                  onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-slate-100 rounded-lg"
                >
                  <Globe className="w-4 h-4" />
                  {lang === 'bn' ? 'English' : 'বাংলা'}
                </button>
                <a 
                  href={whatsappLink("আসসালামু আলাইকুম")}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-emerald-600 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="home" className="pt-20">
        
        {/* About Me Section (First — Small Photo Left + Text Right, Online Quran & Organic Shop Below) */}
        <section id="about" className="relative py-8 lg:py-12 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Row 1: Compact Profile Card (Small Photo Left + Text Right) */}
            <div className="bg-white/95 rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex flex-row gap-4 sm:gap-7 lg:gap-8 items-start">
                <div className="w-20 sm:w-32 md:w-36 lg:w-40 shrink-0">
                  <div className="relative aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-md border-2 border-white ring-1 ring-slate-200">
                    {/* Fallback for Image */}
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                      <User className="w-10 h-10 sm:w-14 sm:h-14 text-slate-400" />
                    </div>
                    <img 
                      src="https://res.cloudinary.com/jhuyxb5t/image/upload/v1795132422/78936bf7-e304-49bd-a1b9-33f116dc7d56.jpg" 
                      alt={t.about.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0 text-left">
                  <span className="text-orange-600 font-bold tracking-wider uppercase text-xs block mb-1">
                    {t.about.title}
                  </span>
                  <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1.5 leading-tight">
                    {t.about.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-sky-900 mb-3">
                    {t.about.profession} · {t.about.role}
                  </p>

                  <p className="text-sm sm:text-lg font-bold text-emerald-900 leading-snug mb-2">
                    {t.hero.title}
                  </p>
                  <p className="text-xs sm:text-base text-slate-700 leading-relaxed mb-5 max-w-3xl">
                    {t.hero.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <a
                      href={whatsappLink("আসসালামু আলাইকুম, আমি আপনার সাথে যোগাযোগ করতে চাই।")}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-slate-900 text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-slate-800 transition-all whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t.hero.ctaWhatsApp}
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-slate-100 text-slate-900 border border-slate-200 text-xs sm:text-sm font-bold rounded-xl hover:bg-slate-200/70 transition-all whitespace-nowrap shrink-0"
                    >
                      {t.nav.contact}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Online Quran & Organic Products Cards Neatly Below */}
            <div className="mt-6 grid sm:grid-cols-2 gap-5 lg:gap-6">
              <div className="group p-6 rounded-3xl bg-emerald-50/90 border border-emerald-200/80 flex flex-col justify-between transition-all hover:bg-emerald-50 hover:shadow-md">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-white text-emerald-700 rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-sm overflow-hidden ${
                        ACADEMY_LOGO_URL
                          ? 'border border-emerald-200 p-1'
                          : 'border-2 border-dashed border-emerald-300 p-1'
                      }`}
                    >
                      {ACADEMY_LOGO_URL ? (
                        <img
                          src={ACADEMY_LOGO_URL}
                          alt={t.services.academyTitle}
                          className="w-full h-full object-contain rounded-xl"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <>
                          <BookOpen className="w-6 h-6 text-emerald-700" />
                          <span className="text-[10px] font-bold text-emerald-700/80 mt-0.5 leading-none">
                            {lang === 'bn' ? 'লোগো' : 'Logo'}
                          </span>
                        </>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-700 block">
                        {t.nav.quran}
                      </span>
                      <h2 className="text-lg lg:text-xl font-bold text-emerald-950 leading-snug">
                        {t.services.academyTitle}
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm text-emerald-900/80 leading-relaxed mb-5">
                    {t.services.academyDesc}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="#quran"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-700 text-white text-xs font-bold rounded-xl hover:bg-emerald-800 transition-colors whitespace-nowrap shrink-0"
                  >
                    {t.services.academyBtn1}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={whatsappLink("আসসালামু আলাইকুম, আমি মারকাযুল কুরআন অনলাইন একাডেমিতে ভর্তি সম্পর্কে জানতে চাই।")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-emerald-800 border border-emerald-300 text-xs font-bold rounded-xl hover:bg-emerald-100/60 transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {t.services.academyBtn2}
                  </a>
                </div>
              </div>

              <div className="group p-6 rounded-3xl bg-sky-50/90 border border-sky-200/80 flex flex-col justify-between transition-all hover:bg-sky-50 hover:shadow-md">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-white text-orange-500 rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-sm overflow-hidden ${
                        SHOP_LOGO_URL
                          ? 'border border-sky-200 p-1'
                          : 'border-2 border-dashed border-orange-300 p-1'
                      }`}
                    >
                      {SHOP_LOGO_URL ? (
                        <img
                          src={SHOP_LOGO_URL}
                          alt={t.services.shopTitle}
                          className="w-full h-full object-contain rounded-xl"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <>
                          <ShoppingBag className="w-6 h-6 text-orange-500" />
                          <span className="text-[10px] font-bold text-orange-600/80 mt-0.5 leading-none">
                            {lang === 'bn' ? 'লোগো' : 'Logo'}
                          </span>
                        </>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 block">
                        {t.nav.shop}
                      </span>
                      <h2 className="text-lg lg:text-xl font-bold text-sky-950 leading-snug">
                        {t.services.shopTitle}
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm text-sky-900/80 leading-relaxed mb-5">
                    {t.services.shopDesc}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="#shop"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-orange-500 text-white text-xs font-bold rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap shrink-0"
                  >
                    {t.services.shopBtn1}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={whatsappLink("আসসালামু আলাইকুম, আমি MASOUD SHOP-এর অর্গানিক পণ্য সম্পর্কে জানতে চাই।")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-sky-900 border border-sky-300 text-xs font-bold rounded-xl hover:bg-sky-100/60 transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {t.services.shopBtn2}
                  </a>
                </div>
              </div>
            </div>

            {/* Vision & Mission Strip */}
            <div className="mt-8 pt-8 border-t border-slate-200/80 grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 p-6 rounded-2xl border border-slate-200/70 space-y-3">
                <h3 className="text-xl font-bold text-sky-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  {t.about.visionTitle}
                </h3>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                  {t.about.visionDesc}
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-2xl border border-slate-200/70 space-y-3">
                <h3 className="text-xl font-bold text-sky-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  {t.about.missionTitle}
                </h3>
                <ul className="text-slate-600 space-y-2">
                  {t.about.missionDesc.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-emerald-600 font-bold mt-0.5">•</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quran Academy Section */}
        <section id="quran" className="py-24 bg-emerald-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-[120px] -mr-48 -mt-48 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800 rounded-full blur-[120px] -ml-48 -mb-48 opacity-50"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div
                className={`w-24 h-24 mx-auto mb-6 rounded-3xl flex flex-col items-center justify-center overflow-hidden ${
                  ACADEMY_LOGO_URL
                    ? 'bg-white border-4 border-emerald-200/30 shadow-xl p-1.5'
                    : 'bg-white/10 border-2 border-dashed border-emerald-300/60 p-2'
                }`}
              >
                {ACADEMY_LOGO_URL ? (
                  <img
                    src={ACADEMY_LOGO_URL}
                    alt={t.services.academyTitle}
                    className="w-full h-full object-contain rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <>
                    <BookOpen className="w-8 h-8 text-emerald-200" />
                    <span className="text-[11px] font-bold text-emerald-200/90 mt-1">
                      {lang === 'bn' ? 'একাডেমি লোগো' : 'Academy Logo'}
                    </span>
                  </>
                )}
              </div>
              <span className="text-emerald-300 font-bold tracking-widest uppercase text-sm block mb-4">{t.quran.title}</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t.quran.subtitle}</h2>
              <p className="text-lg text-emerald-100/80">
                {t.quran.desc}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.quran.courses.map((course) => (
                <motion.div 
                  key={course.id}
                  whileHover={{ y: -10 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{course.name}</h3>
                  <p className="text-sm text-emerald-100/70 leading-relaxed mb-8 flex-grow">
                    {course.desc}
                  </p>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setSelectedCourse(course)}
                      className="w-full py-2.5 bg-white text-emerald-900 text-xs font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      {t.quran.detailsBtn}
                    </button>
                    <a 
                      href={whatsappLink(`আসসালামু আলাইকুম, আমি ${course.name} কোর্সটি সম্পর্কে বিস্তারিত জানতে চাই।`)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 border border-white/30 text-white text-xs font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://www.facebook.com/markazulquran26/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 transition-all border border-white/20 rounded-2xl font-bold"
              >
                <Facebook className="w-6 h-6 text-emerald-300" />
                {t.quran.fbBtn} — {t.services.academyTitle}
              </a>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center shrink-0 overflow-hidden ${
                      SHOP_LOGO_URL
                        ? 'bg-white border border-sky-200 shadow-sm p-1.5'
                        : 'bg-sky-50 border-2 border-dashed border-orange-300 p-1.5'
                    }`}
                  >
                    {SHOP_LOGO_URL ? (
                      <img
                        src={SHOP_LOGO_URL}
                        alt={t.services.shopTitle}
                        className="w-full h-full object-contain rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <>
                        <ShoppingBag className="w-7 h-7 text-orange-500" />
                        <span className="text-[10px] font-bold text-orange-600/80 mt-1">
                          {lang === 'bn' ? 'শপ লোগো' : 'Shop Logo'}
                        </span>
                      </>
                    )}
                  </div>
                  <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
                    {t.services.shopTitle}
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{t.shop.title}</h2>
                <p className="text-lg text-slate-600">
                  {t.shop.desc}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl">
                <button
                  onClick={() => setProductFilter('all')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    productFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {t.shop.filterAll}
                </button>
                <button
                  onClick={() => setProductFilter('honey')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    productFilter === 'honey' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {t.shop.filterHoney}
                </button>
                <button
                  onClick={() => setProductFilter('oil')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    productFilter === 'oil' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {t.shop.filterOil}
                </button>
                <button
                  onClick={() => setProductFilter('attar')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    productFilter === 'attar' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {t.shop.filterAttar}
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.shop.products
                .filter((p) => productFilter === 'all' || p.category === productFilter)
                .map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-slate-50 rounded-[2.5rem] p-4 border border-slate-100 flex flex-col"
                >
                  <div className="aspect-square rounded-[2rem] bg-slate-200 mb-6 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-tr flex items-center justify-center ${
                      product.category === 'honey'
                        ? 'from-orange-100 to-amber-50'
                        : product.category === 'oil'
                        ? 'from-sky-100 to-cyan-50'
                        : 'from-emerald-100 to-teal-50'
                    }`}>
                      {product.category === 'honey' ? (
                        <Flower2 className="w-16 h-16 text-orange-300" />
                      ) : product.category === 'oil' ? (
                        <Droplets className="w-16 h-16 text-sky-300" />
                      ) : (
                        <FlaskConical className="w-16 h-16 text-emerald-400" />
                      )}
                    </div>
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  <div className="px-2 pb-2 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-2">
                      <span>
                        {product.category === 'honey'
                          ? t.shop.filterHoney
                          : product.category === 'oil'
                          ? t.shop.filterOil
                          : t.shop.filterAttar}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{product.weight}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                    <p className="text-sm text-slate-500 font-bold mb-4">{product.price}</p>
                    
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-2.5 mb-2 bg-slate-200 text-slate-900 text-xs font-bold rounded-xl hover:bg-slate-300 transition-colors"
                    >
                      {t.shop.detailsBtn}
                    </button>
                    
                    <a 
                      href={whatsappLink(`আসসালামু আলাইকুম, আমি ${product.name} (${product.weight}) পণ্যটি অর্ডার করতে চাই।`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto w-full py-3.5 bg-slate-900 text-white text-sm font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {t.shop.orderBtn}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href="https://www.facebook.com/Masoudshop24/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-sky-900 text-white hover:bg-sky-800 transition-all rounded-2xl font-bold shadow-lg shadow-sky-900/15"
              >
                <Facebook className="w-5 h-5 text-sky-300" />
                {lang === 'bn'
                  ? 'অর্গানিক পণ্য বিভাগের Facebook Page দেখুন — MASOUD SHOP'
                  : 'Visit MASOUD SHOP Facebook Page'}
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-100">
              <div className="lg:w-2/5 bg-sky-900 p-12 lg:p-16 text-white flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">{t.contact.title}</h2>
                <p className="text-sky-100/70 mb-12 leading-relaxed">
                  {lang === 'bn' ? 'যেকোনো প্রয়োজনে আমাদের সাথে সরাসরি যোগাযোগ করুন। আমরা আপনার সেবায় সর্বদা প্রস্তুত।' : 'Feel free to contact us for any inquiries. We are always ready to help you.'}
                </p>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-sky-300" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-1">WhatsApp / Phone</h4>
                      <p className="text-lg font-bold">01962402792</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-sky-300" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-1">Email Address</h4>
                      <p className="text-lg font-bold">atmasoud1988@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-sky-300" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-1">Academy</h4>
                      <p className="text-lg font-bold">{t.services.academyTitle}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <a href={`tel:01962402792`} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href={`mailto:atmasoud1988@gmail.com`} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/Masoudshop24/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="MASOUD SHOP Facebook Page"
                    title="MASOUD SHOP Facebook Page"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="lg:w-3/5 p-12 lg:p-16">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t.contact.formName}</label>
                      <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t.contact.formEmail}</label>
                      <input type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t.contact.formMessage}</label>
                    <textarea rows={6} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full py-4 bg-sky-900 text-white font-bold rounded-2xl hover:bg-sky-800 transition-all shadow-xl shadow-sky-900/20">
                    {t.contact.formSubmit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">ATHAR MASOUD</h2>
              <p className="max-w-sm leading-relaxed mb-8">
                {t.hero.subtitle.substring(0, 150)}...
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={toggleLang}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {lang === 'bn' ? 'English Version' : 'বাংলা সংস্করণ'}
                </button>
                <a
                  href="https://www.facebook.com/markazulquran26/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  {lang === 'bn' ? 'মারকাযুল কুরআন ফেসবুক পেইজ' : 'Markazul Quran Facebook'}
                </a>
                <a
                  href="https://www.facebook.com/Masoudshop24/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  {lang === 'bn' ? 'MASOUD SHOP ফেসবুক পেইজ' : 'MASOUD SHOP Facebook'}
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">{t.nav.quran}</h4>
              <ul className="space-y-4 text-sm">
                {t.quran.courses.map(c => <li key={c.id}><a href="#quran" className="hover:text-white transition-colors">{c.name}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">{t.nav.shop}</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#shop" className="hover:text-white transition-colors">{t.shop.filterHoney}</a></li>
                <li><a href="#shop" className="hover:text-white transition-colors">{t.shop.filterOil}</a></li>
                <li><a href="#shop" className="hover:text-white transition-colors">{t.shop.filterAttar}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>{t.footer.rights}</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Detail Modals */}
      <AnimatePresence>
        {(selectedCourse || selectedProduct) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => { setSelectedCourse(null); setSelectedProduct(null); }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`p-8 ${selectedCourse ? 'bg-emerald-900 text-white' : 'bg-sky-900 text-white'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    {selectedCourse ? <BookOpen className="w-8 h-8" /> : <ShoppingBag className="w-8 h-8" />}
                  </div>
                  <button 
                    onClick={() => { setSelectedCourse(null); setSelectedProduct(null); }}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X />
                  </button>
                </div>
                <h2 className="text-3xl font-bold mb-2">{selectedCourse?.name || selectedProduct?.name}</h2>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
                  {selectedCourse ? t.quran.title : t.services.shopTitle}
                </p>
              </div>
              <div className="p-8">
                {selectedProduct?.image && (
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 mb-6">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <p className="text-slate-600 leading-relaxed mb-8">
                  {selectedCourse ? selectedCourse.desc : t.shop.desc}
                </p>
                {selectedProduct && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Weight</p>
                      <p className="font-bold text-slate-900">{selectedProduct.weight}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Price</p>
                      <p className="font-bold text-slate-900">{selectedProduct.price}</p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  <a 
                    href={whatsappLink(
                      selectedCourse 
                        ? `আসসালামু আলাইকুম, আমি ${selectedCourse.name} কোর্সটি সম্পর্কে বিস্তারিত জানতে চাই।` 
                        : `আসসালামু আলাইকুম, আমি ${selectedProduct.name} (${selectedProduct.weight}) পণ্যটি অর্ডার করতে চাই।`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2 shadow-xl transition-all ${
                      selectedCourse ? 'bg-emerald-700 hover:bg-emerald-800 shadow-emerald-200' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-200'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {selectedCourse ? t.quran.admissionBtn : t.shop.orderBtn}
                  </a>
                  <button 
                    onClick={() => { setSelectedCourse(null); setSelectedProduct(null); }}
                    className="w-full py-4 text-slate-500 font-bold hover:text-slate-900 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
