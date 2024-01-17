import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const user = createApi({
    reducerPath:'User',
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_API_URL
    }),
    endpoints:(builder)=> ({
        getPosts:builder.query({query:()=>"login"})
    })
})

export const {useGetPostsQuery} = user