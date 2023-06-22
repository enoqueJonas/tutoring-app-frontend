/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/myReservations/myReservationsSlice';
import { fetchTutories } from '../../redux/deleteClass/deleteClassSlice';
import './myReservations.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  const tutories = useSelector((state) => state.deleteClass.tutories);
  const reservations = useSelector((state) => state.myReservations.reservations);

  useEffect(() => {
    dispatch(fetchTutories());
    dispatch(fetchReservations());
  }, [dispatch]);

  const combinedData = tutories
    .filter((tutory) => reservations.some((reservation) => reservation.classSubject_id === tutory.id))
    .map((tutory) => {
      const reservation = reservations.find((reservation) => reservation.classSubject_id === tutory.id);
      return {
        id: tutory.id,
        subject: tutory.subject,
        description: tutory.description,
        date: reservation ? reservation.date : '',
        city: reservation ? reservation.city : '',
      };
    });

  return (
    <div>
      <section className="rel animate__animated animate__fadeIn">
        <div className="all:center-text mb-1">
          <h1 className="title">My Reservations</h1>
          <p className="subtitle">Here are all the reservations made so far</p>
        </div>
        <div className="separator mb-2" />

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Subject</th>
                <th className="desk-only">Description</th>
                <th>Date</th>
                <th>City</th>
              </tr>
            </thead>
            {combinedData.map((classItem) => (
              <tbody key={classItem.id}>
                <tr>
                  <td style={{ width: '15%' }}>{classItem.subject}</td>
                  <td style={{ width: '45%' }} className="desk-only">
                    {classItem.description}
                  </td>
                  <td style={{ width: '20%' }}>{classItem.date}</td>
                  <td style={{ width: '20%' }}>{classItem.city}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyReservations;
