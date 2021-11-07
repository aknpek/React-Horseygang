import {
  IFirstContainer,
  IFirstWrapper,
  IGeneralWrapper,
} from "../../types";

import styled from "styled-components";

const GeneralWrapper = styled.div<IGeneralWrapper>`
  width: 100%;
  height: 100%;
`;

/* ---------------------------------------------------------------------------- */

export const FirstWrapper = styled.div<IFirstWrapper>`
  flex-direction: row;
`;
export const FirstContainer = styled.div<IFirstContainer>`
background-color: white;
z-index: 20;

  height: 100%;
  /* width: 100%auto; */

`;


export default GeneralWrapper;
