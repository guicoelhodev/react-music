import React from "react";
import Header from "components/Header";
import MyPlaylist from "components/MyPlaylist";
import HomePageNav from "pages/HomePageNav";
import { Route, Routes } from "react-router-dom";
import * as S from "./style";

export const Home = () => {
  return (
    <S.Container>
      <S.EmptyDiv />
      <section>
        <Header />
        <Routes>
          <Route path="/home" element={HomePageNav}>
            <Route path="myPlaylist" element={MyPlaylist} />
          </Route>
        </Routes>
      </section>
    </S.Container>
  );
};
