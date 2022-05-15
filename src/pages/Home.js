import React, { useState, useEffect } from "react";
import DataService from "../services/DataService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./home.css";

const Home = () => {
  const [dataFromDb, setDataFromDb] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const dbData = await DataService.getAllContacts();
    setDataFromDb(dbData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const onDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      await DataService.deleteContact(id);
      getContacts();
      toast.success("Contact deleted successfully");
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataFromDb.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <th scope="row">{index + 1}</th>
                <td>{doc.name}</td>
                <td>{doc.email}</td>
                <td>{doc.contact}</td>
                <td>
                  <Link to={`/update/${doc.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(doc.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${doc.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
