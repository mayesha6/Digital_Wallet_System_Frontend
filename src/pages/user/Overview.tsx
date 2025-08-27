import { CardContent } from "@/components/ui/card";
import { useOverviewQuery } from "@/redux/features/user/user.api";
import { Loader2 } from "lucide-react";
import MyTransaction from "./MyTransaction";

export default function Overview() {
  const { data: overview, isLoading, isError } = useOverviewQuery({});

  console.log(overview?.data?.wallet?.balance);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        <Loader2 className="h-6 w-6 animate-spin mr-2" />
        Loading transactions...
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Failed to load transactions. Please try again.
      </p>
    );
  }

  return (
    <div className="space-y-10">
      <CardContent>
        {overview?.data?.wallet?.balance !== undefined ? (
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 pb-2">
              Current Balance
            </p>
            <p className="text-2xl font-bold text-purple-600">
              {overview?.data?.wallet?.balance.toFixed(2)} ৳
            </p>
          </div>
        ) : (
          <p className="text-gray-500 text-center">No wallet data found.</p>
        )}
      </CardContent>
      <div>
        {/* <p className="text-lg font-medium text-gray-600 pb-5 text-center">Transactions</p> */}
        <MyTransaction />
      </div>
    </div>
  );
}
