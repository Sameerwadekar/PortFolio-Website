import React,{useEffect, useState} from 'react'

function TechStackData() {
    const [images, setimages] = useState(()=>{
        const savedImage = localStorage.getItem("ImageInfo")
        return (savedImage) ? JSON.parse(savedImage) : [{"link":""}];
    })
    const [image, setImage] = useState({
        "link":""
    })
    useEffect(() => {
          localStorage.setItem("ImageInfo",JSON.stringify(images))
        }, [images])
    const handleChange = (e) => {
        setImage({...image,[e.target.name]:e.target.value})
    } 
    const handleSave = (e)=> {
        const updated = {...image,id:Date.now()};
      setimages([...images,updated]);
      setImage("")
    }
    const handleDelete = (id) => {
        setimages(images.filter(img => img.id !== id));
    };

  return (
  <>
    <h2>TechStackData</h2>
    <div>
        <label htmlFor="link">image link</label>
        <input type="text" name="link" id="link" onChange={handleChange} value={image.link}/>
        <button onClick={handleSave}>Save</button>
    </div>
    <div className="">
  {images.map((img) => (
    <div key={img.id}>
      <p>{img.link}</p>
      <button onClick={() => handleDelete(img.id)}>Delete</button>
    </div>
  ))}
</div>
  </>
  )
}

export default TechStackData