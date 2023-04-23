import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Player } from "../Player";
import * as S from "./style";

export const MobilePlayer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <S.Container>
      <section>
        <button onClick={() => setIsDropdownOpen((prev) => !prev)}>
          <BsChevronDoubleLeft />
        </button>
      </section>

      <S.Dropdown open={isDropdownOpen}>
        <S.HiddenDropdown onClick={() => setIsDropdownOpen((prev) => !prev)}>
          <BsChevronDoubleRight />
        </S.HiddenDropdown>

        <div className="spacing">
          <Player />
        </div>
      </S.Dropdown>

      {isDropdownOpen && (
        <S.BlurBackground onClick={() => setIsDropdownOpen((prev) => !prev)} />
      )}
    </S.Container>
  );
};
