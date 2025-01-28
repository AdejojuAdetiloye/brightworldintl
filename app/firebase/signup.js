import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    //add this new user to firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      password:password,
      createdAt: new Date(),
      // Add other fields as needed
    });
    console.log("User signed up successfully: ", user);
    return user; // You can return or process user info further
  } catch (error) {
    console.error("Error signing up user: ", error.message);
    throw error; // Handle errors such as email already in use, invalid email, etc.
  }
}
export default signUp;