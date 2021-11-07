import BackGroundSecond from "../svgs/BackGroundSecond";
import react from "react";
import styled from "styled-components";

const BackGroundComponentSecond = styled.div`

`;

export const BackGroundContainerSecond: react.FC = () => {
  return (
    <BackGroundComponentSecond>
      <BackGroundSecond props={{}} />
    </BackGroundComponentSecond>
  );
};

export default BackGroundContainerSecond;
