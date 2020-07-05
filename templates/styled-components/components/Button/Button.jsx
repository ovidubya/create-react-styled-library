import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = ({ backgroundColor, children }) => {
  return (
    <StyledButton backgroundColor={backgroundColor}>{children}</StyledButton>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.backgroundColor};
`
