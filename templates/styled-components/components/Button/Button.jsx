import React from 'react'
import styled, { css } from 'styled-components'
import { color } from 'styled-system'
import PropTypes from 'prop-types'

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

const StyledButton = styled.button`
  ${color}
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
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`

Button.displayName = 'Button'
Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderRadius: PropTypes.oneOf(['square', 'circle'])
}
