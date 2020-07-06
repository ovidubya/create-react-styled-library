import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../theme";

export interface ButtonProps {
  backgroundColor: keyof Colors;
  color: "white" | "black";
  borderRadius?: "square" | "circle";
  size?: "small" | "medium" | "large";
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  color,
  size = "small",
  borderRadius = "square",
}) => {
  return (
    <StyledButton
      size={size}
      borderRadius={borderRadius}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  backgroundColor: keyof Colors;
  color: "white" | "black";
  borderRadius: "square" | "circle";
  size: "small" | "medium" | "large";
}>`
  border: 0;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          padding: 10px 20px;
        `;
      case "medium":
        return css`
          padding: 15px 30px;
        `;
      case "large":
        return css`
          padding: 20px 40px;
        `;
      default:
        return css`
          padding: 10px 20px;
        `;
    }
  }}
  border-radius: ${(props) =>
    props.borderRadius === "circle" ? "6px" : "0px"};
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  color: ${(props) => props.theme.colors[props.color]};
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;
