/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import config from "@/config";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const form = useForm({
    //! For development only
    defaultValues: {
      phone: "01881979246",
      password: "StrongPass@123",
    },
  });
  const [login] = useLoginMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res.success) {
        toast.success("Logged in successfully");
        navigate("/");
      }
    } catch (err: any) {
      console.error(err.data.message);

      if (err.data.message === "Incorrect Password") {
        toast.error("Invalid credentials");
      }

      if (err.data.message === "User is not verified") {
        toast.error("Your account is not verified");
      }
      if (err.data.message === "User does not exist") {
        toast.error("User does not exist");
      }
    }
  };

  // Quick Login handler
  const quickLogin = (role: "USER" | "AGENT" | "ADMIN") => {
    let creds = { phone: "", password: "" };

    if (role === "USER") {
      creds = { phone: "01881979246", password: "StrongPass@123" };
    } else if (role === "AGENT") {
      creds = { phone: "01752363910", password: "StrongPass@123" };
    } else if (role === "ADMIN") {
      creds = { phone: "01752363911", password: "StrongPass@123" };
    }

    form.setValue("phone", creds.phone);
    form.setValue("password", creds.password);

    // Trigger submit immediately
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="018********"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        <div className="flex justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            // className="w-1/3"
            onClick={() => quickLogin("USER")}
          >
            User
          </Button>
          <Button
            type="button"
            variant="outline"
            // className="w-1/3"
            onClick={() => quickLogin("AGENT")}
          >
            Agent
          </Button>
          <Button
            type="button"
            variant="outline"
            // className="w-1/3"
            onClick={() => quickLogin("ADMIN")}
          >
            Admin
          </Button>
        </div>
        
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}
