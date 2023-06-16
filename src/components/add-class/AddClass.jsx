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
  const [image, setImage] = useState('');
  const [tutorName, setTutorName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tutorName.trim() === '' || subject.trim() === '' || description.trim() === '' || price.trim() === '' || duration.trim() === '' || image.trim() === '') {
      setError(true);
      return;
    }
    const classSubject = {
      subject,
      description,
      price,
      duration,
      image,
      tutorName,
    };
    dispatch(createClass(classSubject));
    setSubject('');
    setDescription('');
    setPrice('');
    setDuration('');
    setImage('');
    setTutorName('');
    setSubmitted(true);
  };

  return (
    <section className="center-container relative d-grid justify-content-center   ">
      <form onSubmit={handleSubmit} className="p-3  d-grid justify-items-center border shadow  bg-white rounded animate__animated animate__fadeIn">
        {submitted ? (
          <div className="alert alert-success animate__animated animate__fadeIn">Class added successfully!</div>
        ) : null}
        {error ? (
          <div className="alert alert-danger animate__animated animate__fadeIn">All fields are required!</div>
        ) : null}
        <h1 className="text-center h1 border-bottom ">Add Class</h1>
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="tutor_name" className="form-label ">
            Tutor Name
            <input
              type="text"
              className="form-control shadow  bg-white rounded"
              id="tutor_name"
              placeholder="eg. John Smith"
              value={tutorName}
              onChange={(e) => setTutorName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="subject" className="form-label ">
            Subject
            <input
              type="text"
              className="form-control shadow  bg-white rounded"
              id="subject"
              placeholder="eg. Mathmatical Analysis"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="description" className="form-label ">
            Description
            <input
              type="text"
              className="form-control shadow  bg-white rounded"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="price" className="form-label ">
            Price
            <input
              type="number"
              className="form-control shadow  bg-white rounded"
              id="price"
              placeholder="eg. $250"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="duration" className="form-label ">
            Duration
            <input
              type="number"
              className="form-control shadow  bg-white rounded"
              id="duration"
              placeholder="eg. 50 minutes"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3 animate__animated animate__fadeIn">
          <label htmlFor="image" className="form-label ">
            image
            <input
              type="url"
              className="form-control shadow  bg-white rounded"
              id="image"
              placeholder="eg. https://www.example.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn-green ">
          Add Class
        </button>
      </form>
    </section>
  );
};

export default ClassForm;
