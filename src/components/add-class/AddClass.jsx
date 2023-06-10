import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './addClass.css';
import { createClass } from '../../redux/addClass/addClassSlice';

const ClassForm = () => {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const classSubject = {
      subject,
      description,
      price,
    };
    dispatch(createClass(classSubject));
    setSubject('');
    setDescription('');
    setPrice('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          className="form-control"
          id="subject"
          placeholder="eg. Mathmatical Analysis"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="price"
          placeholder="eg. $250"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="duration" className="form-label">
          Duration
        </label>
        <input
          type="text"
          className="form-control"
          id="duration"
          placeholder="eg. 50 minutes"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-green ">
        Add Class
      </button>
    </form>
  );
};

export default ClassForm;
