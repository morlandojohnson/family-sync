"use client";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <p>Sorry, something went wrong</p>
      <Link href="/login" className="border-2 border-black px-4">
        Back to Login
      </Link>
    </>
  );
}
