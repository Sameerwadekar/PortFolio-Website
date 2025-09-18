import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from './Components/Navbar';
import Admin from './Components/Admin';
import { useEffect, useState } from 'react';
import AboutData from './Components/AboutData';
import About from './Components/About';
import TechStack from './Components/TechStack';
import Projects from './Components/Projects';
import ProjectData from './Components/ProjectData';
import TechStackData from './Components/TechStackData';
import Contact from './Components/Contact';

function App() {
  const [navbarInfo, setnavbarInfo] = useState({})
  const [aboutInfo, setaboutInfo] = useState({})
  const [savedProject, setSavedProject] = useState([])
  const [techStack, settechStack] = useState([])

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
          <Navbar data={navbarInfo}/>
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
    <RouterProvider router={router}/>
  );
}

export default App;
//https://www.figma.com/design/L4IOfevXrOboajIdDM1xk3/Developer-Portfolio-Design--Community-?node-id=1-4&t=lc2gWA0zYoVo6jE6-0
//resume dark light mode 