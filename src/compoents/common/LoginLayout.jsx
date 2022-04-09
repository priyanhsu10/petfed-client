import React, { useState } from "react";
import { LoginRegisterHeader } from "../header/LoginRegisterHeader";
import { Login } from "../login/Login";
import { Register } from "../register/Register";

export const LoginLayout = () => {
  const [islogin, setIsLogin] = useState(true);
  return (
    <div>
      <LoginRegisterHeader />
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => setIsLogin(true)}
          >
            login
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
      </nav>

      {islogin && <Login />}
      {!islogin && <Register />}
    </div>
  );
};
