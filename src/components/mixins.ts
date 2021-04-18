import { css, Theme } from '@emotion/react'

export const InputStyles = (props: { theme: Theme }) => css`
  width: 100%;
  height: 4.8rem;
  background: ${props.theme.colors.all.white};
  border: 1px solid ${props.theme.colors.all.violet.lavenderWeb};
  border-radius: ${props.theme.radii[4]};
  font-weight: ${props.theme.fontWeights[1]};
  padding: 0 ${props.theme.space[10]};
  font-size: ${props.theme.fontSizes[1]};
  line-height: ${props.theme.lineHeights[2]};
  letter-spacing: ${props.theme.letterSpacings[3]};
  color: ${props.theme.colors.text};

  &:focus {
    outline: none;
  }

  &:focus {
    outline: none;
    border: 1px solid ${props.theme.colors.all.violet.mediumPurple};
  }
`
