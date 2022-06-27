import styled from "styled-components";

interface BoxImageProps {
    image: string;
}

export const BoxImage = styled.div<BoxImageProps>`
    width: 50%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
`