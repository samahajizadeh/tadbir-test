import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

function RtlTheme(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
export default RtlTheme;

// import { StyleSheetManager } from "styled-components";
// import rtlPlugin from "stylis-plugin-rtl";

// function RtlTheme(props) {
//   return (
//     <StyleSheetManager stylisPlugins={[rtlPlugin]}>
//       {props.children}
//     </StyleSheetManager>
//   );
// }
// export default RtlTheme;
