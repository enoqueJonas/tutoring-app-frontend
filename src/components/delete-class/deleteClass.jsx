import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTutories } from '../../redux/deleteClass/deleteClassSlice';

const DeleteClass = () => {
    const dispatch = useDispatch();
    const tutories = useSelector((state) => state.deleteClass.tutories);
  
    useEffect(() => {
      dispatch(fetchTutories());
    }, [dispatch]);
  
    const handleDeleteClass = (classId) => {
    };
  
    return (
      <div>
        {tutories.map((classItem) => (
          <div key={classItem.id}>
            <span>{classItem.subject}</span>
            <button onClick={() => handleDeleteClass(classItem.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  
export default DeleteClass;