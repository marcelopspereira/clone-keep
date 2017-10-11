import { ref, firebaseAuth } from "../constants/config";

const auth = (email, pass) =>
  firebaseAuth().createUserWithEmailAndPassword(email, pass).then(user => saveUser);

const saveUser = user =>
  ref
    .child(`users/${user.uid}/info`)
    .set({ ...user })
    .then(() => user);

const logout = () => firebaseAuth().signOut();

const login = (email, pw) =>
  firebaseAuth().signInWithEmailAndPassword(email, pw);

const resetPassword = email => firebaseAuth().sendPasswordResetEmail(email);

export { auth, saveUser, logout, login, resetPassword };
