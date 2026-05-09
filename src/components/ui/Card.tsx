import React from 'react';

interface CardProps {
  image: string;
  fallbackImage: string;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ image, fallbackImage, title, description, className = '' }) => {
  return (
    <div className={`group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-border hover:border-accent/30 ${className}`}>
      <div className="overflow-hidden">
        <img
          src={image || fallbackImage} 
          alt={title} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            if (e.currentTarget.src !== window.location.origin + fallbackImage) {
              e.currentTarget.src = fallbackImage;
            }
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary truncate" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h3>
        <p 
          className="text-text-light" 
          style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
