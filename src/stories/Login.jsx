import React, { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import "./login.css";
import { Page } from "./Page";
import Sidebar from "./Sidebar";

export default function Login() {
  const [user, setUser] = React.useState();

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Logged In User" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Signed Up User" })}
      />
      <Sidebar
        menus={[
          "Home",
          "About",
          "Services",
          "Contact",
          "Terms and Conditions",
          "Careers",
          "Settings",
        ]}
        onMenuClick={(menuName) => console.log(`Menu Clicked: ${menuName}`)}
      />
      <Page />
      <div className="login-container">
        <Button
          primary={true}
          backgroundColor="#1EA7FD"
          size="large"
          label="Sample Button"
          onClick={() => {
            console.log("Button clicked");
          }}
        />
      </div>
    </>
  );
}
