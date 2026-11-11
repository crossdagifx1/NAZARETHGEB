import { useEffect, useState } from "react";
import { OrthodoxCross, Divider, SectionTitle, Corner } from "./Ornaments";
import { messages, type Language } from "./translations";

const MAPS_URL = "https://www.google.com/maps/place//data=!4m2!3m1!1s0x164b21d9801a2d9d:0x415880775bc5455b";

const GALLERY_ITEMS = [
  { image: "gallery/photo_01.jpg", title: "photo01Title", alt: "photo01Alt" },
  { image: "gallery/photo_03.jpg", title: "photo03Title", alt: "photo03Alt" },
  { image: "gallery/photo_04.jpg", title: "photo04Title", alt: "photo04Alt" },
  { image: "gallery/photo_05.jpg", title: "photo05Title", alt: "photo05Alt" },
  { image: "gallery/photo_06.jpg", title: "photo06Title", alt: "photo06Alt" },
  { image: "gallery/photo_07.jpg", title: "photo07Title", alt: "photo07Alt" },
  { image: "gallery/photo_09.jpg", title: "photo09Title", alt: "photo09Alt" },
] as const;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const t = messages[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
  }, [language, t.metaTitle]);

  const navItems = [
    { label: t.navHome, href: "#home" },
    { label: t.navParish, href: "#parish" },
    { label: t.navGallery, href: "#gallery" },
    { label: t.navServices, href: "#services" },
    { label: t.navCalendar, href: "#calendar" },
    { label: t.navClergy, href: "#clergy" },
    { label: t.navNews, href: "#news" },
    { label: t.navVisit, href: "#visit" },
  ];
  const gallery = GALLERY_ITEMS.map((photo) => ({
    image: photo.image,
    title: t[photo.title],
    alt: t[photo.alt],
  }));
  const clergy = [{ name: t.clergyName, role: t.clergyRole, bio: t.clergyBio }];
  const news = [{ date: t.newsDate, title: t.newsItemTitle, text: t.newsText }];
  const facts = [
    { value: t.factOrthodox, label: t.factTradition },
    { value: t.factAdama, label: t.factCity },
    { value: t.factEthiopia, label: t.factCountry },
  ];

  return (
    <div className="min-h-screen" data-language={language}>
      {/* Top bar */}
      <div className="bg-crimson-dark text-gold-light text-center text-sm py-1.5 font-cinzel tracking-widest border-b border-gold/50">
        ☦ {t.topbar} ☦
      </div>

      {/* Header */}
      <header className="parchment border-b-4 border-double border-gold">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center text-center relative">
          <button
            type="button"
            onClick={() => setLanguage((current) => (current === "en" ? "am" : "en"))}
            aria-label={language === "en" ? t.switchToAmharic : t.switchToEnglish}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 font-cinzel text-xs sm:text-sm text-crimson border-2 border-gold px-3 py-1 bg-parchment hover:bg-gold-light transition"
          >
            {language === "en" ? "አማ" : "EN"}
          </button>
          <div className="flex items-center gap-4 sm:gap-6 pt-6 sm:pt-4">
            <OrthodoxCross className="h-16 w-10 sm:h-20 sm:w-12 text-crimson" />
            <div>
              <p className="font-old text-crimson text-xl sm:text-2xl">{t.headerIntro}</p>
              <h1 className="font-deco text-3xl sm:text-5xl md:text-6xl text-ink leading-tight">{t.churchName}</h1>
              <p className="font-cinzel text-xs sm:text-sm tracking-[.3em] text-ink/70 mt-1">{t.location}</p>
            </div>
            <OrthodoxCross className="h-16 w-10 sm:h-20 sm:w-12 text-crimson" />
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-gradient-to-b from-crimson to-crimson-dark border-y-2 border-gold shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            className="md:hidden w-full py-3 text-gold-light font-cinzel tracking-widest"
          >
            {menuOpen ? `✕ ${t.close}` : `☰ ${t.menu}`}
          </button>
          <ul className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row justify-center font-cinzel text-parchment text-sm tracking-widest`}>
            {navItems.map(({ label, href }, index) => (
              <li key={href} className="flex items-center justify-center">
                {index > 0 && <span className="hidden md:inline text-gold">✥</span>}
                <a href={href} onClick={() => setMenuOpen(false)} className="nav-link block px-4 py-3 uppercase">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative">
        <img src="/images/church.jpg" alt={t.heroAlt} className="w-full h-[70vh] object-cover sepia-img" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#2a1608]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="relative text-center max-w-3xl p-8 sm:p-12 bg-black/45 ornate-frame backdrop-blur-[2px]">
            <Corner className="top-1 left-1" />
            <Corner className="top-1 right-1 rotate-90" />
            <Corner className="bottom-1 right-1 rotate-180" />
            <Corner className="bottom-1 left-1 -rotate-90" />
            <p className="font-old text-gold-light text-2xl sm:text-3xl">{t.heroWelcome}</p>
            <h2 className="font-deco gold-text text-4xl sm:text-6xl my-3">{t.heroTitle}</h2>
            <p className="italic text-parchment text-lg sm:text-xl">“{t.heroQuote}”</p>
            <p className="font-cinzel text-gold-light text-sm mt-2 tracking-widest">— {t.heroQuoteBy}</p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a href="#services" className="font-cinzel px-6 py-3 bg-crimson text-parchment border-2 border-gold hover:bg-crimson-dark transition uppercase tracking-widest text-sm">{t.heroCtaServices}</a>
              <a href="#visit" className="font-cinzel px-6 py-3 bg-parchment text-crimson-dark border-2 border-gold hover:bg-gold-light transition uppercase tracking-widest text-sm">{t.heroCtaVisit}</a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* Parish / About */}
      <section id="parish" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker={t.parishKicker} title={t.parishTitle} />
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative p-3 bg-gradient-to-br from-gold-light via-gold to-[#6b4a10] shadow-2xl">
                <img src="/images/gallery/photo_07.jpg" alt={t.aboutImageAlt} className="w-72 h-96 object-cover" />
                <p className="text-center font-cinzel text-xs text-crimson-dark mt-2 tracking-widest">{t.aboutCaption}</p>
              </div>
            </div>
            <div className="md:col-span-3 text-lg leading-relaxed space-y-4">
              <p className="drop-cap">{t.aboutOne}</p>
              <p>{t.aboutTwo}</p>
              <p>{t.aboutThree}</p>
              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                {facts.map(({ value, label }) => (
                  <div key={label} className="border-2 border-double border-gold py-3 bg-parchment-dark/50">
                    <div className="font-deco text-3xl text-crimson">{value}</div>
                    <div className="font-cinzel text-xs tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* Church photo gallery */}
      <section id="gallery" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker={t.galleryKicker} title={t.galleryTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gallery.map((photo) => (
              <figure key={photo.image} className="group overflow-hidden border-2 border-gold bg-parchment-dark/40 shadow-md">
                <img src={`/images/${photo.image}`} alt={photo.alt} loading="lazy" className="w-full h-64 object-cover transition duration-500 group-hover:scale-105" />
                <figcaption className="font-cinzel text-sm text-center tracking-wide px-3 py-3">{photo.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* Services */}
      <section id="services" className="relative py-20 px-4">
        <img src="/images/interior.jpg" alt="" className="absolute inset-0 w-full h-full object-cover sepia-img opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1608]/80 to-[#1a0d04]/90" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTitle kicker={t.serviceKicker} title={t.serviceTitle} light />
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-2 parchment border-2 border-gold shadow-2xl p-5 sm:p-8">
              <div className="divide-y divide-gold/50 border-y border-gold/70">
                {[
                  { day: t.serviceDaySunday, name: t.serviceSundayName, time: "5:00 AM – 9:00 AM" },
                  { day: t.serviceDayWeekdays, name: t.serviceMorningName, time: "6:00 AM – 6:30 AM" },
                  { day: t.serviceDayMonthly, name: t.serviceMonthlyName, time: "12:00 AM – 9:00 AM" },
                  { day: t.serviceDayEves, name: t.serviceVigilName, time: t.serviceTimeConfirm },
                ].map((service) => (
                  <div key={service.day} className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_auto] gap-2 sm:gap-5 items-center py-4">
                    <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wide text-crimson">{service.day}</span>
                    <span className="font-semibold leading-snug">{service.name}</span>
                    <span className="font-cinzel text-sm text-right sm:whitespace-nowrap">{service.time}</span>
                  </div>
                ))}
              </div>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="block text-center font-cinzel text-sm text-crimson mt-5 tracking-widest underline hover:text-crimson-dark">{t.publicChurchListing}</a>
            </div>

            <aside className="border-2 border-gold bg-[#190b04]/90 text-parchment p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-xl">
              <p className="font-cinzel text-xs tracking-[.2em] text-gold-light">{t.upcomingAnnualLabel}</p>
              <div className="mt-4 border border-gold w-24 shadow-lg">
                <div className="bg-gold text-[#2a1608] font-cinzel text-xs uppercase py-1">{t.upcomingAnnualMonth}</div>
                <div className="bg-crimson-dark text-parchment text-4xl font-deco py-2">{t.upcomingAnnualDay}</div>
              </div>
              <h3 className="font-deco text-xl sm:text-2xl mt-4">{t.upcomingAnnualTitle}</h3>
              <p className="mt-2 text-parchment/80">{t.upcomingAnnualDate}</p>
              <p className="mt-1 text-sm italic text-parchment/70">{t.upcomingAnnualProgram}</p>
              <a href="#calendar" className="mt-5 w-full bg-gold text-[#2a1608] font-cinzel text-xs tracking-widest uppercase px-4 py-3 hover:bg-gold-light transition">{t.seeEventDetails}</a>
            </aside>
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* Calendar */}
      <section id="calendar" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker={t.calendarKicker} title={t.calendarTitle} />
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <article className="border-4 border-double border-crimson bg-parchment-dark/40 p-6 sm:p-8 flex flex-col justify-center">
              <p className="font-cinzel text-xs tracking-[.18em] uppercase text-crimson">{t.nextMonthlyLabel}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-4">
                <div className="shrink-0 w-24 border-2 border-crimson text-center shadow-md">
                  <div className="bg-crimson text-parchment font-cinzel text-xs uppercase py-1">{t.nextMonthlyMonth}</div>
                  <div className="bg-parchment text-crimson-dark font-deco text-4xl py-2">{t.nextMonthlyDay}</div>
                </div>
                <div>
                  <h3 className="font-deco text-2xl sm:text-3xl">{t.nextMonthlyLabel}</h3>
                  <p className="font-semibold mt-2">{t.nextMonthlyDate}</p>
                  <p className="mt-2 text-ink/80">{t.nextMonthlyDescription}</p>
                </div>
              </div>
              <div className="mt-6 border-t border-crimson/30 pt-4">
                <p className="font-cinzel text-xs tracking-widest text-crimson">{t.churchNamedFor}</p>
                <p className="font-semibold">{t.saintGabrielArchangel} <span className="font-normal italic">— {t.archangelDescription}</span></p>
              </div>
            </article>

            <div className="border-y-2 border-crimson/60 divide-y divide-crimson/20 self-center">
              {[
                { date: t.eventMonthlyDate, calendar: t.eventMonthlyCalendar, title: t.eventMonthlyTitle },
                { date: t.eventAnnualDate, calendar: t.eventAnnualCalendar, title: t.eventAnnualTitle },
              ].map((event) => (
                <article key={event.calendar} className="grid grid-cols-[5rem_1rem_1fr] sm:grid-cols-[6rem_1rem_1fr] gap-3 items-center py-4">
                  <div>
                    <p className="font-cinzel font-bold text-crimson">{event.date}</p>
                    <p className="text-xs text-ink/70">{event.calendar}</p>
                  </div>
                  <OrthodoxCross className="h-5 w-3 text-gold" />
                  <h3 className="font-semibold">{event.title}</h3>
                </article>
              ))}
              <div className="py-4 text-sm italic text-ink/70">{t.eventDetailsNote}</div>
            </div>
          </div>
          <aside className="mt-8 bg-[#1e0f05] text-parchment p-6 border-l-4 border-gold flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-deco text-xl text-gold-light">{t.prayerTitle}</h3>
              <p className="italic text-parchment/80 mt-2 text-base">{t.prayerText}</p>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="shrink-0 font-cinzel text-sm underline text-gold-light">{t.eventOpenListing}</a>
          </aside>
        </div>
      </section>

      {/* Quote banner */}
      <section className="bg-crimson-dark py-14 px-4 text-center border-y-4 border-double border-gold">
        <p className="font-garamond italic text-2xl sm:text-3xl text-parchment max-w-3xl mx-auto">“{t.quote}”</p>
        <p className="font-cinzel text-gold-light tracking-widest mt-3">{t.quoteAuthor}</p>
      </section>

      {/* Clergy */}
      <section id="clergy" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker={t.clergyKicker} title={t.clergyTitle} />
          <div className="max-w-xl mx-auto">
            {clergy.map((person) => (
              <div key={person.name} className="relative text-center p-6 border-2 border-gold bg-parchment-dark/40 shadow-[4px_4px_0_#7a1414]">
                <div className="mx-auto w-28 h-36 rounded-t-full border-4 border-double border-gold bg-gradient-to-b from-[#3a2210] to-[#1e0f05] flex items-center justify-center mb-4">
                  <OrthodoxCross className="h-16 w-10 text-gold-light" />
                </div>
                <h3 className="font-cinzel font-bold text-lg">{person.name}</h3>
                <p className="font-old text-crimson text-xl">{person.role}</p>
                <p className="mt-3 text-base leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* News */}
      <section id="news" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker={t.newsKicker} title={t.newsTitle} light />
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.title} className="parchment p-6 ornate-frame flex flex-col">
                <p className="font-cinzel text-xs tracking-widest text-crimson">{item.date}</p>
                <h3 className="font-deco text-xl my-2">{item.title}</h3>
                <p className="text-base leading-relaxed flex-1">{item.text}</p>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="font-cinzel text-sm text-crimson mt-4 tracking-widest hover:underline">{t.checkListing} ❧</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* Visit */}
      <section id="visit" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker={t.visitKicker} title={t.visitTitle} />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-lg">
              <div>
                <h3 className="font-cinzel font-bold text-crimson tracking-widest">{t.addressLabel}</h3>
                <p>G7Q8+GF6<br />{t.addressCity}</p>
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-crimson tracking-widest">{t.mapsLabel}</h3>
                <p><a className="underline hover:text-crimson" href={MAPS_URL} target="_blank" rel="noreferrer">{t.mapsLink}</a></p>
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-crimson tracking-widest">{t.visitorHeading}</h3>
                <ul className="list-none space-y-1 italic">
                  <li>✠ {t.visitor1}</li>
                  <li>✠ {t.visitor2}</li>
                  <li>✠ {t.visitor3}</li>
                  <li>✠ {t.visitor4}</li>
                </ul>
              </div>
            </div>
            <div className="relative p-2 bg-gradient-to-br from-gold-light via-gold to-[#6b4a10]">
              <iframe
                title={t.mapTitle}
                className="w-full h-full min-h-[340px] sepia-img"
                style={{ filter: "sepia(.6) contrast(.95)" }}
                src="https://www.openstreetmap.org/export/embed.html?bbox=39.25%2C8.52%2C39.29%2C8.56&layer=mapnik&marker=8.53878%2C39.26615"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#140a03] text-parchment/80 border-t-4 border-double border-gold pt-12 pb-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <OrthodoxCross className="h-14 w-9 mx-auto text-gold" />
          <p className="font-deco gold-text text-2xl mt-3">{t.footerName}</p>
          <p className="italic mt-2">{t.footerLocation}</p>
          <Divider light />
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-cinzel text-sm tracking-widest">
            {navItems.map(({ label, href }) => <li key={href}><a href={href} className="hover:text-gold-light">{label}</a></li>)}
          </ul>
          <p className="text-sm mt-8 text-parchment/50 font-cinzel tracking-widest">{t.footerCopyright}</p>
        </div>
      </footer>
    </div>
  );
}
