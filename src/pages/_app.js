import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import GlobalStyle from '../components/global-style'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <GlobalStyle />

      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default MyApp
