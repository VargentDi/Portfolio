// import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slate-simple-editor/dist/index.css';
import '@/styles/main.scss'



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
