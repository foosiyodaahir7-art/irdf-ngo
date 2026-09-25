'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronRight,
  HeartHandshake,
  Menu,
  Moon,
  Quote,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const programs = [
  { icon: '◒', title: 'Food assistance', text: 'Nutritious food and essential supplies for families facing hunger.', color: 'bg-[#fff4eb]' },
  { icon: '⌂', title: 'Shelter & emergency relief', text: 'Rapid support and safe spaces when crisis changes everything.', color: 'bg-[#fff4eb]' },
  { icon: '✦', title: 'Education support', text: 'Opening doors to learning, dignity, and a more hopeful future.', color: 'bg-[#fff4eb]' },
  { icon: '≈', title: 'Water & sanitation', text: 'Clean water and healthy communities that can thrive.', color: 'bg-[#fff4eb]' },
]

const stories = [
  { image: '/images/somali-water-well.png', tag: 'Field update', title: 'Clean water brings health, dignity, and hope' },
  { image: '/images/somali-food-distribution.png', tag: 'Community story', title: 'Sharing food, strengthening families, restoring dignity' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [amount, setAmount] = useState('50')

  return (
    <main className={`min-h-screen bg-[#ffffff] text-[#222222] theme-surface ${darkMode ? 'dark-mode' : ''}`}>
      <button type="button" onClick={() => setDarkMode(!darkMode)} className="fixed bottom-5 right-5 z-50 grid size-11 place-items-center rounded-full border border-[#eeeeee] bg-[#ffffff] text-[#222222] shadow-lg transition hover:border-[#E76F24] dark-toggle theme-inverse theme-border" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <div className="bg-[#222222] px-5 py-2.5 text-center text-xs tracking-[0.16em] text-[#e4ece6] uppercase">Every person deserves a life of dignity and possibility.</div>
      <header className="sticky top-0 z-30 border-b border-[#eeeeee]/80 bg-[#ffffff]/95 backdrop-blur-md theme-surface theme-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Imaan Relief and Development Foundation home">
            <span className="grid size-10 place-items-center rounded-full bg-[#E76F24] text-[#ffffff]"><HeartHandshake size={21} strokeWidth={1.8} /></span>
            <span className="max-w-[150px] text-sm leading-[1.1] font-semibold tracking-[0.05em] uppercase">Imaan Relief <span className="font-normal">&amp; Development Foundation</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Main navigation">
            {['About us', 'Our work', 'Stories', 'Get involved'].map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition-colors hover:text-[#E76F24]">{item}</a>)}
            <a href="#contact" className="flex items-center gap-1">Contact <ArrowUpRight size={15} /></a>
          </nav>
          <div className="hidden items-center gap-3 lg:flex"><a href="#admin" className="px-3 py-2 text-sm font-medium">Admin login</a><a href="#donate" className="rounded-full bg-[#E76F24] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c65312]">Support our work <ArrowUpRight className="ml-1 inline" size={15} /></a></div>
          <button className="rounded-full p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#eeeeee] px-5 py-4 lg:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4 text-sm font-medium">{['About us', 'Our work', 'Stories', 'Get involved', 'Contact'].map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}<a onClick={() => setMenuOpen(false)} href="#donate" className="mt-1 rounded-full bg-[#E76F24] px-5 py-3 text-center font-semibold text-white">Support our work</a></div></nav>}
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <p className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#E76F24] uppercase"><span className="h-px w-8 bg-[#E76F24]" /> Rooted in compassion</p>
            <h1 className="max-w-xl text-5xl leading-[0.98] font-semibold tracking-[-0.045em] sm:text-6xl lg:text-[76px]">Together, we make <em className="font-serif font-normal text-[#E76F24]">hope</em> possible.</h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[#555555]">Imaan Relief &amp; Development Foundation partners with communities to create lasting change, restore dignity, and build a kinder future for everyone.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#donate" className="rounded-full bg-[#E76F24] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c65312]">Make a difference <ArrowUpRight className="ml-2 inline" size={16} /></a><a href="#our-work" className="flex items-center gap-2 px-3 py-3 text-sm font-semibold">See our work <ChevronRight size={17} /></a></div>
            <div className="mt-12 flex items-center gap-3 border-t border-[#eeeeee] pt-5"><div className="flex -space-x-2"><img className="size-8 rounded-full border-2 border-[#ffffff] object-cover" src="/images/somali-portraits.png" alt="Community member" /><img className="size-8 rounded-full border-2 border-[#ffffff] object-cover" src="/images/somali-portraits.png" alt="Community member" /><img className="size-8 rounded-full border-2 border-[#ffffff] object-cover" src="/images/somali-portraits.png" alt="Community member" /></div><span className="text-xs text-[#555555]">People-powered change, one community at a time.</span></div>
          </div>
          <div className="relative"><div className="absolute -right-8 -top-8 size-40 rounded-full border border-[#E76F24]/30" /><div className="absolute -bottom-5 -left-5 z-10 hidden rounded-2xl bg-[#E76F24] p-5 shadow-xl sm:block"><Sparkles size={20} /><p className="mt-3 max-w-[130px] text-sm leading-5 font-semibold">Care is a form of action.</p></div><img className="aspect-[0.9] w-full rounded-[2rem] object-cover lg:aspect-[1.02]" src="/images/somali-community.png" alt="Children smiling together outdoors" /><div className="absolute bottom-5 right-5 rounded-xl bg-[#ffffff]/90 px-4 py-3 backdrop-blur"><p className="text-xs text-[#555555]">Our approach</p><p className="text-sm font-semibold">Listen. Act. Sustain.</p></div></div>
        </div>
      </section>

      <section id="about-us" className="border-y border-[#eeeeee] bg-[#ffffff] px-5 py-16 lg:px-8 lg:py-20 theme-surface theme-border"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><div><p className="eyebrow">Who we are</p><h2 className="section-title mt-4">Good change starts with <em>good listening.</em></h2></div><div><p className="max-w-xl text-lg leading-8 text-[#555555]">We are a humanitarian and development organization working alongside people experiencing hardship. Our work is locally led, transparent, and focused on what communities say they need most.</p><a href="#about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E76F24]">Learn about Imaan Relief <ArrowUpRight size={16} /></a></div></div></section>

      <section id="our-work" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">What we do</p><h2 className="section-title mt-4">Practical help. <em>Lasting impact.</em></h2></div><a href="#programs" className="flex items-center gap-2 text-sm font-semibold">Explore all programs <ArrowUpRight size={16} /></a></div><div id="programs" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{programs.map((program) => <article key={program.title} className={`rounded-2xl p-6 ${program.color} transition hover:-translate-y-1`}><span className="text-3xl font-serif">{program.icon}</span><h3 className="mt-10 text-lg font-semibold">{program.title}</h3><p className="mt-3 text-sm leading-6 text-[#555555]">{program.text}</p><a href="#donate" className="mt-6 inline-flex items-center gap-1 text-xs font-semibold">Learn more <ArrowUpRight size={14} /></a></article>)}</div></section>

      <section className="bg-[#222222] px-5 py-16 text-[#ffffff] lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]"><div><p className="eyebrow text-[#E76F24]">A note from our team</p><Quote className="mt-8 text-[#E76F24]" size={42} /><blockquote className="mt-4 max-w-lg text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">“When people are given the tools, trust, and space to lead, change becomes something we build together.”</blockquote><p className="mt-6 text-sm text-[#b7c6be]">— Imaan Relief &amp; Development Foundation</p></div><div className="grid grid-cols-2 gap-x-5 gap-y-10 self-end border-t border-[#406057] pt-8 sm:grid-cols-4 lg:border-t-0 lg:pt-0">{[['00', 'People reached'], ['00', 'Projects completed'], ['00', 'Communities supported'], ['00', 'Volunteers']].map(([num, label]) => <div key={label}><p className="text-4xl font-semibold tracking-[-0.04em] text-[#E76F24]">{num}</p><p className="mt-2 text-sm leading-5 text-[#b7c6be]">{label}</p></div>)}</div></div></div></section>

      <section id="stories" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="flex items-end justify-between"><div><p className="eyebrow">Stories from the field</p><h2 className="section-title mt-4">A closer look at <em>what matters.</em></h2></div><a href="#all-stories" className="hidden items-center gap-2 text-sm font-semibold sm:flex">View all stories <ArrowUpRight size={16} /></a></div><div className="mt-10 grid gap-6 md:grid-cols-2">{stories.map((story) => <article key={story.title} className="group"><div className="overflow-hidden rounded-2xl"><img className="aspect-[1.65] w-full object-cover transition duration-500 group-hover:scale-105" src={story.image} alt="" /></div><p className="mt-5 text-xs font-semibold tracking-[0.16em] text-[#E76F24] uppercase">{story.tag}</p><h3 className="mt-2 max-w-lg text-2xl leading-tight font-semibold tracking-[-0.02em]">{story.title}</h3><a href="#story" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Read story <ArrowUpRight size={15} /></a></article>)}</div></section>

      <section id="get-involved" className="relative overflow-hidden bg-[#E76F24] px-5 py-16 lg:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="eyebrow">Your support matters</p><h2 className="mt-4 max-w-2xl text-4xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl">There are many ways to stand <em className="font-serif font-normal">with</em> a community.</h2><p className="mt-5 max-w-lg leading-7 text-[#5d522d]">Whether you give, volunteer, partner, or simply share our work, your support helps create a future where no one is left behind.</p></div><div id="donate" className="rounded-2xl bg-[#ffffff] p-6 shadow-lg sm:p-8"><p className="text-xs font-semibold tracking-[0.16em] text-[#E76F24] uppercase">Make a contribution</p><h3 className="mt-2 text-2xl font-semibold">Give where it matters most.</h3><div className="mt-6 grid grid-cols-4 gap-2">{['25', '50', '100', '250'].map((value) => <button key={value} onClick={() => setAmount(value)} className={`rounded-lg border py-3 text-sm font-semibold transition ${amount === value ? 'border-[#E76F24] bg-[#E76F24] text-white' : 'border-[#eeeeee] hover:border-[#E76F24]'}`}>${value}</button>)}</div><div className="mt-3 flex items-center rounded-lg border border-[#eeeeee] px-4"><span className="text-sm text-[#555555]">$</span><input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-transparent px-2 py-3 text-sm outline-none" aria-label="Donation amount" inputMode="numeric" /></div><button className="mt-4 w-full rounded-full bg-[#222222] py-3.5 text-sm font-semibold text-white transition hover:bg-[#333333]">Continue to give <ArrowUpRight className="ml-1 inline" size={15} /></button><p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-[#555555]"><ShieldCheck size={14} /> Your information is always handled with care.</p></div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-10 rounded-2xl bg-[#fff4eb] p-8 sm:p-12 theme-card lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="eyebrow">Stay connected</p><h2 className="section-title mt-4">Let&apos;s make room for <em>more good.</em></h2><p className="mt-5 max-w-md leading-7 text-[#555555]">Have a question, an idea, or want to work with us? We&apos;d love to hear from you.</p><a href="mailto:hello@imaanrelief.org" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">hello@imaanrelief.org <ArrowUpRight size={16} /></a></div><div className="flex flex-wrap gap-3 lg:justify-end"><a href="#volunteer" className="rounded-full bg-[#222222] px-5 py-3 text-sm font-semibold text-white">Volunteer with us</a><a href="#partner" className="rounded-full border border-[#222222] px-5 py-3 text-sm font-semibold">Partner with us</a></div></div></section>

      <footer className="bg-[#222222] px-5 py-12 text-[#ffffff] lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 border-b border-[#406057] pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-[#E76F24]"><HeartHandshake size={18} /></span><span className="text-sm font-semibold tracking-[0.05em] uppercase">Imaan Relief</span></div><p className="mt-5 max-w-xs text-sm leading-6 text-[#b7c6be]">Imaan Relief &amp; Development Foundation works with communities to create a more just and hopeful world.</p></div><div><p className="footer-heading">Explore</p><div className="mt-4 flex flex-col gap-3 text-sm text-[#b7c6be]"><a href="#about-us">About us</a><a href="#our-work">Our programs</a><a href="#stories">Stories</a></div></div><div><p className="footer-heading">Get involved</p><div className="mt-4 flex flex-col gap-3 text-sm text-[#b7c6be]"><a href="#donate">Donate</a><a href="#volunteer">Volunteer</a><a href="#partner">Partner</a></div></div><div><p className="footer-heading">Connect</p><div className="mt-4 flex gap-3 text-xs font-semibold text-[#b7c6be]"><a href="#facebook" aria-label="Facebook">FB</a><a href="#instagram" aria-label="Instagram">IG</a><a href="#linkedin" aria-label="LinkedIn">LI</a><a href="#youtube" aria-label="YouTube">YT</a></div></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-xs text-[#8fa9a0] sm:flex-row"><p>© 2026 Imaan Relief &amp; Development Foundation. Placeholder content for review.</p><p>Built on trust, guided by dignity.</p></div></div></footer>
    </main>
  )
}
