import React from 'react';

function LoadingState({ message }) {
  return <div className="loading-state">{message || 'Loading...'}</div>;
}

export default LoadingState;
