import { IContainer, IPictures } from "../../types";
import React, { useEffect, useRef } from "react";

import Pictures from "../../components/Locals";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import styled from "styled-components";

const CozyLandComponent = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
  display: grid;
  height: 1000px;
  width: 100%;
  z-index: 10;
  flex-direction: column;
  grid-template-areas:
    "attributesText"
    "photosComponent"
    "subTitleDiv";
  grid-template-columns: 0.2fr 1.2fr 0.2fr;
  grid-template-rows: 0.2fr 1.2fr 0.4fr 1.2fr 0.5fr 0.2fr 1.2fr;

  .photosComponent {
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: 60%;
    }
  }

  .attributesText {
    z-index: 10;
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
    z-index: 10;
  }

  .subTitleDiv {
    grid-area: subTitleDiv;
    grid-row-start: 6;
    grid-row-end: 7;
    grid-column-start: 2;
    grid-column-end: 3;

    text-align: center;
    height: 90%;
    width: 50%;
    margin: auto;

    font-family: "Fredoka One", normal;
    letter-spacing: 0.3rem;
    border-radius: 1.2rem;
    background-color: #ff961b;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s ease;

    .subTitle {
      color: white;
    }

    :hover {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      transition: 0.8s ease;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1500px) {
    height: 900px;
    .photosComponent {
      /* img {
        min-height: 70%;
        width: 100%;
        max-width: 75%
      } */
    }
  }

  @media screen and (max-width: 1300px) {
    height: 800px;

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

    .subTitleDiv {
      h1 {
        font-size: 1.2rem;
      }
    }

    .photosComponent {
      img {
        min-height: 70%;
        width: 100%;
        max-width: 75%;
      }
    }
  }

  @media screen and (max-width: 900px) {
    height: 800px;

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

    .subTitleDiv {
      h1 {
        font-size: 1.2rem;
      }
    }

    .photosComponent {
      /* img {
        min-height: 80%;
        width: 100%;
        max-width: 85%
      } */
    }
  }

  @media screen and (max-width: 700px) {
    height: 700px;

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

    .subTitleDiv {
      border-radius: 0.7rem;
      height: 90%;
      width: 60%;

      h1 {
        font-size: 1rem;
      }
    }

    .photosComponent {
      /* img {
        height: 100%;
        width: 60%;
      } */
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
    height: 800px;
    grid-template-rows: 0.2fr 1.2fr 0.4fr 1.2fr 0.5fr 0.2fr 1.2fr;

    .subTitleDiv {
      border-radius: 0.7rem;
      height: 90%;
      width: 70%;

      h1 {
        font-size: 1rem;
      }
    }

    .attributesText {
      h1 {
        font-size: 3.2rem;
        letter-spacing: 0.1rem;
      }
      h2 {
        width: 80%;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    height: 800px;

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

interface ICozyLand {
  data: IContainer;
}

const CozyLand: React.FC<ICozyLand> = (props) => {
  let refTitle = useRef<HTMLDivElement>(null);
  let refSubTitle = useRef<HTMLDivElement>(null);
  let refCozyLandPic = useRef<HTMLDivElement>(null);
  let refCozyLandButton = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refTitle.current!, {
      y: -50,
      duration: 0.6,
      delay: 0.2,
      scrollTrigger: refTitle.current!,
    });
    gsap.from(refSubTitle.current!, {
      y: 10,
      duration: 0.8,
      scrollTrigger: refSubTitle.current!,
    });
    gsap.from(refCozyLandPic.current!, {
      y: -100,
      opacity: 0.2,
      scale: 0.5,
      duration: 2,
      scrollTrigger: refCozyLandPic.current!,
    });
    gsap.from(refCozyLandButton.current!, {
      y: 100,
      opacity: 0.7,
      scale: 0.5,
      delay: 0.2,
      duration: 1,
      scrollTrigger: refCozyLandButton.current!,
    });
  });

  return (
    <CozyLandComponent>
      <div className={"attributesText"}>
        <h1 ref={refTitle}>{props.data.title}</h1>
        <h2 ref={refSubTitle}>{props.data.subtitle}</h2>
      </div>

      {props.data.pictures.map((value: IPictures) => {
        return (
          <div
            ref={refCozyLandPic}
            className={"photosComponent"}
            key={"photoseId"}
          >
            <img
              src={Pictures[value.picture_url].default}
              alt={"sky"}
              key={"image"}
            />
          </div>
        );
      })}

      <div
        className={"subTitleDiv"}
        onClick={() => console.log("not yet")}
        key={"subtitlediv"}
        ref={refCozyLandButton}
      >
        <h1 className={"subTitle"} key={"subtitle"}>
          {props.data.slogan}
        </h1>
      </div>
    </CozyLandComponent>
  );
};

export default CozyLand;
