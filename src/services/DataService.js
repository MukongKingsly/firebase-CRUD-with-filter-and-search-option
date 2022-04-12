import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const dbRef = collection(db, "contacts");
class DataService {
  getAllContacts() {
    return getDocs(dbRef);
  };
  addContact(newContact) {
    return addDoc(dbRef, newContact);
  };

  updateContact(id, updatedContact) {
    const contactDoc = doc(db, "contacts", id);
    return updateDoc(contactDoc, updatedContact);
  };

  deleteContact(id) {
    const contactDoc = doc(db, "contacts", id);
    return deleteDoc(contactDoc);
  };

  getContact(id) {
    const contactDoc = doc(db, "contacts", id);
    console.log("The id here is ", id)
    return getDoc(contactDoc);
  };
}

export default new DataService();
