import React from "react";
import { IconsWrappedStyled } from "./IconsWrapperStyled";

interface WrapperProps {
  titulo: string;
  texto: string;
  icon: React.ReactNode;
}
export const IconsWrapper: React.FC<WrapperProps> = ({
  titulo,
  texto,
  icon,
}) => {
  return (
    <React.Fragment>
      <IconsWrappedStyled>
        <span>{icon} </span>
        <h2> {titulo} </h2>
        <p> {texto} </p>
      </IconsWrappedStyled>
    </React.Fragment>
  );
};
