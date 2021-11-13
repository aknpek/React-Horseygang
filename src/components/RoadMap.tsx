import styled from "styled-components";
import react, { useRef, useEffect } from "react";
import { IContainer, IPictures } from "../types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RoadMapContainer = styled.section`
  height: 1300px;
  .container {
    h2 {
      color: white;
    }
    margin: 0 auto;
    width: 85vw;

    .roadmapWrapper {
      width: 100%;
      position: relative;

      .discourse {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .discourseContent {
          display: flex;
          flex-direction: column;
          align-items: center;
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
        height: 1400px;
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
        }
      }
    }
  }
`;

interface IEachRoadMap {
  data: IPictures;
}

const EachRoadMap: React.FC<IEachRoadMap> = (props) => {
  let refEachImage = useRef<HTMLDivElement>(null);
  console.log(props);

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
  console.log(props);
  return (
    <div className="discourse" ref={refEachImage}>
      <h2>{props.data.title}</h2>
      <div className={`discourseContent ${props.data.picture_url}`}>
        {props.data.content?.map((value: string) => {
          return <li>{value}</li>;
        })}
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
          </div>
        </article>
      </div>
    </RoadMapContainer>
  );
};

export default RoadMap;
