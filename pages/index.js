import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../components/protip'
import Link from '../components/link'
import Copyright from '../components/copyright'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.palette.primary.main};
`
const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>
      </div>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  )
}
export default Home
