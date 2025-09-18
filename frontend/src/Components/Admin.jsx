import React,{ useState} from 'react'

function Admin() {
    const [form, setForm] = useState(()=>{
       const saved = localStorage.getItem("navbarInfo");
       return saved ? JSON.parse(saved) : {"phone":" ","email":" ","name":" " ,"github":" ","twitter":" ","linkedin":" "}
    })

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})  
    }
    const handleNavbarSave = () => {
    localStorage.setItem("navbarInfo",JSON.stringify(form)); 
    }
  return (
    <div>
      <div className="form">
        <h2>Navbar Data</h2>
        <div className=''>
        <label htmlFor="phone">phone number:</label>
        <input type="text" name='phone' value={form.phone} onChange={handleChange} placeholder='phone number' />
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" value={form.email} placeholder='email' onChange={handleChange}/>
        <label htmlFor="name" id='name'>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='name'/>
        <label htmlFor="github" id='github'>Github:</label>
        <input type="text" name="github" value={form.github} onChange={handleChange} placeholder='github link'/>
        <label htmlFor="twitter" id='twitter'>Twitter:</label>
        <input type="text" name="twitter" value={form.twitter} onChange={handleChange} placeholder='twitter link'/>
        <label htmlFor="linkedin" id='linkedin'>linkedin:</label>
        <input type="text" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder='linkedin link'/>
        </div>
        <button onClick={handleNavbarSave}>Save</button>
      </div>
    </div>
  )
}

export default Admin
