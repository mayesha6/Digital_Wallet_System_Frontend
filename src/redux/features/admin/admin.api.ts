/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    approveAgent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/approve-agent/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["USER"],
    }),
    suspendAgent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/suspend-agent/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["USER"],
    }),
    blockWallet: builder.mutation({
      query: (id) => ({
        url: `/wallet/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER", "WALLET"],
    }),
    unblockWallet: builder.mutation({
      query: (id) => ({
        url: `/wallet/unblock/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER", "WALLET"],
    }),
    // allTransaction: builder.query({
    //   query: (params?: {
    //     page?: number;
    //     limit?: number;
    //     transactionType?: string;
    //   }) => ({
    //     url: "/transaction",
    //     method: "GET",
    //     params,
    //   }),
    //   providesTags: ["TRANSACTION", "WALLET"],
    //   transformResponse: (response: any) => {
    //     return {
    //       data: response.data || [],
    //       meta: response.meta || { page: 1, totalPage: 1 },
    //     };
    //   },
    // }),
    getAllTransactions: builder.query({
      query: (params) => ({
        url: "/transaction",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION"],
    }),
    getOverview: builder.query({
      query: () => ({
        url: "/user/overview",
        method: "GET",
      }),
      providesTags: ["USER", "TRANSACTION", "WALLET", "OVERVIEW"],
      transformResponse: (response: any) => response.data,
    }),

  }),
});

export const {
  useApproveAgentMutation,
  useSuspendAgentMutation,
  useBlockWalletMutation,
  useUnblockWalletMutation,
  useGetAllTransactionsQuery,
  useGetOverviewQuery,
} = adminApi;
