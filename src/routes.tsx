import React from "react";
import PlayerAudio from "components/PlayerAudio";
import { Home } from "pages/Home";
import UserLogin from "pages/UserLogin/index";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <UserLogin /> },
  {
    path: "/home",
    element: (
      <div>
        <PlayerAudio />
        <Home />
      </div>
    ),
  },
]);
