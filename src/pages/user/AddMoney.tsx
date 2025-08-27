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
import { useAddMoneyMutation } from "@/redux/features/user/user.api";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";


const formSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Amount must be a positive number",
    }),
});

export default function AddMoney() {
  const [addMoney] = useAddMoneyMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Add money...");

    try {
      const res = await addMoney({
        amount: Number(data.amount),
      }).unwrap();

      if (res.success) {
        toast.success("Money added successfully.", { id: toastId });
        form.reset();
      } else {
        toast.error("Something went wrong.", { id: toastId });
      }
    } catch (err: any) {
      // console.error(err);
      toast.error(err?.data?.message || "Failed to add money.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-5 mt-16">
      <Card>
        <CardHeader>
          <CardTitle>Add Money</CardTitle>
          <CardDescription>
            Add money securely to wallet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="add-money-form"
              className="space-y-5"
              onSubmit={form.handleSubmit(handleSubmit)}
            >

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
          <Button type="submit" form="add-money-form">
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
