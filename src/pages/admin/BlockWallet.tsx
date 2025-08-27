/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useBlockWalletMutation } from "@/redux/features/admin/admin.api";

const BlockWallet = () => {
  const [walletId, setWalletId] = useState("");
  const [blockWallet, { isLoading }] = useBlockWalletMutation();

  const handleBlock = async () => {
    if (!walletId) {
      toast.error("Please enter a Wallet ID");
      return;
    }

    try {
      const res = await blockWallet(walletId).unwrap();
      toast.success(res.message || "Wallet blocked successfully!");
      setWalletId("");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to block wallet");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card rounded-xl shadow space-y-4 w-full">
      <h1 className="text-xl font-bold text-center">Block Wallet</h1>
      <p className="text-sm text-muted-foreground text-center">
        Enter the Wallet ID to block it
      </p>
      <Input
        placeholder="Enter Wallet ID"
        value={walletId}
        onChange={(e) => setWalletId(e.target.value)}
      />
      <Button
        onClick={handleBlock}
        disabled={isLoading}
        className="w-full"
        variant="destructive"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Blocking...
          </>
        ) : (
          "Block Wallet"
        )}
      </Button>
    </div>
  );
};

export default BlockWallet;
