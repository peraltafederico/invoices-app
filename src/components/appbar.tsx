import styled from '@emotion/styled'
import LogoMobile from '../assets/logo-mobile.inline.svg'
import LogoDesktop from '../assets/logo-desktop.inline.svg'
import User from '../assets/user.inline.svg'
import Moon from '../assets/moon.inline.svg'
import { MIN_LARGE_DISPLAY_MEDIA_QUERY } from '../theme/base'
import useBreakpoints from '../hooks/useBreakpoints'

const StyledContainer = styled.div`
  display: flex;
  height: 7.2rem;
  background: ${(props) => props.theme.colors.primary};
  justify-content: space-between;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    flex-direction: column;
    width: 10.3rem;
    height: 100vh;
    position: fixed;
    border-radius: 0px 20px 20px 0px;
  }
`

const StyledProfile = styled.div`
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    margin-bottom: ${(props) => props.theme.space[12]};
  }
`

const StyledDivider = styled.div`
  background-color: #494e6e;
  height: 100%;
  width: 0.1rem;

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    width: 100%;
    height: 0.1rem;
    flex-direction: column;
    align-items: center;
    margin: ${(props) => `3.2rem 0 ${props.theme.space[12]} 0`};
  }
`

const StyledUserSection = styled.div`
  display: flex;

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    flex-direction: column;
    align-items: center;
  }
`

const StyledPhotoContainer = styled.div``

const StyledThemeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.theme.space[12]};

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    margin-right: 0;
  }
`

const StyledUser = styled(User)`
  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    width: 4rem;
    height: 4rem;
  }
`

const AppBar = (): JSX.Element => {
  const { isDesktopOnly } = useBreakpoints()

  return (
    <StyledContainer>
      <div role="button" tabIndex={0}>
        {isDesktopOnly ? <LogoDesktop /> : <LogoMobile />}
      </div>
      <StyledUserSection>
        <StyledThemeContainer>
          <div role="button" tabIndex={0}>
            <Moon />
          </div>
        </StyledThemeContainer>
        <StyledDivider />
        <StyledProfile>
          <StyledPhotoContainer role="button" tabIndex={0}>
            <StyledUser />
          </StyledPhotoContainer>
        </StyledProfile>
      </StyledUserSection>
    </StyledContainer>
  )
}

export default AppBar
