import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <React.Fragment>
      <button className='button' onClick={() => loginWithRedirect()}>Login!</button>
    </React.Fragment>
  );
};

export default LoginButton;
