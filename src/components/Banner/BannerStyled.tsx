import styled from "styled-components"
import img1 from '../../assets/image-bg.jpg'

export const BannerStyled = styled.div`
    background-image: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #fff
    }
`