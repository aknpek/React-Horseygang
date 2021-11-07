import BackGroundFirst from "../svgs/BackGroundFirst";
import react from "react";
import styled from "styled-components";

const BackGroundComponent = styled.div``;

export const BackGroundContainer: react.FC = () => {
  return (
    <BackGroundComponent>
      <BackGroundFirst props={{}}/>
    </BackGroundComponent>
  );
};

export default BackGroundContainer;
