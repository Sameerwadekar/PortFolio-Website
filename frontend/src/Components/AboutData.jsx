import React,{useState} from 'react'

function AboutData() {
    const [form, setform] = useState(()=>{
        const aboutSaved = localStorage.getItem("AboutInfo");
        return aboutSaved ? JSON.parse(aboutSaved) : {"name":" "}
    })
    const handleChange = (e) => {
        setform({...form,[e.target.name]:e.target.value})
    }
    const handleAboutSave = () => {
        localStorage.setItem("AboutInfo",JSON.stringify(form))
    } 
  return (
    <div>
      <h2>About Data</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" placeholder='name' value={form.name} onChange={handleChange}/>
      <button onClick={handleAboutSave}>Save</button>
    </div>
  )
}

export default AboutData

