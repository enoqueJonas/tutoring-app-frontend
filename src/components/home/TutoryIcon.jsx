import { PropTypes } from 'prop-types';

const TutoryIcon = ({ socialMedia, children }) => (
  <li>
    <a href={`https://${socialMedia}`} target="_blank" rel="noreferrer">
      {children}
    </a>
  </li>
);

export default TutoryIcon;

TutoryIcon.propTypes = {
  socialMedia: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
