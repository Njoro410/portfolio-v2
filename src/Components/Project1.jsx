import React from "react";
import screenguide from "../Assets/Mocks/screenguide.png";

const Project1 = () => {
  return (
    <div className="grid grid-cols-2 text-white">
      <div className="mt-36">
        <h1 className="mt-8 text-6xl font-Londrina text-">ScreenGuide</h1>
        <p>
          ScreenGuide is a movie and Tv Show webapp that allows users to view
          various tv shows and movies,watch trailers, see cast, create account
          via email or google, save favourites to firebase or set a film as
          watched.{" "}
        </p>
      </div>
      <div className="flex items-center justify-center mt-12">
        <img src={screenguide} alt="screenguide" />
      </div>
    </div>
  );
};

export default Project1;
