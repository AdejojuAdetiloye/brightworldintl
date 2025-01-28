import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useRouter } from "next/navigation"


async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      //set user to localStorage
      localStorage.setItem("user", user.uid); 
    }
    console.log("User signed in successfully: ", user);
    return user;
  } catch (error) {
    console.error("Error signing in: ", error.message);
    throw error; // Handle errors like invalid email/password, etc.
  }
}
export default signIn;
