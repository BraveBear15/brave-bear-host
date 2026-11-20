"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsapp = (msg: string) =>
    `https://wa.me/27633866109?text=${encodeURIComponent(msg)}`;

  const nav = [
    { label: "Services", href: "#services" },
    { label: "Custom Website", href: "#custom-website" },
    { label: "Web Systems", href: "#web-systems" },
    { label: "Management", href: "#management" },
    { label: "Business", href: "#business" },
    { label: "Booking", href: "#booking" },
    { label: "Hosting", href: "#hosting" },
    { label: "About", href: "#about" },
  ];

  const goldDivider = (
    <div className="relative z-20 bg-black py-3 overflow-hidden">
      <div className="h-[5px] bg-gradient-to-r from-transparent via-[#ffe9a8] to-transparent shadow-[0_0_20px_rgba(212,175,55,0.9)]" />
      <div className="h-[5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-[3px] shadow-[0_0_20px_rgba(212,175,55,0.9)]" />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 h-[100svh] min-h-[620px] bg-cover bg-[position:center_30%] sm:bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }} />
      <div className="absolute top-0 left-0 right-0 h-[100svh] min-h-[620px] bg-black/45 sm:bg-black/20 z-[1]" />
      <div className="absolute top-[calc(100svh-180px)] left-0 right-0 h-[180px] bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[5]" />
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 pt-2 pb-4 min-h-[100svh] flex flex-col overflow-x-hidden">
        <div className="flex justify-between items-start gap-2">
          <a href="/" className="flex flex-col items-start -mt-1 -ml-1 shrink-0">
            <img src="/logo.png" alt="Brave Bear Host" className="h-14 sm:h-24 w-auto object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]" />
          </a>
          <div className="hidden md:flex flex-col items-end mt-2">
            <div className="flex items-center gap-1.5">
              {nav.map((item, i) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <a href={item.href} className="font-serif italic text-[13px] tracking-[0.5px] text-[#f5e6b8] px-2.5 py-2 rounded-full border border-[#d4af37]/40 bg-black/45 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(212,175,55,0.15)] hover:bg-gradient-to-b hover:from-[#ffe9a8] hover:via-[#d4af37] hover:to-[#a67c00] hover:text-black hover:border-[#ffe9a8] hover:not-italic hover:font-bold transition-all duration-300">{item.label}</a>
                  {i < nav.length - 1 && <span className="text-[7px] text-[#d4af37]/70">◆</span>}
                </div>
              ))}
            </div>
            <div className="w-full mt-2 flex flex-col gap-[2px] items-end">
              <div className="h-px w-[92%] bg-gradient-to-l from-[#d4af37] via-[#d4af37]/40 to-transparent" />
              <div className="h-px w-[78%] bg-gradient-to-l from-[#ffe9a8]/70 via-[#d4af37]/20 to-transparent" />
            </div>
            <p className="font-serif italic text-[10px] tracking-[3px] text-[#f5e6b8]/60 mt-1.5 pr-1">BRAVE BEAR HOST • EST. WITH HONOUR</p>
          </div>
          <div className="flex gap-2 mt-1 sm:mt-3 shrink-0">
            <a href="https://facebook.com/bravebearhost" target="_blank" aria-label="Facebook" className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] flex items-center justify-center font-black text-[19px] shadow-[0_0_15px_rgba(24,119,242,0.6)] active:scale-95 hover:scale-110 transition">f</a>
            <a href="https://instagram.com/bravebearhost" target="_blank" aria-label="Instagram" className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.6)] active:scale-95 hover:scale-110 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2"><rect x="2.5" y="2.5" width="19" height="19" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.8" cy="6.2" r="1" fill="white" stroke="none" /></svg>
            </a>
          </div>
        </div>
        <div className="md:hidden mt-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-full flex items-center justify-between bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border border-[#ffe9a8] text-black font-black px-5 py-3.5 rounded-full text-[14px] tracking-[2px] shadow-[0_0_20px_rgba(212,175,55,0.5)] active:scale-[0.98] transition">
            <span>{menuOpen ? "✕  CLOSE MENU" : "☰  MENU - TAP TO SEE ALL"}</span>
            <span className="text-[12px]">{menuOpen ? "▲" : "▼"}</span>
          </button>
          {menuOpen && (
            <div className="mt-2 bg-black/80 backdrop-blur-md border border-[#d4af37]/50 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)]">
              {nav.map((item, i) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between px-5 py-3.5 text-[#f5e6b8] font-serif italic text-[15px] active:bg-[#d4af37] active:text-black transition border-b border-white/5 last:border-0">
                  <span className="flex items-center gap-2.5"><span className="text-[9px] text-[#d4af37]">◆</span>{item.label}</span>
                  <span className="text-[#d4af37] text-[12px]">→</span>
                </a>
              ))}
              <div className="px-5 py-3 bg-black/60 text-center">
                <p className="font-serif italic text-[10px] tracking-[3px] text-[#f5e6b8]/60">BRAVE BEAR HOST • TAP TO GO</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1" />
        <div className="flex flex-col gap-4 mb-6 bg-black/55 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-2xl p-4 sm:p-0 border border-white/10 sm:border-0">
          <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
            <h1 className="text-[26px] leading-[1.15] sm:text-[22px] lg:text-[23px] sm:leading-tight font-black">We Build Websites & Systems <span className="text-yellow-400">That Grow Your Business.</span></h1>
            <p className="mt-2 text-[13px] font-bold">Strong Website. <span className="text-cyan-300">Smart Systems.</span> <span className="text-white/80 font-normal">— Fast, secure, scalable.</span></p>
            <p className="text-white/40 text-[10px] mt-1.5">Brave Bear Host © 2026</p>
          </div>
          <div className="flex shrink-0">
            <a href={whatsapp("Hi Brave Bear Host! I want a Website")} target="_blank" className="w-full sm:w-auto justify-center flex items-center gap-2.5 bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border border-[#ffe9a8] text-black font-black px-6 py-3.5 rounded-full text-[14px] tracking-wide shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.03] transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      {goldDivider}
      <div id="services" className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.jpg')" }} />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-center text-yellow-200/90 font-bold tracking-[6px] text-[11px] sm:text-xs">BRAVE BEAR HOST</p>
          <p className="text-center text-cyan-200/80 tracking-[4px] text-[10px] mt-1">WEB • SYSTEM • DEVELOPER</p>
          <h2 className="text-center text-4xl sm:text-6xl font-black tracking-wide mt-6 text-[#ffe9a8] drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">OUR SERVICES</h2>
          <p className="text-center text-cyan-100 text-lg sm:text-xl font-semibold mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">Strong Website. Smart System.</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-10">
            {[
              { icon: "🌐", title: "CUSTOM WEBSITES", sub: "Be Found. Be Trusted.", link: "Custom Website" },
              { icon: "👥", title: "WEB SYSTEMS", sub: "Let People Log In.", link: "Web System" },
              { icon: "📊", title: "MANAGEMENT SYSTEMS", sub: "Manage Your People.", link: "Management System" },
              { icon: "📅", title: "BOOKING SYSTEMS", sub: "Take Bookings 24/7", link: "Booking System" },
              { icon: "🗄️", title: "HOSTING & DOMAINS", sub: "Stay Online. Always.", link: "Hosting & Domain" },
              { icon: "✉️", title: "BUSINESS EMAIL", sub: "you@yourbusiness.co.za", link: "Business Email" },
            ].map((s) => (
              <div key={s.title} className="relative rounded-2xl border border-yellow-300/70 bg-black/45 backdrop-blur-sm p-5 sm:p-7 text-center shadow-[0_0_25px_rgba(56,189,248,0.25),inset_0_0_20px_rgba(56,189,248,0.15)]">
                <div className="absolute inset-[6px] rounded-xl border border-cyan-400/30 pointer-events-none" />
                <div className="text-4xl sm:text-5xl">{s.icon}</div>
                <h3 className="text-yellow-200 font-black tracking-wide text-[13px] sm:text-lg mt-4 leading-tight">{s.title}</h3>
                <div className="flex items-center justify-center gap-2 mt-3"><span className="h-px w-4 bg-yellow-400/60" /><span className="text-[9px] text-yellow-400">◆</span><span className="h-px w-4 bg-yellow-400/60" /></div>
                <p className="font-serif italic text-[#f5e6b8] text-[13px] sm:text-[15px] mt-2 leading-snug">{s.sub}</p>
                <a href={whatsapp(`Hi! I want a ${s.link}`)} target="_blank" className="inline-block mt-4 text-[11px] font-bold text-yellow-200 border border-yellow-300/50 rounded-full px-3 py-1.5">Enquire →</a>
              </div>
            ))}
            <div className="relative rounded-2xl border-2 border-yellow-300 bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] p-5 sm:p-7 text-center shadow-[0_0_35px_rgba(250,204,21,0.6)] col-span-2 lg:col-span-1">
              <span className="absolute -top-3 right-3 bg-[#8b6f00] text-white text-[10px] sm:text-[11px] font-black px-3 py-1.5 shadow-lg">MOST POPULAR</span>
              <div className="text-4xl sm:text-5xl">📈</div>
              <h3 className="text-black font-black tracking-wide text-[13px] sm:text-lg mt-4 leading-tight">BUSINESS SYSTEMS</h3>
              <div className="flex items-center justify-center gap-2 mt-3"><span className="h-px w-4 bg-black/50" /><span className="text-[9px] text-black/70">◆</span><span className="h-px w-4 bg-black/50" /></div>
              <p className="font-serif italic text-black/80 text-[13px] sm:text-[15px] mt-2 leading-snug">Run Your Money.</p>
              <a href={whatsapp("Hi! I want a Business System")} target="_blank" className="inline-block mt-4 text-[11px] font-black text-black bg-black/10 border border-black/30 rounded-full px-3 py-1.5">Enquire →</a>
            </div>
          </div>
          <div className="mt-10 flex justify-center items-center gap-4">
            <a href="tel:+27633866109" aria-label="Call" className="w-12 h-12 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            <a href="mailto:bernardmaleo863@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] border-2 border-[#ffe9a8] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></a>
          </div>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-100/50 mt-3 font-serif italic">Tap to Call &nbsp;•&nbsp; Tap to Email</p>
        </div>
      </div>
      {goldDivider}
      <div id="custom-website" className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.jpg')" }} />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-center text-yellow-200/90 font-bold tracking-[6px] text-[11px] sm:text-xs">BRAVE BEAR HOST</p>
          <p className="text-center text-cyan-200/80 tracking-[4px] text-[10px] mt-1">WEB • SYSTEM • DEVELOPER</p>
          <h2 className="text-center text-4xl sm:text-6xl font-black tracking-wide mt-6 text-[#ffe9a8] drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">CUSTOM WEBSITE</h2>
          <p className="text-center text-cyan-100 text-base sm:text-xl font-semibold mt-3">From <span className="text-yellow-300 font-black">R1,999</span> - Strong Website. Smart System.</p>
          <p className="text-center font-serif italic text-[#f5e6b8] text-sm sm:text-base mt-2">Be Found. Be Trusted. Be Open 24/7.</p>
          <div className="relative mt-10 rounded-2xl border border-yellow-300/70 bg-black/55 backdrop-blur p-5 sm:p-8 shadow-[0_0_30px_rgba(56,189,248,0.25),inset_0_0_20px_rgba(56,189,248,0.1)]">
            <div className="absolute inset-[6px] rounded-xl border border-cyan-400/30 pointer-events-none" />
            <h3 className="text-center text-2xl sm:text-3xl font-black text-[#ffe9a8] tracking-wide">WHAT YOU GET <span className="inline-flex w-7 h-7 rounded-full bg-[#d4af37] text-black items-center justify-center text-sm align-middle">✓</span></h3>
            <div className="mt-6 space-y-4 text-left">
              {[
                { t: "5 Pages", d: "Home, About, Services, Gallery, Contact" },
                { t: "Mobile Friendly", d: "Works Perfectly On Phone" },
                { t: "WhatsApp Button", d: "Customers DM You In 1 Click" },
                { t: "Google Maps + Google Business", d: "People Find You" },
                { t: "Contact Form", d: "Enquiries To Your Email / WhatsApp" },
                { t: "Social Media Links", d: "Facebook, Instagram, TikTok" },
                { t: "Professional Design", d: "Your Colours, Your Logo" },
                { t: "Business Email Setup", d: "you@yourbusiness.co.za - Look Professional" },
                { t: "Free .co.za Domain", d: "1st Year Included" },
              ].map((f) => (
                <div key={f.t} className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full border border-yellow-400/70 flex items-center justify-center text-yellow-300 text-[12px] font-black mt-0.5">✓</span><div><p className="font-bold text-white text-[15px] sm:text-base leading-tight">{f.t}</p><p className="text-cyan-100/90 text-[13px] sm:text-sm">{f.d}</p></div></div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">⚡</p><p className="font-black text-yellow-200 text-sm mt-2">3 - 5 DAYS</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Fast Delivery. No Waiting.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">📦</p><p className="font-black text-yellow-200 text-sm mt-2">WE NEED FROM YOU</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Logo, Photos & Your Info.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">🔒</p><p className="font-black text-yellow-200 text-sm mt-2">SECURE & FAST</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">SSL, Fast Loading, Google Ready.</p></div>
          </div>
          <a href={whatsapp("Hi! I want a Custom Website - From R1,999. Build mine in 3-5 days")} target="_blank" className="block mt-8 rounded-xl bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border-2 border-[#ffe9a8] text-center py-4 px-4 shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition"><span className="text-black font-black text-lg sm:text-2xl tracking-wide">DM NOW - We Build In 3-5 Days</span></a>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href="tel:+27633866109" aria-label="Call" className="w-12 h-12 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            <a href="mailto:bernardmaleo863@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] border-2 border-[#ffe9a8] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></a>
          </div>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-100/50 mt-3 font-serif italic">Tap to Call &nbsp;•&nbsp; Tap to Email</p>
        </div>
      </div>
      {goldDivider}
      <div id="web-systems" className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.jpg')" }} />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-center text-yellow-200/90 font-bold tracking-[6px] text-[11px] sm:text-xs">BRAVE BEAR HOST</p>
          <p className="text-center text-cyan-200/80 tracking-[4px] text-[10px] mt-1">WEB • SYSTEM • DEVELOPER</p>
          <h2 className="text-center text-4xl sm:text-6xl font-black tracking-wide mt-6 text-[#ffe9a8] drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">WEB SYSTEMS</h2>
          <p className="text-center text-cyan-100 text-base sm:text-xl font-semibold mt-3">From <span className="text-yellow-300 font-black">R2,999</span> - Let People Log In.</p>
          <p className="text-center font-serif italic text-[#f5e6b8] text-sm sm:text-base mt-2">Your Business. Online. Organised. Secure.</p>
          <div className="relative mt-10 rounded-2xl border border-yellow-300/70 bg-black/55 backdrop-blur p-5 sm:p-8 shadow-[0_0_30px_rgba(56,189,248,0.25),inset_0_0_20px_rgba(56,189,248,0.1)]">
            <div className="absolute inset-[6px] rounded-xl border border-cyan-400/30 pointer-events-none" />
            <h3 className="text-center text-2xl sm:text-3xl font-black text-[#ffe9a8] tracking-wide">WHAT YOU GET <span className="inline-flex w-7 h-7 rounded-full bg-[#d4af37] text-black items-center justify-center text-sm align-middle">✓</span></h3>
            <div className="mt-6 space-y-4 text-left">
              {[
                { t: "Login / Register System", d: "Customers & Staff Log In" },
                { t: "User Dashboard", d: "Each Person Sees Their Own Page" },
                { t: "Admin Panel", d: "You Control Everything" },
                { t: "Secure Passwords", d: "Protected & Safe" },
                { t: "Profile Management", d: "Update Details Easily" },
                { t: "Mobile Friendly", d: "Works On Phone Perfectly" },
                { t: "WhatsApp / Notifications", d: "Notify Your Users" },
                { t: "Your Brand Design", d: "Your Colours, Your Logo" },
              ].map((f) => (
                <div key={f.t} className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full border border-yellow-400/70 flex items-center justify-center text-yellow-300 text-[12px] font-black mt-0.5">✓</span><div><p className="font-bold text-white text-[15px] sm:text-base leading-tight">{f.t}</p><p className="text-cyan-100/90 text-[13px] sm:text-sm">{f.d}</p></div></div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">⚡</p><p className="font-black text-yellow-200 text-sm mt-2">5 - 7 DAYS</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Built & Tested For You.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">👥</p><p className="font-black text-yellow-200 text-sm mt-2">PERFECT FOR</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Schools, Clubs, Shops & Teams.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">🔒</p><p className="font-black text-yellow-200 text-sm mt-2">SAFE & PRIVATE</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Only The Right People See It.</p></div>
          </div>
          <a href={whatsapp("Hi! I want a Web System - From R2,999. Build mine in 5-7 days")} target="_blank" className="block mt-8 rounded-xl bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border-2 border-[#ffe9a8] text-center py-4 px-4 shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition"><span className="text-black font-black text-lg sm:text-2xl tracking-wide">DM NOW - We Build In 5-7 Days</span></a>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href="tel:+27633866109" aria-label="Call" className="w-12 h-12 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            <a href="mailto:bernardmaleo863@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] border-2 border-[#ffe9a8] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></a>
          </div>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-100/50 mt-3 font-serif italic">Tap to Call &nbsp;•&nbsp; Tap to Email</p>
        </div>
      </div>
      {goldDivider}
      <div id="management" className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.jpg')" }} />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-center text-yellow-200/90 font-bold tracking-[6px] text-[11px] sm:text-xs">BRAVE BEAR HOST</p>
          <p className="text-center text-cyan-200/80 tracking-[4px] text-[10px] mt-1">WEB • SYSTEM • DEVELOPER</p>
          <h2 className="text-center text-3xl sm:text-6xl font-black tracking-wide mt-6 text-[#ffe9a8] drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">MANAGEMENT SYSTEMS</h2>
          <p className="text-center text-cyan-100 text-base sm:text-xl font-semibold mt-3">From <span className="text-yellow-300 font-black">R3,999</span> - Run Your Business Smart.</p>
          <p className="text-center font-serif italic text-[#f5e6b8] text-sm sm:text-base mt-2">Stop Guessing. See Everything. Control Everything.</p>
          <div className="relative mt-10 rounded-2xl border border-yellow-300/70 bg-black/55 backdrop-blur p-5 sm:p-8 shadow-[0_0_30px_rgba(56,189,248,0.25),inset_0_0_20px_rgba(56,189,248,0.1)]">
            <div className="absolute inset-[6px] rounded-xl border border-cyan-400/30 pointer-events-none" />
            <h3 className="text-center text-2xl sm:text-3xl font-black text-[#ffe9a8] tracking-wide">WHAT YOU GET <span className="inline-flex w-7 h-7 rounded-full bg-[#d4af37] text-black items-center justify-center text-sm align-middle">✓</span></h3>
            <div className="mt-6 space-y-4 text-left">
              {[
                { t: "Stock Management", d: "Know What You Have" },
                { t: "Sales Tracking", d: "See Every Sale Daily" },
                { t: "Staff Management", d: "Add Staff, Set Roles" },
                { t: "Customer Records", d: "Save All Customers" },
                { t: "Reports", d: "Daily, Weekly, Monthly Sales" },
                { t: "Data Backup", d: "Your Business Is Safe." },
                { t: "Invoices & Receipts", d: "Print / Send On WhatsApp" },
                { t: "Admin Dashboard", d: "Everything In One Place" },
                { t: "Mobile Friendly", d: "Manage From Your Phone" },
              ].map((f) => (
                <div key={f.t} className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full border border-yellow-400/70 flex items-center justify-center text-yellow-300 text-[12px] font-black mt-0.5">✓</span><div><p className="font-bold text-white text-[15px] sm:text-base leading-tight">{f.t}</p><p className="text-cyan-100/90 text-[13px] sm:text-sm">{f.d}</p></div></div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">⚡</p><p className="font-black text-yellow-200 text-sm mt-2">7 - 10 DAYS</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Built, Tested & Ready.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">🏪</p><p className="font-black text-yellow-200 text-sm mt-2">PERFECT FOR</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Shops, Salons, Spazas & Offices.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">📈</p><p className="font-black text-yellow-200 text-sm mt-2">GROW FASTER</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Less Paper. More Sales.</p></div>
          </div>
          <a href={whatsapp("Hi! I want a Management System - From R3,999. Build mine in 7-10 days")} target="_blank" className="block mt-8 rounded-xl bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border-2 border-[#ffe9a8] text-center py-4 px-4 shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition"><span className="text-black font-black text-lg sm:text-2xl tracking-wide">DM NOW - We Build In 7-10 Days</span></a>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href="tel:+27633866109" aria-label="Call" className="w-12 h-12 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            <a href="mailto:bernardmaleo863@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] border-2 border-[#ffe9a8] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></a>
          </div>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-100/50 mt-3 font-serif italic">Tap to Call &nbsp;•&nbsp; Tap to Email</p>
        </div>
      </div>
      {goldDivider}
      <div id="business" className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.jpg')" }} />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-center text-yellow-200/90 font-bold tracking-[6px] text-[11px] sm:text-xs">BRAVE BEAR HOST</p>
          <p className="text-center text-cyan-200/80 tracking-[4px] text-[10px] mt-1">WEB • SYSTEM • DEVELOPER</p>
          <h2 className="text-center text-3xl sm:text-6xl font-black tracking-wide mt-6 text-[#ffe9a8] drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">BUSINESS SYSTEMS</h2>
          <p className="text-center text-cyan-100 text-base sm:text-xl font-semibold mt-3">From <span className="text-yellow-300 font-black">R4,999</span> - Sell Online. Get Paid.</p>
          <p className="text-center font-serif italic text-[#f5e6b8] text-sm sm:text-base mt-2">Your Shop. Open 24/7. Money In Your Account.</p>
          <div className="relative mt-10 rounded-2xl border border-yellow-300/70 bg-black/55 backdrop-blur p-5 sm:p-8 shadow-[0_0_30px_rgba(56,189,248,0.25),inset_0_0_20px_rgba(56,189,248,0.1)]">
            <div className="absolute inset-[6px] rounded-xl border border-cyan-400/30 pointer-events-none" />
            <h3 className="text-center text-2xl sm:text-3xl font-black text-[#ffe9a8] tracking-wide">WHAT YOU GET <span className="inline-flex w-7 h-7 rounded-full bg-[#d4af37] text-black items-center justify-center text-sm align-middle">✓</span></h3>
            <div className="mt-6 space-y-4 text-left">
              {[
                { t: "Online Store", d: "Sell Your Products Online" },
                { t: "Online Payments", d: "Card, EFT, SnapScan, PayFast" },
                { t: "Order Management", d: "Track Every Order" },
                { t: "Customer Accounts", d: "Customers Log In & Order" },
                { t: "Stock Control", d: "Stock Updates Automatically" },
                { t: "Delivery / Collection", d: "Set Your Options" },
                { t: "Admin Dashboard", d: "Manage Everything" },
                { t: "Mobile Friendly", d: "Shop Works On Phone" },
              ].map((f) => (
                <div key={f.t} className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full border border-yellow-400/70 flex items-center justify-center text-yellow-300 text-[12px] font-black mt-0.5">✓</span><div><p className="font-bold text-white text-[15px] sm:text-base leading-tight">{f.t}</p><p className="text-cyan-100/90 text-[13px] sm:text-sm">{f.d}</p></div></div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">⚡</p><p className="font-black text-yellow-200 text-sm mt-2">10 - 14 DAYS</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Shop Built & Tested.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">💳</p><p className="font-black text-yellow-200 text-sm mt-2">GET PAID FAST</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Card, EFT, SnapScan, PayFast.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">🏪</p><p className="font-black text-yellow-200 text-sm mt-2">PERFECT FOR</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Shops, Food, Clothes & More.</p></div>
          </div>
          <a href={whatsapp("Hi! I want a Business System - From R4,999. Build mine in 10-14 days")} target="_blank" className="block mt-8 rounded-xl bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border-2 border-[#ffe9a8] text-center py-4 px-4 shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition"><span className="text-black font-black text-lg sm:text-2xl tracking-wide">DM NOW - We Build In 10-14 Days</span></a>
          <div className="mt-4 rounded-2xl border-2 border-dashed border-yellow-300/70 bg-black/60 backdrop-blur p-5 text-center">
            <p className="text-[11px] tracking-[3px] text-yellow-200/80 font-bold">OPTIONAL UPGRADE</p>
            <p className="font-black text-white text-base sm:text-lg mt-2">📱 Want A Mobile App Too?</p>
            <p className="font-serif italic text-[#f5e6b8] text-[13px] sm:text-sm mt-1">For Repeat Customers, Push Notifications & Loyalty. Add it later - No need to pay now.</p>
            <a href={whatsapp("Hi! I want a Business System + Mobile App Upgrade. Tell me more")} target="_blank" className="inline-block mt-3 text-[12px] font-bold text-black bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] rounded-full px-5 py-2">Ask About App Upgrade →</a>
          </div>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href="tel:+27633866109" aria-label="Call" className="w-12 h-12 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            <a href="mailto:bernardmaleo863@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] border-2 border-[#ffe9a8] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></a>
          </div>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-100/50 mt-3 font-serif italic">Tap to Call &nbsp;•&nbsp; Tap to Email</p>
        </div>
      </div>
      {goldDivider}
      <div id="booking" className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.jpg')" }} />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-center text-yellow-200/90 font-bold tracking-[6px] text-[11px] sm:text-xs">BRAVE BEAR HOST</p>
          <p className="text-center text-cyan-200/80 tracking-[4px] text-[10px] mt-1">WEB • SYSTEM • DEVELOPER</p>
          <h2 className="text-center text-3xl sm:text-6xl font-black tracking-wide mt-6 text-[#ffe9a8] drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">BOOKING SYSTEMS</h2>
          <p className="text-center text-cyan-100 text-base sm:text-xl font-semibold mt-3">From <span className="text-yellow-300 font-black">R5,999</span> - Let Customers Book You.</p>
          <p className="text-center font-serif italic text-[#f5e6b8] text-sm sm:text-base mt-2">No More Missed Calls. Bookings While You Sleep.</p>
          <div className="relative mt-10 rounded-2xl border border-yellow-300/70 bg-black/55 backdrop-blur p-5 sm:p-8 shadow-[0_0_30px_rgba(56,189,248,0.25),inset_0_0_20px_rgba(56,189,248,0.1)]">
            <div className="absolute inset-[6px] rounded-xl border border-cyan-400/30 pointer-events-none" />
            <h3 className="text-center text-2xl sm:text-3xl font-black text-[#ffe9a8] tracking-wide">WHAT YOU GET <span className="inline-flex w-7 h-7 rounded-full bg-[#d4af37] text-black items-center justify-center text-sm align-middle">✓</span></h3>
            <div className="mt-6 space-y-4 text-left">
              {[
                { t: "Online Booking", d: "Customers Book 24/7" },
                { t: "Calendar System", d: "See All Bookings Clearly" },
                { t: "Automatic Reminders", d: "SMS / WhatsApp / Email" },
                { t: "Customer Accounts", d: "Customers Log In & Book" },
                { t: "Payment / Deposit", d: "Take Deposit Online" },
                { t: "Staff Schedules", d: "Each Staff Sees Their Bookings" },
                { t: "Admin Dashboard", d: "Manage Everything" },
                { t: "Mobile Friendly", d: "Book From Any Phone" },
              ].map((f) => (
                <div key={f.t} className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full border border-yellow-400/70 flex items-center justify-center text-yellow-300 text-[12px] font-black mt-0.5">✓</span><div><p className="font-bold text-white text-[15px] sm:text-base leading-tight">{f.t}</p><p className="text-cyan-100/90 text-[13px] sm:text-sm">{f.d}</p></div></div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">⚡</p><p className="font-black text-yellow-200 text-sm mt-2">10 - 14 DAYS</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Built, Tested & Ready.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">📅</p><p className="font-black text-yellow-200 text-sm mt-2">NO MORE NO-SHOWS</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Reminders + Deposits Fix It.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">💈</p><p className="font-black text-yellow-200 text-sm mt-2">PERFECT FOR</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Salons, Barbers, Clinics & More.</p></div>
          </div>
          <div className="mt-8 rounded-2xl border-2 border-cyan-400/80 bg-[#020617]/90 backdrop-blur p-5 text-center shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            <p className="text-[11px] tracking-[4px] text-cyan-300 font-bold">✦ BONUS INCLUDED - NO EXTRA COST ✦</p>
            <p className="font-black text-white text-lg sm:text-2xl mt-2 tracking-wide">📱 INCLUDES MOBILE APP</p>
            <div className="flex items-center justify-center gap-2 mt-3"><span className="h-px w-8 bg-cyan-400/60" /><span className="text-[10px] text-cyan-300">◆</span><span className="h-px w-8 bg-cyan-400/60" /></div>
            <p className="font-serif italic text-cyan-100 text-sm sm:text-base mt-2">Your Bookings, In Your Customer&apos;s Pocket.</p>
            <p className="text-cyan-200/70 text-[12px] mt-1">Customers book straight from the app - fast, easy, anytime.</p>
          </div>
          <a href={whatsapp("Hi! I want a Booking System - From R5,999 Includes Mobile App. Build mine in 10-14 days")} target="_blank" className="block mt-4 rounded-xl bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border-2 border-[#ffe9a8] text-center py-4 px-4 shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition"><span className="text-black font-black text-lg sm:text-2xl tracking-wide">DM NOW - We Build In 10-14 Days</span></a>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href="tel:+27633866109" aria-label="Call" className="w-12 h-12 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            <a href="mailto:bernardmaleo863@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] border-2 border-[#ffe9a8] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></a>
          </div>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-100/50 mt-3 font-serif italic">Tap to Call &nbsp;•&nbsp; Tap to Email</p>
        </div>
      </div>
      {goldDivider}
      <div id="hosting" className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.jpg')" }} />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-center text-yellow-200/90 font-bold tracking-[6px] text-[11px] sm:text-xs">BRAVE BEAR HOST</p>
          <p className="text-center text-cyan-200/80 tracking-[4px] text-[10px] mt-1">WEB • SYSTEM • DEVELOPER</p>
          <h2 className="text-center text-3xl sm:text-6xl font-black tracking-wide mt-6 text-[#ffe9a8] drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">HOSTING PLANS</h2>
          <p className="text-center text-cyan-100 text-base sm:text-xl font-semibold mt-3">From <span className="text-yellow-300 font-black">R99 / Month</span> - Fast. Secure. Always Online.</p>
          <p className="text-center font-serif italic text-[#f5e6b8] text-sm sm:text-base mt-2">Stay Online. Always. We Handle Everything.</p>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-200/70 font-bold mt-2">SAVE WITH YEARLY • CANCEL ANYTIME</p>
          <div className="grid sm:grid-cols-3 gap-3 mt-8">
            <div className="rounded-2xl border border-yellow-300/70 bg-black/55 backdrop-blur p-5 text-center">
              <p className="text-[11px] tracking-[3px] text-cyan-200 font-bold">STARTER</p>
              <p className="text-3xl font-black text-[#ffe9a8] mt-2">R99<span className="text-sm text-white/70"> / Month</span></p>
              <p className="font-serif italic text-[#f5e6b8] text-[13px] mt-2">1 Website • 5GB Storage</p>
              <a href={whatsapp("Hi! I want Hosting - Starter R99 / Month")} target="_blank" className="inline-block mt-4 text-[12px] font-bold text-yellow-200 border border-yellow-300/50 rounded-full px-4 py-2">Choose Starter →</a>
            </div>
            <div className="rounded-2xl border-2 border-yellow-300 bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] p-5 text-center shadow-[0_0_35px_rgba(250,204,21,0.65)] relative sm:scale-[1.03]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8b6f00] text-white text-[10px] font-black px-3 py-1">MOST POPULAR</span>
              <p className="text-[11px] tracking-[3px] text-black/70 font-black">BUSINESS</p>
              <p className="text-3xl font-black text-black mt-2">R199<span className="text-sm text-black/70"> / Month</span></p>
              <p className="font-serif italic text-black/80 text-[13px] mt-2">5 Websites • 20GB Storage</p>
              <a href={whatsapp("Hi! I want Hosting - Business R199 / Month")} target="_blank" className="inline-block mt-4 text-[12px] font-black text-black bg-black/10 border border-black/30 rounded-full px-4 py-2">Choose Business →</a>
            </div>
            <div className="rounded-2xl border border-yellow-300/70 bg-black/55 backdrop-blur p-5 text-center">
              <p className="text-[11px] tracking-[3px] text-cyan-200 font-bold">PRO</p>
              <p className="text-3xl font-black text-[#ffe9a8] mt-2">R349<span className="text-sm text-white/70"> / Month</span></p>
              <p className="font-serif italic text-[#f5e6b8] text-[13px] mt-2">Unlimited Websites • 50GB Storage</p>
              <a href={whatsapp("Hi! I want Hosting - Pro R349 / Month")} target="_blank" className="inline-block mt-4 text-[12px] font-bold text-yellow-200 border border-yellow-300/50 rounded-full px-4 py-2">Choose Pro →</a>
            </div>
          </div>
          <div className="relative mt-4 rounded-2xl border border-yellow-300/70 bg-black/55 backdrop-blur p-5 sm:p-8 shadow-[0_0_30px_rgba(56,189,248,0.25),inset_0_0_20px_rgba(56,189,248,0.1)]">
            <div className="absolute inset-[6px] rounded-xl border border-cyan-400/30 pointer-events-none" />
            <h3 className="text-center text-2xl sm:text-3xl font-black text-[#ffe9a8] tracking-wide">WHAT YOU GET <span className="inline-flex w-7 h-7 rounded-full bg-[#d4af37] text-black items-center justify-center text-sm align-middle">✓</span></h3>
            <div className="mt-6 space-y-4 text-left">
              {[
                { t: "Free SSL", d: "Your Site Shows Secure Lock" },
                { t: "Free Domain", d: ".co.za On Yearly Plans" },
                { t: "Professional Business Email", d: "you@yourbusiness.co.za - Works On Phone & Computer" },
                { t: "Monthly Backup & Updates", d: "Your Work Is Safe - We Check Monthly" },
                { t: "Fast Servers", d: "Your Site Loads Fast" },
                { t: "Support", d: "We Help You On WhatsApp" },
              ].map((f) => (
                <div key={f.t} className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full border border-yellow-400/70 flex items-center justify-center text-yellow-300 text-[12px] font-black mt-0.5">✓</span><div><p className="font-bold text-white text-[15px] sm:text-base leading-tight">{f.t}</p><p className="text-cyan-100/90 text-[13px] sm:text-sm">{f.d}</p></div></div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">🗓️</p><p className="font-black text-yellow-200 text-sm mt-2">MONTHLY UPDATES</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">We Update & Check Monthly.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">🔒</p><p className="font-black text-yellow-200 text-sm mt-2">SECURE & SAFE</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">SSL + Backup Included.</p></div>
            <div className="rounded-2xl border border-yellow-300/50 bg-black/50 backdrop-blur p-4 text-center"><p className="text-2xl">💬</p><p className="font-black text-yellow-200 text-sm mt-2">WHATSAPP SUPPORT</p><p className="font-serif italic text-[#f5e6b8] text-[13px] mt-1">Talk To A Real Person.</p></div>
          </div>
          <a href={whatsapp("Hi! I want Hosting - From R99 / Month. Start Today")} target="_blank" className="block mt-8 rounded-xl bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border-2 border-[#ffe9a8] text-center py-4 px-4 shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition"><span className="text-black font-black text-lg sm:text-2xl tracking-wide">DM NOW - Start Today</span></a>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href="tel:+27633866109" aria-label="Call" className="w-12 h-12 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            <a href="mailto:bernardmaleo863@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] border-2 border-[#ffe9a8] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></a>
          </div>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-100/50 mt-3 font-serif italic">Tap to Call &nbsp;•&nbsp; Tap to Email</p>
        </div>
      </div>
      {goldDivider}
      <div id="about" className="relative z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background2.jpg')" }} />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-center text-[#ffe9a8] font-bold tracking-[6px] text-[11px] sm:text-xs">BRAVE BEAR HOST</p>
          <p className="text-center text-[#f5e6b8]/80 tracking-[4px] text-[10px] mt-1">EST. WITH PURPOSE • BUILT WITH HONOUR</p>
          <h2 className="text-center text-4xl sm:text-6xl font-black tracking-wide mt-6 text-[#ffe9a8] drop-shadow-[0_0_25px_rgba(250,204,21,0.35)]">WHY BRAVE BEAR HOST?</h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-10 bg-[#d4af37]/70" />
            <span className="text-[11px] text-[#ffe9a8]">◆</span>
            <span className="h-px w-10 bg-[#d4af37]/70" />
          </div>
          <p className="text-center font-serif italic text-[#f5e6b8] text-lg sm:text-2xl mt-4 leading-snug">Where Vision Meets Craft.<br />Where Business Finds Its Home.</p>
          <p className="text-center text-white/70 text-[13px] sm:text-sm mt-3 max-w-xl mx-auto">We don&apos;t chase trends. We build timeless systems - classic in feel, modern in power, made to last.</p>
          <div className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-black/60 px-4 py-1.5 text-[11px] font-bold tracking-[2px] text-[#ffe9a8]">📍 POLOKWANE • SOUTH AFRICA • SERVING WORLDWIDE 🌍</span>
          </div>
          <div className="relative mt-8 rounded-2xl border border-[#d4af37]/70 bg-[#0a0a0a]/70 backdrop-blur p-5 sm:p-9 shadow-[0_0_35px_rgba(212,175,55,0.18)]">
            <div className="absolute inset-[8px] rounded-xl border border-[#d4af37]/25 pointer-events-none" />
            <p className="text-center text-[11px] tracking-[4px] text-[#ffe9a8]/80 font-bold">OUR STORY</p>
            <h3 className="text-center font-serif italic text-[#f5e6b8] text-2xl sm:text-3xl mt-3 leading-snug">From South Africa To The World.</h3>
            <div className="flex items-center justify-center gap-2 mt-3"><span className="h-px w-8 bg-[#d4af37]/60" /><span className="text-[10px] text-[#d4af37]">◆</span><span className="h-px w-8 bg-[#d4af37]/60" /></div>
            <p className="text-center text-white/90 text-[14px] sm:text-[15px] leading-relaxed mt-5">
              Brave Bear Host was born from a simple belief - <span className="text-[#ffe9a8] font-bold">every business, big or small, deserves to be seen, trusted, and remembered.</span>
              <br /><br />
              We began at home, serving local shops, salons, schools and dreamers in South Africa. Today, our work reaches far beyond borders - <span className="text-[#ffe9a8]">we build for local heroes and global brands alike.</span>
              <br /><br />
              From a small shop in Polokwane to an ambitious brand in London, New York or Dubai - the heart is the same. We listen deeply, we craft carefully, and we deliver work that speaks long after we&apos;ve gone.
            </p>
            <p className="text-center font-serif italic text-[#f5e6b8] text-[15px] sm:text-base mt-6">Local Roots. Global Reach. Timeless Craft.</p>
            <p className="text-center text-[11px] tracking-[3px] text-white/40 mt-3">SOUTH AFRICA • AFRICA • THE WORLD</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            <div className="rounded-2xl border border-[#d4af37]/60 bg-black/60 backdrop-blur p-5 text-center">
              <p className="font-serif italic text-[#ffe9a8] text-[13px]">Step One</p>
              <p className="font-black text-white text-sm mt-1 tracking-wide">SHARE YOUR VISION</p>
              <p className="font-serif italic text-[#f5e6b8]/90 text-[13px] mt-2 leading-snug">Tell us your dream on WhatsApp. We listen, we advise, we plan.</p>
            </div>
            <div className="rounded-2xl border border-[#d4af37]/60 bg-black/60 backdrop-blur p-5 text-center">
              <p className="font-serif italic text-[#ffe9a8] text-[13px]">Step Two</p>
              <p className="font-black text-white text-sm mt-1 tracking-wide">WE CRAFT IT</p>
              <p className="font-serif italic text-[#f5e6b8]/90 text-[13px] mt-2 leading-snug">Design, build & refine with care. You approve every detail.</p>
            </div>
            <div className="rounded-2xl border-2 border-[#ffe9a8] bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] p-5 text-center shadow-[0_0_30px_rgba(250,204,21,0.45)]">
              <p className="font-serif italic text-black/70 text-[13px]">Step Three</p>
              <p className="font-black text-black text-sm mt-1 tracking-wide">YOU SHINE</p>
              <p className="font-serif italic text-black/80 text-[13px] mt-2 leading-snug">Your brand goes live. The world finds you. Your story grows.</p>
            </div>
          </div>
          <div className="relative mt-4 rounded-2xl border border-[#d4af37]/60 bg-black/60 backdrop-blur p-5 sm:p-8">
            <div className="absolute inset-[8px] rounded-xl border border-[#d4af37]/25 pointer-events-none" />
            <p className="text-center text-[11px] tracking-[4px] text-[#ffe9a8]/80 font-bold">THE BRAVE BEAR PROMISE</p>
            <h3 className="text-center font-serif italic text-[#f5e6b8] text-2xl sm:text-3xl mt-2">Why People Trust Us</h3>
            <div className="mt-6 space-y-4 text-left">
              {[
                { t: "Honest Pricing", d: "What you see is what you pay. No surprises, ever." },
                { t: "Crafted, Not Rushed", d: "Every detail matters. We build to last, not to impress once." },
                { t: "We Walk With You", d: "We teach you, support you, and stay after launch." },
                { t: "A Human, Not A Robot", d: "Talk to a real person on WhatsApp. Always." },
                { t: "Built For The World", d: "Local payments, global standards. PayFast, Card, EFT & more." },
              ].map((f) => (
                <div key={f.t} className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full border border-[#d4af37] flex items-center justify-center text-[#ffe9a8] text-[12px] font-black mt-0.5">◆</span><div><p className="font-bold text-white text-[15px] sm:text-base leading-tight">{f.t}</p><p className="font-serif italic text-[#f5e6b8]/90 text-[13px] sm:text-sm">{f.d}</p></div></div>
              ))}
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-[#ffe9a8]/80 bg-gradient-to-b from-[#1a1505] to-black backdrop-blur p-6 sm:p-7 text-center shadow-[0_0_30px_rgba(212,175,55,0.25)]">
            <p className="text-[11px] tracking-[4px] text-[#ffe9a8] font-bold">◆ OUR WORD ◆</p>
            <p className="font-serif italic text-[#f5e6b8] text-xl sm:text-3xl mt-3 leading-snug">Built With Honour.<br />Delivered With Pride.</p>
            <p className="text-white/70 text-[13px] sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">If it doesn&apos;t work, we fix it. If you don&apos;t understand, we guide you. That is the Brave Bear way - yesterday, today, and always.</p>
          </div>
          <a href={whatsapp("Hi Brave Bear Host! I'm ready to begin. Let's build my story!")} target="_blank" className="block mt-8 rounded-xl bg-gradient-to-b from-[#ffe9a8] via-[#d4af37] to-[#a67c00] border-2 border-[#ffe9a8] text-center py-5 px-4 shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition">
            <span className="block text-black font-black text-lg sm:text-2xl tracking-wide">Begin Your Story With Us</span>
            <span className="block font-serif italic text-black/70 text-[13px] sm:text-sm mt-1">Your vision, crafted into something timeless.</span>
          </a>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href="tel:+27633866109" aria-label="Call" className="w-12 h-12 rounded-full bg-black border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></a>
            <a href="mailto:bernardmaleo863@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#ffe9a8] to-[#d4af37] border-2 border-[#ffe9a8] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 transition"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg></a>
          </div>
          <p className="text-center text-[11px] tracking-[3px] text-yellow-100/50 mt-3 font-serif italic">Tap to Call &nbsp;•&nbsp; Tap to Email</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[12px] font-bold">
            <a href="#services" className="text-[#ffe9a8]/90 hover:text-white">Services</a><span className="text-white/20">•</span>
            <a href="#custom-website" className="text-[#ffe9a8]/90 hover:text-white">Custom Website</a><span className="text-white/20">•</span>
            <a href="#booking" className="text-[#ffe9a8]/90 hover:text-white">Booking</a><span className="text-white/20">•</span>
            <a href="#hosting" className="text-[#ffe9a8]/90 hover:text-white">Hosting</a><span className="text-white/20">•</span>
            <a href={whatsapp("Hi Brave Bear Host! Let's talk")} target="_blank" className="text-green-400 hover:text-green-300">WhatsApp Us</a>
          </div>
          <p className="text-center font-serif italic text-[#f5e6b8]/60 text-[12px] mt-4">Brave Bear Host © 2026 • Strong Website. Smart System.</p>
        </div>
      </div>
    </div>
  );
}