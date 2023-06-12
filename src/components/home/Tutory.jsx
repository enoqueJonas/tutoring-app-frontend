import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';

export default function Tutory({
  image, subject, description,
}) {
  return (
    <Link to={`/classes/${subject}`}>
      <div className="tutory all:center-text">
        <img src={image} alt={`Tutory class about ${subject}`} />
        <h2>
          {subject}
        </h2>
        <div className="separator" />
        <p>{description}</p>
        <ul className="social-media">
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
    </Link>
  );
}

/* Prop types validation */
Tutory.propTypes = {
  image: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
