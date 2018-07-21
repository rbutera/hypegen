import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hypegen Landing Page"
      meta={[
        { name: 'description', content: 'Sign up for the Hypegen closed beta' },
        { name: 'keywords', content: 'hypegen, landing, page' },
      ]}
    />
    <Header />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
