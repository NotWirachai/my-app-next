// src/App.tsx
import React from 'react';

interface AppProps {
  id: string;
}

const Test: React.FC<AppProps> = ({ id }) => {
  return <div>{id}</div>;
};

export default Test;
