import React, { useEffect, useRef } from "react";

import styled from "styled-components";

interface Title {
  title: string;
  subtitle: string;
}

interface IDivComponent {
  color: string;
  colorSub: string;
}
interface ITitles extends IDivComponent {
  data: Title;
}

const TitleComponent = styled.div<IDivComponent>`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-direction: column;

  h1 {
    font-size: 4.5rem;
    color: ${(props) => props.color};
    text-align: center;
    font-weight: 600;
    font-family: "Baloo";
    transition: transform 250ms;
  }

  h2 {
    width: 60%;
    font-size: 1.1rem;
    /* letter-spacing: .05rem; */
    font-family: 'Jost';
    /* font-family: "Josefin Sans", cursive; */
    font-weight: 200;
    color: ${(props) => props.colorSub}; /*  */
    line-height: 2;
  }

  h1:hover {
    transition: transform 250ms;
    transform: translateX(+10px) rotate(+3deg) scale(1.1);
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 3.2rem;
    }
    h2 {
      width: 60%;
      line-height: 2;
    }
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 2.2rem;
    }
  }
`;

const Titles: React.FC<ITitles> = (props) => {
  return (
    <TitleComponent color={props.color} colorSub={props.colorSub}>
      <h1>{props.data.title}</h1>
      {props.data.subtitle ? <h2>{props.data.subtitle}</h2> : <></>}
    </TitleComponent>
  );
};

export default Titles;
