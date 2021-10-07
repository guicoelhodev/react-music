import styled from 'styled-components';

export const ContainerMusic = styled.div`
  height:auto;
  display:grid;
  width:clamp(280px,100%,960px);
  grid-template-columns: repeat(auto-fit, minmax(auto, 260px));
  grid-template-rows: auto;
  align-items:center;
  justify-content: center;
  gap:40px;
  padding: 20px 0;
`;
