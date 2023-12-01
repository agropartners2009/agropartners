"use client";

import { useRouter } from "@/app/utils";
import "./styles.css";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  return (
    <div
      id="logoutButton"
      onClick={() => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("isAdmin");
          router.push("/");
        }
      }}
    >
      Log out
    </div>
  );
};

export default LogoutButton;
