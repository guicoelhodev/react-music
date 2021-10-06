import styled from 'styled-components';

export const ContainerMusic = styled.div`

  display:grid;
  width:clamp(280px,100%,960px);
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
  grid-template-rows: auto;
  align-items:center;
  justify-content: center;
  border:1px solid green;
  gap:20px;
  padding: 20px 0;
`;
