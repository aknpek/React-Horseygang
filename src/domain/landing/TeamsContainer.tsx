import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { IContainer, IPictures } from "../../types";
import Pictures from "../../components/Locals";
import Titles from "../../components/Titles";
import { gsap } from "gsap";
import styled from "styled-components";

interface ISixthContainer {}

const SeventhComponent = styled.div<ISixthContainer>`
  height: 1250px;
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
      width: 18rem;
      height: 18rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        height: 12rem;
        width: 12rem;
        border-radius: 16rem;

        a {
          img {
            height: auto;
            width: 100%;
            border-radius: 100%;
            transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
          }
          img:hover {
            transform: scale(1.1) rotate(-2deg);
            top: 0px;
            opacity: 0.9;
          }
        }
      }

      h3 {
        color: white;
        font-size: 2.5rem;
        font-family: "Anton";
        letter-spacing: .2rem;
        font-weight: 600;
        cursor: default;
      }
      h4 {
        color: white;
        font-size: 1.2rem;
        font-weight: 200;
        font-family: "Anton";
        margin-top: 1rem;
        cursor: default;
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
    a {
      h1 {
        color: white;
        font-family: "Anton";
        font-weight: 200;
        text-decoration: underline;
        cursor: default;
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
    height: 800px;
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
    height: 1200px;
    grid-template-columns: 0.5fr 1fr 0.5fr;

    .titleTeam {
      grid-column-start: 2;
      grid-column-end: 3;
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
    height: 1750px;

    grid-template-rows: 0.2fr 0.3fr 0.5fr 1fr 0.5fr;

    .titleTeam {
      grid-column-start: 1;
      grid-column-end: 4;
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
    height: 1850px;

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
    height: 1900px;

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
  .starDiv {
    position: absolute;
    height: 10%;
    width: 100%;
    z-index: 2;

    .startSubDiv {
      margin-left: 25%;
    }
    .startSubDiv2 {
      margin-top: 25%;
    }
  }

  .smartContract {
    a {
      h1 {
        font-size: 1.1rem;
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
    gsap.config({ nullTargetWarn: false });
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refEachImage.current!, {
      y: 50 * value.id,
      opacity: 0.1,
      scale: 0.5,
      delay: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: refEachImage.current!,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      ref={refEachImage}
      key={value.id + "photos"}
      className={`teamMember${value.id}`}
    >
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

const TeamsContainer: React.FC<PropsSeven> = (props) => {
  let refTeamMember = useRef<HTMLDivElement>(null);
  let titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refTeamMember.current!, {
      opacity: 0.1,
      scale: 0.8,
      duration: 2,
      rotate: -180,
      scrollTrigger: {
        trigger: refTeamMember.current!,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(titleRef.current!, {
      opacity: 0.1,
      scale: 0.8,
      duration: 0.5,
      y: 50,
      delay: 0.5,
      scrollTrigger: {
        trigger: titleRef.current!,
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <SeventhComponent className="Seven-Component">
      <div ref={titleRef} className={"titleTeam"}>
        <Titles
          color={"white"}
          colorSub={"#242424"}
          data={{ title: props.data.title, subtitle: props.data.subtitle }}
        />
      </div>
      <div className={"photosTeam"}>
        {props.data["pictures"].map((value: any) => (
          <TeamsImages {...value} key={`${value.id}`} />
        ))}
      </div>
      <div className={"smartContract"}>
        <a>
          <h1>Smart Contract Soon</h1>
        </a>
      </div>
    </SeventhComponent>
  );
};

export default TeamsContainer;
