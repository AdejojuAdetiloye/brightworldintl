import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";


async function signUserOut() {
  try {
    await signOut(auth);  // Sign the user out
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out: ",error);
  }
}

export default signUserOut;
