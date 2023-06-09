import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://127.0.0.1:3000'}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users']
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: 'users',
                method: 'POST',
                body: user
            })
        })
    })
})

export const { useGetUsersQuery, useCreateUserMutation } = usersApi;