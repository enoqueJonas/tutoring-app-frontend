import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTutories, deleteTutory } from '../../redux/deleteClass/deleteClassSlice';
import './myReservations.css';


const myReservations = () => {
    return (
      <div>
        <section className="rel">
          <div className="all:center-text mb-1">
            <h1 className="title">My Reservations</h1>
            <p className="subtitle">Here are all the reservations made so far</p>
          </div>
          <div className="separator mb-2" />

        </section>
      </div>
    );
  };
  
export default myReservations;