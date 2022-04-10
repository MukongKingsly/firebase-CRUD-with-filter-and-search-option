import React, { useState, useEffect } from 'react';
import DataService from '../services/DataService';
import { Link } from 'react-router-dom';
import "./home.css";
import { toast } from 'react-toastify';

const Home = () => {
  const [dataFromDb, setDataFromDb] = useState([]);
  
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const dbData = await DataService.getAllContacts();
    setDataFromDb(dbData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const onDelete = async (id, err) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      await DataService.deleteContact(id);
      getContacts();

      if (err) {
        toast.error(err)
      } else {
        toast.success("Contact Deleted successfully")
      }
    } 
    
  };
  return (
    <div style={{marginTop: "100px"}}>
        <table className="styled-table">
            <thead>
              <tr>
                <th style={{textAlign: "center"}}>No.</th>
                <th style={{textAlign: "center"}}>Name</th>
                <th style={{textAlign: "center"}}>Email</th>
                <th style={{textAlign: "center"}}>Contact</th>
                <th style={{textAlign: "center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(dataFromDb).map((id, index) => {
                return (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{dataFromDb[id].name}</td>
                    <td>{dataFromDb[id].email}</td>
                    <td>{dataFromDb[id].contact}</td>
                    <td>
                    <Link to={`/update/${id}`}>
                          <button className="btn btn-edit">Edit</button>
                    </Link>
                          <button 
                              className="btn btn-delete" 
                              onClick={() => onDelete(id)}>
                                Delete
                            </button>
                      <Link to={`/update/${id}`}>
                          <button className="btn btn-view">View</button>
                    </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
        </table>
    </div>
  )
}

export default Home;