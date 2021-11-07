import React, {useEffect, useRef} from "react";

import { IPictures } from "../types";
import Pictures from "../components/Locals";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import styled from "styled-components";

interface IPicture {}

const PicStyled = styled.div<IPicture>`
  margin: auto;
  background-color: transparent;

  .cerceve {
    width: 100%;
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    z-index: 2;
    object-fit: contain;
    border-radius: 0.4rem;
  }
  .gif {
    width: 100%;
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    z-index: 1;
    object-fit: contain;

    -webkit-transition: 0.15s;
    -moz-transition: 0.15s;
    -ms-transition: 0.15s;
    -o-transition: 0.15s;
    transition: 0.15s;
  }

  div {
    will-change: transform;
    transition: transform 450ms;
  }

  @media screen and (max-width: 2000px) {
    div {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      max-height: 340px;
      max-width: 340px;
      min-width: 340px;
      min-height: 340px;
    }
  }
  @media screen and (max-width: 1700px) {
    div {
      max-height: 330px;
      max-width: 330px;
      min-width: 330px;
      min-height: 330px;
    }
  }
  @media screen and (max-width: 1500px) {
    div {
      max-height: 320px;
      max-width: 320px;
      min-width: 320px;
      min-height: 320px;
    }
  }
  @media screen and (max-width: 1200px) {
    div {
      max-height: 310px;
      max-width: 310px;
      min-width: 310px;
      min-height: 310px;
    }
  }
  @media screen and (max-width: 900px) {
    div {
      max-height: 310px;
      max-width: 310px;
      min-width: 310px;
      min-height: 310px;
    }
  }
  @media screen and (max-width: 700px) {
    div {
      max-height: 300px;
      max-width: 300px;
      min-width: 300px;
      min-height: 300px;
    }
  }
  @media screen and (max-width: 500px) {
    div {
      max-height: 290px;
      max-width: 290px;
      min-width: 290px;
      min-height: 290px;
    }
  }
  @media screen and (max-width: 400px) {
    div {
      max-height: 280px;
      max-width: 280px;
      min-width: 280px;
      min-height: 280px;
    }
  }

  .gif:hover {
    transition: transform 250ms;
    transform: rotate(-10deg);
  }
`;

interface Props {
  picture: IPictures[];
}

const Picture: React.FC<Props> = (props) => {
  let refPictures = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refPictures.current!, {
      y: 100,
      opacity: 0.4,
      scale: 0.3,
      duration: 0.8,
      delay: 0,
    });
  });

  return (
    <PicStyled className={"picture"}>
      <div ref={refPictures}>
        {props.picture.map((value: IPictures) => {
          if (value["picture_url"] !== "gif") {
            return (
              <img
                className={"gif"}
                src={Pictures[value["picture_url"]].default}
                alt="amk"
                key={value.id}
              />
            );
          } else if (value["picture_url"] === "gif") {
            return (
              <img
                className={"gif"}
                src={Pictures[value["picture_url"]].default}
                alt="amk"
                key={"_"}
              />
            );
          } else {
            <div></div>;
          }
        })}
      </div>
    </PicStyled>
  );
};

export default Picture;
