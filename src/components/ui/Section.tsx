import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  backgroundColor?: 'default' | 'alt';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  id,
  className = '',
  backgroundColor = 'default'
}) => {
  const bgClass = backgroundColor === 'alt' ? 'bg-background-alt' : 'bg-background';
  
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 ${bgClass} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;
