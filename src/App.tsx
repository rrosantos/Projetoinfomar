import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-tagjnu5zrp";
import imgDavidCourbit9XzyEzPahmiUnsplash1 from "figma:asset/b2a408822b18a7d0b9b7db347db859d884a20b65.png";
import imgHeroTurtle from "figma:asset/8659767cec25a81f3c0d5664ae2e3755efe2c692.png";
import imgTurtle11 from "figma:asset/493be1938fe001c2554d7d9c3a1604e9c1ba290f.png";
import imgMantaRay11 from "figma:asset/36389848d02c2ac45e834c7556903f7ad18fe237.png";
import imgWhale1 from "figma:asset/f5bc07e0a3c338b67c395928782196e74264b87f.png";
import imgEllipse1 from "figma:asset/efec8c94ad291116e35eb32ac63e415aab72ec78.png";
import imgEllipse2 from "figma:asset/8fb0e34bae3a153e7467024562495c1f93523426.png";
import imgEllipse3 from "figma:asset/9211102ff02a6aab11fa3551310050c75ebca7b4.png";
import imgEllipse4 from "figma:asset/3b68ff48f951de7d5e54f20f70e676f04b09cd70.png";
import imgEllipse5 from "figma:asset/8e86a32d288efae59c7794609dc21fabcb82e14f.png";
import imgEllipse6 from "figma:asset/5339631e1d1d20b750c7505705ae611f3eb9091e.png";
import imgEllipse7 from "figma:asset/7960ff8078ddaf2a8df2d581b16a3d6cf36b2059.png";
import { motion, useScroll, useTransform } from "motion/react";
import { toast, Toaster } from "sonner@2.0.3";
import { Menu as MenuIcon, X, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ImpactSection } from "./components/ImpactSection";
import { AnimalCarousel } from "./components/AnimalCarousel";
import { BackToTop } from "./components/BackToTop";
import { FloatingBubbles, SwimmingFish, BackgroundWaves } from "./components/OceanElements";
import { GallerySection } from "./components/GallerySection";
import { PartnersSection } from "./components/PartnersSection";
import { BlogSection } from "./components/BlogSection";
import { FAQSection } from "./components/FAQSection";
import { ScrollColorTransition } from "./components/ScrollColorTransition";
import { useCountUp } from "./hooks/useCountUp";

// Componente de divisor oceânico em forma de onda
function WaveDivider({ flip = false, color = "#168aad" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`} style={{ lineHeight: 0 }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 lg:h-20"
      >
        <path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          opacity=".25"
          fill={color}
        />
        <path 
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
          opacity=".5"
          fill={color}
        />
        <path 
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          fill={color}
        />
      </svg>
    </div>
  );
}

// Componente de botão oceânico reutilizável
interface OceanButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

function OceanButton({ children, onClick, size = 'md', variant = 'primary', fullWidth = false }: OceanButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    sm: 'px-6 py-3 text-base md:px-8 md:py-3 md:text-lg',
    md: 'px-8 py-4 text-lg md:px-10 md:py-4 md:text-xl',
    lg: 'px-10 py-4 text-xl md:px-12 md:py-5 md:text-2xl'
  };

  const gradients = {
    primary: 'linear-gradient(135deg, #168aad 0%, #1e6091 50%, #184e77 100%)',
    secondary: 'linear-gradient(135deg, #52b69a 0%, #168aad 50%, #1e6091 100%)'
  };

  return (
    <motion.button
      className={`relative ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} rounded-full cursor-pointer overflow-hidden backdrop-blur-md border border-white/30`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: gradients[variant],
        boxShadow: isHovered 
          ? '0 8px 32px rgba(22, 138, 173, 0.4), 0 0 20px rgba(82, 182, 154, 0.3)' 
          : '0 4px 16px rgba(22, 138, 173, 0.2)',
        transition: 'box-shadow 0.3s ease'
      }}
    >
      {/* Efeito de vidro (glassmorphism) */}
      <div 
        className="absolute inset-0 bg-white/10 backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)'
        }}
      />
      
      {/* Efeito de onda animado */}
      <motion.div
        className="absolute inset-0 opacity-0"
        animate={{
          opacity: isHovered ? [0, 0.3, 0] : 0,
          scale: isHovered ? [0.5, 1.5] : 0.5,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(217, 237, 146, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Reflexo de luz */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/2 opacity-30"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
          borderRadius: '9999px 9999px 0 0'
        }}
      />
      
      {/* Conteúdo do botão */}
      <div className="relative z-10 font-['Poppins',sans-serif] font-bold text-[#d9ed92] flex items-center justify-center gap-2 whitespace-nowrap">
        {children}
      </div>
    </motion.button>
  );
}

function WaveDecoration({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full ${flip ? 'transform scale-y-[-1]' : ''}`} style={{ height: '320px' }}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1440 400" 
        fill="none" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#168aad', stopOpacity: 0.9 }} />
            <stop offset="40%" style={{ stopColor: '#184e77', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#e2e2e2', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#52b69a', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#168aad', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#e2e2e2', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#d9ed92', stopOpacity: 0.6 }} />
            <stop offset="30%" style={{ stopColor: '#52b69a', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#e2e2e2', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Onda de fundo - mais escura */}
        <motion.path
          d="M0,150 Q360,50 720,150 T1440,150 L1440,400 L0,400 Z"
          fill="url(#waveGradient1)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Onda do meio - média */}
        <motion.path
          d="M0,200 Q360,100 720,200 T1440,200 L1440,400 L0,400 Z"
          fill="url(#waveGradient2)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -15, 0],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Onda da frente - transição para a próxima seção */}
        <motion.path
          d="M0,260 Q360,160 720,260 T1440,260 L1440,400 L0,400 Z"
          fill="url(#waveGradient3)"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: [0, -20, 0],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.4 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
        />
        
        {/* Linha decorativa brilhante no topo */}
        <motion.path
          d="M0,260 Q360,160 720,260 T1440,260"
          stroke="#d9ed92"
          strokeWidth="4"
          fill="none"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{ 
            pathLength: { duration: 2, delay: 0.6 },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="turtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#168aad', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#52b69a', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#d9ed92', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="shellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#184e77', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#168aad', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          <ellipse cx="32" cy="36" rx="18" ry="22" fill="url(#turtleGradient)" />
          <path 
            d="M 32 16 L 42 22 L 42 34 L 32 40 L 22 34 L 22 22 Z" 
            fill="url(#shellGradient)"
            stroke="#d9ed92"
            strokeWidth="1.5"
          />
          <circle cx="32" cy="28" r="4" fill="#52b69a" opacity="0.6" />
          <circle cx="27" cy="25" r="2" fill="#168aad" opacity="0.5" />
          <circle cx="37" cy="25" r="2" fill="#168aad" opacity="0.5" />
          <circle cx="27" cy="31" r="2" fill="#168aad" opacity="0.5" />
          <circle cx="37" cy="31" r="2" fill="#168aad" opacity="0.5" />
          <ellipse cx="18" cy="28" rx="6" ry="10" fill="#52b69a" transform="rotate(-30 18 28)" />
          <ellipse cx="46" cy="28" rx="6" ry="10" fill="#52b69a" transform="rotate(30 46 28)" />
          <ellipse cx="20" cy="46" rx="5" ry="8" fill="#52b69a" transform="rotate(-20 20 46)" />
          <ellipse cx="44" cy="46" rx="5" ry="8" fill="#52b69a" transform="rotate(20 44 46)" />
          <ellipse cx="32" cy="16" rx="7" ry="8" fill="#168aad" />
          <circle cx="29" cy="15" r="1.5" fill="white" />
          <circle cx="35" cy="15" r="1.5" fill="white" />
          <circle cx="29" cy="15" r="0.8" fill="#184e77" />
          <circle cx="35" cy="15" r="0.8" fill="#184e77" />
          <path d="M 32 56 L 30 60 L 32 58 L 34 60 Z" fill="#168aad" />
          <path d="M 2 50 Q 8 48 14 50 T 26 50" stroke="#168aad" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M 38 50 Q 44 48 50 50 T 62 50" stroke="#168aad" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span 
            className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-none"
            style={{ 
              background: 'linear-gradient(135deg, #168aad 0%, #52b69a 50%, #d9ed92 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            INFO
          </span>
          <span className="font-['Poppins',sans-serif] font-light text-2xl md:text-3xl lg:text-4xl text-white leading-none">
            MAR
          </span>
        </div>
        <p className="font-['Inter',sans-serif] text-[8px] md:text-[10px] text-[#d9ed92] tracking-widest uppercase leading-none mt-1">
          Proteção Marinha
        </p>
      </div>
    </div>
  );
}

function Header() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast.info(`Seção "${section}" em desenvolvimento`);
    }
  };

  const handleHelp = () => {
    toast.success("Obrigado por querer ajudar! Redirecionando para página de doação...");
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(22, 138, 173, 0.85) 0%, rgba(24, 78, 119, 0.9) 50%, rgba(82, 182, 154, 0.85) 100%)'
          : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 8px 32px rgba(22, 138, 173, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1) inset' : '0 0 0 rgba(0, 0, 0, 0)',
        border: isScrolled ? '1px solid rgba(217, 237, 146, 0.2)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-5 font-['Inter',sans-serif] font-medium text-white text-lg" role="navigation" aria-label="Menu principal">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`hover:opacity-80 transition-opacity ${activeSection === 'inicio' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Início"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className={`hover:opacity-80 transition-opacity ${activeSection === 'sobre' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('impacto')}
              className={`hover:opacity-80 transition-opacity ${activeSection === 'impacto' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Impacto"
            >
              Impacto
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className={`hover:opacity-80 transition-opacity ${activeSection === 'projetos' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Projetos"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className={`hover:opacity-80 transition-opacity ${activeSection === 'galeria' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Galeria"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('noticias')}
              className={`hover:opacity-80 transition-opacity ${activeSection === 'noticias' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Notícias"
            >
              Notícias
            </button>
          </nav>

          {/* Desktop Help Button */}
          <div className="hidden lg:block">
            <button
              onClick={handleHelp}
              className="px-8 py-3 rounded-full font-['Poppins',sans-serif] font-bold text-lg text-[#003049] bg-[#90E0EF] hover:bg-[#7dd3e8] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Fazer uma doação para a INFOMAR"
            >
              Quero Ajudar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 rounded-2xl p-6 flex flex-col gap-4 font-['Inter',sans-serif] font-medium text-white"
            role="navigation" 
            aria-label="Menu mobile"
            style={{
              background: 'linear-gradient(135deg, rgba(22, 138, 173, 0.9) 0%, rgba(24, 78, 119, 0.95) 50%, rgba(82, 182, 154, 0.9) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(22, 138, 173, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
              border: '1px solid rgba(217, 237, 146, 0.2)'
            }}
          >
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`text-left py-2 hover:opacity-80 transition-opacity ${activeSection === 'inicio' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Início"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className={`text-left py-2 hover:opacity-80 transition-opacity ${activeSection === 'sobre' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('impacto')}
              className={`text-left py-2 hover:opacity-80 transition-opacity ${activeSection === 'impacto' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Impacto"
            >
              Impacto
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className={`text-left py-2 hover:opacity-80 transition-opacity ${activeSection === 'projetos' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Projetos"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className={`text-left py-2 hover:opacity-80 transition-opacity ${activeSection === 'galeria' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Galeria"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('noticias')}
              className={`text-left py-2 hover:opacity-80 transition-opacity ${activeSection === 'noticias' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Notícias"
            >
              Notícias
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`text-left py-2 hover:opacity-80 transition-opacity ${activeSection === 'faq' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção FAQ"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className={`text-left py-2 hover:opacity-80 transition-opacity ${activeSection === 'contato' ? 'opacity-100' : 'opacity-70'}`}
              aria-label="Ir para seção Contato"
            >
              Contato
            </button>
            <button
              onClick={handleHelp}
              className="w-full px-8 py-3 rounded-full font-['Poppins',sans-serif] font-bold text-lg text-[#003049] bg-[#90E0EF] hover:bg-[#7dd3e8] transition-all duration-300"
              aria-label="Fazer uma doação"
            >
              Quero Ajudar
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleSupportNow = () => {
    toast.success("Redirecionando para a página de doação...");
  };

  const handleKnowProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast.info("Conheça nossos projetos de preservação marinha!");
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] overflow-hidden" id="inicio">
      {/* Background Image com Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img 
          alt="Tartaruga marinha nadando sobre vegetação oceânica" 
          className="w-full h-[120%] object-cover object-center"
          src={imgHeroTurtle} 
        />
        {/* Sobreposição azul transparente */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#168aad]/60 via-[#184e77]/40 to-transparent" />
      </motion.div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <WaveDecoration />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 md:px-8 pt-32 md:pt-40 lg:pt-48 pb-32 md:pb-48"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl md:max-w-2xl lg:max-w-3xl"
        >
          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Poppins',sans-serif] font-extrabold text-white text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight"
            style={{
              textShadow: '0 4px 24px rgba(0, 0, 0, 0.5)'
            }}
          >
            Protegendo Hoje Para Existir Amanhã
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-['Inter',sans-serif] text-white/95 text-base md:text-lg lg:text-xl mb-8 leading-relaxed"
            style={{
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)'
            }}
          >
            Trabalhamos todos os dias para proteger os oceanos e garantir que as futuras gerações possam conhecer a riqueza da vida marinha.
          </motion.p>

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={handleSupportNow}
              className="px-8 py-3 rounded-full font-['Poppins',sans-serif] font-bold text-lg text-[#003049] bg-[#90E0EF] hover:bg-[#7dd3e8] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Fazer uma doação para apoiar a INFOMAR"
            >
              Apoiar Agora
            </button>
            <button
              onClick={handleKnowProjects}
              className="px-8 py-3 rounded-full font-['Poppins',sans-serif] font-bold text-lg text-[#003049] bg-[#d9ed92] hover:bg-[#c9dd82] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Conhecer os projetos de conservação marinha"
            >
              Conhecer Projetos
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Componente de estatística com contador animado
function AnimatedStat({ number, label, icon, index }: { number: string; label: string; icon: string; index: number }) {
  const [isInView, setIsInView] = useState(false);
  const numericValue = parseInt(number.replace(/\D/g, ''));
  const suffix = number.replace(/\d/g, '');
  const count = useCountUp(numericValue, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setIsInView(true)}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative rounded-2xl overflow-hidden p-6 md:p-8 text-center cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(22, 138, 173, 0.15) 0%, rgba(82, 182, 154, 0.15) 100%)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(22, 138, 173, 0.3)',
        boxShadow: '0 4px 16px rgba(22, 138, 173, 0.1)'
      }}
    >
      <div className="text-4xl md:text-5xl mb-3 md:mb-4">{icon}</div>
      <div className="font-['Poppins',sans-serif] font-extrabold text-[#184e77] text-3xl md:text-4xl lg:text-5xl mb-2">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <div className="font-['Inter',sans-serif] font-medium text-[#636363] text-sm md:text-base lg:text-lg">
        {label}
      </div>
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(217, 237, 146, 0.2) 0%, transparent 70%)'
        }}
      />
    </motion.div>
  );
}

function AboutSection() {
  const stats = [
    { number: "2500+", label: "Animais Resgatados", icon: "🐢" },
    { number: "18", label: "Projetos Ativos", icon: "🌊" },
    { number: "350+", label: "Voluntários", icon: "👥" },
    { number: "42", label: "Locais Atendidos", icon: "📍" }
  ];

  return (
    <>
    <WaveDivider color="#ffffff" />
    <section className="bg-white py-16 md:py-24 lg:py-32" id="sobre">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16 uppercase"
        >
          Sobre a INFOMAR
        </motion.h2>

        {/* Layout em duas colunas */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
          {/* Coluna da imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[600px]">
              <img 
                alt="Voluntários da INFOMAR realizando limpeza de praia e ações de conservação marinha" 
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1616680214084-22670de1bc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNsZWFudXAlMjB2b2x1bnRlZXJzJTIwYmVhY2h8ZW58MXx8fHwxNzY1MTU3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              />
              {/* Overlay gradient sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#184e77]/40 via-transparent to-transparent" />
              
              {/* Badge decorativo */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/20 rounded-2xl p-4 border border-white/30">
                <p className="font-['Poppins',sans-serif] font-bold text-white text-lg md:text-xl">
                  Protegendo os oceanos desde 2015
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#168aad] text-2xl md:text-3xl lg:text-4xl mb-6">
              Nossa Missão
            </h3>
            <p className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
              A INFOMAR é uma organização não governamental dedicada à proteção e preservação da vida marinha. Trabalhamos incansavelmente para proteger os oceanos e seus habitantes, combatendo a poluição, promovendo a conscientização e desenvolvendo ações concretas para a conservação das espécies marinhas em risco.
            </p>

            <h3 className="font-['Poppins',sans-serif] font-bold text-[#168aad] text-2xl md:text-3xl lg:text-4xl mb-6">
              Nossos Valores
            </h3>
            <ul className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#52b69a] text-2xl flex-shrink-0">•</span>
                <span><strong className="text-[#184e77]">Sustentabilidade:</strong> Ações que respeitam o equilíbrio natural</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#52b69a] text-2xl flex-shrink-0">•</span>
                <span><strong className="text-[#184e77]">Transparência:</strong> Prestação de contas clara com a sociedade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#52b69a] text-2xl flex-shrink-0">•</span>
                <span><strong className="text-[#184e77]">Ciência:</strong> Compromisso com pesquisa e dados concretos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#52b69a] text-2xl flex-shrink-0">•</span>
                <span><strong className="text-[#184e77]">Colaboração:</strong> Parceria com comunidades locais</span>
              </li>
            </ul>

            <div className="inline-flex">
              <button
                onClick={() => toast.info("Saiba mais sobre nossa história e equipe!")}
                className="px-8 py-3 rounded-full font-['Poppins',sans-serif] font-bold text-lg text-[#184e77] bg-[#d9ed92] hover:bg-[#c9dd82] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Conheça Nossa História
              </button>
            </div>
          </motion.div>
        </div>

        {/* Cards de estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12">
            Nosso Impacto
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    <WaveDivider flip={true} color="#c8e6f5" />
    </>
  );
}

function ProjectsSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1667803824497-90023904779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjB0dXJ0bGUlMjByZXNjdWV8ZW58MXx8fHwxNzY1MTExMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Resgate de Tartarugas",
      description: "Atuamos no resgate, reabilitação e devolução ao mar de tartarugas marinhas feridas ou encalhadas. Já salvamos mais de 800 indivíduos de diversas espécies ameaçadas.",
      icon: "🐢"
    },
    {
      image: "https://images.unsplash.com/photo-1759503408355-4de1b4ee51c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGFsZSUyMG9jZWFuJTIwY29uc2VydmF0aW9ufGVufDF8fHx8MTc2NTE1Nzk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Monitoramento de Baleias",
      description: "Realizamos pesquisas e monitoramento de rotas migratórias de baleias-jubarte, contribuindo para a ciência e proteção desses gigantes dos oceanos.",
      icon: "🐋"
    },
    {
      image: "https://images.unsplash.com/photo-1617953141905-b27fb1f17d88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsZWFudXAlMjBvY2VhbnxlbnwxfHx8fDE3NjUxNTc5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Limpeza de Praias",
      description: "Mutirões semanais de limpeza costeira com voluntários, removendo plásticos e resíduos que ameaçam a fauna marinha. Mais de 15 toneladas de lixo já foram coletadas.",
      icon: "🏖️"
    },
    {
      image: "https://images.unsplash.com/photo-1667803824473-debb0bb1af3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NTE1Nzk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Proteção de Corais",
      description: "Desenvolvemos técnicas de cultivo e transplante de corais para restaurar recifes degradados, fundamentais para a biodiversidade marinha e sustento de comunidades costeiras.",
      icon: "🪸"
    },
    {
      image: "https://images.unsplash.com/photo-1584268579177-1e6fba6a01e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjByZXNlYXJjaCUyMG9jZWFufGVufDF8fHx8MTc2NTA0NTk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Pesquisa Científica",
      description: "Conduzimos estudos sobre saúde oceânica, poluição por microplásticos e impactos das mudanças climáticas na vida marinha, publicando dados em revistas científicas.",
      icon: "🔬"
    },
    {
      image: "https://images.unsplash.com/photo-1584888300681-cd4f6e4611a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc2NTE1Nzk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Educação Ambiental",
      description: "Levamos conhecimento sobre conservação marinha a escolas e comunidades, formando cidadãos conscientes. Já impactamos mais de 10 mil estudantes com nossos programas.",
      icon: "📚"
    }
  ];

  return (
    <>
    <WaveDivider color="#e2e2e2" />
    <section className="bg-[#e2e2e2] py-16 md:py-24 lg:py-32" id="projetos">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 uppercase"
        >
          Nossos Projetos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          Conheça as iniciativas que estão transformando a realidade dos oceanos e protegendo a vida marinha para as futuras gerações.
        </motion.p>

        {/* Grid de projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div 
                className="relative rounded-3xl overflow-hidden cursor-pointer h-full flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, rgba(22, 138, 173, 0.1) 0%, rgba(82, 182, 154, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(22, 138, 173, 0.2)',
                  boxShadow: '0 4px 16px rgba(22, 138, 173, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Imagem do projeto */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <motion.img 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    src={project.image}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#184e77]/60 via-transparent to-transparent" />
                  
                  {/* Ícone */}
                  <div className="absolute top-4 right-4 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl md:text-3xl"
                    style={{
                      background: 'rgba(217, 237, 146, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-xl md:text-2xl lg:text-3xl mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="font-['Inter',sans-serif] text-[#636363] text-base md:text-lg leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Botão Ver mais */}
                  <button
                    onClick={() => toast.info(`Saiba mais sobre: ${project.title}`)}
                    className="w-full px-6 py-3 rounded-full font-['Poppins',sans-serif] font-bold text-base md:text-lg text-white bg-gradient-to-r from-[#168aad] to-[#52b69a] hover:from-[#52b69a] hover:to-[#168aad] transition-all duration-300 shadow-md hover:shadow-xl group-hover:scale-105"
                    aria-label={`Ver mais detalhes sobre ${project.title}`}
                  >
                    Ver Mais
                  </button>
                </div>

                {/* Efeito hover no card inteiro */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(217, 237, 146, 0.1) 0%, transparent 70%)',
                    border: '3px solid rgba(82, 182, 154, 0.5)',
                    borderRadius: '24px'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Todos os Projetos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <button
            onClick={() => toast.success("Carregando todos os projetos...")}
            className="px-10 py-4 rounded-full font-['Poppins',sans-serif] font-bold text-lg md:text-xl text-[#184e77] bg-[#d9ed92] hover:bg-[#c9dd82] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Projetos
          </button>
        </motion.div>
      </div>
    </section>
    <WaveDivider flip={true} color="#ffffff" />
    </>
  );
}

function StatisticsSection() {
  const stats = [
    { number: "159", description: "espécies de animais marinhos estão ameaçadas de extinção no Brasil", icon: "🐢" },
    { number: "30 mil", description: "animais mortos encontrados em praias pelo projeto da Petrobras", icon: "🐋" },
    { number: "6,6 mil", description: "toneladas de novas redes de pesca são produzidas no brasil por ano", icon: "🎣" }
  ];

  return (
    <>
    <WaveDivider color="#c8e6f5" />
    <section id="estatisticas" className="bg-[#c8e6f5] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #168aad 0%, #1e6091 50%, #184e77 100%)',
            borderRadius: '40px',
            padding: '3rem',
            boxShadow: '0 20px 60px rgba(22, 138, 173, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
          }}
        >
          {/* Decorações de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#52b69a] rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#90E0EF] rounded-full opacity-10 blur-3xl" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative font-['Poppins',sans-serif] font-bold text-white text-3xl md:text-5xl lg:text-6xl text-center mb-4 uppercase"
          >
            Estatísticas Alarmantes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative font-['Inter',sans-serif] text-[#90E0EF] text-lg md:text-xl text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            Os números mostram a urgência da nossa missão. Cada dado representa vidas que precisam da nossa proteção.
          </motion.p>

          <div className="relative grid md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                {/* Card interno com borda */}
                <div className="relative p-6 rounded-2xl transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="font-['Poppins',sans-serif] font-extrabold text-[#d9ed92] text-5xl md:text-6xl lg:text-7xl mb-4 uppercase drop-shadow-lg">
                    {stat.number}
                  </div>
                  <p className="font-['Inter',sans-serif] text-white/90 text-base md:text-xl lg:text-2xl leading-relaxed">
                    {stat.description}
                  </p>
                  
                  {/* Ícone decorativo */}
                  <div className="absolute -top-4 -right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {stat.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    <WaveDivider flip={true} color="#ffffff" />
    </>
  );
}

function HowToHelpSection() {
  const helpOptions = [
    {
      icon: "💝",
      title: "Faça uma Doação",
      description: "Contribua financeiramente para manter nossos projetos de resgate, pesquisa e educação ambiental. Qualquer valor faz a diferença para proteger os oceanos.",
      buttonText: "Quero Doar",
      buttonColor: "from-[#168aad] to-[#52b69a]",
      image: "https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25hdGlvbiUyMGhhbmRzJTIwaGVscHxlbnwxfHx8fDE3NjUxNTgyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: "🤝",
      title: "Seja Voluntário",
      description: "Junte-se à nossa equipe de voluntários! Participe de limpezas de praias, resgates de animais e ações educativas. Doe seu tempo e energia pela causa marinha.",
      buttonText: "Quero Ser Voluntário",
      buttonColor: "from-[#52b69a] to-[#d9ed92]",
      image: "https://images.unsplash.com/photo-1610093366806-b2907e880fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwdGVhbXdvcmslMjBvY2VhbnxlbnwxfHx8fDE3NjUxNTgyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: "🐢",
      title: "Adote um Animal Resgatado",
      description: "Apadrinhe uma tartaruga, baleia ou outro animal marinho em reabilitação. Receba atualizações exclusivas sobre o desenvolvimento do seu afilhado oceânico.",
      buttonText: "Quero Adotar",
      buttonColor: "from-[#d9ed92] to-[#90E0EF]",
      image: "https://images.unsplash.com/photo-1687276703723-3e1b174adf58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjB0dXJ0bGUlMjBhZG9wdGlvbiUyMGNhcmV8ZW58MXx8fHwxNzY1MTU4MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <>
    <WaveDivider color="#ffffff" />
    <section className="bg-white py-16 md:py-24 lg:py-32" id="apoie">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 uppercase"
        >
          Como Você Pode Ajudar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          Existem várias formas de fazer parte dessa missão de proteção aos oceanos. Escolha a que mais combina com você e faça a diferença!
        </motion.p>

        {/* Grid de opções de ajuda */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {helpOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="relative rounded-3xl overflow-hidden h-full flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, rgba(22, 138, 173, 0.08) 0%, rgba(82, 182, 154, 0.08) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(22, 138, 173, 0.2)',
                  boxShadow: '0 4px 16px rgba(22, 138, 173, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Imagem de fundo */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img 
                    alt={option.title}
                    className="w-full h-full object-cover"
                    src={option.image}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#184e77]/70 via-[#184e77]/30 to-transparent" />
                  
                  {/* Ícone grande */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-7xl md:text-8xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {option.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
                    {option.title}
                  </h3>
                  
                  <p className="font-['Inter',sans-serif] text-[#636363] text-base md:text-lg leading-relaxed mb-6 flex-1 text-center">
                    {option.description}
                  </p>

                  {/* Botão */}
                  <button
                    onClick={() => toast.success(`Obrigado pelo interesse em: ${option.title}!`)}
                    className={`w-full px-6 py-4 rounded-full font-['Poppins',sans-serif] font-bold text-base md:text-lg text-white bg-gradient-to-r ${option.buttonColor} hover:shadow-2xl transition-all duration-300 group-hover:scale-105 shadow-lg`}
                  >
                    {option.buttonText}
                  </button>
                </div>

                {/* Efeito hover no card inteiro */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(217, 237, 146, 0.15) 0%, transparent 70%)',
                    border: '3px solid rgba(82, 182, 154, 0.4)',
                    borderRadius: '24px'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div 
            className="inline-block rounded-3xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(22, 138, 173, 0.15) 0%, rgba(82, 182, 154, 0.15) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(22, 138, 173, 0.3)'
            }}
          >
            <p className="font-['Poppins',sans-serif] font-bold text-[#184e77] text-xl md:text-2xl lg:text-3xl mb-4">
              Não sabe por onde começar?
            </p>
            <p className="font-['Inter',sans-serif] text-[#636363] text-base md:text-lg lg:text-xl mb-6 max-w-2xl">
              Entre em contato conosco! Nossa equipe está pronta para ajudar você a encontrar a melhor forma de contribuir com a proteção marinha.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  toast.info("Entre em contato conosco!");
                }
              }}
              className="px-10 py-4 rounded-full font-['Poppins',sans-serif] font-bold text-lg md:text-xl text-[#184e77] bg-[#90E0EF] hover:bg-[#7dd3e8] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    <WaveDivider flip={true} color="#f0f9ff" />
    </>
  );
}

function EndangeredSection() {
  const animals = [
    { 
      imageSrc: imgEllipse7, 
      emoji: "🐢",
      commonName: "Tartaruga-de-Couro", 
      scientificName: "Dermochelys coriacea",
      status: "Criticamente ameaçada",
      description: "A maior tartaruga marinha do mundo enfrenta a redução de suas áreas de desova, a pesca acidental e o aumento da poluição plástica. Cada filhote salvo representa uma vitória para o equilíbrio dos mares."
    },
    { 
      imageSrc: imgEllipse6, 
      emoji: "🐋",
      commonName: "Baleia-Franca", 
      scientificName: "Eubalaena australis",
      status: "Vulnerável",
      description: "Caçada historicamente até quase desaparecer, hoje sofre com colisões com embarcações e enredamento em redes. A conservação dessa espécie é vital para a saúde dos ecossistemas costeiros."
    },
    { 
      imageSrc: imgEllipse5, 
      emoji: "🐬",
      commonName: "Golfinho-Rotador", 
      scientificName: "Stenella longirostris",
      status: "Em perigo",
      description: "Sensível ao ruído submarino e à degradação das águas, esse golfinho é um símbolo de inteligência e conexão social. A restauração de seu habitat é essencial para sua sobrevivência."
    },
    { 
      imageSrc: imgEllipse4, 
      emoji: "🐡",
      commonName: "Peixe-Boi-Marinho", 
      scientificName: "Trichechus manatus",
      status: "Em perigo",
      description: "Um dos mamíferos mais gentis dos oceanos, ameaçado por atropelamentos por embarcações, poluição e perda de vegetação marinha. A proteção de áreas costeiras é fundamental para garantir o seu futuro."
    },
    { 
      imageSrc: imgEllipse3, 
      emoji: "🦈",
      commonName: "Tubarão-Martelo", 
      scientificName: "Sphyrna lewini",
      status: "Criticamente ameaçado",
      description: "A pesca predatória e o mercado de barbatanas colocaram esse tubarão icônico à beira do colapso populacional. Sua preservação é essencial para manter o equilíbrio dos predadores nos mares."
    },
    { 
      imageSrc: imgEllipse2, 
      emoji: "🐙",
      commonName: "Polvo-Gigante-do-Pacífico", 
      scientificName: "Enteroctopus dofleini",
      status: "Vulnerável",
      description: "Um dos invertebrados mais inteligentes do oceano, ameaçado pela pesca excessiva e mudanças climáticas. Sua proteção é vital para a diversidade marinha."
    },
    { 
      imageSrc: imgEllipse1, 
      emoji: "🦭",
      commonName: "Leão-Marinho-Sul-Americano", 
      scientificName: "Otaria flavescens",
      status: "Em perigo",
      description: "Caçado historicamente por sua pele, hoje enfrenta a competição com a pesca comercial e poluição marinha. Cada colônia protegida é um avanço para a espécie."
    },
    { 
      imageSrc: imgEllipse7, 
      emoji: "🐠",
      commonName: "Peixe-Papagaio-Azul", 
      scientificName: "Scarus coeruleus",
      status: "Vulnerável",
      description: "Essencial para a saúde dos recifes de coral, enfrenta degradação de habitat e pesca predatória. Sem ele, os corais perdem um aliado fundamental."
    },
    { 
      imageSrc: imgEllipse6, 
      emoji: "🦀",
      commonName: "Caranguejo-Ferradura", 
      scientificName: "Limulus polyphemus",
      status: "Em perigo",
      description: "Um fóssil vivo de 450 milhões de anos, ameaçado pela perda de praias de desova e uso na indústria médica. Sua preservação conecta o passado ao futuro."
    }
  ];

  return (
    <>
    <WaveDivider color="#ffffff" />
    <section id="animais" className="relative py-16 md:py-24 lg:py-32 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #e8f8f5 50%, #ffffff 100%)',
    }}>
      {/* Padrão de fundo oceânico sutil com animação */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#168aad] rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#52b69a] rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#d9ed92] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-['Poppins',sans-serif] font-extrabold text-[#184e77] text-3xl md:text-5xl lg:text-6xl text-center mb-6"
        >
          Animais Marinhos em Risco de Extinção
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed"
        >
          A vida nos oceanos está desaparecendo — e cada espécie perdida enfraquece todo o ecossistema. Conheça algumas das espécies que mais precisam da nossa proteção.
        </motion.p>

        {/* Carrossel de animais */}
        <div className="mb-16 md:mb-20">
          <AnimalCarousel animals={animals} />
        </div>

        {/* Seção "Por que isso importa?" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div 
            className="p-8 md:p-12 rounded-3xl bg-white shadow-xl"
            style={{
              border: '2px solid rgba(22, 138, 173, 0.3)'
            }}
          >
            <h3 className="font-['Poppins',sans-serif] font-bold text-[#168aad] text-2xl md:text-3xl lg:text-4xl mb-6">
              Por que isso importa?
            </h3>
            <p className="font-['Inter',sans-serif] text-[#636363] text-lg md:text-xl lg:text-2xl leading-relaxed">
              Salvar essas espécies não é apenas proteger a beleza dos oceanos — é garantir o equilíbrio de todo um ecossistema que sustenta a vida no planeta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    <WaveDivider flip={true} color="#e2e2e2" />
    </>
  );
}

function Footer() {
  return (
    <>
    <WaveDivider color="#003049" />
    <footer className="bg-[#003049] py-12 md:py-16 lg:py-20" id="contato">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="font-['Inter',sans-serif] text-[#90E0EF] text-base md:text-lg leading-relaxed">
              Protegendo os oceanos e a vida marinha desde 2015.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-white text-xl md:text-2xl mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2 font-['Inter',sans-serif] text-[#90E0EF] text-base md:text-lg">
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#d9ed92] transition-colors"
                  aria-label="Ir para seção Sobre Nós"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#d9ed92] transition-colors"
                  aria-label="Ir para seção Projetos"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#d9ed92] transition-colors"
                  aria-label="Ir para Galeria"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#d9ed92] transition-colors"
                  aria-label="Ir para seção Depoimentos"
                >
                  Depoimentos
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-white text-xl md:text-2xl mb-4">
              Contato
            </h3>
            <ul className="space-y-3 font-['Inter',sans-serif] text-[#90E0EF] text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-xl" role="img" aria-label="Email">📧</span>
                <button 
                  onClick={() => window.location.href = 'mailto:contato@infomar.org.br'}
                  className="hover:text-[#d9ed92] transition-colors"
                  aria-label="Enviar email para contato@infomar.org.br"
                >
                  contato@infomar.org.br
                </button>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl" role="img" aria-label="Telefone">📱</span>
                <button 
                  onClick={() => toast.info("Ligando para (11) 98765-4321...")}
                  className="hover:text-[#d9ed92] transition-colors"
                  aria-label="Ligar para (11) 98765-4321"
                >
                  (11) 98765-4321
                </button>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📍</span>
                <span>
                  Santos, SP - Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="font-['Poppins',sans-serif] font-bold text-white text-xl md:text-2xl mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <motion.button
                onClick={() => toast.success("Abrindo Instagram...")}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#168aad] hover:bg-[#52b69a] transition-all duration-300 shadow-lg text-white"
                aria-label="Visitar Instagram da INFOMAR"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
              <motion.button
                onClick={() => toast.success("Abrindo Facebook...")}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#168aad] hover:bg-[#52b69a] transition-all duration-300 shadow-lg text-white"
                aria-label="Visitar Facebook da INFOMAR"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
              <motion.button
                onClick={() => toast.success("Abrindo YouTube...")}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#168aad] hover:bg-[#52b69a] transition-all duration-300 shadow-lg text-white"
                aria-label="Visitar YouTube da INFOMAR"
              >
                <Youtube className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
              <motion.button
                onClick={() => toast.success("Abrindo Twitter...")}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#168aad] hover:bg-[#52b69a] transition-all duration-300 shadow-lg text-white"
                aria-label="Visitar Twitter da INFOMAR"
              >
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-[#168aad]/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Texto final */}
            <p className="font-['Poppins',sans-serif] font-semibold text-[#90E0EF] text-lg md:text-xl text-center md:text-left">
              Juntos protegemos o oceano. 🌊
            </p>

            {/* Copyright */}
            <p className="font-['Inter',sans-serif] text-[#90E0EF]/70 text-sm md:text-base text-center md:text-right">
              © 2024 INFOMAR. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default function App() {
  return (
    <div className="bg-[#e2e2e2] min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <StatisticsSection />
        <EndangeredSection />
        <ProjectsSection />
        <HowToHelpSection />
        <TestimonialsSection />
        <GallerySection />
        <PartnersSection />
        <BlogSection />
        <FAQSection />
        <Footer />
      </main>
      
      {/* Elementos visuais oceânicos */}
      <ScrollColorTransition />
      <FloatingBubbles />
      <SwimmingFish />
      <BackgroundWaves />
      
      {/* Botão voltar ao topo */}
      <BackToTop />
      
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'linear-gradient(135deg, #168aad 0%, #52b69a 100%)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          },
        }}
      />
    </div>
  );
}