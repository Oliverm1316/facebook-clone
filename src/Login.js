import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          className='login__image1'
          src='https://cdn.freebiesupply.com/logos/thumbs/2x/facebook-logo-2019-thumb.png'
          alt=''
        />
        <img
          className='login__image2'
          src='https://thetaiwantimes.com/wp-content/uploads/2020/07/1280px-Facebook_Logo_2019.svg_.png'
          alt=''
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
