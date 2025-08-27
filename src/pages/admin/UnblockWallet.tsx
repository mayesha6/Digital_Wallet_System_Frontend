/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useUnblockWalletMutation } from "@/redux/features/admin/admin.api";

const UnblockWallet = () => {
  const [walletId, setWalletId] = useState("");
  const [unblockWallet, { isLoading }] = useUnblockWalletMutation();

  const handleUnblock = async () => {
    if (!walletId) {
      toast.error("Please enter a Wallet ID");
      return;
    }

    try {
      const res = await unblockWallet(walletId).unwrap();
      toast.success(res.message || "Wallet unblocked successfully!");
      setWalletId("");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to unblock wallet");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card rounded-xl shadow space-y-4 w-full">
      <h1 className="text-xl font-bold text-center">Unblock Wallet</h1>
      <p className="text-sm text-muted-foreground text-center">
        Enter the Wallet ID to unblock it
      </p>
      <Input
        placeholder="Enter Wallet ID"
        value={walletId}
        onChange={(e) => setWalletId(e.target.value)}
      />
      <Button
        onClick={handleUnblock}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Unblocking...
          </>
        ) : (
          "Unblock Wallet"
        )}
      </Button>
    </div>
  );
};

export default UnblockWallet;
