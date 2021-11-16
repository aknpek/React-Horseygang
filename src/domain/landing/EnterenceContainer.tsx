import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Pictures from "../../components/Locals";

import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

const EnterenceComponent = styled.div`
  visibility: "hidden";
  display: flex;
  z-index: 5;

  img {
    height: auto;
    width: 100%;
  }
`;

export const EnterenceContainer: React.FC = (props) => {
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.config({ nullTargetWarn: false });
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(ref.current!, {
      opacity: 0.5,
      y: -100,
      scale: 0.4,
      duration: 2,
      scrollTrigger: ref.current!,
    });
  });
  return (
    <EnterenceComponent ref={ref}>
      <img src={Pictures["enterence_gif"].default} alt="mainGif" />
    </EnterenceComponent>
  );
};
