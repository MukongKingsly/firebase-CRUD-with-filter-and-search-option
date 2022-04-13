import React, { useState, useEffect} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import DataService from '../services/DataService';
import "./view.css";

function View() {
  const [user, setUser] = useState({});
  const {id} = useParams();
  useEffect(() => {
    const userData = async () => {
      try {
        const docSnap = await DataService.getContact(id);
        setUser(docSnap)
        console.log(user)
      } catch (err) {
        console.log("Error occured")
      }
    }
  })
  return (
    <div>View</div>
  )
}

export default View;