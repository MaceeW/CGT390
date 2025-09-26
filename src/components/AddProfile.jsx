import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../styles/addProfile.css';

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const AddProfile = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [img, setImg] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    setName("");
    setTitle("");
    setEmail("");
    setBio(""); 
    e.target.reset();

    navigate("/", { replace: true });
  };

  return (
    <div className="add-profile">
      <h2>Add Profile</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" placeholder="Example: Software Engineer" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="bio">Bio:</label>
        <textarea name="bio" id="bio" placeholder="Add Bio..." value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
        <label htmlFor="img">Image:</label>
        <input type="file" name="img" id="img" onChange={(e) => setImg(e.target.files[0])} accept="image/*" />
        <button type="submit" >Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfile;