import styled from "styled-components"
import { IContainer } from "../../types"

export const TextMain = styled.section`
    font-family: "Fredoka One", normal;
    letter-spacing: 0.05rem;
    font-weight: 400;
    color: white;
    font-size: 1.75rem;
    width: 100%;
    .mainContainer {
        max-width: 50%;
        margin: auto;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        .mainContainer {
            max-width: 80%;
        }
    }
`
interface IProps {
    data: IContainer;
}

const TextContainer: React.FC<IProps> = ({ data }) => {
    return (
        <TextMain>
            <div className="mainContainer">
                <div>
                    <h1>{data.title}</h1>
                </div>
                <div>
                    <p>{data.slogan[0].slogan}</p>
                    <p>{data.slogan[1].slogan}</p>
                    <p>{data.slogan[2].slogan}</p>
                </div>
            </div>
        </TextMain>
    )
}

export default TextContainer