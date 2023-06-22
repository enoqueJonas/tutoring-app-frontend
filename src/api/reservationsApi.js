import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reservationsApi = createApi({
  reducerPath: 'reservationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tutoring-app-backend-group.onrender.com/',
  }),
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: () => '/reservations',
      providesTags: ['Reservation'],
    }),
    createReservation: builder.mutation({
      query: (reservation) => ({
        url: '/reservations',
        method: 'POST',
        body: reservation,
      }),
      invalidatesTags: ['Reservation'],
    }),
  }),
});

export const { useGetReservationsQuery, useCreateReservationMutation } = reservationsApi;
