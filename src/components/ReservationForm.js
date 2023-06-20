import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useCreateReservationMutation } from '../api/reservationsApi';

const ReservationForm = () => {
  const [createReservation] = useCreateReservationMutation();

  const { user } = useSelector((store) => store.tutories);
  const { tutory } = useSelector((store) => store.tutory);

  const [reservationInfo, setReservationInfo] = useState({
    city: '',
    user_id: '',
    classSubject_id: '',
    date: '',
  });

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClassesData = async () => {
      try {
        const response = await axios.get('https://tutoring-app-backend-group.onrender.com/', { withCredentials: true });
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching class data:', error, classes);
      }
    };
    setReservationInfo({ ...reservationInfo, user_id: user.data.name });
    fetchClassesData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createReservation({
      date: reservationInfo.date,
      city: reservationInfo.city,
      user_id: user.data.id,
      classSubject_id: reservationInfo.classSubject_id,
    });
    setReservationInfo({
      city: '',
      user_id: '',
      classSubject_id: '',
      date: '',
    });
  };

  return (
    <form
      className="registration-form items-center flex flex-col justify-center h-[300px] w-[500px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Username"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg"
        name="username"
        value={reservationInfo.user_id || ''}
        onChange={(e) => setReservationInfo({ ...reservationInfo, user_id: e.target.value })}
        required
      />
      <select
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg"
        value={tutory.id}
        onChange={(e) => {
          setReservationInfo({ ...reservationInfo, classSubject_id: e.target.value });
        }}
      >
        <option className="text-black">Select a subject...</option>
        {classes.map((classe) => (
          <option
            id={classe.subject}
            key={classe.id}
            value={classe.id}
          >
            {classe.subject}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="City"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg"
        name="email"
        value={reservationInfo.city}
        onChange={(e) => setReservationInfo({ ...reservationInfo, city: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="Date"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg"
        name="email"
        value={reservationInfo.date}
        onChange={(e) => setReservationInfo({ ...reservationInfo, date: e.target.value })}
        required
      />
      <input
        type="submit"
        value="Reserve"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg border border-white-500 text-white hover:bg-white hover:bg-opacity-40"
      />
    </form>
  );
};

export default ReservationForm;
