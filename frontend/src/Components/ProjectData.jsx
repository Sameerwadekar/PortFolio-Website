import React,{useState,useEffect} from 'react'

function ProjectData() {
    const [projects, setProjects] = useState(()=>{
        const saved = localStorage.getItem("projects");
        return saved ? JSON.parse(saved) : [{"project":" ","description":" ","tech":[],"link":" ","github":" ","image":" "}]
    })
    useEffect(() => {
      localStorage.setItem("projects",JSON.stringify(projects))
    }, [projects])
    
    const [project, setProject] = useState({
      "project":" ","description":" ","tech":[],"link":" ","github":" ","image":" "
    })
    const handleChange = (e) => {
      if(e.target.name === "tech"){
        const selected = Array.from(e.target.options)
        .filter(option => option.selected)
        .map((option)=>option.value);
        setProject({...project,tech:selected})
      } else {
        setProject({...project,[e.target.name]:e.target.value})
      }
    }
    const handleSave = (e) => {
      const newProject = {...project,id:Date.now()};
      setProjects([...projects,newProject]);
      setProject({"project":" ","description":" ","tech":[],"link":" ","github":" ","image":" "})
    }
    const handleDelete = (id) => {
      setProjects(projects.filter(pro=> pro.id !== id));
    }
  return (
    <>
    <h2>
      Project Data
    </h2>
    <form>
        <label htmlFor="project"> project</label>
        <input type="text" name='project' placeholder='project name' onChange={handleChange} value={project.project}/>
        <label htmlFor="image">project image</label>
        <input type="text" name='image' placeholder='project link' onChange={handleChange} value={project.image}/>
        <label htmlFor="description">description</label>
        <input type="text" name='description' placeholder='project description' onChange={handleChange} value={project.description}/>
        <label htmlFor="tech">TechStack</label>
        <select name="tech" multiple onChange={handleChange} id="tech" value={project.tech}>
          <option value=' HTML,'>HTML|</option>
          <option value=" CSS, ">CSS</option>
          <option value=" JAVASCRIPT,">JAVASCRIPT</option>
          <option value=" BOOTSTRAP,">BOOTSTRAP</option>
          <option value=" REACT,">REACT</option>
        </select>
        <label htmlFor="link">deployment link</label>
        <input type="text" name='link' placeholder='project link' onChange={handleChange} value={project.link}/>
        <label htmlFor="github">github</label>
        <input type="text" name='github' placeholder='github' onChange={handleChange} value={project.github}/>
        <button onClick={handleSave}>Save</button>
    </form>
    {
      projects.map((project)=>{
        return (
          <div key={project.id} className='border border-primary mt-3'>
            <h3>{project.project}</h3>
            <p>{project.image}</p>
            <p>{project.description}</p>
            <p>{project.tech}</p>
            <p>{project.link}</p>
            <p>{project.github}</p>
            <button onClick={()=>{handleDelete(project.id)}}>Delete project</button>
          </div>
        )
      })
    }
    </>
  )
}

export default ProjectData
