import styled from "styled-components";
import Titles from "../../components/Titles";
import { IContainer, ISlogan } from "../../types";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const TextMain = styled.section`
  font-family: "Anton";
  letter-spacing: 0.15rem;
  font-weight: 200;
  color: white;
  font-size: 1.25rem;
  width: 100%;
  text-align: center;
  line-height: 1.5;
  .mainContainer {
    max-width: 50%;
    margin: auto;
    h1 {
      font-weight: 400;
      font-size: 4.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;

    .mainContainer {
      max-width: 80%;
    }
  }
`;
interface IProps {
  data: IContainer;
}

const EachText: React.FC<ISlogan> = (props) => {
  let refEachText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refEachText.current!, {
      y: 50,
      opacity: 0.1,
      scale: 0.5,
      delay: 0.1,
      duration: 0.2,
      scrollTrigger: {
        trigger: refEachText.current!,
        toggleActions: "play none none reverse",
      },
    });
  });

  return <p ref={refEachText}>{props.slogan}</p>;
};

const TextContainer: React.FC<IProps> = ({ data }) => {
  return (
    <TextMain>
      <div className="mainContainer">
        <div>
          <Titles
            {...{
              data: { title: data.title, subtitle: "" },
              color: "white",
              colorSub: "white",
            }}
          />
        </div>
        <div>
          {data.slogan.map((value: ISlogan) => (
            <EachText {...value} />
          ))}
        </div>
      </div>
    </TextMain>
  );
};

export default TextContainer;
