import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui';
import { Marquee } from '../ui/Marquee';
import { useInView } from '../../hooks/useInView';
import { api, type Client } from '../../services/api';

const ClientsSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await api.getClients();
        setClients(data);
      } catch (err) {
        console.error('Failed to load clients:', err);
      }
    };

    fetchClients();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <Section id="clients" backgroundColor="alt">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Clients
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-light text-lg max-w-6xl mx-auto px-4">
            We're proud to work with industry leaders and innovative companies
            who trust us to bring their visions to life.
          </p>
        </motion.div>

        {/* Clients Carousel */}
        <div className="relative w-full px-8">
          {/* Fade overlays for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background-alt to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background-alt to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee carousel */}
          <Marquee pauseOnHover className="[--duration:20s]">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center mx-6 p-4"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-24 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </Section>
  );
};

export default ClientsSection;
