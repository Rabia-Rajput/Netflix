import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBjQMnlOQZiiPQy7WymTX5VeVPijqRWgY",
  authDomain: "netflix-clone-fdbc2.firebaseapp.com",
  projectId: "netflix-clone-fdbc2",
  storageBucket: "netflix-clone-fdbc2.appspot.com",
  messagingSenderId: "759778224042",
  appId: "1:759778224042:web:091f6bc0ba12d53681edd3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);


const signup = async (name, email, password)=>{
try {
 const res = await createUserWithEmailAndPassword(auth, email, password)
 const user = res.user;
 await addDoc(collection(db, 'user'), {
    uid:user.uid,
    name,
    authProvider:'local',
    email,   
 });
} catch (error) {
    console.log(error);
    alert(error);
}
}
const login = async (email, password)=>{
try {
   await signInWithEmailAndPassword(auth, email, password)
} catch (error) {
    console.log(error);
    alert(error);
}
}
const logout=()=>{
    signOut(auth);
}
export {auth, db, login, signup, logout};