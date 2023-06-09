import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    loginUser: builder.mutation({
      query: (name) => ({
        url: 'login',
        method: 'POST',
        body: name,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useLoginUserMutation } = usersApi;
