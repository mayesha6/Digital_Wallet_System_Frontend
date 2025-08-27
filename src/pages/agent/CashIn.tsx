/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCashInMutation } from "@/redux/features/agent/agent.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  phone: z
    .string()
    .min(11, "User phone number is required")
    .max(15, "Phone number is too long"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Amount must be a positive number",
    }),
});

export default function CashIn() {
  const [cashIn] = useCashInMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      amount: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Processing cash-in...");

    try {
      const res = await cashIn({
        phone: data.phone,
        amount: Number(data.amount),
      }).unwrap();

      if (res.success) {
        toast.success("Cash-in successful.", { id: toastId });
        form.reset();
      } else {
        toast.error("Something went wrong.", { id: toastId });
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to cash-in.", { id: toastId });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-5 mt-16">
      <Card>
        <CardHeader>
          <CardTitle>Cash In</CardTitle>
          <CardDescription>Top up a user's wallet securely</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="cash-in-form"
              className="space-y-5"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter user's phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter amount" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" form="cash-in-form">
            Cash In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
