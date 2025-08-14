'use client';

import { useState, useEffect } from 'react';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void; }) => (
  <a href={href} onClick={onClick} className="block md:inline-block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">{children}</a>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Lůca - Profesionální úklidové služby v Praze';

    const faviconSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="20" fill="#2563eb"></rect>
        <text x="50" y="72" font-size="60" font-family="Arial, sans-serif" font-weight="bold" fill="white" text-anchor="middle">L</text>
      </svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '#sluzby', label: 'Služby' },
    { href: '#cenik', label: 'Ceník' },
    { href: '#reference', label: 'Reference' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const services = [
    { title: 'Pravidelný úklid domácností', description: 'Udržujte váš domov neustále čistý bez starostí. Pravidelný úklid dle vašich potřeb a harmonogramu.' },
    { title: 'Firemní a kancelářské prostory', description: 'Zajistíme reprezentativní a zdravé pracovní prostředí pro vás i vaše zaměstnance.' },
    { title: 'Mytí oken a prosklených ploch', description: 'Dokonale čistá okna a výlohy pro bezchybný výhled a profesionální vzhled.' },
    { title: 'Čištění koberců a čalounění', description: 'Hloubkové strojové čištění, které odstraní nečistoty, alergeny a oživí vzhled textilií.' },
    { title: 'Úklid po rekonstrukci', description: 'Zbavíme vás stavebního prachu a nečistot po malování či rekonstrukci rychle a efektivně.' },
    { title: 'Doplňková služba: Žehlení', description: 'Ušetříme vám čas. Svěřte nám vaše prádlo a my se postaráme o jeho dokonalé vyžehlení.' },
  ];

  const benefits = [
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/star.svg', title: 'Zkušený personál', description: 'Náš tým je pečlivě vybraný, proškolený a prověřený.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/leaf.svg', title: 'Eko prostředky', description: 'Používáme šetrné a ekologické čisticí prostředky bezpečné pro vaši rodinu i mazlíčky.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/shield-check.svg', title: 'Pojištění odpovědnosti', description: 'Jsme plně pojištěni pro případ jakékoliv neočekávané události.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/user-heart.svg', title: 'Individuální přístup', description: 'Každému klientovi se věnujeme s maximální péčí a přizpůsobíme se jeho potřebám.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/calendar-time.svg', title: 'Časová flexibilita', description: 'Plánujeme úklid podle vašeho harmonogramu, včetně víkendů a večerních hodin.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/thumb-up.svg', title: 'Garance spokojenosti', description: 'Naší prioritou je vaše spokojenost. Kvalita odvedené práce je pro nás závazkem.' },
  ];
  
  const testimonials = [
      { quote: 'S úklidovými službami od Lůcy jsem maximálně spokojená. Vše je vždy perfektně čisté a voňavé. Mohu jen doporučit!', author: 'Jana N., Praha 5' },
      { quote: 'Pro naši firmu zajišťují pravidelný úklid kanceláří. Komunikace je skvělá a na jejich spolehlivost se můžeme vždy spolehnout.', author: 'Petr S., manažer ABC s.r.o.' },
      { quote: 'Využili jsme úklid po rekonstrukci bytu a výsledek byl nad naše očekávání. Ušetřili nám spoustu práce a stresu.', author: 'Manželé Dvořákovi, Praha' },
  ];

  return (
    <div className="bg-white text-slate-800 antialiased">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-blue-600">Lůca Úklid</a>
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
            </nav>
            <a href="#kontakt" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">Nezávazná poptávka</a>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Otevřít menu</span>
                <img src={isMenuOpen ? 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg' : 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg'} className="h-6 w-6" alt="Menu icon" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => <NavLink key={link.href} href={link.href} onClick={closeMenu}>{link.label}</NavLink>)}
            </div>
             <div className="pt-4 pb-3 border-t border-slate-200">
                <div className="px-5">
                    <a href="#kontakt" onClick={closeMenu} className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">Nezávazná poptávka</a>
                </div>
             </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">Profesionální úklid s osobním přístupem</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">Poskytujeme spolehlivé úklidové služby pro domácnosti, firmy a komerční prostory v Praze a okolí. Dopřejte si dokonalou čistotu bez námahy.</p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#kontakt" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">Domluvit úklid</a>
              <a href="#sluzby" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-transform transform hover:scale-105 border border-slate-300">Naše služby</a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="proc-nas" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Proč si vybrat právě nás?</h2>
                    <p className="mt-4 text-lg text-slate-600">Zakládáme si na hodnotách, které zaručují vaši maximální spokojenost.</p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((item) => (
                        <div key={item.title} className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                                    <img src={item.icon} className="h-6 w-6" alt="" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                <p className="mt-1 text-slate-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Komplexní úklidové služby</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Nabízíme širokou škálu služeb přizpůsobených na míru vašim individuálním potřebám.</p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="cenik" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Transparentní ceník</h2>
                        <p className="mt-4 text-lg text-slate-600">Nabízíme férové ceny za profesionálně odvedenou práci. Pro přesnou kalkulaci nás neváhejte kontaktovat.</p>
                    </div>
                    <div className="mt-10 bg-slate-50 rounded-lg p-8 border border-slate-200">
                        <ul className="space-y-4">
                            <li className="flex justify-between items-baseline"><span className="text-slate-700">Úklid domácnosti</span><span className="font-bold text-blue-700">od 350 Kč / hod</span></li>
                            <li className="flex justify-between items-baseline border-t border-slate-200 pt-4"><span className="text-slate-700">Úklid firem</span><span className="font-bold text-blue-700">od 400 Kč / hod</span></li>
                            <li className="flex justify-between items-baseline border-t border-slate-200 pt-4"><span className="text-slate-700">Mytí oken</span><span className="font-bold text-blue-700">od 30 Kč / m²</span></li>
                            <li className="flex justify-between items-baseline border-t border-slate-200 pt-4"><span className="text-slate-700">Čištění koberců</span><span className="font-bold text-blue-700">od 40 Kč / m²</span></li>
                        </ul>
                        <p className="mt-6 text-sm text-center text-slate-500">Uvedené ceny jsou orientační a bez DPH. Finální cena je stanovena po dohodě dle rozsahu práce.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="reference" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Spokojení klienti</h2>
                    <p className="mt-4 text-lg text-slate-600">Naše nejlepší vizitka je dobře odvedená práce a slova našich zákazníků.</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 flex flex-col">
                            <p className="text-slate-600 italic flex-grow">\"{testimonial.quote}\"</p>
                            <p className="mt-4 font-semibold text-slate-800 text-right">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Kontaktujte nás</h2>
                    <p className="mt-4 text-lg text-slate-600">Máte dotaz nebo si přejete nezávaznou kalkulaci? Ozvěte se nám!</p>
                </div>
                <div className="mt-12 max-w-lg mx-auto bg-slate-50 p-8 rounded-lg border border-slate-200">
                     <div className="flex flex-col items-center space-y-4 text-center sm:items-start sm:text-left">
                        <div className="flex items-center text-slate-700">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/user-circle.svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" alt="Ikonka jména"/>
                            <span className="text-lg">Lucie Králová - Lůca úklid</span>
                        </div>
                        <div className="flex items-center text-slate-700">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" alt="Ikonka adresy"/>
                            <span className="text-lg">Na dolinách 188/46, 147 00 Praha 4</span>
                        </div>
                         <div className="flex items-center text-slate-700">
                             <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" alt="Ikonka telefonu"/>
                             <a href="tel:+420721200002" className="text-lg hover:text-blue-600">+420 721 200 002</a>
                        </div>
                         <div className="flex items-center text-slate-700">
                             <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/at.svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" alt="Ikonka emailu"/>
                             <a href="mailto:info@lucka.cz" className="text-lg hover:text-blue-600">info@lucka.cz</a>
                        </div>
                         <div className="flex items-center text-slate-700">
                             <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/id.svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" alt="Ikonka IČO"/>
                             <span className="text-lg">IČO: 05244583</span>
                         </div>
                         <p className="pt-4 text-slate-500 w-full text-center">Jsme tu pro Vás Po-Pá, 8:00 - 18:00.</p>
                     </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} Lůca úklid. Všechna práva vyhrazena.</p>
            <p className="mt-2 text-sm text-slate-400">
                Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">DigitalFusion</a>
            </p>
        </div>
      </footer>
    </div>
  );
}
