import PropTypes from 'prop-types';
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';

export default function Tutory({
  image, subject, description, tutor,
}) {
  return (
    <div className="tutory all:center-text">
      <img src={image} alt={`Tutory class about ${subject}`} />
      <h2>{subject}</h2>
      <div className="separator" />
      <p>{description}</p>
      <ul className="social-media">
        <li>
          <a href={tutor.socialMedia.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href={tutor.socialMedia.twitter} target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href={tutor.socialMedia.facebook} target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

/* Prop types validation */
Tutory.propTypes = {
  image: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tutor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    socialMedia: PropTypes.shape({
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
      facebook: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
