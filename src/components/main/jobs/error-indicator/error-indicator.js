import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">No results found!</span>
      <span>
        Please try different search criteria
      </span>
    </div>
  );
};

export default ErrorIndicator;