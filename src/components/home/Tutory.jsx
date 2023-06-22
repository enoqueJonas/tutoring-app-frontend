import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import TutoryIcon from './TutoryIcon';
import socialMedias from './socialMedias';

export default function Tutory({
  image, subject, description, id,
}) {
  const navigate = useNavigate();
  const handleClick = () => { navigate(`/classes/${id}`); };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') handleClick();
  };

  return (
    <div
      className="tutory all:center-text"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <img src={image} alt={`Tutory class about ${subject}`} />
      <h2>
        {subject}
      </h2>
      <div className="separator" />
      <p>{description}</p>
      <ul className="social-media">
        {socialMedias.map(({ url, icon, id }) => (
          <TutoryIcon key={id} socialMedia={url}>
            {icon}
          </TutoryIcon>
        ))}
      </ul>
    </div>
  );
}

Tutory.propTypes = {
  image: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
