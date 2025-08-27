import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetOverviewQuery } from "@/redux/features/admin/admin.api";
import { Loader2, Users, UserCog, Receipt, Wallet } from "lucide-react";
import Transaction from "./Transaction";

const Overview = () => {
  const { data: overview, isLoading, isError } = useGetOverviewQuery({});

  console.log(overview);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">Failed to load overview data</p>
    );
  }

  return (
    <div className="max-w-7xl w-full mx-auto py-10 px-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Total Users */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {overview?.totalUsers ?? 0}
            </div>
          </CardContent>
        </Card>

        {/* Total Agents */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <UserCog className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {overview?.totalAgents ?? 0}
            </div>
          </CardContent>
        </Card>

        {/* Transactions Count */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <Receipt className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {overview?.transactionCount ?? 0}
            </div>
          </CardContent>
        </Card>

        {/* Transaction Volume */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Transaction Volume
            </CardTitle>
            <Wallet className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ৳{overview?.transactionVolume?.toLocaleString() ?? 0}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Transaction />
      </div>
    </div>
  );
};

export default Overview;
