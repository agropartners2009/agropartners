"use client";

import LogoutButton from "@/app/components/LogoutButton";
import { useRouter } from "@/app/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const isAdmin = localStorage.getItem("isAdmin");
    const isAllow = isAdmin === "true";
    if (!isAllow) {
      router.push("/login");
    }
  }

  return (
    <>
      <LogoutButton />
      {children}
    </>
  );
}
