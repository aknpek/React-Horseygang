import Pictures from "./Locals";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const LoadingContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`


const Waiting = () => {
    return (
        <NavLink to="/enter">
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    transition={{
                        duration: 2
                    }}
                    exit={{ opacity: 0 }}
                >
                    <LoadingContainer>
                        <img alt="loading" src={Pictures["loadingGif"].default} />
                    </LoadingContainer>
                </motion.div>
            </AnimatePresence>
        </NavLink>
    )
}

export default Waiting;