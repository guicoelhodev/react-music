import * as S from "./style";
import { RiLogoutBoxLine } from "react-icons/ri";
import LogoTitle from "design/LogoTitle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const result = useSelector((state) => state.getUser[1]);
  const playlist = useSelector((state) => state.getFavoriteMusic);
  const [total, setTotal] = useState(0);

  var data = new Date();

  let day = String(data.getDate());
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();

  useEffect(() => {
    setTotal(playlist.length);
  }, [playlist]);

  return (
    <S.HeaderContainer>
      <S.LogOut onClick={() => navigate("/")}>
        <RiLogoutBoxLine />
      </S.LogOut>
      <S.Informations>
        <LogoTitle />
        <div>
          <p>{result}</p>
          <p>{`${day} / ${mes} / ${ano}`}</p>
        </div>
        <S.ContainerButtons>
          <S.ButtonPage onClick={() => navigate("/home")}>
            Página home
          </S.ButtonPage>
          <S.ButtonPage onClick={() => navigate("/home/myPlaylist")}>
            <p>Minha playlist</p>
            <S.CounterMusic>{total}</S.CounterMusic>
          </S.ButtonPage>
        </S.ContainerButtons>
      </S.Informations>
    </S.HeaderContainer>
  );
};
export default Header;
