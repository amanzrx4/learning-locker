import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const GoogleProviderAuthCallback = () => {
  const [auth, setAuth] = useState();
  const { setUser } = useAuthContext();
  const location = useLocation();
  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;

    fetch(`http://localhost:1337/api/auth/google/callback${search}`)
      .then((res) => res.json())
      .then((data) => {
        const token = data.jwt;
        localStorage.setItem("token", token);
        setUser(data.user);
      });
  }, [location]);

  return (
    <div>
      {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )}
    </div>
  );
};

export default GoogleProviderAuthCallback;
