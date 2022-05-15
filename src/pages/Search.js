import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import DataService from "../services/DataService";

function Search() {
  const [dsata, setDsata] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  let search = query.get("name");

  useEffect(() => {
    getAllDataFromDb();
  }, []);

  const getAllDataFromDb = async () => {
    const allData = await DataService.getAllContacts();
    setDsata(allData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <h2>Names Found</h2>
      <Link to="/">
        <button className="btn btn-edit">Go Back</button>
      </Link>
      {dsata
        .filter((val) => {
          if (dsata === "") {
            //returns all names if nothing is typed before hitting enter
            return val;
          } else if (
            val.name.toLowerCase().includes(search.toLocaleLowerCase())
          ) {
            // returns all data containing the word user typed
            return val;
          } else {
            return "";
          }
        })
        .map((val, key) => {
          return (
            <div key={key}>
              <p>{val.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Search;
