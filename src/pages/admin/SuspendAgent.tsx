/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useSuspendAgentMutation } from "@/redux/features/admin/admin.api";

const SuspendAgent = () => {
  const [agentId, setAgentId] = useState("");
  const [suspendAgent, { isLoading }] = useSuspendAgentMutation();

const handleSuspend = async () => {
  if (!agentId) {
    toast.error("Please enter an Agent ID");
    return;
  }

  try {
    const res = await suspendAgent({ id: agentId, data: {} }).unwrap();
    toast.success(res.message || "Agent suspended successfully!");
    setAgentId("");
  } catch (error: any) {
    toast.error(error?.data?.message || "Failed to suspend agent");
  }
};


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card shadow rounded-xl space-y-4 w-full">
      <h1 className="text-2xl font-bold text-center">Suspend Agent</h1>
      <p className="text-sm text-muted-foreground text-center">
        Enter the Agent ID to suspend their account
      </p>
      <Input
        placeholder="Enter Agent ID"
        value={agentId}
        onChange={(e) => setAgentId(e.target.value)}
      />
      <Button
        onClick={handleSuspend}
        className="w-full"
        disabled={isLoading}
        variant="destructive"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2 h-4 w-4" /> Suspending...
          </>
        ) : (
          "Suspend Agent"
        )}
      </Button>
    </div>
  );
};

export default SuspendAgent;
