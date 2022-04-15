import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import DataService from "../services/DataService";
import { toast } from "react-toastify";
import "./addEdit.css";

const AddEdit = (id) => {
  const [dataFromDb, setDataFromDb] = useState([]);
  let navigate = useNavigate();
  const [message, setMessage] = useState ({ error: false, msg: ""});
  const [userInfo, setUserInfo]= useState ({
    name: "",
    email: "",
    contact: ""
  });

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  // useEffect(() => {
  //   if (id) {
  //     setUserInfo({...dataFromDb})
    
  //   }
  // }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!userInfo.name || !userInfo.email || !userInfo.contact) {
      toast.error("Please provide value in each input field");
      return;
    } 
      else {
        try {
          if (id !== undefined && id !== "") {
            await DataService.updateContact(id, userInfo);
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
      }
       setUserInfo("")
  };

  // const onEdit = async (id) => {
  //   setMessage("");
  //     try {
  //       const docSnap = await DataService.getContact(id);
  //       setUserInfo({...docSnap})
  //       // setName(docSnap.data().name);
  //       // setEmail(docSnap.data().email);
  //       // setContact(docSnap.data().contact);
  //       console.log("line 70", userInfo)
  //     } catch (err) {
  //       setMessage({ error: true, msg: err.message });
  //       toast.error(message)
  //     }
  // }

  // useEffect(() => {
  //   console.log("The id here is 74: ", id);
  //   if (id !== undefined && id !== "") {
  //     onEdit();
  //   }
  // }, [id]);

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
                      name="name"
                      onChange={handleChange}
                      placeholder="Your Name..."                      
                    />
                </label>

                <label htmlFor="email">Email
                    <input 
                      type="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="Your Email..."                     
                    />
                </label>

                <label htmlFor="contact">Contact
                    <input 
                      type="number"
                      name="contact"
                      onChange={handleChange}
                      placeholder="Your Contact No..."                      
                    />
                </label>

                <input type="submit" value="Save" onClick={handleSubmit}/>
               
        </form>

    </div>
  )
}
export default AddEdit;