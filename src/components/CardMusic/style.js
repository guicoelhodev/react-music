import styled from 'styled-components';
import { PlayButton } from 'design/PlayButton';

export const ContainerMusic = styled.article`
  padding:20px 0;
  position:relative;
  width:300px;
  height:100px;
  display:flex;
  align-items  : center;
  border:1px solid var(--orange);
  border-radius:8px;
  background-color: var(--white);

  aside {
      width:100px;
      height:100px;
      padding:10px;
      box-sizing: border-box;
  }

  div {
      display:flex;
      flex-direction:column;
      justify-content: space-evenly;
      gap:5px;

      h5 {
        font-size:1.2rem;
      }

      h6 {
        margin-top:5px;
        font-size:1rem;
      }

      p {
        font-size:0.9rem;
      }
  }
`;

export const ImgMusic = styled.img`

width:100%;
object-fit:contain;
`

export const MiniPlay = styled(PlayButton)`
position: absolute;
width:30px;
height:30px;
bottom:5px;
right:5px;
z-index:2;
padding-left:5px;
`

export const Favorite = styled(PlayButton)`
position: absolute;
width:30px;
height:30px;
top:5px;
right:5px;
z-index:2;
background-color: transparent;

svg {
  fill:${(props) => props.colorConfig};
  width:50px;
  height:50px;
}


`