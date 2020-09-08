import * as secondary from "./secondary"

const SecondaryFonts = `
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    src: local('Pacifico Regular'), local('Pacifico-Regular'),
        url('${secondary.WOFF2_4}') format('woff2'),
        url('${secondary.WOFF_4}') format('woff');
  }
`

export default SecondaryFonts
