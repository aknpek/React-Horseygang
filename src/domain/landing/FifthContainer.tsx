import { IContainer, IFifthContainer, IPictures } from "../../types";
import { useEffect, useRef } from "react";

import BackGroundFirst from "../../svgs/BackGroundFirst";
import BackGroundSecond from "../../svgs/BackGroundSecond";
import Pictures from "../../components/Locals";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import styled from "styled-components";

const FifthComponent = styled.div<IFifthContainer>`
  display: grid;
  height: 800px;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 0fr 1fr 2fr 1fr 1fr;
  grid-template-areas:
    "titleDiv"
    "sloganDiv"
    "picturesDiv";

  .backGroundSecond {
    top: 25%;
    width: 100%;
    position: absolute;
    background-color: transparent;
    z-index: 0;
  }

  .backGroundFirst {
    width: 100%;
    position: absolute;
    background-color: transparent;
  }

  .titleDiv {
    grid-area: titleDiv;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: 0.15s;
    -moz-transition: 0.15s;
    -ms-transition: 0.15s;
    -o-transition: 0.15s;
    transition: 0.15s;
    z-index: 1;

    h1 {
      margin-bottom: 0.5rem;
      font-size: 4.5rem;
      font-family: "Fredoka One", cursive;
      color: white;
      font-weight: 200;
    }
  }
  .titleDiv:hover {
    transition: transform 150ms background-color 0.5s ease color 0.5s ease;
    transform: scale(1.05);
  }
  .sloganDiv {
    grid-area: sloganDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    width: 70%;
    margin: auto;
    z-index: 1;

    h2 {
      text-align: center;
      font-size: 1.2rem;
      line-height: 2;
      font-weight: 100;
      font-family: "Josefin Sans", cursive;
      color: #ffffffbe;
    }
  }
  .pictureDiv {
    grid-area: pictureDiv;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;

    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 1;

    h1 {
      text-align: center;
      font-size: 1.8rem;
      line-height: 2.5;
      font-weight: 100;
      font-family: "Fredoka One", normal;
      color: #ffffffbe;
    }
    img {
      height: 300px;
      width: 300px;
      background-color: transparent;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
      -ms-transition: 0.1s;
      -o-transition: 0.1s;
      transition: 0.1s;
    }

    img:hover {
      transition: transform linear 250ms;

      transform: translateY(-20px);
    }
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: 0.2fr 2fr 0.2fr;
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: 0.2fr 5fr 0.2fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 0.2fr 8fr 0.2fr;
  }
  @media screen and (max-width: 900px) {
    height: 1550px;
    grid-template-columns: 0.2fr 6fr 0.2fr;
    grid-template-rows: 0.1fr 0.15fr 0.1fr 2fr 0.2fr;

    .titleDiv {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      h1 {
      }
    }

    .sloganDiv {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      width: 90%;
      margin: auto;
      z-index: 1;

      h2 {
      }
    }
    .pictureDiv {
      display: grid;

      h1 {
      }
      img {
      }
    }
  }
  @media screen and (max-width: 750px) {
    height: 1550px;
  }
  @media screen and (max-width: 500px) {
    height: 1200px;
    pointer-events: none;
    grid-template-columns: 0.2fr 6fr 0.2fr;
    grid-template-rows: 2fr 0.1fr 0.1fr 1fr 0.2fr;

    .titleDiv {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      h1 {
        font-size: 3rem;
      }
    }

    .sloganDiv {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      width: 90%;
      margin: auto;
      z-index: 1;

      h2 {
      }
    }
    .pictureDiv {
      display: grid;

      h1 {
        display: none;
      }
      img {
        margin-top: 1.2rem;
        height: 14rem;
        width: 14rem;
      }
    }
  }
  @media screen and (max-width: 400px) {
    height: 1200px;
    grid-template-columns: 0.2fr 6fr 0.2fr;
    grid-template-rows: 1fr 0.1fr 0.1fr 1fr 0.2fr;

    .titleDiv {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      h1 {
        font-size: 3.5rem;
      }
    }

    .sloganDiv {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      width: 90%;
      margin: auto;
      z-index: 1;

      h2 {
        font-size: 1.1rem;
        line-height: 1.3;
      }
    }
    .pictureDiv {
      display: grid;

      h1 {
        display: none;
      }
      img {
        margin-top: 1.2rem;
        height: 14rem;
        width: 14rem;
      }
    }
  }
`;

const RarirtyImages: React.FC<IPictures> = (props) => {
  let refEachImage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refEachImage.current!, {
      y: 100 * props.id,
      opacity: 0.1,
      scale: 0.5,
      delay: 0.1,
      duration: 0.3,
      scrollTrigger: refEachImage.current!,
    });
  });


  return (
    <div ref={refEachImage} key={props.id + "div"} className={`pictureDiv${props.id}`}>
      <img
        src={Pictures[props.picture_url].default}
        key={props.id + "img"}
        alt={props.description}
      ></img>
      <h1 key={props.id + "h1"}>{props.title}</h1>
    </div>
  );
};

interface PropsFifth {
  showFifthContainer: Boolean;
  data: IContainer;
}

const FifthContainer: React.FC<PropsFifth> = (props) => {
  let refTitle = useRef<HTMLDivElement>(null);
  let refMiddleText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refTitle.current!, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      scrollTrigger: refTitle.current!,
    });
    gsap.from(refMiddleText.current!, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      scrollTrigger: refMiddleText.current!,
    });
  });

  return (
    <FifthComponent className="Fifth-Component">
      <div ref={refTitle} className={"titleDiv"}>
        <h1>{props.data.title}</h1>
      </div>
      <div ref={refMiddleText} className={"sloganDiv"}>
        <h2>{props.data.slogan}</h2>
      </div>
      <div className={"pictureDiv"}>
        {props.data["pictures"].map((value: IPictures) => (
          <RarirtyImages {...value} key={`${value.id}`} />
        ))}
      </div>

      <div className={"backGroundFirst"}>
        <BackGroundFirst props={{}} />
      </div>

    </FifthComponent>
  );
};

export default FifthContainer;
