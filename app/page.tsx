"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <SignedIn>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Welcome to NextForms Dashboard</h1>
        <Button>Create New Form</Button>
      </div>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </SignedIn>
  );
}