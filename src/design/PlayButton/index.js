import styled from 'styled-components';

export const PlayButton = styled.button`
  width:50px;
  height:50px;
  border-radius:50%;
  border:none;
  display:flex;
  align-items:Center;
  justify-content:center;
  background-color  : var(--orange);
  cursor:pointer;

  svg {
      width:60%;
      height:60%;
      fill:var(--white);
  }


`;

export const HeartIcon = styled(PlayButton)`

background-color:transparent;
transition:all 1s ease-in-out;

svg {
  width:100%;
  height:100%;
  fill:#323232;
}

:focus {
  svg {
    fill:#ef8d8d;
  }
}
  
`