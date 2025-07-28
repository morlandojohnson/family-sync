import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Landing Page</h1>
      <ThemeToggle />
      <div className="flex gap-4 justify-center">
        <Link href="/auth/login" className="border-2 px-2">
          Login
        </Link>
        <Link href="/auth/sign-up" className="border-2 px-2">
          Sign Up
        </Link>
      </div>
    </>
  );
}
