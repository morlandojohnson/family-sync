import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  async function resetPassword(formData: FormData) {
    "use server";
    const supabase = await createClient();

    const data = formData.get("email") as string;

    const { error } = await supabase.auth.resetPasswordForEmail(data);

    if (error) {
      console.log(error);
      redirect("/error");
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>Please enter your new password.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={resetPassword}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">New Password</Label>
                <Input
                  id="text"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <Label htmlFor="email">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Update your password
                </Button>
              </div>
              <Link
                href="/auth/login"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Back to Log in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
