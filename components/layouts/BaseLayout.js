const { Header } = require("../shared/Header")

 const BaseLayout =props=>{
  return(
    <>
      <Header/>
      {props.children}
    </>
  )
}


export default BaseLayout