import styled from 'styled-components';


interface IProgress {
  scroll: string
}

const  Progress  =  styled.div<IProgress>`
  position:  fixed;
  background:  linear-gradient(
    to right,
    #0f0f0fcc ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  10px;
  z-index:  3;

`;

export  default  Progress;