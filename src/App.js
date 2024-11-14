// import "./App.css";
// import "./global.css";
// import "./media.css";
// import { Route, Routes } from "react-router-dom";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Skill from "./pages/Skill";
// import Header from "./components/Header";
// import Servies from "./pages/Servies";
// import Portfolio from "./pages/Portfolio";
// import Reviews from "./pages/Reviews";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/reviews" element={<Reviews />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/servies" element={<Servies />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/skill" element={<Skill />} />
//       </Routes>
//     </div>
//   );
// }
// export default App;
import React from "react";
// import "./App.css";
import "./css/style.css";
// import "./global.css";
import "./css/media.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Home from "./component/Center";
import RightSide from "./component/RightSide";
import Center from "./component/Center";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Center />
        <RightSide />
      </div>
      {/* <Routes>
        <Route path="/" element={<Sidebar/>} />
      </Routes> */}
    </div>
  );
};

export default App;
