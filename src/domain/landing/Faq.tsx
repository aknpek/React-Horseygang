import { IContainer, ISlogan } from "../../types";
import React, { useEffect, useRef, useState } from "react";

import ScrollTrigger from "gsap/ScrollTrigger";
import Titles from "../../components/Titles";
import { gsap } from "gsap";
import styled from "styled-components";

const FaqContainer = styled.div`

  .accordionItem {
    font-family: 'Jost';
    /* font-family: "Josefin Sans", cursive; */
    color: #a7a7a7;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    .questionButton {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      transition: linear 0.2s;

      h1 {
        width: 80%;
        font-size: 1.1rem;
        font-weight: 300;
        text-align: center;
      }

      span {
      }
    }

    .questionButton:hover {
      background-color: #f8b279;
      transition: linear 0.2s;
      cursor: pointer;
      color: #15131f;
      font-family: "Fredoka One", normal;
    }
  }

  .accordionItem.active .button {
  }

  .answerWrapper {
    height: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    transition: height ease 0.4s;
  }
  .answerWrapper.open {
    height: 5rem;
    display: flex;

    justify-content: center;
    background-color: #8080803b;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    div {
      width: 80%;
      display: flex;
      justify-content: center;
    }
  }
  .answerWrapper.closed {
    transition: height ease 0.4s;
  }

  @media screen and (max-width: 900px) {
    .accordionItem {
      .questionButton {
        h1 {
          width: 90%;
          font-size: 1.1rem;
          line-height: 1.4;
        }
      }
    }
  }
`;

interface IAccordion {
  data: IContainer;
}

interface IAccordionItem {
  onToggle: CallableFunction;
  faq: string;
  active: boolean;
  id: number;
  answer: string;
}

const AccordionItem: React.FC<IAccordionItem> = (props) => {
  let refFag = useRef<HTMLDivElement>(null);
  let onlyOneTime = useRef<number>(0);

  useEffect(() => {
    if (onlyOneTime.current === 0) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(refFag.current!, {
        y: 20 * props.id,
        opacity: 0.1,
        scale: 0.5,
        delay: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: refFag.current!,
          toggleActions: "play none none reverse",
        },
      });
      onlyOneTime.current += 1;
    }
  });

  return (
    <div
      ref={refFag}
      className={`accordionItem ${props.active ? "active" : ""}`}
      key={props.id + "div"}
    >
      <div
        className={"questionButton"}
        onClick={() => props.onToggle(props.id)}
        key={props.id + "div2"}
      >
        <h1>{props.faq}</h1>

        <span className={"questionControl"} key={props.id + "span"}>
          {props.active ? "-" : "+"}
        </span>
      </div>
      <div
        className={`answerWrapper ${props.active ? "open" : ""}`}
        key={props.id + "div3"}
      >
        <div key={props.id + "div4"}>{props.answer}</div>
      </div>
    </div>
  );
};

interface AIndex {
  index: string;
  trig: boolean;
}

interface BIndex {
  index: number;
  trig: boolean;
}

type UnionType = AIndex | BIndex;

export const Faq: React.FC<IAccordion> = (props) => {
  const [clicked, setClicked] = useState<UnionType>({
    index: "0",
    trig: false,
  });
  let titleRef = useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    if (clicked.index === index) {
      return setClicked({ index: "0", trig: true });
    }
    setClicked({ index: index, trig: true });
  };

  useEffect(() => {
    if (!clicked.trig) {
      gsap.config({ nullTargetWarn: false });
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(titleRef.current!, {
        opacity: 0.1,
        scale: 0.8,
        duration: 2,
        x: -100,
        delay: 0.5,
        scrollTrigger: {
          trigger: titleRef.current!,
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  return (
    <FaqContainer>
      <div ref={titleRef}>
        <Titles
          colorSub={"#242424"}
          color={"#f8b279"}
          data={{ title: props.data.title, subtitle: "" }}
        />
      </div>

      {props.data.slogan.map((value: ISlogan) => (
        <AccordionItem
          onToggle={handleToggle}
          active={clicked.index === value.id}
          id={value.id}
          faq={value.slogan}
          answer={value.slogan2}
          key={value.id + "accordion"}
        />
      ))}
    </FaqContainer>
  );
};
