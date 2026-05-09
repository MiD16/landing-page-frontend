import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section, Card } from '../ui';
import { useInView } from '../../hooks/useInView';
import { api, type Project } from '../../services/api';

const ProjectsSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data);
      } catch (err) {
        console.error('Failed to load projects:', err);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <Section id="projects">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-light text-lg max-w-6xl mx-auto px-4">
            Explore our portfolio of innovative architectural designs that push
            boundaries and create lasting impressions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card
                image={project.image}
                fallbackImage={`/images/projects/${project.id}.jpg`}
                title={project.title}
                description={project.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProjectsSection;
