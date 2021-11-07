import { IContainer, IFourthContainer, IPictures } from "../../types";
import { useEffect, useRef } from "react";

import { AyContainer } from "../../components/Ay";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import styled from "styled-components";

const FourthComponent = styled.div<IFourthContainer>`
  display: flex;
  height: 800px;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
  grid-template-rows: 0.1fr 0.8fr 2fr 0.5fr 0.5fr;
  z-index: 6;

  grid-template-areas:
    "titleDiv"
    "blockFirst blockSecond";

  .titleDiv {
    z-index: 3;
    grid-area: titleDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 4;

    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
    -ms-transition: 0.1s;
    -o-transition: 0.1s;
    transition: 0.1s;

    h1 {
      font-size: 4.5rem;
      color: white;
      text-align: center;
      font-family: "Fredoka One", normal;
      font-weight: 200;
    }
  }
  .titleDiv:hover {
    transition: transform 150ms background-color 0.5s ease color 0.5s ease;
    transform: scale(1.05);
  }
  .blockFirst {
    grid-area: blockFirst;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    .blockFirstDiv {
      z-index: 3;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end; /* CHANGED */

      h5 {
        margin-top: 0rem;
        line-height: 1.4;
        letter-spacing: 0rem;
        font-size: 1.6rem;
        font-weight: 400;
        color: #ffffffbe;
        text-align: left;
        font-family: "Josefin Sans", cursive;
      }
      h4 {
        line-height: 2;
        font-size: 4rem;
        font-weight: 200;
        color: #ffffffbe;
        text-align: left;
        font-family: "Fredoka One", normal;
      }
    }
  }
  .blockSecond {
    z-index: 3;
    grid-area: blockSecond;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 4;

    .roadBlock {
      display: flex;
      flex-direction: row;
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      -ms-transition: 0.2s;
      -o-transition: 0.2s;
      transition: 0.2s;

      .roadPercent {
        height: 8rem;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .roadPercentBlock {
          height: 5rem;
          width: 5rem;
          background-color: #ffffffbe;
          border-radius: 1.2rem;

          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;

          h1 {
            font-family: "Fredoka One", normal;
            font-weight: 200;

            font-size: 1.4rem;
            font-weight: 600;
          }
        }

        .percent0 {
          background-color: #ffffff;
        }

        .percent25 {
          background-color: #afe1f0;
        }

        .percent50 {
          background-color: #ff961b;
        }

        .percent75 {
          background-color: #8bc343;
        }

        .percent100 {
          background-color: #e65a7d;
        }
      }
      .roadText {
        height: 8rem;
        font-family: "Josefin Sans", cursive;
        color: #ffffffbe;
        display: flex;
        align-items: center;
        width: 80%;

        h1 {
          font-size: 1.2rem;
          font-weight: 200;
          line-height: 1.5;
        }

        h2 {
          font-size: 1rem;
          font-weight: 100;
          line-height: 1.5;
        }
      }
    }

    .roadBlock:hover {
      transition: transform 250ms background-color 0.4s ease color 0.5s ease;
      transform: scale(1.05);
      background-color: #121420f4;
      backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
      border-radius: 1.5rem;
      .roadPercentBlock {
        h1 {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
      .roadText {
        h1 {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          text-decoration: underline;
          width: 95%;
        }

        h2 {
          font-size: 1rem;
          font-weight: 400;
          color: white;
          width: 95%;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: 0.2fr 2fr 2fr 0.2fr;
    .blockFirst {
      .blockFirstDiv {
        h5 {
          margin-top: calc(-2rem + 50px);
          line-height: 1.4;
          letter-spacing: 0rem;
          font-size: 1.4rem;
          font-weight: 400;
          color: #ffffffbe;
          text-align: left;
          font-family: "Josefin Sans", cursive;
        }
        h4 {
          line-height: 2;
          font-size: 3rem;
          font-weight: 200;
          color: #ffffffbe;
          text-align: left;
          font-family: "Fredoka One", normal;
        }
      }
    }

    .blockSecond {
      .roadBlock {
        .roadText {
          h1 {
            font-size: 0.8rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            font-size: 0.7rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            font-size: 0.8rem;
            font-weight: 600;
          }
          h2 {
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 0.2fr 2fr 2fr 0.2fr;

    .blockFirst {
      .blockFirstDiv {
        h5 {
          margin-top: calc(2rem - 50px);
          line-height: 1.4;
          letter-spacing: 0rem;
          font-size: 1.4rem;
          font-weight: 400;
          color: #ffffffbe;
          text-align: left;
          font-family: "Josefin Sans", cursive;
        }
        h4 {
          line-height: 2;
          font-size: 3rem;
          font-weight: 200;
          color: #ffffffbe;
          text-align: left;
          font-family: "Fredoka One", normal;
        }
      }
    }

    .blockSecond {
      .roadBlock {
        .roadText {
          h1 {
            font-size: 0.8rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            font-size: 0.7rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            font-size: 0.7rem;
            font-weight: 600;
          }

          h2 {
            font-size: 0.7em;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 0.2fr 3fr 3fr 0.2fr;

    .blockFirst {
      .blockFirstDiv {
        margin-top: -1rem;
        h5 {
          margin-top: 0rem;
          line-height: 1.4;
          letter-spacing: 0rem;
          font-size: 1.4rem;
          font-weight: 400;
          color: #ffffffbe;
          text-align: left;
          font-family: "Josefin Sans", cursive;
        }
        h4 {
          line-height: 2;
          font-size: 3rem;
          font-weight: 200;
          color: #ffffffbe;
          text-align: left;
          font-family: "Fredoka One", normal;
        }
      }
    }

    .blockSecond {
      .roadBlock {
        .roadText {
          h1 {
            font-size: 0.8rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            font-size: 0.7rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            font-size: 0.7rem;
            font-weight: 600;
          }

          h2 {
            font-size: 0.7rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 950px) {
    height: 1200px;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    grid-template-rows: 0.1fr 0.8fr 2fr 2fr 0.1fr;

    .titleDiv {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .blockFirst {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      text-align: center;
      .blockFirstDiv {
        h5 {
          margin: auto;
          line-height: 2.2;
          font-size: 1.4rem;
          font-weight: 400;
          color: #ffffffbe;
          text-align: center;
          font-family: "Josefin Sans", cursive;
        }
        h4 {
          margin: auto;
          line-height: 2;
          font-size: 2rem;
          font-weight: 600;
          color: #ffffffbe;
          text-align: left;
          font-family: "Fredoka One", classic;
          font-weight: 200;
        }
      }
    }

    .blockSecond {
      grid-area: blockSecond;
      grid-row-start: 4;
      grid-row-end: 5;
      grid-column-start: 2;
      grid-column-end: 3;

      .roadBlock {
        .roadText {
          h1 {
            font-size: 1.2rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            font-size: 1.1rem;
            font-weight: 600;
          }

          h2 {
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    height: 1500px;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    grid-template-rows: 0.1fr 0.8fr 1fr 1fr 0.1fr;
    .blockFirst {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      text-align: center;
      .blockFirstDiv {
        h5 {
          margin: auto;
          line-height: 2;
          font-size: 1.2rem;
          font-weight: 400;
          color: #ffffffbe;
          text-align: center;
          font-family: "Josefin Sans", cursive;
        }
        h4 {
          margin: auto;
          line-height: 2;
          font-size: 2rem;
          font-family: "Fredoka One", classic;
          font-weight: 200;
          color: #ffffffbe;
          text-align: left;
        }
      }
    }

    .blockSecond {
      .roadBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;

        .roadText {
          margin-top: -2rem;

          h1 {
            margin: auto;
            text-align: center;
            font-size: 1rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            margin: auto;
            text-align: center;
            font-size: 0.8rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            margin: auto;
            text-align: center;
            font-size: 1.1rem;
            font-weight: 600;
          }

          h2 {
            margin: auto;
            text-align: center;
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    height: 1500px;
    grid-template-rows: 0.1fr 0fr 1fr 1fr 0.1fr;

    .blockFirst {
      .blockFirstDiv {
        h5 {
          text-align: center;
        }
        h4 {
          text-align: center;
          font-family: "Fredoka One", classic;
          font-weight: 200;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    height: 1550px;
    grid-template-rows: 0.1fr 0fr 1fr 1fr 0.1fr;

    .blockFirst {
      .blockFirstDiv {
        h5 {
          text-align: center;
        }
        h4 {
          text-align: center;
          font-family: "Fredoka One", classic;
          font-weight: 200;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    pointer-events: none;
    height: 1250px;
    grid-template-columns: 0.2fr 2fr 0.2fr;

    .titleDiv {
      h1 {
        text-align: center;
        font-size: 3.5rem;
      }
    }
    .blockFirst {
      .blockFirstDiv {
        h5 {
          text-align: center;
          line-height: 1.6rem;
          font-size: 1rem;
        }
        h4 {
          font-family: "Fredoka One", classic;
          font-weight: 200;
          text-align: center;
        }
      }
    }

    .blockSecond {
      .roadBlock,
      .roadBlock:hover {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;

        .roadText {
          h1 {
            margin: auto;
            text-align: center;
            font-size: 0.9rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            margin: auto;
            text-align: center;
            font-size: 0.8rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
        .roadPercent {
          .roadPercentBlock {
            height: 3rem;
            width: 3rem;
            border-radius: 1rem;
            h1 {
              font-family: "Fredoka One", normal;
              font-weight: 200;

              font-size: 1rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  .ayContainer {
    position: absolute;
    width: 170%;
    top: 37%;
    transform: scale(0.1);
  }
`;
interface PropsFourth {
  data: IContainer;
}


const EachPercentage: React.FC<IPictures> = (props) => {
  let refEachPercentage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refEachPercentage.current!, {
      y: 100 * props.id/2,
      opacity: 0.1,
      scale: 0.5,
      delay: 0.1 * props.id,
      duration: 0.5,
      scrollTrigger: refEachPercentage.current!,
    });
  });

  return (
    <div ref={refEachPercentage} className={"roadBlock"} key={props.id + "block"}>
    <div
      className={`roadPercent ${props.id}`}
      key={props.id + "percent"}
    >
      <div
        className={`roadPercentBlock percent${props.title}`}
        key={props.id + "percentblock"}
      >
        <h1>{props.title}%</h1>
      </div>
    </div>
    <div className={`roadText ${props.id}`} key={props.id + "road"}>
      <div
        className={`roadTextBlock ${props.id}`}
        key={props.id + "roadblock"}
      >
        <h1>{props.subtitle}</h1>
        <h2>{props.description}</h2>
      </div>
    </div>
  </div>
  );
};


const FourthContainer: React.FC<PropsFourth> = (props) => {
  let refTitle = useRef<HTMLDivElement>(null);
  let refFirstBlock = useRef<HTMLDivElement>(null);
  let refPercentages = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refTitle.current!, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      scrollTrigger: refTitle.current!,
    });
    gsap.from(refFirstBlock.current!, {
      y: 100,
      opacity: 0.5,
      scale: 0.8,
      duration: 0.8,
      delay: 0.1,
      scrollTrigger: refFirstBlock.current!,
    });
    gsap.from(refPercentages.current!, {
      y: 100,
      opacity: 0.5,
      scale: 0.8,
      duration: 0.8,
      delay: 0.1,
      scrollTrigger: refPercentages.current!,
    });
  });

  return (
    <FourthComponent className="Fourth-Component">
      <div ref={refTitle} className={"titleDiv"}>
        <h1>{props.data.title}</h1>
      </div>
      <div ref={refFirstBlock} className={"blockFirst"}>
        <div className={"blockFirstDiv"}>
          <h5>{props.data.slogan}</h5>
          <h4>{props.data.subtitle}</h4>
        </div>
      </div>
      <div className={"blockSecond"}>
        {props.data["pictures"].map((value: IPictures) => (
         <EachPercentage {...value} key={`${value.id}`}/>
        ))}
      </div>

      <div className={"ayContainer"}>
        <AyContainer />
      </div>
    </FourthComponent>
  );
};

export default FourthContainer;
