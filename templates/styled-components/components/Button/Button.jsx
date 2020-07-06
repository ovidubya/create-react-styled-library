import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const Button = ({
  children,
  backgroundColor,
  color,
  size = 'small',
  borderRadius = 'square'
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
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.oneOf(['primary', 'secondary', 'black', 'white']),
  color: PropTypes.oneOf(['black', 'white']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'circle'])
}

const StyledButton = styled.button`
  border: 0;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 10px 20px;
        `
      case 'medium':
        return css`
          padding: 15px 30px;
        `
      case 'large':
        return css`
          padding: 20px 40px;
        `
      default:
        return css`
          padding: 10px 20px;
        `
    }
  }}
  border-radius: ${(props) =>
    props.borderRadius === 'circle' ? '6px' : '0px'};
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  color: ${(props) => props.theme.colors[props.color]};
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`
