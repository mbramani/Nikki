import { apiSlice } from '../api/apiSlice'

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPages: builder.query({
      query: () => '/page',
    }),
    getPage: builder.query({
      query: ({ year, month, day }) => `/page/${year}/${month}/${day}`,
      providesTags: (_result, _error, arg) => [{ type: 'Page', id: arg }],
    }),

    addPage: builder.mutation({
      query: ({ year, month, day, data = '' }) => ({
        url: `/page/${year}/${month}/${day}`,
        method: 'POST',
        body: { data },
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: 'Page', id: { day: arg.day, month: arg.month, year: arg.year } },
      ],
    }),

    updatePage: builder.mutation({
      query: ({ year, month, day, data }) => ({
        url: `/page/${year}/${month}/${day}`,
        method: 'PATCH',
        body: { data },
      }),
    }),
  }),
})

export const {
  useGetAllPagesQuery,
  useLazyGetAllPagesQuery,
  useGetPageQuery,
  useAddPageMutation,
  useUpdatePageMutation,
} = extendedApiSlice
