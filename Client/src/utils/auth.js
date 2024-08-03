/* Firebase */
import { app } from '../firebase'
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, collection, where, query, getDocs, addDoc } from "firebase/firestore"
import { toast } from 'react-toastify'
import toastOptions from './toastOptions'
const auth = getAuth(app)
const firestore = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

export const getUserType = async (user) => {
  if (!user.phoneNumber) {
    const usersRef1 = collection(firestore, "users");
    const q1 = query(usersRef1, where("email", "==", user.email));
    let querySnapshot = await getDocs(q1);
    if (querySnapshot.empty) {
      const usersRef2 = collection(firestore, "artists");
      const q2 = query(usersRef2, where("email", "==", user.email));
      querySnapshot = await getDocs(q2);
    }
    return querySnapshot;
  } else {
    const usersRef3 = collection(firestore, "users");
    const q3 = query(usersRef3, where("number", "==", user.phoneNumber));
    const querySnapshot = await getDocs(q3);
    return querySnapshot;
  }
}

/* Form submit by normal email and password */
export const handleSignUp = async ({ name, email, password }) => {
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    if (credentials) {
      const result = await addDoc(collection(firestore, "users"), {
        name: name,
        email: email,
        password: password,
        userType: "user"
      })
      if (result) {
        return true
      } else {
        false
      }
    }
  } catch (error) {
    console.log(err)
    return false
  }
}

export const handleGoogleAuth = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
    if (user) {
      const usersRef = collection(firestore, "users");
      const q = query(usersRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        console.log("User already exist")
        return true;
      } else {
        const result = await addDoc(collection(firestore, "users"), {
          name: user.displayName,
          email: user.email,
          userType: "user"
        })
        return true
      }
    }
  } catch (error) {
    console.log("Error Authenticating", error)
    return false
  }
}

export const handleNumberCheck = async (number) => {
  try {
    const q = query(collection(firestore, "users"));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs.find(doc => doc.data().number === number);
      if (userData) {
        toast.error("This number is already registered", toastOptions);
        return false
      } else {
        return true
      }
    }
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

export const handleVerifyOtp = async (email, number) => {
  const q = query(collection(firestore, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const userDocRef = querySnapshot.docs[0].ref;
    await updateDoc(userDocRef, {
      number
    }).then(async (res) => {
      console.log("User document updated successfully.");
      return true;
    })
  } else {
    console.log("No matching documents found.");
  }
}
