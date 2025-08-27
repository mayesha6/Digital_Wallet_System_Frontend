/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useVerifyUserMutation } from "@/redux/features/auth/auth.api";
import { userInfo } from "os";

const VerifyPage = () => {
  const navigate = useNavigate();
  const [verifyUser, { isLoading }] = useVerifyUserMutation();

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await verifyUser(userInfo).unwrap();
        if (res.success) {
          toast.success("Account verified successfully!");
          navigate("/"); 
        }
      } catch (err: any) {
        toast.error(err?.data?.message || "Verification failed");
      }
    };

    verify();
  }, [verifyUser, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold">
        {isLoading ? "Verifying your account..." : "Redirecting..."}
      </h1>
    </div>
  );
};

export default VerifyPage;
