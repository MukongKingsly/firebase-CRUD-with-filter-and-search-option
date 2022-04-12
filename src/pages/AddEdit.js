import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import DataService from "../services/DataService";
import { toast } from "react-toastify";
import "./addEdit.css";


const AddEdit = ({id, setContactId}) => {
  let navigate = useNavigate();
  const [message, setMessage] = useState ({ error: false, msg: ""});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const userInfo = {
    name,
    email,
    contact
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!userInfo.name || !userInfo.email || !userInfo.contact) {
      toast.error("Please provide value in each input field");
      return;
    } 
    try {
      if (id !== undefined && id !== "") {
        await DataService.updateContact(id, userInfo);
        setContactId("");
        setMessage({ error: false, msg: "Updated successfully!" });
        toast.success(message);
        navigate("/");
      } else {
        await DataService.addContact(userInfo);
        setMessage({ error: false, msg: "New contact added successfully!" });
        toast.success(message);
        navigate("/");
      }
        
    } catch (err) {
      setMessage({ error: true, msg:err.msg });
      toast.error(message);
    }
       setName("");
       setEmail("");
       setContact("");
  };

  const onEdit = async () => {
    setMessage("");
      try {
        const docSnap = await DataService.getContact(id);
        console.log("The recod is :", docSnap.data());
        setName(docSnap.data().name);
        setEmail(docSnap.data().email);
        setContact(docSnap.data().contact);
      } catch (err) {
        setMessage({ error: true, msg: err.message });
        toast.error(message)
      }
  }

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      onEdit();
    }
  }, [id]);

  return (
    <div style={{marginTop: "100px"}}>
        <form 
            style={{ 
              margin: "auto",
              padding: "15px",
              maxWidth: "400px",
              alignContent: "center"
              }}>
                <label htmlFor="name">Name
                    <input 
                      type="text"
                      id="name"
                      value={name}
                      placeholder="Your Name..."
                      onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="email">Email
                    <input 
                      type="email"
                      id="email"
                      value={email}
                      placeholder="Your Email..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="contact">Contact
                    <input 
                      type="number"
                      id="contact"
                      value={contact}
                      placeholder="Your Contact No..."
                      onChange={(e) => setContact(e.target.value)}
                    />
                </label>

                <input type="submit" value="Save" onClick={handleSubmit}/>
               
        </form>

    </div>
  )
}
export default AddEdit;