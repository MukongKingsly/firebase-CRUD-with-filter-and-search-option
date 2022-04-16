import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataService from "../services/DataService";
import { toast } from "react-toastify";
import "./addEdit.css";

const AddEdit = () => {
  let navigate = useNavigate();
  const [message, setMessage] = useState({
    error: false,
    msg: "",
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const { id } = useParams();
  useEffect(
    (e) => {
      if (id) {
        const onEdit = async () => {
          try {
            const docSnap = await DataService.getContact(id);
            setUserInfo({
              ...docSnap.data(),
            });
          } catch (err) {
            toast.error("There was an error");
          }
        };
        onEdit();
      } else {
        setUserInfo("");
      }
      return () => {
        setUserInfo("");
      };
    },
    [id]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.contact) {
      toast.error("Please provide value in each input field");
      return;
    } else {
      if (!id) {
        try {
          await DataService.addContact(userInfo);
          toast.success("New contact added successfully!");
        } catch (err) {
          setMessage({
            error: true,
            msg: err.msg,
          });
          toast.error(message);
        }
      } else {
        try {
          await DataService.updateContact(id, userInfo);
          toast.success("Contact updated successfully!");
        } catch (err) {
          setMessage({
            error: true,
            msg: err.msg,
          });
          toast.error(message);
        }
      }
      setUserInfo("");
      setTimeout(() => navigate("/"), 500);
    }
  };

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      {" "}
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        {" "}
        <label htmlFor="name">
          {" "}
          Name{" "}
          <input
            type="text"
            name="name"
            value={userInfo.name || ""}
            onChange={handleChange}
            placeholder="Your Name..."
          />{" "}
        </label>
        <label htmlFor="email">
          {" "}
          Email{" "}
          <input
            type="email"
            name="email"
            value={userInfo.email || ""}
            onChange={handleChange}
            placeholder="Your Email..."
          />{" "}
        </label>
        <label htmlFor="contact">
          {" "}
          Contact{" "}
          <input
            type="number"
            name="contact"
            value={userInfo.contact || ""}
            onChange={handleChange}
            placeholder="Your Contact No..."
          />{" "}
        </label>{" "}
        <input type="submit" value={id ? "Update" : "Save"} />{" "}
      </form>{" "}
    </div>
  );
};
export default AddEdit;
