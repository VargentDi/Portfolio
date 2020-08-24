// import '../styles/globals.css'
import '../styles/main.scss'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.getInitialProps = async ({Component,ctx} ) => {
  // const res = await fetch('')
  // const data = await res.json()
  let pageProps={}
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}
export default MyApp
