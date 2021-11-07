import Ay from '../svgs/Ay';
import { motion } from "framer-motion";
import react from 'react'
import styled from "styled-components";

const AyComponent = styled.div`
`;

export const AyContainer: react.FC = () => {
    return (
        <AyComponent>
               <motion.div
                animate={{
                  scale:  [0.9, 0.85, 0.9, 0.85, 0.9],
                  rotate: [Math.random() * 100, -Math.random() * 100, Math.random() * 100, -Math.random() * 100, Math.random() * 100],
                  opacity: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 60,
                }}
              >
                <Ay />
              </motion.div>
        </AyComponent>
    )
}
