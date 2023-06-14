import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import findTutoryById from '../helpers/findTutoryById';
import { fetchTutory, setTutory, setTutoryError } from '../redux/tutories/tutorySlice';
import '../assets/styles/details.css';

export default function Details() {
  const { subjectId } = useParams();
  const dispatch = useDispatch();
  const { tutories } = useSelector((store) => store.tutories);
  const { tutory, tutoryError } = useSelector((store) => store.tutory);

  useEffect(() => {
    if (tutories.length === 0) {
      dispatch(fetchTutory(subjectId)); // fetch single tutory when there are no tutories
      return;
    }
    const result = findTutoryById(tutories, subjectId);
    if (result?.subject !== null) {
      dispatch(setTutory(result)); // if tutory exists
      return;
    }
    dispatch(setTutoryError(`Tutory with id: ${subjectId} couldn't be found!`));
  }, [dispatch, subjectId, tutories]);

  return (
    <div className="relative center-container">
      <section className="details">
        <img src={tutory.image} alt={`${tutory.subject} class`} />
        <aside className="details__content">
          <header className="mb-3">
            <h2 className="ta-right title">{tutory.subject}</h2>
            <p className="ta-right">
              Schedule your reservation for only
              {' '}
              {tutory.price}
              $
            </p>
          </header>
          <ul className="details__list mb-3">
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
                {tutory?.created_at !== undefined && tutory?.created_at?.split('T')[0]}
              </span>
            </li>
          </ul>
          <p className="mb-5 fs-1-3">
            <strong>
              {tutory.price}
              $
              {' '}
            </strong>
            Standard price
          </p>
          <Link to="/home" className="details__link">
            <span>Discover more classes</span>
            <span className="material-symbols-outlined">
              chevron_right
            </span>
          </Link>
          <div className="grow-1 flex ai-center">
            <button type="button" className="details__button">
              <span>
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
                Reserve
              </span>
              <span className="material-symbols-outlined">
                arrow_circle_right
              </span>
            </button>
          </div>
        </aside>
        {tutoryError !== '' && <p>{tutoryError}</p>}
      </section>
      <Link
        className="arrow arrow--left arrow--left-bottom"
        to="/home"
      >
        <span className="material-symbols-outlined">
          play_arrow
        </span>
      </Link>
    </div>
  );
}
