import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <div className="ui text container">
        <Header />
        <h1 className="ui header">Alex G.'s Portfolio</h1>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default App;
