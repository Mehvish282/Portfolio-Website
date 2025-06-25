import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Project } from '../../types';
import SmartAttendanceImg from '../../assets/smart-attendance.png';


const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Attendance System (FYP)',
    description: 'Built a comprehensive facial and iris recognition system for automated attendance tracking with high accuracy and real-time processing capabilities.',
    image: SmartAttendanceImg,
    technologies: ['Python', 'OpenCV', 'Django', 'React', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mehvish282',
    featured: true,
  },
  {
    id: '2',
    title: 'Resume Parsing System',
    description: 'Developed an intelligent end-to-end system that parses resumes and matches them with job descriptions using advanced NLP and Named Entity Recognition.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Spacy', 'React', 'Django', 'SQLite', 'NLP'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mehvish282',
    featured: true,
  },
  {
    id: '3',
    title: 'NLP Applications Suite',
    description: 'Implemented various NLP applications using Hugging Face Transformers including sentiment analysis, text generation, and speech-to-text conversion.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Hugging Face', 'Transformers', 'Datasets', 'Tokenizers', 'Python'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mehvish282',
    featured: true,
  },
  {
    id: '4',
    title: 'AI Chatbots Suite',
    description: 'Developed both rule-based chatbots and advanced LLM-style response generators using pretrained language models and Transformers.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['NLTK', 'Hugging Face', 'Transformers', 'Flask', 'Python'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mehvish282',
    featured: false,
  },
  {
    id: '5',
    title: 'Medical Prediction Models',
    description: 'Built machine learning models for heart disease and breast cancer prediction with high accuracy using advanced feature engineering techniques.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mehvish282',
    featured: false,
  },
  {
    id: '6',
    title: 'Real Estate Price Prediction',
    description: 'A comprehensive web application for predicting house and car prices using machine learning algorithms and interactive visualizations.',
    image: 'https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'HTML/CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mehvish282',
    featured: false,
  },
];

const filters = ['All', 'Featured', 'Machine Learning', 'NLP', 'Web Apps'];

export const Projects: React.FC = () => {
  const { ref, inView } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else if (filter === 'Featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects);
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            A showcase of my AI and machine learning projects, from computer vision to NLP applications
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow'
                  : 'bg-dark-200/20 text-dark-600 hover:bg-dark-200/40 border border-dark-200/20'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden group bg-dark-50 border-dark-200/20 hover:shadow-glow-lg">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project Links */}
                    <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-dark-100 border border-primary-500/30 rounded-full flex items-center justify-center text-dark-600 hover:text-primary-400 shadow-glow"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-dark-100 border border-primary-500/30 rounded-full flex items-center justify-center text-dark-600 hover:text-primary-400 shadow-glow"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-dark-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-200/20 text-dark-700 rounded-full text-sm font-medium border border-dark-200/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        variant="primary"
                        size="sm"
                        icon={ExternalLink}
                        className="flex-1"
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        icon={Github}
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-dark-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={Github}
            onClick={() => window.open('https://github.com/Mehvish282', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};