import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const highlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Expertise in supervised/unsupervised learning, deep learning, and neural networks.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building end-to-end AI applications with modern web technologies and frameworks.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Proficient in data preprocessing, feature engineering, and model optimization.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Passionate about solving complex problems with cutting-edge AI technologies.',
  },
];

export const About: React.FC = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white pl-9">
              Building Intelligent Solutions with AI
            </h3>
            <div className="space-y-10 text-lg text-dark-600 leading-relaxed pl-10">
              <p>
                I'm a Machine Learning Engineer and Full-Stack AI Developer with a passion for building smart, scalable systems. I specialize in deep learning, computer vision, and NLP, with hands-on experience developing and deploying end-to-end AI applications — from data pipelines to production-ready models
              </p>
              <p>
                Based in Bahawalpur, Pakistan, I thrive on solving real-world problems through AI and continuously stay updated with the latest advancements in the field.
              </p>
              {/* <p> */}
                {/* Based in Bahawalpur, Pakistan, I'm always eager to take on challenging projects 
                that push the boundaries of what's possible with AI. I believe in continuous learning 
                and staying updated with the latest advancements in machine learning and artificial intelligence. */}
              {/* </p> */}
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 text-center group bg-dark-50 border-dark-200/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-dark-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Personal Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10+', label: 'AI Projects Completed' },
            { number: '5+', label: 'ML Models Deployed' },
            { number: '2+', label: 'Years in AI/ML' },
            { number: '∞', label: 'Lines of Python Code' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-dark-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};