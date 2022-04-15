import React, { useState, useEffect} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import DataService from '../services/DataService';
import { db } from '../firebase';
import "./view.css";

function View() {
  const [user, setUser] = useState({});
  const {id} = useParams();
  useEffect(() => {
    
  })
  // useEffect(() => {
  //   db.child(`contacts/${id}`).get().then((snapshot) => {
  //     if (snapshot.exists()) {
  //         setUser({...snapshot.val()});
  //     } else {
  //       setUser({});
  //     }
  //   });
  // }, [id]);
  // console.log("User ", user)
  // useEffect(() => {
  //   const userData = async () => {
  //     try {
  //       const docSnap = await DataService.getContact(id);
  //       setUser(docSnap)
  //       console.log(user)
  //     } catch (err) {
  //       console.log("Error occured")
  //     }
  //   }
  // }, [id])
  return (
    <div>View</div>
  )
}

export default View;