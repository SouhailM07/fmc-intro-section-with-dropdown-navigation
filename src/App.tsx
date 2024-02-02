import "./style/input.css";
import "./App.css";
// components
import { MyContainer } from "./components";
//
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="this a front end mentor challenge" />
        <meta
          name="keywords"
          content="front end challenges , landing page, dropdown"
        />
        <meta name="author" content="Shadow" />
      </Helmet>
      <MyContainer />
    </>
  );
}
export default App;
