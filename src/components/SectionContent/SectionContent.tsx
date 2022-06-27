import React from "react";
import { BoxImage } from "../BoxImage/BoxImage";
import { ContentText } from "../ContentText/ContentText";
import { SectionContentStyled } from "./SectionContentStyled";

interface SectionContentProps {
    titulo: string;
    texto: string;
    urlImage: string;
    reverse?: boolean;
}

export const SectionContent: React.FC<SectionContentProps> = ({ reverse, urlImage, titulo, texto}) => {
    return (
        <SectionContentStyled ordem={reverse}>
            <ContentText titulo={titulo} texto={texto} />
            <BoxImage image={urlImage}/>
        </SectionContentStyled>
    )
}