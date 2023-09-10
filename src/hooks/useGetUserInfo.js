import React from "react";

export const useGetUserInfo = () => {
  // JSON parse is use to get  back data in object from string form, from local storage,
  // it like decrypt of JSON.stringify()
  const { name, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );
  return { name, profilePhoto, userID, isAuth };
};
