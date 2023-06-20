/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createReservation } from '../redux/addResSlice';

const fetchClasses = createAsyncThunk(
  'classes/fetchClasses',
  () => axios
    .get('https://tutoring-front-end.onrender.com/class_subjects')
    .then((response) => response.data),
);

const AddResForm = () => {
  const dispatch = useDispatch();
  const [classSubject_id, setClassSubject_id] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const user_idd = useSelector((state) => state.tutories.user.data.id);
  const [user_id, setUser_id] = useState(user_idd);
  const [classList, setClassList] = useState([]);
  const [city, setCity] = useState('');

  console.log(user_idd);

  useEffect(() => {
    dispatch(fetchClasses())
      .then((action) => {
        if (action.payload) {
          setClassList(action.payload);
        }
      });
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchUserLoggedin())
  //     .then((action) => {
  //       console.log(action.payload);
  //       if (action.payload) {
  //         setUser_id(action.payload.id);
  //       }
  //     });
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (classSubject_id.trim() === '' || date.trim() === '') {
      return;
    }

    const reservation = {
      classSubject_id,
      date,
      user_id,
      city,
    };

    dispatch(createReservation(reservation));
    setClassSubject_id('');
    setDate('');
    setUser_id('');
    setCity('');
    setSubmitted(true);
  };

  return (
    <section className="center-container relative d-grid justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="p-3 d-grid justify-items-center border shadow bg-white rounded animate__animated animate__fadeIn"
      >
        {submitted ? (
          <div className="alert alert-success animate__animated animate__fadeIn">
            Reservation added successfully!
          </div>
        ) : null}
        <h1 className="text-center h1 border-bottom">Add Reservation</h1>
        {classList.length > 0 ? (
          <div className="mb-3 animate__animated animate__fadeIn">
            <label htmlFor="class" className="form-label">
              Class
              <select
                className="form-select shadow bg-white rounded"
                id="class"
                value={classSubject_id}
                onChange={(e) => setClassSubject_id(e.target.value)}
              >
                <option value="">Select a class</option>
                {classList.map((classItem) => (
                  <option key={classItem.id} value={classItem.id}>
                    {classItem.subject}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : (
          <div>Loading class subjects...</div>
        )}
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="date" className="form-label">
            Date
            <input
              type="date"
              className="form-control shadow bg-white rounded"
              id="date"
              placeholder="eg. 2021-10-10"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="city" className="form-label">
            City
            <input
              type="text"
              className="form-control shadow bg-white rounded"
              id="city"
              placeholder="eg. New York"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="user_id" className="form-label">
            User_id
            <input
              type="text"
              className="form-control shadow bg-white rounded"
              id="user_id"
              placeholder="eg. 1"
              value={user_idd}
              onChange={(e) => setUser_id(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn-green ">
          Add Reservation
        </button>
      </form>
    </section>
  );
};

export default AddResForm;
