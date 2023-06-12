import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTutories, deleteTutory } from '../../redux/deleteClass/deleteClassSlice';
import './deleteClass.css'


const DeleteClass = () => {
    const dispatch = useDispatch();
    const tutories = useSelector((state) => state.deleteClass.tutories);
  
    useEffect(() => {
      dispatch(fetchTutories());
    }, [dispatch]);
  
    const handleDeleteClass = (classId) => {
      dispatch(deleteTutory(classId));
    };
  
    return (
      <div>
        <div className="all:center-text mb-1">
          <h1 className="title">Delete a class</h1>
          <p className="subtitle">Here are all the classes available</p>
        </div>
        <div className="separator mb-2" />

        {/* {tutories.map((classItem) => (
          <div key={classItem.id}>
            <img src={classItem.image} alt={`Tutory class about ${classItem.subject}`} />
            <span>{classItem.subject}</span>
            <button onClick={() => handleDeleteClass(classItem.id)}>Delete</button>
          </div>
        ))} */}

        {tutories.map((classItem) => (
          <div key={classItem.id} className="tutory-item">
            <div className="tutory-image" style={{ backgroundImage: `url(${classItem.image})` }} />
            <div className="tutory-content">
              <span className="tutory-subject">{classItem.subject}</span>
              <button className="delete-button" onClick={() => handleDeleteClass(classItem.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    );
  };
  
export default DeleteClass;