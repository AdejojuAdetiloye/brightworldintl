
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase_app from "./firebaseConfig";

const db = getFirestore(firebase_app)
export default async function addBook(colllection, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}