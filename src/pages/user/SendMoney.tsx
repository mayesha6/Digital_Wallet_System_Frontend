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
import { useSendMoneyMutation } from "@/redux/features/user/user.api";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";


const formSchema = z.object({
  receiverPhone: z
    .string()
    .min(11, "Receiver phone number is required")
    .max(15, "Phone number is too long"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Amount must be a positive number",
    }),
});

export default function SendMoney() {
  const [sendMoney] = useSendMoneyMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      receiverPhone: "",
      amount: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Sending money...");

    try {
      const res = await sendMoney({
        receiverPhone: data.receiverPhone,
        amount: Number(data.amount),
      }).unwrap();

      if (res.success) {
        toast.success("Money sent successfully.", { id: toastId });
        form.reset();
      } else {
        toast.error("Something went wrong.", { id: toastId });
      }
    } catch (err: any) {
      // console.error(err);
      toast.error(err?.data?.message || "Failed to send money.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-5 mt-16">
      <Card>
        <CardHeader>
          <CardTitle>Send Money</CardTitle>
          <CardDescription>
            Transfer money securely to another wallet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="send-money-form"
              className="space-y-5"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="receiverPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter receiver's phone" {...field} />
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
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" form="send-money-form">
            Send
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
