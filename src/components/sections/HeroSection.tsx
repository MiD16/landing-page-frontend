import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui';
import { api, type CompanyInfo } from '../../services/api';

const HeroSection = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const data = await api.getCompanyInfo();
        setCompanyInfo(data);
      } catch (err) {
        setError('Failed to load company information');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-text-light">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={companyInfo?.hero_image || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop"}
          alt="Modern architecture building"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 w-full max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight wrap-break-words"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {companyInfo?.hero_title || 'Designing Spaces'}
          <br />
          <span className="text-accent">{companyInfo?.tagline || 'That Inspire'}</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 w-full max-w-6xl mx-auto px-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {companyInfo?.hero_subtitle || 'We create innovative architectural solutions that blend functionality with aesthetic excellence, transforming visions into remarkable spaces.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToProjects}
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-4 text-lg"
          >
            View Our Projects
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
