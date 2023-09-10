import React, { useEffect } from "react";
import { auth } from "../../config/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import "./styles.css";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
const Auth = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);

    // to store in local storage , only string is stored, so convert all result in objects as need to be stored in local storge as below
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };

    // then to store in local storage , it need to be converted in string, so JSON.stringify is used
    localStorage.setItem("auth", JSON.stringify(authInfo));
    // navigate to /expense-tracker
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }
  return (
    <div className="login-page">
      <p>Sign in With Google to continue</p>
      <button onClick={signInWithGoogle} className="login-with-google-btn">
        Sign in with google
      </button>
    </div>
  );
};

export default Auth;
