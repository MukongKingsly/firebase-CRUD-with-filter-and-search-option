import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataService from "../services/DataService";
import { toast } from "react-toastify";
import "./view.css";

function View() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const { id } = useParams();

  useEffect(
    (e) => {
      if (id) {
        const onEdit = async () => {
          try {
            const docSnap = await DataService.getContact(id);
            setUserInfo({ ...docSnap.data() });
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

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="smContainer">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />

          <strong>Name: </strong>
          <span>{userInfo.name}</span>
          <br />
          <br />

          <strong>Email: </strong>
          <span>{userInfo.email}</span>
          <br />
          <br />

          <strong>Contact: </strong>
          <span>{userInfo.contact}</span>
          <br />
          <br />

          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default View;
