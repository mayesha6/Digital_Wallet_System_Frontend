/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/send-money",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"],
    }),
    withdraw: builder.mutation({
      query: (payload) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"],
    }),
    addMoney: builder.mutation({
      query: (payload) => ({
        url: "/wallet/add-money",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"],
    }),
    cashOut: builder.mutation({
      query: (payload) => ({
        url: "/wallet/cash-out",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"],
    }),
    myTransaction: builder.query({
      query: (params?: {
        page?: number;
        limit?: number;
        transactionType?: string;
      }) => ({
        url: "/transaction/my-transaction",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION", "WALLET"],
      transformResponse: (response: any) => {
        return {
          data: response.data || [],
          meta: response.meta || { page: 1, totalPage: 1 },
        };
      },
    }),
    overview: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER", "TRANSACTION", "WALLET"],
      transformResponse: (response) => response.data,
    }),
    profile: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER", "TRANSACTION", "WALLET"],
      transformResponse: (response) => response.data,
    }),
    updateProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        data: { data: JSON.stringify(data) },
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useSendMoneyMutation,
  useWithdrawMutation,
  useAddMoneyMutation,
  useCashOutMutation,
  useMyTransactionQuery,
  useOverviewQuery,
  useProfileQuery,
  useUpdateProfileMutation,
} = userApi;
