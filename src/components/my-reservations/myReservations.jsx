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
            {reservations.map((classItem) => (
              <div key={classItem.id}>
                <tbody>
                    <tr>
                      <td style={{ width: '15%' }}>Physics</td>
                      <td style={{ width: '45%' }} className='desk-only'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                      <td style={{ width: '20%' }}>12-06-2023</td>
                      <td style={{ width: '20%' }}>Kano</td>
                    </tr>
                </tbody>
              </div>
            ))}  
          </table>    
        </div>

      </section>
    </div>
  );
};

export default MyReservations;
