import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';
import { useParallax } from '../../hooks/useScrollReveal';
import MehvishCV from '../../assets/Mehvish-Abbas-CV.pdf';


export const Hero: React.FC = () => {
  const scrollY = useParallax();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-50 via-dark-100 to-dark-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Shapes */}
        {/* {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-20 ${
              i % 3 === 0 ? 'bg-primary-400' : 
              i % 3 === 1 ? 'bg-secondary-400' : 'bg-accent-400'
            }`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
              transform: `translateY(${scrollY * 0.2}px)`,
            }} */}
            {/* animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))} }
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20,184,166,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Avatar and Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <Avatar size="xl" className="mx-auto scale-150 -translate-x-12" />
              
              {/* Floating Tech Icons */}
              {[
                { icon: '🤖', delay: 0, style: { top: '-45px', left: '-50px' } },
                { icon: '🧠', delay: 0.5, style: { top: '-35px', right: '20px' } },
                { icon: '👩‍💻', delay: 1, style: { bottom: '-45px', left: '-60px' } },
                { icon: '📸', delay: 1.5, style: { bottom: '-35px', right: '20px' } },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute w-14 h-14 bg-dark-100 border border-primary-500/30 rounded-full shadow-glow flex items-center justify-center text-xl"
                  style={item.style}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8 -translate-x-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
  Mehvish
  <span className="absolute inset-0 rounded-xl backdrop-blur-sm opacity-10" />
</span>


              </h1>
              <p className="text-xl lg:text-2xl text-dark-600 font-light whitespace-nowrap">
                Machine Learning Engineer & Full-Stack AI Developer
              </p>
              <p className="text-base leading-relaxed text-dark-400">
                Passionate about creating intelligent solutions with cutting-edge AI technologies. 
                I specialize in machine learning, deep learning, and building end-to-end AI applications 
                that solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                icon={Mail}
      onClick={() => window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=mehwishabbas282@gmail.com',
        '_blank'
      )}
    >
      Get In Touch
    </Button>
              <a
              href={MehvishCV}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-500 text-primary-400 hover:text-white hover:bg-primary-500 rounded-lg transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { icon: Github, href: 'https://github.com/Mehvish282', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mehvish-abbas-903034356/', label: 'LinkedIn' },
                { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mehwishabbas282@gmail.com', label: 'Email' }
              ].map((social, index) => {
              const isEmail = social.href.startsWith('mailto:');
              return (
              <motion.a
              key={index}
              href={social.href}
              {...(!isEmail && {
              target: '_blank',
              rel: 'noopener noreferrer',
              })}
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-dark-100 border border-primary-500/30 rounded-full shadow-glow flex items-center justify-center text-dark-600 hover:text-primary-400 hover:shadow-glow-lg transition-all duration-300"
    >
      <social.icon className="w-5 h-5" />
    </motion.a>
  );
})}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dark-500 hover:text-primary-400 transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};