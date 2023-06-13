import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TutoriesGallery from '../components/home/TutoriesGallery';
import {
  fetchTutories,
  translateLeft, translateRight, updateHasReachedMaxScrolled, updateIsComputerWidth,
} from '../redux/tutories/tutoriesSlice';

export default function Home() {
  const dispatch = useDispatch();
  const {
    tutories, status, translated, isComputerWidth, reachedMaxScroll,
  } = useSelector((store) => store.tutories);

  const [
    amountScrollPages,
    setAmountScrollPages,
  ] = useState(tutories.length === 0 ? 1 : Math.ceil(tutories.length / 3));

  const itemsAmount = useRef(3 * amountScrollPages);
  const amountToTranslate = useRef(100 / amountScrollPages);

  useEffect(() => {
    // Once the tutories are loaded and if tutories length is greater than 0
    if (status !== 'fulfilled' && tutories.length > 0) return;
    // recalculate the amount of scroll pages
    const newAmountScrollPages = Math.ceil(tutories.length / 3);
    setAmountScrollPages(newAmountScrollPages);
    // and the values related to it
    itemsAmount.current = 3 * newAmountScrollPages;
    amountToTranslate.current = 100 / newAmountScrollPages;
  }, [status]);

  /* Decide wheather to display the elements as slider or not based on media match */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const onVwChange = ({ matches }) => { dispatch(updateIsComputerWidth(matches)); };
    mediaQuery.addEventListener('change', onVwChange);
    return () => { mediaQuery.removeEventListener('change', onVwChange); };
  }, [dispatch]);

  /* Determine if user has reached max permitted scroll in slider */
  useEffect(() => {
    const pagesScrolled = ((translated * -1) / amountToTranslate.current);
    dispatch(updateHasReachedMaxScrolled((amountScrollPages - 1) === pagesScrolled));
  }, [translated, amountScrollPages]);

  useEffect(() => {
    if (status !== 'idle') return;
    dispatch(fetchTutories());
  }, [dispatch]);

  return (
    <section className="center-container relative">
      <div>
        <div className="all:center-text mb-1">
          <h1 className="title">Tutories Subjects</h1>
          <p className="subtitle">Please select a subject about which you would like to receive tutories</p>
        </div>
        <div className="separator mb-2" />
        <TutoriesGallery
          tutories={tutories}
          isComputerWidth={isComputerWidth}
          amountScrollPages={amountScrollPages}
          itemsAmount={itemsAmount.current}
          translated={translated}
        />
      </div>
      {isComputerWidth && (
      <>
        <button
          type="button"
          className="arrow arrow--left"
          onClick={() => { dispatch(translateLeft(amountToTranslate.current)); }}
          disabled={translated === 0}
        >
          <span className="material-symbols-outlined">
            play_arrow
          </span>
        </button>
        <button
          type="button"
          className="arrow arrow--right"
          onClick={() => { dispatch(translateRight(amountToTranslate.current)); }}
          disabled={reachedMaxScroll}
        >
          <span className="material-symbols-outlined">
            play_arrow
          </span>
        </button>
      </>
      )}
    </section>
  );
}
