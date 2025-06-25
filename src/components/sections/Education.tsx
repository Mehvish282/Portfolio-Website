import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card } from '../ui/Card';
// import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string[];
  gpa?: string;
}

const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor in Computer Science',
    institution: 'Islamia University of Bahawalpur',
    location: 'Bahawalpur, Pakistan',
    startDate: '2021',
    endDate: '2025',
    description: [
      'Specialized in Machine Learning and Artificial Intelligence',
      'Completed Final Year Project on Smart Attendance System using facial and iris recognition',
      'Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering',
      'Active member of Computer Science Society and AI/ML study groups',
    ],
  },
  {
    id: '2',
    degree: 'Intermediate (Pre-Medical)',
    institution: 'Punjab College APE Campus',
    location: 'Ahmed Pur East, Pakistan',
    startDate: '2019',
    endDate: '2021',
    description: [
      'Focused on Biology, Physics, and Chemistry',
      'Built strong foundation in analytical and problem-solving skills',
      'Participated in science exhibitions and academic competitions',
    ],
  },
  {
    id: '3',
    degree: 'Secondary School Certificate',
    institution: 'G.G.H/S Mehrab wala',
    location: 'Ahmed Pur East, Pakistan',
    startDate: '2017',
    endDate: '2019',
    description: [
      'Completed with distinction in Science subjects',
      'Developed early interest in technology and programming',
      'Active in school science fair and technology clubs',
    ],
  },
];

export const Education: React.FC = () => {
  // const { ref, inView } = useScrollReveal();

  return (
    <section id="education" className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          // ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            My academic journey and the foundation that shaped my expertise in computer science and AI
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-100 shadow-glow z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <Card className="p-6 hover:shadow-glow-lg transition-all duration-300 bg-dark-50 border-dark-200/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary-400" />
                      <span className="text-sm font-medium text-primary-400">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-secondary-400" />
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-semibold text-secondary-400">
                        {edu.institution}
                      </span>
                      <div className="flex items-center gap-1 text-dark-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                    
                    {edu.description && (
                      <ul className="space-y-2 mb-4">
                        {edu.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-dark-600 text-sm leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {edu.gpa && (
                      <div className="flex items-center gap-2 mt-4">
                        <Award className="w-4 h-4 text-accent-400" />
                        <span className="text-sm font-medium text-accent-400">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-dark-600 mb-6">
              Beyond formal education, I'm constantly learning through online courses, 
              research papers, and hands-on projects to stay current with the latest 
              developments in AI and machine learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Deep Learning Specialization',
                'Machine Learning Engineering',
                'Computer Vision',
                'Natural Language Processing',
                'MLOps & Deployment',
              ].map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 bg-dark-200/20 text-dark-700 rounded-full text-sm font-medium border border-dark-200/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};