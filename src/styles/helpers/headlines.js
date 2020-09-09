import { colors } from "./index"
import { fonts, fontSizer } from "./index"

// Headline Styles #1 //
export const H1Base = `
${fontSizer(3, 3.6, 76.8, 150, 2.8)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
`
export const H1White = `
  ${H1Base};
  color: ${colors.white};
`

export const H1DarkGrey = `
  ${H1Base};
  color: ${colors.greyBrown};
`

// Headline Styles #2 //
export const H2Base = `
  ${fontSizer(3, 3.6, 76.8, 150, 2.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: normal;
`
export const H2CoolGrey = `
  ${H2Base};
  color: ${colors.colorTertiary};
`

export const H2White = `
  ${H2Base};
  color: ${colors.white};
`

export const H2DarkGrey = `
  ${H2Base};
  color: ${colors.greyBrown};
`

// Headline Styles #3 //
export const H3Base = `
  ${fontSizer(3.4, 4.3, 76.8, 150, 3)}
  font-family: ${fonts.fontPrimary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
`

export const H3DarkGrey = `
  ${H3Base};
  color: ${colors.greyBrown};
`

// Headline Styles #4 //
export const H4Base = `
  ${fontSizer(1.8, 2.2, 76.8, 160, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
`
export const H4DarkGrey = `
  ${H4Base};
  color: ${colors.greyBrown};
`
