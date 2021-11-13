import { IContainer, IPictures } from "../../types";
import { useRef, useState } from "react";

import Pictures from "../../components/Locals";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import styled from "styled-components";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ISixthContainer {}

const SeventhComponent = styled.div<ISixthContainer>`
  background-color: #121420;
  margin-top: 15%;
  height: 1050px;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.2fr 1fr 0.5fr 1fr 0.5fr;
  grid-template-areas:
    "titleDiv"
    "photosTeam"
    "smartContract";

  .titleTeam {
    grid-area: titleDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 6;

    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 4.5rem;
      color: white;
      text-align: center;
      font-family: "Fredoka One", normal;
      font-weight: 200;
    }
  }
  .photosTeam {
    grid-area: blockFirst;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 6;
    z-index: 6;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    div {
      width: 22rem;
      height: 22rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        height: 16rem;
        width: 16rem;
        border-radius: 16rem;

        a {
          img {
            height: 16rem;
            width: 16rem;
            transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
          }
          img:hover {
            transform: scale(1.1);
            top: 0px;
            opacity: 0.4;
          }
        }
      }

      h3 {
        color: white;
        font-size: 2.5rem;
        font-family: "Fredoka One", normal;
        font-weight: 200;
      }
      h4 {
        color: white;
        font-size: 1.2rem;
        font-weight: 100;
        font-family: "Josefin Sans", cursive;
        margin-top: -1rem;
      }
    }
  }
  .smartContract {
    grid-area: blockSecond;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 6;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    a {
      h1 {
        color: white;
        font-family: "Fredoka One", normal;
        font-weight: 200;
        text-decoration: underline;
        text-align: center;
      }
      h1:hover {
      }
    }
  }

  @media screen and (max-width: 1700px) {
    height: 850px;

    .photosTeam {
      div {
        width: 20rem;
        height: 20rem;
        div {
          a {
            img {
              height: 13rem;
              width: 13rem;
            }
          }
        }
      }

      h3 {
        margin-top: 1rem;
        font-size: 2.5rem;
      }
      h4 {
        font-size: 1rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    height: 750px;

    .photosTeam {
      div {
        div {
          a {
            img {
              height: 12rem;
              width: 12rem;
            }
          }
        }
      }

      h3 {
        margin-top: -0.5rem;
        font-size: 2rem;
      }
      h4 {
        font-size: 1rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    height: 650px;
    .photosTeam {
      div {
        div {
          a {
            img {
              height: 11rem;
              width: 11rem;
            }
          }
        }

        h3 {
          margin-top: -0.5rem;
          font-size: 1.8rem;
        }
        h4 {
          font-size: 1rem;
          font-weight: 100;
          margin-top: -1rem;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    height: 950px;
    grid-template-columns: 0.5fr 1fr 0.5fr;

    .titleTeam {
      grid-column-start: 2;
      grid-column-end: 3;
      h1 {
        font-size: 4.5rem;
      }
    }

    .photosTeam {
      grid-column-start: 2;
      grid-column-end: 3;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      div {
        display: flex;
        justify-content: center;

        div {
        }
        img {
        }
      }

      h3 {
        margin-top: -1.2rem;
        font-size: 1.8rem;
      }
      h4 {
        font-size: 1rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
    .smartContract {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  @media screen and (max-width: 700px) {
    height: 1650px;

    .titleTeam {
      grid-column-start: 2;
      grid-column-end: 3;
      h1 {
        font-size: 3.2rem;
      }
    }
    .photosTeam {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
        }
        img {
        }
      }

      h3 {
        margin-top: -1.2rem;
        font-size: 1.8rem;
      }
      h4 {
        font-size: 1rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    height: 1600px;
    pointer-events: none;

    .photosTeam {
      margin-top: -1.4rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          a {
            img {
            }
            img:not(.nohover):hover {
              pointer-events: none;
            }
          }
        }
      }

      h3 {
        margin-top: -1.2rem;
        font-size: 1.1rem;
      }
      h4 {
        font-size: 0.8rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
  }
  @media screen and (max-width: 400px) {
    height: 1700px;

    .photosTeam {
      margin-top: -2.5rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          a {
            img {
            }
            img:not(.nohover):hover {
              pointer-events: none;
            }
          }
        }
      }

      h3 {
        margin-top: -1.2rem;
        font-size: 1.1rem;
      }
      h4 {
        font-size: 0.8rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
  }

 
`;
interface PropsSeven {
  data: IContainer;
}

const TeamsImages: React.FC<IPictures> = (value) => {
  let refEachImage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refEachImage.current!, {
      y: 100 * value.id,
      opacity: 0.1,
      scale: 0.5,
      delay: 0.1,
      duration: 0.5,
      scrollTrigger: refEachImage.current!,
    });
  });

  return (
    <div ref={refEachImage} key={value.id + "photos"} className={`teamMember${value.id}`}>
      <div key={value.id + "photosinner"}>
        <a href={value.hyperlink} key={value.id + "a"}>
          <img
            src={Pictures[value.picture_url].default}
            alt={value.title}
            key={value.id + "image"}
          />
        </a>
      </div>

      <h3 key={value.id + "h3"}>{value.title}</h3>
      <h4 key={value.id + "h4"}>{value.subtitle}</h4>
    </div>
  );
};

const SeventhContainer: React.FC<PropsSeven> = (props) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
    }
  }, [inView, ref]);

  return (
    <SeventhComponent className="Seven-Component">
      <div className={"titleTeam"}>
        <h1>{props.data.title}</h1>
      </div>
      <div className={"photosTeam"}>
        {props.data["pictures"].map((value: IPictures) => (
          <TeamsImages {...value}  key={`${value.id}`}/>
        ))}
      </div>
      <div key={"smartContract"} className={"smartContract"}>
        <a key={"smartContracta"}>
          <h1 key={"smartContracth1"}>Smart Contract Soon!</h1>
        </a>
      </div>

    </SeventhComponent>
  );
};

export default SeventhContainer;
