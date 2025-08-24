import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-title"></div>
        <div className="skeleton-subtitle"></div>
      </div>
      <div className="skeleton-grid">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="skeleton-card">
            <div className="skeleton-card-header">
              <div className="skeleton-image"></div>
              <div className="skeleton-name"></div>
            </div>
            <div className="skeleton-card-body">
              <div className="skeleton-description"></div>
              <div className="skeleton-description short"></div>
              <div className="skeleton-link"></div>
            </div>
            <div className="skeleton-card-actions">
              <div className="skeleton-button"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
