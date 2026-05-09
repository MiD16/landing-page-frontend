import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui';
import { useInView } from '../../hooks/useInView';
import { api, type CompanyInfo } from '../../services/api';

const WhoWeAreSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const data = await api.getCompanyInfo();
        setCompanyInfo(data);
      } catch (err) {
        console.error('Failed to load company information:', err);
      }
    };

    fetchCompanyInfo();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <Section id="who-we-are" backgroundColor="alt">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Content */}
        <motion.div variants={itemVariants} className="w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
            {companyInfo?.name || 'Who We Are'}
          </h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-text-light text-lg leading-relaxed mb-6">
            {companyInfo?.description || 'We are a team of passionate architects and designers dedicated to creating spaces that inspire, innovate, and stand the test of time.'}
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-3xl font-bold text-accent mb-2">{companyInfo?.years_experience || '20'}+</h4>
              <p className="text-text-light text-sm">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-accent mb-2">{companyInfo?.projects_completed || '150'}+</h4>
              <p className="text-text-light text-sm">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-accent mb-2">{companyInfo?.total_built_area || '500K'}</h4>
              <p className="text-text-light text-sm">Total Built Area</p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div variants={itemVariants} className="relative w-full">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <img
              src={companyInfo?.who_we_are_image || "/images/who-we-are.jpg"}
              alt="Architecture team working"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/who-we-are.jpg";
              }}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-lg -z-10"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/10 rounded-lg -z-10"></div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default WhoWeAreSection;
