import { motion, useScroll, useTransform } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Globe, 
  ArrowUpRight, 
  Smartphone, 
  Package, 
  Star,
  Menu,
  X,
  CreditCard,
  Truck,
  LayoutGrid,
  Headphones,
  MapPin,
  Watch,
  Zap,
  Tablet,
  Laptop,
  MessageCircle
} from 'lucide-react';
import { useState, useRef } from 'react';

// --- Data ---

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
    title: "Compra Segura",
    description: "Contrato assinado antes do pagamento com validade jurídica garantida.",
    size: "large"
  },
  {
    icon: <FileText className="w-8 h-8 text-brand-gold" />,
    title: "Nota Fiscal",
    description: "Todos os nossos aparelhos acompanham NF-e oficial.",
    size: "small"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-brand-gold" />,
    title: "Garantia Total",
    description: "1 ano de garantia Apple para sua total tranquilidade.",
    size: "small"
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-gold" />,
    title: "Especialista Importados",
    description: "Curadoria exclusiva dos melhores aparelhos diretamente dos EUA.",
    size: "medium"
  },
  {
    icon: <CreditCard className="w-8 h-8 text-brand-gold" />,
    title: "Facilidade de Pagamento",
    description: "Parcelamento em até 18x no cartão ou desconto no PIX.",
    size: "medium"
  }
];

const testimonials = [
  {
    name: "Ricardo Santos",
    text: "Atendimento impecável. O contrato me deu a segurança que eu precisava para fazer o investimento.",
    role: "iPhone 15 Pro Max"
  },
  {
    name: "Mariana Lima",
    text: "Chegou super rápido e tudo lacrado. A NF-e veio no meu email antes mesmo do aparelho chegar.",
    role: "iPhone 14 Pro"
  },
  {
    name: "Felipe Almeida",
    text: "Melhor preço de importados que já encontrei, com a segurança de uma loja física.",
    role: "Apple Watch Ultra"
  }
];

const productsList = [
  { title: "iPhones", subtitle: "Lacrados Com 1 Ano De Garantia Apple", icon: <Smartphone className="w-8 h-8" /> },
  { title: "MacBooks", subtitle: "Lacrados Com 1 Ano De Garantia Apple", icon: <Laptop className="w-8 h-8" /> },
  { title: "iPads", subtitle: "Lacrados Com 1 Ano De Garantia Apple", icon: <Tablet className="w-8 h-8" /> },
  { title: "Apple Watch's", subtitle: "Lacrados Com 1 Ano De Garantia Apple", icon: <Watch className="w-8 h-8" /> },
  { title: "AirPods", subtitle: "Lacrados Com 1 Ano De Garantia Apple", icon: <Headphones className="w-8 h-8" /> },
  { title: "AirTags", subtitle: "Lacradas Com 1 Ano De Garantia Apple", icon: <MapPin className="w-8 h-8" /> },
  { title: "Acessórios", subtitle: "Toda a linha original Apple", icon: <LayoutGrid className="w-8 h-8" /> },
  { title: "Cabos E Fontes", subtitle: "Originalidade e performance", icon: <Zap className="w-8 h-8" /> },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/40 backdrop-blur-md border-b border-white/5 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center text-white">
      <div className="flex items-center gap-2">
        <div id="nav-logo" className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-tr from-white to-gray-500 rounded-lg flex items-center justify-center">
            <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-dark-bg" />
          </div>
          IPHONE LUXE
        </div>
      </div>

      {/* Desktop Links */}
      <div id="nav-links" className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
        <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
        <a href="#sobre" className="hover:text-white transition-colors">Garantia</a>
        <a href="#depoimentos" className="hover:text-white transition-colors">Sobre Nós</a>
      </div>

      <button className="hidden md:block px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all shadow-lg shadow-white/10">
        Falar com Consultor
      </button>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl p-6 border-t border-white/10 flex flex-col gap-4"
        >
          <a href="#diferenciais" onClick={() => setIsOpen(false)}>Diferenciais</a>
          <a href="#produtos" onClick={() => setIsOpen(false)}>Produtos</a>
          <a href="#sobre" onClick={() => setIsOpen(false)}>Garantia</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)}>Sobre Nós</a>
          <button className="bg-white text-black px-6 py-3 rounded-xl font-bold w-full leading-none">
            Falar com Consultor
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen md:h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden px-6 md:px-12 pt-24 md:pt-20">
      <div className="max-w-xl space-y-6 relative z-10 text-center md:text-left">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[90%] md:text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4 scale-90 md:scale-100">
            Especialista em Apple Importado
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight leading-[1] md:leading-[0.9] text-white mb-6">
            O poder do <br /><span className="font-black italic">Extraordinário.</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mb-8 mx-auto md:mx-0">
            Importação direta com segurança jurídica e garantia global. Encontre o iPhone dos seus sonhos com quem entende de exclusividade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl text-sm"
            >
              Ver Catálogo
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="px-8 py-4 border border-white/20 hover:bg-white/5 font-bold rounded-xl text-sm"
            >
              Review de Clientes
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="relative flex-1 flex justify-center items-center h-[400px] md:h-full -mt-6 md:mt-0">
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop" 
            alt="iPhone 15 Pro Max" 
            className="h-[350px] sm:h-[450px] md:h-[520px] w-auto rotate-[-12deg] object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 pointer-events-none"></div>
      </div>

      {/* Background Social Proof Bar */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-0 w-full flex justify-center px-6 md:px-12 z-10"
      >
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-24 opacity-30 text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase">
          <span>iPhone 15 Pro Max</span>
          <span>Apple Watch Ultra</span>
          <span>AirPods Pro</span>
          <span className="hidden sm:inline">MacBook Pro M3</span>
        </div>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-10 md:gap-20 text-2xl md:text-4xl font-display font-bold uppercase italic text-white/20"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <span>Segurança Jurídica</span>
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            <span>Nota Fiscal Eletrônica</span>
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            <span>Importação Premium</span>
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <h2 className="text-4xl md:text-7xl font-serif font-light tracking-tight leading-none text-white text-center md:text-left">
          SEGURANÇA <br /><span className="font-black italic text-brand-gold md:text-white">como prioridade.</span>
        </h2>
        <p className="text-gray-400 max-w-sm text-base md:text-lg text-center md:text-left">Não vendemos apenas tecnologia. Entregamos tranquilidade em cada etapa do seu sonho.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[220px] md:auto-rows-[300px]">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass p-6 md:p-8 flex flex-col justify-between rounded-[2rem] hover:bg-white/[0.08] transition-colors group cursor-default
              ${feature.size === 'large' ? 'md:col-span-12 lg:col-span-7 md:row-span-1' : ''}
              ${feature.size === 'medium' ? 'md:col-span-6 lg:col-span-5' : ''}
              ${feature.size === 'small' ? 'md:col-span-6 lg:col-span-4' : ''}
            `}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
              <div className="text-white group-hover:text-brand-accent transition-colors scale-75 md:scale-100">
                {feature.icon}
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <h2 className="text-4xl md:text-7xl font-serif font-light tracking-tight leading-none text-white text-center md:text-left">
          PRODUTOS QUE <br /><span className="font-black italic">Trabalhamos.</span>
        </h2>
        <p className="text-gray-400 max-w-sm text-base md:text-lg text-center md:text-left">Excelência em cada detalhe. Tecnologia de ponta com garantia oficial Apple.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {productsList.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-white/[0.03] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 hover:bg-white/[0.07] transition-all flex flex-col gap-6"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-brand-accent transition-colors">
              {product.icon}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{product.title}</h3>
              <p className="text-gray-500 text-[10px] md:text-xs font-medium leading-relaxed uppercase tracking-wider">{product.subtitle}</p>
            </div>
            <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-brand-accent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 md:order-1"
        >
          <div className="aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl">
             <img 
               src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2000&auto=format&fit=crop" 
               alt="Apple Premium Experience" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass p-6 md:p-8 rounded-3xl max-w-[200px] md:max-w-xs shadow-2xl">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-brand-gold text-brand-gold" />)}
            </div>
            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">Satisfação</p>
            <p className="text-xl md:text-2xl font-serif font-black italic">100% GARANTIDA</p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="order-1 md:order-2 text-center md:text-left"
        >
          <span className="text-brand-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Especialistas</span>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 md:mb-8 leading-tight text-white">
            CURADORIA <br />
            <span className="font-black italic">SEM IGUAL.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Nascemos com a missão de democratizar o acesso ao que há de melhor no ecossistema Apple, eliminando o medo e a burocracia das compras internacionais.
          </p>
          
          <div className="space-y-6 md:space-y-8 text-left">
            {[
              { title: "Curadoria Rigorosa", desc: "Aparelhos testados e aprovados nos EUA por especialistas." },
              { title: "Envios Seguros", desc: "Logística blindada com seguro total porta a porta." },
              { title: "Suporte VIP", desc: "Consultoria direta para sua melhor escolha técnica." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 group-hover:bg-white/5 flex items-center justify-center transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1 text-white">{item.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 md:mt-12 group flex items-center justify-center md:justify-start gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-brand-accent transition-colors w-full md:w-auto">
            Nossa Proposta de Valor
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <h2 className="text-4xl md:text-7xl font-serif font-light tracking-tight leading-none text-white text-center md:text-left">
            CLIENTES <br /><span className="font-black italic">Satisfeitos.</span>
          </h2>
          <p className="text-gray-400 max-w-sm text-base md:text-lg text-center md:text-left">Depoimentos reais de quem escolheu a experiência IPHONE LUXE.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-md relative group hover:bg-white/[0.08] transition-all"
            >
              <div className="absolute top-8 right-10 text-white/5 group-hover:text-white/10 transition-colors">
                <Smartphone size={60} className="md:w-20 md:h-20" />
              </div>
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-brand-gold" />)}
              </div>
              <p className="text-base md:text-lg italic mb-8 relative z-10 leading-relaxed text-gray-300">"{t.text}"</p>
              <div>
                <p className="font-bold text-lg md:text-xl text-white">{t.name}</p>
                <p className="text-gray-500 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden shadow-3xl"
      >
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="relative z-10">
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Seu Próximo Passo</span>
          <h2 className="text-4xl md:text-8xl font-serif font-light mb-8 md:mb-10 leading-[1] md:leading-[0.9] text-white">
            ELEVE SEU <br /><span className="font-black italic">Padrão.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
            Fale agora com nosso consultor sênior e receba uma proposta exclusiva para o iPhone que você deseja.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 md:px-12 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-gray-200 transition-all shadow-2xl shadow-white/10 w-full sm:w-auto"
          >
            Falar com Consultor
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 text-white transition-all overflow-visible"
    >
      <MessageCircle size={32} />
      <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-dark-bg bg-[#050505] text-white font-sans flex flex-col relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 flex-1">
        <Hero />
        <Marquee />
        <BentoGrid />
        <ProductsSection />
        <AboutSection />
        <Testimonials />
        <CTASection />
      </main>

      <FloatingWhatsApp />
      
      <footer className="relative z-20 px-6 md:px-12 py-10 md:py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-gray-600 uppercase tracking-widest gap-8 md:gap-6 text-center md:text-left">
        <div>Copyright © 2026 Venda de iPhones — Especialista Apple</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-medium">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp Business</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </footer>
    </div>
  );
}
