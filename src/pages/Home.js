import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TutoriesGallery from '../components/home/TutoriesGallery';
import { useCurrentUserQuery } from '../api/usersData';
import Login from './Login';
import {
  translateLeft, translateRight, updateHasReachedMaxScrolled, updateIsComputerWidth, updateUser,
} from '../redux/tutories/tutoriesSlice';

/* TODO: tutories should be fetched from API */

export default function Home() {
  const dispatch = useDispatch();
  // const [user, setUser] = useState({
  //   loggedIn: false,
  //   user: {},
  // });
  // import error and status once the API is deployed
  const {
    tutories, translated, isComputerWidth, reachedMaxScroll, user,
  } = useSelector((store) => store.tutories);

  const { data: currentUser, isLoading } = useCurrentUserQuery();

  const amountScrollPages = Math.ceil(tutories.length / 3); // ceil always rounds up
  const itemsAmount = 3 * amountScrollPages; // total slider width / amount items that fits
  const amountToTranslate = 100 / amountScrollPages;

  useEffect(() => {
    // setUser({
    //   loggedIn: currentUser && currentUser.logged_in,
    //   user: (currentUser && currentUser.user) || {},
    // });
    dispatch(updateUser({
      loggedIn: currentUser && currentUser.logged_in,
      data: (currentUser && currentUser.user) || {},
    }));
    // console.log(currentUser);
  }, [currentUser]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const onVwChange = ({ matches }) => { dispatch(updateIsComputerWidth(matches)); };
    mediaQuery.addEventListener('change', onVwChange);
    return () => { mediaQuery.removeEventListener('change', onVwChange); };
  }, [dispatch]);

  useEffect(() => {
    const pagesScrolled = ((translated * -1) / amountToTranslate);
    dispatch(updateHasReachedMaxScrolled((amountScrollPages - 1) === pagesScrolled));
  }, [translated]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // Check if the user is logged in, render the Login component if not
  if (!user.loggedIn) {
    return <Login />;
  }

  return (
    <>
      {/* Navbar component */}
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
            itemsAmount={itemsAmount}
            translated={translated}
          />
        </div>
        {isComputerWidth && (
          <>
            <button
              type="button"
              className="arrow arrow--left"
              onClick={() => { dispatch(translateLeft(amountToTranslate)); }}
              disabled={translated === 0}
            >
              <span className="material-symbols-outlined">
                play_arrow
              </span>
            </button>
            <button
              type="button"
              className="arrow arrow--right"
              onClick={() => { dispatch(translateRight(amountToTranslate)); }}
              disabled={reachedMaxScroll}
            >
              <span className="material-symbols-outlined">
                play_arrow
              </span>
            </button>
          </>
        )}
      </section>
    </>
  );
}
