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

const contactCollectionRef = collection(db, "contacts");
class ContactDataService {
  addContact = (newContact) => {
    return addDoc(contactCollectionRef, newContact);
  };

  updateContact = (id, updatedContact) => {
    const contactDoc = doc(db, "contacts", id);
    return updateDoc(contactDoc, updatedContact);
  };

  deleteContact = (id) => {
    const contactDoc = doc(db, "contacts", id);
    return deleteDoc(contactDoc);
  };

  getAllContacts = () => {
    return getDocs(contactCollectionRef);
  };

  getContact = (id) => {
    const contactDoc = doc(db, "contacts", id);
    return getDoc(contactDoc);
  };
}

export default new ContactDataService();
