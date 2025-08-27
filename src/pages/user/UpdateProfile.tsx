/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useProfileQuery, useUpdateProfileMutation } from "@/redux/features/user/user.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function UpdateProfile() {
  const navigate = useNavigate();
  const { data: userData, isLoading: profileLoading } = useProfileQuery({});
  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (userData?.data) {
      setName(userData.data.name || "");
      setAddress(userData.data.address || "");
    }
  }, [userData]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name) return;

    try {
      await updateProfile({
        id: userData?.data?._id,
        data: { name, address }, 
      }).unwrap();
      if(userData?.data?.role === "USER"){
        navigate("/user/profile");
      }
      else if(userData?.data?.role === "AGENT"){
        navigate("/agent/profile");
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  if (profileLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto mt-8 p-4">
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Update Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit} id="update-profile-form">
            <div>
              <p className="text-sm text-gray-500 mb-1">Name</p>
              <Input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Address</p>
              <Input value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <Button type="submit" disabled={updating} form="update-profile-form">
              {updating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
