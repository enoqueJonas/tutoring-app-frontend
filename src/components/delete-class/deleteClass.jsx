import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTutoryExt } from '../../redux/deleteClass/deleteClassSlice';
import { fetchTutories, deleteTutory } from '../../redux/tutories/tutoriesSlice';

import './deleteClass.css';
import { ReactComponent as DeleteIcon } from '../../assets/del.svg';

const DeleteClass = () => {
  const dispatch = useDispatch();
  const tutories = useSelector((state) => state.tutories.tutories);

  useEffect(() => {
    dispatch(fetchTutories());
  }, [dispatch]);

  const handleDeleteClass = (classId) => {
    dispatch(deleteTutory(classId));
    dispatch(deleteTutoryExt(classId));
  };

  return (
    <div>
      <section className="rel animate__animated animate__fadeIn">
        <div className="all:center-text mb-1">
          <h1 className="title">Delete a class</h1>
          <p className="subtitle">Here are all the classes available</p>
        </div>
        <div className="separator mb-2" />

        <div className="tutory-container">
          {tutories.map((classItem) => (
            <div key={classItem.id} className="tutory-item">
              <div className="tutory-image" style={{ backgroundImage: `url(${classItem.image})` }}>
                <div className="tutory-content">
                  <span className="tutory-subject">{classItem.subject}</span>
                  <button type="button" className="delete-button" onClick={() => handleDeleteClass(classItem.id)}>
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DeleteClass;
