import { createGlobalStyle } from 'styled-components'
import ISOv06RegularWoff from './ISOv06-Regular.woff';
import ISOv06RegularWoff2 from './ISOv06-Regular.woff2';

import calibreWebMediumWoff from './calibre-web-medium.woff';
import calibreWebMediumWoff2 from './calibre-web-medium.woff2';

import calibreWebRegularWoff from './calibre-web-regular.woff';
import calibreWebRegularWoff2 from './calibre-web-regular.woff2';


import tiemposTextWebRegularWoff from './tiempos-text-web-regular.woff';
import tiemposTextWebRegularWoff2 from './tiempos-text-web-regular.woff2';

export default createGlobalStyles`
@font-face {
    font-family: Calibre;
    src: local(Calibre-Regular),
      url(calibre-web-regular.woff2) format("woff2"),
      url(calibre-web-regular.woff) format("woff"),
      url(calibre-web-regular.eot) format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Calibre;
    src: local(Calibre-Medium),
      url(calibre-web-medium.woff2) format("woff2"),
      url(calibre-web-medium.woff) format("woff"),
      url(calibre-web-medium.eot) format("embedded-opentype");
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: ISOv06;
    src: local(ISOv06-Regular),
      url(ISOv06-Regular.woff2) format("woff2"),
      url(ISOv06-Regular.woff) format("woff"),
      url(ISOv06-Regular.eot) format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: TiemposText;
    src: local(TiemposText-Regular),
      url(tiempos-text-web-regular.woff2) format("woff2"),
      url(tiempos-text-web-regular.woff) format("woff"),
      url(tiempos-text-web-regular.eot) format("embedded-opentype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-display: swap;
  }
  `;