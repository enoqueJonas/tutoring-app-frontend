import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations} from '../../redux/myReservations/myReservationsSlice';
import './myReservations.css';
// import { ReactComponent as DeleteIcon } from '../../assets/del.svg';

const MyReservations = () => {
  const dispatch = useDispatch();
  // const reservations = useSelector((state) => state.reservations);
  const reservations = useSelector((state) => state.myReservations.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  // const handleDeleteClass = (classId) => {
  //   dispatch(deleteTutory(classId));
  // };

  return (
    <div>
      <section className="rel animate__animated animate__fadeIn">
        <div className="all:center-text mb-1">
          <h1 className="title">My Reservations</h1>
          <p className="subtitle">Here are all the reservations made so far</p>
        </div>
        <div className="separator mb-2" />
        
        <div className='tutory-container'>
          {reservations.map((classItem) => (
            <div key={classItem.id} className="tutory-item">
                <div className="tutory-content">
                  <span className="tutory-subject">{classItem.date}</span>
                  <span className="tutory-subject">{classItem.city}</span>
                  {/* <button className="delete-button" onClick={() => handleDeleteClass(classItem.id)}> */}
                    {/* <DeleteIcon /> */}
                  {/* </button> */}
                </div>
              </div>
          ))}
        </div>


            <table className='table'>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td style={{ width: '15%' }}>Physics</td>
                    <td style={{ width: '45%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td style={{ width: '20%' }}>12-06-2023</td>
                    <td style={{ width: '20%' }}>Kano</td>
                  </tr>
                  <tr>
                    <td style={{ width: '15%' }}>Physics</td>
                    <td style={{ width: '45%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at commodo nisl. Curabitur et sagittis justo. Nulla leo dolor, luctus eget aliquam porttitor</td>
                    <td style={{ width: '20%' }}>12-06-2023</td>
                    <td style={{ width: '20%' }}>Kano</td>
                  </tr>
              </tbody>
            </table>


      </section>
    </div>
  );
};

export default MyReservations;
