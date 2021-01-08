import PropTypes from 'prop-types';

export default function Wrapper({ children }) {
  return <div className='post-wrapper'>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
