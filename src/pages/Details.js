import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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
    dispatch(fetchTutory);
  }, [tutories]);
  return (
    <div>
      <p>{tutory.subject}</p>
      {tutoryError !== '' && <p>{tutoryError}</p>}
    </div>
  );
}
