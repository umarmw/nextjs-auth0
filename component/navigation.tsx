import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./login";
import LogoutButton from "./logout";

const Navigation = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav>
      <li><a href="/">Home</a></li>
      {
        !isAuthenticated && <li><LoginButton /></li>
      }
      <li><a href="profile">Profile page</a></li>
      {
        isAuthenticated && <><li><a href="myaccount">My account page</a></li><li><LogoutButton /></li></>
      }
    </nav>
  );
};

export default Navigation;