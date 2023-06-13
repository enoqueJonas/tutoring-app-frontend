import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import findTutoryById from '../helpers/findTutoryById';
import { fetchTutory, setTutory, setTutoryError } from '../redux/tutories/tutoriesSlice';

export default function Details() {
  const { subjectId } = useParams();
  const dispatch = useDispatch();
  const { tutories, tutory, tutoryError } = useSelector((store) => store.tutories);
  useEffect(() => {
    /* if tutories are already loaded */
    if (tutories.length > 0) {
      const result = findTutoryById(tutories, subjectId);
      if (result?.subject === null) {
        dispatch(setTutoryError(`Tutory with id: ${subjectId} couldn't be found!`));
        return;
      }
      dispatch(setTutory(result));
      return;
    }
    /* Request a single tutory from API if tutories aren't loaded */
    dispatch(fetchTutory(subjectId));
  }, [tutories]);
  return (
    <section className="center-container relative">
      <img src={tutory.image} alt={`${tutory.subject} class`} />
      <div>
        <h2>{tutory.subject}</h2>
        <p>{tutory.description}</p>
        <ul>
          <li>
            <span>Duration: </span>
            <span>
              {tutory.duration}
              min
            </span>
          </li>
          <li>
            <span>Tutor name: </span>
            <span>
              {tutory.tutorName}
            </span>
          </li>
          <li>
            <span>Created at: </span>
            <span>
              {tutory.created_at}
            </span>
          </li>
        </ul>
        <p>
          <strong>
            {tutory.price}
            $
            {' '}
          </strong>
          Standard price
        </p>
        <Link to="/home">
          <span>Discover more classes</span>
          <span className="material-symbols-outlined">
            chevron_right
          </span>
        </Link>
        <button type="button">
          Reserve
          <span className="material-symbols-outlined">
            arrow_circle_right
          </span>
        </button>
      </div>
      <Link
        className="arrow arrow--left arrow--left-bottom"
        to="/home"
      >
        <span className="material-symbols-outlined">
          play_arrow
        </span>
      </Link>
      {tutoryError !== '' && <p>{tutoryError}</p>}
    </section>
  );
}
