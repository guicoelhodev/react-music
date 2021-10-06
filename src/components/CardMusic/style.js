import styled from 'styled-components';
import { PlayButton } from 'design/PlayButton';

export const ContainerMusic = styled.article`
position:relative;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
width:260px;
height:auto;
transition:all 0.8s ease;

:hover {
  scale:1.07;
}
`

export const Image = styled.img`

width:200px;
height:200px;
object-fit:contain;
z-index:1;
border-radius:14px;

`

export const DataItems = styled.div`
gap:10px;
padding-top:80px;
transform:translateY(-100px);
bordeR:1px solid var(--orange);
width:100%;
height:220px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:end;
background-color: var(--white);

h3 {
   font-size:1.4rem;
   text-align:center;
   width: 220px;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
  }

  aside {
    padding-top:10px;
    display:flex;
    width:70%;
    align-items:center;
    justify-content:center;
    gap:30px;
  }

  
`

export const PlayButtonM = styled(PlayButton)`
width:40px;
height:40px;
padding-left:5px;
`

export const Favorite = styled(PlayButtonM)`
width:69px;
height:68px;
padding-left:0;
background-color:transparent;

svg {
  fill:${(props) => props.color};
}
`