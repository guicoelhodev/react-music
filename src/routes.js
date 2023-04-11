import MyPlaylist from "components/MyPlaylist";
import PlayerAudio from "components/PlayerAudio";
import Home from "pages/Home";
import HomePageNav from "pages/HomePageNav";
import UserLogin from "pages/UserLogin/index";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <UserLogin /> },
  // { path: "/home", element: <HomePageNav /> },
  // { path: "/home/playlist", element: <MyPlaylist /> },

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
