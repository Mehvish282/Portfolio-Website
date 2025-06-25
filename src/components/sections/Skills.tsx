import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Wrench, BarChart3 } from 'lucide-react';
import { Card } from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Skill } from '../../types';

const skills: Skill[] = [
  // Machine Learning & AI
  { name: 'Python', level: 95, category: 'ml' },
  { name: 'TensorFlow', level: 90, category: 'ml' },
  { name: 'PyTorch', level: 88, category: 'ml' },
  { name: 'Scikit-learn', level: 92, category: 'ml' },
  { name: 'Keras', level: 85, category: 'ml' },
  { name: 'OpenCV', level: 88, category: 'ml' },
  { name: 'Hugging Face', level: 85, category: 'ml' },
  { name: 'XGBoost', level: 80, category: 'ml' },
  
  // Full-Stack Development
  { name: 'React', level: 88, category: 'frontend' },
  { name: 'Django', level: 90, category: 'backend' },
  { name: 'Flask', level: 85, category: 'backend' },
  { name: 'Docker', level: 75, category: 'backend' },
  { name: 'FastAPI', level: 82, category: 'backend' },
  { name: 'REST APIs', level: 88, category: 'backend' },
  { name: 'Streamlit', level: 85, category: 'frontend' },
  { name: 'HTML5 & CSS3', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 75, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  { name: 'Bootstrap', level: 75, category: 'frontend' },
  
  // Data & Databases
  { name: 'NumPy', level: 95, category: 'data' },
  { name: 'Pandas', level: 95, category: 'data' },
  { name: 'PostgreSQL', level: 85, category: 'data' },
  { name: 'SQLite', level: 88, category: 'data' },
  { name: 'Matplotlib', level: 90, category: 'data' },
  { name: 'Seaborn', level: 88, category: 'data' },
  
  // Tools & Cloud
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Azure ML', level: 75, category: 'tools' },
  { name: 'Google Cloud ML', level: 75, category: 'tools' },
  { name: 'VirtualBox', level: 80, category: 'tools' },
  { name: 'Unity', level: 70, category: 'tools' },
];

const categories = [
  { name: 'ml', title: 'Machine Learning & AI', icon: Brain, color: 'from-primary-500 to-primary-600' },
  { name: 'frontend', title: 'Frontend & UI', icon: Code, color: 'from-secondary-500 to-secondary-600' },
  { name: 'backend', title: 'Backend & APIs', icon: Database, color: 'from-accent-500 to-accent-600' },
  { name: 'data', title: 'Data & Analytics', icon: BarChart3, color: 'from-purple-500 to-purple-600' },
  { name: 'tools', title: 'Tools & Cloud', icon: Wrench, color: 'from-orange-500 to-orange-600' },
];

export const Skills: React.FC = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="skills" className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning machine learning, AI development, and full-stack technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.name);
            if (categorySkills.length === 0) return null;
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 h-full bg-dark-100 border-dark-200/20">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-dark-700">
                            {skill.name}
                          </span>
                          <span className="text-sm text-dark-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-dark-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.5 
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};