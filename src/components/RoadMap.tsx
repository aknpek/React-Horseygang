import styled from "styled-components";
const RoadMapContainer = styled.section`
  .container {
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
  }
`
const RoadMap = () => {
    return (
        <RoadMapContainer>
            <div className="container">
                <h1>Road Map</h1>
                <article className="roadmapWrapper">
                    <div className="discourse">
                        <h2>25%</h2>
                        <div className="discourseContent right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="discourse">
                        <div className="discourseContent left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <h3>25%</h3>
                    </div>
                    <div className="discourse">
                        <h2>25%</h2>
                        <div className="discourseContent right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="discourse">
                        <div className="discourseContent left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <h3>25%</h3>
                    </div>
                    <div className="middleLine">
                        <div className="circle one" />
                        <div className="circle two" />
                        <div className="circle three" />
                        <div className="circle four" />
                    </div>
                </article>
            </div>
        </RoadMapContainer>
    )
}

export default RoadMap;