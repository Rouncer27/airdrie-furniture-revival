import { colors } from "./index"
import { fonts, fontSizer } from "./index"

// Body copy ONE //
export const B1Base = `
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
`
export const B1DarkGrey = `
  ${B1Base};
  color: ${colors.greyBrown};
`

// Body copy TWO //
export const B2Base = `
  ${fontSizer(2, 2.4, 76.8, 150, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`

export const B2White = `
  ${B2Base};
  color: ${colors.white};
`
export const B2DarkGrey = `
  ${B2Base};
  color: ${colors.greyBrown};
`
export const B2Pink = `
  ${B2Base};
  color: ${colors.colorPrimary};
`

// Body copy THREE //
export const B3Base = `
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  font-family: ${fonts.fontTert};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.85px;
`

export const B3DarkGrey = `
  ${B3Base};
  color: ${colors.greyBrown};
`
