import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
// import { useScrollReveal } from '../../hooks/useScrollReveal';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
console.log("✅ Contact component is rendering");

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'mehwishabbas282@gmail.com',
    href: 'mailto:mehwishabbas282@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+92 317 6527282',
    href: 'tel:+923176527282',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'New Sadiq Colony, Bahawalpur',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Mehvish282', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mehvish-abbas-903034356/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mehwishabbas282@gmail.com', label: 'Email' },
];

export const Contact: React.FC = () => {
  // const { ref, inView } = useScrollReveal();
  // const ref = React.useRef(null);

  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', form);
    setIsSubmitting(false);
    setForm({ name: '', email: '', subject: '', message: '' });
  };
// const Contact = () => {
  return (
    <section id="contact" className="bg-dark-50 min-h-screen">
  <h1 className="text-white text-3xl">Contact Section</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Let's Build Something Amazing
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8" />
        <p className="text-xl text-dark-600 max-w-3xl mx-auto">
          Have an AI project in mind? I'd love to discuss how we can bring your ideas to life with cutting-edge technology.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>
            <p className="text-dark-600 mb-8 leading-relaxed">
              I'm always excited to take on new AI challenges and collaborate with 
              passionate people. Whether you have a machine learning project, need 
              AI consultation, or want to discuss opportunities, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-dark-100 hover:shadow-glow transition-all duration-300 group border border-dark-200/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{info.title}</h4>
                  <p className="text-dark-600">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-dark-100 border border-primary-500/30 rounded-xl shadow-glow flex items-center justify-center text-dark-600 hover:text-primary-400 hover:shadow-glow-lg transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="p-8 bg-dark-100 border-dark-200/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-50 border border-dark-200/20 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-dark-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-50 border border-dark-200/20 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-dark-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-50 border border-dark-200/20 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-dark-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-50 border border-dark-200/20 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-dark-500"
                  placeholder="Tell me about your AI project or just say hello..."
                />
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={Send}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>

      </div>
    
   </section>
  );
};