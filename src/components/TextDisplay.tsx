import { ISlogan, IContainer as Props } from "../types";
import React, { useEffect, useRef } from "react";

// import CozyLogo from "../svgs/CozyLogo";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap} from "gsap";
import { scrollToSection } from "../components/Header";
import styled from "styled-components";

interface ITextDisplay {
  textDirection: Boolean;
  preSale: Boolean;
  metaHomes: Boolean;
}

const TextBlock = styled.div<ITextDisplay>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;

  .sloganDiv {
    will-change: transform;
    transition: transform 450ms;
    font-family: "Fredoka One", normal;
    font-weight: 200;

    text-align: center;
    justify-items: center;

    .sloganDivBlock {
      height: 5rem;
      border-radius: 2rem;
      display: flex;
      justify-content: ${(props) => (props.preSale ? "center" : "left")};
      align-items: center;
      .slogan {
        font-size: 4.5rem;
        letter-spacing: 0.1rem;
        color: white;
      }
    }
    .cozyHomeLogoDiv {
      display: flex;
      height: 8rem;
      justify-content: ${(props) =>
        props.preSale || props.metaHomes ? "center" : "left"};
      align-items: center;
      .cozyHomeLogoDiv2 {
        /* position: absolute; */
        transform: scale(1);
      }
    }
  }
  .messageDiv {
    font-family: "Josefin Sans", cursive;
    display: flex;
    justify-content: ${(props) => (props.preSale ? "center" : "left")};
    align-items: center;
    .message {
      color: #f1f1f1;
      font-size: 18px;
      font-weight: 200;
      line-height: 1.5;
      letter-spacing: 0.05rem;
      margin-left: ${(props) => !props.textDirection && "2rem"};
    }

    .preSaleBlock {
      margin-top: 3rem;
      margin-bottom: 3rem;
      width: 40rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .preSale {
        font-family: "Fredoka One", normal;
        display: flex;
        height: 4rem;
        width: 15rem;
        font-weight: 200;
        border-radius: 0.8rem;
        border-width: 2rem;
        color: white;
        border: 1.5px solid #05344e;

        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .preSaleEth {
        font-family: "Fredoka One", normal;
        color: white;
        border: 1.5px solid #05344e;
        font-weight: 200;
        display: flex;
        height: 4rem;
        width: 15rem;
        border-radius: 0.8rem;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
  }
  .subTitleDiv {
    text-align: center;
    margin-top: 1rem;
    width: 50%;

    font-family: "Fredoka One", normal;
    letter-spacing: 0.3rem;
    border-radius: 2rem;
    border-radius: 1rem;
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
  .subTitleMintBlock {
    display: flex;
    justify-content: space-around;

    .subTitleMintDiv {
      text-align: center;
      margin-top: 1rem;
      width: 55%;
      font-family: "Fredoka One", normal;
      border-radius: 2rem;
      border-radius: 1rem;
      background-color: #ff961b;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 1s ease;

      .subTitleMint {
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
    .subTitleQuantityDiv {
      text-align: center;
      margin-top: 1rem;
      width: 35%;
      font-family: "Fredoka One", normal;

      border-radius: 2rem;
      border-radius: 1rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 1s ease;

      .subTitleQuantity {
        color: black;
      }
    }
  }
  .sloganDivBlock:hover {
    transition: transform 250ms;
    transform: translateX(+20px);
    transform: rotate(+2deg);
  }

  @media screen and (max-width: 1700px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.75);
        }
      }
    }
    .messageDiv {
      font-family: "Josefin Sans", cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      .message {
        color: #f1f1f1;
        font-size: 1.2rem;
        font-weight: 200;
        line-height: 1;
      }
    }
  }
  @media screen and (max-width: 1600px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.7);
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.65);
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.43);
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.55);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.5);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 1.1rem;
        line-height: 1;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .sloganDiv {
      /* background-color: red; */
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.8);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 100;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .sloganDiv {
      margin-top: 25rem;

      .sloganDivBlock {
        justify-content: center;
      }

      .cozyHomeLogoDiv {
        height: 5rem;
        justify-content: center;

        .cozyHomeLogoDiv2 {
          transform: scale(0.8);
          justify-content: center;
        }
      }
    }
    .messageDiv {
      margin-top: 2rem;
      text-align: center;

      .message {
        font-size: 1.1rem;
        line-height: ${(props) => (props.metaHomes ? 1.2 : 2)};
        text-align: ${(props) => (props.metaHomes ? "left" : "center")};
      }
      div {
        width: ${(props) =>
          props.metaHomes || props.preSale ? "100%" : "80%"};
        h1 {
        }
      }
    }
    .subTitleDiv {
      margin: auto;
      margin-top: 2rem;
      width: 11rem;
      height: 4rem;
      border-radius: 1.2rem;

      .subTitle {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .sloganDiv {
      margin-top: 19rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .sloganDivBlock {
        justify-content: center;

        .slogan {
          font-size: 3.2rem;
        }
      }

      .cozyHomeLogoDiv {
        width: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;

        .cozyHomeLogoDiv2 {
          ${(props) => (props.metaHomes ? "center" : "left")};
          transform: scale(0.5);
          svg {
          }
        }
      }
    }
    .messageDiv {
      margin-top: 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .messageMiddleDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
        .message {
          display: flex;
          font-size: 1.1rem;
          line-height: ${(props) => (props.metaHomes ? 1.2 : 2)};
          justify-content: center;
          text-align: center;
          width: ${(props) => (props.preSale ? "100%" : "90%")};
          margin-right: ${(props) => (props.metaHomes ? "2rem" : "0rem")};
        }
      }

      .preSaleBlock {
        margin-top: 3rem;
        margin-bottom: 3rem;
        width: 30rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .preSale {
          font-family: "Fredoka One", normal;
          display: flex;
          height: 3rem;
          width: 10rem;
          font-weight: 200;
          border-radius: 0.8rem;
          border-width: 2rem;
          color: white;
          border: 1.5px solid #05344e;
          font-size: 1.2rem;

          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .preSaleEth {
          font-family: "Fredoka One", normal;
          color: white;
          border: 1.5px solid #05344e;
          font-weight: 200;
          display: flex;
          height: 3rem;
          width: 10rem;
          border-radius: 0.8rem;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 1rem;
        }
      }
    }
    .subTitleMintBlock {
      display: flex;
      justify-content: space-around;

      .subTitleMintDiv {
        text-align: center;
        margin-top: 1rem;
        width: 55%;
        height: 3.5rem;
        font-family: "Josefin Sans", cursive;
        border-radius: 2rem;
        border-radius: 1rem;
        background-color: #ff961b;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s ease;

        .subTitleMint {
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
      .subTitleQuantityDiv {
        text-align: center;
        margin-top: 1rem;
        width: 35%;
        height: 3.5rem;
        font-family: "Josefin Sans", cursive;
        border-radius: 2rem;
        border-radius: 1rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s ease;

        .subTitleQuantity {
          color: black;
        }
      }
    }
    .subTitleDiv {
      margin: auto;
      margin-top: 1rem;
      width: 11rem;
      height: 3rem;
      border-radius: 1rem;

      .subTitle {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .sloganDiv {
      margin-top: ${(props) => (props.preSale ? "16rem" : "")};
      .sloganDivBlock {
        justify-content: center;
      }

      .cozyHomeLogoDiv {
        margin-top: -1rem;
        ${(props) => (props.metaHomes ? "center" : "left")};

        .cozyHomeLogoDiv2 {
          transform: scale(0.5);
        }
      }
    }
    .messageDiv {
      margin-top: ${(props) => (props.preSale ? "-3rem" : "-0.5rem")};
      text-align: center;

      .messageMiddleDiv {
        width: ${(props) =>
          props.metaHomes || props.preSale ? "100%" : "80%"};
        .message {
          display: flex;
          justify-content: left;
          font-size: 1rem;
          line-height: ${(props) => (props.metaHomes ? 1.1 : 1.5)};
          text-align: ${(props) => (props.metaHomes ? "left" : "center")};
        }
      }

      .preSaleBlock {
        width: 14rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .preSale {
          font-family: "Fredoka One", normal;
          display: flex;
          height: 3rem;
          width: 6rem;
          font-weight: 200;
          border-radius: 0.8rem;
          border-width: 2rem;
          color: white;
          border: 1.5px solid #05344e;
          font-size: 1rem;

          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .preSaleEth {
          font-family: "Fredoka One", normal;
          color: white;
          border: 1.5px solid #05344e;
          font-weight: 200;
          display: flex;
          height: 3rem;
          width: 6rem;
          border-radius: 0.8rem;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 1rem;
        }
      }
    }
    .subTitleDiv {
      margin: auto;
      margin-top: 1rem;
      width: 11rem;
      height: 3rem;
      border-radius: 1rem;

      .subTitle {
        font-size: 1.4rem;
      }
      
    }
    
    .subTitleMintBlock {
      margin-top: -2rem;
      width: 20rem;
      display: flex;
      justify-content: space-around;

      .subTitleMintDiv {
        text-align: center;
        width: 55%;
        height: 3.5rem;
        font-family: "Josefin Sans", cursive;
        border-radius: 2rem;
        border-radius: 1rem;
        background-color: #ff961b;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s ease;

        .subTitleMint {
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
      .subTitleQuantityDiv {
        text-align: center;
        width: 35%;
        height: 3.5rem;
        font-family: "Josefin Sans", cursive;
        border-radius: 2rem;
        border-radius: 1rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s ease;

        .subTitleQuantity {
          color: black;
        }
      }
    }

 
  }
  @media screen and (max-width: 400px) {
    .sloganDiv {
      margin-top: ${(props) => (props.preSale ? "17rem" : "18rem")};

      .sloganDivBlock {
        justify-content: center;
        .slogan {
          font-size: 2.5rem;
        }
      }

      .cozyHomeLogoDiv {
        margin-top: -1rem;
        ${(props) => (props.metaHomes ? "center" : "left")};

        .cozyHomeLogoDiv2 {
          transform: scale(0.5);
        }
      }
    }
    .messageDiv {
      margin-top: -0.5rem;
      text-align: center;

      .messageMiddleDiv {
        width: ${(props) => (props.metaHomes || props.preSale ? "90%" : "80%")};
        .message {
          display: flex;
          justify-content: left;
          font-size: 0.9rem;
          line-height: ${(props) => (props.metaHomes ? 1.1 : 1)};
          text-align: ${(props) => (props.metaHomes ? "left" : "center")};
        }
      }

      .preSaleBlock {
        margin-top: 0rem;
        width: 14rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .preSale {
          font-family: "Fredoka One", normal;
          display: flex;
          height: 3rem;
          width: 6rem;
          font-weight: 200;
          border-radius: 0.8rem;
          border-width: 2rem;
          color: white;
          border: 1.5px solid #05344e;
          font-size: 1rem;

          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .preSaleEth {
          font-family: "Fredoka One", normal;
          color: white;
          border: 1.5px solid #05344e;
          font-weight: 200;
          display: flex;
          height: 3rem;
          width: 6rem;
          border-radius: 0.8rem;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 1rem;
        }
      }
    }
    .subTitleDiv {
      margin: auto;
      margin-top: 1rem;
      width: 11rem;
      height: 3rem;
      border-radius: 1rem;

      .subTitle {
        font-size: 1.4rem;
      }
    }
    .subTitleMintBlock {
      margin-top: -3rem;
      width: 16rem;
      display: flex;
      justify-content: space-around;

      .subTitleMintDiv {
        text-align: center;
        width: 55%;
        height: 3.5rem;
        font-family: "Fredoka One", normal;
        border-radius: 2rem;
        border-radius: 1rem;
        background-color: #ff961b;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s ease;

        .subTitleMint {
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
      .subTitleQuantityDiv {
        text-align: center;
        width: 35%;
        height: 3.5rem;
        font-family: "Josefin Sans", cursive;
        border-radius: 2rem;
        border-radius: 1rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s ease;

        .subTitleQuantity {
          color: black;
        }
      }
    }
  }
`;

interface PTextDisplay extends Props {
  textDirection: Boolean;
}

const TextDisplay: React.FC<PTextDisplay> = (props) => {
  let refHeader = useRef<HTMLDivElement>(null);
  let refText = useRef<HTMLDivElement>(null);
  let refButton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refHeader.current!, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      scrollTrigger: refHeader.current!,
    });
    gsap.from(refText.current!, {
      y: 100,
      opacity: 0,
      duration: 0.2,
      delay: 0.2,
      scrollTrigger: refText.current!,
    });
    gsap.from(refButton.current!, {
      y: 200,
      opacity: 0,
      duration: .2,
      scrollTrigger: refButton.current!,
    });
  });
  const eth = useRef<String>("*");
  const leftMint = useRef<String>("*");
  const options = [1, 2, 3, 5, 10, 20, 100];
  const defaultOption = options[0];
  const defaultBuy = useRef<String>("*");

  return (
    <TextBlock
      metaHomes={props.title === "MetaHomes"}
      preSale={props.title === "Presale"}
      className={"textdisplay"}
      textDirection={props.textDirection}
    >
      <div ref={refHeader} className={"sloganDiv"}>
        {props.title !== "" ? (
          <div className={"sloganDivBlock"}>
            <h1 className={"slogan"}>{props.title}</h1>
          </div>
        ) : (
          <div ref={refHeader} className={"cozyHomeLogoDiv"}>
            <div className={"cozyHomeLogoDiv2"}>
              {/* <CozyLogo props={{}} /> */}
            </div>
          </div>
        )}
      </div>
      <div ref={refText} className={"messageDiv"}>
        <div className={"messageMiddleDiv"}>
          {props.title === "Presale" ? (
            <div className={"preSaleBlock"}>
              <h1 className={"preSale"}>{eth.current} ETH</h1>
              <h1 className={"preSaleEth"}>{leftMint.current} LEFT</h1>
            </div>
          ) : (
            props.slogan.map((value: ISlogan) => {
              return <h1 className={"message"} key={Math.random()}>{value.slogan}</h1>;
            })
          )}
        </div>
      </div>

      {props.subtitle !== "" && props.title !== "Presale" ? (
        <div
          ref={refText}
          className={"subTitleDiv"}
          onClick={() => scrollToSection("Presale-Container")}
          key={"subtitlediv"}
        >
          <h1 className={"subTitle"} key={"subtitle"}>{props.subtitle}</h1>
        </div>
      ) : (
        [
          props.title === "Presale" ? (
            <div ref={refButton} className={"subTitleMintBlock"} key={"subtitlemintblock"}>
              <div className={"subTitleMintDiv"} key={"subtitlemintdiv"}>
                <h1 className={"subTitleMint"} key={"sustitlemin"}>{props.subtitle}</h1>
              </div>
              <div className={"subTitleQuantityDiv"} key={"subtitlequantitydiv"}>
                <h1 className={"subTitleQuantity"} key={"subtitlequantity"}>{defaultBuy.current}</h1>
              </div>
            </div>
          ) : (
            <div ref={refButton} key={"divbos"}></div>
          ),
        ]
      )}
    </TextBlock>
  );
};

export default TextDisplay;
