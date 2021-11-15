import GeneralWrapper, { FirstContainer, FirstWrapper } from "./Elements";
import { IContent, IHeader } from "../../types";
import React, { useEffect, useRef, useState } from "react";

import FifthContainer from "./RarityContainer";
import Header from "../../components/Header";
import SecondContainer from "./EnterenceDescription";
import ThirdContainer from "./Collections";
import TeamsContainer from "./TeamsContainer";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RoadMap from "./RoadMap";
import Reflect from "../../svgs/Reflect";
import { EnterenceContainer } from "./EnterenceContainer";
import Leaf from "../../components/Leaf";
import { Faq } from "./Faq";
import TextContainer from "./TextContainer";

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
    <GeneralWrapper >
      <FirstWrapper>
        <FirstContainer>
          <Header
            {...header_data}
            showThirdContainer={showThirdContainer}
          />
        </FirstContainer>

        {/* <div>
          <Leaf />
        </div> */}

        <div className={"EnterenceContainer"}>
          <EnterenceContainer />
        </div>
        <div className={"Presale-Container"}>
          <SecondContainer
            data={data["landing"]["containers"][5]}
            textDirection={true}
            preSale={true}
            metaHomes={false}
            picture={true}
          />
        </div>
        <div className={"Home-Container"}>

        </div>
        <TextContainer
          data={data["landing"]["containers"][0]}
        />
        <div className="collection">
          <ThirdContainer
            showThirdContainer={showThirdContainer}
            data={data["landing"]["containers"][2]}
          ></ThirdContainer>
          <div className="rareContainer">
            <img src="./../../assets/images/rare.png" alt="rare"></img>
          </div>
          <div>
            <RoadMap data={data["landing"]["containers"][9]} />
          </div>
          <div>
            <Faq data={data["landing"]["containers"][10]} />
          </div>
          <div className={"TeamsContainer"}>
            <TeamsContainer data={data["landing"]["containers"][6]} />
          </div>
        </div>
      </FirstWrapper>
    </GeneralWrapper>
  );
};

export default Landing;
