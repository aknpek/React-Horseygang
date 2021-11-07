import GeneralWrapper, { FirstContainer, FirstWrapper } from "./Elements";
import { IContent, IHeader, IRarity } from "../../types";
import React, { useEffect, useRef, useState } from "react";

import FifthContainer from "./FifthContainer";
import Header from "../../components/Header";
import SecondContainer from "./SecondContainer";
import SeventhContainer from "./SeventhContainer";
import ThirdContainer from "./ThirdContainer";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const getDocHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
};

const Landing: React.FC = () => {
  const data: IContent = require("../../data/json/text.json");

  const header_data: IHeader = data["landing"]["header"];
  const scrollPosition = useRef<Number>(0);
  const [showThirdContainer, setShowThirdContainer] = useState<Boolean>(true);

  let refAttributes = useRef<HTMLDivElement>(null);
  let refTeam = useRef<HTMLDivElement>(null);
  let refHeader = useRef<HTMLDivElement>(null);
  let renderEffects = useRef<number>(0);

  useEffect(() => {
    if (renderEffects.current === 0) {
      console.log(renderEffects);
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(refHeader.current!, {
        y: -50,
        duration: 0.6,
      });
      gsap.from(refAttributes.current!, {
        opacity: 0.5,
        y: 100,
        scale: 0.7,
        duration: 1,
        scrollTrigger: refAttributes.current!,
      });
      gsap.from(refTeam.current!, {
        opacity: 0.5,
        y: -200,
        scale: 0.7,
        duration: 1,
        scrollTrigger: refTeam.current!,
      });
      renderEffects.current += 1;
    }
  });

  const calculateScrollPercentage = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const _scrollPosition = (scrollTop / totalDocScrollLength) * 100;
    scrollPosition.current = _scrollPosition;
  };
  const scrollDistance = () => {
    requestAnimationFrame(() => {
      calculateScrollPercentage();
    });
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollDistance);
    return () => {
      document.removeEventListener("scroll", scrollDistance);
    };
  });

  return (
    <GeneralWrapper>
      <FirstWrapper>
        <FirstContainer>
          <Header
            {...header_data}
            showThirdContainer={showThirdContainer}
            scrollPosition={scrollPosition.current}
          />
        </FirstContainer>

        <div className={"Home-Container"}>
          <div>
            <SecondContainer
              data={data["landing"]["containers"][0]}
              textDirection={true}
              preSale={false}
              metaHomes={false}
            />
          </div>
          <div>
            <SecondContainer
              data={data["landing"]["containers"][1]}
              textDirection={false}
              preSale={false}
              metaHomes={true}
            />
          </div>
        </div>

        <ThirdContainer
          showThirdContainer={showThirdContainer}
          data={data["landing"]["containers"][2]}
        ></ThirdContainer>

        <FifthContainer
          showFifthContainer={showThirdContainer}
          data={data["landing"]["containers"][4]}
        ></FifthContainer>


        <div className={"Presale-Container"}>
          <SecondContainer
            data={data["landing"]["containers"][5]}
            textDirection={true}
            preSale={true}
            metaHomes={false}
          />
        </div>

        <div ref={refTeam} className={"Team-Container"}>
          <SeventhContainer
            data={data["landing"]["containers"][6]}
          ></SeventhContainer>
        </div>
      </FirstWrapper>
    </GeneralWrapper>
  );
};

export default Landing;
