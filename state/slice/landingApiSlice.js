import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const landingApi = createApi({
    reducerPath : 'landingApi',
    baseQuery : fetchBaseQuery({
        baseUrl : process.env.NEXT_PUBLIC_BASEURL_API,
    }),
    tagTypes : ['Jumbo'],
    endpoints : (builder) => ({
        getAllJumbotron : builder.query({
            query : () => 'landing-page',
            providesTags : ['Jumbo']
        }),
        updateJumbotron : builder.mutation({
            query : ({id,...data}) => ({
                url : `landing-page/${id}?_method=PUT`,
                method : 'POST',
                body : data
            }),
            invalidatesTags : ['Jumbo']
        })
    })
})

export const {
    useGetAllJumbotronQuery,
    useUpdateJumbotronMutation
} = landingApi
export default landingApi.reducer;