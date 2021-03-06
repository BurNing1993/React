import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1534153695685'); /* IE9*/
  src: url('./iconfont.eot?t=1534153695685#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1534153695685') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1534153695685#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

