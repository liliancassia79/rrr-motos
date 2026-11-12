import React, { useState } from 'react';
import {
  ArrowRight,
  Bike,
  CheckCircle2,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Testimonials } from './components/Testimonials';

const services = [
  {
    icon: Wrench,
    title: 'Revisão completa',
    text: 'Diagnóstico detalhado e manutenção preventiva para sua moto rodar sempre com segurança.',
  },
  {
    icon: Bike,
    title: 'Mecânica especializada',
    text: 'Serviços de motor, freios, suspensão, injeção eletrônica e transmissão.',
  },
  {
    icon: Sparkles,
    title: 'Estética e cuidado',
    text: 'Lavagem técnica, polimento e acabamento para devolver o brilho à sua máquina.',
  },
];

const advantages = [
  'Profissionais experientes',
  'Peças e produtos de qualidade',
  'Orçamento transparente',
  'Prazo combinado e respeitado',
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container flex h-24 items-center justify-between">
          <a href="#inicio" aria-label="RRR Motos - início">
            <img src="/logo/novalogorrr.png" alt="RRR Motos" className="logo-header h-11 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex" aria-label="Navegação principal">
            <a className="transition hover:text-orange-400" href="#servicos">Serviços</a>
            <a className="transition hover:text-orange-400" href="#sobre">Sobre nós</a>
            <a className="transition hover:text-orange-400" href="#depoimentos">Depoimentos</a>
            <a className="transition hover:text-orange-400" href="#contato">Contato</a>
          </nav>
          <button
            className="rounded-lg border border-white/10 p-2 text-gray-200 md:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu size={22} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-black/95 px-5 py-5 md:hidden" aria-label="Navegação mobile">
            <div className="container flex flex-col gap-5 text-sm text-gray-300">
              {[
                ['#servicos', 'Serviços'],
                ['#sobre', 'Sobre nós'],
                ['#depoimentos', 'Depoimentos'],
                ['#contato', 'Contato'],
              ].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="transition hover:text-orange-400">{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative isolate flex min-h-[640px] items-center border-b border-white/5 bg-[linear-gradient(115deg,#050505_35%,#120d09)] pt-24">
          <div className="container relative grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
                Paixão por motos.
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">Excelência em cada detalhe.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                Na RRR Motos, sua máquina recebe cuidado de quem entende e vive o motociclismo. Manutenção honesta, serviço preciso e atendimento de verdade.
              </p>
              <div className="mt-8">
                <a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-bold text-black transition hover:bg-orange-400">
                  Agende sua revisão <ArrowRight size={18} />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="text-orange-500" size={17} /> Atendimento especializado e orçamento transparente
              </div>
            </div>
            <div className="relative hidden min-h-[360px] lg:block">
              <div className="absolute inset-20 rounded-full border border-orange-400/15 bg-orange-500/[0.03]" />
              <div className="absolute right-8 top-16 rotate-6 text-[10rem] font-black italic text-white/[0.03]">RRR</div>
              <div className="absolute bottom-16 right-10 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur">
                <p className="text-3xl font-black text-orange-400">10+</p>
                <p className="text-sm text-gray-400">anos cuidando de motos</p>
              </div>
              <div className="absolute left-16 top-28 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-transparent">
                <Bike size={150} strokeWidth={0.7} className="text-orange-200" />
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-[#080808] py-24">
          <div className="container">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">O que fazemos</p>
              <h2 className="text-4xl font-black sm:text-5xl">Tudo para sua moto entregar o máximo.</h2>
              <p className="mt-5 text-gray-400">Do diagnóstico ao acabamento, trabalhamos para que você aproveite a estrada sem preocupações.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {services.map(({ icon: Icon, title, text }) => (
                <article key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 transition hover:-translate-y-1 hover:border-orange-500/50">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-black">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-400">{text}</p>
                  <a href="#contato" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-orange-400">Saiba mais <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="border-y border-white/5 bg-black py-24">
          <div className="container grid items-center gap-14 lg:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-orange-500/20 bg-[radial-gradient(circle_at_50%_30%,rgba(234,88,12,0.28),transparent_50%),#14100d]">
              <div className="absolute inset-8 rounded-2xl border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/logo/novalogorrr.png" alt="" className="w-4/5 opacity-90" />
              </div>
              <div className="absolute bottom-6 left-6 rounded-xl bg-black/70 px-4 py-3 text-sm text-gray-300 backdrop-blur">
                <span className="font-bold text-orange-400">RRR Motos</span> · confiança na pista
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Por que a RRR?</p>
              <h2 className="text-4xl font-black sm:text-5xl">Mais que uma oficina. Um parceiro para sua jornada.</h2>
              <p className="mt-6 leading-relaxed text-gray-400">A gente sabe que sua moto não é apenas um veículo. É liberdade, trabalho, lazer e momentos que ficam na memória. Por isso, cada serviço é feito com transparência e atenção de ponta a ponta.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {advantages.map((advantage) => <li key={advantage} className="flex items-center gap-3 text-gray-200"><CheckCircle2 size={19} className="shrink-0 text-orange-500" />{advantage}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="depoimentos">
          <Testimonials />
        </section>

        <section id="contato" className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-amber-500 py-20 text-black">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[40px] border-black/5" />
          <div className="container relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-black/60">Vamos conversar?</p>
              <h2 className="max-w-2xl text-4xl font-black sm:text-5xl">Sua próxima aventura começa com uma moto em dia.</h2>
              <p className="mt-5 max-w-xl text-lg text-black/70">Entre em contato, conte o que sua moto precisa e receba um atendimento rápido.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 font-bold text-white transition hover:bg-gray-800"><MessageCircle size={20} /> Chamar no WhatsApp</a>
              <a href="tel:+5500000000000" className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-black/30 px-7 py-3 font-bold transition hover:bg-black/10"><Phone size={18} /> (00) 00000-0000</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#080808] py-10">
        <div className="container flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <img src="/logo/novalogorrr.png" alt="RRR Motos" className="logo-header h-12 w-auto" />
            <p className="mt-3 text-sm text-gray-500">Cuidando da sua moto como se fosse nossa.</p>
          </div>
          <div className="flex items-center gap-5 text-gray-400">
            <span className="flex items-center gap-2 text-sm"><Clock3 size={16} className="text-orange-500" /> Seg a Sex · 8h às 18h</span>
            <a href="#contato" aria-label="Instagram" className="transition hover:text-orange-400"><Instagram size={20} /></a>
            <a href="#contato" aria-label="Localização" className="transition hover:text-orange-400"><MapPin size={20} /></a>
          </div>
        </div>
        <div className="container mt-8 border-t border-white/5 pt-6 text-center text-xs text-gray-600">© 2026 RRR Motos. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
