import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCreateReservationMutation } from '../api/reservationsApi';
import { useCurrentUserQuery } from '../api/usersData';

const ReservationForm = () => {
  const { data: currentUser } = useCurrentUserQuery();

  const [createReservation] = useCreateReservationMutation();

  const { user } = useSelector((store) => store.tutories);

  const [reservationInfo, setReservationInfo] = useState({
    city: '',
    user_id: '',
    classSubject_id: '',
    start: '',
    date: '',
  });

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClassesData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/class_subjects');
        setClasses(response.data);
      } catch (error) {
        console.log('Error fetching class data:', error);
      }
    };

    fetchClassesData();
  }, []);

  if (!currentUser || !currentUser.user) {
    return [];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createReservation({
      date: reservationInfo.date,
      city: reservationInfo.city,
      user_id: user.data.id,
      classSubject_id: reservationInfo.classSubject_id,
    })
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
        value={currentUser.user.name || ''}
        onChange={(e) => setReservationInfo({ ...reservationInfo, user_id: e.target.value })}
        required
      />
      <select
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg"
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
        onChange={(e) => setReservationInfo({ ...reservationInfo, city: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="Date"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg"
        name="email"
        onChange={(e) => setReservationInfo({ ...reservationInfo, date: e.target.value })}
        required
      />
      <input
        type="submit"
        value="Register"
        className="registration-form-filed m-[8px] h-[35px] w-[325px] rounded-lg border border-white-500 text-white hover:bg-white hover:bg-opacity-40"
      />
      <Link to="/" className="text-white text-sm">
        Click here to login if you are already registered!
      </Link>
    </form>
  );
};

export default ReservationForm;
