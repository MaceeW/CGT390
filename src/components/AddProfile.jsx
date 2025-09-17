import { useState } from "react";
import '../styles/addProfile.css';

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const AddProfile = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !title || !email) {
      setError("Name, Title, and Email are required fields.");
      return;
    }

    const sanitizedProfile = {
      name: trimCollapse(stripTags(name)),
      title: trimCollapse(stripTags(title)),
      email: trimCollapse(stripTags(email)),
      img
    };

    console.log("Submitting sanitized profile:", sanitizedProfile);
    setSuccess("Profile added successfully!");

    setName("");
    setTitle("");
    setEmail("");
    setImg(null);
    e.target.reset();
  };

  return (
    <div className="add-profile">
      <h2>Add Profile</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="img">Image:</label>
        <button type="submit" >Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfile;