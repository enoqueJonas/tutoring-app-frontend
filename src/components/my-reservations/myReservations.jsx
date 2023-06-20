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


            <table className='reservations-content table'>
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
                    <td>
                      <img style={{ width: '20%' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheconversation.com%2Fphysics-is-taught-badly-because-teachers-struggle-with-basic-concepts-86083&psig=AOvVaw267uVfngP3Yi8gJ1EOJ6DX&ust=1687355842473000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDX4b-A0v8CFQAAAAAdAAAAABAE' alt="Item" />
                    </td>
                    <td style={{ width: '45%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at commodo nisl. Curabitur et sagittis justo. Nulla leo dolor, luctus eget aliquam porttitor</td>
                    <td style={{ width: '18%' }}>12-06-2023</td>
                    <td style={{ width: '17%' }}>Kano</td>
                  </tr>
              </tbody>
            </table>


      </section>
    </div>
  );
};

export default MyReservations;
