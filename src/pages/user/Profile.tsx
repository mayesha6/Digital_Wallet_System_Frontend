import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { useProfileQuery } from "@/redux/features/user/user.api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Profile() {
  const { data: user, isLoading, isError } = useProfileQuery({});

  console.log(user?.data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
      </div>
    );
  }

  if (isError || !user) {
    return (
      <p className="text-center text-red-500">
        Failed to load profile. Please try again.
      </p>
    );
  }

  return (
    <div className="max-w-2xl w-full mx-auto p-4">
      <Card className="rounded-2xl shadow-md">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="mt-3 text-xl font-semibold">
            {user?.data?.name}
          </CardTitle>
          <Badge variant="secondary" className="mt-1 capitalize">
            {user?.data?.role}
          </Badge>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4 mt-4">
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{user?.data?.phone}</p>
          </div>

          {user?.data?.address && (
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">{user?.data?.address}</p>
            </div>
          )}

          {user?.data?.wallet && (
            <div>
              <p className="text-sm text-gray-500">Wallet Balance</p>
              <p className="font-medium">
                {user?.data?.wallet.balance.toFixed(2)} ৳
              </p>
            </div>
          )}

          {user?.data?.role === "AGENT" && (
            <div>
              <p className="text-sm text-gray-500">Commission Rate</p>
              <p className="font-medium">{user?.data?.commissionRate}%</p>
            </div>
          )}

          <div className="pt-4">
            {user?.data?.role === "AGENT" && (
              <Button asChild className="w-full">
                <Link to="/agent/updateProfile">Update Profile</Link>
              </Button>
            )}

            {user?.data?.role === "USER" && (
              <Button asChild className="w-full">
                <Link to="/user/updateProfile">Update Profile</Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
