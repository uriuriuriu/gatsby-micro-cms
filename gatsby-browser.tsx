import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import './src/styles/global.css';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <div className="wrap">{element}</div>;
};

export { wrapPageElement };
