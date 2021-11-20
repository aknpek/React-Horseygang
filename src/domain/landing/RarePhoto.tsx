import React, { useRef, useEffect } from "react";
import Pictures from "../../components/Locals";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RarePhoto: React.FC = () => {
  let refPhoto = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.config({ nullTargetWarn: false });
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refPhoto.current!, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      y: 50,
      delay: 0.3,
      scrollTrigger: {
        trigger: refPhoto.current!,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div>
      <div ref={refPhoto} className="rareContainer">
        <img id="imageRare" src={Pictures["rare"].default} alt="rare"></img>
      </div>
    </div>
  );
};

export default RarePhoto;
