import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import DataService from "../services/DataService";
import { db } from "../firebase";
import { collection, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

function Search() {
  const [dsata, setDsata] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const { id } = useParams();
  //const dbRef = collection(db, "contacts");
  //const databaseRef = collection(db, "contacts");
  let query = useQuery();
  let search = query.get("name");
  console.log("line 19 search", search);

  useEffect(() => {
    getAllDataFromDb();
  }, []);

  const getAllDataFromDb = async () => {
    const allData = await DataService.getAllContacts();
    setDsata({ ...allData.data() });
    console.log("line 28 ", allData);
  };

  // useEffect(() => {
  //   searchData();
  // }, [search]);

  // const searchData = () => {
  //   collection(db, "contacts").equalTo(search);
  // };

  return (
    <div>
      <h2> Search </h2>
    </div>
  );
}

export default Search;
