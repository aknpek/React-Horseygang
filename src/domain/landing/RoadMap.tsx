import styled from "styled-components";
import { useRef, useEffect } from "react";
import { IContainer, IPictures } from "../../types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RoadMapContainer = styled.section`
  height: 2100px;


  .container {
    h2 {
      color: white;
      font-family: "Fredoka One", cursive;

    }
    h1 {
      text-align: center;
      color: white;
      font-size: 45px;
      font-family: "Fredoka One", cursive;
      font-weight: 400;
    }
    margin: 0 auto;
    width: 85vw;
    
    .roadmapWrapper {
      width: 100%;
      position: relative;

      .discourse {
        width: 100%;
        display: flex;
        justify-content: space-around;
        &.left {
          flex-direction: row-reverse;
          margin-right: auto;
          border-radius: 20px 0px 20px 20px;
        }
        .textContext{
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .discourseContent {
          li {
            font-size: 19px;
            font-weight: 500;
            margin: 0.5rem 1rem 0;
            padding: 0;
            font-family: "Josefin Sans", cursive;
            line-height: 30px;

          }
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 37vw;
          height: 310px;
          margin-bottom: 40px;
          background: orange;
          &.right {
            margin-left: auto;
            border-radius: 0 20px 20px 20px;
          }
          &.left {
            margin-right: auto;
            border-radius: 20px 0px 20px 20px;
          }
        }
      }
      .middleLine {
        position: absolute;
        left: calc(50% - 2px);
        top: 0;
        height: 2100px;
        width: 4px;
        background: white;
        display: block;
        .circle {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: orange;
          position: absolute;
          left: -13px;
          &.one {
            top: -2px;
          }
          &.two {
            top: 348px;
          }
          &.three {
            top: 696px;
          }
          &.four {
            top: 1044px;
          }
          &.five {
            top: 1392px;
          }
          &.six {
            top: 1740px;
          }
        }
      }
      @media screen and (max-width: 1000px) {
        .middleLine {
          display: none;
        }
        .discourse {
          display: flex;
          flex-direction: column;
          .discourseContent {
            width: 100%;
          }
          &.left {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    height: 2700px;
  }
  `;

interface IEachRoadMap {
  data: IPictures;
}

const EachRoadMap: React.FC<IEachRoadMap> = (props) => {
  let refEachImage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refEachImage.current!, {
      y: 100 * props.data.id,
      opacity: 0.1,
      scale: 0.5,
      delay: 0.1,
      duration: 0.2,
      scrollTrigger: {
        trigger: refEachImage.current!,
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className={`discourse ${props.data.picture_url}`} ref={refEachImage}>
      <div className="textContext">
        <h2>{props.data.title}</h2>
      </div>
      <div className={`discourseContent ${props.data.picture_url}`}>
        <ul>
          {props.data.content?.map((value: string) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

interface IRoadMap {
  data: IContainer;
}

const RoadMap: React.FC<IRoadMap> = (props) => {
  return (
    <RoadMapContainer>
      <div className="container">
        <h1>Road Map</h1>
        <article className="roadmapWrapper">
          {props.data.pictures.map((value: IPictures) => (
            <EachRoadMap data={value} />
          ))}
          <div className="middleLine">
            <div className="circle one" />
            <div className="circle two" />
            <div className="circle three" />
            <div className="circle four" />
            <div className="circle five" />
            <div className="circle six" />
          </div>
        </article>
      </div>
    </RoadMapContainer>
  );
};

export default RoadMap;
