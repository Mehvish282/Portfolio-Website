import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase, Video } from 'lucide-react';
import { Card } from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Experience } from '../../types';
import MehvishCV from '../../assets/Mehvish-Abbas-CV.pdf';


const experiences: Experience[] = [
  {
    id: '1',
    title: 'Project Manager',
    company: 'Startup Consultancy',
    location: 'Remote',
    startDate: '2023',
    endDate: 'Present',
    description: [
      'Led a cross-functional team to deliver diverse non-tech business projects',
      'Managed workflows, tasks, and team coordination across departments',
      'Oversaw documentation, progress tracking, and final reporting for multiple clients',
      'Improved project delivery efficiency by 40% through strategic planning',
    ],
    technologies: ['Project Management', 'Team Leadership', 'Documentation', 'Client Relations'],
  },
  {
    id: '2',
    title: 'Video Editor & Content Creator',
    company: 'Multiple Agencies & Clients',
    location: 'Remote',
    startDate: '2022',
    endDate: 'Present',
    description: [
      'Worked with multiple agencies and clients to deliver high-impact visual content',
      'Produced 500+ corporate, promotional, and social media videos for brands and startups',
      'Specialized in fast-paced editing, visual storytelling, and post-production enhancement',
      'Collaborated remotely with creative teams to ensure brand consistency and high-quality output',
    ],
    technologies: ['Video Editing', 'Adobe Premiere', 'After Effects', 'Visual Storytelling'],
  },
];

export const ExperienceSection: React.FC = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="experience" className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            My journey in project management, content creation, and building diverse professional skills
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-50 shadow-glow z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <Card className="p-6 hover:shadow-glow-lg transition-all duration-300 bg-dark-100 border-dark-200/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary-400" />
                      <span className="text-sm font-medium text-primary-400">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      {exp.title.includes('Project Manager') ? (
                        <Briefcase className="w-5 h-5 text-secondary-400" />
                      ) : (
                        <Video className="w-5 h-5 text-secondary-400" />
                      )}
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-semibold text-secondary-400">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-1 text-dark-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-dark-600 text-sm leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to know more about my experience?
            </h3>
            <p className="text-dark-600 mb-6">
              I'd be happy to discuss my background and how it aligns with your project needs.
            </p>
            <motion.a
              href={MehvishCV}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium hover:shadow-glow transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Download Full Resume
            </motion.a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};