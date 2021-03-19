import styled from '@emotion/styled'
import React from 'react'
import Logo from '../assets/logo.inline.svg'
import User from '../assets/user.inline.svg'

const StyledContainer = styled.div`
  display: flex;
  height: 7.2rem;
  background: ${(props) => props.theme.colors.primary};
  justify-content: space-between;
`

const StyledProfile = styled.div`
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledDivider = styled.div`
  background-color: #494e6e;
  height: 100%;
  width: 0.1rem;
`

const StyledUserSection = styled.div`
  display: flex;
`

const StyledPhotoContainer = styled.div``

const AppBar = (): JSX.Element => {
  return (
    <StyledContainer>
      <div role="button" tabIndex={0}>
        <Logo />
      </div>
      <StyledUserSection>
        <StyledDivider />
        <StyledProfile>
          <StyledPhotoContainer role="button" tabIndex={0}>
            <User />
          </StyledPhotoContainer>
        </StyledProfile>
      </StyledUserSection>
    </StyledContainer>
  )
}

export default AppBar