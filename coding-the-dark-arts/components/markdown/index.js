import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export default function Markdown({ children }) {
  return <ReactMarkdown children={children} className='m-markdown-cont' />;
}

Markdown.propTypes = {
  children: PropTypes.node,
};
