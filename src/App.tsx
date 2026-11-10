import { useState } from "react";
import { OrthodoxCross, Divider, SectionTitle, Corner } from "./Ornaments";

const NAV = [
  ["Home", "#home"],
  ["Our Parish", "#parish"],
  ["Gallery", "#gallery"],
  ["Services", "#services"],
  ["Calendar", "#calendar"],
  ["Clergy", "#clergy"],
  ["News", "#news"],
  ["Visit", "#visit"],
];

const MAPS_URL = "https://www.google.com/maps/place//data=!4m2!3m1!1s0x164b21d9801a2d9d:0x415880775bc5455b";

const FEASTS = [
  { date: "Jan 7", name: "Nativity of Christ" },
  { date: "Jan 19", name: "Theophany of Our Lord" },
  { date: "Feb 15", name: "Meeting of the Lord" },
  { date: "Apr 7", name: "Annunciation" },
  { date: "Aug 19", name: "Transfiguration" },
  { date: "Aug 28", name: "Dormition of the Theotokos" },
  { date: "Sep 21", name: "Nativity of the Theotokos" },
  { date: "Sep 27", name: "Exaltation of the Cross" },
];

const CLERGY = [
  { name: "Parish Leadership", role: "Clergy information", bio: "The public listing does not identify clergy by name. For current leadership and pastoral information, please contact the parish through its public listing." },
];

const NEWS = [
  { date: "Public information", title: "No verified parish announcements", text: "No official parish announcements were available in the public listing when this website was prepared. Check the listing for current visitor updates." },
];

const GALLERY = [
  { image: "gallery/photo_01.jpg", title: "The church beneath the blue sky", alt: "Saint Gabriel Church exterior and towers" },
  { image: "gallery/photo_03.jpg", title: "Worshippers gather outside", alt: "Worshippers gathered outside Saint Gabriel Church" },
  { image: "gallery/photo_04.jpg", title: "The church façade", alt: "Close view of Saint Gabriel Church's domes and façade" },
  { image: "gallery/photo_05.jpg", title: "Inside the church", alt: "Interior columns and arches inside the church" },
  { image: "gallery/photo_06.jpg", title: "A parish gathering", alt: "Parishioners gathered outside the church" },
  { image: "gallery/photo_07.jpg", title: "The church grounds", alt: "Exterior view of the church and courtyard" },
  { image: "gallery/photo_09.jpg", title: "A view across Adama", alt: "Church dome rising above nearby rooftops" },
  { image: "gallery/photo_10.jpg", title: "The parish community", alt: "People gathered beside the church" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="bg-crimson-dark text-gold-light text-center text-sm py-1.5 font-cinzel tracking-widest border-b border-gold/50">
        ☦ Christ is in our midst! — He is and ever shall be! ☦
      </div>

      {/* Header */}
      <header className="parchment border-b-4 border-double border-gold">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <OrthodoxCross className="h-16 w-10 sm:h-20 sm:w-12 text-crimson" />
            <div>
              <p className="font-old text-crimson text-xl sm:text-2xl">The Holy Orthodox Church of</p>
              <h1 className="font-deco text-3xl sm:text-5xl md:text-6xl text-ink leading-tight">Saint Gabriel</h1>
              <p className="font-cinzel text-xs sm:text-sm tracking-[.3em] text-ink/70 mt-1">ADAMA · ETHIOPIA</p>
            </div>
            <OrthodoxCross className="h-16 w-10 sm:h-20 sm:w-12 text-crimson" />
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-gradient-to-b from-crimson to-crimson-dark border-y-2 border-gold shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-full py-3 text-gold-light font-cinzel tracking-widest">
            {menuOpen ? "✕ Close" : "☰ Menu"}
          </button>
          <ul className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row justify-center font-cinzel text-parchment text-sm tracking-widest`}>
            {NAV.map(([label, href], i) => (
              <li key={href} className="flex items-center justify-center">
                {i > 0 && <span className="hidden md:inline text-gold">✥</span>}
                <a href={href} onClick={() => setMenuOpen(false)} className="nav-link block px-4 py-3 uppercase">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative">
        <img src="/images/church.jpg" alt="Saint Gabriel Church in Adama, Ethiopia" className="w-full h-[70vh] object-cover sepia-img" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#2a1608]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="relative text-center max-w-3xl p-8 sm:p-12 bg-black/45 ornate-frame backdrop-blur-[2px]">
            <Corner className="top-1 left-1" />
            <Corner className="top-1 right-1 rotate-90" />
            <Corner className="bottom-1 right-1 rotate-180" />
            <Corner className="bottom-1 left-1 -rotate-90" />
            <p className="font-old text-gold-light text-2xl sm:text-3xl">Welcome to the House of God</p>
            <h2 className="font-deco gold-text text-4xl sm:text-6xl my-3">Come and See</h2>
            <p className="italic text-parchment text-lg sm:text-xl">“We knew not whether we were in heaven or on earth… we only know that God dwells there among men.”</p>
            <p className="font-cinzel text-gold-light text-sm mt-2 tracking-widest">— Envoys of St. Vladimir, A.D. 987</p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a href="#services" className="font-cinzel px-6 py-3 bg-crimson text-parchment border-2 border-gold hover:bg-crimson-dark transition uppercase tracking-widest text-sm">Service Schedule</a>
              <a href="#visit" className="font-cinzel px-6 py-3 bg-parchment text-crimson-dark border-2 border-gold hover:bg-gold-light transition uppercase tracking-widest text-sm">Plan a Visit</a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* Parish / About */}
      <section id="parish" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Glory be to God for all things" title="Saint Gabriel in Adama" />
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative p-3 bg-gradient-to-br from-gold-light via-gold to-[#6b4a10] shadow-2xl">
                <img src="/images/icon.jpg" alt="Saint Gabriel Church and its parish community" className="w-72 h-96 object-cover" />
                <p className="text-center font-cinzel text-xs text-crimson-dark mt-2 tracking-widest">SAINT GABRIEL · ADAMA</p>
              </div>
            </div>
            <div className="md:col-span-3 text-lg leading-relaxed space-y-4">
              <p className="drop-cap">
                Saint Gabriel Church is an Orthodox church in Adama, Ethiopia. This site shares public photos of the church and its community,
                along with directions and practical information for visitors.
              </p>
              <p>
                We are a parish of the Holy Orthodox Church — the One, Holy, Catholic and Apostolic Church founded by our Lord Jesus Christ. Our
                worship has remained unchanged for centuries, preserving the faith “once delivered unto the saints” (Jude 1:3).
              </p>
              <p>
                Whether thou art Orthodox, seeking, or simply curious, the doors of our temple are open. Come, light a candle, venerate the holy
                icons, and stand in prayer with us. For current ministries and parish activities, please ask the church directly.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                {[["Orthodox", "Tradition"], ["Adama", "City"], ["Ethiopia", "Country"]].map(([n, l]) => (
                  <div key={l} className="border-2 border-double border-gold py-3 bg-parchment-dark/50">
                    <div className="font-deco text-3xl text-crimson">{n}</div>
                    <div className="font-cinzel text-xs tracking-widest">{l}</div>
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
          <SectionTitle kicker="A glimpse of the church" title="Photos of Saint Gabriel" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY.map((photo) => (
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
        <div className="relative max-w-5xl mx-auto">
          <SectionTitle kicker="Order of Divine Services" title="Worship & Services" light />
          <div className="parchment relative p-6 sm:p-10 ornate-frame text-center">
            <Corner className="top-1 left-1" />
            <Corner className="top-1 right-1 rotate-90" />
            <Corner className="bottom-1 right-1 rotate-180" />
            <Corner className="bottom-1 left-1 -rotate-90" />
            <h3 className="font-deco text-2xl text-crimson">Current service times</h3>
            <p className="max-w-2xl mx-auto italic mt-4 text-ink/80">The public listing does not provide confirmed service times. Please check directly with the parish before visiting.</p>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-block font-cinzel text-sm text-crimson mt-5 tracking-widest underline hover:text-crimson-dark">Check the public church listing</a>
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* Calendar + Candle */}
      <section id="calendar" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="The Church Year" title="Feasts & Commemorations" />
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="border-4 border-double border-crimson bg-parchment-dark/40 p-6 mb-6 text-center">
                <p className="font-cinzel text-sm tracking-widest text-crimson">The church is named for</p>
                <h3 className="font-deco text-2xl sm:text-3xl my-2">Saint Gabriel the Archangel</h3>
                <p className="italic">Honored in Orthodox tradition as God’s messenger.</p>
              </div>
              <p className="italic mb-4 text-ink/70">These are general calendar references, not confirmed parish services or local events. Please verify arrangements with the church.</p>
              <ul className="divide-y divide-crimson/30 border-y-2 border-crimson/50">
                {FEASTS.map((f) => (
                  <li key={f.name} className="flex items-center gap-4 py-3 hover:bg-parchment-dark/50 px-2 transition">
                    <span className="font-cinzel font-bold text-crimson w-20 shrink-0">{f.date}</span>
                    <OrthodoxCross className="h-5 w-3 text-gold shrink-0" />
                    <span className="font-semibold flex-1">{f.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="bg-[#1e0f05] text-parchment p-6 ornate-frame text-center relative">
              <h3 className="font-deco gold-text text-2xl">Prayer & Parish Life</h3>
              <p className="italic text-parchment/80 mt-3 text-base">The public listing does not describe ministries or prayer-request arrangements. Please ask the parish directly about participation and pastoral care.</p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-block font-cinzel text-sm underline text-gold-light mt-5">Open the church listing</a>
            </aside>
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="bg-crimson-dark py-14 px-4 text-center border-y-4 border-double border-gold">
        <p className="font-garamond italic text-2xl sm:text-3xl text-parchment max-w-3xl mx-auto">
          “Acquire the spirit of peace, and thousands around thee shall be saved.”
        </p>
        <p className="font-cinzel text-gold-light tracking-widest mt-3">— St. Seraphim of Sarov</p>
      </section>

      {/* Clergy */}
      <section id="clergy" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Shepherds of the Flock" title="Our Clergy" />
          <div className="max-w-xl mx-auto">
            {CLERGY.map((c) => (
              <div key={c.name} className="relative text-center p-6 border-2 border-gold bg-parchment-dark/40 shadow-[4px_4px_0_#7a1414]">
                <div className="mx-auto w-28 h-36 rounded-t-full border-4 border-double border-gold bg-gradient-to-b from-[#3a2210] to-[#1e0f05] flex items-center justify-center mb-4">
                  <OrthodoxCross className="h-16 w-10 text-gold-light" />
                </div>
                <h3 className="font-cinzel font-bold text-lg">{c.name}</h3>
                <p className="font-old text-crimson text-xl">{c.role}</p>
                <p className="mt-3 text-base leading-relaxed">{c.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* News */}
      <section id="news" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Tidings from the Parish" title="Parish News" light />
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS.map((n) => (
              <article key={n.title} className="parchment p-6 ornate-frame flex flex-col">
                <p className="font-cinzel text-xs tracking-widest text-crimson">{n.date}</p>
                <h3 className="font-deco text-xl my-2">{n.title}</h3>
                <p className="text-base leading-relaxed flex-1">{n.text}</p>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="font-cinzel text-sm text-crimson mt-4 tracking-widest hover:underline">Check the public listing ❧</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="border-pattern" />

      {/* Visit */}
      <section id="visit" className="parchment py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="All are welcome" title="Visit Our Temple" />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-lg">
              <div>
                <h3 className="font-cinzel font-bold text-crimson tracking-widest">ADDRESS</h3>
                <p>G7Q8+GF6<br />Adama, Ethiopia</p>
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-crimson tracking-widest">MAPS</h3>
                <p><a className="underline hover:text-crimson" href={MAPS_URL} target="_blank" rel="noreferrer">Open Saint Gabriel Church in Google Maps</a></p>
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-crimson tracking-widest">FOR THE FIRST-TIME VISITOR</h3>
                <ul className="list-none space-y-1 italic">
                  <li>✠ Modest attire is customary; women may cover their heads.</li>
                  <li>✠ Upon entering, one may light a candle and venerate the icons.</li>
                  <li>✠ Holy Communion is for prepared Orthodox Christians; all may receive the blessed bread.</li>
                  <li>✠ Stay for coffee — we should be glad to meet thee.</li>
                </ul>
              </div>
            </div>
            <div className="relative p-2 bg-gradient-to-br from-gold-light via-gold to-[#6b4a10]">
              <iframe
                title="Map"
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
          <p className="font-deco gold-text text-2xl mt-3">Saint Gabriel Church</p>
          <p className="italic mt-2">Adama, Ethiopia</p>
          <Divider light />
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-cinzel text-sm tracking-widest">
            {NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold-light">{l}</a></li>)}
          </ul>
          <p className="text-sm mt-8 text-parchment/50 font-cinzel tracking-widest">© MMXXVI · Glory to God for All Things</p>
        </div>
      </footer>
    </div>
  );
}
