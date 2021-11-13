import Pictures from "./Locals";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const LoadingContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`

const pageVariants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
}
const Waiting = () => {
    return (
        <NavLink to="/enter">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >
                <LoadingContainer>
                    <img alt="loading" src={Pictures["loadingGif"].default} />
                </LoadingContainer>
            </motion.div>
        </NavLink>
    )
}

export default Waiting;