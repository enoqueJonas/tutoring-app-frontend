import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations} from '../../redux/myReservations/myReservationsSlice';
import { fetchTutories } from '../../redux/deleteClass/deleteClassSlice';
import './myReservations.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.myReservations.reservations);
  // const reservations = useSelector((state) => console.log(state));

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  
  const tutories = useSelector((state) => state.deleteClass.tutories);

  useEffect(() => {
    dispatch(fetchTutories());
  }, [dispatch]);

  return (
    <div>
      <section className="rel animate__animated animate__fadeIn">
        <div className="all:center-text mb-1">
          <h1 className="title">My Reservations</h1>
          <p className="subtitle">Here are all the reservations made so far</p>
        </div>
        <div className="separator mb-2" />
        
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th>Subject</th>
                <th className='desk-only'>Description</th>
                <th>Date</th>
                <th>City</th>
              </tr>
            </thead>
            {tutories.map((classItem) => (
                <tbody key={classItem.id}>
                    <tr>
                      <td style={{ width: '15%' }}>{classItem.subject}</td>
                      <td style={{ width: '45%' }} className='desk-only'>{classItem.description}</td>
                      <td style={{ width: '20%' }}>{classItem.id}</td>
                      <td style={{ width: '20%' }}>{classItem.id}</td>
                    </tr>
                </tbody>
            ))}  
          </table>    
        </div>

        <div className='tutory-container'>
          {reservations.map((classItem) => (
            <div key={classItem.id} className="tutory-item">
              <p>{classItem.date}</p>
              <p>{classItem.city}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default MyReservations;
