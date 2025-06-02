import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4 text-white-900">
        <Header />
        <h1 className="text-3xl font-bold mb-6">Alex G.'s Portfolio</h1>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default App;
