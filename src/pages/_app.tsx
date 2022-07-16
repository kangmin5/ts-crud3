import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from 'styles/app.module.css'
import { Nav, Footer } from 'components'
import { wrapper } from 'modules/store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.main}>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  )
  
}

export default wrapper.withRedux(MyApp) 
