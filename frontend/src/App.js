
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from './Components/Navbar';
import Admin from './Components/Admin';
import { useContext, useEffect, useState } from 'react';
import AboutData from './Components/AboutData';
import About from './Components/About';
import TechStack from './Components/TechStack';
import Projects from './Components/Projects';
import ProjectData from './Components/ProjectData';
import TechStackData from './Components/TechStackData';
import Contact from './Components/Contact';
import Footer from './Components/Footer'
import { ThemeContext} from './Components/themeContext';

function App() {
  const [navbarInfo, setnavbarInfo] = useState({})
  const [aboutInfo, setaboutInfo] = useState({})
  const [savedProject, setSavedProject] = useState([])
  const [techStack, settechStack] = useState([])

  const {darkMode} = useContext(ThemeContext)

  useEffect(()=>{
    const NavbarSaved = localStorage.getItem("navbarInfo");
    if(NavbarSaved){
      setnavbarInfo(JSON.parse(NavbarSaved))
    }
  },[])
  useEffect(() => {
    const AboutSaved = localStorage.getItem("AboutInfo");
    if(AboutSaved){
      setaboutInfo(JSON.parse(AboutSaved))
    }
  }, [])
  useEffect(() => {
    const ProjectSaved = localStorage.getItem("projects");
    if(ProjectSaved){
      setSavedProject(JSON.parse(ProjectSaved))
    }
  },[])
  useEffect(() => {
    const TechStack = localStorage.getItem("ImageInfo");
    if(TechStack){
      settechStack(JSON.parse(TechStack))
    }
  }, [])
  
  const router = createBrowserRouter([
    {
      path:"",
      element : (
        <>
          <Navbar data={navbarInfo}/>
          <About data={aboutInfo}/>
          <TechStack data={techStack}/>
          <Projects projectDetails={savedProject}/>
          <Contact data={navbarInfo}/>
          <Footer data={navbarInfo}/>
        </>
      )
    },
    {
      path:"/admin",
      element:(
        <>
        <Admin/>
        <AboutData/>  
        <ProjectData/>
        <TechStackData/>
        </>    
      )  
    }
  ])
  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-dark"} style={{ minHeight: "100vh" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;