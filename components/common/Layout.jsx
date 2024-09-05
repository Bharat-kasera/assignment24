import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {
  return (
    <div style={{overflowX:'scroll'}}>
      <Header />
      <main >{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
