import { IContainer, IRarity } from "../../types";
import React, { useEffect, useRef, useState } from "react";

import Barchart from "../../components/Barchart";
import ChosenPhoto from "../../components/ChosenPhoto";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import styled from "styled-components";

const AttributeComponent = styled.div`
  margin-top: 15%;
  display: grid;
  height: 900px;
  width: 100%;
  z-index: 20;
  flex-direction: column;
  grid-template-areas:
    "attributesText"
    "photosComponent"
    "barChart";
  grid-template-columns: 0.2fr 1.2fr 0.2fr;
  grid-template-rows: 0.2fr 1.2fr 0.4fr 1.2fr 0.4fr 1.2fr 0.2fr;

  .attributesText {
    grid-area: attributesText;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: white;
      font-size: 4.5rem;
      letter-spacing: 0.1rem;
      font-family: "Fredoka One", normal;
      font-weight: 400;
    }
    h2 {
      margin-top: -3%;
      color: #ffffffbe;
      width: 90%;
      text-align: center;
      font-size: 1.5rem;
      line-height: 2.5rem;
      font-family: "Josefin Sans", cursive;
      font-weight: 200;
    }
  }

  .photosComponent {
    grid-area: photosComponent;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;
    z-index: 1;
  }
  .barChart {
    grid-area: barChart;
    grid-row-start: 6;
    grid-row-end: 7;
    grid-column-start: 2;
    grid-column-end: 3;
    z-index: 1;
  }
  svg {
    display: flex;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
  }
  svg g rect {
    -webkit-transition: fill 0.35s;
    -moz-transition: fill 0.35s;
    -ms-transition: fill 0.35s;
    transition: transform 450ms;
  }
  svg g:hover {
    rect {
      pointer-events: all;
      fill: #121420;
      -webkit-transition: fill 100ms ease-in;
      -moz-tranition: fill 100ms ease-in;
      -ms-transition: fill 100ms ease-in;
      transition: fill 100ms ease-in;
      stroke: #ffffff;
      stroke-width: 1px;
      stroke-linejoin: round;
    }
    .numberText {
      display: flex;
      fill: white;
    }
    .attributeText {
      display: none;
    }
  }
  svg {
    g {
      .attributeText {
        fill: white;
        z-index: 20;
      }
      .numberText {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .attributesText {
      h1 {
        font-size: 4.5rem;
        letter-spacing: 0.1rem;
      }
      h2 {
        width: 90%;
        font-size: 1.4rem;
        line-height: 2.2rem;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .attributesText {
      h1 {
        font-size: 3.2rem;
        letter-spacing: 0.1rem;
      }
      h2 {
        width: 80%;
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 0.2fr 4fr 0.2fr;

    .attributesText {
      h1 {
        font-size: 3.2rem;
        letter-spacing: 0.1rem;
      }
      h2 {
        width: 60%;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 0.2fr 4fr 0.2fr;

    .attributesText {
      h1 {
        font-size: 2.5rem;
        letter-spacing: 0.1rem;
      }
      h2 {
        width: 60%;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`;

interface IAttribute extends IRarity {
  data: IContainer;
}

export const AttributesContainer: React.FC<IAttribute> = (props) => {
  const [referenceItem, setReferenceItem] = useState<number>(0);
 
  const getElement = (event: any) => {
    const id = event.target.id;
    if (id !== undefined) {
      if (typeof id === "string" && id !== "") {
        setReferenceItem(Number(event.target.id));
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mouseover", getElement);
    return () => {
      document.removeEventListener("mouseover ", getElement);
    };
  });

  return (
    <AttributeComponent>
      <div  className={"attributesText"}>
        ,<h1 >{props.data.title}</h1>
        <h2 >{props.data.subtitle}</h2>
      </div>
      <ChosenPhoto referenceItem={referenceItem} />
      <Barchart elements={props.elements} />
    </AttributeComponent>
  );
};
