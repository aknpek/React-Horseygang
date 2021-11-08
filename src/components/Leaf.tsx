import React from "react";

import styled from "styled-components";
import LeafSvg from "../svgs/LeafSvg";
import { motion } from "framer-motion";

const LeafContainer = styled.div`
  margin-top: 500px;
  width: 100%;
  height: 400px;
  position: absolute;
  background-color: red;
`;

const heartVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      // how many times we want to repeat the animation
      yoyo: Infinity
    }
  }
};
const Leaf: React.FC = () => {
  return (
    <LeafContainer>
      <motion.div
       transition={{
        duration: 6,
        yoyo: Infinity,
      }}
      animate={{rotate: 360, scale: Math.random()}}

      >
        <LeafSvg />
      </motion.div>
    </LeafContainer>
  );
};

export default Leaf;
