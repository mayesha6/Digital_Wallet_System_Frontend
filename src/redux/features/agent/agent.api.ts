import { baseApi } from "@/redux/baseApi";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cashIn: builder.mutation({
      query: (payload: { phone: string; amount: number }) => ({
        url: "/wallet/cash-in",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"], // invalidate cache if needed
    }),
  }),
});

export const { useCashInMutation } = agentApi;
