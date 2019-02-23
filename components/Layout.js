import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <>
    <Meta />
    <div className="main-container">
      <Header />
      <main className="wrapper">{props.children}</main>
      <Footer />
    </div>
    <style jsx>{`
      .main-container {
        min-height 100vh;
        display: flex;
        flex-direction: column;
      }

      main {
        flex: 1;
        width: 100%;
        border-radius: 2px;
        background: #ececec;
        border: 1px solid #dcdcdc;
      }
    `}</style>
  </>
);

export default Layout;
