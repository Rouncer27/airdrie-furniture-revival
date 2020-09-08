import * as tertiary from "./tertiary"

const TertiaryFonts = `
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'),
        url('${tertiary.WOFF2_4}') format('woff2'),
        url('${tertiary.WOFF_4}') format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'),
        url('${tertiary.WOFF2_4I}') format('woff2'),
        url('${tertiary.WOFF_4I}') format('woff');
  }
`

export default TertiaryFonts
