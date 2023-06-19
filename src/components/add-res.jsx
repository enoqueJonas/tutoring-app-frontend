/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createReservation } from '../redux/addResSlice';

const fetchClasses = createAsyncThunk(
  'classes/fetchClasses',
  () => axios
    .get('https://tutoring-app-backend-group.onrender.com/class_subjects')
    .then((response) => response.data),
);

const AddResForm = () => {
  const dispatch = useDispatch();
  const [classSubject_id, setClassSubject_id] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [user_id, setUser_id] = useState('');
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    dispatch(fetchClasses())
      .then((action) => {
        if (action.payload) {
          setClassList(action.payload);
        }
      });
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (classSubject_id.trim() === '' || date.trim() === '') {
      return;
    }

    const reservation = {
      classSubject_id,
      date,
      user_id,
    };

    dispatch(createReservation(reservation));
    setClassSubject_id('');
    setDate('');
    setUser_id('');
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
                    {classItem.id}
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
              type="text"
              className="form-control shadow bg-white rounded"
              id="date"
              placeholder="eg. 2021-10-10"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
              value={user_id}
              onChange={(e) => setUser_id(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary animate__animated animate__fadeIn">
          Add Reservation
        </button>
      </form>
    </section>
  );
};

export default AddResForm;
