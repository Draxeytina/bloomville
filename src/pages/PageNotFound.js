import React from 'react';
import { useLocation } from 'react-router-dom';

function PageNotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404</h1>
      <p>
        There is no doc for
        {' '}
        <em>
          {location.pathname}
        </em>
      </p>
    </div>
  );
}

export default PageNotFound;
