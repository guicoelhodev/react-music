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
padding-bottom:20px;
transform:translateY(-80px);
bordeR:1px solid var(--orange);
width:100%;
height:240px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
background-color: var(--white);

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

export const Title = styled.h2`
   width:200px;
   padding:0;
   font-size:1.5rem !important;
   text-overflow: ellipsis;
   text-align:center;
   overflow: hidden;
   white-space: nowrap;

`
export const RemoveButton = styled.button`
background-color:Red;
color:white;
border:1px solid transparent;
font-size:1rem;
width:160px;
height:40px;
transition: all 0.8s ease;

:hover{
  border:1px solid red;
  color:red;
  background-color:white;
} 

`