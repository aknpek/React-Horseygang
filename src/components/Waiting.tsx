import Pictures from "./Locals";
import styled from "styled-components";

const LoadingContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Waiting = () => {

    return (
        <LoadingContainer>
            <img src={Pictures["loadingGif"].default} />
        </LoadingContainer>
    )
}


export default Waiting;