import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const Btn1Base = `
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  padding: 0.75rem 4rem;
  transition: all 0.3s ease;
  border: solid 0.2rem ${colors.greyBrown};
  border-radius: 0.5rem;
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.11;
  letter-spacing: normal;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn1DarkGrey = `
  ${Btn1Base};
  border-color: ${colors.greyBrown};
  background: transparent;
  color: ${colors.greyBrown};

  &:hover {
    color: ${colors.white};
    border-color: ${colors.colorAccent};
    background: ${colors.colorAccent};
  }
`

export const Btn1YellowTrans = `
  ${Btn1Base};
  border: solid 0.2rem ${colors.colorPrimary};
  background: transparent;
  color: ${colors.colorPrimary};

  &:hover {
    color: ${colors.white};
    border-color: ${colors.colorSecondary};
    background: ${colors.colorSecondary};
  }
`
