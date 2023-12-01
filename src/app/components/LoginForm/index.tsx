"use client";

import { useState } from "react";
import "./styles.css";
import { getUser } from "@/app/[locale]/api";
import { useRouter } from "@/app/utils";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<{ name: string; password: string }>({
    name: "",
    password: "",
  });
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async () => {
    const usersData = await getUser(data);
    if (usersData) {
      if (typeof window !== "undefined") {
        localStorage.setItem("isAdmin", "true");
        router.push("/");
      }
    }
  };

  return (
    <div id="loginFormWrapper">
      <form id="loginForm">
        <h4 id="loginFormTitle">Log in</h4>
        <div id="loginFormBody">
          <div className="loginFormItem">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div className="loginFormItem">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={changeHandler}
            />
          </div>
        </div>

        <button id="loginButton" type="button" onClick={submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
