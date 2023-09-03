import React from 'react';

function Welcome({ user }) {
  return (
    <div>
      <p>Welcome, {user.displayName}! Please fill in your additional information.</p>
    </div>
  );
}

export default Welcome;
