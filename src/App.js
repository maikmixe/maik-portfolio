import './App.css';

import { Routes, Route } from "react-router-dom"; // Import Routes and Route for navigating between pages

//Main Pages
import AboutMe from "./components/AboutMe"; // Main page
import Projects from "./components/Projects"; // Projects page
import Contact from './components/Contact'; // Contact page

//Projects
import ProjHelpSystem from './components/ProjHelpSystem';
import ProjNonprofit from './components/ProjNonprofit';
import ProjAnimalPreserve from './components/ProjAnimalPre';

function HeaderNavigationBar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-md z-10 rounded-lg">
      <nav className="flex justify-between items-center mx-20">
        <h1 className="text-2xl font-nunito text-white">miriam's portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="font-nunito text-white hover:underline">
              about me
            </a>
          </li>
          <li>
            <a href="/projects" className="font-nunito text-white hover:underline">
              projects
            </a>
          </li>
          <li>
            <a href="/contact" className="font-nunito text-white hover:underline">
              contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div>
      <HeaderNavigationBar />
      <Routes>
        <Route path="/" element={<AboutMe />} /> {/* / so it loads on start*/}
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/projhelpsystem" element={<ProjHelpSystem />} />
        <Route path="/projnonprofit" element={<ProjNonprofit />} />
        <Route path="/projanimalpre" element={<ProjAnimalPreserve />} />
      </Routes>
    </div>
  );
}

export default App;
