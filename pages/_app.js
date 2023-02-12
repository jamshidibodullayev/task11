import {ThemeProvider} from "@mui/material";
import theme from '../styles/theme';
import CssBaseline from "@mui/material/CssBaseline";


/// Font Awesome uchun
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
