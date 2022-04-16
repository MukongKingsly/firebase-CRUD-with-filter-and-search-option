import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import DataService from "../services/DataService";
import { db } from "../firebase";
import { collection, query, where } from "firebase/firestore";

function Search() {
  const [data, setData] = useState({});

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  //const { id } = useParams();
  //const dbRef = collection(db, "contacts");
  //const databaseRef = collection(db, "contacts");
  let query = useQuery();
  let search = query.get("name");
  console.log("search", search);

  // useEffect(
  //   (e) => {
  //     if (id) {
  //       const onSearch = async () => {
  //         try {
  //           const docSnap = await DataService.getContact(id);
  //           const q = query(
  //             databaseRef,
  //             where(search, "==", docSnap.data().name)
  //           );
  //           console.log("20: ", q);
  //           setSearchData({ ...docSnap.data() });
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       };
  //       onSearch();
  //     } else {
  //       setSearchData("");
  //     }
  //     return () => {
  //       setSearchData("");
  //     };
  //   },
  //   [id]
  // );

  useEffect(() => {
    searchData();
  }, [search]);

  const searchData = () => {
    collection(db, "contacts").equalTo(search);
  };

  return (
    <div>
      <h2> Search </h2>{" "}
    </div>
  );
}

export default Search;
