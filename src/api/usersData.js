import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tutoring-app-backend-group.onrender.com',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: (name) => ({
        url: '/login',
        method: 'POST',
        body: name,
        invalidatesTags: ['User'],
      }),
    }),
    currentUser: builder.query({
      query: () => '/logged_in',
      providesTags: ['User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useCurrentUserQuery,
} = usersApi;
