import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const Btn1Base = `
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  padding: 1.75rem 4rem;
  transition: all 0.3s ease;
  box-shadow: 0.1rem 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);
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

export const Btn1LimeGreen = `
  ${Btn1Base};
  border-color: ${colors.colorPrimary};
  background: ${colors.colorPrimary};
  color: ${colors.greyBrown};

  &:hover {
    color: ${colors.white};
    background: ${colors.colorSecondary};
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
