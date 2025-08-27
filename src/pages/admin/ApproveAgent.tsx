/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useApproveAgentMutation } from "@/redux/features/admin/admin.api";

const ApproveAgent = () => {
  const [agentId, setAgentId] = useState("");
  const [approveAgent, { isLoading }] = useApproveAgentMutation();

  const handleApprove = async () => {
  if (!agentId) {
    toast.error("Please enter an Agent ID");
    return;
  }

  try {
    const res = await approveAgent({ id: agentId, data: {} }).unwrap();
    toast.success(res.message || "Agent approved successfully!");
    setAgentId("");
  } catch (error: any) {
    toast.error(error?.data?.message || "Failed to approve agent");
  }
};


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card shadow rounded-xl space-y-4 w-full">
      <h1 className="text-2xl font-bold text-center">Approve Agent</h1>
      <p className="text-sm text-muted-foreground text-center">
        Enter the Agent ID to approve their account
      </p>
      <Input
        placeholder="Enter Agent ID"
        value={agentId}
        onChange={(e) => setAgentId(e.target.value)}
      />
      <Button
        onClick={handleApprove}
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2 h-4 w-4" /> Approving...
          </>
        ) : (
          "Approve Agent"
        )}
      </Button>
    </div>
  );
};

export default ApproveAgent;
