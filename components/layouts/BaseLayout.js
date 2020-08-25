import  Header from "../shared/Header";
const BaseLayout = props => {

  return (
    <div className="layout-container">
      <Header user={props.user}  loading={props.loading}  />
      <main className={`cover ${props.className}`}>
        <div className="wrapper">
          {props.children}
        </div>
      </main>
    </div>

  )
}


export default BaseLayout