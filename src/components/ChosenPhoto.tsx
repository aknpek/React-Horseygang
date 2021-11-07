import React, { useEffect, useState } from "react";

import Pictures from "./Locals";
import { motion } from "framer-motion";
import styled from "styled-components";

const PhotoComponent = styled.div`

  transition: opacity 500ms ease-in;
  -webkit-transition: 0.35s;
  -moz-transition: 0.35s;
  -ms-transition: 0.35s;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border: 0.5rem solid white;
      border-radius: 2rem;
      height: 15rem;
      width: 15rem;
    }
  }
`;
interface IChosenPhoto {
  referenceItem: number;
}

const ChosenPhoto: React.FC<IChosenPhoto> = (props) => {
  const [chosenPhoto, setChosenPhoto] = useState<any>(Pictures["sky"]);
  const photos = [
    Pictures["wall"],
    Pictures["roof"],
    Pictures["window"],
    Pictures["door"],
    Pictures["ornament"],
    Pictures["sky"],
    Pictures["background"]
  ];

  useEffect(() => {
    setChosenPhoto(photos[props.referenceItem]);
  }, [props.referenceItem]);

  return (
    <PhotoComponent className={"photosComponent"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img src={chosenPhoto.default} alt={"sky"} key={"image"} />
      </motion.div>
    </PhotoComponent>
  );
};

export default ChosenPhoto;
