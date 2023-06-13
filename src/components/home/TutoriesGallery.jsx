import PropTypes from 'prop-types';
import Tutory from './Tutory';
import './tutories.css';

export default function TutoriesGallery({
  tutories, isComputerWidth, amountScrollPages, itemsAmount, translated,
}) {
  return (
    <section className="tutories-wrapper">
      <div
        className="tutories"
        style={isComputerWidth ? {
          gridTemplateColumns: `repeat(${itemsAmount}, 1fr)`,
          width: `${amountScrollPages}00%`,
          transform: `translateX(${translated}%)`,
        } : {}}
      >
        {tutories.map((tutory) => (
          <Tutory
            key={tutory.id}
            image={tutory.image}
            subject={tutory.subject}
            description={tutory.description}
            id={tutory.id}
            tutor={tutory.tutor}
          />
        ))}
      </div>
    </section>
  );
}

TutoriesGallery.propTypes = {
  tutories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isComputerWidth: PropTypes.bool.isRequired,
  translated: PropTypes.number.isRequired,
  amountScrollPages: PropTypes.number.isRequired,
  itemsAmount: PropTypes.number.isRequired,
};
