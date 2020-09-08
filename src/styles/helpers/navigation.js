import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const Nav1Base = `
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  font-family: ${fonts.fontTert};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.85px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.colorSecondary};
  }
`

export const Nav1CoolGrey = `
  ${Nav1Base};
  color: ${colors.colorTertiary};
`

export const Nav1White = `
  ${Nav1Base};
  color: ${colors.greyBrown};
`
