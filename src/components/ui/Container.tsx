import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  as: Component = 'div'
}) => {
  return (
    <Component className={`w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Component>
  );
};

export default Container;
