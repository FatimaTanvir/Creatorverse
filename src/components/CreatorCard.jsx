import React from 'react';
import { Link } from 'react-router-dom';

const CreatorCard = ({ creator }) => {
  return (
    <div className="creator-card">
      <div className="card-header">
        {creator.imageURL && (
          <img 
            src={creator.imageURL} 
            alt={creator.name} 
            className="creator-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            loading="lazy"
          />
        )}
        <h3 className="creator-name">{creator.name}</h3>
      </div>
      
      <div className="card-body">
        <p className="creator-description">{creator.description}</p>
        <a 
          href={creator.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="creator-link"
          aria-label={`Visit ${creator.name}'s channel`}
        >
          Visit Channel →
        </a>
      </div>
      
      <div className="card-actions">
        <Link to={`/creator/${creator.id}`} className="btn btn-primary">
          View Details
        </Link>
        <Link to={`/creator/${creator.id}/edit`} className="btn btn-secondary">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default CreatorCard;
