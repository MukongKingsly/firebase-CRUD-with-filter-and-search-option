import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ContactDataService from "../services/ContactDataService";
import { toast } from "react-toastify";
import "./addEdit.css";


const AddEdit = ({ id, setContactId }) => {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: ""
  });
  const [data, setData] = useState({});

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!userInfo.name || !userInfo.email || !userInfo.contact) {
      toast.error("Please provide value in each input field");
      return;
    } 
    try {
      if (id !== undefined && id !== "") {
        await ContactDataService.updateContact(id, userInfo);
        setContactId("");
        toast.success("Updated successfully!");
      } else {
        await ContactDataService.addContact(userInfo); 
        toast.success("New Book added successfully!");
      }
        setUserInfo("")
        setTimeout(() => navigate("/"), 500);
    } catch (err) {
      toast.error("There was an error");
    }
    
  };

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
                      name="name"
                      placeholder="Your Name..."
                      onChange={handleInputChange}
                    />
                </label>

                <label htmlFor="email">Email
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email..."
                      onChange={handleInputChange}
                    />
                </label>

                <label htmlFor="contact">Contact
                    <input 
                      type="number"
                      id="contact"
                      name="contact"
                      placeholder="Your Contact No..."
                      onChange={handleInputChange}
                    />
                </label>

                <input type="submit" value="Save" onClick={handleSubmit}/>
        </form>

    </div>
  )
}
export default AddEdit;